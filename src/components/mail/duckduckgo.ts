import { addMailButton } from ".";

export function addDuckDuckGoMailButton() {
  const header = document.querySelector("header, #header");
  if (!header) return;

  const settingsDiv = document.querySelector("section, .header--aside");
  if (!settingsDiv) return;

  addMailButton(settingsDiv as HTMLElement);
}

export function duckDuckGoPopupPosition(emailPopup: HTMLElement) {
  if (document.querySelector("#header")) {
    emailPopup.style.top = "60px";
    emailPopup.style.right = "50px";
  } else {
    emailPopup.style.top = "75px";
    emailPopup.style.right = "95px";
  }
}
