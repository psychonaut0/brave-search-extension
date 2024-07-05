export function duckDuckGoButtonStyle(addButton: HTMLButtonElement) {
  addButton.style.paddingLeft = "0.5rem";
  addButton.style.paddingRight = "0.5rem";
  addButton.style.color = "#ffffff";
  addButton.style.height = "100%";
  addButton.style.paddingTop = "0.5rem";
  addButton.style.paddingBottom = "0.5rem";
  addButton.style.display = "flex";
  addButton.style.alignItems = "center";
  addButton.style.gap = "0.5rem";
  addButton.style.border = "none";
  addButton.style.borderRadius = "0.25rem";
  addButton.style.userSelect = "none";
  addButton.style.backgroundColor = "transparent";

  addButton.addEventListener("mouseenter", () => {
    addButton.style.textDecoration = "underline";
  });
  addButton.addEventListener("mouseleave", () => {
    addButton.style.textDecoration = "none";
  });
}
