---
layout: default
group: UI_Components_guide
title: ImageUploader component
github_link: ui_comp_guide/components/image-uploader/index.md
---

The ImageUploader UI component gives users the ability to upload images to the Magento Media Gallery.

This component is a variation of the [FileUploader component] and uses the same configuration settings.

## Core files

| Type                            | Filename              |
| ------------------------------- | --------------------- |
| PHP Class                       | [`Image.php`]         |
| Javascript Module               | [`image-uploader.js`] |
| Template                        | [`image.html`]        |
| Configuration Schema Definition | [`imageUploader.xsd`] |
{:style="table-layout:auto;"}

## Configuration settings

Extends all [FileUploader component] configuration settings.

ImageUploader component-specific configuration:

| Title             | Type   | Default | Description                                                                    |
| ----------------- | ------ | ------- | ------------------------------------------------------------------------------ |
| `openDialogTitle` | String |         | Defines the title that appears when opening the media browser dialog slideout. |
{:style="table-layout:auto;"}

[FileUploader component]: {{page.baseurl}}ui_comp_guide/components/ui-fileuploader.html
[`image-uploader.js`]: https://github.com/magento/magento2/blob/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/form/element/image-uploader.js
[`image.html`]: https://github.com/magento/magento2/blob/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/templates/form/element/uploader/image.html
[`imageUploader.xsd`]: https://github.com/magento/magento2/blob/{{page.guide_version}}/app/code/Magento/Ui/view/base/ui_component/etc/definition/imageUploader.xsd
[`Image.php`]: https://github.com/magento/magento2/blob/{{page.guide_version}}/app/code/Magento/Ui/Component/Form/Element/DataType/Media/Image.php