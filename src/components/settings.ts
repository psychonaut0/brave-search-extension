import { htmlButton, htmlInput } from "../utils/html-elements";
import { plusIcon, trashIcon } from "../utils/icons";

interface Email {
  email: string;
  provider: string;
}

export function addNewSettingsSidePanel() {
  if (document.querySelector(".user-widget")) {
    return;
  }
  // Get settings drawer element
  const settingsDrawer = document.querySelector(".SettingsDrawer__content");

  // Copy the widget element
  if (settingsDrawer) {
    const widgetElement = settingsDrawer.querySelector(".widget");

    if (widgetElement) {
      // Create a new widget changing the header and content
      const newWidgetElement = widgetElement.cloneNode(true) as HTMLElement;
      const widgetHeader = newWidgetElement.querySelector("header");
      const content = newWidgetElement.querySelector("div");

      console.log("NEW", newWidgetElement);

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
      settingsDrawer.prepend(newWidgetElement);
    }
  }
}

function addMailSettings(content: HTMLElement) {
  const sectionElement = content.querySelector("section");

  if (sectionElement) {
    // Clone the section element and remove the original and the other elements
    const newSectionElement = sectionElement.cloneNode(true) as HTMLElement;

    content.innerHTML = "";

    // Remove all in the section element instead of div with class info
    const info = newSectionElement.querySelector(".info");
    if (info) {
      newSectionElement.innerHTML = "";
      newSectionElement.appendChild(info);
    }

    newSectionElement.style.flexDirection = "column";

    // Edit the new section element header
    const header = newSectionElement.querySelector("header");
    if (header) {
      // Edit the h3
      const h3 = header.querySelector("h3");
      if (h3) {
        h3.innerHTML = "Mail Settings";
      }
      // Edit the icon
      const icon = header.querySelector("svg");
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
    }
    // Edit the content
    const rowContent = newSectionElement.querySelector(".content");
    // Change the text in the span
    if (rowContent) {
      const spanElement = rowContent.querySelector("span");
      if (spanElement) {
        spanElement.innerHTML =
          "Setup your email addresses to show in the mail button";
      }
    }

    // Create the email list element
    const emailListElement = document.createElement("div");
    emailListElement.classList.add("email-list");
    emailListElement.style.display = "flex";
    emailListElement.style.flexDirection = "column";
    emailListElement.style.gap = "1rem";
    emailListElement.style.marginBottom = "1rem";
    // Create the input element
    const inputElement = htmlInput();

    // Create the new email adder element
    const newEmailElement = document.createElement("div");
    newEmailElement.style.display = "flex";
    newEmailElement.style.flexDirection = "column";

    const inputWrapper = document.createElement("div");
    inputWrapper.style.display = "flex";
    inputWrapper.style.justifyContent = "space-between";
    inputWrapper.style.alignItems = "center";
    inputWrapper.style.width = "100%";
    inputWrapper.style.gap = "0.5rem";

    const addButton = htmlButton("Add", plusIcon(), "primary", () => {
      chrome.storage.local.get("emails", (data) => {
        let emails = (data.emails as Email[]) || [];

        const email = inputElement.value;

        // Check if valid email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert("Invalid email address");
          return;
        }

        if (email && !emails.find((e) => e.email === email)) {
          emails.push({
            email,
            provider: email.split("@")[1],
          });
          chrome.storage.local.set({ emails });
        }

        inputElement.value = "";
      });
    });

    // Append the input and button to the input wrapper
    inputWrapper.appendChild(inputElement);
    inputWrapper.appendChild(addButton);

    // Append the input wrapper to the email element
    newEmailElement.appendChild(emailListElement);
    newEmailElement.appendChild(inputWrapper);

    // Append the new email element to the content
    newSectionElement.appendChild(newEmailElement);

    // Append the new section element to the content
    content.appendChild(newSectionElement);

    // Listen for storage changes to update the email list
    chrome.storage.onChanged.addListener((changes) => {
      if (changes.emails) {
        updateEmailsList();
      }
    });
  }
}

function updateEmailsList() {
  const emailListElement = document.querySelector(".email-list");

  if (emailListElement) {
    // Get the emails from the storage
    emailListElement.innerHTML = "";

    chrome.storage.local.get("emails", (data) => {
      const emails = (data.emails as Email[]) || [];

      emails.forEach((email) => {
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
          chrome.storage.local.get("emails", (data) => {
            const emails = (data.emails as Email[]) || [];
            const newEmails = emails.filter((e) => e.email !== email.email);
            chrome.storage.local.set({ emails: newEmails });
          });
        });

        // Append the email text and delete button to the email element if not already present

        if (document.querySelector(`[data-email="${email.email}"]`)) {
          return;
        }

        emailElement.appendChild(emailText);
        emailElement.appendChild(deleteButton);

        // Append the email element to the email list element
        emailListElement.appendChild(emailElement);
      });
    });
  }
}

export function checkStorage() {
  chrome.storage.local.get("emails", (data) => {
    if (!data.emails) {
      chrome.storage.local.set({ emails: [] });
    } else {
      // Check if emails are already present

      if (document.querySelector(".email-list")?.children.length === 0) {
        updateEmailsList();
      }
    }
  });
}
