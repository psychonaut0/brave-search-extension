import { isBrave } from "../functions";
import { braveButtonStyle } from "./brave";
import { duckDuckGoButtonStyle } from "./duckduckgo";

interface SelectOption {
  value: string;
  label: string;
}

export function htmlButton(
  content: string,
  icon: string,
  variant: "primary" | "secondary" | "danger" = "primary",
  action: Function,
  className: string = ""
): HTMLButtonElement {
  // Create the add button

  const addButton = document.createElement("button");

  if (isBrave()) {
    braveButtonStyle(addButton, variant);
  } else {
    duckDuckGoButtonStyle(addButton);
  }

  addButton.className = className;
  addButton.style.transition = "background-color 0.2s";
  addButton.style.cursor = "pointer";

  addButton.addEventListener("click", action as EventListener);

  // Create the icon element
  if (icon !== "") {
    const iconElement = document.createElement("div");
    iconElement.style.display = "flex";
    iconElement.style.alignItems = "center";
    iconElement.style.justifyContent = "center";
    iconElement.innerHTML = icon;
    addButton.appendChild(iconElement);
  }

  // Create the button content
  if (content !== "") {
    if (icon !== "") {
      const contentElement = document.createElement("div");
      contentElement.innerHTML = content;
      addButton.appendChild(contentElement);
    } else {
      addButton.innerHTML = content;
    }
  }

  return addButton;
}

export function htmlInput(): HTMLInputElement {
  // Create the input element
  const inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.placeholder = "Email address";
  inputElement.style.paddingLeft = "0.5rem";
  inputElement.style.paddingRight = "0.5rem";
  inputElement.style.paddingTop = "0.25rem";
  inputElement.style.paddingBottom = "0.25rem";
  inputElement.style.backgroundColor = "#242731";
  inputElement.style.borderRadius = "0.25rem";
  inputElement.style.border = "none";

  return inputElement;
}

export function htmlSelect(options: SelectOption[]): HTMLSelectElement {
  // Create the select element
  const selectElement = document.createElement("select");
  selectElement.style.paddingLeft = "0.5rem";
  selectElement.style.paddingRight = "0.5rem";
  selectElement.style.paddingTop = "0.5rem";
  selectElement.style.paddingBottom = "0.5rem";
  selectElement.style.backgroundColor = "#242731";
  selectElement.style.borderRadius = "0.25rem";
  selectElement.style.border = "none";
  selectElement.style.color = "#ffffff";

  // Create the options
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.innerHTML = option.label;
    selectElement.appendChild(optionElement);
  });

  return selectElement;
}
