export function addNewSettingsSidePanel() {

  // Get settings drawer element
  const settingsDrawer = document.querySelector('.SettingsDrawer__content');

  // Copy the widget element
  if (settingsDrawer) {
    const widgetElement = settingsDrawer.querySelector(".widget")

    if (widgetElement) {
      // Create a new widget changing the header and content
      const newWidgetElement = widgetElement.cloneNode(true) as HTMLElement;
      const widgetHeader = newWidgetElement.querySelector('header');
      const content = newWidgetElement.querySelector('div');

      if (widgetHeader) {
        widgetHeader.innerHTML = "User Settings";
      }

      if (content) {
        // Get the section element
        const sectionElement = content.querySelector('section');

        if (sectionElement) {
          // Clone the section element and remove the original and the other elements
          const newSectionElement = sectionElement.cloneNode(true) as HTMLElement;
          content.innerHTML = '';

          // Edit the new section element header
          const header = newSectionElement.querySelector('header');
          if (header) {
            // Edit the h3
            const h3 = header.querySelector('h3');
            if (h3) {
              h3.innerHTML = "Mail Settings";
            }
            // Edit the icon
            const icon = header.querySelector('svg');
            if (icon) {
              icon.innerHTML = `<path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><path d="M19 16v6"></path><path d="M16 19h6"></path>`;
            }
          }
          // Edit the content
          const rowContent = newSectionElement.querySelector('.content');
          // Change the text
          if (rowContent) {
            rowContent.textContent = "Setup your email addresses to show in the mail button";
          }
          // Append the new section element to the content
          content.appendChild(newSectionElement);
        }

      }

      // Append the new widget to the settings drawer
      settingsDrawer.appendChild(newWidgetElement);
    }
  }
}