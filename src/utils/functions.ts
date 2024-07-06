export async function sha256(rawData: string | object) {
  const data =
    typeof rawData === "object" ? JSON.stringify(rawData) : String(rawData);

  const msgBuffer = new TextEncoder().encode(data);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function isBrave() {
  return window.location.hostname === "search.brave.com";
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
