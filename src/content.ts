import {
  replaceBraveToGoogleLogo,
  replaceSettingsIcon,
} from "./components/general/brave";
import { replaceDuckDuckGoToGoogleLogo } from "./components/general/duckduckgo";
import { replaceFavicon } from "./components/head";
import { changeBraveTitle } from "./components/head/brave";
import { changeDuckduckGoTitle } from "./components/head/duckduckgo";
import { addBraveMailButton } from "./components/mail/brave";
import { addDuckDuckGoMailButton } from "./components/mail/duckduckgo";
import { checkStorage, observeDOMChanges } from "./components/observer";
import {
  editSnippetDescription,
  moveProductThumbnail,
  moveVideoThumbnail,
  removeBorderFromSearchResults,
} from "./components/search-result";
import { addNewSettingsSidePanel } from "./components/settings";
import { addCssColorVariables } from "./components/stylesheets";
import {
  isBrave,
  removeElementByQuery,
  replaceElementTextByClassName,
} from "./utils/functions";

if (isBrave()) {
  replaceBraveToGoogleLogo();
  removeElementByQuery(".subutton-wrapper");
  removeElementByQuery("footer");
  removeBorderFromSearchResults();
  removeElementByQuery(".llm.suggestion");
  removeElementByQuery(".premium-cta");
  removeElementByQuery(".widget");
  addCssColorVariables();
  replaceFavicon();
  removeElementByQuery(".waves-top");
  removeElementByQuery(".waves-bottom");
  editSnippetDescription();
  moveVideoThumbnail();
  addBraveMailButton();
  replaceSettingsIcon();
  addNewSettingsSidePanel();
  checkStorage();

  observeDOMChanges([
    removeElementByQuery.bind(null, ".subutton-wrapper"),
    removeElementByQuery.bind(null, "footer"),
    replaceBraveToGoogleLogo,
    removeBorderFromSearchResults,
    removeElementByQuery.bind(null, ".llm.suggestion"),
    removeElementByQuery.bind(null, ".premium-cta"),
    // removeElementByQuery.bind(null, ".widget"),
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
    addNewSettingsSidePanel,
    checkStorage,
  ]);
} else {
  replaceDuckDuckGoToGoogleLogo();
  removeElementByQuery("#features");
  removeElementByQuery(".homepage-cta-section_scrollCta__HuSCL");
  replaceFavicon();
  changeDuckduckGoTitle();
  addDuckDuckGoMailButton();
  // observeDOMChanges([replaceDuckDuckGoToGoogleLogo]);
}
