export function addDuckDuckNewSettings() {
  if (window.location.pathname !== "/settings") return;

  const settingsDrawer = document.querySelector(".set-head__menu");
  if (!settingsDrawer) return;

  // clone the first child of the settings drawer
  const widgetElement = settingsDrawer.querySelector("a");
  if (!widgetElement) return;

  widgetElement.innerHTML = "Custom";

  if (window.location.hash === "#general" || window.location.hash === "") {
    const settingsContent = document.querySelector(".frm") as HTMLFormElement;
    console.log(settingsContent);
    if (!settingsContent) return;

    const newWidgetElement = document.createElement("div");
    newWidgetElement.classList.add("frm__field");
    newWidgetElement.classList.add("fix");

    settingsContent.prepend(newWidgetElement);
  }
}
