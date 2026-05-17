import { updateEmailList } from "./email/email-popup";
import { updateSettingsEmailsList } from "./email/email-settings";

type Operation = () => void;

export function observeDOMChanges(operations: Operation[]) {
  const targetNode = document.body;
  const config: MutationObserverInit = { childList: true, subtree: true };

  const runOps = () => {
    observer.disconnect();
    for (const op of operations) {
      try {
        op();
      } catch (error) {
        console.error("Error executing operation:", error);
      }
    }
    observer.observe(targetNode, config);
  };

  const observer = new MutationObserver(runOps);
  observer.observe(targetNode, config);
}

let storageListenerRegistered = false;

export function checkStorage() {
  chrome.storage.local.get("emails", (data) => {
    if (!data.emails) {
      chrome.storage.local.set({ emails: [] });
    }
    syncEmailUI();
  });

  if (!storageListenerRegistered) {
    storageListenerRegistered = true;
    chrome.storage.onChanged.addListener((changes, area) => {
      if (area === "local" && changes.emails) syncEmailUI();
    });
  }
}

function syncEmailUI() {
  if (document.querySelector(".email-list")) updateSettingsEmailsList();
  if (document.querySelector(".email-popup")) updateEmailList();
}
