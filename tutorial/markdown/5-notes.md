<!-- paginate: true -->

# Notes






Tracker blockers work by accessing the source code of a web page,
identifying content areas that are known to import third-party trackers or show
advertisements, and deleting that source code. Tis is possible because we can view the
content of web pages using the browser’s “view source” option. Te view source option has
been available almost as long as web browsers have been in use and is an essential part of
what makes the internet “open.” With it, anyone can see how a web page is constructed, to
inspect or learn from others’ code, and improve the web. As Stack Overfow co-founder
Jef Atwood explained on his popular blog Coding Horror, it is the “ultimate form of open
source” and an important reason for why the internet is so accessible today6
.
6
Mark
Surman, the Executive Director of the Mozilla Foundation, argues for “view source” not
only as pragmatic, but instead, as fundamental to the transparency, openness, and
collaborative goals that underpin all of civil society7
.
7






---



## Tutorial


1. The Document Object Model (DOM)
    1. Accessing DOM elements
    1. Manipulating the DOM
    1. The Javascript Console
1. Tracking the trackers
    1. Use JSON to look for trackers
    1. Reporting trackers in the console
1. Explode the web!
    1. Adding a browser_action
    1. Testing the explosion
    1. `setTimeout()` to give user time to opt out
    1. Connecting the tracker script to the explosion


---


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
