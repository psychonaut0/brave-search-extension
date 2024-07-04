import { replaceSettingsIcon } from "./components/general";
import { replaceBraveToGoogleLogo } from "./components/general/brave";
import { replaceDuckDuckGoToGoogleLogo } from "./components/general/duckduckgo";
import { changeTitle, replaceFavicon } from "./components/head";
import { addMailButton } from "./components/mail";
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
  addMailButton();
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
    changeTitle,
    editSnippetDescription,
    removeElementByQuery.bind(null, ".waves-top"),
    removeElementByQuery.bind(null, ".waves-bottom"),
    moveVideoThumbnail,
    moveProductThumbnail,
    addMailButton,
    replaceSettingsIcon,
    addNewSettingsSidePanel,
    checkStorage,
  ]);
} else {
  replaceDuckDuckGoToGoogleLogo();
  removeElementByQuery("#features");
  removeElementByQuery(".homepage-cta-section_scrollCta__HuSCL");
  // observeDOMChanges([replaceDuckDuckGoToGoogleLogo]);
}
