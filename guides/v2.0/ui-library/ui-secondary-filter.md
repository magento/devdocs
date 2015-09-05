---
layout: default
group:  UI Library
subgroup: C_Listing/Grid Secondary Components
title: Filter Component
menu_title: Filter Component
menu_node:
menu_order: 1
github_link: uilibrary/ui-secondary-filter.md
---

<h3 id="filter">UI Library Filter Component</h3>

The filter component must be declared as a child to the listing component.
All column filters are declared as children to the filter component.

The filter component is responsible for rendering filters UI and applying filtering criteria to collection.

Currently the following filter types are supported:

* input filter
* date filter
* select filter
* range filter

Example:
`app/code/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml`

<pre>
&lt;listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../Ui/etc/ui_configuration.xsd"&gt;
    &lt;container name="page_listing_top"&gt;
        &lt;filters name="listing_filters"&gt;
            &lt;argument name="data" xsi:type="array"&gt;
                &lt;item name="config" xsi:type="array"&gt;
                    &lt;item name="dataScope" xsi:type="string"&gt;params.filters&lt;/item&gt;
                &lt;/item&gt;
            &lt;/argument&gt;
            &lt;filterRange name="page_id"&gt;
                &lt;argument name="data" xsi:type="array"&gt;
                    &lt;item name="config" xsi:type="array"&gt;
                        &lt;item name="dataScope" xsi:type="string"&gt;page_id&lt;/item&gt;
                        &lt;item name="label" xsi:type="string" translate="true"&gt;ID&lt;/item&gt;
                    &lt;/item&gt;
                &lt;/argument&gt;
                &lt;filterInput name="from"&gt;...&lt;/filterInput&gt;
                &lt;filterInput name="to"&gt;...&lt;/filterInput&gt;
            &lt;/filterRange&gt;
            &lt;filterInput name="title"&gt;...&lt;/filterInput&gt;
            &lt;filterInput name="identifier"&gt;...&lt;/filterInput&gt;
            &lt;filterSelect name="page_layout"&gt;...&lt;/filterSelect&gt;
            &lt;filterSelect name="store_id"&gt;...&lt;/filterSelect&gt;
            &lt;filterSelect name="is_active"&gt;...&lt;/filterSelect&gt;
            &lt;filterRange name="creation_time" class="Magento\Ui\Component\Filters\Type\DateRange"&gt;...&lt;/filterRange&gt;
            &lt;filterRange name="update_time" class="Magento\Ui\Component\Filters\Type\DateRange"&gt;...&lt;/filterRange&gt;
        &lt;/filters&gt;
    &lt;/container&gt;
&lt;/listing&gt;
</pre>