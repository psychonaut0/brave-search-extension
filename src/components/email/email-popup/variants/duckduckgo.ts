import { emailPopupButton } from "..";

export function addDuckDuckGoMailButton() {
  const header = document.querySelector("header, #header");
  if (!header) return;

  const settingsDiv = document.querySelector("section, .header--aside");
  if (!settingsDiv) return;

  emailPopupButton(settingsDiv as HTMLElement);
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

export function duckDuckGoPopupStyle(emailPopup: HTMLElement) {
  emailPopup.style.backgroundColor = "#1c1c1c";
  emailPopup.style.borderRadius = "8px";
  emailPopup.style.color = "white";
}

export function duckDuckGoEmailElementStyle(
  emailElement: HTMLElement,
  profilePicture: HTMLImageElement
) {
  emailElement.style.paddingTop = ".1rem";
  emailElement.style.paddingBottom = ".1rem";
  emailElement.style.gap = "4px";
  emailElement.style.height = "40px";

  emailElement.onmouseover = () => {
    emailElement.style.backgroundColor = "#282828";
    emailElement.style.textDecoration = "underline";
  };
  emailElement.onmouseout = () => {
    emailElement.style.backgroundColor = "transparent";
    emailElement.style.textDecoration = "none";
  };

  profilePicture.style.width = "24px";
  profilePicture.style.height = "24px";
}
