---
layout: default
group:  UI Library
subgroup: C_Listing/Grid Secondary Components
title: Resize Component
menu_title: Resize Component
menu_node:
menu_order: 10
version: 2.0
github_link: ui-components/ui-secondary-resize.md
redirect_from: /guides/v2.0/ui-library/ui-secondary-resize.html

---

<h3 id="resize">UI Resize component</h3>

The Resize Component is responsible for resizing listing columns. The Resize component is not defined in definition.xml, but can be added if needed.

#### Integration

Resize can be switched on for any listing column like this:

{% highlight xml %}
<column name="creation_time">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="resizeEnabled" xsi:type="boolean">true</item>
            <item name="resizeDefaultWidth" xsi:type="string">60</item>
        </item>
    </argument>
</column>
{% endhighlight %}

resizeDefaultWidth - set width value in pixels.

resizeEnabled - value can be set `true`, meaning the resize is switched on, or `false`, , meaning the resize is switched off for the column.

#### Configuration

The Resize component is currently configured as a plugin for the Listing component in `<Magento_Ui_module_dir>/view/base/web/js/grid/listing.js`. It has the following options:

* resizeConfig

  * name
  * columnsProvider - can be a name of the Listing component
  * component
  * provider - can use listing provider

### Resize JS Component Structure

#### Component elements

The following is the component's element: `<Magento_Ui_module_dir>/view/base/web/js/grid/resize.js`

#### Dependencies on other components

The Resize components does not depend on other components

#### Component Options

The following options are available:

* rootSelector - the css selector for listing's root node
* showLines - max lines of text allowed in column
* minColumnWidth - minimum width of the column
