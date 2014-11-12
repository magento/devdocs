---
layout: howtom2devgde_chapters_fedg
title: Magento theme structure
---

<h1 id="theme-structure">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}frontend-dev-guide/themes/theme-structure.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="theme-structure-intro">Introduction</h2>
A design theme is an important part of the Magento application. This article describes the file structure of a Magento theme. 

<h2 id="theme-structure-loc">Magento theme location</h2>
All Magento themes are located under `app/design/<area>/<Vendor>/`.

Each theme is stored in a separate directory:
<pre>
app/design/&lt;area&gt;/&lt;Vendor&gt;/
├──&nbsp;&lt;theme1&gt;
├──&nbsp;&lt;theme2&gt;/
├──&nbsp;&lt;theme3&gt;
├--...
</pre>

<h2 id="theme-structure-comp">Theme components</h2>
The structure of a Magento theme directory typically would be like following:
<pre>
app/design/&lt;area&gt;/&lt;Vendor&gt;/&lt;theme&gt;/
├──&nbsp;&lt;Vendor&gt;_&lt;Module&gt;/&nbsp;
│	├──&nbsp;web/
│	│	├──&nbsp;css/
│	│	│	├──&nbsp;source/
│	├──&nbsp;layout/
│	│	├──&nbsp;override/
│	├──&nbsp;templates/
├──&nbsp;etc/
├──&nbsp;i18n/&nbsp;
├──&nbsp;media/
├──&nbsp;web/
│	├──&nbsp;css/
│	│	├──&nbsp;source/&nbsp;
│	├──&nbsp;fonts/
│	├──&nbsp;images/
│	├──&nbsp;js/
├──&nbsp;composer.json&nbsp;
├──&nbsp;theme.xml&nbsp;
</pre>
Let's have a closer look at each particular sub-directory.

<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>The directories and files structure described below is the most extended one. It may not coincide with the structure of your store.</p></span>
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
        <p>Layout files which extend the default module or parent theme layouts. <!--ADDLINK--></p>
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
         configuration files that invoke mixins for global elements from the Magento UI library, and 
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
        The file is mandatory as it declares a theme as a system component. It contains the basic meta-information, like theme name or theme version, and it is used by the Magento system to recognize the theme. Additionally, here you can see whether a theme is a standalone one or inherited from an existing theme (parent theme).
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

Static files can be located in a theme directory as follows: 
<pre>
app/design/&lt;area&gt;/&lt;Vendor&gt;/&lt;theme&gt;/
├──&nbsp;media/
├──&nbsp;web
│	├──&nbsp;css/&nbsp;(except&nbsp;the&nbsp;&quot;source&quot;&nbsp;sub-directory)
│	├──&nbsp;fonts/
│	├──&nbsp;images/
│	├──&nbsp;js/
</pre>
The key difference between static files and other theme files is that static files appear on a web page as references to the files, while other theme files take part in the page generation, but are not explicitly referenced on a web page as files. 

<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>
Keep in mind that <code>styles.css</code> and other static files are published to <code>/pub/static/&lt;area&gt;/&lt;Vendor&gt;/&lt;theme&gt;/&lt;language&gt;/css/</code> directory to be actually accessible for browsers.</p></span>
</div>

<h3>Non-public theme files</h3>
Those files, which cannot be accessed directly from the frontend, are distinguished as non-public theme files. These are: `.less` files, templates, layouts and configuration files.

Non-public view files can be located in a theme directory as follows: 
<pre>
app/design/&lt;area&gt;/&lt;Vendor&gt;/&lt;theme&gt;/
├──&nbsp;Magento_&lt;module&gt;/&nbsp;
│	├──&nbsp;web/
│	│	├──&nbsp;css/
│	│	│	├──&nbsp;source/
│	├──&nbsp;layout/
│	│	├──&nbsp;override/
│	├──&nbsp;templates/
├──&nbsp;etc/
├──&nbsp;i18n/&nbsp;
├──&nbsp;web/
│	├──source
├──&nbsp;composer.json&nbsp;
├──&nbsp;theme.xml&nbsp;
</pre>