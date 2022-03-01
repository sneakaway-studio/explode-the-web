// background.js
console.log("💥 Hello from background.js");




// chrome.runtime.onInstalled.addListener(({
//     reason,
//     version
// }) => {
//     console.log("💥 onInstalled");
//     if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
//         launchWelcomePage();
//     }
// });
//
// chrome.action.onClicked.addListener((tab) => {
//     launchWelcomePage();
// });
//
// function launchWelcomePage(info, tab) {
//     let url = chrome.runtime.getURL("welcome.html");
//     chrome.tabs.create({
//         url
//     });
// }
