import { getSite } from "../../utils/functions";
import { braveGoogleCSS } from "./variants/brave";
import { duckduckgoGoogleCSS } from "./variants/duckduckgo";
import { startpageGoogleCSS } from "./variants/startpage";

const STYLE_ID = "google-theme-styles";

const cssBySite = {
  brave: braveGoogleCSS,
  duckduckgo: duckduckgoGoogleCSS,
  startpage: startpageGoogleCSS,
};

export function applyGoogleTheme() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = cssBySite[getSite()];
  document.head.appendChild(style);
}
