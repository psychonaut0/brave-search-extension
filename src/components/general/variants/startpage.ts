import { replaceToGoogleLogo } from "..";

// TODO: confirm by inspecting startpage.com home + SERP DOM. The selectors
// below are best-guess placeholders covering both pages.
export function replaceStartpageToGoogleLogo() {
  const logos = document.querySelectorAll<HTMLImageElement>(
    'img[alt*="Startpage" i], img[src*="startpage-logo" i], .logo img'
  );
  replaceToGoogleLogo(logos);
}
