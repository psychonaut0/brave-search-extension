import { replaceToGoogleLogo } from ".";

export function replaceDuckDuckGoToGoogleLogo() {
  console.log("HERE");
  const duckduckgoLogo = document.querySelectorAll<HTMLImageElement>(
    'img[alt="DuckDuckGo Logo"]'
  );
  replaceToGoogleLogo(duckduckgoLogo);

  const duckduckgoLogoBackgroundImage =
    document.querySelectorAll<HTMLSpanElement>(".header__logo");

  replaceToGoogleLogo(duckduckgoLogoBackgroundImage);
}
