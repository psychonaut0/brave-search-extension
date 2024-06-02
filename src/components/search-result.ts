function addPlayIconToAnchor(anchorElement: HTMLElement) {
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

export function moveVideoThumbnail() {
  const snippets = document.querySelectorAll('.snippet[data-type="web"]');

  snippets.forEach((snippet) => {
    const anchorElement = snippet.querySelector<HTMLAnchorElement>("a[srp-el-jm-ea]");
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
        anchorImg.style.border = "1px solid #21272a";
        videoThumbElement.remove();
      }
    }
  });
}

export function moveProductThumbnail() {
  const snippets = document.querySelectorAll('.snippet[data-type="web"]');
  snippets.forEach((snippet) => {
    const anchorElement = snippet.querySelector("a[srp-el-jm-ea]");
    const productThumbElement = snippet.querySelector(".product");

    if (anchorElement && productThumbElement) {
      // Get the div with the background image that has thumb class
      const productThumbDiv = productThumbElement.querySelector<HTMLElement>(".thumb");

      if (productThumbDiv) {
        const productThumbSrc = productThumbDiv.style.backgroundImage
          .replace('url("', "")
          .replace('")', "");

        const anchorImg = anchorElement.querySelector("img");

        if (anchorImg) {
          const updateImageSrc = () => {
            anchorImg.src = productThumbSrc;
          };

          updateImageSrc();

          const observer = new MutationObserver(() => {
            if (anchorImg.src !== productThumbSrc) {
              updateImageSrc();
            }
          });

          observer.observe(anchorImg, {
            attributes: true,
            attributeFilter: ["src"],
          });

          anchorImg.style.border = "1px solid #21272a";
          productThumbDiv.parentElement?.remove();
        }
      }
    }
  });
}

export function removeBorderFromSearchResults() {
  const searchResults = document.querySelectorAll<HTMLElement>(".snippet[data-type]");
  searchResults.forEach((result) => {
    result.style.border = "1px solid transparent";
  });
}

export function editSnippetDescription() {
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
