import { addMailSettings, deleteEmail } from ".";
import { htmlButton } from "../../utils/html-elements";
import { trashIcon } from "../../utils/icons";
import { Email } from "../../utils/types";

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

export function braveEmailElement(email: Email) {
  const emailElement = document.createElement("div");
  emailElement.setAttribute("data-email", email.email);
  emailElement.style.display = "flex";
  emailElement.style.justifyContent = "space-between";
  emailElement.style.alignItems = "center";
  emailElement.style.width = "100%";
  emailElement.style.gap = "0.5rem";
  const emailText = document.createElement("span");
  emailText.innerHTML = email.email;

  const deleteButton = htmlButton("", trashIcon(), "danger", () => {
    deleteEmail(email);
  });

  // Append the email text and delete button to the email element if not already present

  if (document.querySelector(`[data-email="${email.email}"]`)) {
    return;
  }

  emailElement.appendChild(emailText);
  emailElement.appendChild(deleteButton);

  return emailElement;
}
