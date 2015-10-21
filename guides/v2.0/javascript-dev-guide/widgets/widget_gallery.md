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

## Magnifier options {#gallery_options}
TBD

## Gallery API {#gallery_api}

Gallery methods are placed in data storage of the `gallery` object. To initialize the API, on the gallery object, call the `data` method with `gallery` as argument. The illustration follows:

{% highlight php%}
var api = $(element).data('gallery');
 
//or
 
var api = $('[data-gallery-role="gallery"]').data('gallery');

{% endhighlight %}

This method returns JS object that contains api functions.

<p class="q">api functions? wording</p>

To ensure that gallery is fully formed, wrap your code with event handler function and add it to the `gallery:loaded` event:

<p class="q">`gallery:loaded` or `gallery:uploaded`?</p>

{% highlight php %}

    $(element).on('gallery:uploaded', function () {
        var api = $(element).data('gallery');
        /* api methods calls */
    });

{% endhighlight php%}

Then to call a method use the following notation:

{% highlight php %}
    api.next();
{% endhighlight php%}

Where `next` is the methods name. All available methods are listed in the following paragraph.

### Methods {#gallery_methods}
<ul>
<li><a href="#gallery_next"><code>next</code></a></li>
<li><a href="#gallery_prev"><code>prev</code></a></li>
<li><a href="#gallery_last"><code>last</code></a></li>
<li><a href="#gallery_first"><code>first</code></a></li>
<li><a href="#gallery_seek"><code>seek</code></a></li>
<li><a href="#gallery_updateData"><code>updateData</code></a></li>
<li><a href="#gallery_updateData"><code>updateOptions</code></a></li>

</ul>

<h4 id="gallery_next"><code>next</code></h4>

Displays next preview image. If <a href="#gallery_loop">loop</a> is enabled in options, displays the first image after the last. If loop is disabled, then the last image does not get changed.

<h4 id="gallery_prev"><code>prev</code></h4>
    
Displays previous preview image. If <a href="#gallery_loop">loop</a> is enabled in options, displays the last image after the first. If loop is disabled the first image does not get changed.

<h4 id="gallery_last"><code>last</code></h4>
    
Displays the last preview image.

<h4 id="gallery_first"><code>first</code></h4>

Displays the first preview image.

<h4 id="gallery_seek"><code>seek</code></h4>

Displays the image with the certain ID. The ID is passed as an argument. 

Doesn't update preview if argument isn't correct. seek(0) doesn't update preview. seek(1) shows 1'st image. seek(-1) shows last image. If entered number bigger then items number or less then "-(items number)" gallery shows modulo of "items number / number".  

<p class="q">are these ids?</p>
<p class="q">what is modulo of "items number / number"?</p>

<h4 id="gallery_updateData"><code>updateData</code></h4>
   
Add new items to the gallery. 

Example:

{% highlight php %}
api.updateData([{
    img: 'image1.jpg',
    thumb: 'thumb1.jpg',
    caption: 'caption'
}]);
{% endhighlight php %}

<h4 id="gallery_updateOptions"><code>updateOptions</code></h4>
Updates options of active breakpoint or default gallery options, if there is no active breakpoint.

Example:

{% highlight php%}

api.updateOptions([{
    nav: 'dots'
}]);

{% endhighlight %}