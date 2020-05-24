---
group: frontend-developer-guide
title: Include CSS
functional_areas:
  - Frontend
  - Theme
---

## In this topic {#fedg_css-in-themes_overview}

In the Magento application, CSS files are included in [layout files].

Technically there is an option to include them in template files, but we strongly recommend avoiding this.

{:.bs-callout-info}
The CSS class names can be assigned in both templates and layouts.

This topic describes how stylesheets are located by default in the Magento application file system, and the recommended way to include CSS files in layouts.

## How Magento stylesheet files are organized

Conventionally, CSS and Less files are stored only in themes. [Module](https://glossary.magento.com/module) directories do not contain any default styles.

In a [theme directory][], stylesheets are stored in the following locations:

<table>
<tr>
<th>Directory, relative to <code>&lt;theme_dir&gt;</code></th>
<th>Description</th>
</tr>
<tr>
<td> <code>/&lt;Namespace&gt;_&lt;Module&gt;/web/css</code>
</td>
<td> Module-specific styles.
</td>
</tr>
<tr>
<td> <code>/web/css</code>
   </td>
   <td>
Contains the following:
<ul>
<li>
<code>print.less</code>: used to generate styles for the printed version of store pages.
</li>
<li><code>_styles.less</code> - a composite file, which includes all Less files used in the <a href="https://glossary.magento.com/theme">theme</a>. The underscore sign ("_") in a file name conventionally means that a file is not used independently, but is included in other files.
</li>
<li><code>styles-m.less</code>: used to generate mobile-specific styles, includes <code>_styles.less</code>.
</li>
<li><code>styles-l.less</code>: used to generate desktop-specific styles, includes <code>_styles.less</code>.
</li>
<li><code>/source</code>: this subdirectory contains Less configuration files that invoke mixins from the Magento UI <a href="https://glossary.magento.com/library">library</a>.
</li>
<li>
<code>/source/_theme.less</code>: overrides the default Magento UI library variables values.
</li>

  </ul>
   </td>
</tr>

</table>

## Include CSS {#fedg_css-in-themes_xml}

In the Magento application, the recommended way to include stylesheets is to specify them in [layout](https://glossary.magento.com/layout) files.

Usually, the stylesheets you include should be available for all store pages. To achieve this, include your CSS in `default_head_blocks.xml` of the `Magento_Theme` module, which defines the default `<head>` page section for all Magento pages.
The recommended way to do this is adding an [extending]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-extend.html) `default_head_blocks.xml` in your theme, and including the required stylesheets in this file.

Your custom `default_head_blocks.xml` should be located as follows:

`<theme_dir>/Magento_Theme/layout/default_head_blocks.xml`.

To include a CSS file, add the `<css src="<path>/<file>" media="print|<option>"/>` block in `<head>` section in a layout file. `<path>` is specified relative to the theme web directory (`<theme_dir>/web`)

For example, to include `<theme_dir>/web/css/custom.css`:

```xml
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <head>
        <css src="css/custom.css" rel="stylesheet" type="text/css"  />
    </head>
</page>
```

The following illustrates how stylesheets are included in the default Blank theme:

[`/Magento_Theme/layout/default_head_blocks.xml`]

```xml
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <head>
        <css src="css/styles-m.css" />
        <css src="css/styles-l.css" media="screen and (min-width: 768px)"/>
        <css src="css/print.css" media="print" />
    </head>
</page>
```

To include an external CSS file, add `<css src="URL to External Source" src_type="url" rel="stylesheet" type="text/css" />`.

```xml
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <head>
        <css src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css"  src_type="url" rel="stylesheet" type="text/css"  />
    </head>
</page>
```

{:.bs-callout-info}
If the system does not find the included CSS files, it searches for the same file names with a `.less` extension. This is part of the built-in preprocessing mechanism. You can find more information about it in the [CSS Preprocessing] topic.

[layout files]: {{page.baseurl}}/frontend-dev-guide/layouts/layout-overview.html
[theme directory]: {{page.baseurl}}/frontend-dev-guide/themes/theme-structure.html
[CSS Preprocessing]: {{page.baseurl}}/frontend-dev-guide/css-topics/css-preprocess.html
