<!-- paginate: true -->

# <img width="4%" src="../../extension/explode-tutorial-final/assets/img/explosion-tutorial-icon.svg"> 2-Archicture and debugging

<span class="slides-small"><a href="../slides/2-architecture.html">slides</a> | <span class="slides-small"><a href="../markdown/2-architecture.md">markdown</a> | <a href="../www/2-architecture.html">HTML</a></span>

<span class="slides-small">[⌂](../../README.md) | [0-Introduction](0-introduction.html) | [1-Hello World!](1-hello-world.html) | [2-Architecture](2-architecture.html) | [3-DOM](3-dom.html) | [4-Explosion](4-explosion.html) | [5-Publishing](5-publishing.html)</span>

<!--
Presentation comments ...
-->

1. Extension architecture
1. Background Scripts
1. Content Scripts
1. Browser action
1. Debug an extension





---

## Extension architecture


<div class="twocolumn">
<div class="col">

- The distinct "contexts" for scripts in an extension determine what your code can do and data it can access.
- This separation provides security, but increases complexity.
- Let's add files to project and manifest using the three most common.

</div>
<div class="col">

<img width="700" src="../figures/tutorial-2022/2-1-diagram-architecture.svg">

<div class="slides-small caption">Basic architecture and contexts of a browser extension. The file names and <a target="_blank" href="https://developer.chrome.com/docs/extensions/mv3/architecture-overview/">structure</a> is up to you.</div>

</div>
</div>













---

## 👉 Add a background service worker

<div class="twocolumn">
<div class="col">

- Background <a target="_blank" href="https://developer.chrome.com/docs/extensions/mv3/service_workers/">service workers</a> are loaded just once, during installation.
- Background scripts operate continuously, can use certain browser APIs like [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), and connect to external APIs or databases.

</div>
<div class="col">

```js
// background.js
console.log("Hello from the background script!");
```

Add a file `background.js` to the root of your project and paste this code.

```json
"background": {
    "service_worker": "background.js"
},
```

</div>
</div>


<div class="slides-small caption">Our project folder "explode-tutorial" is where we'll add files to build the extension. Files added directly to this folder like "explode-tutorial/manifest.json" are said to be in the "root" of the project folder.</div>




---

## 👉 Add a content script

<div class="twocolumn">
<div class="col">

- <a target="_blank" href="https://developer.chrome.com/docs/extensions/mv3/content_scripts/">Content scripts</a> run inside web pages a user visits.
- They are loaded (a.k.a. "injected") into *each* page a user visits, and so can access web page content or listen for user events (just like other scripts on a web page).
- Content scripts can send and receive data from the background via [messages](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts).

</div>
<div class="col">

```js
// content.js
console.log("Hello from content.js");
console.log(`Title: ${document.title}`);
```

Add a file `content.js` to the root of your project and paste this code.

```json
"content_scripts": [{
    "matches": ["<all_urls>"],
    "js": ["content.js"]
}],
```
Update `manifest.json` to reference the new file by adding the above.

</div>
</div>


<!-- console.log("Hello from the content script at " + window.location.href); -->





---

## 👉 Add a page action

Browser action | a.k.a. "popup script" appears when a user clicks on the extension icon at the top right of the browser.







---

## 👉 Check the manifest

<div class="twocolumn">
<div class="col">

Your `manifest.json` file should now look like this.

</div>
<div class="col">

```json
{
	"name": "My First Browser Extension",
	"description": "🐌",
	"version": "1.1",
	"manifest_version": 2,
	"content_scripts": [{
		"matches": ["<all_urls>"],
		"js": ["content.js"]
	}],
	"background": {
		"scripts": ["background.js"]
	}
}
```

</div>
</div>






---

## How to debug an extension


1. Perhaps the most important thing besides proof your project is "working" is to be able to determine and debug when it is *not working*.


The content script is injected in the page, so you can see this message in the regular dev tools on any page. To see the message from the background script, click on "Inspect views background page" at `chrome://extensions`






---

## TEMPLATE

<div class="twocolumn">
<div class="col">



</div>
<div class="col">



</div>
</div>
