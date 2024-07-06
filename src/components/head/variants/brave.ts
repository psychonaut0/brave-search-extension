export function changeBraveTitle() {
  document.title = document.title
    .replace("Brave", "Google")
    .replace("Private Search Engine - ", "")
    .replace("Search", "");
}
