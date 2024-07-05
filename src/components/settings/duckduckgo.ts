export function addDuckDuckNewSettings() {
  const settingsDrawer = document.querySelector(".set-head__menu");
  if (!settingsDrawer) return;

  // clone the first child of the settings drawer
  const widgetElement = settingsDrawer.querySelector("a");
  if (!widgetElement) return;

  widgetElement.innerHTML = "Custom";
}
