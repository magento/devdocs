---
group: ui-components-guide
subgroup: components
title: ExportButton component
menu_title: ExportButton component
---

The ExportButton component implements the ability to export grid data to the specified data format (cvs, xml, and so on).

## Configuration options

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>options</code></td>
    <td>List of available formats in which the table's data can be exported.</td>
    <td>Array<a href="#exportoption">&lt;<code>ExportOption</code>&gt;</a> </td>
    <td><code>[{<br />value: "csv",<br />label: "CSV",<br />url: "mui/export/gridToCsv"<br />}, {<br />value: "xml",<br />label: "Excel XML",<br />url: "mui/export/gridToXml"<br />}]</code></td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>Path to the component’s <code>.html</code> template.</td>
    <td>String</td>
    <td><code>ui/grid/exportButton</code></td>
  </tr>
</table>

### `ExportOption` interface {#exportoption}

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td><code>label</code></td>
    <td>Option's label.</td>
    <td>String</td>
    <td>Required</td>
  </tr>
  <tr>
    <td><code>url</code></td>
    <td>Path to controller that will process the request.</td>
    <td>String</td>
    <td>Required</td>
  </tr>
  <tr>
    <td><code>value</code></td>
    <td>Identifier of the export option.</td>
    <td>String</td>
    <td>Required</td>
  </tr>
</table>

## Examples

### Configure component

To enable the ExportButton сomponent, add the `exportButton` element with a `selectProvider` item to the listing configuration file.

{% highlight XML %}
<exportButton name="export_button">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="selectProvider" xsi:type="string">{select_provider_path}</item>
        </item>
    </argument>
</exportButton>
{% endhighlight %}

### Use `sales_order_grid.xml`

Example: `<Magento_Sales_module_dir>/view/adminhtml/ui_component/sales_order_grid.xml`

{% highlight XML %}
<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <container name="listing_top">
        <exportButton name="export_button">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="selectProvider" xsi:type="string">sales_order_grid.sales_order_grid.sales_order_columns.ids</item>
                </item>
            </argument>
        </exportButton>
    </container>
</listing>
{% endhighlight %}

By default Magento allows {% glossarytooltip 6341499b-ead9-4836-9794-53d95eb48ea5 %}CSV{% endglossarytooltip %} and Excel {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} export data formats.

### Add new export format

To add new export format:

* Add configuration data to ExportButton definition <a href="https://github.com/magento/magento2/blob/2.1/app/code/Magento/Ui/view/base/ui_component/etc/definition.xml">`Magento/Ui/view/base/ui_component/etc/definition.xml`</a>
* Add controller for new format processing `\Magento\Ui\Controller\Adminhtml\Export\GridToFoo`
* Add converter `\Magento\Ui\Model\Export\ConvertToFoo`

## Source files

Extends [`UiElement`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uielement_concept.html):

- [`app/code/Magento/Ui/view/base/web/js/grid/export.js`]({{ site.mage2100url }}app/code/Magento/Ui/view/base/web/js/grid/export.js)
