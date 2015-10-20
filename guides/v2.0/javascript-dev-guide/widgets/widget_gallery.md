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

<h3>Contents</h3>

* TOC
{:toc}

## Initialize the gallery widget {#gallery_init}


Example of the gallery initialization in the JS:
{% highlight js %}

$('#init_element').fotorama({
    thumbwidth: 90,
    thumbheight: 60,
    width: 600,
    height: 400

});

{% endhighlight %}

<p class="q">Can it be initialized with magnifier in JS? what are the usecases of initialization inside JS and PHTML</p>

When initializing Gallery Widget on HTML element, Magnifier initialization is also available.
<p class="q">Is it avaialble if other initialization options are used?</p>

The following is the illustration of initialization of the gallery widget with magnifier.

{% highlight php %}

    <script type="text/x-magento-init">
        "<element_selector>": {
             "mage/gallery/gallery": {
                 "data": <?php echo $block->getGalleryImagesJson(); ?>,
                 "mixins": ["magnifier/magnify"],
                 "magnifierOpts": {
                    "enabled": "<?php echo $block->getVar("magnifier:enabled"); ?>",
                    "eventType": "<?php echo $block->getVar("magnifier:action"); ?>",
                    "width": "<?php echo $block->getVar("magnifier:width"); ?>",
                    "height": "<?php echo $block->getVar("magnifier:height"); ?>",
                    "top": "<?php echo $block->getVar("magnifier:top"); ?>",
                    "left": "<?php echo $block->getVar("magnifier:left"); ?>"
                 }
             }
        }
    </script>

{% endhighlight %}

## Options {#gallery_options}
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
<li><a href="#gallery_showcaption">showcaption</a></li>
<li><a href="#gallery_startindex">startindex</a></li>
<li><a href="#gallery_swipe">swipe</a></li>
<li><a href="#gallery_width">width</a></li>
</ul>

<h3 id="gallery_allowfullscreen"><code>allowfullscreen</code></h3>
Show the button that toggles full screen view of the gallery.

**Type**: Boolean


<h3 id="gallery_captions"><code>captions</code></h3>

Defines if the caption is visible.

**Type**: Boolean

Example of the initialization with the captions option specified:
     $("#element").fotorama({ captions: false});

<h3 id="gallery_click"><code>click</code></h3>

Enable navigation through preview frames by clicking the Next and Previous buttons.

**Type**: Boolean


<h3 id="gallery_height"><code>height</code></h3>

Height of the preview block in pixels or percents.

**Type**: Number, String

**Default value**: null

<h3 id="gallery_loop"><code>loop</code></h3>

Define whether images are displayed in a loop.

**Type**: Boolean

**Default value**: `false`

Example of the initialization with the loop option specified:
     $("#element").fotorama({ loop: true});

<h3 id="gallery_maxwidth"><code>maxwidth</code></h3>

Maximum width of a preview in pixels or percents.

**Type**: Number, String

**Default value**: 100%


<h3 id="gallery_maxheight"><code>maxheight</code></h3>

Maximum width of a preview in pixels or percents.

**Type**: Number, String

**Default value**: `null`


<h3 id="gallery_minheigth"><code>minheigth</code></h3>

Minimal height of a preview in pixels or percents.

**Type**: Number, String

**Default value**: `null`


<h3 id="gallery_mindwidth"><code>minwidth</code></h3>

Minimal width of the preview in pixels or percents.

**Type**: Number, String

**Default value**: `null`

<h3 id="gallery_nav"><code>nav</code></h3>

Variation of thumbnails in navigation.

**Possible values**:

- `dots`: iPhone-style dots
- `thumbs`: thumbnails
- `false`: nothing

**Default**: `dots`

<h3 id="gallery_ratio"><code>ratio</code></h3>

Width divided by height. Recommended if you are using percentage width.

Type: Number, String

Default value: `null`

Example of the initialization with the ratio option specified:
     $("#element").fotorama({ ratio: '4/3'});
     $("#element").fotorama({ ratio: 1.5 });
     $("#element").fotorama({ ratio: 800/600 });

<h3 id="gallery_showcaption"><code>showcaption</code></h3>

Enable view of caption in preview. Can be for initialized for specific image. Can work globally.

<p class="q">What is the difference between showcaptions and caption?</p>

**Type**: Boolean

<h3 id="gallery_startindex"><code>startindex</code></h3>

The index number of the image that is displayed once the fotorama is initialized.

<p class="q">Where do we set these numbers</p>

**Type**: Number

**Default value**: `0`

<h3 id="gallery_swipe"><code>swipe</code></h3>

Moving between preview images by swiping in left and right.

**Type**: Boolean

Example of the initialization with the swipe option specified:
     $("#element").fotorama({ swipe: 90});
<p class="q">It is the second example when "90" is specified for value of Boolean </p>


<h3 id="gallery_thumbwidth"><code>thumbwidth</code></h3>

Width of thumbnails.

**Type**: Number, String

Example of the initialization with the thumbwidth option specified:
     $("#element").fotorama({ thumbwidth: 90});

<h3 id="gallery_thumbwidth"><code>thumbheight</code></h3>

Height of thumbnails in navigation.

**Type**: Number, String

Example of the initialization with the thumbheight option specified:
     $("#element").fotorama({ thumbheight: 90});


<h3 id="gallery_width"><code>width</code></h3>

Width of the preview in gallery in pixels or percents.

**Type**: Number, String

**Default value**: `null`

## Methods {#gallery_methods}
<ul>
<li><a href="#gallery_next"><code>next</code></a></li>
</ul>
<h3 id="gallery_next"><code>next</code></h3>

Displays next preview image. If loop is enabled in options displays the first image after the last if this function is called. If loop is disabled doesn't update current image if it's the last item in list.

Example:
next
api.next();

    prev
         DIsplays previous preview image. If loop is enabled in options, displays the last image after the first if this function is called. If loop is disabled doesn't update current image if it's the first item in list.
         Example:
prev
api.prev();

    last
         DIsplays the last preview image.
         Example:
last
api.last();

    first
         Displays the first preview image.
         Example:
first
api.first();

    seek
         Displays image with appropriate count number on preview. Doesn't update preview if argument isn't correct. seek(0) doesn't update preview. seek(1) shows 1'st image. seek(-1) shows last image. If entered number bigger then items number or less then "-(items number)" gallery shows modulo of "items number / number".  
         Example:
seek
api.seek(1);

   updateData
         Updates gallery with new set of items. If argument isn't correct or empty gallery stays in current state.
         Example:

updateData
api.updateData([{
    img: 'image1.jpg',
    thumb: 'thumb1.jpg',
    caption: 'caption'
}]);

   updateOptions
         Updates options of active breakpoint or default gallery options, if there is no active breakpoint.
         Example:

updateOptions
api.updateOptions([{
    nav: 'dots'
}]);
