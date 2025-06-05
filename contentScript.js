browser.runtime.onMessage.addListener((message) => {
  if (message.action === "copy" && typeof message.url === "string") {
    // Create a temporary <textarea> to copy the URL
    const ta = document.createElement("textarea");
    ta.value = message.url;
    // Avoid scrolling the page by positioning off-screen
    ta.style.position = "fixed";
    ta.style.top = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }
});