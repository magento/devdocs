---
group: frontend-developer-guide
title: Magento theme structure
functional_areas:
  - Frontend
  - Theme
---

## What's in this topic {#theme-structure-intro}

A [design theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-overview.html) is an important part of the Magento application. This topic describes the file structure of a Magento [theme](https://glossary.magento.com/theme).

## Magento theme location {#theme-structure-loc}
[Storefront](https://glossary.magento.com/storefront) themes are conventionally located under `app/design/frontend/<Vendor>/`. Though technically they can reside in other directories. For example Magento built-in themes can be located under `vendor/magento/theme-frontend-<theme_code>` when a Magento instance is deployed from the [Composer](https://glossary.magento.com/composer) repository.

Each theme must be stored in a separate directory:

```tree
app/design/frontend/<Vendor>/
├── <theme1>
├── <theme2>/
├── <theme3>
├--...
```

## Theme components {#theme-structure-comp}

The structure of a Magento theme directory typically would be like following:

```tree
<theme_dir>/
├── <Vendor>_<Module>/
│   ├── web/
│   │   ├── css/
│   │   │   ├── source/
│   ├── layout/
│   │   ├── override/
│   ├── templates/
├── etc/
├── i18n/
├── media/
├── web/
│   ├── css/
│   │   ├── source/
│   ├── fonts/
│   ├── images/
│   ├── js/
├── composer.json
├── registration.php
├── theme.xml
```

Let's have a closer look at each particular sub-directory.

{:.bs-callout-info}
The directories and files structure described below is the most extended one. It may not coincide with the structure of your store.

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
          Module-specific styles, layouts, and templates.
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>/&lt;Vendor&gt;_&lt;Module&gt;/web/css/</code>
      </td>
      <td colspan="1">
        optional
      </td>
      <td colspan="1">
          Module-specific styles (<code>.css</code> and/or <code>.less</code> files). General styles for the module are in the <code>_module.less</code> file, and styles for widgets are in <code>_widgets.less</code>.
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>/&lt;Vendor&gt;_&lt;Module&gt;/layout</code>
      </td>
      <td colspan="1">
        optional
      </td>
      <td colspan="1">
        Layout files which extend the default module or parent theme layouts.
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>/&lt;Vendor&gt;_&lt;Module&gt;/layout/override/base</code>
      </td>
      <td colspan="1">
        optional
      </td>
      <td colspan="1">
        Layouts that override the default module layouts.
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>/&lt;Vendor&gt;_&lt;Module&gt;/layout/override/&lt;parent_theme&gt;</code>
      </td>
      <td colspan="1">optional</td>
      <td colspan="1">
        Layouts that override the parent theme layouts for the module.
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>/&lt;Vendor&gt;_&lt;Module&gt;/templates</code>
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
      <td colspan="1">required for a theme, but optional if it exists in the parent theme</td>
      <td colspan="1">
        This file contains configurations for all storefront product images and thumbnails. It also contains product page, gallery widget configurations such as navigation options, fullscreen options and breakpoint conditions.
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>/i18n</code>
      </td>
      <td colspan="1">optional</td>
      <td colspan="1">.csv files with translations.</td>
    </tr>
    <tr>
      <td colspan="1">
        <code>/media</code>
      </td>
      <td colspan="1">optional</td>
      <td colspan="1">
        This directory contains a theme preview (a screenshot of your theme).
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
         file which overrides the default variables values.
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
        Contains theme fonts and customized icons.
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
        <code>
          /composer.json
        </code>
      </td>
      <td colspan="1">optional</td>
      <td colspan="1">
        Describes the theme dependencies and some meta-information. Will be here if your theme is a Composer package. The "name" field must be in the format <code>"&lt;vendor-name&gt;/theme-&lt;area&gt;-&lt;theme-name&gt;"</code>.
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>/registration.php</code>
      </td>
      <td colspan="1">required</td>
      <td colspan="1">
        Required to register your theme in the system.
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <code>/theme.xml</code>
      </td>
      <td colspan="1">required</td>
      <td colspan="1">
        The file is mandatory as it declares a theme as a system component. It contains the basic meta-information, like the theme title and the parent theme name, if the theme is inherited from an existing theme. The file is used by the Magento system to recognize the theme.
      </td>
    </tr>
  </tbody>
</table>

## Theme files {#theme-structure-files}

Apart from the configuration file and theme [metadata](https://glossary.magento.com/metadata) file, all theme files fall into the following two categories:

*  Static view files
*  Dynamic view files

### Static view files {#theme-structure-pub}

A set of theme files that are returned by the server to a browser as is, without any processing, are called the *static files* of a theme.

[Static files](https://glossary.magento.com/static-files) can be located in a theme directory as follows:

```tree
<theme_dir>/
├── media/
├── web
│   ├── css/ (except the "source" sub-directory)
│   ├── fonts/
│   ├── images/
│   ├── js/
```

The key difference between static files and other theme files is that static files appear on a web page as references to the files, while other theme files take part in the page generation, but are not explicitly referenced on a web page as files.

Static view files that can be accessed by a direct link from the storefront, are distinguished as public theme files.

{:.bs-callout-info}
  To be actually accessible for browsers public static files are [published]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview) to the `/pub/static/frontend/<Vendor>/<theme>/<language>/css/` directory.

### Dynamic view files

View files that are processed or executed by the server in order to provide result to the client. These are: `.less` files, templates, and layouts.

Dynamic view files are located in a theme directory as follows:

```tree
<theme_dir>/
├── Magento_<module>/
│   ├── web/
│   │   ├── css/
│   │   │   ├── source/
│   ├── layout/
│   │   ├── override/
│   ├── templates/
├── web/
│   ├── css/
│   │   ├── source/
```
