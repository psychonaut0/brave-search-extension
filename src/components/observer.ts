import { updateEmailList } from "./mail";
import { updateSettingsEmailsList } from "./settings";

export function observeDOMChanges(operations: Function[]) {
  const targetNode = document.body;
  const config = { childList: true, subtree: true };

  const callback = (mutationsList: any) => {
    observer.disconnect();

    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        operations.forEach((operation) => {
          try {
            operation();
          } catch (error) {
            console.error("Error executing operation:", error);
          }
        });
      }
    }

    observer.observe(targetNode, config);
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}

export function checkStorage() {
  console.log("zanzan");

  chrome.storage.local.get("emails", (data) => {
    if (!data.emails) {
      chrome.storage.local.set({ emails: [] });
    } else {
      // Check if emails are already present
      if (document.querySelector(".email-list")?.children.length === 0) {
        updateSettingsEmailsList();
      }
      // Check if the email popup is already present
      if (document.querySelector(".email-popup")) {
        updateEmailList();
      }
    }
  });
}
