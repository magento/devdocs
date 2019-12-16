---
group: ui-components-guide
title: InsertListing component
---

The InsertListing component inserts [Listing]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html) into other components.

## Configuration options

| Option | Description | Type | Default |
| --- | --- | --- | --- |
| `autoRender` | When set to true, the Listing component is automatically rendered during insertListing initialization. Otherwise, insertListing's `render` method should be called to render the Listing. | Boolean | `false` |
| `behaviourType` | Can be `simple` or `edit`. Where `edit` means that insertListing also includes changes from Listing's inlineEdit into value. In this case, Listing must be configured with enabled inline editing. | String (`simple` \| `edit`) | `'simple'` |
| `class` | Path to the PHP class responsible for the backend implementation of the component. | String | `Magento\Ui\Component\Container` |
| `component` | The path to the component’s `.js` file in terms of RequireJS. | String | `'Magento_Ui/js/form/components/insert-listing'` |
| `dataLinks`.`exports` | Enable export from the insertListing's externalValue to the inserted Listing aggregated value. | Boolean | `false` |
| `dataLinks`.`imports` | Enable import from the inserted Listing value to the insertListing's externalValue. | Boolean | `true` |
| `realTimeLink` | Enable link between insertListing's externalValue and value. Here `link` means the two-way [links property]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_linking_concept.html#links-property) of UI components, which allows immediate update. | Boolean | `true` |
| `render_url` | With default `render_url(mui/index/render)` listing will be without buttons. For get a list with buttons url must be changed to `mui/index/render_handle` and next GET parameters:<br /> buttons=1 (flag to get buttons)<br /> handle= (buttons scope) | String | `'mui/index/render'` |
| `update_url` | Where the AJAX request will go to retrieve, foster component update data. It will be in json format by default and will be automatically set into `externalProvider.data` | String | `'mui/index/render'` |

## Source files

Extends [`Insert`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/components/insert.js)::

-  [`app/code/Magento/Ui/view/base/web/js/form/components/insert-listing.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/components/insert-listing.js)
-  [`app/code/Magento/Ui/Component/Container.php`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/Component/Container.php)

## Examples

### Integrate InsertListing component with Form component

Here is an example of how InsertListing component integrates with [Form]({{ page.baseurl }}/ui_comp_guide/components/ui-form.html) component:

```xml
<form>
    ...
    <fieldset>
        <settings>
            <level>1</level>
            <collapsible>true</collapsible>
            <label translate="true">Fieldset with listing</label>
        </settings>
        ...
        <insertListing name="insert_listing_example" >
            <settings>
                <dataLinks>
                    <exports>false</exports>
                    <imports>true</imports>
                </dataLinks>
                <autoRender>true</autoRender>
                <dataScope>insert_listing_example</dataScope>
                <ns>insert_listing_example</ns>
            </settings>
        </insertListing>
    </fieldset>
</listing>
```

The listing example insert_listing_example.xml:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    <argument name="data" xsi:type="array">
        <item name="js_config" xsi:type="array">
            <item name="provider" xsi:type="string">insert_listing_example.insert_listing_example_data_source</item>
        </item>
    </argument>
    <settings>
        <spinner>columns</spinner>
        <deps>
            <dep>insert_listing_example.insert_listing_example_data_source</dep>
        </deps>
    </settings>
    <dataSource name="insert_listing_example_data_source" component="Magento_Ui/js/grid/provider">
        <settings>
            <updateUrl path="mui/index/render"/>
        </settings>
        <dataProvider class="Vendor\Module\Ui\Component\Listing\CustomDataProvider" name="insert_listing_example_data_source">
            <settings>
                <requestFieldName>id</requestFieldName>
                <primaryFieldName>entity_id</primaryFieldName>
            </settings>
        </dataProvider>
    </dataSource>
    <listingToolbar name="listing_top">
        <columnsControls name="columns_controls"/>
        <filterSearch name="fulltext"/>
        <filters name="listing_filters"/>
    </listingToolbar>
    <columns name="columns">
        <selectionsColumn name="ids" sortOrder="10">
            <settings>
                <indexField>entity_id</indexField>
            </settings>
        </selectionsColumn>
        <column name="id" sortOrder="20">
            <settings>
                <filter>textRange</filter>
                <label translate="true">ID</label>
                <sorting>asc</sorting>
            </settings>
        </column>
        <column name="name" sortOrder="30">
            <settings>
                <filter>text</filter>
                <label translate="true">Name</label>
            </settings>
        </column>
    </columns>
</listing>
```

Data provider:

```php
<?php

declare(strict_types=1);

namespace Vendor\Module\Ui\Component\Listing;

use Magento\Framework\View\Element\UiComponent\DataProvider\DataProvider;

/**
 * Class CustomDataProvider
 */
class CustomDataProvider extends DataProvider
{
    /**
     * Get data
     *
     * @return array
     */
    public function getData()
    {
        return [
            'items' => [
                [
                    'id' => 1,
                    'name' => 'First Item'
                ],
                [
                    'id' => 2,
                    'name' => 'Second Item'
                ],
                [
                    'id' => 3,
                    'name' => 'Third Item'
                ]
            ],
            'totalRecords' => 3
        ];
    }
}
```

#### Result

![InsertListing Component example]({{ site.baseurl }}/common/images/ui_comps/ui-insertlisting-result.png)
