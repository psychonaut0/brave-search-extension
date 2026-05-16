export function changeBraveTitle() {
  const next = document.title
    .replace("Brave", "Google")
    .replace("Private Search Engine - ", "")
    .replace("Search", "");
  if (next !== document.title) document.title = next;
}
