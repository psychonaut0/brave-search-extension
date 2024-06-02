export function addCssColorVariables() {
  const style = document.createElement("style");
  style.innerHTML = `
    :root {
      --color-serp-bar-bg: transparent !important; 
    }
    #searchform-actions::before {
      display: none !important;
    }
    .searchform-focused form,
    #autocomplete {
      background: #242731 !important;
    }`;

  document.head.appendChild(style);
}