// store trackers we find
var trackersFound = [],
	// get tracker list
	trackerList = disconnectTrackingServices,
	// get scripts on the page
	scriptsFound = document.getElementsByTagName("script");

// loop through found scripts, look for trackers
for (var i = 0, l = scriptsFound.length; i < l; i++) {
	// get source of script
	if (scriptsFound[i].src !== "") {
		// store src of script
		var str = scriptsFound[i].src;
		// get root domain of scripts src
		var scriptDomain = extractRootDomain(str);
		// look to see if tracker root domain is in trackerList
		if (trackerList.indexOf(scriptDomain) >= 0) {
			console.log("👀 👀 getTrackers()", str, scriptDomain);
			// add to found list
			trackersFound.push(scriptDomain);
		}
	}
}

// if there are trackers on the page
if (trackersFound.length > 0) {



	var str = "<div class='explode-notification'>" +
		"<span class='explode-number'>" + trackersFound.length + "</span>" +
		"<span class='explode-text'>" + " tracker(s)" + "</span>" +
		"</div>" +
		"<div class='explode-tracker-list'>" + trackersFound.join("<br>") + "</div>";
	$('body').append(str);

	$(document).on('click', '.explode-notification', function() {
		$('.explode-tracker-list').toggle();
	})


}

console.log("trackersFound", trackersFound);
