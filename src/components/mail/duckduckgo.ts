import { addMailButton } from ".";

export function addDuckDuckGoMailButton() {
  const header = document.querySelector("header");
  if (!header) return;

  const settingsDiv = document.querySelector("section");
  if (!settingsDiv) return;

  addMailButton(settingsDiv);
}
