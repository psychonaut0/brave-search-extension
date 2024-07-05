import { addMailButton } from ".";

export function addBraveMailButton() {
  const settingsDiv: HTMLElement | null = document.querySelector("#settings");

  if (!settingsDiv) return;
  addMailButton(settingsDiv);
}

export function bravePopupPosition(emailPopup: HTMLElement) {
  const searchbarHome = document.querySelector("#searchbar-home");
  if (searchbarHome) {
    emailPopup.style.top = "75px";
    emailPopup.style.right = "70px";
  } else {
    emailPopup.style.top = "74px";
    emailPopup.style.right = "70px";
  }
}

export function bravePopupStyle(emailPopup: HTMLElement) {
  emailPopup.style.backgroundColor = "#242731";
  emailPopup.style.borderRadius = "8px";
  emailPopup.style.color = "white";
}

export function braveEmailElementStyle(
  emailElement: HTMLElement,
  profilePicture: HTMLImageElement
) {
  emailElement.style.paddingTop = ".2rem";
  emailElement.style.paddingBottom = ".2rem";
  emailElement.style.gap = "8px";
  emailElement.style.height = "48px";

  emailElement.onmouseover = () => {
    emailElement.style.backgroundColor = "#343847";
  };

  profilePicture.style.width = "32px";
  profilePicture.style.height = "32px";
}
