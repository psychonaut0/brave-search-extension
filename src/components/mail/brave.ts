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
