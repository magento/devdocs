---
layout: default
group:  UI Library
subgroup: C_Listing/Grid Secondary Components
title: Filter Component
menu_title: Filter Component
menu_node:
menu_order: 1
version: 2.0
github_link: ui-components/ui-secondary-filter.md
redirect_from: /guides/v2.0/ui-library/ui-secondary-filter.html
---

<h3 id="filter">UI Filter Component</h3>

The filter component must be declared as a child to the listing component.
All column filters are declared as children to the filter component.

The filter component is responsible for rendering filters UI and applying filtering criteria to collection.

Currently the following filter types are supported:

* input filter
* date filter
* select filter
* range filter

Example:
`<Magento_Cms_module_dir>/view/adminhtml/ui_component/cms_page_listing.xml`

{% highlight xml %}
<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    <container name="page_listing_top">
        <filters name="listing_filters">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="dataScope" xsi:type="string">params.filters</item>
                </item>
            </argument>
            <filterRange name="page_id">
                <argument name="data" xsi:type="array">
                    <item name="config" xsi:type="array">
                        <item name="dataScope" xsi:type="string">page_id</item>
                        <item name="label" xsi:type="string" translate="true">ID</item>
                    </item>
                </argument>
                <filterInput name="from">...</filterInput>
                <filterInput name="to">...</filterInput>
            </filterRange>
            <filterInput name="title">...</filterInput>
            <filterInput name="identifier">...</filterInput>
            <filterSelect name="page_layout">...</filterSelect>
            <filterSelect name="store_id">...</filterSelect>
            <filterSelect name="is_active">...</filterSelect>
            <filterRange name="creation_time" class="Magento\Ui\Component\Filters\Type\DateRange">...</filterRange>
            <filterRange name="update_time" class="Magento\Ui\Component\Filters\Type\DateRange">...</filterRange>
        </filters>
    </container>
</listing>
{% endhighlight %}
