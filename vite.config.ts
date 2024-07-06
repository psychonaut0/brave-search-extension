import { defineConfig } from "vite";
import webExtension, { readJsonFile } from "vite-plugin-web-extension";

function generateManifest() {
  const manifest = readJsonFile("src/manifest.json");
  const pkg = readJsonFile("package.json");
  return {
    name: pkg.name,
    description: pkg.description,
    ...manifest,
    version: pkg.version,
  };
}

// https://vitejs.dev/config/
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
    __APP_VERSION__: JSON.stringify(require("./package.json").version),
  },
});
