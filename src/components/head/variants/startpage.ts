export function changeStartpageTitle() {
  // Home title: "Startpage - Private Search Engine. No Tracking. No Search History."
  // SERP title format hasn't been confirmed — the Startpage replacement
  // alone covers the common case ("<query> - Startpage").
  const next = document.title
    .replace("Startpage", "Google")
    .replace(
      " - Private Search Engine. No Tracking. No Search History.",
      ""
    );
  if (next !== document.title) document.title = next;
}
