---
group: ui-components-guide
title: ImageUploader component
---

The ImageUploader UI component gives users the ability to upload images to the Magento Media Gallery.

This component is a variation of the [FileUploader component]({{ page.baseurl }}/ui_comp_guide/components/ui-fileuploader.html) and uses the same configuration settings.

## Configuration options

| Title             | Type   | Default | Description                                                                    |
| ----------------- | ------ | ------- | ------------------------------------------------------------------------------ |
| `openDialogTitle` | String |   ---   | Defines the title that appears when opening the media browser dialog slideout. |

## Source files

Extends [`FileUploader`]({{ page.baseurl }}/ui_comp_guide/components/ui-fileuploader.html):

- [`app/code/Magento/Ui/view/base/web/js/form/element/image-uploader.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/element/image-uploader.js)
- [`app/code/Magento/Ui/view/base/web/templates/form/element/uploader/image.html`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/form/element/uploader/image.html)
- [`app/code/Magento/Ui/view/base/ui_component/etc/definition/imageUploader.xsd`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/ui_component/etc/definition/imageUploader.xsd)
- [`app/code/Magento/Ui/Component/Form/Element/DataType/Media/Image.php`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/Component/Form/Element/DataType/Media/Image.php)
