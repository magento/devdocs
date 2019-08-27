---
group: frontend-developer-guide
title: Configure images properties for a theme
functional_areas:
  - Frontend
  - Theme
---

## What's in this topic

The properties of product images used on the [storefront](https://glossary.magento.com/storefront) are stored in the `view.xml` configuration file. This topic provides all details about what properties are available and how to configure them.

The properties for the images displayed on the product pages are defined by the gallery widget options. The options of the widget can be configured in the [theme](https://glossary.magento.com/theme) `view.xml` as well. For more details, view the [Gallery widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_gallery.html) topic.

## Configure image properties in view.xml {#view_xml_structure}

The conventional location of `view.xml` for a theme is:

{% raw %}
	<theme_dir>/etc/view.xml
{% endraw %}

For example, here is the `view.xml` of the Magento Blank theme: [`app/design/frontend/Magento/blank/etc/view.xml`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/design/frontend/Magento/blank/etc/view.xml).

In `view.xml`, image properties are configured in the scope of `<images module="Magento_Catalog">` element:

```xml
<images module="Magento_Catalog">
...
<images/>
```

Image properties are configured for each image type defined by the `id` and `type` attributes of the `<image>` element:

```xml
<images module="Magento_Catalog">
	<image id="unique_image_id" type="image_type">
	...
	</image>
<images/>
```

<br>
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

<br>

All image properties used in `view.xml` should be listed in the order shown here to prevent a **"This element is not expected."** frontend error. The following table contains the list of all properties which can be configured:
<table>
  <tbody>
    <tr>
      <th>
        Element
      </th>
      <th>
        Type
      </th>
      <th>
        Description
      </th>
      <th>
        Required
      </th>
    </tr>
    <tr>
      <td>
        <code>width</code>
      </td>
      <td>
        integer
      </td>
      <td>
        Image width in pixels.
      </td>
      <td>
        Optional
      </td>
    </tr>
    <tr>
      <td>
        <code>height</code>
      </td>
      <td>
        integer
      </td>
      <td>
        Image height in pixels.
      </td>
      <td>
        Optional
      </td>
    </tr>
    <tr>
      <td>
        <code>constrain</code>
      </td>
      <td>
        boolean
      </td>
      <td>
        If set to <code>true</code>, images that are smaller than
        required by the configuration, are not enlarged. Default
        value: <code>true</code>.
      </td>
      <td>
        Optional
      </td>
    </tr>
    <tr>
      <td>
        <code>aspect_ratio</code>
      </td>
      <td>
        boolean
      </td>
      <td>
        If set to <code>true</code>, proportions of images are not
        changed even if required by the configuration. Default
        value: <code>true</code>.
      </td>
      <td>
        Optional
      </td>
    </tr>
    <tr>
      <td>
        <code>frame</code>
      </td>
      <td>
        boolean
      </td>
      <td>
        If set to <code>true</code>, images are not cropped.
        Default value: <code>true</code>. Applied only if
        <code>aspect_ratio</code> is set to <code>true</code>.
      </td>
      <td>
        Optional
      </td>
    </tr>
    <tr>
      <td>
        <code>transparency</code>
      </td>
      <td>
        boolean
      </td>
      <td>
        If set to <code>true</code>, the transparent background of
        images is saved. If is set to <code>false</code>, images
        have the white background (by default). You can set the
        color for the background using the <code>background</code>
        parameter. Default value: <code>true</code>.
      </td>
      <td>
        Optional
      </td>
    </tr>
    <tr>
      <td>
        <code>background</code>
      </td>
      <td>
        string
      </td>
      <td>
        The color for the images background. Not applied to images
        with transparency, if <code>transparency</code> is set to
        <code>true</code>. Format: "[, , ]", e.g.: "[255,
        255, 255]".
      </td>
      <td>
        Optional
      </td>
    </tr>
  </tbody>
</table>

#### Resize catalog images

Generally, product images are cached while saving the product. However, the `magento catalog:images:resize` command enables you to resize all images for display on your storefront. Situations where this could be necessary might be:

* After you import products, which might have images of various sizes
* If images were resized or deleted manually from [cache](https://glossary.magento.com/cache)

Each image assigned to a product must be resized in accordance with image [metadata](https://glossary.magento.com/metadata) defined in a module's [`view.xml`]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html#fedg_create_theme_how-to-images) configuration file. After resizing an image, its resized copy is stored in the cache (`/pub/media/catalog/product/cache` directory). Magento serves storefront images from cache.

Command usage:

```bash
php <magento install dir>/bin/magento catalog:images:resize
```

This command has no arguments or options. A progress indicator displays while the command runs.

The message `Product images resized successfully` displays to confirm the command succeeded.
