---
layout: default
group: fedg
subgroup: A_Themes
title: Configure product video
menu_title: Configure product video
menu_order: 4
version: 2.0
github_link: frontend-dev-guide/themes/product-video.md
---


## What's in this topic

In Magento 2 on product pages you can add video from external resource (currently, from [YouTube](youtube.com) and [Vimeo](https://vimeo.com/)). Video is [added in Admin](http://docs.magento.com/m2/2.0/ee/user_guide/catalog/product-video.html?Highlight=product%20video) when creating or editing a product. 
Certain product video options can be set in the `config.xml` configuration file. These settings are not theme-specific.

## Configuring 

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
        0 (video is not played on page load)
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
0 (related videos are not displayed)
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
0 (video is not automatically replayed)
</td>
    </tr>
  </tbody>
</table>

The options are set in the `config.xml` of you custom module. 

Example:

{%highlight xml%}
        <catalog>
            <product_video>
                <play_if_base>1</play_if_base>
                <show_related>1</show_related>
                <video_auto_restart>1</video_auto_restart>
            </product_video>
        </catalog>
{%endhighlight%}

For the sake of compatibility, upgradability and easy maintenance, do not edit the default Magento code. Instead add your customizations in a separate module.