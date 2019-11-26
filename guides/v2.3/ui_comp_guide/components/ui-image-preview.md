---
group: ui-components-guide
title: ImagePreview Component
contributor_name: Shankar Konar
contributor_link: https://github.com/konarshankar07
---

The ImagePreview component implements an inline preview of an image, which is typically used in conjunction with a grid of image search results. Users can expand a more detailed preview of an image in-line with other image search results, and they have the ability to click on "next" or "previous" arrows to navigate to another image's detailed preview.

## Dependencies

The ImagePreview component has dependencies on the following components:

*  [Column]({{page.baseurl}}/ui_comp_guide/components/ui-column.html): `app/code/Magento/Ui/view/base/web/js/grid/columns/column.js`

## Configuration options

|      Option                |   Description                                                                                                                                                                                                      |      Type      |  Default Value                           |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------| -----------------------------------------|
| `previewImageSelector`     | The selector of the HTML element used for the image preview.                                                                                                                                                       |  String        | `[data-image-preview]`                   |
| `visibleRecord`            | Currently visible image.                                                                                                                                                                                           |  Int           | null                                     |
| `height`                   | Height of Image Preview.                                                                                                                                                                                           |  Int           | `0`                                      |
| `displayedRecord`          | Currently previewed image.                                                                                                                                                                                         |  Object        | `{}`                                     |
| `lastOpenedImage`          | Previously opened image.                                                                                                                                                                                           |  Int           | null                                     |
| `statefull`                | Defines a list of component properties whose values are automatically saved in the configured storage if they change. `key` is the property's name and the `value` defines whether its saved.                      |  Object        | `{sorting: true, lastOpenedImage: true}` |
| `template`                 | Path to the component’s `.html` template.                                                                                                                                                                          |  String        | `ui/grid/columns/image-preview`          |

## Examples

```xml
<column name="image-preview" component="Magento_Ui/js/grid/columns/image-preview">
    <settings>
        <label translate="true">Image Preview</label>
        <visible>true</visible>
        <sortable>false</sortable>
    </settings>
</column>
```

## Source files

Extends `Column`:

*  [app\code\Magento\Ui\view\base\web\js\grid\columns\image-preview.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/columns/image-preview.js)
*  [app\code\Magento\Ui\view\base\web\templates\grid\columns\image-preview.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/columns/image-preview.html)

### Result

![ImagePreview Component]({{ site.baseurl }}/common/images/ui_comps/image-preview-result.png)
