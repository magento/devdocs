---
group: javascript-developer-guide
subgroup: 3_Widgets
title: Magnifier widget
---

Magnifier is a [widget](https://glossary.magento.com/widget) that allows displaying images in 100% scaled size in a separate dedicated layer.
In Magento it is used by the [gallery]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_gallery.html) widget for zooming the product images on product pages. It must be enabled in your local theme `view.xml` configuration file.

## Initialize magnifier {#magnifier_init}

The magnifier widget is initialized as described in [JavaScript initialization]({{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html#init_phtml).
The following is the example of gallery initialization with the magnifier enabled:

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
                    "isMain": "<true/false>"
                }],
                "mixins": ["magnifier/magnify"],
                "magnifierOpts": {
                   "enabled": <true/false>,
                   "eventType": "<hover/click>",
                   "width": <number>,
                   "height": <number>,
                   "top": <number>,
                   "left": <number>,
                   "fullscreenzoom": <number>,
                   "mode": "<outside/inside>"
                }
            }
        }
    }
</script>
```

## Options {#magnifier_options}

### `enabled` {#opt_enabled}

Enables the magnifier.

**Type**: Boolean

### `height` {#opt_height}

Height of the magnifier block in pixels.

### `eventType` {#opt_eventtype}

Action that activates zoom.

Possible values:

*  `hover`
*  `click`

### `fullscreenzoom` {#opt_fullscreenzoom}

Zoom step in percents for the fullscreen view.

Type: Integer

### `left` {#opt_left}

The value for the CSS `left` property for the magnifier block positioning.

**Type**: Integer

### `top` {#opt_top}

The value for the CSS `top` property for the magnifier block positioning.

**Type**: Integer

### `width` {#opt_width}

Width of the magnifier block in pixels.

**Type**: Integer

### `mode` {#opt_mode}

Specifies whether to display magnified image inside / outside lens.

Possible values:

*  `outside`
*  `inside`

## Enable Magnifier and configure options in `view.xml`

 `view.xml` is a theme configuration file that enables the Magnifier widget. The file is conventionally located in the `<theme_dir>/etc/` directory.

The enabling option is:

```xml
<var name="magnifier">
   <var name="enabled">true</var> <!-- Turn on/off magnifier (true/false) -->
</var>
...
```

Several other Magnifier options are set in `view.xml`:

```xml
<var name="magnifier">
  <var name="fullscreenzoom">20</var> <!-- Zoom for fullscreen (integer) -->
  <var name="top"></var> <!-- Top position of magnifier -->
  <var name="left"></var> <!-- Left position of magnifier -->
  <var name="width"></var> <!-- Width of magnifier block -->
  <var name="height"></var> <!-- Height of magnifier block -->
  <var name="eventType">hover</var> <!-- Action that activates zoom (hover/click) -->
...
</var>
```

For an example of setting the gallery option, see the [view.xml]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/design/frontend/Magento/blank/etc/view.xml#L225) file in the Blank theme.
