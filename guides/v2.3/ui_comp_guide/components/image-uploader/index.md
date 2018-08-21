---
group: UI_Components_guide
title: ImageUploader component
github_link: ui_comp_guide/components/image-uploader/index.md
---

The ImageUploader UI component gives users the ability to upload images to the Magento Media Gallery.

This component is a variation of the [FileUploader component]({{ page.baseurl }}/ui_comp_guide/components/ui-fileuploader.html) and uses the same configuration settings.


## Configuration options

| Title             | Type   | Default | Description                                                                    |
| ----------------- | ------ | ------- | ------------------------------------------------------------------------------ |
| `openDialogTitle` | String |   ---   | Defines the title that appears when opening the media browser dialog slideout. |
{:style="table-layout:auto;"}

## Source files

Extends [`FileUploader`]({{ page.baseurl }}/ui_comp_guide/components/ui-fileuploader.html):

- [`app/code/Magento/Ui/view/base/web/js/form/element/image-uploader.js`](https://github.com/magento/magento2/blob/2.3-develop/app/code/Magento/Ui/view/base/web/js/form/element/image-uploader.js)
- [`app/code/Magento/Ui/view/base/web/templates/form/element/uploader/image.html`](https://github.com/magento/magento2/blob/2.3-develop/app/code/Magento/Ui/view/base/web/templates/form/element/uploader/image.html)
- [`app/code/Magento/Ui/view/base/ui_component/etc/definition/imageUploader.xsd`](https://github.com/magento/magento2/blob/2.3-develop/app/code/Magento/Ui/view/base/ui_component/etc/definition/imageUploader.xsd)
- [`app/code/Magento/Ui/Component/Form/Element/DataType/Media/Image.php`](https://github.com/magento/magento2/blob/2.3-develop/app/code/Magento/Ui/Component/Form/Element/DataType/Media/Image.php)