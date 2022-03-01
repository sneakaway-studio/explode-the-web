<!-- paginate: true -->

# <img width="4%" src="../../extension/explode-tutorial-final/assets/img/explosion-tutorial-icon.svg"> 3-DOM

<span class="slides-small"><a href="../slides/3-dom.html">slides</a> | <span class="slides-small"><a href="../markdown/3-dom">markdown</a> | <a href="../www/3-dom.html">HTML</a></span>

<span class="slides-small">[⌂](../../README.md) | [0-Introduction](0-introduction.html) | [1-Hello World!](1-hello-world.html) | [2-Architecture](2-architecture.html) | [3-DOM](3-dom.html) | [4-Explosion](4-explosion.html) | [5-Publishing](5-publishing.html)</span>

<!--
Presentation comments ...
-->

1. Download and add project assets
1. Add a browser action and icons
1. Check the trackers on the page





---

## 👉 Get project assets

<div class="twocolumn">
<div class="col">

1. Download the [`assets.zip`](https://github.com/sneakaway-studio/explode-the-web/tree/main/extension) file you'll need to continue the tutorial.
1. Unzip the folder and place it in your `explode-tutorial` project folder.
1. Your structure should look like this >

</div>
<div class="col">

```
/explode-tutorial/
    assets/
        css/
        img/
        libs/
        js/
        pages/
        sounds/
    background.js
    content.js
    manifest.json
```

</div>
</div>







---

## Browser action

<div class="twocolumn">
<div class="col">

- An [action](https://developer.chrome.com/docs/extensions/reference/action/) adds an extension icon and popup window to the browser toolbar.
- The action is sometimes called "browser action", or "popup script".
- The action popup is an HTML page you define and has its own context (and its own DevTools console!).

</div>
<div class="col">

<img width="700" src="../figures/tutorial-2022/2-1-diagram-architecture.svg">

</div>
</div>






---

## 👉 Add an action

<div class="twocolumn">
<div class="col">

1. Add a new file to the project folder called `action.html`
1. Paste in this code.

</div>
<div class="col">

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body>
<div style="width:220px; text-align:center">
<p>💥 Explode Tracked Pages!</p>
<p>Press e + ~ to test</p>
</div>
</body>
</html>
```



</div>
</div>







---

## 👉 Add the action and icons to the manifest

<div class="twocolumn">
<div class="col">

- The icon identifies the browser extension in the `chrome://extensions` page.
- Add this code to your manifest to add the icon and action and refresh the extension.

</div>
<div class="col">

```json
"icons": {
    "16": "assets/img/explosion-icon16.png",
    "32": "assets/img/explosion-icon32.png",
    "64": "assets/img/explosion-icon64.png",
    "128": "assets/img/explosion-icon128.png"
},

"action": {
    "default_icon": {
        "16": "assets/img/explosion-icon16.png",
        "32": "assets/img/explosion-icon32.png"
    },
    "default_title": "Explode Tracked Web Pages!",
    "default_popup": "action.html"
},
```

</div>
</div>






---

## 👉 Add libraries to manifest

<div class="twocolumn">
<div class="col">

- Let's go ahead and reference the libraries we need in our manifest.
- Edit your `content_script` section to look like this, and add `web_accessible_resources` at the end.
- The full manifest can be referenced here if you prefer to copy and paste:

</div>
<div class="col">

```json
"content_scripts": [{
    "matches": ["<all_urls>"],
    "js": [
        "assets/libs/anime.min-3.2.0.js",
        "assets/libs/jquery-3.6.0.min.js",
        "assets/libs/purify-2.3.4.js",
        "assets/js/disconnect-tracking-services.js",
        "assets/js/functions.js",
        "assets/js/keys.js",
        "assets/js/explode.js",
        "content.js"
    ],
    "css": [
        "assets/css/styles.css"
    ],
    "run_at": "document_end",
    "all_frames": true
}],

"web_accessible_resources": [{
    "resources": ["*.svg", "*.mp3"],
    "matches": ["<all_urls>"],
    "use_dynamic_url": true
}]
```

</div>
</div>






---

## Part 3 conclusion

- We made a lot of progress, adding assets with icons, a test page, and

- 👉 Start the next section [Document Object Model](3-dom.html)




---

## TEMPLATE

<div class="twocolumn">
<div class="col">



</div>
<div class="col">



</div>
</div>
