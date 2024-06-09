export function observeDOMChanges(operations: Function[]) {
  const targetNode = document.body;
  const config = { childList: true, subtree: true };

  const callback = (mutationsList: any) => {
    observer.disconnect();

    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        operations.forEach((operation) => {
          try {
            operation();
          } catch (error) {
            console.error("Error executing operation:", error);
          }
        });
      }
    }

    observer.observe(targetNode, config);
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}
