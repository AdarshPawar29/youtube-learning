// background.js

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "get_data") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        message: "send_data",
        url: activeTab.url,
      });
    });
  }
});
