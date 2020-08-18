---
group: ui-components-guide
title: ExportButton component
---

The ExportButton component implements the ability to export grid data to the specified data format (csv, xml, and so on).

## Configuration options

| Option | Description | Type | Default Value |
| --- | --- | --- | --- |
| `additionalParams` | List of additional parameters added to each performed request. | {<br />`[name: string]: string`<br />} | `[]` |
| `options` | List of available formats in which the table's data can be exported. | Array[&lt;`ExportOption`&gt;](#exportoption) | [{<br />`value: "csv",`<br />`label: "CSV"`,<br />`url: "mui/export/gridToCsv"`<br />}, {<br />`value: "xml"`,<br />`label: "Excel XML",`<br />`url: "mui/export/gridToXml"`<br />}] |
| `template` | Path to the component’s `.html` template. | String | `ui/grid/exportButton` |
| `checked` | The checked data format to export. | String | `''` |

### ExportOption interface {#exportoption}

| Option | Description | Type | Required |
| --- | --- | --- | --- |
| `label` | Option's label. | String | Required |
| `url` | Path to controller that will process the request. | String | Required |
| `value` | Identifier of the export option. | String | Required |

## Examples

### Configure component

To enable the ExportButton component, add the `exportButton` element with a `selectProvider` item to the listing configuration file:

```xml
<exportButton name="export_button">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="selectProvider" xsi:type="string">{select_provider_path}</item>
        </item>
    </argument>
</exportButton>
```

The following is an example of configuring the component using the`sales_order_grid` `selectProvider` item, `<Magento_Sales_module_dir>/view/adminhtml/ui_component/sales_order_grid.xml`.

```xml
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
```

By default Magento allows [CSV](https://glossary.magento.com/csv) and Excel [XML](https://glossary.magento.com/xml) export data formats.

### Add new export format

To add new export format:

*  Add configuration data to ExportButton definition [`Magento/Ui/view/base/ui_component/etc/definition.xml`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/ui_component/etc/definition.xml)
*  Add controller for new format processing `\Magento\Ui\Controller\Adminhtml\Export\GridToFoo`
*  Add converter `\Magento\Ui\Model\Export\ConvertToFoo`

## Source files

Extends [`UiElement`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uielement_concept.html):

*  [`app/code/Magento/Ui/view/base/web/js/grid/export.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/export.js)
