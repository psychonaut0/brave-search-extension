import {
  replaceBraveToGoogleLogo,
  replaceSettingsIcon,
} from "./components/general/variants/brave";
import { replaceDuckDuckGoToGoogleLogo } from "./components/general/variants/duckduckgo";
import { replaceFavicon } from "./components/head";
import { changeBraveTitle } from "./components/head/variants/brave";
import { changeDuckduckGoTitle } from "./components/head/variants/duckduckgo";
import { addBraveMailButton } from "./components/mail/variants/brave";
import { addDuckDuckGoMailButton } from "./components/mail/variants/duckduckgo";
import { checkStorage, observeDOMChanges } from "./components/observer";
import {
  editSnippetDescription,
  moveProductThumbnail,
  moveVideoThumbnail,
  removeBorderFromSearchResults,
} from "./components/search-result";
import { addBraveNewSettingsSidePanel } from "./components/settings/variants/brave";
import { addDuckDuckNewSettings } from "./components/settings/variants/duckduckgo";
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
  addBraveNewSettingsSidePanel();
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
    addBraveNewSettingsSidePanel,
    checkStorage,
  ]);
} else {
  replaceDuckDuckGoToGoogleLogo();
  removeElementByQuery("#features");
  removeElementByQuery(".homepage-cta-section_scrollCta__HuSCL");
  removeElementByQuery(".header--aside__item");
  replaceFavicon();
  changeDuckduckGoTitle();
  addDuckDuckGoMailButton();
  checkStorage();
  addDuckDuckNewSettings();
  observeDOMChanges([checkStorage, addDuckDuckNewSettings]);
}
