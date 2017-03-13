---
layout: default
group: UI_Components_guide
subgroup: components
title: Listing (grid) component
menu_title: Listing (grid) component
version: 2.2
github_link: ui_comp_guide/components/ui-listing-grid.md
---

## Overview
Listing is a basic component responsible for rendering grids, lists and tiles, providing filtering, pagination, sorting and other features.

## Structure

Constructor: [app/code/Magento/Ui/view/base/web/js/grid/listing.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/listing.js)

## Configuration

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>displayMode</code></td>
    <td>Initial display mode.</td>
    <td>String</td>
    <td><code>'grid'</code></td>
  </tr>
  <tr>
    <td><code>displayModes</code></td>
    <td>List of available display modes.</td>
    <td>{<br>[name: string]: <a href="#displaymode">DisplayMode</a><br>}</td>
    <td><code>{<br>value: 'grid',<br>label: 'Grid',<br>template: 'ui/grid/listing'<br>}</code></td>
  </tr>
  <tr>
    <td><code>dndConfig</code></td>
    <td>Configuration of the [DragAndDrop component]({{page.baseurl}}ui_comp_guide/components/listing/ui-draganddrop.html).</td>
    <td>Object</td>
    <td>Specified in the <a href="{{page.baseurl}}ui_comp_guide/components/listing/ui-draganddrop.html">DragAndDrop component configuration</a>.</td>
  </tr>
  <tr>
    <td><code>stickyTmpl</code></td>
    <td>Path to the <code>.html</code> template used for the <a href="{{page.baseurl}}ui_comp_guide/components/listing/ui-toolbar.html">Toolbar component</a> when it receives a fixed position.</td>
    <td>String</td>
    <td><code>ui/grid/sticky/listing</code></td>
  </tr>
  <tr>
    <td><code>template<code></td>
    <td>Path to the component’s <code>.html</code> template.</td>
    <td>String</td>
    <td><code>ui/grid/listing</code></td>
  </tr>
  <tr>
    <td><code>editorConfig</code></td>
    <td>Configuration of the [InlineEditing component]({{page.baseurl}}ui_comp_guide/components/listing/ui-inlineediting.html).</td>
    <td>Object</td>
    <td>Specified in the <a href="{{page.baseurl}}ui_comp_guide/components/listing/ui-inlineediting.html">InlineEditing component configuration</a>.</td>
  </tr>
  <tr>
    <td><code>viewSwitcherTmpl</code></td>
    <td>Path to the .html template for rendering the list of available display modes. By default this list is not displayed.</td>
    <td>String</td>
    <td><code>ui/grid/view-switcher</code></td>
  </tr>
</table>

### DisplayMode interface {#displaymode}

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td><code>label</code></td>
    <td>Label for the list of available modes.</td>
    <td>String</td>
    <td>Optional</td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>Path to the <code>.html</code> template used to render listing in the selected mode.</td>
    <td>String</td>
    <td>Optional</td>
  </tr>
  <tr>
    <td><code>value</code></td>
    <td>Mode's identifier.</td>
    <td>String</td>
    <td>Optional</td>
  </tr>
</table>

## Integration

Example configuration of Listing component instance:

`<your module root dir>/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml`


{% highlight xml%}
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
{% endhighlight %}

## DataSource

DataSource is another UI component that provides data in specific format which is shared among all UI components. 

The listing component requires the data source to be properly configured and associated with it:

`<your module root dir>/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml`

{% highlight xml %}
<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    <dataSource name="cms_page_listing_data_source">
        <argument name="dataProvider" xsi:type="configurableObject">
            <argument name="class" xsi:type="string">PageGridDataProvider</argument>
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
{% endhighlight %}    
