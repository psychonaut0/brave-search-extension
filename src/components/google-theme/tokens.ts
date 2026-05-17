// Design tokens extracted from a live Google SERP (dark mode). Used to
// drive the per-engine Google-style overrides under variants/.

export const tokens = {
  color: {
    bg: "#22242a",
    text: "#e8e8e8",
    textMuted: "#bfbfbf",
    link: "#99c3ff",
    linkVisited: "#c58af9",
    cite: "#bdc1c6",
    siteName: "#e8e8e8",
    searchBarBg: "#4d5156",
    searchBarBgHover: "#5f6368",
    searchBarBgFocused: "#303134",
    inputText: "#e8eaed",
    placeholder: "#9aa0a6",
    cardBorder: "#444746",
  },
  font: {
    body: "Arial, sans-serif",
    display: "'Google Sans', Arial, sans-serif",
  },
  size: {
    titlePx: 22,
    titleLineHeightPx: 28,
    snippetPx: 14,
    snippetLineHeight: 1.58,
    sitePx: 14,
    sitePathPx: 12,
    inputPx: 16,
    searchBarHeightPx: 50,
    searchBarRadiusPx: 26,
    resultMarginBottomPx: 30,
    resultMaxWidthPx: 652,
  },
} as const;
