function replaceBraveLogoToGoogleLogo() {
  const braveLogo = document.getElementById("logo");
  if (braveLogo) {
    braveLogo.childNodes.forEach((child) => {
      if (child.tagName === "IMG") {
        child.src =
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png";
        child.style.height = "80px";
      }
    });
  }
  const braveNavLogo = document.getElementsByClassName("nav-logo")[0];
  if (braveNavLogo) {
    braveNavLogo.childNodes.forEach((child) => {
      if (child.tagName === "IMG")
        child.src =
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png";
    });
  }
}

function replaceFavicon() {
  // Remove all favicons
  const favicons = document.querySelectorAll('link[rel="icon"]');
  favicons.forEach((favicon) => {
    favicon.remove();
  });

  const favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.href =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAA3lBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////7+vj98O/t9u/98cP75+ff8d7766j65IvR69HY4fD31dX63Wq84ry437jzvb6y3bH2zi66yOTvqKisvt71wwHwwQiY0ZeszG6Qzo7psAi2vymRtL2TqtR5xHjph4GLo9DrkCduvmyCnM3meHldt1tysjHjZmdMrk1lhcJFrENOnHBCq0DgVldggcBWjJxcf77gVh3cQUPZMDDXJymLmGj2AAAAFXRSTlMABRIdKzhCQ2N0gIGZp7PK3d7r8fiF+kD6AAACZ0lEQVR42qWWf1uiQBCAkcTfhKK7clpqpRep55lwkQZuYJ74/b9QiTssuyo8T73/+rzOzDrOjHSCrJRVTW8h1NI1tazIUgY5parpKIGuVZVcmlBUdXSCrhYvSvlaE52lWcufD1FqoIs0SmcCybUWSqFVk0Xj6hplcH2VYWDcxjjNkTmjPTBtNwgC1zYHOOnIicpriNExg3AP7NxhQqqxNyixyrEZ7DlCd8DeoARGvsFCLCECY2fGger5k7QGEIIjHIqpFZuCIbJssz4oREHUOCuXffHOdYNdCAZDPYRRdESx4+ztQQdj3BkuQzAAXflSqogyDGmEZfxGeBiAAVQkSdbgY5saNkaMDhiAJrO8fk1eojBgiLDMyohyNx7//b/fBx2UTllSobF+jw9OaKIMVEmDvMYHJi9x7kafB0MxEpRyM464Q8Bis+boQzESdOTtUbllypbnEXpTQrxyc1F5QpRvKNmJiUrrpPzMWnTxkecGKP1HymtkbODFNO6nnEzeyAMSwP8iZQ2KyjXM/I34jiEo/XWkvGJomGRbzolPiD/DQhC+el1JNP8fcmSKk8bTlubFml+qIErPo47VRUD3eXNUFohS4f7IU0JZTXsGxtjoTVfeBwSBvLhxYVg+dXxv5VjOyvOJT96hEjYupEIzTsPxCUgHSMT7x3aB2VCC0cc5It6zIU7lfB0BxswTJd+bGfyAFcf4vUP8pECceyyOcXFZGCPLI/4R4lkjg1sWF1YS7o1mluNY1vShy6+k9MX3RfayTAGMnyxxOBXql416KffjgwTIFc6fPYXUW0mpiMdVRRGEb5xwn8V/Atv7iP2+AAAAAElFTkSuQmCC";
  document.head.appendChild(favicon);
}

function changeTitle() {
  const title = document.title;
  document.title = `${title
    .replace("Brave", "Google")
    .replace("Private Search Engine - ", "")}`.replace("Search", "");
}

function editSnippetDescription() {
  const searchResults = document.getElementsByClassName("snippet-description");

  // Edit the date of the search results
  Array.from(searchResults).forEach((result) => {
    if (result.childNodes[0].nodeType === Node.TEXT_NODE) {
      const span = document.createElement("span");
      span.style.opacity = "0.7";
      span.textContent = result.childNodes[0].nodeValue;
      result.replaceChild(span, result.childNodes[0]);
    }

    // const originalContent = result.innerHTML;
    // const words = originalContent.split(/\s+/);

    // if (words.length > 25) {
    //   let wordCount = 0;
    //   let truncatedContent = "";

    //   for (let i = 0; i < words.length; i++) {
    //     truncatedContent += words[i] + " ";
    //     wordCount++;
    //     if (wordCount >= 25) {
    //       truncatedContent += "...";
    //       break;
    //     }
    //   }

    //   result.innerHTML = truncatedContent.trim();
    // }
  });
}

function removeAiButton() {
  const aiButton = document.getElementsByClassName("subutton-wrapper")[0];
  if (aiButton) {
    aiButton.remove();
  }
}

function removeFooter() {
  const footer = document.getElementsByTagName("footer")[0];
  if (footer) {
    footer.remove();
  }
}

function removeBorderFromSearchResults() {
  const searchResults = document.getElementsByClassName("snippet");
  // Filter snippets different from  data-type="web"
  const webSearchResults = Array.from(searchResults).filter((result) => {
    return (
      result.getAttribute("data-type") === "web" ||
      result.getAttribute("data-type") === "video" ||
      result.getAttribute("data-type") === "image" ||
      result.getAttribute("data-type") === "news" ||
      result.getAttribute("data-type") === "shopping" ||
      result.getAttribute("data-type") === "book"
    );
  });
  webSearchResults.forEach((result) => {
    result.style.border = "1px solid transparent";
  });
}

function removeLlmButton() {
  const llmButton = document.getElementsByClassName("llm suggestion")[0];

  if (llmButton) {
    llmButton.remove();
  }
}

function removeWaves() {
  const waves = document.getElementsByClassName("waves-top");
  Array.from(waves).forEach((wave) => {
    wave.remove();
  });

  const wavesBottom = document.getElementsByClassName("waves-bottom");
  Array.from(wavesBottom).forEach((wave) => {
    wave.remove();
  });
}

function replaceCSSColorVariables() {
  const style = document.createElement("style");
  style.innerHTML = `
    :root {
      --color-serp-bar-bg: transparent !important; 
    }`;

  document.head.appendChild(style);

  const style2 = document.createElement("style");
  style2.innerHTML = `
    #searchform-actions::before {
      display: none !important;
    }
    
    .searchform-focused form {
      background: #242731 !important;
    }

    #autocomplete {
      background: #242731 !important;
    }
    `;

  document.head.appendChild(style2);
}

function observeDOMChanges() {
  const targetNode = document.body;
  const config = { childList: true, subtree: true };

  const callback = (mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        removeAiButton();
        removeFooter();
        replaceBraveLogoToGoogleLogo();
        removeBorderFromSearchResults();
        removeLlmButton();
        replaceFavicon();
        changeTitle();
        editSnippetDescription();
        removeWaves();
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}

replaceBraveLogoToGoogleLogo();
removeAiButton();
removeFooter();
removeBorderFromSearchResults();
removeLlmButton();
replaceCSSColorVariables();
replaceFavicon();
removeWaves();
editSnippetDescription();
observeDOMChanges();
