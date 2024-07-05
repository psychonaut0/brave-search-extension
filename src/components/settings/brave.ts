import { addMailSettings } from ".";

export function addBraveNewSettingsSidePanel() {
  if (document.querySelector(".user-widget")) {
    return;
  }
  // Get settings drawer element
  const settingsDrawer = document.querySelector(".settings-content");

  // Copy the widget element
  if (settingsDrawer) {
    const widgetElement = settingsDrawer.querySelector("section");

    if (widgetElement) {
      // Create a new widget changing the header and content
      const newWidgetElement = widgetElement.cloneNode(true) as HTMLElement;
      const widgetHeader = newWidgetElement.querySelector("h3");
      const content = newWidgetElement.querySelector("div");

      // Add new class to identify the new widget
      newWidgetElement.classList.add("user-widget");

      if (widgetHeader) {
        widgetHeader.innerHTML = "User Settings";
      }

      if (content) {
        // Get the section element
        addMailSettings(content);
      }

      // Prepend the new widget to the settings drawer
      settingsDrawer.insertBefore(
        newWidgetElement,
        settingsDrawer.querySelector("section")
      );
    }
  }
}
