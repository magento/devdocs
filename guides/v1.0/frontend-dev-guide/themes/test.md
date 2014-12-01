---
layout: default
group: fedg
subgroup: A_Themes
title: test
menu_title: test
menu_order: 3
github_link: frontend-dev-guide/themes/theme-structure.md
---

Sample 1:

<pre>app/design/[area name]/[VendorName]/[theme name]/
|&mdash;Magento_[module name]/

Sample 1a:

|-- Magento_[module name]/
|   |-- web/
</pre>


<div class="bs-callout bs-callout-info" id="info">
  <p>The directories and files structure described below is the most extended one. It may not coincide with the structure of your store.</p>
</div>
<table>
  <tbody>
    <tr>
      <th>Directory</th>
      <th colspan="1">Required</th>
      <th>Description</th>
    </tr>
    <tr>
      <td colspan="1">
        <code>
          /&lt;Vendor&gt;_&lt;Module&gt;
        </code>
      </td>
      <td colspan="1">
        optional
      </td>
      <td colspan="1">
        <p>
          Module-specific styles, layouts, and templates.</p>
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>/&lt;Vendor&gt;_&lt;Module&gt;
        </code>
        <code>/web/css/source</code>
      </td>
      <td colspan="1">
        optional
      </td>
      <td colspan="1">
        <p>
          Module-</span>specific styles (<code>.css</code> and/or <code>.less</code> file). General styles for the module are in the <code>module.less</code> file, and styles for widgets are in <code>widgets.less</code>.</p>
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>/&lt;Vendor&gt;/layout</code>
      </td>
      <td colspan="1">
        optional
      </td>
      <td colspan="1">
        <p>Layout files which extend the default module or parent theme layouts. <!--ADDLINK--></p>
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>/&lt;Vendor&gt;
        </code>
        <code>/layout/override/base</code>
      </td>
      <td colspan="1">
        optional
      </td>
      <td colspan="1">
        <p>Layouts that override the default module layouts.</p>
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>/&ltVendor&gt;
        </code>
        <code>/layout/override/&lt;parent_theme&gt;</code>
      </td>
      <td colspan="1">optional</td>
      <td colspan="1">
        Layouts that override the parent theme layouts for the module.
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>/&lt;Vendor&gt;/templates</code>
      </td>
      <td colspan="1">
        optional
      </td>
      <td colspan="1">
        This directory contains theme templates which override the default module templates or parent theme templates for this module. Custom templates are also stored in this directory.
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>
          /etc/view.xml
        </code>
      </td>
      <td colspan="1">optional</td>
      <td colspan="1">
        This file contains images configuration for all storefront product images and thumbnails.
      </td>
    </tr>
    <tr>
      <td colspan="1">/<code>i18n</code>
      </td>
      <td colspan="1">optional</td>
      <td colspan="1">.csv files with translations.</td>
    </tr>
    <tr>
      <td colspan="1">
        <code>/media</code>

      </td>
      <td colspan="1">required</td>
      <td colspan="1">
        <p>This directory contains a theme preview (a screenshot of your theme).
        </p>
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>/web</code>
      </td>
      <td colspan="1">
        optional
      </td>
      <td colspan="1">Static files that can be loaded directly from the frontend.</td>
    </tr>
    <tr>
      <td colspan="1">
        <code>/web/css/source</code>

      </td>
      <td colspan="1">
        optional
      </td>
      <td colspan="1">This directory contains theme
        <code>less</code>
         configuration files that invoke mixins for global elements from the Magento UI library, and
        <code>theme.less</code>
         file which overrides the default variables values. <!--ADDLINK-->
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>/web/css/source/lib</code>
      </td>
      <td colspan="1">
        optional
      </td>
      <td colspan="1">
        View files that override the UI library files stored in <code>lib/web/css/source/lib</code>

      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>/web/fonts</code>
      </td>
      <td colspan="1">
        optional
      </td>
      <td colspan="1">
        Theme fonts.
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>/web/images</code>
      </td>
      <td colspan="1">
        optional
      </td>
      <td colspan="1">
        Images that are used in this theme.
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>/web/js</code>
      </td>
      <td colspan="1">
        optional
      </td>
      <td colspan="1">
        Theme JavaScript files. 
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>/theme.xml</code>

      </td>
      <td colspan="1">required</td>
      <td colspan="1">
        The file is mandatory as it declares a theme as a system component. It contains the basic meta-information, like theme name or theme version, and it is used by the Magento system to recognize the theme. Additionally, here you can see whether a theme is a standalone one or inherited from an existing theme (parent theme).
           <!--ADDLINK-->

      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>
          /composer.json
        </code>
      </td>
      <td colspan="1">required</td>
      <td colspan="1">
        <p>Describes the theme dependencies and some meta-information.<!--ADDLINK-->
        </p>
      </td>
    </tr>
  </tbody>
</table>

<h2 id="theme-structure-files">Theme files</h2>
All theme files are stored under `app/design/<area>/<Vendor>/<theme>/`.

Apart from the configuration file and theme metadata file, all theme files fall into the following two categories:

* Public theme files (static view files)
* Non-public theme files

<h3 id="theme-structure-pub">Public theme files (static view files)</h3>
A set of theme files that are returned by the sever to a browser as is, without any processing, are called the *static files* of a theme. This files usually can be accessed by a direct link from the frontend, so they are distinguished as public theme files. They are: images, .CSS styles, JavaScript files and fonts.


<div class="bs-callout bs-callout-info" id="info">
  <p>Keep in mind that <code>styles.css</code> and other static files are <a href="{{site.gdeurl}}architecture/view/static-process.html">published</a> to <code>/pub/static/&lt;area&gt;/&lt;Vendor&gt;/&lt;theme&gt;/&lt;language&gt;/css/</code> directory to be actually accessible for browsers.</p>
</div>

<h3>Non-public theme files</h3>
Those files, which cannot be accessed directly from the frontend, are distinguished as non-public theme files. These are: `.less` files, templates, layouts and configuration files.

