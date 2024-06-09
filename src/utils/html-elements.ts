export function htmlButton(
  content: string,
  icon: string,
  variant: "primary" | "secondary" | "danger" = "primary",
  action: Function
): HTMLButtonElement {
  // Create the add button

  const variants: Record<
    string,
    { backgroundColor: string; hoverColor: string }
  > = {
    primary: {
      backgroundColor: "#3f39e8",
      hoverColor: "#2b27b6",
    },
    secondary: {
      backgroundColor: "#242731",
      hoverColor: "#1a1d24",
    },
    danger: {
      backgroundColor: "#e83f39",
      hoverColor: "#b62b27",
    },
  };

  const addButton = document.createElement("button");
  addButton.style.paddingLeft = "0.5rem";
  addButton.style.paddingRight = "0.5rem";
  addButton.style.height = "100%";
  addButton.style.paddingTop = "0.5rem";
  addButton.style.paddingBottom = "0.5rem";
  addButton.style.display = "flex";
  addButton.style.alignItems = "center";
  addButton.style.gap = "0.5rem";
  addButton.style.backgroundColor = variants[variant].backgroundColor;
  addButton.style.border = "none";
  addButton.style.borderRadius = "0.25rem";
  addButton.style.userSelect = "none";

  // Hover effect
  addButton.style.transition = "background-color 0.2s";
  addButton.style.cursor = "pointer";
  addButton.addEventListener("mouseenter", () => {
    addButton.style.backgroundColor = variants[variant].hoverColor;
  });
  addButton.addEventListener("mouseleave", () => {
    addButton.style.backgroundColor = variants[variant].backgroundColor;
  });

  addButton.addEventListener("click", action as EventListener);

  // Create the icon element
  if (icon !== "") {
    const iconElement = document.createElement("div");
    iconElement.innerHTML = icon;
    addButton.appendChild(iconElement);
  }

  // Create the button content
  if (content !== "") {
    const contentElement = document.createElement("span");
    contentElement.innerHTML = content;
    addButton.appendChild(contentElement);
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
