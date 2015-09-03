---
layout: default
group:  UI Library
subgroup: B_UI Library Listing/Grid Component
title: Listing/Grid Component
menu_title: Listing/Grid Component
menu_node: parent
github_link: uilibrary/ui-listing-grid.md
---

<h2 id="listing">UI Library Listing/Grid Component</h2>

Listing is a basic component responsible for rendering grids, lists and tiles, providing filtering, pagination, sorting and other features.

####Integration

Example configuration of Listing Component instance:

app/code/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml


<pre>
&lt;listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../Ui/etc/ui_configuration.xsd"&gt;
    &lt;argument name="context" xsi:type="configurableObject"&gt;
        &lt;argument name="class" xsi:type="string"&gt;Magento\Framework\View\Element\UiComponent\Context&lt;/argument&gt;
        &lt;argument name="namespace" xsi:type="string"&gt;cms_page_listing&lt;/argument&gt;
    &lt;/argument&gt;
    &lt;argument name="data" xsi:type="array"&gt;
        &lt;item name="js_config" xsi:type="array"&gt;
            &lt;item name="config" xsi:type="array"&gt;
                &lt;item name="provider" xsi:type="string"&gt;cms_page_listing.cms_page_listing_data_source&lt;/item&gt;
            &lt;/item&gt;
            &lt;item name="deps" xsi:type="string"&gt;cms_page_listing.cms_page_listing_data_source&lt;/item&gt;
        &lt;/item&gt;
        &lt;item name="spinner" xsi:type="string"&gt;cms_page_columns&lt;/item&gt;
        &lt;item name="buttons" xsi:type="array"&gt;
            &lt;item name="add" xsi:type="array"&gt;
                &lt;item name="name" xsi:type="string"&gt;add&lt;/item&gt;
                &lt;item name="label" xsi:type="string" translate="true"&gt;Add New Page&lt;/item&gt;
                &lt;item name="class" xsi:type="string"&gt;primary&lt;/item&gt;
                &lt;item name="url" xsi:type="string"&gt;*/*/new&lt;/item&gt;
            &lt;/item&gt;
        &lt;/item&gt;
    &lt;/argument&gt;
&lt;/listing&gt;
</pre>



####Data Source

The listing component requires the data source to be properly configured and associated with it:

`app/code/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml`

<pre>
&lt;listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../Ui/etc/ui_configuration.xsd"&gt;
    &lt;dataSource name="cms_page_listing_data_source"&gt;
        &lt;argument name="dataProvider" xsi:type="configurableObject"&gt;
            &lt;argument name="class" xsi:type="string"&gt;Magento\Cms\Model\Page\DataProvider&lt;/argument&gt;
            &lt;argument name="primaryFieldName" xsi:type="string"&gt;block_id&lt;/argument&gt;
            &lt;argument name="requestFieldName" xsi:type="string"&gt;id&lt;/argument&gt;
            &lt;argument name="meta" xsi:type="array"&gt;
                &lt;item name="cms_block" xsi:type="array"&gt;
                    &lt;item name="config" xsi:type="array"&gt;
                        &lt;item name="label" xsi:type="string" translate="true"&gt;CMS Block&lt;/item&gt;
                    &lt;/item&gt;
                &lt;/item&gt;
            &lt;/argument&gt;
        &lt;/argument&gt;
        &lt;argument name="data" xsi:type="array"&gt;
            &lt;item name="js_config" xsi:type="array"&gt;
                &lt;item name="component" xsi:type="string"&gt;Magento_Ui/js/grid/provider&lt;/item&gt;
            &lt;/item&gt;
            &lt;item name="config" xsi:type="array"&gt;
                &lt;item name="update_url" xsi:type="string"&gt;mui/index/render&lt;/item&gt;
            &lt;/item&gt;
        &lt;/argument&gt;
    &lt;/dataSource&gt;
&lt;/listing&gt;
</pre>

Data Source is another UI Component that provides data in specific format which is shared among all UI Components.