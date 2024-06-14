import { sha256 } from "../utils/functions";
import { Email, Provider } from "../utils/types";

export async function addMailButton() {
  const settingsDiv = document.querySelector(".settings.wrapper");

  if (settingsDiv && !settingsDiv.querySelector(".mail-button")) {
    // Create mail button that shows a popup with the email addresses to choose from
    const mailButton = document.createElement("div");
    mailButton.className = "mail-button";
    mailButton.style.display = "flex";
    mailButton.style.alignItems = "center";
    mailButton.style.justifyContent = "center";
    mailButton.style.cursor = "pointer";
    mailButton.style.borderRadius = "8px";
    mailButton.style.paddingLeft = "12px";
    mailButton.style.paddingRight = "12px";
    mailButton.style.paddingTop = "6px";
    mailButton.style.paddingBottom = "6px";
    mailButton.style.backgroundColor = "#242731";
    mailButton.style.marginRight = "10px";
    mailButton.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
    mailButton.style.color = "white";
    mailButton.style.zIndex = "100";
    mailButton.textContent = "Mail";
    mailButton.style.userSelect = "none";
    mailButton.onclick = () => {
      if (document.querySelector(".email-popup")) {
        document.querySelector<HTMLElement>(".email-popup")?.remove();
        return;
      }
      const emailPopup = document.createElement("div");
      emailPopup.className = "email-popup";
      emailPopup.style.position = "absolute";
      emailPopup.style.zIndex = "10000";
      emailPopup.style.backgroundColor = "#242731";
      emailPopup.style.borderRadius = "8px";
      emailPopup.style.color = "white";
      emailPopup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
      emailPopup.style.display = "flex";
      emailPopup.style.flexDirection = "column";
      emailPopup.style.padding = ".4rem";
      emailPopup.style.minWidth = "350px";

      updateEmailList();

      // Position the popup on the top right corner if searchbar-home is present
      const searchbarHome = document.querySelector("#searchbar-home");
      if (searchbarHome) {
        emailPopup.style.top = "60px";
        emailPopup.style.right = "60px";
      } else {
        emailPopup.style.top = "74px";
        emailPopup.style.right = "70px";
      }

      document.body.appendChild(emailPopup);
    };

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
      const emailElement = document.createElement("a");
      emailElement.id = email.email;
      emailElement.href = getProviderHref(email.provider, email.email);
      emailElement.textContent = email.email;
      emailElement.setAttribute("target", "_blank");
      emailElement.style.color = "white";
      emailElement.style.textDecoration = "none";
      emailElement.style.paddingLeft = ".4rem";
      emailElement.style.paddingRight = ".4rem";
      emailElement.style.paddingTop = ".2rem";
      emailElement.style.paddingBottom = ".2rem";
      emailElement.style.borderRadius = "8px";
      emailElement.style.display = "flex";
      emailElement.style.alignItems = "center";
      emailElement.style.justifyContent = "flex-start";
      emailElement.style.gap = "8px";
      emailElement.style.transition = "background-color 0.1s";
      emailElement.style.fontSize = ".8rem";
      emailElement.style.height = "48px";

      // Creata avatar sha256
      const avatar = await sha256(email);

      // Add profile picture
      const profilePicture = document.createElement("img");
      profilePicture.src = `https://www.gravatar.com/avatar/${avatar}?d=https%3A%2F%2Fui-avatars.com%2Fapi%2F/${email.email}/64/random/ff0000/1/true/true/true/svg`;
      profilePicture.style.width = "32px";
      profilePicture.style.height = "32px";
      profilePicture.style.borderRadius = "50%";
      profilePicture.style.marginRight = "4px";
      emailElement.prepend(profilePicture);

      // Add hover effect
      emailElement.onmouseover = () => {
        emailElement.style.backgroundColor = "#343847";
      };
      emailElement.onmouseout = () => {
        emailElement.style.backgroundColor = "transparent";
      };

      emailPopup.appendChild(emailElement);
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
    default:
      return "";
  }
}
