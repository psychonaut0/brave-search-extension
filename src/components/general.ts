import { settingsIcon } from "../utils/icons";

export function replaceBraveLogoToGoogleLogo() {
  const braveLogo = document.querySelectorAll<HTMLImageElement>("#logo img");
  braveLogo.forEach((logo) => {
    if (logo) {
      logo.src =
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png";
      logo.style.height = "80px";
    }
  });

  // Replace picture source scrset for the logo
  const braveLogoSrcset = document.querySelectorAll<HTMLSourceElement>(
    "#logo picture source"
  );

  braveLogoSrcset.forEach((logo) => {
    if (logo) {
      logo.srcset =
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png";
    }
  });

  const braveNavLogo =
    document.querySelectorAll<HTMLImageElement>(".nav-logo img");

  braveNavLogo.forEach((logo) => {
    if (logo) {
      logo.src =
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png";
    }
  });
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
