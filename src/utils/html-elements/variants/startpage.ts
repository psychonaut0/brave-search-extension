// Startpage doesn't have a strong brand-locked component look like Brave or
// DuckDuckGo, so these styles default to a neutral dark-on-blue palette
// that matches startpage's dark theme. Calibrate once the panel selectors
// above are confirmed.

export function startpageButtonStyle(
  addButton: HTMLButtonElement,
  variant: string = "primary"
) {
  const variants: Record<
    string,
    { backgroundColor: string; hoverColor: string }
  > = {
    primary: { backgroundColor: "#2c4f97", hoverColor: "#1f3a73" },
    secondary: { backgroundColor: "#1c2331", hoverColor: "#141a26" },
    danger: { backgroundColor: "#c0392b", hoverColor: "#962d21" },
    basic: { backgroundColor: "transparent", hoverColor: "#1c2331" },
  };

  addButton.style.paddingLeft = "0.5rem";
  addButton.style.paddingRight = "0.5rem";
  addButton.style.color = "#ffffff";
  addButton.style.height = "100%";
  addButton.style.paddingTop = "0.5rem";
  addButton.style.paddingBottom = "0.5rem";
  addButton.style.display = "flex";
  addButton.style.alignItems = "center";
  addButton.style.gap = "0.25rem";
  addButton.style.border = "none";
  addButton.style.borderRadius = "0.25rem";
  addButton.style.userSelect = "none";

  addButton.style.backgroundColor = variants[variant].backgroundColor;

  addButton.addEventListener("mouseenter", () => {
    addButton.style.backgroundColor = variants[variant].hoverColor;
  });
  addButton.addEventListener("mouseleave", () => {
    addButton.style.backgroundColor = variants[variant].backgroundColor;
  });
}

export function startpageInputStyle(inputElement: HTMLInputElement) {
  inputElement.style.paddingLeft = "0.5rem";
  inputElement.style.paddingRight = "0.5rem";
  inputElement.style.paddingTop = "0.4rem";
  inputElement.style.paddingBottom = "0.4rem";
  inputElement.style.backgroundColor = "#1c2331";
  inputElement.style.color = "#ffffff";
  inputElement.style.borderRadius = "0.25rem";
  inputElement.style.border = "1px solid #2a3142";
}

export function startpageSelectStyle(selectElement: HTMLSelectElement) {
  selectElement.style.paddingLeft = "0.5rem";
  selectElement.style.paddingRight = "0.5rem";
  selectElement.style.paddingTop = "0.5rem";
  selectElement.style.paddingBottom = "0.5rem";
  selectElement.style.backgroundColor = "#1c2331";
  selectElement.style.color = "#ffffff";
  selectElement.style.borderRadius = "0.25rem";
  selectElement.style.border = "1px solid #2a3142";
}
