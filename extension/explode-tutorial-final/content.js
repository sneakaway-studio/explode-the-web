// content.js
console.log("💥 Hello from content.js");

// 1. Add hello world ^

// 2. Add explosion keypress test

// 3. Add explosion timer test

// 4. Count trackers

// 5. Add tracker button

// 6. Add explosion countdown







$(document).ready(() => {
    console.log(`💥 The page title is ${document.title}`);
    console.log(`💥 The url is ${window.location.href}`);

    // get scripts on the page
    var scriptsFoundArr = getScriptsFound();

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
