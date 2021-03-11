
![Exploded CNN](https://github.com/sneakaway-studio/explode-the-web/blob/master/screenshots/exploded-cnn-440x280.png "Exploded CNN")



# Explode the Web

A browser extension that explodes web pages with third party trackers.



## Install the extension

* Chrome, [Brave](https://support.brave.com/hc/en-us/articles/360017909112-How-can-I-add-extensions-to-Brave-), Opera - Install via [Chrome Web Store](https://chrome.google.com/webstore/detail/explode-the-web/dmedbnfdhjfppcgbccpfaigicbnajhod)
* Firefox - [Install via Mozilla AddsOns](https://addons.mozilla.org/addon/explode-the-web/)



## About the tutorial

Read the article and tutorial: [Browser Blowup: Explode Web Pages Containing Third-Party Trackers](https://owenmundy.com/_site/content/_info/writing/sc_cookbook_2_browser_blowup.pdf) published in [Signal Culture Cookbook Vol.2.](http://signalculture.org/cookbookvol2.html#.XvZmqJNKiL4) Edited by Jason Bernagozzi (2019).


### Source code nodes

* [/extension](./extension) contains the finished extension
* [/figures](./figures) contains the tutorial figures
* [/tutorial](./tutorial) contains the tutorial files
* In order to hot reload scripts add this line to the background `"scripts": ["assets/libs/hot-reload.js"]`


### Part 1. Hello World!

* HTML, CSS, Javascript, and jQuery
* Manifest.json
* Content Scripts


### Part 2: The Document Object Model (DOM)

* Accessing DOM elements
* Manipulating the DOM
* The Javascript Console


### Part 3: Tracking the trackers

* Use JSON to look for trackers
* Reporting trackers in the console


### Part 4: Explode the web!

* Adding a browser_action
* Testing the explosion
* `setTimeout()` to give user time to opt out
* Connecting the tracker script to the explosion




## 3rd party resources

* [Disconnect Tracking Services list](https://github.com/disconnectme/disconnect-tracking-protection)
* [Chrome Extension Hot Reloader](https://github.com/xpl/crx-hotreload)
* [anime.js](https://github.com/juliangarnier/anime)
* [jQuery](https://jquery.org)


## Privacy Policy

This extension uses analytics to improve functionality. It does not collect any personally identifiable information (PII).


## Credits

* Owen Mundy
* Joelle Dietrick
* Gretta Louw
