import { defineConfig } from "vite";
import webExtension, { readJsonFile } from "vite-plugin-web-extension";
import pkg from "./package.json" with { type: "json" };

function generateManifest() {
  const manifest = readJsonFile("src/manifest.json");
  return {
    name: pkg.name,
    description: pkg.description,
    ...manifest,
    version: pkg.version,
  };
}

const target = process.env.TARGET === "firefox" ? "firefox" : "chrome";

export default defineConfig({
  build: {
    outDir: `dist/${target}`,
    emptyOutDir: true,
  },
  plugins: [
    webExtension({
      browser: target,
      webExtConfig: {
        startUrl: ["https://search.brave.com/", "https://duckduckgo.com/"],
        chromiumBinary: "/usr/bin/brave",
      },
      manifest: generateManifest,
    }),
  ],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
});
