---
layout: default
group: jsdg
subgroup: 3_Widgets
title: Gallery widget
menu_order: 7
menu_title: Gallery widget
github_link: javascript-dev-guide/widgets/widget_gallery.md
---

<h2>Overview</h2>

The gallery jQeury widget implements a content area with images organized into preview and thumbnails blocks. 

The following picture is an illustration of image displaying on the product page using the gallery widget:

<img src="{{site.baseurl}}common/images/gallery_scr.png" alt="A product page with preview and thumbnails">

In addition, the magnifier widget can be used to demonstrate images in 100% scaled size in separate dedicated layer, and the gallery fullscreen mode can be used to navigate the entire full sized photo.

Gallery is displayed consistently across all supported browsers and is responsive - it sizes correctly on mobile devices and desktops.

The gallery widget uses the <a href="http://fotorama.io/">jQuery Fotorama library</a>.

The important feature of the gallery widget implementation is the possibility to configure the wiget options in the `view.xml` configuration file of a theme. 

The gallery widget source is <a href="{{site.mage2000url}}lib/web/mage/gallery/gallery.js">lib/web/mage/gallery/gallery.js</a>

The gallery magnifier source is <a href="{{site.mage2000url}}lib/web/magnifier/magnify.js"> lib/web/magnifier/magnify.js</a>.



<h3>Contents</h3>

* TOC
{:toc}

## Initialize the gallery widget {#gallery_init}

The gallery widged is initialized as described in [JavaScript initialization]({{site.gdeurl}}javascript-dev-guide/javascript/js_init.html#init_phtml).

Example of declarative initialization:

 `<Magento_Catalog_module_dir>/view/frontend/templates/product/view/gallery.phtml` 

{%highlight js%}
<script type="text/x-magento-init">
    {
        "[data-gallery-role=gallery-placeholder]": {
            "mage/gallery/gallery": {
                "mixins":["magnifier/magnify"],
                "magnifierOpts": <?php /* @escapeNotVerified */ echo $block->getMagnifier(); ?>,
                "data": <?php /* @escapeNotVerified */ echo $block->getGalleryImagesJson(); ?>,
                "options": {
                    "nav": "<?php /* @escapeNotVerified */ echo $block->getVar("gallery/nav"); ?>",
                    "loop": <?php /* @escapeNotVerified */ echo $block->getVar("gallery/loop"); ?>,
                    "keyboard": <?php /* @escapeNotVerified */ echo $block->getVar("gallery/keyboard"); ?>,
                    "arrows": <?php /* @escapeNotVerified */ echo $block->getVar("gallery/arrows"); ?>,
                    "allowfullscreen": <?php /* @escapeNotVerified */ echo $block->getVar("gallery/allowfullscreen"); ?>,
                    "showCaption": <?php /* @escapeNotVerified */ echo $block->getVar("gallery/caption"); ?>,
                    "width": <?php /* @escapeNotVerified */ echo $block->getImageAttribute('product_page_image_medium', 'width'); ?>,
                    "thumbwidth": <?php /* @escapeNotVerified */ echo $block->getImageAttribute('product_page_image_small', 'width'); ?>,
                    "thumbheight": <?php /* @escapeNotVerified */ echo $block->getImageAttribute('product_page_image_small', 'height')
                        ?: $block->getImageAttribute('product_page_image_small', 'width'); ?>,
                    "height": <?php /* @escapeNotVerified */ echo $block->getImageAttribute('product_page_image_medium', 'height')
                        ?: $block->getImageAttribute('product_page_image_medium', 'width'); ?>,
                    "transitionduration": <?php /* @escapeNotVerified */  echo $block->getVar("gallery/transition/duration"); ?>,
                    "transition": "<?php /* @escapeNotVerified */  echo $block->getVar("gallery/transition/effect"); ?>",
                    "navarrows": <?php /* @escapeNotVerified */  echo $block->getVar("gallery/navarrows"); ?>,
                    "navtype": "<?php /* @escapeNotVerified */  echo $block->getVar("gallery/navtype"); ?>",
                    "navdir": "<?php /* @escapeNotVerified */  echo $block->getVar("gallery/navdir"); ?>"
                },
                "fullscreen": {
                    "nav": "<?php /* @escapeNotVerified */  echo $block->getVar("gallery/fullscreen/nav"); ?>",
                    "loop": <?php /* @escapeNotVerified */  echo $block->getVar("gallery/fullscreen/loop"); ?>,
                    "navdir": "<?php /* @escapeNotVerified */  echo $block->getVar("gallery/fullscreen/navdir"); ?>",
                    "arrows": <?php /* @escapeNotVerified */  echo $block->getVar("gallery/fullscreen/arrows"); ?>,
                    "showCaption": <?php /* @escapeNotVerified */  echo $block->getVar("gallery/fullscreen/caption"); ?>,
                    "transitionduration": <?php /* @escapeNotVerified */  echo $block->getVar("gallery/fullscreen/transition/duration"); ?>,
                    "transition": "<?php /* @escapeNotVerified */  echo $block->getVar("gallery/fullscreen/transition/effect"); ?>"
                },
                "breakpoints": <?php /* @escapeNotVerified */ echo $block->getBreakpoints(); ?>
            }
        }
    }
</script>

{%endhighlight%}


## Options {#gallery_options}

The following option groups are availble for the gallery widget:

* [`data`](#data)
* [`options`](#options)
* [`fullscreen`](#fullscreen)
* [`breakpoints`](#breakpoints)

All options for each group are described further.

### `data` {#data}

Array of images to display.

#### `data/caption` {#data_caption}

Set caption for a specific image in the `data` field.
Example of the runtime initialization with the `caption` option specified:
 
{%highlight js%}
galleryInstance({ 
    data: [
        {
            img: 'preview_number_one.jpg',
            thumb: 'preview_number_one.jpg',
            caption: 'T-Shirt Women side'
        }
    ]
});
{%endhighlight%}

### `options` {#options}
Set of options available for Preview part.

#### `options/allowfullscreen` {#gallery_allowfullscreen}
Show the button that toggles full screen view of the gallery.

**Type**: Boolean

#### `options/arrows` {#gallery_arrows}

Display navigation arrows on the thumbnails sides.

**Type**: Boolean

#### `options/caption` {#gallery_caption}

Display alt text as image title.

**Type**: Boolean

#### `options/captions` {#gallery_captions}

<p class="q">captions or showCaption??</p>

Display the caption in preview.

**Type**: Boolean

#### `options/click` {#gallery_click}

Enable navigation through preview frames by clicking the Next and Previous buttons.

**Type**: Boolean

#### `options/height` {#gallery_height}

Height of the preview block in pixels or percents.

**Type**: Number, String

**Default value**: null

#### `options/keyboard` {#gallery_keyboard}

Switch on/off the keyboard navigation.

**Type**: Boolean

#### `options/loop` {#gallery_loop}

Define whether images are displayed in a loop.

**Type**: Boolean

**Default value**: `false`


#### `options/maxheight` {#gallery_maxheight}

Maximum height of the preview block in pixels or percents.

**Type**: Number, String

**Default value**: `null`

#### `options/maxwidth` {#gallery_maxwidth}

Maximum width of the preview block in pixels or percents.

**Type**: Number, String

**Default value**: 100%

#### `options/minheight` {#gallery_minheight}

Minimal height of the preview block in pixels or percents.

**Type**: Number, String

**Default value**: `null`

#### `options/minwidth` {#gallery_minwidth}

Minimal width of the preview block in pixels or percents.

**Type**: Number, String

**Default value**: `null`

#### `options/nav` {#gallery_nav}

Variation of thumbnails in navigation.

**Possible values**:

- `dots`: iPhone-style dots
- `thumbs`: thumbnails
- `false`: nothing

**Default**: `dots`

#### `options/navdir` {#gallery_navdir}

Sliding direction of thumbnails.

**Possible values**:

- `vertical`
- `horizontal`

#### `options/navarrows` {#gallery_navarrows}

Turn on/off on the thumbnails navigation sides/Display navigation arrows on the thumbnails sides.

<p class="q">need clarification</p>

**Type**: Boolean

#### `options/navtype` {#gallery_navtype}

Sliding type of thumbnails. 

**Possible values**:

- `slides`
- `thumbs`


#### `options/ratio` {#gallery_ratio}

Width divided by height. Recommended if you set width in percents.

**Type**: Number, String

**Default value**: `null`

#### `options/showcaption` {#gallery_showcaption}

Enable view of caption in preview. Can be for initialized for specific image. Can work globally.

<p class="q">What is the difference between showcaptions and caption?</p>

**Type**: Boolean

#### `options/startindex` {#gallery_startindex}

The index number of the image that is displayed once the gallery is initialized.

**Type**: Number

**Default value**: `0`

#### `options/swipe` {#gallery_swipe}

Moving between preview images by swiping in left and right.

**Type**: Boolean

#### `options/thumbwidth` {#gallery_thumbwidth}

Width of thumbnails.

**Type**: Number, String

#### `options/thumbheight` {#gallery_thumbwidth}

Height of thumbnails.

**Type**: Number, String

#### `options/transition` {#gallery_transition}

Set of options defining the transition properties.

##### `options/transitioneffect` {#gallery_transitioneffect}

Sets the transition effect for slides changing.

**Possible values**: 

* `slide`
* `crossfade`
* `dissolve`

##### `options/transitionduration` {#gallery_transitionduration}
Sets transition duration in milliseconds.

**Type**: Number

##### `options/transitioncarousel` {#gallery_transitioncarousel}

Display navigation thumbnails as carousel.

**Type**: Boolean

#### `options/width` {#gallery_width}

Width of the preview in gallery in pixels or percents.

**Type**: Number, String

**Default value**: `null`

### `fullscreen` {#fullscreen}

Set of options available for the fullscreen view.

#### `fullscreen/arrows` {#full_arrows}

Display navigation arrows on the sides of previews in the fullscreen view.

**Type**: Boolean

#### `fullscreen/caption` {#full_caption}
Display alt text as image title in the fullscreen view.

**Type**: Boolean

#### `fullscreen/keyboard` {#fullscreen_keyboard}

Switch on/off the keyboard navigation in the fullscreen mode.

**Type**: Boolean


#### `fullscreen/loop` {#full_loop}

Define whether images are displayed in a loop.

**Type**: Boolean

**Default value**: `false`

#### `fullscreen/nav` {#full_nav}

Variation of thumbnails in navigation in the fullscreen view.

**Possible values**:

- `dots`: iPhone-style dots
- `thumbs`: thumbnails
- `false`: nothing

#### `fullscreen/navdir` {#full_navdir}

Sliding direction of thumbnails in the fullscreen view.

**Possible values**:

- `vertical`
- `horizontal`

#### `fullscreen/navigation_carousel` {#full_carousel}

Display navigation thumbnails as carousel in the fullscreen view.

**Type**: Boolean

#### `fullscreen/showcaption` {#full_showcaption}

Enable view of caption in the fullscreen mode. Can be for initialized for specific image. Can work globally.

<p class="q">What is the difference between showcaptions and caption?</p>

**Type**: Boolean

#### `fullscreen/thumbwidth` {#full_thumbwidth}

Width of thumbnails in the fullscreen view.

**Type**: Number, String

#### `fullscreen/thumbheight` {#full_thumbheight}

Height of thumbnails in the fullscreen view.

**Type**: Number, String

#### `fullscreen/transition` {#fullscreen_transition}

Set of options defining the transition properties in the fullscreen view.

##### `fullscreen/transitioneffect` {#fullscreen_transitioneffect}

Sets the transition effect for slides changing in the fullscreen view.

**Possible values**: 

* `slide`
* `crossfade`
* `dissolve`

##### `fullscreen/transitionduration` {#fullscreen_transitionduration}
Sets transition duration in milliseconds in the fullscreen view.

**Type**: Number

##### `fullscreen/transitioncarousel` {#fullscreen_transitioncarousel}

Display navigation thumbnails as carousel in the fullscreen view.

**Type**: Boolean

### `breakpoints` {#breakpoints}
Set of options that could be dynamically set while page is resizing.

#### `breakpoints/mobile` {#breakpoints_mobile}
                <var name="conditions">
                    <var name="max-width">767px</var>
                </var>
                <var name="options">
                    <var name="options">
                        <var name="navigation">dots</var>
                    </var>
                </var>

<p class="q">need help with describing this</p>



## Configure gallery options in `view.xml` 

Gallery and magnifier options can be set in the `view.xml` configuration file of a theme. The file is conventionally located in `<theme_dir>/etc`. 

The general gallery options are set as follows:

{%highlight xml%}

<var name="gallery">
            <var name="%option1%">%option1_value%</var> 
            <var name="%option2%">%option2_value%</var> 
...
</var>

{%endhighlight%}

The fullscreen and breakpoints options are set in a similar way:

{%highlight xml%}

<var name="fullscreen">
            <var name="%fullscreen_option1%">%option1_value%</var> 
            <var name="%fullscreen_option2%">%option2_value%</var> 
...
</var>
<var name="breakpoints">
            <var name="%breakpoints_option1%">%option1_value%</var> 
            <var name="%breakpoints_option2%">%option2_value%</var> 
...
</var>

{%endhighlight%}

For illustration of setting gallery option in view.xml, you can view the [view.xml of the Blank theme]({{site.mage2000url}}app/design/frontend/Magento/blank/etc/view.xml#L184). 


## Gallery API {#gallery_api}

Gallery methods are placed in data storage of the `gallery` object. To initialize the API, on the gallery object, call the `data` method with `gallery` as argument. The illustration follows:

{% highlight php%}
var api = $(element).data('gallery');
 
//or
 
var api = $('[data-gallery-role="gallery"]').data('gallery');

{% endhighlight %}

This method returns JS object that contains API functions.

<p class="q">api functions? wording</p>

To ensure that the gallery is fully formed, wrap your code with event handler function and add it to the `gallery:loaded` event:

<p class="q">`gallery:loaded` or `gallery:uploaded`?</p>

{% highlight php %}

    $(element).on('gallery:uploaded', function () {
        var api = $(element).data('gallery');
        /* api methods calls */
    });

{% endhighlight php%}

Then to call a method use the following notation:

{% highlight php %}
    api.%method_name%();
{% endhighlight php%}

All available methods are listed in the following paragraph.

### Methods {#gallery_methods}

* [next](#gallery_next)
* [prev](#gallery_prev)
* [last](#gallery_last)
* [first](#gallery_first)
* [seek](#gallery_seek)
* [updateData](#gallery_updateData)
* [updateOptions](#gallery_updateData)

#### `next()` {#gallery_next}

Image ID is passed as an argument. Displays the next preview image. 

If the last image ID is passed, the behavior depends on whether [loop](##gallery_loop) is enabled:

* if loop is enbled, the first image is displayed.
* if loop is disabled, does not change the displayed image.

#### `prev()` {#gallery_prev}
    
Displays the previous preview image. 

If the first image ID is passed, the behavior depends on whether [loop](##gallery_loop) is enabled:

* if loop is enbled, the last image is displayed.
* if loop is disabled, does not change the displayed image.

#### `last()` {#gallery_last}
    
Displays the last preview image.

#### `first()` {#gallery_first}

Displays the first preview image.

#### `seek()` {#gallery_seek}

Displays the image with the specified ID. 

Doesn't update preview if the argument is not valid. 

Behavior:

* `seek(0)` does not display any preview 
* `seek(1)` displays the first image. 
* `seek(-1)` displays the last image. 
* If the argument is a number bigger than the number of items or less than "-(number of items)" gallery shows modulo of "items number / number".  

<p class="q">what is modulo of "items number / number"?</p>

#### `updateData()` {#gallery_updateData}
   
Add new items to the gallery. 

Example:

{% highlight php %}
api.updateData([{
    img: 'image1.jpg',
    thumb: 'thumb1.jpg',
    caption: 'caption'
}]);
{% endhighlight php %}

#### `updateOptions()` {#gallery_updateOptions}
Updates options of active breakpoint or default gallery options, if there is no active breakpoint.

Example:

{% highlight php%}

api.updateOptions([{
    nav: 'dots'
}]);

{% endhighlight %}