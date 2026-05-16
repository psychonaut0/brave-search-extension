const BRAVE_STYLE_ID = "brave-search-mod-styles";

const BRAVE_STYLES = `
  :root {
    --color-serp-bar-bg: transparent !important;
  }
  #searchform-actions::before {
    display: none !important;
  }
  .searchform-focused form,
  #autocomplete {
    background: #242731 !important;
  }
  .snippet[data-type] {
    border: 1px solid transparent !important;
  }
  .snippet[data-type="web"] a[srp-el-jm-ea] img {
    border: 1px solid #21272a !important;
  }
`;

export function addCssColorVariables() {
  if (document.getElementById(BRAVE_STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = BRAVE_STYLE_ID;
  style.textContent = BRAVE_STYLES;
  document.head.appendChild(style);
}
