import { removeElementByQuery } from "../utils/functions";

export function observeDOMChanges(operations: Function[]) {
  const targetNode = document.body;
  const config = { childList: true, subtree: true };

  const callback = (mutationsList: any) => {

    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        operations.forEach((operation) => operation());
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}