function replaceBraveLogoToGoogleLogo() {
  const braveLogo = document.querySelectorAll("#logo img");
  braveLogo.forEach((logo) => {
    if (logo) {
      logo.src =
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png";
      logo.style.height = "80px";
    }
  });

  const braveNavLogo = document.querySelectorAll(".nav-logo img");

  braveNavLogo.forEach((logo) => {
    if (logo) {
      logo.src =
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png";
    }
  });
}

function replaceFavicon() {
  const favicons = document.querySelectorAll('link[rel="icon"]');
  favicons.forEach((favicon) => favicon.remove());

  const favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.href =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAA3lBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////7+vj98O/t9u/98cP75+ff8d7766j65IvR69HY4fD31dX63Wq84ry437jzvb6y3bH2zi66yOTvqKisvt71wwHwwQiY0ZeszG6Qzo7psAi2vymRtL2TqtR5xHjph4GLo9DrkCduvmyCnM3meHldt1tysjHjZmdMrk1lhcJFrENOnHBCq0DgVldggcBWjJxcf77gVh3cQUPZMDDXJymLmGj2AAAAFXRSTlMABRIdKzhCQ2N0gIGZp7PK3d7r8fiF+kD6AAACZ0lEQVR42qWWf1uiQBCAkcTfhKK7clpqpRep55lwkQZuYJ74/b9QiTssuyo8T73/+rzOzDrOjHSCrJRVTW8h1NI1tazIUgY5parpKIGuVZVcmlBUdXSCrhYvSvlaE52lWcufD1FqoIs0SmcCybUWSqFVk0Xj6hplcH2VYWDcxjjNkTmjPTBtNwgC1zYHOOnIicpriNExg3AP7NxhQqqxNyixyrEZ7DlCd8DeoARGvsFCLCECY2fGger5k7QGEIIjHIqpFZuCIbJssz4oREHUOCuXffHOdYNdCAZDPYRRdESx4+ztQQdj3BkuQzAAXflSqogyDGmEZfxGeBiAAVQkSdbgY5saNkaMDhiAJrO8fk1eojBgiLDMyohyNx7//b/fBx2UTllSobF+jw9OaKIMVEmDvMYHJi9x7kafB0MxEpRyM464Q8Bis+boQzESdOTtUbllypbnEXpTQrxyc1F5QpRvKNmJiUrrpPzMWnTxkecGKP1HymtkbODFNO6nnEzeyAMSwP8iZQ2KyjXM/I34jiEo/XWkvGJomGRbzolPiD/DQhC+el1JNP8fcmSKk8bTlubFml+qIErPo47VRUD3eXNUFohS4f7IU0JZTXsGxtjoTVfeBwSBvLhxYVg+dXxv5VjOyvOJT96hEjYupEIzTsPxCUgHSMT7x3aB2VCC0cc5It6zIU7lfB0BxswTJd+bGfyAFcf4vUP8pECceyyOcXFZGCPLI/4R4lkjg1sWF1YS7o1mluNY1vShy6+k9MX3RfayTAGMnyxxOBXql416KffjgwTIFc6fPYXUW0mpiMdVRRGEb5xwn8V/Atv7iP2+AAAAAElFTkSuQmCC";
  document.head.appendChild(favicon);
}

function addPlayIconToAnchor(anchorElement) {
  const overlayDiv = document.createElement("div");
  overlayDiv.style.position = "absolute";
  overlayDiv.style.width = "111px";
  overlayDiv.style.height = "82px";
  overlayDiv.style.pointerEvents = "none";
  overlayDiv.style.zIndex = "10";
  overlayDiv.style.marginBlockStart = "6px";
  overlayDiv.style.marginInlineStart = "-125px";
  overlayDiv.style.display = "flex";
  overlayDiv.style.justifyContent = "center";
  overlayDiv.style.alignItems = "center";
  overlayDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

  const playIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  playIcon.setAttribute("width", "30");
  playIcon.setAttribute("height", "30");
  playIcon.setAttribute("viewBox", "0 0 1024 1024");
  playIcon.setAttribute("fill", "white");
  playIcon.style.opacity = "0.9";

  const playPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  playPath.setAttribute(
    "d",
    "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 01-12.7-6.5V353.7a8 8 0 0112.7-6.5L656.1 506a7.9 7.9 0 010 12.9z"
  );

  playIcon.appendChild(playPath);
  overlayDiv.appendChild(playIcon);
  anchorElement.style.position = "relative";
  anchorElement.appendChild(overlayDiv);
}

function moveVideoThumbnail() {
  const snippets = document.querySelectorAll('.snippet[data-type="web"]');

  snippets.forEach((snippet) => {
    const anchorElement = snippet.querySelector("a[srp-el-jm-ea]");
    const videoThumbElement = snippet.querySelector(".video-thumb");

    if (anchorElement && videoThumbElement) {
      const videoThumbImg = videoThumbElement.querySelector("img");
      const anchorImg = anchorElement.querySelector("img");

      if (videoThumbImg && anchorImg) {
        const videoThumbSrc = videoThumbImg.src;

        const updateImageSrc = () => {
          anchorImg.src = videoThumbSrc;
        };

        updateImageSrc();

        const observer = new MutationObserver(() => {
          if (anchorImg.src !== videoThumbSrc) {
            updateImageSrc();
          }
        });

        observer.observe(anchorImg, {
          attributes: true,
          attributeFilter: ["src"],
        });

        addPlayIconToAnchor(anchorElement);
        anchorImg.style.borderRadius = "8px";
        anchorImg.style.border = "1px solid #21272a";
        videoThumbElement.remove();
      }
    }
  });
}

function changeTitle() {
  document.title = document.title
    .replace("Brave", "Google")
    .replace("Private Search Engine - ", "")
    .replace("Search", "");
}

function editSnippetDescription() {
  const searchResults = document.querySelectorAll(".snippet-description");

  searchResults.forEach((result) => {
    if (result.childNodes[0].nodeType === Node.TEXT_NODE) {
      const span = document.createElement("span");
      span.style.opacity = "0.7";
      span.textContent = result.childNodes[0].nodeValue;
      result.replaceChild(span, result.childNodes[0]);
    }

    const words = result.innerHTML.split(/\s+/);
    if (words.length > 25) {
      result.innerHTML = words.slice(0, 25).join(" ") + "...";
    }
  });
}

function removeElementByClassName(className) {
  const element = document.querySelector(`.${className}`);
  if (element) {
    element.remove();
  }
}

function removeFooter() {
  const footer = document.querySelector("footer");
  if (footer) {
    footer.remove();
  }
}

function removeBorderFromSearchResults() {
  const searchResults = document.querySelectorAll(".snippet[data-type]");
  searchResults.forEach((result) => {
    result.style.border = "1px solid transparent";
  });
}

function removeWaves() {
  document
    .querySelectorAll(".waves-top, .waves-bottom")
    .forEach((wave) => wave.remove());
}

function replaceCSSColorVariables() {
  const style = document.createElement("style");
  style.innerHTML = `
    :root {
      --color-serp-bar-bg: transparent !important; 
    }
    #searchform-actions::before {
      display: none !important;
    }
    .searchform-focused form,
    #autocomplete {
      background: #242731 !important;
    }`;

  document.head.appendChild(style);
}

function addMailButton() {
  const settingsDiv = document.querySelector(".settings.wrapper");

  if (settingsDiv && !settingsDiv.querySelector(".mail-button")) {
    const mailButton = document.createElement("a");
    mailButton.className = "mail-button";
    mailButton.href = "https://mail.google.com";
    mailButton.textContent = "Gmail";
    mailButton.style.color = "#dadfe1";
    mailButton.style.textDecoration = "none";
    mailButton.style.marginLeft = "10px";
    settingsDiv.insertBefore(mailButton, settingsDiv.firstChild);
  }
}

function observeDOMChanges() {
  const targetNode = document.body;
  const config = { childList: true, subtree: true };
  let timeout;

  const callback = (mutationsList) => {
    const operations = [
      removeElementByClassName.bind(null, "subutton-wrapper"),
      removeFooter,
      replaceBraveLogoToGoogleLogo,
      removeBorderFromSearchResults,
      removeElementByClassName.bind(null, "llm suggestion"),
      replaceFavicon,
      changeTitle,
      editSnippetDescription,
      removeWaves,
      moveVideoThumbnail,
      addMailButton,
    ];

    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        operations.forEach((operation) => operation());
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}

replaceBraveLogoToGoogleLogo();
removeElementByClassName("subutton-wrapper");
removeFooter();
removeBorderFromSearchResults();
removeElementByClassName("llm suggestion");
replaceCSSColorVariables();
replaceFavicon();
removeWaves();
editSnippetDescription();
moveVideoThumbnail();
addMailButton();
observeDOMChanges();
