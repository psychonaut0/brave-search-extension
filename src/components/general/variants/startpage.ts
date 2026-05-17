const GOOGLE_LOGO_URL =
  "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png";

const REPLACED_MARKER = "data-sp-logo-replaced";

export function replaceStartpageToGoogleLogo() {
  // The home page logo is an inline SVG with class `startpage-logo` inside
  // the hero. The shared replaceToGoogleLogo helper handles <img>/<source>
  // and falls back to an inline-styled tiny <img> for other elements — too
  // small for the hero. Do a targeted swap instead.
  document
    .querySelectorAll<SVGSVGElement>(`svg.startpage-logo:not([${REPLACED_MARKER}])`)
    .forEach((svg) => {
      const img = document.createElement("img");
      img.src = GOOGLE_LOGO_URL;
      img.alt = "Google";
      img.style.height = "53px";
      img.style.width = "auto";
      img.style.objectFit = "contain";
      img.setAttribute(REPLACED_MARKER, "1");
      svg.replaceWith(img);
    });

  // Footer logo (rendered as <img>). Match by src so emotion class churn
  // doesn't break us.
  document
    .querySelectorAll<HTMLImageElement>(
      `img[src*="startpage-logo"]:not([${REPLACED_MARKER}])`
    )
    .forEach((img) => {
      img.src = GOOGLE_LOGO_URL;
      img.style.objectFit = "contain";
      img.setAttribute(REPLACED_MARKER, "1");
    });
}
