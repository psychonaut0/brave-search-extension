
export function replaceBraveLogoToGoogleLogo() {
  const braveLogo = document.querySelectorAll<HTMLImageElement>("#logo img");
  braveLogo.forEach((logo) => {
    if (logo) {
      logo.src =
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png";
      logo.style.height = "80px";
    }
  });

  const braveNavLogo = document.querySelectorAll<HTMLImageElement>(".nav-logo img");

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

  const svg = `<svg style="fill: none; stroke: #f3f5f7" id="profile-icon" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;

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