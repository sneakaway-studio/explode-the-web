console.log("Hello from background.js");




chrome.runtime.onInstalled.addListener(({
    reason,
    version
}) => {
    if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
        showWelcome();
    }
});

chrome.action.onClicked.addListener((tab) => {
    showWelcome();
});

function showWelcome(info, tab) {
    let url = chrome.runtime.getURL("welcome.html");
    chrome.tabs.create({
        url
    });
}
