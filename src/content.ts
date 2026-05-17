import {
  replaceBraveToGoogleLogo,
  replaceSettingsIcon,
} from "./components/general/variants/brave";
import { replaceDuckDuckGoToGoogleLogo } from "./components/general/variants/duckduckgo";
import { replaceStartpageToGoogleLogo } from "./components/general/variants/startpage";
import { replaceFavicon } from "./components/head";
import { changeBraveTitle } from "./components/head/variants/brave";
import { changeDuckduckGoTitle } from "./components/head/variants/duckduckgo";
import { changeStartpageTitle } from "./components/head/variants/startpage";
import { addBraveMailButton } from "./components/email/email-popup/variants/brave";
import { addDuckDuckGoMailButton } from "./components/email/email-popup/variants/duckduckgo";
import { addStartpageMailButton } from "./components/email/email-popup/variants/startpage";
import { checkStorage, observeDOMChanges } from "./components/observer";
import {
  editSnippetDescription,
  moveProductThumbnail,
  moveVideoThumbnail,
} from "./components/search-result";
import { addBraveNewSettingsSidePanel } from "./components/email/email-settings/variants/brave";
import { addDuckDuckNewSettings } from "./components/email/email-settings/variants/duckduckgo";
import { addStartpageNewSettings } from "./components/email/email-settings/variants/startpage";
import { addCssColorVariables } from "./components/stylesheets";
import {
  getSite,
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

const site = getSite();

if (site === "brave") {
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
} else if (site === "startpage") {
  // Baseline: site-agnostic mutators only. The variant stubs (logo, mail
  // button, settings panel) are wired here but live behind TODO markers
  // until the host DOM has been inspected and selectors confirmed.
  const startpageOps: Array<() => void> = [
    replaceFavicon,
    changeStartpageTitle,
    replaceStartpageToGoogleLogo,
    addStartpageMailButton,
    addStartpageNewSettings,
    checkStorage,
  ];

  runAll(startpageOps);
  observeDOMChanges(startpageOps);
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
