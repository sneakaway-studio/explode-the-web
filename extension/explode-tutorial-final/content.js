// content.js
console.log("💥 Hello from content.js");

$(document).ready(() => {
    console.log(`💥 The page title is ${document.title}`);

    // get scripts on the page
    var scriptsFoundArr = document.getElementsByTagName("script");
    // console.log(scriptsFoundArr);

    // get trackers
    let trackersFoundArr = getTrackersFound(scriptsFoundArr);

    // if there are trackers on the page
    if (trackersFoundArr.length > 0) {
        // display the graphic
        displayTrackerList(trackersFoundArr);
    }

    // if trackers count is >= max
    if (trackersFoundArr.length >= 3) {
        // start the explosion countdown
        startExplosionCountdown(10);
    }
});
