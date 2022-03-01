<!-- paginate: true -->

# <img width="4%" src="../../extension/explode-tutorial-final/assets/img/explosion-tutorial-icon.svg"> 3-DOM

<span class="slides-small"><a href="../slides/3-dom.html">slides</a> | <span class="slides-small"><a href="../markdown/3-dom">markdown</a> | <a href="../www/3-dom.html">HTML</a></span>

<span class="slides-small">[⌂](../../README.md) | [0-Introduction](0-introduction.html) | [1-Hello World!](1-hello-world.html) | [2-Architecture](2-architecture.html) | [3-DOM](3-dom.html) | [4-Explosion](4-explosion.html) | [5-Publishing](5-publishing.html)</span>

<!--
Presentation comments ...
-->

1. Download and add project assets
1. Add a browser action
1. Check the trackers on the page





---

## 👉 Get project assets

- Let's get assets you'll need to continue the project.

<div class="twocolumn">
<div class="col">



</div>
<div class="col">

test.html

</div>
</div>







---

## 👉 Add icons

<div class="twocolumn">
<div class="col">

- The icon identifies the browser extension in the `chrome://extensions` page.
- If you haven't already, download the assets for this tutorial at:
- Unzip the folder and place it in your `explode-tutorial` folder.

</div>
<div class="col">

```json
"icons": {
    "16": "assets/img/explosion-icon16.png",
    "32": "assets/img/explosion-icon32.png",
    "64": "assets/img/explosion-icon64.png",
    "128": "assets/img/explosion-icon128.png"
},
```

</div>
</div>




---

## 👉 Add an action

<div class="twocolumn">
<div class="col">

- An [action](https://developer.chrome.com/docs/extensions/reference/action/) adds an extension icon and popup window to the browser toolbar.
- The action was formerly called "browser action", or "popup script"


</div>
<div class="col">

```json
"background": {
    "service_worker": "background.js"
},
```

</div>
</div>











---

## TEMPLATE

<div class="twocolumn">
<div class="col">



</div>
<div class="col">



</div>
</div>
