# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **bun** (matches CI). `vite.config.ts` is loaded as ESM — keep imports ESM, no `require()`.

- `bun install` — install deps
- `bun run dev` — runs Vite via `vite-plugin-web-extension`. The plugin loads the extension into Brave (`chromiumBinary: /usr/bin/brave` in `vite.config.ts`) and auto-opens `search.brave.com` and `duckduckgo.com`. Hardcoded Linux path; edit `vite.config.ts` on other OSes.
- `bun run build` — runs `tsc` (type-check only, `noEmit: true`) then `vite build` for the **Chromium** target. Output goes to `dist/chrome/`. Type errors fail the build.
- `bun run build:firefox` — same flow, but with `TARGET=firefox` set so the plugin picks the `{{firefox}}.` manifest entries. Output goes to `dist/firefox/`.
- `bun run build:all` — runs both. CI uses this.
- No tests, no linter configured.

Local packaging into a `.crx` (mirrors CI):
```
bash scripts/crxmake.sh dist/chrome path/to/key.pem
```

## Architecture

This is a **content-script-only** WebExtension that mutates the DOM of `search.brave.com` and `duckduckgo.com` to reskin them. `background.ts` is a stub (logs `onInstalled`); there is no popup or options page — settings UI is injected directly into the host site's own settings panel.

### Manifest is templated, not static
`src/manifest.json` uses `{{chrome}}.` / `{{firefox}}.` prefixes consumed by `vite-plugin-web-extension` to emit per-browser manifests at build time. Both targets currently declare `manifest_version: 2`. The plugin also merges `name`, `description`, and `version` from `package.json` (see `generateManifest` in `vite.config.ts`) — bump the version in `package.json`, not the manifest. Target is selected by the `TARGET` env var read in `vite.config.ts` (`TARGET=firefox` → `dist/firefox/`, anything else → `dist/chrome/`).

### Single entry point branches on host
`src/content.ts` is the only injected script. It calls `getSite()` (in `utils/functions.ts`) which returns `"brave" | "startpage" | "duckduckgo"`, and dispatches a different sequence of mutators for each. All branches end by registering operations with `observeDOMChanges(...)`.

The **startpage** branch is currently a baseline only — site-agnostic mutators (favicon, title) plus stubbed variants that quietly no-op until the host DOM selectors are confirmed. Each stub has a `TODO` marker at the call site that needs DOM inspection.

### The mutate-observe-reapply loop
`components/observer.ts#observeDOMChanges` is the spine of the extension. It:
1. Runs every operation once on initial load (done in `content.ts` before the observer registration).
2. Installs a `MutationObserver` on `document.body` that, on any childList mutation, **disconnects itself**, re-runs every registered operation, then **reconnects**.

The disconnect-during-run pattern is intentional — operations mutate the DOM and would otherwise trigger themselves recursively. When adding a new mutator, **it must be idempotent** (check "is this already applied?" before applying) because it will be invoked on every mutation. Existing functions do this by checking for the presence of a class/element they themselves add (e.g., `querySelector(".mail-button")`, `querySelector("#profile-icon")`).

### Feature / variant split
Every feature follows the same shape:
```
components/<feature>/index.ts          # cross-site logic, dispatches on getSite()
components/<feature>/variants/brave.ts
components/<feature>/variants/duckduckgo.ts
components/<feature>/variants/startpage.ts
```
The `index.ts` builds DOM structure and behavior; the `variants/*.ts` files only apply site-specific styling and positioning. The same split exists for the small widget factory in `utils/html-elements/` (button/input/select). **When adding a new injected widget or feature, follow this pattern** — don't inline site-specific styles into shared logic. Dispatch via a small map keyed by `getSite()` rather than chained `if/else` so adding the next engine is a one-line change.

### Storage-backed email shortcuts
The only persistent state is a list of `Email` records (`{ email, provider }`) in `chrome.storage.local` under key `"emails"`. `checkStorage()` initializes the key and reconciles the two UI surfaces that read it (the popup in `email/email-popup` and the settings list in `email/email-settings`); it is re-run on every mutation tick. `email-settings/index.ts` also listens to `chrome.storage.onChanged` to refresh the list when edits happen.

## CI / release flow

Both workflows install with `bun install --frozen-lockfile` and run `bun run build:all`, then publish three drop-in artifacts:
- `chrome.zip` — unpacked Chromium build, "Load unpacked" in `chrome://extensions`
- `firefox.zip` — unpacked Firefox build, loadable via `about:debugging`
- `extension.crx` — signed Chromium install, drag-and-drop onto `chrome://extensions`

- `.github/workflows/build.yml`: on PR merge into `develop`, uploads all three as workflow artifacts.
- `.github/workflows/release.yml`: on push to `master`, creates a GitHub Release tagged `v<package.json version>` and attaches all three files.

Release flow: bump `version` in `package.json` → merge to `develop` (artifacts) → merge `develop` to `master` (tagged release). Don't tag manually; the workflow does it from `package.json`.
