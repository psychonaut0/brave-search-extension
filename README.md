# Brave Search Mod

A cross-browser WebExtension that restyles privacy-respecting search engines with a Google-like theme. It aims to lower the visual friction of switching away from Google Search by making familiar UI patterns available on **Brave Search**, **DuckDuckGo**, and **Startpage**.

The extension is content-script only: it mutates the host site's DOM and injects a small amount of CSS. No telemetry, no network calls, no remote configuration.

## Supported sites

| Engine        | Status                                                                 |
| ------------- | ---------------------------------------------------------------------- |
| Brave Search  | Full support (theme, logo, search results, settings panel, mail menu)  |
| DuckDuckGo    | Theme, logo, header cleanup, mail menu, settings                       |
| Startpage     | Baseline (favicon, title, theme); site-specific variants in progress   |

## Features

- Google-style color tokens applied across SERP and home page
- Engine logo replaced with a Google-style wordmark
- Customizable list of e-mail shortcuts (Gmail-style entry point) stored in `chrome.storage.local`
- Settings UI injected directly into the host site's own settings panel — no popup or options page
- Removes noisy promotional elements (premium CTAs, LLM suggestions, decorative waves, etc.)

## Installation

Release artifacts are published on the [Releases page](https://github.com/psychonaut0/brave-search-extension/releases):

- **Chromium / Brave** — drag-and-drop `extension.crx` onto `chrome://extensions` (Developer mode enabled), or load `chrome.zip` unpacked.
- **Firefox** — open `about:debugging` → *This Firefox* → *Load Temporary Add-on*, and select the manifest inside the unpacked `firefox.zip`.

## Development

Requirements: [Bun](https://bun.sh/) (matches CI).

```bash
bun install
```

### Live development

Two flavors, depending on whether you want a throwaway browser or your real one:

```bash
bun run dev              # launches a fresh Brave with the extension, auto-rebuilds on save
bun run dev:firefox      # same, but Firefox

bun run dev:watch        # rebuilds dist/chrome/ on save without launching a browser
bun run dev:watch:firefox
```

`bun run dev` uses a hardcoded Linux path to Brave (`/usr/bin/brave`) defined in `vite.config.ts` — adjust it for other OSes. The `:watch` variants are intended to be paired with a real browser profile via `chrome://extensions` → *Load unpacked* → `dist/chrome`.

### Build

```bash
bun run build            # type-check + build Chromium target -> dist/chrome/
bun run build:firefox    # same for Firefox -> dist/firefox/
bun run build:all        # both (CI uses this)
```

There are no tests and no linter configured. Type errors fail the build.

## Project layout

```
src/
  content.ts             # single entry point, dispatches by host
  background.ts          # stub (logs onInstalled)
  manifest.json          # templated; {{chrome}}./{{firefox}}. prefixes
  components/
    <feature>/
      index.ts           # cross-site logic
      variants/
        brave.ts
        duckduckgo.ts
        startpage.ts     # site-specific styling and positioning
  utils/
```

Every feature follows the same `index.ts` + `variants/<site>.ts` split. The spine of the extension is `components/observer.ts`, which re-runs all registered mutators on any DOM change (operations must be idempotent).

See [`CLAUDE.md`](./CLAUDE.md) for a deeper architectural overview.

## Release flow

1. Bump `version` in `package.json`.
2. Merge to `develop` — `build.yml` publishes `chrome.zip`, `firefox.zip`, and `extension.crx` as workflow artifacts.
3. Merge `develop` into `master` — `release.yml` creates a GitHub Release tagged `v<version>` and attaches the three artifacts.

Tags are produced by CI; do not tag manually.
