// content.js
console.log("💥 Hello from content.js");

$(document).ready(() => {
    console.log(`💥 The page title is ${document.title}`);

    // get scripts on the page
    var scriptsFoundArr = document.getElementsByTagName("script");
    console.log(scriptsFoundArr);

});
