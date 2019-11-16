---
group: ui-components-guide
title: Masonry component
---

The Masonry component is a collection of columns. It renders the masonry grid layout in the Ui component

## Dependencies

The Masonry component has dependencies on the following components:

*  Listing: `app/code/Magento/Ui/view/base/web/js/grid/listing.js`
*  Request Animation Frame: `app/code/Magento/Ui/view/base/web/js/lib/view/utils/raf.js`

## Configuration options

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default Value</th>
  </tr>
  <tr>
    <td><code>containerId</code></td>
    <td>Images container id.</td>
    <td>string</td>
    <td>-</td>
  </tr>
  <tr>
    <td><code>minRatio</code></td>
    <td>Minimum aspect ratio for each image.</td>
    <td>int</td>
    <td>-</td>
  </tr>
  <tr>
    <td><code>containerWidth</code></td>
    <td>Width of the container.</td>
    <td>int</td>
    <td><code>window.innerWidth</code></td>
  </tr>
  <tr>
    <td><code>imageMargin</code></td>
    <td>Margin between images.</td>
    <td>int</td>
    <td><code>20</code></td>
  </tr>
  <tr>
    <td><code>maxImageHeight</code></td>
    <td>Maximum height of the image.</td>
    <td>int</td>
    <td><code>240</code></td>
  </tr>
  <tr>
    <td><code>containerWidthToMinRatio</code></td>
    <td>Minimum width and height ratio when the container width is less than default key.</td>
    <td>Object</td>
    <td><code>{640: 3, 1280: 5, 1920: 8}</code></td>
  </tr>
  <tr>
    <td><code>defaultMinRatio</code></td>
    <td>Default minimal image width to height ratio.</td>
    <td>int</td>
    <td><code>10</code></td>
  </tr>
  <tr>
    <td><code>refreshFPS</code></td>
    <td>Layout update FPS during window resizing.</td>
    <td>int</td>
    <td><code>60</code></td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>Path to the component’s <code>.html</code> template.</td>
    <td>String</td>
    <td><code>ui/grid/masonry</code></td>
  </tr>
</table>

## Examples

```xml
<columns name="masonry_images_columns" component="Magento_Ui/js/grid/masonry">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="containerId" xsi:type="string">masonry-grid-example</item>
            </item>
        </argument>
        ...
</columns>
```

## Source files

Extends `Listing`:

*  [app\code\Magento\Ui\view\base\web\js\grid\masonry.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/masonry.js)
*  [app\code\Magento\Ui\view\base\web\templates\grid\masonry.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/masonry.html)

#### Result

![Masonry Grid]({{ site.baseurl }}/common/images/ui_comps/masonry-grid-result.png)
