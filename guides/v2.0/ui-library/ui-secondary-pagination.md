---
layout: default
group:  UI Library
subgroup: C_Listing/Grid Secondary Components
title: Pagination Component
menu_title: Pagination Component
menu_node:
menu_order: 2
github_link: uilibrary/ui-secondary-pagination.md
---

<h3 id="pagination">UI Library Pagination Component</h3>

The UI library pagination component is a plugin for the listing component. Responsible for rendering pagination UI and applying pagination criteria to collection.

You can configure pagination in several ways:

* Globally: using any module's <a href="{{ site.gdeurl }}ui-library/ui-definition.html">`view/*/ui_component/etc/definition.xml`</a> file. All settings declared in this file are applied to all component's instances.
* Locally: using concrete component instance configuration, such as `app/code/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml`

To enable pagination for the listing component, the pagination component is declared as a child of the listing component in component instance configuration.

Example:

`app/code/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml`

<pre>
&lt;listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../Ui/etc/ui_configuration.xsd"&gt;
    &lt;container name="page_listing_top"&gt;
        &lt;paging name="listing_paging"&gt;
            &lt;argument name="data" xsi:type="array"&gt;
                &lt;item name="config" xsi:type="array"&gt;
                    &lt;item name="options" xsi:type="array"&gt;
                        &lt;item name="20" xsi:type="array"&gt;
                            &lt;item name="value" xsi:type="number"&gt;20&lt;/item&gt;
                            &lt;item name="label" xsi:type="string" translate="true"&gt;20&lt;/item&gt;
                        &lt;/item&gt;
                        &lt;item name="30" xsi:type="array"&gt;
                            &lt;item name="value" xsi:type="number"&gt;30&lt;/item&gt;
                            &lt;item name="label" xsi:type="string" translate="true"&gt;30&lt;/item&gt;
                        &lt;/item&gt;
                        &lt;item name="50" xsi:type="array"&gt;
                            &lt;item name="value" xsi:type="number"&gt;50&lt;/item&gt;
                            &lt;item name="label" xsi:type="string" translate="true"&gt;50&lt;/item&gt;
                        &lt;/item&gt;
                        &lt;item name="100" xsi:type="array"&gt;
                            &lt;item name="value" xsi:type="number"&gt;100&lt;/item&gt;
                            &lt;item name="label" xsi:type="string" translate="true"&gt;100&lt;/item&gt;
                        &lt;/item&gt;
                        &lt;item name="200" xsi:type="array"&gt;
                            &lt;item name="value" xsi:type="number"&gt;200&lt;/item&gt;
                            &lt;item name="label" xsi:type="string" translate="true"&gt;200&lt;/item&gt;
                        &lt;/item&gt;
                    &lt;/item&gt;
                &lt;/item&gt;
            &lt;/argument&gt;
        &lt;/paging&gt;
    &lt;/container&gt;
&lt;/listing&gt;
</pre>