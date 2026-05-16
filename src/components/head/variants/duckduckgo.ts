export function changeDuckduckGoTitle() {
  const next = document.title
    .replace("DuckDuckGo", "Google")
    .replace("— Privacy, simplified.", "")
    .replace("at", "-");
  if (next !== document.title) document.title = next;
}
