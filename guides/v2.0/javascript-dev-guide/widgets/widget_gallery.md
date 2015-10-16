---
layout: default
group: jsdg
subgroup: Widgets
title: Gallery widget
menu_order: 7
menu_title: Gallery widget
github_link: javascript-dev-guide/widgets/widget_gallery.md
---

<h2>Overview</h2>

The gallery widget is used to display product photos on product pages. Gallery implements content area with images organized into preview and thumbnails blocks. It uses the <a href="http://fotorama.io/">jQuery Fotorama library</a>

In addition, integrated Gallery Magnifier can be used to demonstrate images in 100% scaled size in separate dedicated layer,
or Gallery Fullscreen mode can be used to navigate the entire full sized photo.

Gallery is displayed consistently across all supported browsers and is responsive - it sizes correctly on mobile devices and desktops.

The gallery widget source is <a href="{{site.mage2000url}}lib/web/mage/gallery/gallery.js">lib/web/mage/gallery/gallery.js</a>

The gallery magnifier source is <a href="{{site.mage2000url}}lib/web/magnifier/magnify.js"> lib/web/magnifier/magnify.js</a>.
 
<p class="q">is it a widget as well?</p>

<h2>Initialize the gallery widget</h2>

<h2>Options</h2>
<ul>
<li><a href="#gallery_allowfullscreen">allowfullscreen</a></li>
<li><a href="#gallery_captions">captions</a></li>
<li><a href="#gallery_click">click</a></li>
<li><a href="#gallery_height">height</a></li>
<li><a href="#gallery_loop">loop</a></li>
<li><a href="#gallery_maxheight">maxheight</a></li>
<li><a href="#gallery_maxwidth">maxwidth</a></li>
<li><a href="#gallery_mindwidth">minwidth</a></li>
<li><a href="#gallery_minheigth">minheigth</a></li>
<li><a href="#gallery_nav">nav</a></li>
<li><a href="#gallery_ratio">ratio</a></li>
<li><a href="#gallery_thumbheight">thumbheight</a></li>
<li><a href="#gallery_thumbwidth">thumbwidth</a></li>
<li><a href="#gallery_startindex">startindex</a></li>
<li><a href="#gallery_swipe">swipe</a></li>
<li><a href="#gallery_width">width</a></li>
</ul>

<h3 id="gallery_allowfullscreen"><code>allowfullscreen</code></h3>
Show the button that toggles full screen view of the gallery.

**Type**: Boolean

Example of the initialization with the allowfullscreen option specified:

     $("#element").fotorama({ thumbwidth: 90});

<p class="q">thumbwidth??</p>

<h3 id="gallery_captions"><code>captions</code></h3>

Defines if the caption is visible.

**Type**: Boolean

Example of the initialization with the captions option specified:
     $("#element").fotorama({ captions: false});

<h3 id="gallery_click"><code>click</code></h3>

Enable navigation through preview frames by clicking the Next and Previous buttons. 

**Type**: Boolean

Example of the initialization with the click option specified:
     $("#element").fotorama({ click: false});

<h3 id="gallery_height"><code>height</code></h3>

Height of the preview block in pixels or percents.

**Type**: Number|String
     
**Default value**: null

<h3 id="gallery_loop"><code>loop</code></h3>

Define whether images are displayed in a loop.

Type: Boolean

Default: `false`

Example of the initialization with the loop option specified:
     $("#element").fotorama({ loop: true});

<h3 id="gallery_maxwidth">maxwidth</h3>

Maximum width of a preview in pixels or percents.

**Type**: Number, String

**Default value**: 100%

Example of the initialization with the maxwidth option specified:
     $("#element").fotorama({ maxwidth: 400});
     $("#element").fotorama({ maxwidth: "50%"});

<h3 id="gallery_maxheight"><code>maxheight</code></h3>

Maximum width of a preview in pixels or percents.

**Type**: Number|String

**Default value**: `null`

Example of the initialization with the maxheight option specified:
     $("#element").fotorama({ maxheight: 400});
     $("#element").fotorama({ maxheight: "50%"});

<h3 id="gallery_minheigth"><code>minheigth</code></h3>

Minimal height of a preview in pixels or percents.

**Type**: Number|String

**Default value**: `null`
     
Example of the initialization with the minheight option specified:
     $("#element").fotorama({ minheight: 400});
     $("#element").fotorama({ minheight: "50%"});

<h3 id="gallery_mindwidth"><code>minwidth</code></h3>

Minimal width of the preview in pixels or percents.
     Type: Number, String
     Default value: null
     Example of the initialization with the minwidth option specified:
     $("#element").fotorama({ minwidth: 400});
     $("#element").fotorama({ minwidth: "50%"});

<h3 id="gallery_nav"><code>nav</code></h3>

Variation of thumbnails in navigation. 

**Possible values**: 

- `dots`: iPhone-style dots
- `thumbs`: thumbnails
- `false`: nothing

**Default**: `dots`

<h3 id="gallery_ratio"><code>ratio</code></h3>

Width divided by height. Recommended if you are using percentage width.

Type: Number|String

Default value: `null`

Example of the initialization with the ratio option specified:
     $("#element").fotorama({ ratio: '4/3'});
     $("#element").fotorama({ ratio: 1.5 });
     $("#element").fotorama({ ratio: 800/600 });

<h3 id="gallery_showcaption"><code>showcaption</code></h3>

Enable view of caption in preview. Can be for initialized for specific image. Can work globally.

Type: boolean
    Example of the initialization with the showcaption option specified:
     $("#element").fotorama({ showcaption: 90});

<h3 id="gallery_startindex">startindex</h3>
    Set number, which number of image will be visible when gallery loaded.
    Type: Number
    default: 0 
    Example of the initialization with the startindex option specified:
     $("#element").fotorama({ startindex: 3});


<h3 id="gallery_swipe">swipe</h3>
    Enable swipe preview in left and right.
    Type: boolean
    Example of the initialization with the swipe option specified:
     $("#element").fotorama({ swipe: 90});

<h3 id="gallery_thumbwidth">thumbwidth</h3>
    Set width of thumbnails in navigation
    Type: Number, String
    Example of the initialization with the thumbwidth option specified:
     $("#element").fotorama({ thumbwidth: 90});
<h3 id="gallery_thumbwidth">thumbheight</h3>
    Set height of thumbnails in navigation
    Type: Number, String
    Example of the initialization with the thumbheight option specified:
     $("#element").fotorama({ thumbheight: 90});


<h3 id="gallery_width">width</h3>
Set width for preview in gallery.
Type: Number, String
Default value: null
Example of the initialization with the width option specified:
$("#element").fotorama({ width: 600});
$("#element").fotorama({ width: "100%"});