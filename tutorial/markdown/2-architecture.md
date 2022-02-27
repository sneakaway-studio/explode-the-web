<!-- paginate: true -->

# <img width="4%" src="../../extension/assets/img/explode-ui.svg"> 2-Archicture and debugging

<span class="slides-small"><a href="../slides/2-architecture.html">slides</a> | <span class="slides-small"><a href="../markdown/2-architecture.md">markdown</a> | <a href="../www/2-architecture.html">HTML</a></span>

<span class="slides-small">[⌂](../../README.md) | [0-Introduction](0-introduction.html) | [1-Hello World!](1-hello-world.html) | [2-Architecture](2-architecture.html) | [3-DOM](3-dom.html) | [4-Explosion](4-explosion.html) | [5-Publishing](5-publishing.html)</span>

<!--
Presentation comments ...
-->

1. Create the architecture
1. Background Scripts
1. Content Scripts
1. Popup action
1. Debug an extension





---

## 👉 Create the project architecture

- In this section we will add several files to create the archicture for the extension.
- Our project folder "explode-tutorial" is where we'll add files to build the extension. Files added directly to this folder like "explode-tutorial/manifest.json" are said to be in the "root" of the project folder.
- You can find completed files for each section in the `tutorial/versions/` folder.

Adding a "test page" makes it easy to test our project as we build onto it.

<div class="twocolumn">
<div class="col">

1. Create a new file called `test.html` inside the root of your project folder.
1. Paste or type the example into this file.
1. Open your test page in the browser in a tab next to the `chrome://extensions` page

</div>
<div class="col">



</div>
</div>

<div class="slides-small caption">The previous HTML example showed CSS and JS in separate files. For simplicity, this test page keeps them in a single document.</div>






---

## 👉 Add a background script



<div class="twocolumn">
<div class="col">



</div>
<div class="col">

```json
"background": {
    "service_worker": "background.js"
},
```

</div>
</div>

<div class="slides-small caption">Reference: <a target="_blank" href="https://developer.chrome.com/docs/extensions/mv3/service_workers/">service workers</a></div>


https://developer.chrome.com/docs/extensions/mv3/architecture-overview/



---

## 👉 Add a content script

Content scripts are injected into web pages a user visits and can access content, listen for events, etc. like other scripts on that page.

<div class="twocolumn">
<div class="col">

1. Add a file `content.js` to the root of your project.
1. Update `manifest.json` to reference this file.
1.

</div>
<div class="col">

```js
// content.js

```

```json
"content_scripts": [{
    "matches": ["<all_urls>"],
    "css": ["styles.css"],
    "js": ["content.js"]
}],
```

</div>
</div>

<div class="slides-small caption">Reference: <a target="_blank" href="https://developer.chrome.com/docs/extensions/mv3/content_scripts/">content scripts</a></div>







---

## How to debug an extension


1. Perhaps the most important thing besides proof your project is "working" is to be able to determine and debug when it is *not working*.







---

## TEMPLATE

<div class="twocolumn">
<div class="col">



</div>
<div class="col">



</div>
</div>
