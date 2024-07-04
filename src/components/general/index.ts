import { settingsIcon } from "../../utils/icons";

export function replaceToGoogleLogo(
  logoToReplace: NodeListOf<HTMLImageElement | HTMLSourceElement | HTMLElement>
) {
  if (!logoToReplace) return;
  logoToReplace.forEach((logo) => {
    logo.style.height = "80px";
    logo.style.objectFit = "contain";
    // If the logo is an image
    if (logo instanceof HTMLImageElement) {
      logo.src =
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png";
    } else if (logo instanceof HTMLSourceElement) {
      logo.srcset =
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png";
    } else {
      // Replace element with an img element
      const img = document.createElement("img");
      img.src =
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png";
      img.style.height = "25px";
      img.style.objectFit = "contain";
      img.style.padding = "0 1.5rem";
      logo.parentElement?.replaceChild(img, logo);
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
