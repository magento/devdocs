---
layout: default
group: jsdg
subgroup: 3_Widgets
title: Magnifier widget 
menu_order: 8
menu_title: Magnifier widget 
github_link: javascript-dev-guide/widgets/widget_gallery_mg.md
---

<h2>Overview</h2>

Magnifier is a widget which allows displaying images in 100% scaled size in separate dedicated layer.
In Magento it is used by the [gallery]({{site.gdeurl}}javascript-dev-guide/widgets/widget_gallery.html) widget for zooming the product images on product pages.

**Contents**
* TOC
{:toc}

## Initialize magnifier {#magnifier_init}

The magnifier widged is initialized as described in [JavaScript initialization]({{site.gdeurl}}javascript-dev-guide/javascript/js_init.html#init_phtml).

When initializing the gallery Widget on an HTML element, magnifier initialization is also available. Following is the example of gallery initialization with magnifier:

{%highlight js%}
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

## Options {#magnifier_options}

### `enabled` {#opt_enabled}

Enable magnifier.

**Type**: Boolean

### `height` {#opt_height}

Height of the magnifier block 
            
### `hover` {#opt_hover}

Action that activates zoom.

Possible values: 

* `hover`
* `click`

### `left` {#opt_left}

The value for the CSS `left` property for the magnifier block positioning.

**Type**: Integer

### `fullscreenzoom` {#opt_fullscreenzoom}

Zoom step in percents for the fullscreen view.

Type: Integer

### `top` {#opt_top}

The value for the CSS `top` property for the magnifier block positioning.

**Type**: Integer
            

### `width` {#opt_width}

Width of the magnifier block.

**Type**: Integer


