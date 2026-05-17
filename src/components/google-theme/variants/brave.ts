import { tokens } from "../tokens";

const c = tokens.color;
const f = tokens.font;
const s = tokens.size;

// Brave Search already uses class names that match Google's own SERP
// (.RNNXgb for the bar, .snippet[data-type] for results). We override
// color + typography to enforce Google's exact look in dark mode.
export const braveGoogleCSS = `
  /* Search bar pill */
  .RNNXgb {
    background: ${c.searchBarBg} !important;
    border-radius: ${s.searchBarRadiusPx}px !important;
    min-height: ${s.searchBarHeightPx}px !important;
    border: 1px solid transparent !important;
    box-shadow: none !important;
  }
  .RNNXgb:hover {
    background: ${c.searchBarBgHover} !important;
  }
  .RNNXgb:focus-within {
    background: ${c.searchBarBgFocused} !important;
    box-shadow: 0 4px 12px rgba(23, 23, 23, .9) !important;
  }
  .RNNXgb .gLFyf,
  .RNNXgb textarea,
  .RNNXgb input[type="text"],
  .RNNXgb input[type="search"] {
    font-family: ${f.display} !important;
    font-size: ${s.inputPx}px !important;
    color: ${c.inputText} !important;
    background: transparent !important;
  }

  /* Result block spacing */
  .snippet[data-type] {
    background: transparent !important;
    border: 1px solid transparent !important;
    margin-bottom: ${s.resultMarginBottomPx}px !important;
    max-width: ${s.resultMaxWidthPx}px !important;
  }
  /* Title */
  .snippet[data-type="web"] a[srp-el-jm-ea] .title,
  .snippet[data-type="web"] a[srp-el-jm-ea] h3,
  .snippet[data-type="web"] .title {
    font-family: ${f.display} !important;
    font-size: ${s.titlePx}px !important;
    font-weight: 400 !important;
    line-height: ${s.titleLineHeightPx}px !important;
    color: ${c.link} !important;
  }
  .snippet[data-type="web"] a:visited .title,
  .snippet[data-type="web"] a:visited h3 {
    color: ${c.linkVisited} !important;
  }
  /* Cite / URL row */
  .snippet[data-type] .url,
  .snippet[data-type] cite {
    font-family: ${f.body} !important;
    font-size: ${s.sitePathPx}px !important;
    color: ${c.cite} !important;
    font-style: normal !important;
  }
  /* Snippet description */
  .snippet-description {
    font-family: ${f.body} !important;
    font-size: ${s.snippetPx}px !important;
    line-height: ${s.snippetLineHeight} !important;
    color: ${c.textMuted} !important;
  }
  .snippet-description span {
    opacity: 1 !important;
  }
`;
