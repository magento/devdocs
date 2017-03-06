---
layout: default
group: UI_Components_guide
subgroup: components
title: ExportButton component
menu_title: ExportButton component
version: 2.2
github_link: ui_comp_guide/components/listing/ui-exportbutton.md
---

ExportButton Component is responsible for export grid data to specified data format (cvs, xml, and so on).

To enable the ExportButton сomponent, add the `exportButton` element with specified `selectProvider` item to listing configuration file.

{% highlight XML %}
<exportButton name="export_button">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="selectProvider" xsi:type="string">{select_provider_path}</item>
        </item>
    </argument>
</exportButton>
{% endhighlight %}

## Structure

Constructor: [<Magento_Ui_module_dir>/view/base/web/js/grid/export.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/export.js)

## ExportButton configuration

Extends all [UiElement]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uielement_concept.html) configuration.

ExportButton own configuration:

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>additionalParams</td>
    <td>List of additional parameters that will be added to an every performed request.</td>
    <td>{<br>[name: string]: string<br>}</td>
    <td>-</td>
  </tr>
  <tr>
    <td>options</td>
    <td>List of available formats in which the table's data can be exported.</td>
    <td>Array<a href="#exportoption">&lt;ExportOption&gt;</a> </td>
    <td>[{<br>value: "csv",<br>label: "CSV",<br>url: "mui/export/gridToCsv"<br>}, {<br>value: "xml",<br>label: "Excel XML",<br>url: "mui/export/gridToXml"<br>}]</td>
  </tr>
  <tr>
    <td>template</td>
    <td>Path to the component’s .html template.</td>
    <td>String</td>
    <td>ui/grid/exportButton</td>
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
    <td>label</td>
    <td>Option's label.</td>
    <td>String</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>url</td>
    <td>Path to controller that will process the request.</td>
    <td>String</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>value</td>
    <td>Identifier of the export option.</td>
    <td>String</td>
    <td>Required</td>
  </tr>
</table>

## Example of usage

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

By default Magento allows CSV and Excel XML export data formats.

#### How to add new export format

To add new export format:

* Add configuration data to ExportButton definition <a href="{{page.baseurl}}ui-library/ui-definition.html">`Magento/Ui/view/base/ui_component/etc/definition.xml`</a>
* Add controller for new format processing `\Magento\Ui\Controller\Adminhtml\Export\GridToFoo`
* Add converter `\Magento\Ui\Model\Export\ConvertToFoo`
