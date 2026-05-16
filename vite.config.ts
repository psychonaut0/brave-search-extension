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

export default defineConfig({
  plugins: [
    webExtension({
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
