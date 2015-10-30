---
layout: default
group:  UI Library
subgroup: B_UI Library Listing/Grid Component
title: Listing/Grid Component
menu_title: Listing/Grid Component
menu_node: parent
github_link: uilibrary/ui-listing-grid.md
---

<h2 id="listing">UI Listing/Grid Component</h2>

Listing is a basic component responsible for rendering grids, lists and tiles, providing filtering, pagination, sorting and other features.

####Integration

Example configuration of Listing Component instance:

`app/code/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml`


{% highlight xml%}
<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../Ui/etc/ui_configuration.xsd">
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
{% endhighlight %}

####Data Source

The listing component requires the data source to be properly configured and associated with it:

`app/code/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml`

{% highlight xml %}
<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../Ui/etc/ui_configuration.xsd">
    <dataSource name="cms_page_listing_data_source">
        <argument name="dataProvider" xsi:type="configurableObject">
            <argument name="class" xsi:type="string">Magento\Cms\Model\Page\DataProvider</argument>
            <argument name="primaryFieldName" xsi:type="string">block_id</argument>
            <argument name="requestFieldName" xsi:type="string">id</argument>
            <argument name="meta" xsi:type="array">
                <item name="cms_block" xsi:type="array">
                    <item name="config" xsi:type="array">
                        <item name="label" xsi:type="string" translate="true">CMS Block</item>
                    </item>
                </item>
            </argument>
        </argument>
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/grid/provider</item>
            </item>
            <item name="config" xsi:type="array">
                <item name="update_url" xsi:type="string">mui/index/render</item>
            </item>
        </argument>
    </dataSource>
</listing>
{% endhighlight %}

Data Source is another UI Component that provides data in specific format which is shared among all UI Components.