---
group: frontend-developer-guide
title: Configure theme properties
functional_areas:
  - Frontend
  - Theme
---

## What's in this topic

The properties of product images used on the [storefront](https://glossary.magento.com/storefront) are stored in the `view.xml` configuration file. This topic provides all details about what properties are available and how to configure them.

The properties for the images displayed on the product pages are defined by the gallery widget options. The options of the widget can be configured in the [theme](https://glossary.magento.com/theme) `view.xml` as well. For more details, view the [Gallery widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_gallery.html) topic.

## Configure image properties in view.xml {#view_xml_structure}

The conventional location of `view.xml` for a theme is:

```text
<theme_dir>/etc/view.xml
```

For example, here is the `view.xml` of the Magento Blank theme: [`app/design/frontend/Magento/blank/etc/view.xml`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/design/frontend/Magento/blank/etc/view.xml).

In `view.xml`, image properties are configured in the scope of `<images module="Magento_Catalog">` element:

```xml
<media>
    <images module="Magento_Catalog">
    ...
    </images>
</media>
```

Image properties are configured for each image type defined by the `id` and `type` attributes of the `<image>` element:

```xml
<images module="Magento_Catalog">
   <image id="unique_image_id" type="image_type">
   ...
   </image>
</images>
```

The following table describes the attributes in detail:
<table>
  <tbody>
    <tr>
      <th>Attribute</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>
        <code>
          id
        </code>
      </td>
      <td>
        string
      </td>
      <td>
        <p>Image identifier. Unique in the scope of theme.</p> <p>
Can have any value, but in out-of-the- box Magento themes <code>id</code>'s are meaningful and describe the location of an image.</p><p> For example, the <code>id</code> value for images of [cross-sell](https://glossary.magento.com/cross-sell) products displayed in a shopping cart is <code>cart_cross_sell_products</code>.</p> <p><code>id</code>'s are used in <code>.phtml</code> templates for defining the type and properties of images displayed in each particular location on a particular page.</p>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          type
        </code>
      </td>
      <td>
        string
      </td>
      <td>
        The type of the images defined by the specified <code>id</code>. Allowed values:
        <ul>
        <li><code>image</code> - corresponds to the Base Image role in the Magento Admin</li>
        <li><code>small_image</code> - corresponds to the Small Image role in the Magento Admin</li>
        <li><code>swatch_image</code> - corresponds to the Swatch Image role in the Magento Admin</li>
        <li><code>swatch_thumb</code> - corresponds to the Swatch Image role in the [Magento Admin](https://glossary.magento.com/magento-admin).</li>
        <li><code>thumbnail</code> - corresponds to the Thumbnail Image role in the Magento Admin</li>
        </ul>
      </td>
    </tr>
</tbody>
</table>

The following picture illustrates how image roles for product images are specified in the Magento Admin:
![Setting image role in Magento Admin]({{ site.baseurl }}/common/images/fdg_theme_bck.png)

Image properties are defined by the corresponding elements, for example:

```xml
<images module="Magento_Catalog">
    <image id="unique_image_id" type="image">
        <width>100</width> <!-- Image width in px -->
        <height>100</height> <!-- Image height in px -->
    </image>
</images>
```

All image properties used in `view.xml` should be listed in the order shown here to prevent a **"This element is not expected."** frontend error. The following table contains the list of all properties which can be configured:

| Element | Type | Description | Required |
| --- | --- | --- | --- |
| `width` | integer | Image width in pixels. | Optional |
| `height` | integer | Image height in pixels. | Optional |
| `constrain` | boolean | If set to `true`, images that are smaller than required by the configuration, are not enlarged. Default value: `true`. | Optional |
| `aspect_ratio` | boolean | If set to `true`, proportions of images are not changed even if required by the configuration. Default value: `true`. | Optional |
| `frame` | boolean | If set to `true`, images are not cropped. Default value: `true`. Applied only if `aspect_ratio` is set to `true`. | Optional |
| `transparency` | boolean | If set to `true`, the transparent background of images is saved. If is set to `false`, images have the white background (by default). You can set the color for the background using the `background` parameter. Default value: `true`. | Optional |
| `background` | string | The color for the images background. Not applied to images with transparency, if `transparency` is set to `true`. Format: "[, ,]", e.g.: "[255, 255, 255]". | Optional |

### Resize catalog images

Generally, product images are cached while saving the product. However, the `magento catalog:images:resize` command enables you to resize all images for display on your storefront. Situations where this could be necessary might be:

*  After you import products, which might have images of various sizes
*  If images were resized or deleted manually from [cache](https://glossary.magento.com/cache)

Each image assigned to a product must be resized in accordance with image [metadata](https://glossary.magento.com/metadata) defined in a module's [`view.xml`]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html#fedg_create_theme_how-to-images) configuration file. After resizing an image, its resized copy is stored in the cache (`/pub/media/catalog/product/cache` directory). Magento serves storefront images from cache.

Command usage:

```bash
bin/magento catalog:images:resize
```

This command supports synchronous (default) and asynchronous modes.  Asynchronous means that images will not be processed immediately on command execution. Using the Magento queue functionality, these images will be scheduled for resizing and then processed in the background. To enable asynchronous mode, use the `-a` or `--async` option.

The message `Product images resized successfully` displays after the command has finished.

To speed up the job while in asynchronous mode, you may manually run several instances of a consumer with the command in each instance:

```bash
bin/magento queue:consumer:start media.storage.catalog.image.resize
```

## Configure variables in view.xml {#view_xml_vars}

The variable properties `vars` are configured for each module individually, defined by `module` name.

```xml
<vars module="Magento_Catalog">
    <var name="breakpoints">
        <var name="mobile">
            <var name="conditions">
                <var name="max-width">767px</var>
            </var>
            ...
        </var>
    </var>
    ...
</vars>
```

Any block that extends [`AbstractBlock`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/View/Element/AbstractBlock.php), can fetch variable values with the `getVar` method:

```php
$block->getVar($name, $module = null)
```

| Parameter | Required | Description |
| --- | --- | --- |
| `name` | `Yes` | The first level variable name |
| `module` | `No` | The module name where the variable is added. If not passed, it will be determined automatically based on the current module. |

Check the following example on getting the breakpoints variable by the [`Gallery`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Block/Product/View/Gallery.php) block:

```php
/**
 * Return breakpoints options
 *
 * @return string
 */
public function getBreakpoints()
{
    return $this->jsonEncoder->encode($this->getVar('breakpoints'));
}
```

 {:.bs-callout-info}
Variables may be used within the scope of modules than the defined one.

### Image lazy loading {#lazy_loading}

When saving products, images are resized based on different properties including the `frame` variable `product_image_white_borders` in `view.xml`.
By default, all images have frames. Magento calculates the required frame size and then it allocates the image to it.
If the image is small, the white frame will be bigger.

The variable `product_image_white_borders` can be overwritten in a custom theme. If it is not defined in a custom theme, it can also be set in `app/code/Magento/Catalog/etc/view.xml`.
Variables defined in the theme `view.xml` have a higher priority. If the same variable is in a module's and also in the theme's `view.xml`, the module variable will be overwritten by the theme variable.

If the `frame` property is enabled in the configuration file, native lazy-loading is enabled on the category product page, checkout shopping cart, and customer wish list.
If the `frame` property is disabled, image lazy-loading is also disabled, unless the variable `enable_lazy_loading_for_images_without_borders` is enabled in `view.xml`.
This is done to prevent small images from being stretched and distorted.

If you have images within frames, and you are sure your images are correctly sized, you can enable lazy-loading by setting `enable_lazy_loading_for_images_without_borders` to `1` in `view.xml`.
