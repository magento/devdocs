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

-  [`app/code/Magento/Ui/view/base/web/js/form/element/image-uploader.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/element/image-uploader.js)
-  [`app/code/Magento/Ui/view/base/web/templates/form/element/uploader/image.html`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/form/element/uploader/image.html)
-  [`app/code/Magento/Ui/view/base/ui_component/etc/definition/imageUploader.xsd`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/ui_component/etc/definition/imageUploader.xsd)
-  [`app/code/Magento/Ui/Component/Form/Element/DataType/Media/Image.php`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/Component/Form/Element/DataType/Media/Image.php)

## Example

```xml
<form>
    ...
    <fieldset>
        ...
        <field name="imageUploaderExample" formElement="imageUploader">
            <settings>
                <notice translate="true">Some notice.</notice>
                <label translate="true">Image Uploader Example</label>
                <componentType>imageUploader</componentType>
            </settings>
            <formElements>
                <imageUploader>
                    <settings>
                        <allowedExtensions>jpg jpeg gif png</allowedExtensions>
                        <maxFileSize>2097152</maxFileSize>
                        <uploaderConfig>
                            <param xsi:type="string" name="url">path/to/save</param>
                        </uploaderConfig>
                    </settings>
                </imageUploader>
            </formElements>
        </field>
        ...
    </fieldset>
    ...
</form>
```

## Result

![ImageUploader Component Example]({{ site.baseurl }}/common/images/ui_comps/ui-image-uploader-example.png)
