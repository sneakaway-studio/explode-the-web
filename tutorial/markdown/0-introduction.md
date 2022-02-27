<!-- paginate: true -->

# <img width="4%" src="../../extension/assets/img/explode-ui.svg"> Explode the Web!

Make a browser extension to destroy web pages that steal your data.

<span class="slides-small"><a href="../slides/0-introduction.html">slides</a> | <span class="slides-small"><a href="../markdown/0-introduction.md">markdown</a> | <a href="../www/0-introduction.html">HTML</a></span>

<!--
Presentation comments ...
-->




---

## What you will learn

After this presentation you'll be able to:

1. Explain how browser extensions are used
1. Create a basic "hello world" example, and learn to debug extensions
1. How to work the DOM and add a Javascript library
1. Complete an extension to explode web pages with hidden data trackers.



---

## What is a Browser Extension?

<div class="twocolumn">
<div class="col">

- Browser extensions are software that add features to a web browser.
- Some are useful—the [Wayback Machine extension](https://chrome.google.com/webstore/detail/wayback-machine/fpnmgdkabkmnadcjpehmlllkndpkmiak/related?hl=en-US) shows you what a web page looked like in the past, even if it was deleted.

</div>
<div class="col">
<img width="475" src="../figures/tutorial-2022/0-wayback.jpg">
</div>
</div>





---

## What is a Browser Extension?

<div class="twocolumn">
<div class="col">

- Extensions can also be playful.
- [Meow Met](https://chrome.google.com/webstore/detail/meow-met/annljkgbhnihbghkbfammlacnlfkdclp?hl=en) displays a new random image from their collection that contains a cat when you open a new browser tab.

</div>
<div class="col">
<img width="475" src="../figures/tutorial-2022/0-meowmet.jpg">
<div class="slides-small caption">Emily McAllister, Metropolitan Museum of Art (2015)</div>
</div>
</div>





---

## What is a Browser Extension?

<div class="twocolumn">
<div class="col">

- Ad blockers are some of the most popular extensions—removing annoying banner, popup, and video advertisements in real time<sup><a href="https://adblockplus.org/en/getting_started#subscription">2</a></sup>
- Similarly, tracker blockers prevent hidden trackers from collecting and monetizing your private searches, communications, and behaviors.

</div>
<div class="col">
<img width="475" src="../figures/tutorial-2022/0-blockers.png">
<div class="slides-small caption">Ghostery, Disconnect, Privacy Badger, AdBlockPlus</div>
</div>
</div>






---

## Building cross-browser extensions


In this tutorial

we'll start by setting up a basic "hello world" example
