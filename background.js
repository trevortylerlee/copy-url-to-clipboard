browser.commands.onCommand.addListener((command) => {
  if (command === "copy-url") {
    // Find the active tab in the current window
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
      if (!tabs[0] || !tabs[0].id) {
        return;
      }
      const url = tabs[0].url || "";
      // Send a message to the content script to perform the copy
      browser.tabs.sendMessage(tabs[0].id, { action: "copy", url });
    });
  }
});