import { isBrave } from "../functions";
import { braveButtonStyle, braveInputStyle, braveSelectStyle } from "./brave";
import {
  duckDuckGoButtonStyle,
  duckDuckGoInputStyle,
  duckDuckGoSelectStyle,
} from "./duckduckgo";

interface SelectOption {
  value: string;
  label: string;
}

export function htmlButton(
  content: string,
  icon: string,
  variant: "primary" | "secondary" | "basic" | "danger" = "primary",
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

export function htmlInput(
  placeholder: string = "",
  type: string = "text"
): HTMLInputElement {
  const inputElement = document.createElement("input");
  inputElement.type = type;
  inputElement.placeholder = placeholder;
  if (isBrave()) {
    braveInputStyle(inputElement);
  } else {
    duckDuckGoInputStyle(inputElement);
  }

  return inputElement;
}

export function htmlSelect(options: SelectOption[]): HTMLSelectElement {
  const selectElement = document.createElement("select");

  if (isBrave()) {
    braveSelectStyle(selectElement);
  } else {
    duckDuckGoSelectStyle(selectElement);
  }

  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.innerHTML = option.label;
    selectElement.appendChild(optionElement);
  });

  return selectElement;
}
