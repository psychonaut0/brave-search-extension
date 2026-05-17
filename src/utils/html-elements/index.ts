import { getSite } from "../functions";
import {
  braveButtonStyle,
  braveInputStyle,
  braveSelectStyle,
} from "./variants/brave";
import {
  duckDuckGoButtonStyle,
  duckDuckGoInputStyle,
  duckDuckGoSelectStyle,
} from "./variants/duckduckgo";
import {
  startpageButtonStyle,
  startpageInputStyle,
  startpageSelectStyle,
} from "./variants/startpage";

interface SelectOption {
  value: string;
  label: string;
}

function styleButton(button: HTMLButtonElement, variant: string) {
  switch (getSite()) {
    case "brave":
      return braveButtonStyle(button, variant);
    case "startpage":
      return startpageButtonStyle(button, variant);
    case "duckduckgo":
      return duckDuckGoButtonStyle(button);
  }
}

function styleInput(input: HTMLInputElement) {
  switch (getSite()) {
    case "brave":
      return braveInputStyle(input);
    case "startpage":
      return startpageInputStyle(input);
    case "duckduckgo":
      return duckDuckGoInputStyle(input);
  }
}

function styleSelect(select: HTMLSelectElement) {
  switch (getSite()) {
    case "brave":
      return braveSelectStyle(select);
    case "startpage":
      return startpageSelectStyle(select);
    case "duckduckgo":
      return duckDuckGoSelectStyle(select);
  }
}

export function htmlButton(
  content: string,
  icon: string,
  variant: "primary" | "secondary" | "basic" | "danger" = "primary",
  action: Function,
  className: string = ""
): HTMLButtonElement {
  const addButton = document.createElement("button");
  styleButton(addButton, variant);

  addButton.className = className;
  addButton.style.transition = "background-color 0.2s";
  addButton.style.cursor = "pointer";

  addButton.addEventListener("click", action as EventListener);

  if (icon !== "") {
    const iconElement = document.createElement("div");
    iconElement.style.display = "flex";
    iconElement.style.alignItems = "center";
    iconElement.style.justifyContent = "center";
    iconElement.innerHTML = icon;
    addButton.appendChild(iconElement);
  }

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
  styleInput(inputElement);
  return inputElement;
}

export function htmlSelect(options: SelectOption[]): HTMLSelectElement {
  const selectElement = document.createElement("select");
  styleSelect(selectElement);

  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.innerHTML = option.label;
    selectElement.appendChild(optionElement);
  });

  return selectElement;
}
