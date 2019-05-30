---
group: ui-components-guide
title: Listing (grid) component
---

Listing is a [basic component]({{ page.baseurl }}/ui_comp_guide/bk-ui_comps.html#general-structure) that implements grids, lists, and tiles with filtering, pagination, sorting, and other features.

## Examples

### Create an instance

Example configuration of Listing component instance:

`<your module root dir>/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml`

```xml
<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    <argument name="context" xsi:type="configurableObject">
        <argument name="class" xsi:type="string">Magento\Framework\View\Element\UiComponent\Context</argument>
        <argument name="namespace" xsi:type="string">cms_page_listing</argument>
    </argument>
    <argument name="data" xsi:type="array">
        <item name="js_config" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="provider" xsi:type="string">cms_page_listing.cms_page_listing_data_source</item>
            </item>
            <item name="deps" xsi:type="string">cms_page_listing.cms_page_listing_data_source</item>
        </item>
        <item name="spinner" xsi:type="string">cms_page_columns</item>
        <item name="buttons" xsi:type="array">
            <item name="add" xsi:type="array">
                <item name="name" xsi:type="string">add</item>
                <item name="label" xsi:type="string" translate="true">Add New Page</item>
                <item name="class" xsi:type="string">primary</item>
                <item name="url" xsi:type="string">*/*/new</item>
            </item>
        </item>
    </argument>
</listing>
```

### Configure DataSource

DataSource is another [UI component](https://glossary.magento.com/ui-component) that provides data in specific format which is shared among all UI components. 

The listing component requires the data source to be properly configured and associated with it:

`<your module root dir>/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml`

```xml
<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    <dataSource name="cms_page_listing_data_source">
        <argument name="dataProvider" xsi:type="configurableObject">
            <argument name="class" xsi:type="string">Magento\Cms\Ui\Component\DataProvider</argument>
            <argument name="name" xsi:type="string">cms_page_listing_data_source</argument>
            <argument name="primaryFieldName" xsi:type="string">page_id</argument>
            <argument name="requestFieldName" xsi:type="string">id</argument>
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="component" xsi:type="string">Magento_Ui/js/grid/provider</item>
                    <item name="update_url" xsi:type="url" path="mui/index/render"/>
                    <item name="storageConfig" xsi:type="array">
                        <item name="indexField" xsi:type="string">page_id</item>
                    </item>
                </item>
            </argument>
        </argument>
    </dataSource>
</listing>
```

## Source files

- [app/code/Magento/Ui/view/base/web/js/lib/core/collection.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/lib/core/collection.js)
