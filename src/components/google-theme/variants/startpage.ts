import { tokens } from "../tokens";

const c = tokens.color;
const f = tokens.font;
const s = tokens.size;

// Startpage uses emotion-generated css-* class names but ships stable
// semantic classes alongside them (.result, .wgl-title, .wgl-site-title,
// .wgl-display-url, .description). The search form has .search-form-container
// and input.search-form-input.
export const startpageGoogleCSS = `
  /* Force dark background matching Google */
  html,
  body {
    background: ${c.bg} !important;
    color: ${c.text} !important;
  }

  /* Search bar pill */
  .search-form-container {
    background: ${c.searchBarBg} !important;
    border-color: transparent !important;
    border-radius: ${s.searchBarRadiusPx}px !important;
    box-shadow: none !important;
  }
  .search-form-container:hover {
    background: ${c.searchBarBgHover} !important;
  }
  .search-form-container:focus-within {
    background: ${c.searchBarBgFocused} !important;
    box-shadow: 0 4px 12px rgba(23, 23, 23, .9) !important;
  }
  .search-form-container form {
    min-height: ${s.searchBarHeightPx}px !important;
  }
  .search-form-input,
  input[name="query"] {
    font-family: ${f.display} !important;
    font-size: ${s.inputPx}px !important;
    color: ${c.inputText} !important;
    background: transparent !important;
  }

  /* Result block */
  .result {
    background: transparent !important;
    margin-bottom: ${s.resultMarginBottomPx}px !important;
    max-width: ${s.resultMaxWidthPx}px !important;
    padding: 0 !important;
  }

  /* Title */
  .wgl-title,
  .result-title .wgl-title {
    font-family: ${f.display} !important;
    font-size: ${s.titlePx}px !important;
    font-weight: 400 !important;
    line-height: ${s.titleLineHeightPx}px !important;
    color: ${c.link} !important;
  }
  .result-link:visited .wgl-title {
    color: ${c.linkVisited} !important;
  }

  /* Site name */
  .wgl-site-title,
  .wgl-site-title .link-text {
    font-family: ${f.display} !important;
    font-size: ${s.sitePx}px !important;
    color: ${c.siteName} !important;
  }

  /* URL row */
  .wgl-display-url,
  .wgl-display-url .link-text,
  .wgl-display-url .link-text * {
    font-family: ${f.body} !important;
    font-size: ${s.sitePathPx}px !important;
    color: ${c.cite} !important;
  }

  /* Snippet */
  .description {
    font-family: ${f.body} !important;
    font-size: ${s.snippetPx}px !important;
    line-height: ${s.snippetLineHeight} !important;
    color: ${c.textMuted} !important;
  }

  /* Hide "Visit in Anonymous View" to match Google's clean look.
     Remove this rule if you want to keep the anonymous-view affordance. */
  .anonymous-view-link {
    display: none !important;
  }

  /* ---------- SERP header chrome ---------- */
  /* On the SERP, Startpage wraps logo + search bar + tabs in a top <header>.
     Force the same dark background as the body so the header doesn't sit
     in its own off-color band. */
  body > header,
  .header-inner-container,
  .mobile-nav,
  .top-nav-container {
    background: ${c.bg} !important;
  }
  body > header {
    border-bottom: 1px solid ${c.cardBorder} !important;
  }

  /* Category tabs (All / Images / Videos / News / Shopping / Maps).
     Match Google's underlined tab style. */
  .inline-nav {
    background: ${c.bg} !important;
    border-bottom: 1px solid ${c.cardBorder} !important;
  }
  .inline-nav .categories {
    display: flex !important;
  }
  .inline-nav .vertical-link-container {
    padding: 0 !important;
  }
  .inline-nav .header-nav-item-button {
    padding: 0 12px !important;
    background: transparent !important;
  }
  .inline-nav .header-nav-item {
    min-height: 48px !important;
    display: flex !important;
    align-items: flex-end !important;
    padding-bottom: 8px !important;
    border-bottom: 3px solid transparent !important;
  }
  .inline-nav .header-nav-item-text {
    font-family: ${f.display} !important;
    font-size: ${s.sitePx}px !important;
    font-weight: 500 !important;
    color: #80868b !important;
    text-transform: none !important;
  }
  .inline-nav .header-nav-item:hover .header-nav-item-text {
    color: ${c.text} !important;
  }

  /* Google has no "Private Search" affordance — hide Startpage's pill. */
  .private-search-dropdown {
    display: none !important;
  }

  /* ---------- Search-suggestion dropdown ---------- */
  /* The suggestions render inside .search-form-container as a list of
     .search-suggestion rows. Match Google's autocomplete dropdown look. */
  .suggested-search-container {
    background: ${c.searchBarBgFocused} !important;
    border-radius: 0 0 ${s.searchBarRadiusPx}px ${s.searchBarRadiusPx}px !important;
    box-shadow: 0 4px 12px rgba(23, 23, 23, .9) !important;
  }
  .search-suggestion {
    background: transparent !important;
    padding: 8px 16px !important;
  }
  .search-suggestion p {
    font-family: ${f.display} !important;
    font-size: ${s.inputPx}px !important;
    color: ${c.text} !important;
    margin: 0 !important;
  }
  .search-suggestion:hover,
  .search-suggestion[aria-selected="true"] {
    background: ${c.cardBorder} !important;
  }

  /* ---------- Body font ---------- */
  /* Default to Arial across the page so non-result chrome matches the
     Google body typography. */
  body {
    font-family: ${f.body} !important;
  }
  h1, h2, h3, h4 {
    font-family: ${f.display} !important;
  }
`;
