---
group: jsdg
subgroup: 3_Widgets
title: Magnifier widget 
menu_order: 8
menu_title: Magnifier widget 
version: 2.0
---

## Overview

Magnifier is a {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} that allows displaying images in 100% scaled size in separate dedicated layer.
In Magento it is used by the [gallery]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_gallery.html) widget for zooming the product images on product pages.

## Initialize magnifier {#magnifier_init}

The magnifier widget is initialized as described in [JavaScript initialization]({{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html#init_phtml).

When initializing the gallery Widget on an {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} element, magnifier initialization is also available. Following is the example of gallery initialization with magnifier:

{%highlight js%}
<script type="text/x-magento-init">
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
               "fullscreenzoom": <number>
            }
        }
   }
</script>
{% endhighlight %}

## Options {#magnifier_options}

### `enabled` {#opt_enabled}

Enable magnifier.

**Type**: Boolean

### `height` {#opt_height}

Height of the magnifier block in pixels. 
            
### `hover` {#opt_hover}

Action that activates zoom.

Possible values: 

* `hover`
* `click`

### `fullscreenzoom` {#opt_fullscreenzoom}

Zoom step in percents for the fullscreen view.

Type: Integer

### `left` {#opt_left}

The value for the {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} `left` property for the magnifier block positioning.

**Type**: Integer

### `top` {#opt_top}

The value for the CSS `top` property for the magnifier block positioning.

**Type**: Integer
            

### `width` {#opt_width}

Width of the magnifier block in pixels.

**Type**: Integer


