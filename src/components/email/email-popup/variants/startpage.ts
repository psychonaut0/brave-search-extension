import { emailPopupButton } from "..";

// TODO: pick the right anchor element from startpage's header. The search
// page and the home page have different shells; the selectors here cover
// the obvious header containers as a starting point.
export function addStartpageMailButton() {
  const settingsDiv = document.querySelector<HTMLElement>(
    "header .header-right, .nav-right, #header-right"
  );
  if (!settingsDiv) return;
  emailPopupButton(settingsDiv);
}

export function startpagePopupPosition(emailPopup: HTMLElement) {
  // TODO: calibrate against real header height once selectors above are
  // confirmed.
  emailPopup.style.top = "60px";
  emailPopup.style.right = "20px";
}

export function startpagePopupStyle(emailPopup: HTMLElement) {
  emailPopup.style.backgroundColor = "#1c2331";
  emailPopup.style.borderRadius = "8px";
  emailPopup.style.color = "white";
}

export function startpageEmailElementStyle(
  emailElement: HTMLElement,
  profilePicture: HTMLImageElement
) {
  emailElement.style.paddingTop = ".2rem";
  emailElement.style.paddingBottom = ".2rem";
  emailElement.style.gap = "8px";
  emailElement.style.height = "44px";

  emailElement.onmouseover = () => {
    emailElement.style.backgroundColor = "#2a3142";
  };

  profilePicture.style.width = "28px";
  profilePicture.style.height = "28px";
}
