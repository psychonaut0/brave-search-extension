export function duckDuckGoButtonStyle(addButton: HTMLButtonElement) {
  addButton.style.color = "#ffffff";
  addButton.style.height = "100%";
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
