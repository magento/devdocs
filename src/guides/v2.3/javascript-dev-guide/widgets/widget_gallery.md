---
group: javascript-developer-guide
subgroup: 3_Widgets
title: Gallery widget
---

The gallery jQuery widget implements a content area with images organized into preview and thumbnails blocks.

The following picture is an illustration of image displaying on the product page using the gallery widget:

![A product page with preview and thumbnails]({{site.baseurl}}/common/images/gallery_scr21.png){:width="650px"}

In addition, the [magnifier widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_gallery_mg.html) can be used to demonstrate images in 100% scaled size in separate dedicated layer, and the gallery fullscreen mode can be used to navigate the entire full sized photo.

Gallery is displayed consistently across all supported browsers and is responsive --- it sizes correctly on mobile devices and desktops.

The gallery widget uses the [Fotorama widget].

The important feature of the gallery widget implementation is the possibility to configure the widget options in the `view.xml` configuration file of a theme.

The gallery widget source code is [lib/web/mage/gallery/gallery.js].

The gallery magnifier source is [lib/web/magnifier/magnify.js].

### Contents

## Initialize the gallery widget {#gallery_init}

The gallery widget is initialized as described in [JavaScript initialization]({{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html#init_phtml).

Example of declarative initialization:

```xml
<Magento_Catalog_module_dir>/view/frontend/templates/product/view/gallery.phtml
```

```javascript
<script type="text/x-magento-init">
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
                    "navarrows": <true/false>,
                    "navtype": "<slides/thumbs>",
                    "arrows": <true/false>,
                    "showCaption": <true/false>,
                    "transitionduration": <number>,
                    "transition": "<slide/crossfade/dissolve>"
                },
                "breakpoints": {
                    "<breakpoint_name>": {
                        "conditions": {
                            "max-width": "767px"
                        },
                        "options": {}
                    }
                }
            }
        }
    }
</script>
```

## Options {#gallery_options}

The following option groups are available for the gallery widget:

*  [`data`](#data)
*  [`options`](#options)
*  [`fullscreen`](#fullscreen)
*  [`breakpoints`](#breakpoints)

All options for each group are described further.

### `data` {#data}

Array of images to display.

Where `image` is an object with keys:

```javascript
{
    "thumb": "<small_image_url>",
    "img": "<small_image_url>",
    "full": "<small_image_url>",
    "caption": "<message>",
    "isMain": "<true/false>"
}
```

The `thumb`, `img`, and `full` are full paths to proper image files.

#### `data/caption` {#data_caption}

Set the caption for a specific image in the `data` field.
Example of the runtime initialization with the `caption` option specified:

```javascript
galleryInstance({
    data: [
        {
            img: 'preview_number_one.jpg',
            thumb: 'preview_number_one.jpg',
            caption: 'T-Shirt Women side'
        }
    ]
});
```

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

*  `dots`: iPhone-style dots
*  `thumbs`: thumbnails
*  `false`: nothing

**Default**: `dots`

#### `options/navdir` {#gallery_navdir}

Sliding direction of thumbnails.

**Possible values**:

*  `vertical`
*  `horizontal`

#### `options/navarrows` {#gallery_navarrows}

Display navigation arrows for thumbnails.

**Type**: Boolean

#### `options/navtype` {#gallery_navtype}

Sliding type of thumbnails.

**Possible values**:

*  `slides`: on the arrow button click the thumbs ribbon shifts over several thumbs
*  `thumb`: on the arrow button click the thumbs ribbon shifts over one thumb

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

#### `options/thumbheight` {#gallery_thumbheight}

Height of thumbnails.

**Type**: Number, String

#### `options/transition` {#gallery_transitioneffect}

Sets the transition effect for slides changing.

**Possible values**:

*  `slide`
*  `crossfade`
*  `dissolve`

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
Display [alt text](https://glossary.magento.com/alt-text) as image title in the fullscreen view.

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

*  `dots`: iPhone-style dots
*  `thumbs`: thumbnails
*  `false`: nothing

#### `fullscreen/navdir` {#full_navdir}

Sliding direction of thumbnails in the fullscreen view.

**Possible values**:

*  `vertical`
*  `horizontal`

```xml
<var name="gallery">
   <var name="navdir">horizontal</var> <!-- Sliding direction of thumbnails (horizontal/vertical) -->
</var>
```

#### `fullscreen/navarrows` {#full_navarrows}

Show/hide arrows in thumb navigation.

**Type**: Boolean

**Default value**: `true`

#### `fullscreen/navtype` {#full_navtype}

Type of navigation.

**Possible values**:

*  `thumbs`
*  `slides`

**Default value**: `thumbs`

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

*  `slide`
*  `crossfade`
*  `dissolve`

#### `fullscreen/transitionduration` {#fullscreen_transitionduration}
Sets transition duration in milliseconds in the fullscreen view.

**Type**: Number

### `breakpoints` {#breakpoints}
Set of options that could be dynamically set while page is resizing.

Set as follows:

```javascript
"breakpoints": {
    "%breakpoint_name%": {
        "conditions": {
            ...
        }
        "options": {...}
    }
}
```

Where the options are as follows:

*  `conditions`: compiled in [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) through and operand. For example: `"max-width": "767px"`
*  `options` - object of options that are applied

## Configure gallery options in `view.xml`

Gallery and magnifier options can be set in the `view.xml` configuration file of a theme. The file is conventionally located in `<theme_dir>/etc`.

The general gallery options are set as follows:

```xml
<var name="gallery">
    <var name="%option1%">%option1_value%</var>
    <var name="%option2%">%option2_value%</var>
...
</var>
```

The fullscreen and breakpoints options are set in a similar way:

```xml
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
```

For illustration of setting gallery option in `view.xml`, you can reference to the [view.xml of the Blank theme]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/design/frontend/Magento/blank/etc/view.xml#L184).

## Gallery API {#gallery_api}

Gallery methods are placed in data storage of the `gallery` object. To initialize the API, on the gallery object, call the `data` method with `gallery` as argument. The illustration follows:

```javascript
var api = $(element).data('gallery');

//or

var api = $('[data-gallery-role="gallery"]').data('gallery');
```

This method returns JS object that contains [API](https://glossary.magento.com/api) functions.

To ensure that the gallery is fully formed, wrap your code with [event](https://glossary.magento.com/event) handler function and add it to the `gallery:loaded` event:

```javascript
$(element).on('gallery:loaded', function () {
    var api = $(element).data('gallery');
    /* api methods calls */
});
```

Then to call a method, use the following notation:

```php
api.%method_name%();
```

All available methods are listed in the following paragraph.

## Methods {#gallery_methods}

*  [first()](#gallery_first)
*  [last()](#gallery_last)
*  [next()](#gallery_next)
*  [prev()](#gallery_prev)
*  [seek()](#gallery_seek)
*  [updateData()](#gallery_updateData)
*  [updateOptions()](#gallery_updateData)

### `first()` {#gallery_first}

Displays the first preview image.

### `last()` {#gallery_last}

Displays the last preview image.

### `next()` {#gallery_next}

Image ID is passed as an argument. Displays the next preview image.

If the last image ID is passed, the behavior depends on whether [loop](#gallery_loop) is enabled:

*  if loop is enabled, the first image is displayed.
*  if loop is disabled, does not change the displayed image.

### `prev()` {#gallery_prev}

Displays the previous preview image.

If the first image ID is passed, the behavior depends on whether [loop](#gallery_loop) is enabled:

*  if loop is enabled, the last image is displayed.
*  if loop is disabled, does not change the displayed image.

### `seek()` {#gallery_seek}

Displays the image with the specified `index`.

Doesn't update preview if the argument is not valid.

Behavior:

*  `seek(0)` does not display any preview
*  `seek(1)` displays the first image.
*  `seek(-1)` displays the last image.
*  If the argument is a number bigger than the number of items, or less than "-(number of items)" the gallery shows the modulus of the following division: total images number divided by the argument number.

### `updateData()` {#gallery_updateData}

Add new items to the gallery.

Example:

```php
api.updateData([{
    img: 'image1.jpg',
    thumb: 'thumb1.jpg',
    caption: 'caption'
}]);
```

### `updateOptions()` {#gallery_updateOptions}
Updates options of active breakpoint or default gallery options, if there is no active breakpoint.

Example:

```php
api.updateOptions([{
    nav: 'dots'
}]);
```

[Fotorama widget]: http://fotorama.io/
[lib/web/mage/gallery/gallery.js]: {{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/mage/gallery/gallery.js
[lib/web/magnifier/magnify.js]: {{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/magnifier/magnify.js
