import {
  replaceBraveToGoogleLogo,
  replaceSettingsIcon,
} from "./components/general/variants/brave";
import { replaceDuckDuckGoToGoogleLogo } from "./components/general/variants/duckduckgo";
import { replaceFavicon } from "./components/head";
import { changeBraveTitle } from "./components/head/variants/brave";
import { changeDuckduckGoTitle } from "./components/head/variants/duckduckgo";
import { addBraveMailButton } from "./components/email/email-popup/variants/brave";
import { addDuckDuckGoMailButton } from "./components/email/email-popup/variants/duckduckgo";
import { checkStorage, observeDOMChanges } from "./components/observer";
import {
  editSnippetDescription,
  moveProductThumbnail,
  moveVideoThumbnail,
} from "./components/search-result";
import { addBraveNewSettingsSidePanel } from "./components/email/email-settings/variants/brave";
import { addDuckDuckNewSettings } from "./components/email/email-settings/variants/duckduckgo";
import { addCssColorVariables } from "./components/stylesheets";
import {
  isBrave,
  removeElementByQuery,
  replaceElementTextByClassName,
} from "./utils/functions";

function runAll(ops: Array<() => void>) {
  for (const op of ops) {
    try {
      op();
    } catch (error) {
      console.error("Error executing operation:", error);
    }
  }
}

if (isBrave()) {
  addCssColorVariables();

  const braveOps: Array<() => void> = [
    removeElementByQuery.bind(null, ".subutton-wrapper"),
    removeElementByQuery.bind(null, "footer"),
    replaceBraveToGoogleLogo,
    removeElementByQuery.bind(null, ".llm.suggestion"),
    removeElementByQuery.bind(null, ".premium-cta"),
    replaceElementTextByClassName.bind(
      null,
      ".settings-header-text",
      "Customization panel"
    ),
    replaceFavicon,
    changeBraveTitle,
    editSnippetDescription,
    removeElementByQuery.bind(null, ".waves-top"),
    removeElementByQuery.bind(null, ".waves-bottom"),
    moveVideoThumbnail,
    moveProductThumbnail,
    addBraveMailButton,
    replaceSettingsIcon,
    addBraveNewSettingsSidePanel,
    checkStorage,
  ];

  runAll(braveOps);
  observeDOMChanges(braveOps);
} else {
  const ddgOps: Array<() => void> = [
    replaceDuckDuckGoToGoogleLogo,
    removeElementByQuery.bind(null, "#features"),
    removeElementByQuery.bind(null, ".homepage-cta-section_scrollCta__HuSCL"),
    removeElementByQuery.bind(null, ".header--aside__item"),
    replaceFavicon,
    changeDuckduckGoTitle,
    addDuckDuckGoMailButton,
    addDuckDuckNewSettings,
    checkStorage,
  ];

  runAll(ddgOps);
  observeDOMChanges([checkStorage, addDuckDuckNewSettings]);
}
