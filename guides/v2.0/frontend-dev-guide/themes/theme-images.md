---
layout: default
group: fedg
subgroup: A_Themes
title: Configure images properties for a theme
menu_title: Configure images properties for a theme
menu_order: 4
github_link: frontend-dev-guide/themes/theme-images.md
---

## Overview ##

The properties of product images used on the storefront are stored in the `view.xml` configuration file. This topic provides all details about what proporties are available and how to configure them.

<h3 id="view_xml_structure">Configuring image properties in view.xml</h3>

The conventional location of `view.xml` for a theme is:
{% raw %}
	app/design/frontend/<Vendor>/<theme>/etc/view.xml
{% endraw %}

In a `view.xml`, image properties are configured in the scope of `<images module="Magento_Catalog">` element:

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

Each combination of `id` and `type` is unique. 
<p>
The following table describes the attributes in details:
<table>
  <tbody>
    <tr>
      <th>Attribute</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
    <tr>
      <td colspan="1">
        <code>
          id
        </code>
      </td>
      <td colspan="1">
        string
      </td>
      <td colspan="1">
        <p>Unique image identifier.</p> <p>
Can have any value, but in default Magento themes <code>id</code>'s are meaningful and describe the location of an image. </p><p> For example, the <code>id</code> value for images of cross-sell products displayed in a shopping card is <i>"cart_cross_sell_products"</i>.</p> <p>For each <code>id</code> <code>id</code>'s are used in <code>.phtml</code> templates for defining what images are displayed in a certain location on a certain page.</p>
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>
          type
        </code>
      </td>
      <td colspan="1">
        string
      </td>
      <td colspan="1">
        Image type. Allowed values:
<ul>
<li><code>image</code> - corresponds to the Base Image role in the Magento Admin</li>
<li><code>small_image</code> - corresponds to the Small Image role in the Magento Admin</li>
<li><code>swatch_image</code> - corresponds to the Swatch Image role in the Magento Admin</li>
<li><code>swatch_thumb</code> - corresponds to the Swatch Image role in the Magento Admin. </li>
<li><code>thumbnail</code> - corresponds to the Thumbnail Image role in the Magento Admin</li>
</ul>

The following picture illustrates how image roles for product images are specified in the Magento Admin:
<img src="{{site.baseurl}}common/images/fdg_theme_bck.png" alt="Setting image role in Magento Admin">

      </td>
    </tr>
</tbody>
</table>
</p>
Image properties are defined by the corresponding elements, for example:

{% highlight xml %}
<images module="Magento_Catalog">
    <image id="unique_image_id" type="image">
        <width>100</width>
        <height>100</height>
    </image>
</images>
{% endhighlight xml %}

<br>

The following table contains the list of all properties which can be configured:
<table>
  <tbody>
    <tr>
      <th>Element</th>
      <th>Type</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
    <tr>
      <td colspan="1">
        <code>
          width
        </code>
      </td>
      <td colspan="1">
integer
      </td>
      <td colspan="1">
 Image width in pixels.
      </td>
      <td colspan="1">
        Optional
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>
          height
        </code>
      </td>
      <td colspan="1">
integer
      </td>
      <td colspan="1">
 Image height in pixels.
      </td>
      <td colspan="1">
        Optional
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>
          constrain
        </code>
      </td>
      <td colspan="1">
boolean
      </td>
      <td colspan="1">
If set to <code>true</code>, then images which are smaller than required by the configuration, are not enlarged. Default value: <code>true</code>.
      </td>
      <td colspan="1">
        Optional
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>
          aspect_ratio
        </code>
      </td>
      <td colspan="1">
booleans
      </td>
      <td colspan="1">
If set to <code>true</code>, proportions of images are not changed even if required by the configuration. Default value: <code>true</code>.
      </td>
      <td colspan="1">
        Optional
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>
          frame
        </code>
      </td>
      <td colspan="1">
boolean
      </td>
      <td colspan="1">
If set to <code>true</code>, images are not cropped. Default value: <code>true</code>. Applied only if <code>aspect_ratio</code> is set to <code>true</code>.
      </td>
      <td colspan="1">
        Optional
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>
          transparency
        </code>
      </td>
      <td colspan="1">
boolean
      </td>
      <td colspan="1">
Is set to <code>true</code>, the transparent background of images is saved. If is set to <code>false</code>, images have the white background (by default). You can set the color for the background using the <code>background</code> parameter. Default value: <code>true</code>.
      </td>
      <td colspan="1">
        Optional
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>
          background
        </code>
      </td>
      <td colspan="1">
array
      </td>
      <td colspan="1">
The color for the images background. Not applied to images with transparency, if <code>transparency</code> is set to <code>true</code>.
      </td>
      <td colspan="1">
        Optional
      </td>
    </tr>
</tbody>
</table>

