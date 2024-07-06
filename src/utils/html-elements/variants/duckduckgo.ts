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

export function duckDuckGoInputStyle(inputElement: HTMLInputElement) {
  inputElement.style.paddingLeft = "0.5rem";
  inputElement.style.paddingRight = "0.5rem";
  inputElement.style.paddingTop = "0.5rem";
  inputElement.style.paddingBottom = "0.5rem";
  inputElement.style.borderRadius = "0.25rem";
  inputElement.style.border = "none";

  inputElement.addEventListener("focus", () => {
    inputElement.style.outline = "none";
    inputElement.style.backgroundColor = "#444444";
  });
  inputElement.addEventListener("blur", () => {
    inputElement.style.backgroundColor = "#333333";
  });
}

export function duckDuckGoSelectStyle(selectElement: HTMLSelectElement) {
  selectElement.style.backgroundColor = "#333333";
  selectElement.style.color = "#eeeeee";
  selectElement.style.paddingLeft = "0.5rem";
  selectElement.style.paddingRight = "0.5rem";
  selectElement.style.paddingTop = "0.5rem";
  selectElement.style.paddingBottom = "0.5rem";
  selectElement.style.borderRadius = "0.25rem";
  selectElement.style.border = "none";

  selectElement.addEventListener("focus", () => {
    selectElement.style.outline = "none";
  });

  selectElement.addEventListener("mouseenter", () => {
    selectElement.style.backgroundColor = "#444444";
  });
  selectElement.addEventListener("mouseleave", () => {
    selectElement.style.backgroundColor = "#333333";
  });
}
