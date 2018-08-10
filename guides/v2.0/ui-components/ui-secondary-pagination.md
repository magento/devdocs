---
group:  UI Library
subgroup: C_Listing/Grid Secondary Components
title: Pagination Component
menu_title: Pagination Component
menu_node:
menu_order: 2
version: 2.0
redirect_from: /guides/v2.0/ui-library/ui-secondary-pagination.html

---

The UI pagination component is a plugin for the listing component. Responsible for rendering pagination UI and applying pagination criteria to collection.

You can configure pagination in several ways:

* Globally: using any module's <a href="{{ page.baseurl }}/ui-library/ui-definition.html">`view/*/ui_component/etc/definition.xml`</a> file. All settings declared in this file are applied to all component's instances.
* Locally: using concrete component instance configuration, such as `<Magento_Cms_module_dir>/view/adminhtml/ui_component/cms_page_listing.xml`

To enable pagination for the listing component, the pagination component is declared as a child of the listing component in component instance configuration.

Example:

`<Magento_Cms_module_dir>/view/adminhtml/ui_component/cms_page_listing.xml`

{% highlight xml %}
<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    <container name="page_listing_top">
        <paging name="listing_paging">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="storageConfig" xsi:type="array">
                        <item name="provider" xsi:type="string">cms_block_listing.cms_block_listing.listing_top.bookmarks</item>
                        <item name="namespace" xsi:type="string">current.paging</item>
                    </item>
                    <item name="selectProvider" xsi:type="string">cms_block_listing.cms_block_listing.cms_block_columns.ids</item>
                </item>
            </argument>
        </paging>
    </container>
</listing>
{% endhighlight %}

The configuration of the component can include:

* `storageConfig` - storageConfig is a base component property. Here it is configured to take stored page sizes list from bookmarks

* `sizesConfig`: configuration of the component that defines available page sizes. By default it is `Magento_Ui/js/grid/paging/sizes`.
    * `minSize`: minimum number of elements on a page, default: 1
    * `maxSize`: maximum number of elements on a page, default: 999
 
* `selectProvider`: component with selections data.
