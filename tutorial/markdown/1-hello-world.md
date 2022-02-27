<!-- paginate: true -->

# <img width="4%" src="../../extension/explode-tutorial-final/assets/img/explosion-tutorial-icon.svg"> 1- Hello World!

<span class="slides-small"><a href="../slides/1-hello-world.html">slides</a> | <span class="slides-small"><a href="../markdown/1-hello-world.md">markdown</a> | <a href="../www/1-hello-world.html">HTML</a></span>

<span class="slides-small">[⌂](../../README.md) | [0-Introduction](0-introduction.html) | [1-Hello World!](1-hello-world.html) | [2-Architecture](2-architecture.html) | [3-DOM](3-dom.html) | [4-Explosion](4-explosion.html) | [5-Publishing](5-publishing.html)</span>

<!--
Presentation comments ...
-->

1. HTML, CSS, and Javascript
1. Create manifest.json
1. Load an extension
1. Edit and refresh an extension
1. Next steps




---

## HTML, CSS, Javascript

<div class="twocolumn">
<div class="col">

- Like all web pages, extensions are built using HTML, CSS, and Javascript code.
- [HTML](https://www.w3schools.com/html/default.asp) (HyperText Markup Language) structures content for the web.
- [CSS](https://www.w3schools.com/css/default.asp) (Cascading StyleSheets) control the presentation of content.
- [JS](https://www.w3schools.com/js/default.asp) (Javascript) is the programming language for web pages.
- This simple example will look like:
> <p>This is a <span style="color:red">paragraph</span></p>

</div>
<div class="col">

```html
<!-- hello.html -->
<html>
<head>
<title>Hello world!</title>
<link rel="stylesheet" href="styles.css">
<body>
<h1>Hello world!</h1>
<p>This is a <span style="color:red">paragraph</span></p>
<script src="main.js"></script>
</body>
</html>
```

```css
/* styles.css */
span { color: red; }
```

```js
// main.js
alert("This is a simple Javascript alert");
```

</div>
</div>








---

## 👉 Create the manifest file

The <a target="_blank" href="https://developer.chrome.com/docs/extensions/mv3/manifest/">manifest file</a> tells the browser how to install and run the extension code.

<div class="twocolumn">
<div class="col">

1. Create a new folder and call it `explode-tutorial`
1. Create a new file `manifest.json` inside this folder.
1. Paste or type the example.
1. Install the extension in your browser using the instructions below.

</div>
<div class="col">

```json
{
	"name": "My First Browser Extension",
	"description": "🐌",
	"version": "1.0",
	"manifest_version": 3
}
```

<div class="slides-small caption">We are using Manifest version 3, which is now required for all new published extensions.</div>

</div>
</div>





---

## 👉 Install an extension for development


<div class="twocolumn">
<div class="col">

#### Chromium Browsers

1. Go to `chrome://extensions`
1. Enable Developer mode by toggling the checkbox in the upper-right corner.
1. Click "Load unpacked" and select the folder with your extension manifest file.

</div>
<div class="col">

#### <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#installing">Mozilla Firefox</a>

1. Go to `about:debugging`.
1. Click "This Firefox".
1. Click "Load Temporary Add-on" and select any file in your extension folder.
1. The extension will remain installed until you restart Firefox.

</div>
</div>

<div class="slides-small caption">We are building a "cross-browser extension" so, from this point instructions refer to Chromium browsers (Chrome, Brave, Opera, Edge, <a target="_blank" href="https://en.wikipedia.org/wiki/Chromium_(web_browser)#Browsers_based_on_Chromium">and others</a>), but it will work fine in <a target="_blank" href="https://developer.chrome.com/docs/extensions/mv3/getstarted/">Chrome</a> or <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions">Firefox</a>.</div>




---

## 👉 Confirm the extension has loaded

<div class="twocolumn">
<div class="col">

1. Confirm your extension has loaded at `chrome://extensions`
1. Examine the panel for your extension to see the name, description, and version from your manifest file.
1. Notice also the enable|disable toggle and reload button.

</div>
<div class="col">

<img width="550" src="../figures/tutorial-2022/1-1-installed.png">

<div class="slides-small caption">Note that, "unpacked" simply means the folder and files have not yet been zipped to upload and distribute on Chrome or Firefox platforms. You can recognize unpacked extensions by the orange "hard drive" icon.</div>

</div>
</div>





---

## 👉 Edit and refresh an extension

These are basic steps you repeat will to build and test any extension. Try updating your manifest to match the example.

<div class="twocolumn">
<div class="col">

1. Edit and save the extension files in your code editor.
1. Click the small "refresh" button at `chrome://extensions` to reload the extension.
1. Normally you'll refresh a test page to run the extension on that page. Let's add one now.

</div>
<div class="col">

```json
{
	"name": "Explode the Web! Tutorial",
	"description": "🐢",
	"version": "1.1",
	"manifest_version": 3
}
```

<div class="slides-small caption">You may have probably aleady noticed that the 👉 emoji lets you know there are steps to complete.</div>

</div>
</div>





---

## Part 1 conclusion

- So far we have created a project folder and manifest, and learned how to load, update, and refresh the extension in Chrome.
- You check your progress by looking at the completed files for each section, for example in `extensions/explode-tutorial-1`.
- 👉 Start the next section [Architecture and Debugging](2-architecture.html)
