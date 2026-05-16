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

function pinImageSrc(img: HTMLImageElement, src: string) {
  img.src = src;
  // Brave/DDG sometimes re-set the src after our initial swap; observe just
  // that one <img> to keep it pinned. Marker attribute prevents stacking
  // observers across observer-loop ticks.
  if (img.dataset.srcPinned === "1") return;
  img.dataset.srcPinned = "1";

  const obs = new MutationObserver(() => {
    if (img.src !== src) img.src = src;
  });
  obs.observe(img, { attributes: true, attributeFilter: ["src"] });
}

export function moveVideoThumbnail() {
  const snippets = document.querySelectorAll<HTMLElement>(
    '.snippet[data-type="web"]:not([data-video-thumb-moved])'
  );

  snippets.forEach((snippet) => {
    const anchorElement = snippet.querySelector<HTMLAnchorElement>("a[srp-el-jm-ea]");
    const videoThumbElement = snippet.querySelector(".video-thumb");
    if (!anchorElement || !videoThumbElement) return;

    const videoThumbImg = videoThumbElement.querySelector("img");
    const anchorImg = anchorElement.querySelector("img");
    if (!videoThumbImg || !anchorImg) return;

    pinImageSrc(anchorImg, videoThumbImg.src);
    addPlayIconToAnchor(anchorElement);
    videoThumbElement.remove();
    snippet.dataset.videoThumbMoved = "1";
  });
}

export function moveProductThumbnail() {
  const snippets = document.querySelectorAll<HTMLElement>(
    '.snippet[data-type="web"]:not([data-product-thumb-moved])'
  );

  snippets.forEach((snippet) => {
    const anchorElement = snippet.querySelector("a[srp-el-jm-ea]");
    const productThumbElement = snippet.querySelector(".product");
    if (!anchorElement || !productThumbElement) return;

    const productThumbDiv = productThumbElement.querySelector<HTMLElement>(".thumb");
    if (!productThumbDiv) return;

    const productThumbSrc = productThumbDiv.style.backgroundImage
      .replace('url("', "")
      .replace('")', "");

    const anchorImg = anchorElement.querySelector("img");
    if (!anchorImg) return;

    pinImageSrc(anchorImg, productThumbSrc);
    productThumbDiv.parentElement?.remove();
    snippet.dataset.productThumbMoved = "1";
  });
}

export function editSnippetDescription() {
  const snippets = document.querySelectorAll<HTMLElement>(
    ".snippet-description:not([data-edited])"
  );

  snippets.forEach((result) => {
    if (result.childNodes[0]?.nodeType === Node.TEXT_NODE) {
      const span = document.createElement("span");
      span.style.opacity = "0.7";
      span.textContent = result.childNodes[0].nodeValue;
      result.replaceChild(span, result.childNodes[0]);
    }

    const words = result.innerHTML.split(/\s+/);
    if (words.length > 25) {
      result.innerHTML = words.slice(0, 25).join(" ") + "...";
    }

    result.dataset.edited = "1";
  });
}
