import { replaceToGoogleLogo } from ".";

export function replaceBraveToGoogleLogo() {
  const braveLogo = document.querySelectorAll<HTMLImageElement>("#logo img");
  replaceToGoogleLogo(braveLogo);

  // Replace picture source scrset for the logo
  const braveLogoSrcset = document.querySelectorAll<HTMLSourceElement>(
    "#logo picture source"
  );

  replaceToGoogleLogo(braveLogoSrcset);

  const braveNavLogo =
    document.querySelectorAll<HTMLImageElement>(".nav-logo img");

  replaceToGoogleLogo(braveNavLogo);
}
