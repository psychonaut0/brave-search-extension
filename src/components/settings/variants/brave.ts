import { addMailSettings, deleteEmail } from "..";
import { htmlButton } from "../../../utils/html-elements";
import { trashIcon } from "../../../utils/icons";
import { Email } from "../../../utils/types";

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

export function braveEmailSettingsHeader(newSectionElement: HTMLElement) {
  // Remove all in the section element instead of div with class info
  const info = newSectionElement.querySelector(".info") as HTMLElement;
  if (info) {
    info.style.width = "100%";
    newSectionElement.innerHTML = "";
    newSectionElement.appendChild(info);
  }

  newSectionElement.style.flexDirection = "column";

  // Edit the new section element header
  const header = newSectionElement.querySelector(".text");
  if (header) {
    // Edit the h3
    const h3 = header.querySelector("h3");
    if (h3) {
      h3.innerHTML = "Mail Settings";
    }
    // Edit the icon
    const icon = newSectionElement.querySelector("svg");
    if (icon) {
      icon.setAttribute("viewBox", "0 0 24 24");
      icon.setAttribute("fill", "none");
      icon.setAttribute("stroke", "currentColor");
      icon.setAttribute("stroke-width", "2");
      icon.setAttribute("stroke-linecap", "round");
      icon.setAttribute("stroke-linejoin", "round");
      icon.style.fill = "none";
      icon.innerHTML = `<path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><path d="M19 16v6"></path><path d="M16 19h6"></path>`;
    }
    // Edit the content
    const rowContent = header.querySelector("div");

    // Change the text in the span
    if (rowContent) {
      rowContent.innerHTML =
        "Setup your email addresses to show in the mail button";
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
