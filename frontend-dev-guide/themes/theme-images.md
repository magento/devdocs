---
group: frontend-developer-guide
subgroup: A_Themes
title: Configure images properties for a theme
menu_title: Configure images properties for a theme
menu_order: 90
functional_areas:
  - Frontend
  - Theme
---

## What's in this topic ##

The properties of product images used on the {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} are stored in the `view.xml` configuration file. This topic provides all details about what properties are available and how to configure them.

The properties for the images displayed on the product pages are defined by the gallery widget options. The options of the widget can be configured in the {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} `view.xml` as well. For more details, view the [Gallery widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_gallery.html) topic.

## Configure image properties in view.xml   {#view_xml_structure}

The conventional location of `view.xml` for a theme is:
{% raw %}
	<theme_dir>/etc/view.xml
{% endraw %}

For example, here is the `view.xml` of the Magento Blank theme: <a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/design/frontend/Magento/blank/etc/view.xml" target="_blank"><code>app/design/frontend/Magento/blank/etc/view.xml</code></a>.


In `view.xml`, image properties are configured in the scope of `<images module="Magento_Catalog">` element:

{% highlight xml %}
<images module="Magento_Catalog">
...
<images/>
{% endhighlight xml %}

Image properties are configured for each image type defined by the `id` and `type` attributes of the `<image>` element:

{% highlight xml %}
<images module="Magento_Catalog">
	<image id="unique_image_id" type="image_type">
	...
	</image>
<images/>
{% endhighlight xml %}

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
Can have any value, but in out-of-the- box Magento themes <code>id</code>'s are meaningful and describe the location of an image.</p><p> For example, the <code>id</code> value for images of {% glossarytooltip 9eb0e3fa-cb69-4e21-9ad0-cabeb98afcda %}cross-sell{% endglossarytooltip %} products displayed in a shopping cart is <code>cart_cross_sell_products</code>.</p> <p><code>id</code>'s are used in <code>.phtml</code> templates for defining the type and properties of images displayed in each particular location on a particular page.</p>
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
<li><code>swatch_thumb</code> - corresponds to the Swatch Image role in the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %}. </li>
<li><code>thumbnail</code> - corresponds to the Thumbnail Image role in the Magento Admin</li>
</ul>

      </td>
    </tr>
</tbody>
</table>

The following picture illustrates how image roles for product images are specified in the Magento Admin:

![Setting image role in Magento Admin]({{ site.baseurl }}/common/images/fdg_theme_bck.png)

Image properties are defined by the corresponding elements, for example:

{% highlight xml %}
<images module="Magento_Catalog">
    <image id="unique_image_id" type="image">
        <width>100</width> <!-- Image width in px -->
        <height>100</height> <!-- Image height in px -->
    </image>
</images>
{% endhighlight xml %}

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
* If images were resized or deleted manually from {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %}

Each image assigned to a product must be resized in accordance with image {% glossarytooltip 3f0f2ef1-ad38-41c6-bd1e-390daaa71d76 %}metadata{% endglossarytooltip %} defined in a module's <a href="{{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html#fedg_create_theme_how-to-images">`view.xml`</a> configuration file. After resizing an image, its resized copy is stored in the cache (`/pub/media/catalog/product/cache` directory). Magento serves storefront images from cache.

Command usage:

`php <magento install dir>/bin/magento catalog:images:resize`

This command has no arguments or options. A progress indicator displays while the command runs.

The message `Product images resized successfully` displays to confirm the command succeeded.
