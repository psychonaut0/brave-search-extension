import { isBrave, sha256 } from "../../utils/functions";
import { htmlButton } from "../../utils/html-elements";
import { Email, Provider } from "../../utils/types";
import {
  braveEmailElementStyle,
  bravePopupPosition,
  bravePopupStyle,
} from "./variants/brave";
import {
  duckDuckGoEmailElementStyle,
  duckDuckGoPopupPosition,
  duckDuckGoPopupStyle,
} from "./variants/duckduckgo";

export async function emailPopupButton(settingsDiv: HTMLElement | null) {
  if (settingsDiv && !settingsDiv.querySelector(".mail-button")) {
    settingsDiv.style.display = "flex";
    settingsDiv.style.alignItems = "center";
    settingsDiv.style.justifyContent = "flex-end";

    // Create mail button that shows a popup with the email addresses to choose from
    const mailButton = htmlButton(
      "Mail",
      "",
      "secondary",
      () => {
        showEmailPopup();
      },
      "mail-button"
    );

    // Close the popup when clicking outside of it
    document.body.onclick = (event) => {
      if (
        !(event.target instanceof Element) ||
        !event.target.classList.contains("mail-button")
      ) {
        const emailPopup = document.querySelector(".email-popup");
        if (emailPopup) {
          emailPopup.remove();
        }
      }
    };

    settingsDiv.insertBefore(mailButton, settingsDiv.firstChild);
  }
}

export function updateEmailList() {
  const emailPopup = document.querySelector(".email-popup");

  if (!emailPopup) {
    return;
  }
  chrome.storage.local.get("emails", (data) => {
    (data.emails as Email[]).forEach(async (email) => {
      if (document.getElementById(email.email)) return;
      emailElement(email).then((emailElement) =>
        emailPopup.appendChild(emailElement)
      );
    });
  });
}

function getProviderHref(provider: Provider, email: string) {
  switch (provider) {
    case "gmail":
      return `https://mail.google.com/mail/u/${email}`;
    case "outlook":
      return `https://outlook.office365.com/mail/`;
    case "yahoo":
      return `https://mail.yahoo.com/`;
    case "protonmail":
      return `https://mail.protonmail.com/u/${email}`;
    case "aruba":
      return `https://webmail.aruba.it/`;
    default:
      return "";
  }
}

async function emailElement(email: Email) {
  const emailElement = document.createElement("a");
  emailElement.id = email.email;
  emailElement.href = getProviderHref(email.provider, email.email);
  emailElement.textContent = email.email;
  emailElement.setAttribute("target", "_blank");
  emailElement.style.color = "white";
  emailElement.style.textDecoration = "none";
  emailElement.style.paddingLeft = ".4rem";
  emailElement.style.paddingRight = ".4rem";
  emailElement.style.borderRadius = "8px";
  emailElement.style.display = "flex";
  emailElement.style.alignItems = "center";
  emailElement.style.justifyContent = "flex-start";
  emailElement.style.transition = "all 0.1s";
  emailElement.style.fontSize = ".8rem";

  // Creata avatar sha256
  const avatar = await sha256(email);

  // Add profile picture
  const profilePicture = document.createElement("img");
  profilePicture.src = `https://www.gravatar.com/avatar/${avatar}?d=https%3A%2F%2Fui-avatars.com%2Fapi%2F/${email.email}/64/random/ff0000/1/true/true/true/svg`;

  profilePicture.style.borderRadius = "50%";
  profilePicture.style.marginRight = "4px";
  emailElement.prepend(profilePicture);

  emailElement.onmouseout = () => {
    emailElement.style.backgroundColor = "transparent";
  };

  if (isBrave()) {
    braveEmailElementStyle(emailElement, profilePicture);
  } else {
    duckDuckGoEmailElementStyle(emailElement, profilePicture);
  }

  return emailElement;
}

function showEmailPopup() {
  if (document.querySelector(".email-popup")) {
    document.querySelector<HTMLElement>(".email-popup")?.remove();
    return;
  }
  const emailPopup = document.createElement("div");
  emailPopup.className = "email-popup";
  emailPopup.style.position = "absolute";
  emailPopup.style.zIndex = "10000";
  emailPopup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
  emailPopup.style.display = "flex";
  emailPopup.style.flexDirection = "column";
  emailPopup.style.padding = ".4rem";
  emailPopup.style.minWidth = "350px";
  if (isBrave()) {
    bravePopupStyle(emailPopup);
  } else {
    duckDuckGoPopupStyle(emailPopup);
  }

  if (isBrave()) {
    bravePopupPosition(emailPopup);
  } else {
    duckDuckGoPopupPosition(emailPopup);
  }

  updateEmailList();

  document.body.appendChild(emailPopup);
}
