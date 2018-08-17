---
group: jsdg
subgroup: 3_Widgets
title: Gallery widget
menu_order: 7
menu_title: Gallery widget
version: 2.0
---

## Overview

The gallery {% glossarytooltip 5bfa8a8e-6f3e-4fed-a43e-62339916f02e %}jQuery{% endglossarytooltip %} {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} implements a content area with images organized into preview and thumbnails blocks.

The following picture is an illustration of image displaying on the product page using the gallery widget:

<img src="{{ site.baseurl }}/common/images/gallery_scr.png" width="650px" alt="A product page with preview and thumbnails">

In addition, the [magnifier widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_gallery_mg.html) can be used to demonstrate images in 100% scaled size in separate dedicated layer, and the gallery fullscreen mode can be used to navigate the entire full sized photo.

Gallery is displayed consistently across all supported browsers and is responsive &mdash; it sizes correctly on mobile devices and desktops.

The gallery widget uses the <a href="http://fotorama.io/">Fotorama widget</a>.

The important feature of the gallery widget implementation is the possibility to configure the widget options in the `view.xml` configuration file of a {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %}.

The gallery widget source code is <a href="{{ site.mage2000url }}lib/web/mage/gallery/gallery.js">lib/web/mage/gallery/gallery.js</a>

The gallery magnifier source is <a href="{{ site.mage2000url }}lib/web/magnifier/magnify.js"> lib/web/magnifier/magnify.js</a>.

### Contents

## Initialize the gallery widget {#gallery_init}

The gallery widget is initialized as described in [JavaScript initialization]({{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html#init_phtml).

Example of declarative initialization:

 `<Magento_Catalog_module_dir>/view/frontend/templates/product/view/gallery.phtml`

{%highlight js%}
<script type="text/x-magento-init">
    {
         {
        "<element_selector>": {
            "mage/gallery/gallery": {
                "data": [{
                    "thumb": "<small_image_url>",
                    "img": "<small_image_url>",
                    "full": "<small_image_url>",
                    "caption": "<message>",
                    "position": "<number>",
                    "isMain": "<true/false>"
                }],
                "options": {
                    "nav": "<false/thumbs/dots>",
                    "loop": <true/false>,
                    "keyboard": <true/false>,
                    "arrows": <true/false>,
                    "allowfullscreen": <true/false>,
                    "showCaption": <true/false>,
                    "width": <number>,
                    "thumbwidth": <number>,
                    "thumbheight": <number>,
                    "height": <number>,
                    "transitionduration": <number>,
                    "transition": "<slide/crossfade/dissolve>",
                    "navarrows": <true/false>,
                    "navtype": "<slides/thumbs>",
                    "navdir": "<horizontal/vertical>"
                },
                "fullscreen": {
                    "nav": "<false/thumbs/dots>",
                    "loop": <true/false>,
                    "navdir": "<horizontal/vertical>",
                    "arrows": <true/false>,
                    "showCaption": <true/false>,
                    "transitionduration": <number>,
                    "transition": "<slide/crossfade/dissolve>"
                },
                "breakpoints": {
                    "<breakpoint_name>": {
                        "conditions": {
                            "max-width": "767px"
                        }
                        "options": {}
                    }
                }
            }
        }
    }
</script>

{%endhighlight%}

## Options {#gallery_options}

The following option groups are available for the gallery widget:

* [`data`](#data)
* [`options`](#options)
* [`fullscreen`](#fullscreen)
* [`breakpoints`](#breakpoints)

All options for each group are described further.

### `data` {#data}

Array of images to display.

Where `image` is an object with keys:

{%highlight js%}
{
    "thumb": "<small_image_url>",
    "img": "<small_image_url>",
    "full": "<small_image_url>",
    "caption": "<message>",
    "isMain": "<true/false>"
}
{%endhighlight%}

The `thumb`, `img`, and `full` are full paths to proper image files.

#### `data/caption` {#data_caption}

Set the caption for a specific image in the `data` field.
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
Set of options available for the Preview region.

#### `options/allowfullscreen` {#gallery_allowfullscreen}
Show the button that toggles full screen view of the gallery.

**Type**: Boolean

#### `options/arrows` {#gallery_arrows}

Display navigation arrows on the thumbnails sides.

**Type**: Boolean

#### `options/height` {#gallery_height}

Height of the preview block in pixels or percent.

**Type**: Number, String

**Default value**: null

#### `options/keyboard` {#gallery_keyboard}

Switch on/off the keyboard navigation.

**Type**: Boolean

**Default value**: `false`

#### `options/loop` {#gallery_loop}

Define whether images are displayed in a loop.

**Type**: Boolean

**Default value**: `false`


#### `options/maxheight` {#gallery_maxheight}

Maximum height of the preview block in pixels or percent.

**Type**: Number, String

**Default value**: `null`

#### `options/maxwidth` {#gallery_maxwidth}

Maximum width of the preview block in pixels or percent.

**Type**: Number, String

**Default value**: 100%

#### `options/minheight` {#gallery_minheight}

Minimal height of the preview block in pixels or percent.

**Type**: Number, String

**Default value**: `null`

#### `options/minwidth` {#gallery_minwidth}

Minimal width of the preview block in pixels or percent.

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

Display navigation arrows for thumbnails.


**Type**: Boolean

#### `options/navtype` {#gallery_navtype}

Sliding type of thumbnails.

**Possible values**:

- `slides`: on the arrow button click the thumbs ribbon shifts over several thumbs
- `thumb`: on the arrow button click the thumbs ribbon shifts over one thumb

#### `options/ratio` {#gallery_ratio}

Width divided by height. Recommended if you set width in percents.

**Type**: Number, String

**Default value**: calculated from `width` and `height`.

#### `options/showCaption` {#gallery_showcaption}

Enable view of caption in preview. Can be for initialized for specific image. Can work globally.

**Type**: Boolean

#### `options/startindex` {#gallery_startindex}

The index number of the image that is displayed once the gallery is initialized.

**Type**: Number

**Default value**: `0`

#### `options/swipe` {#gallery_swipe}

Moving between preview images by swiping in left and right.

**Type**: Boolean

**Default value**: `true`

#### `options/thumbwidth` {#gallery_thumbwidth}

Width of thumbnails.

**Type**: Number, String

#### `options/thumbheight` {#gallery_thumbwidth}

Height of thumbnails.

**Type**: Number, String


#### `options/transition` {#gallery_transitioneffect}

Sets the transition effect for slides changing.

**Possible values**:

* `slide`
* `crossfade`
* `dissolve`

#### `options/transitionduration` {#gallery_transitionduration}
Sets transition duration in milliseconds.

**Type**: Number

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
Display {% glossarytooltip 9122e7d4-7db9-48b2-ad27-1af26bad1215 %}alt text{% endglossarytooltip %} as image title in the fullscreen view.

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

#### `fullscreen/showCaption` {#full_showcaption}

Enable view of caption in the fullscreen mode. Can be for initialized for specific image. Can work globally.


**Type**: Boolean

#### `fullscreen/thumbwidth` {#full_thumbwidth}

Width of thumbnails in the fullscreen view.

**Type**: Number, String

#### `fullscreen/thumbheight` {#full_thumbheight}

Height of thumbnails in the fullscreen view.

**Type**: Number, String

#### `fullscreen/transition` {#fullscreen_transitioneffect}

Sets the transition effect for slides changing in the fullscreen view.

**Possible values**:

* `slide`
* `crossfade`
* `dissolve`

#### `fullscreen/transitionduration` {#fullscreen_transitionduration}
Sets transition duration in milliseconds in the fullscreen view.

**Type**: Number


### `breakpoints` {#breakpoints}
Set of options that could be dynamically set while page is resizing.

Set as follows:

{%highlight js%}
"breakpoints": {
    "%breakpoint_name%": {
        "conditions": {
            ...
        }
        "options": {...}
    }
}
{%endhighlight%}

Where the options are as follows:

 - `conditions`: compiled in [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) through and operand. For example: `"max-width": "767px"`
 - `options` - object of options that are applied

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

For illustration of setting gallery option in `view.xml`, you can reference to the [view.xml of the Blank theme]({{ site.mage2000url }}app/design/frontend/Magento/blank/etc/view.xml#L184).

## Gallery API {#gallery_api}

Gallery methods are placed in data storage of the `gallery` object. To initialize the API, on the gallery object, call the `data` method with `gallery` as argument. The illustration follows:

{% highlight php%}
var api = $(element).data('gallery');

//or

var api = $('[data-gallery-role="gallery"]').data('gallery');

{% endhighlight %}

This method returns JS object that contains {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} functions.


To ensure that the gallery is fully formed, wrap your code with {% glossarytooltip c57aef7c-97b4-4b2b-a999-8001accef1fe %}event{% endglossarytooltip %} handler function and add it to the `gallery:loaded` event:

{% highlight php %}

    $(element).on('gallery:loaded', function () {
        var api = $(element).data('gallery');
        /* api methods calls */
    });

{% endhighlight php%}

Then to call a method, use the following notation:

{% highlight php %}
    api.%method_name%();
{% endhighlight php%}

All available methods are listed in the following paragraph.

### Methods {#gallery_methods}

* [first](#gallery_first)
* [last](#gallery_last)
* [next](#gallery_next)
* [prev](#gallery_prev)
* [seek](#gallery_seek)
* [updateData](#gallery_updateData)
* [updateOptions](#gallery_updateData)

#### `first()` {#gallery_first}

Displays the first preview image.

#### `last()` {#gallery_last}

Displays the last preview image.

#### `next()` {#gallery_next}

Image ID is passed as an argument. Displays the next preview image.

If the last image ID is passed, the behavior depends on whether [loop](#gallery_loop) is enabled:

* if loop is enabled, the first image is displayed.
* if loop is disabled, does not change the displayed image.

#### `prev()` {#gallery_prev}

Displays the previous preview image.

If the first image ID is passed, the behavior depends on whether [loop](#gallery_loop) is enabled:

* if loop is enbled, the last image is displayed.
* if loop is disabled, does not change the displayed image.

#### `seek()` {#gallery_seek}

Displays the image with the specified `index`.

Doesn't update preview if the argument is not valid.

Behavior:

* `seek(0)` does not display any preview
* `seek(1)` displays the first image.
* `seek(-1)` displays the last image.
* If the argument is a number bigger than the number of items, or less than "-(number of items)" the gallery shows the modulus of the following division: total images number divided by the argument number.  


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
