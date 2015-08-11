---
layout: default
group: fedg
subgroup: A_Themes
title: Theme configuration files
menu_title: Theme configuration files
menu_order: 4
github_link: frontend-dev-guide/themes/theme-config.md
---

## Overview ##

<h2 id="view_xml">view.xml</h2>
The properties of product images used in catalog on the storefront are stored in a `view.xml` configuration file. It's conventional location for a theme is:

	app/design/frontend/<Vendor>/<theme>/etc/view.xml

<h3 id="view_xml_structure">Configuring image properties in view.xml</h3>

Catalog image properties are configured in the scope of `<images module="Magento_Catalog">` element:


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

Where the `id` and `types` values can be the following:
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
        Unique image identifier (name).
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
<li><code>thumbnail</code></li>
<li><code>small_image</code></li>
<li><code>image</code></li>
<li><code>swatch_image</code></li>
<li><code>swatch_thumb</code></li>
</ul>
      </td>
    </tr>
</tbody>
</table>

Image properties are defined by the corresponding elements, for example:

{% highlight xml %}
<images module="Magento_Catalog">
    <image id="unique_image_id" type="image">
        <width>100</width>
        <height>100</height>
    </image>
</images>
{% endhighlight xml %}

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
 Image width
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
 Image height
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
True by default.
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
boolean
      </td>
      <td colspan="1">
Maintain aspect ratio. True by default.True by default.
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
Show white border around the image. True by default.
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
True by default.
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
Array of RGB values. 255, 255, 255 by default.
      </td>
      <td colspan="1">
        Optional
      </td>
    </tr>
</tbody>
</table>