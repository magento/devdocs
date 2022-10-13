---
group: ui-components-guide
title: GridDataProvider component
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The GridDataProvider [UI component](https://glossary.magento.com/ui-component) is a data provider for the [Listing]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html) component. It provides data in specific format which is shared among all UI components in the scope of the [Listing]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html) component.

## Configuration options

| Option | Description | Type | Default Value |
| --- | --- | --- | --- |
| `class` | Path to the [PHP](https://glossary.magento.com/php) class responsible for the [backend](https://glossary.magento.com/backend) implementation of the component | String | `Magento\Framework\View\Element\UiComponent\DataProvider\DataProvider` |
| `component` | The path to the component's `.js` file, relative to RequireJS. | String | `Magento_Ui/js/grid/provider` |
| `firstLoad` | Defines the first loading of data. The value changes to `false` if data reloads. | Boolean | `true` |
| `lastError` | Defines if an error occurred for the latest data reloading. | Boolean | `false` |
| `storageConfig` | Configuration of the GridDataStorage component. | Object | `{component: 'Magento_Ui/js/grid/data-storage',provider: '${ $.storageConfig.name }',name: '${ $.name }_storage',updateUrl: '${ $.update_url }'}` |

## Sources files

Extends [`UiElement`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uielement_concept.html):

-  [app/code/Magento/Ui/view/base/web/js/grid/provider.js]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/grid/provider.js)

## Examples

### Integrate the GridDataProvider component with the Listing component

This is an example of how the GridDataProvider component integrates with the [Listing]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html) component:

```xml
<listing>
    <dataSource name="listing_data_source" component="Magento_Ui/js/grid/provider">
        <settings>
            <storageConfig>
                <param name="indexField" xsi:type="string">entity_id</param>
            </storageConfig>
            <updateUrl path="mui/index/render"/>
        </settings>
        <aclResource>Vendor_Module::resource</aclResource>
        <dataProvider class="Magento\Framework\View\Element\UiComponent\DataProvider\DataProvider" name="listing_data_source">
            <settings>
                <requestFieldName>id</requestFieldName>
                <primaryFieldName>entity_id</primaryFieldName>
            </settings>
        </dataProvider>
    </dataSource>
    ...
</listing>
```
