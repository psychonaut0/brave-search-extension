import { addMailButton } from ".";

export function addBraveMailButton() {
  const settingsDiv: HTMLElement | null = document.querySelector("#settings");

  if (!settingsDiv) return;
  addMailButton(settingsDiv);
}
