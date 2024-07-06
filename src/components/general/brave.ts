import { replaceToGoogleLogo } from ".";
import { settingsIcon } from "../../utils/icons";

export function replaceBraveToGoogleLogo() {
  const braveLogo = document.querySelectorAll<HTMLImageElement>("#logo img");
  replaceToGoogleLogo(braveLogo);

  // Replace picture source scrset for the logo
  const braveLogoSrcset = document.querySelectorAll<HTMLSourceElement>(
    "#logo picture source"
  );

  replaceToGoogleLogo(braveLogoSrcset);

  const braveNavLogo =
    document.querySelectorAll<HTMLImageElement>(".nav-logo img");

  replaceToGoogleLogo(braveNavLogo);
}

export function replaceSettingsIcon() {
  // Replace settings icon in home with profile icon
  const settingsButton = document.querySelector("#settings-button");

  const svg = settingsIcon();

  if (settingsButton && !settingsButton.querySelector("#profile-icon")) {
    settingsButton.innerHTML = svg;
  }

  // Replace settings icon in the drawer with profile icon
  const drawerSettingsPanel = document.querySelector(".SettingsDrawer");

  if (!drawerSettingsPanel) return;

  const drawerSettingsButton =
    drawerSettingsPanel.querySelector(".icon-wrapper");

  if (
    drawerSettingsButton &&
    !drawerSettingsButton.querySelector("#profile-icon")
  ) {
    drawerSettingsButton.innerHTML = svg;
  }
}
