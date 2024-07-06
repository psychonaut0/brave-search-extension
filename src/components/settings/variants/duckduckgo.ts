import { addMailSettings, deleteEmail } from "..";
import { htmlButton } from "../../../utils/html-elements";
import { Email } from "../../../utils/types";

export function addDuckDuckNewSettings() {
  if (window.location.pathname !== "/settings") return;
  if (document.querySelector("#customization-panel")) return;

  const settingsDrawer = document.querySelector(".set-head__menu");
  if (!settingsDrawer) return;

  // clone the first child of the settings drawer
  const widgetElement = settingsDrawer.querySelector("a");
  if (!widgetElement) return;

  widgetElement.innerHTML = "Custom";

  if (window.location.hash === "#general" || window.location.hash === "") {
    const settingsContent = document.querySelector(".frm") as HTMLFormElement;
    console.log(settingsContent);
    if (!settingsContent) return;

    const newWidgetElement = document.createElement("div");
    newWidgetElement.classList.add("frm__field");
    newWidgetElement.classList.add("fix");
    newWidgetElement.id = "customization-panel";
    newWidgetElement.innerHTML = `
      <section class="frm__section">
      </section>
    `;

    addMailSettings(newWidgetElement);

    const separator = document.createElement("div");
    separator.classList.add("frm__hr");

    settingsContent.prepend(separator);
    settingsContent.prepend(newWidgetElement);
  }
}

export function duckDuckGoEmailElement(email: Email) {
  const emailElement = document.createElement("div");
  emailElement.setAttribute("data-email", email.email);
  emailElement.style.display = "flex";
  emailElement.style.justifyContent = "space-between";
  emailElement.style.alignItems = "center";
  emailElement.style.width = "100%";
  emailElement.style.gap = "0.5rem";
  const emailText = document.createElement("span");
  emailText.innerHTML = email.email;
  emailElement.appendChild(emailText);

  const deleteButton = htmlButton("Delete", "", "danger", () => {
    deleteEmail(email);
  });

  emailElement.appendChild(deleteButton);

  return emailElement;
}
