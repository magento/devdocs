---
layout: default
group: jsdg
subgroup: Widgets
title: Gallery widget Magnifier
menu_order: 7
menu_title: Gallery widget Magnifier
github_link: javascript-dev-guide/widgets/widget_gallery_mg.md
---

**Contents**
* TOC
{:toc}

## Initialize magnifier {#magnifier_init}

When initializing Gallery Widget on HTML element, Magnifier initialization is also available. Following is the example of Gallery initialization with Magnifier:
Gallery initialization with Magnifier
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

## Options {#magnifier_options}
https://wiki.magento.com/display/JS/How+to+extend+on+Theme+level