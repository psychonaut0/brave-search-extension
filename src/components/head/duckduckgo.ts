export function changeDuckduckGoTitle() {
  document.title = document.title
    .replace("DuckDuckGo", "Google")
    .replace("— Privacy, simplified.", "")
    .replace("at", "-");
}
