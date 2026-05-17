export function changeStartpageTitle() {
  const next = document.title
    .replace("Startpage", "Google")
    .replace("The world's most private search engine - ", "")
    .replace(" - The world's most private search engine", "");
  if (next !== document.title) document.title = next;
}
