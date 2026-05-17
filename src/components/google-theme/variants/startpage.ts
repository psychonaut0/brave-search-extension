import { tokens } from "../tokens";

const c = tokens.color;
const f = tokens.font;
const s = tokens.size;

// Startpage uses emotion CSS-in-JS. Two things to know:
//   1. The `css-XXXX` classes are content hashes — they CAN change between
//      builds, so don't anchor on them.
//   2. Emotion also emits stable "label" classes alongside (e.g. e1fgh61o0
//      on <header>, eu3pp1u0 on <footer>, e1vne5t50 on the search box,
//      e6rco0f0 on <main>). Those derive from the component source, so
//      they're stable across builds. Use them, plus the semantic classes
//      that the app ships (.header-inner-container, .search-form-container,
//      .inline-nav, .result, .wgl-title, etc.).
//
// The header lives *inside* #root > .themeProvider > .Layout > div, so
// `body > header` does NOT match. Target <header> directly.
export const startpageGoogleCSS = `
  /* ---------- Page background ---------- */
  html,
  body,
  #root,
  .themeProvider,
  .Layout,
  main,
  [class*="e6rco0f0"] {
    background: ${c.bg} !important;
    color: ${c.text} !important;
  }

  /* ---------- Top header band ---------- */
  /* The SERP header sits at the top and is white by default. Force the
     same dark bg as the body and add a 1px bottom border. */
  header,
  [class*="e1fgh61o0"],
  .header-inner-container,
  .mobile-nav,
  .mobile-nav-logo,
  .top-nav-container,
  .hamburger-menu-app-promo {
    background: ${c.bg} !important;
    background-color: ${c.bg} !important;
    border-color: ${c.cardBorder} !important;
  }
  header,
  [class*="e1fgh61o0"] {
    border-bottom: 1px solid ${c.cardBorder} !important;
    box-shadow: none !important;
  }

  /* ---------- Search bar pill ---------- */
  /* The visual pill is .search-form-container (with emotion label
     e1vne5t50). It currently has white bg + a light border. Replace with
     Google's dark pill. The form input lives inside it. */
  .search-form-container,
  [class*="e1vne5t50"],
  .search-form-relative-container > div {
    background: ${c.searchBarBg} !important;
    background-color: ${c.searchBarBg} !important;
    border: 1px solid transparent !important;
    border-radius: ${s.searchBarRadiusPx}px !important;
    box-shadow: none !important;
    color: ${c.inputText} !important;
  }
  .search-form-container:hover,
  [class*="e1vne5t50"]:hover {
    background: ${c.searchBarBgHover} !important;
  }
  .search-form-container:focus-within,
  [class*="e1vne5t50"]:focus-within {
    background: ${c.searchBarBgFocused} !important;
    box-shadow: 0 4px 12px rgba(23, 23, 23, .9) !important;
  }
  .search-form-form {
    background: transparent !important;
    min-height: ${s.searchBarHeightPx}px !important;
  }
  .search-form-input,
  input[name="query"],
  .search-form-container input,
  .search-form-container input[type="text"] {
    background: transparent !important;
    color: ${c.inputText} !important;
    font-family: ${f.display} !important;
    font-size: ${s.inputPx}px !important;
    border: none !important;
  }
  .search-form-container input::placeholder,
  .search-form-input::placeholder {
    color: ${c.placeholder} !important;
  }
  /* The x-btn divider line between input and search button */
  .x-btn-container {
    border-right-color: ${c.cardBorder} !important;
  }

  /* ---------- Hamburger drawer ---------- */
  .hamburger-drawer,
  .hamburger-drawer-content {
    background: ${c.bg} !important;
    color: ${c.text} !important;
    border-left-color: ${c.cardBorder} !important;
  }
  .hamburger-subsection-title {
    color: ${c.textMuted} !important;
  }
  .hamburger-drawer a,
  .hamburger-drawer .link-text {
    color: ${c.text} !important;
  }

  /* ---------- Category tabs (All / Images / Videos / News / ...) ---------- */
  .inline-nav,
  .inline-nav .categories,
  .vertical-link-container {
    background: ${c.bg} !important;
  }
  .inline-nav {
    border-bottom: 1px solid ${c.cardBorder} !important;
  }
  .inline-nav .header-nav-item-button {
    background: transparent !important;
    padding: 0 12px !important;
  }
  /* Keep tabs at Startpage's native height — making them taller pushes the
     header past its hardcoded 118px offset and crops the filter row below. */
  .inline-nav .header-nav-item {
    display: flex !important;
    align-items: flex-end !important;
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
  /* Selected tab (best guess — Startpage doesn't ship aria-current,
     instead it nests button > whatever in .vertical-link-web for the
     active one). Style with Google's blue underline. */
  .vertical-link-web .header-nav-item .header-nav-item-text {
    color: ${c.link} !important;
  }
  .vertical-link-web .header-nav-item {
    border-bottom-color: ${c.link} !important;
  }

  /* Filters row — Startpage ships a hardcoded padding-top: 118px to clear
     the fixed header. Bump it a touch to absorb any drift from our overrides. */
  @media (min-width: 990px) {
    #filters-container {
      padding-top: 132px !important;
    }
  }
  .privacy-indicator-button,
  .privacy-indicator-content,
  .privacy-indicator-text {
    background: transparent !important;
    color: ${c.textMuted} !important;
  }
  .dropdown-select {
    background: transparent !important;
    color: ${c.text} !important;
    border: 1px solid ${c.cardBorder} !important;
    border-radius: 16px !important;
  }
  .dropdown-display {
    background: ${c.searchBarBgFocused} !important;
    color: ${c.text} !important;
    border: 1px solid ${c.cardBorder} !important;
  }

  /* Hide "Private Search" pill — Google has no equivalent. */
  .private-search-dropdown {
    display: none !important;
  }

  /* ---------- Search-suggestion dropdown ---------- */
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

  /* ---------- Result block ---------- */
  .result {
    background: transparent !important;
    margin-bottom: ${s.resultMarginBottomPx}px !important;
    max-width: ${s.resultMaxWidthPx}px !important;
    padding: 0 !important;
    border: none !important;
  }

  /* Title — Startpage ships an h2.wgl-title inside an <a> with emotion
     class. Force Google's blue + size + Google Sans. */
  .wgl-title,
  .result-link .wgl-title,
  .result-title .wgl-title,
  a.result-link h2,
  a[class*="result-link"] h2 {
    font-family: ${f.display} !important;
    font-size: ${s.titlePx}px !important;
    font-weight: 400 !important;
    line-height: ${s.titleLineHeightPx}px !important;
    color: ${c.link} !important;
  }
  a.result-link,
  a[class*="result-link"],
  a.result-link:link {
    color: ${c.link} !important;
    text-decoration: none !important;
  }
  a.result-link:visited,
  a.result-link:visited .wgl-title,
  a[class*="result-link"]:visited,
  a[class*="result-link"]:visited h2 {
    color: ${c.linkVisited} !important;
  }

  /* Site name + URL row */
  .wgl-site-title,
  .wgl-site-title .link-text {
    font-family: ${f.display} !important;
    font-size: ${s.sitePx}px !important;
    color: ${c.siteName} !important;
  }
  .wgl-display-url,
  .wgl-display-url *,
  .wgl-display-url .link-text {
    font-family: ${f.body} !important;
    font-size: ${s.sitePathPx}px !important;
    color: ${c.cite} !important;
  }
  .favicon-container {
    background: ${c.bg} !important;
    border-color: ${c.cardBorder} !important;
  }

  /* Snippet */
  .description {
    font-family: ${f.body} !important;
    font-size: ${s.snippetPx}px !important;
    line-height: ${s.snippetLineHeight} !important;
    color: ${c.textMuted} !important;
  }

  /* Hide "Visit in Anonymous View" affordance. */
  .anonymous-view-link {
    display: none !important;
  }

  /* ---------- Wikipedia Quick Info card ---------- */
  .wiki-container,
  .wiki-qi-container,
  .wiki-qi-container-see-more,
  .wiki-qi-container .result,
  .wiki-qi-container-see-more .result {
    background: transparent !important;
    color: ${c.text} !important;
    border-color: ${c.cardBorder} !important;
    box-shadow: none !important;
  }
  .wiki-qi-container .headline a,
  .wiki-qi-container-see-more .headline a,
  .wiki-qi-container .headline h2,
  .wiki-qi-container-see-more .headline h2 {
    color: ${c.link} !important;
    font-family: ${f.display} !important;
  }
  .wiki-qi-container .description,
  .wiki-qi-container-see-more .description,
  .wiki-qi-container p,
  .wiki-qi-container-see-more p {
    color: ${c.textMuted} !important;
  }
  .wiki-qi-container .wiki-attr,
  .wiki-qi-container-see-more .wiki-attr {
    color: ${c.link} !important;
  }
  .see-more-btn {
    background: transparent !important;
    color: ${c.text} !important;
    border-color: ${c.cardBorder} !important;
  }

  /* ---------- Sidebar ---------- */
  #sidebar {
    background: transparent !important;
  }

  /* ---------- Pagination ---------- */
  .pagination {
    background: transparent !important;
  }
  .pagination button {
    background: transparent !important;
    color: ${c.text} !important;
    border: 1px solid ${c.cardBorder} !important;
  }
  .pagination button[aria-current="page"],
  .pagination form[aria-label*="current"] button {
    background: ${c.link} !important;
    color: #1a1a1a !important;
    border-color: ${c.link} !important;
  }

  /* ---------- Feedback widget ---------- */
  .feedback-button {
    background: ${c.searchBarBg} !important;
    color: ${c.text} !important;
  }
  .feedback-button__text {
    color: ${c.text} !important;
  }

  /* ---------- Support banner (the green/teal "Supporting Startpage is easy" strip) ---------- */
  /* Hide it on the SERP — Google has nothing like it. */
  .support-banner {
    display: none !important;
  }

  /* ---------- Footer ---------- */
  footer,
  [class*="eu3pp1u0"] {
    background: ${c.bg} !important;
    color: ${c.text} !important;
    border-top: 1px solid ${c.cardBorder} !important;
  }
  footer a,
  footer .link-text,
  footer p,
  footer span {
    color: ${c.text} !important;
  }

  /* ---------- Generic Startpage-blue link override ---------- */
  /* Startpage uses #2E39B3 for many links. Re-color to Google's link blue
     where it would otherwise show through (sitelinks, "read more", etc.). */
  a[class*="result-link"]:link,
  a[class*="result-link"] h2,
  .result a:link,
  .result a:link h2,
  .sitelink-container a,
  .sitelink-container a span,
  .wgl-sitelinks a,
  .wgl-sitelinks a span {
    color: ${c.link} !important;
  }
  .result a:visited,
  .result a:visited h2 {
    color: ${c.linkVisited} !important;
  }

  /* ---------- Body font ---------- */
  body {
    font-family: ${f.body} !important;
  }
  h1, h2, h3, h4 {
    font-family: ${f.display} !important;
  }

  /* ---------- Theme-flash mitigation override ---------- */
  /* Startpage injects an inline <style class="theme-flash-mitigation"> that
     forces html background to #fff via a media query. We can't kill the
     inline rule but our id'd <style> tag is appended later, so this wins. */
  @media (prefers-color-scheme: light) {
    html { background: ${c.bg} !important; }
  }
`;
