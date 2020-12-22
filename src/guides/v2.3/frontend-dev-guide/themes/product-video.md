---
group: frontend-developer-guide
title: Configure product video
functional_areas:
  - Frontend
  - Theme
---

## What's in this topic

In Magento 2 on product pages you can add video from external resources (currently, from [YouTube](https://youtube.com) and [Vimeo](https://vimeo.com/)). Video is [added in Admin](http://docs.magento.com/m2/2.1/ee/user_guide/catalog/product-video.html?Highlight=product%20video) when creating or editing a product.
Certain product video options can be set in the `config.xml` configuration file. These settings are not theme-specific.

## Configure product video options

You can set the following product video options:

<table>
  <tbody>
    <tr>
      <th>Option</th>
      <th>Description</th>
      <th colspan="1">Type</th>
      <th>Default</th>
    </tr>
    <tr>
      <td colspan="1">
        <code>play_if_base</code>
      </td>
      <td colspan="1">Play automatically on page load.</td>
      <td colspan="1">
        Boolean
      </td>
      <td colspan="1">
        0 <br />
(video is not played on page load)
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>show_related</code>
      </td>
      <td colspan="1">Display related videos.</td>
      <td colspan="1">
Boolean
      </td>
<td>
0 <br />
(related videos are not displayed)
</td>
    </tr>
    <tr>
      <td colspan="1">
        <code>video_auto_restart</code>
      </td>
      <td colspan="1">Auto re-play video.</td>
      <td colspan="1">
Boolean
      </td>
<td>
0 <br />
(video is not automatically replayed)
</td>
    </tr>
  </tbody>
</table>

You can configure these options in your custom [module's](https://glossary.magento.com/module) `config.xml` file.

Example:

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Store:etc/config.xsd">
    <default>
        <catalog>
            <product_video>
                <play_if_base>1</play_if_base>
                <show_related>1</show_related>
                <video_auto_restart>1</video_auto_restart>
            </product_video>
        </catalog>
    </default>
</config>
```

For the sake of compatibility, upgradability and easy maintenance, do not edit the default Magento code. Instead add your customizations in a separate module.
