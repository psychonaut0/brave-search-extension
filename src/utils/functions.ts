export async function sha256(rawData: string | object) {
  const data =
    typeof rawData === "object" ? JSON.stringify(rawData) : String(rawData);

  const msgBuffer = new TextEncoder().encode(data);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export type Site = "brave" | "duckduckgo" | "startpage";

export function getSite(): Site {
  const host = window.location.hostname;
  if (host === "search.brave.com") return "brave";
  if (host === "startpage.com" || host.endsWith(".startpage.com")) return "startpage";
  return "duckduckgo";
}

export function isBrave() {
  return getSite() === "brave";
}

export function isStartpage() {
  return getSite() === "startpage";
}

export function isDuckDuckGo() {
  return getSite() === "duckduckgo";
}

export function removeElementByQuery(query: string) {
  const element = document.querySelectorAll(`${query}`);
  if (element) {
    element.forEach((el) => el.remove());
  }
}

export function replaceElementTextByClassName(className: string, text: string) {
  const element = document.querySelector(className);
  if (element && element.textContent !== text) {
    element.textContent = text;
  }
}
