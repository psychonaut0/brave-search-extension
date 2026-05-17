import { emailPopupButton } from "..";

// The right-aligned nav container on home is `.nav-app-promo` (a flex row
// ending in the hamburger button). The helper sets flex styles on the
// container and inserts the mail button as the first child, putting it to
// the left of the hamburger.
//
// TODO: confirm the same container shows up on the SERP — startpage's
// SERP HTML hasn't been inspected yet. If it doesn't, fall back to a
// broader selector or add a SERP-specific case.
export function addStartpageMailButton() {
  const settingsDiv = document.querySelector<HTMLElement>(".nav-app-promo");
  if (!settingsDiv) return;
  emailPopupButton(settingsDiv);
}

export function startpagePopupPosition(emailPopup: HTMLElement) {
  // The header (`#home-top-header`) is absolute-positioned, roughly 64px
  // tall on home. Anchor under the right edge of the nav, just below the
  // header bottom edge with a few px breathing room.
  emailPopup.style.top = "60px";
  emailPopup.style.right = "60px";
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
