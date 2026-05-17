import { tokens } from "../tokens";

const c = tokens.color;
const f = tokens.font;
const s = tokens.size;

// DuckDuckGo ships React with hashed class names that change between
// builds. Use stable data-* attributes for everything; the only
// class-based selector we touch is the article wrapper via
// [data-testid="result"].
export const duckduckgoGoogleCSS = `
  /* Page background to match Google */
  body,
  body main {
    background: ${c.bg} !important;
    color: ${c.text} !important;
  }

  /* Search bar — DDG renders the input via a form with a known data-testid.
     Fallback to input[name="q"] for safety. */
  form[role="search"],
  form[data-testid="search"] {
    background: ${c.searchBarBg} !important;
    border-radius: ${s.searchBarRadiusPx}px !important;
    min-height: ${s.searchBarHeightPx}px !important;
    border: 1px solid transparent !important;
    box-shadow: none !important;
    padding: 0 16px !important;
    display: flex !important;
    align-items: center !important;
  }
  form[role="search"]:hover,
  form[data-testid="search"]:hover {
    background: ${c.searchBarBgHover} !important;
  }
  form[role="search"]:focus-within,
  form[data-testid="search"]:focus-within {
    background: ${c.searchBarBgFocused} !important;
    box-shadow: 0 4px 12px rgba(23, 23, 23, .9) !important;
  }
  input[name="q"] {
    font-family: ${f.display} !important;
    font-size: ${s.inputPx}px !important;
    color: ${c.inputText} !important;
    background: transparent !important;
    border: none !important;
  }

  /* Result block — strip the side image and drop the indent that comes with it */
  li[data-layout="organic"] {
    padding-inline-start: 0 !important;
    margin-bottom: ${s.resultMarginBottomPx}px !important;
    max-width: ${s.resultMaxWidthPx}px !important;
    background: transparent !important;
  }
  li[data-layout="organic"] > a[data-srp-el-jm-ea] {
    display: none !important;
  }
  [data-testid="result"] {
    background: transparent !important;
    padding: 0 !important;
  }
  /* Hide the 3-dot context menu trigger */
  [data-testid="result"] button[aria-haspopup="menu"] {
    display: none !important;
  }

  /* Title */
  [data-testid="result-title-a"],
  [data-testid="result-title-a"] span,
  [data-testid="result-title-a"] h2 {
    font-family: ${f.display} !important;
    font-size: ${s.titlePx}px !important;
    font-weight: 400 !important;
    line-height: ${s.titleLineHeightPx}px !important;
    color: ${c.link} !important;
  }
  [data-testid="result-title-a"]:visited,
  [data-testid="result-title-a"]:visited span,
  [data-testid="result-title-a"]:visited h2 {
    color: ${c.linkVisited} !important;
  }

  /* URL row (site icon + name + path) */
  [data-testid="result-extras-site-search-link"] {
    margin-right: 8px !important;
  }
  [data-testid="result-extras-url-link"],
  [data-testid="result-extras-url-link"] * {
    font-family: ${f.body} !important;
    font-size: ${s.sitePathPx}px !important;
    color: ${c.cite} !important;
  }

  /* Snippet */
  [data-result="snippet"],
  [data-result="snippet"] * {
    font-family: ${f.body} !important;
    font-size: ${s.snippetPx}px !important;
    line-height: ${s.snippetLineHeight} !important;
    color: ${c.textMuted} !important;
  }
`;
