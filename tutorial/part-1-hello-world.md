


### Source code nodes

- [/extension](./extension) contains the finished extension
- [/figures](./figures) contains the tutorial figures
- [/tutorial](./tutorial) contains the tutorial files
- ~~In order to hot reload scripts ...~~


### Part 1. Hello World!

- HTML, CSS, Javascript, and jQuery
- Manifest.json
- Content Scripts


### Part 2: The Document Object Model (DOM)

- Accessing DOM elements
- Manipulating the DOM
- The Javascript Console


### Part 3: Tracking the trackers

- Use JSON to look for trackers
- Reporting trackers in the console


### Part 4: Explode the web!

- Adding a browser_action
- Testing the explosion
- `setTimeout()` to give user time to opt out
- Connecting the tracker script to the explosion





## 3rd-party Libraries

This extension uses [Disconnect Tracking Services list](https://github.com/disconnectme/disconnect-tracking-protection) and the following libraries:

```
https://github.com/juliangarnier/anime/blob/3.2.0/lib/anime.min.js
https://github.com/jquery/jquery/releases/tag/3.6.0
https://github.com/cure53/DOMPurify/releases/tag/2.3.4
```
<small>^These are the official release URLs for Firefox Addon review</small>



## CHANGELOG

2022-Jan-08
- Remove Google Analytics
- Adds DOMPurify https://github.com/cure53/DOMPurify
- Updates libraries
