export function braveButtonStyle(
  addButton: HTMLButtonElement,
  variant: string = "primary"
) {
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

  addButton.style.backgroundColor = variants?.[variant].backgroundColor;

  addButton.addEventListener("mouseenter", () => {
    addButton.style.backgroundColor = variants?.[variant].hoverColor;
  });
  addButton.addEventListener("mouseleave", () => {
    addButton.style.backgroundColor = variants[variant].backgroundColor;
  });
}
