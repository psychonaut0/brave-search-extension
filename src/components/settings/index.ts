import { isBrave } from "../../utils/functions";
import { htmlButton, htmlInput, htmlSelect } from "../../utils/html-elements";
import { plusIcon, trashIcon } from "../../utils/icons";
import { Email, Provider } from "../../utils/types";
import { braveEmailElement, braveEmailSettingsHeader } from "./variants/brave";
import { duckDuckGoEmailElement } from "./variants/duckduckgo";

export function addMailSettings(content: HTMLElement) {
  const sectionElement = content.querySelector("section");

  if (sectionElement) {
    // Clone the section element and remove the original and the other elements
    const newSectionElement = sectionElement.cloneNode(true) as HTMLElement;

    content.innerHTML = "";

    if (isBrave()) {
      braveEmailSettingsHeader(newSectionElement);
    }

    // Create the email list element
    const emailListElement = document.createElement("div");
    emailListElement.classList.add("email-list");
    emailListElement.style.display = "flex";
    emailListElement.style.flexDirection = "column";
    emailListElement.style.gap = "0.75rem";
    emailListElement.style.marginBottom = "1rem";
    // Create the input element
    const inputElement = htmlInput("Email Address");
    inputElement.style.width = "70%";

    const emailProviderElement = htmlSelect([
      {
        value: "gmail",
        label: "Gmail",
      },
      {
        value: "outlook",
        label: "Outlook",
      },
      {
        value: "yahoo",
        label: "Yahoo",
      },
    ]);

    emailProviderElement.style.width = "30%";

    // Create the new email adder element
    const newEmailElement = document.createElement("div");
    newEmailElement.style.display = "flex";
    newEmailElement.style.flexDirection = "column";

    const addWrapper = document.createElement("div");
    addWrapper.style.display = "flex";
    addWrapper.id = "add-email-wrapper";
    addWrapper.style.flexDirection = "column";
    addWrapper.style.alignItems = "flex-end";
    addWrapper.style.gap = "0.5rem";

    const inputWrapper = document.createElement("div");
    inputWrapper.style.display = "flex";
    inputWrapper.style.alignItems = "center";
    inputWrapper.style.width = "100%";
    inputWrapper.style.gap = "0.5rem";

    let addButton: HTMLButtonElement;

    if (isBrave()) {
      addButton = htmlButton("Add", plusIcon(), "primary", () => {
        addEmail(inputElement, emailProviderElement);
      });
    } else {
      addButton = htmlButton("Add", "", "primary", () => {
        addEmail(inputElement, emailProviderElement);
      });
    }

    // Append the input and button to the input wrapper
    inputWrapper.appendChild(inputElement);
    inputWrapper.appendChild(emailProviderElement);

    addWrapper.appendChild(inputWrapper);
    addWrapper.appendChild(addButton);

    // Append the input wrapper to the email element
    newEmailElement.appendChild(emailListElement);
    newEmailElement.appendChild(addWrapper);

    // Append the new email element to the content
    newSectionElement.appendChild(newEmailElement);

    // Append the new section element to the content after the h1
    content.appendChild(newSectionElement);

    // Listen for storage changes to update the email list
    chrome.storage.onChanged.addListener((changes) => {
      if (changes.emails) {
        updateSettingsEmailsList();
      }
    });
  }
}

export function addEmail(
  inputElement: HTMLInputElement,
  emailProviderElement: HTMLSelectElement
) {
  chrome.storage.local.get("emails", (data) => {
    let emails = (data.emails as Email[]) || [];
    const email = inputElement.value;
    // Check if valid email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email address");
      return;
    }

    // Check if email already exists
    if (emails.find((e) => e.email === email)) {
      alert("Email already exists");
      return;
    }

    if (emailProviderElement.value === "outlook") {
      if (emails.find((e) => e.provider === "outlook")) {
        alert("Only one Outlook email is allowed");
        return;
      }
    }

    if (email && !emails.find((e) => e.email === email)) {
      emails.push({
        email,
        provider: emailProviderElement.value as Provider,
      });
      chrome.storage.local.set({ emails });
    }

    inputElement.value = "";
  });
}

export function deleteEmail(email: Email) {
  chrome.storage.local.get("emails", (data) => {
    const emails = (data.emails as Email[]) || [];
    const newEmails = emails.filter((e) => e.email !== email.email);
    chrome.storage.local.set({ emails: newEmails });
  });
}

export function updateSettingsEmailsList() {
  const emailListElement = document.querySelector(".email-list");

  if (emailListElement) {
    // Get the emails from the storage
    emailListElement.innerHTML = "";

    chrome.storage.local.get("emails", (data) => {
      const emails = (data.emails as Email[]) || [];

      emails.forEach((email) => {
        let emailElement: HTMLElement | undefined;
        if (isBrave()) {
          emailElement = braveEmailElement(email);
        } else {
          emailElement = duckDuckGoEmailElement(email);
        }

        if (emailElement) {
          emailListElement.appendChild(emailElement);
        }
      });
    });
  }
}
