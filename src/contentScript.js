// contentScript.js

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "send_data") {
    const pageUrl = request.url;
    const pageContent = document.documentElement.outerHTML;
    chrome.runtime.sendMessage({
      message: "data_received",
      url: pageUrl,
      content: pageContent,
    });
  }
});
export const fetchData = () => {
  chrome.runtime.sendMessage({ message: "get_data" });
};
