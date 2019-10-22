---
group: javascript-developer-guide
title: MediaUploader widget
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

This [widget](https://glossary.magento.com/widget/) allows multiple media files uploading with Ajax.

The MediaUploader widget source is the [`<Magento_Backend_module_dir>/view/adminhtml/web/js/media-uploader.js`][] file.

The MediaUploader widget can be used only on the [adminhtml](https://glossary.magento.com/adminhtml) area.

## Initialize the MediaUploader widget

For information about how to initialize a widget in a JS component or `.phtml` template, see the [Initialize JavaScript][] topic.

The following example shows how to instantiate the MediaUploader widget:

```javascript
$("#uploader").mediaUploader({});
```

Where:

-  `#uploader` is the selector of the select element for which MediaUploader is initialized.

Phtml template file examples using script:

```html
<script>
    require([
        'jquery',
        'Magento_Backend/js/media-uploader'
    ], function ($) {
        'use strict';

        $("#uploader").mediaUploader({});
    });
</script>
```

## Options

The MediaUploader widget has the following options:

-  [disabled](#disabled)
-  [isResizeEnabled](#isresizeenabled)
-  [maxFileSize](#maxfilesize)
-  [maxHeight](#maxheight)
-  [maxWidth](#maxwidth)

### `disabled`

Specifies if the uploader field should be disabled.

**Type**: Boolean

**Default value**: `undefined`

### `isResizeEnabled`

Specifies if the [maxWidth](#maxwidth) and [maxHeight](#maxheight) are passing to the file uploader.
If resizing is disabled, the uploaded image should not be scaled even if the maximum height or width is exceeded.

**Type**: Boolean

**Default value**: `undefined`

### `maxFileSize`

The maximum file size of an uploaded media file.

**Type**: Integer

**Default value**: `undefined`

### `maxHeight`

The maximum height setting allows you to scale the uploaded image by the width if the maximum height is exceeded.

**Type**: Integer

**Default value**: `undefined`

### `maxWidth`

The maximum width setting allows you to scale the uploaded image by the width if the maximum width is exceeded.

**Type**: Integer

**Default value**: `undefined`

## Code sample

The following example shows media multi-uploader.

```html
<div id="uploader" class="uploader"
     data-mage-init='{
        "mediaUploader" : {
            "maxFileSize": 1,
            "maxWidth": 1920,
            "maxHeight": 1200,
            "isResizeEnabled": true,
            "disabled": false
        }
    }'
>
    <div class="fileinput-button form-buttons button">
        <span>Browse Files...</span>
        <input id="fileupload" type="file" name="image"
               data-url="AJAX_URL" multiple="multiple" />
    </div>
    <div class="clear"></div>
    <script id="uploader-template" type="text/x-magento-template" data-template="uploader">
        <div id="<%- data.id %>" class="file-row">
            <span class="file-info"><%- data.name %> (<%- data.size %>)</span>
            <div class="progressbar-container">
                <div class="progressbar upload-progress" style="width: 0%;"></div>
            </div>
            <div class="clear"></div>
        </div>
    </script>
</div>
```

### Result

As a result we see the media multi-uploader which allows uploading the files with the next extensions: **gif**, **jpg**, **jpeg**, **png**

![Multiselect Widget Example]({{ site.baseurl }}/common/images/widget/media-uploader-widget-result.png)

<!-- Link Definitions -->
[`<Magento_Backend_module_dir>/view/adminhtml/web/js/media-uploader.js`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Backend/view/adminhtml/web/js/media-uploader.js
[Initialize JavaScript]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html
