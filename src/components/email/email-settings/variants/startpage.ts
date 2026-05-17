import { addMailSettings, deleteEmail } from "..";
import { emailOptions } from "../..";
import { htmlButton } from "../../../../utils/html-elements";
import { Email } from "../../../../utils/types";

// TODO: startpage's settings page lives at /do/settings — confirm the
// container selector and where it makes sense to inject our panel. For
// now this only fires on /do/settings and skips silently otherwise.
export function addStartpageNewSettings() {
  if (!window.location.pathname.startsWith("/do/settings")) return;
  if (document.querySelector("#customization-panel")) return;

  const settingsContent = document.querySelector<HTMLElement>(
    ".settings-content, main, #content"
  );
  if (!settingsContent) return;

  const newWidgetElement = document.createElement("section");
  newWidgetElement.id = "customization-panel";
  newWidgetElement.innerHTML = `<h2>User Settings</h2>`;

  addMailSettings(newWidgetElement);
  settingsContent.prepend(newWidgetElement);
}

export function startpageEmailElement(email: Email) {
  const emailElement = document.createElement("div");
  emailElement.setAttribute("data-email", email.email);
  emailElement.style.display = "flex";
  emailElement.style.justifyContent = "space-between";
  emailElement.style.alignItems = "center";
  emailElement.style.width = "100%";
  emailElement.style.gap = "0.5rem";

  const emailText = document.createElement("span");
  emailText.innerHTML = email.email;

  const emailProvider = document.createElement("span");
  emailProvider.innerHTML = ` (${
    emailOptions.find((option) => option.value === email.provider)?.label
  })`;
  emailProvider.style.color = "rgba(255, 255, 255, 0.4)";

  emailText.appendChild(emailProvider);
  emailElement.appendChild(emailText);

  const deleteButton = htmlButton("Delete", "", "danger", () => {
    deleteEmail(email);
  });

  emailElement.appendChild(deleteButton);

  return emailElement;
}
