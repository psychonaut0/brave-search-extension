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
