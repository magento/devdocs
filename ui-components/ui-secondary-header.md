---
group: ui-library
subgroup: C_Listing/Grid Secondary Components
title: Sticky Header Component
menu_title: Sticky Header Component
menu_node:
menu_order: 11
redirect_from: /guides/v2.0/ui-library/ui-secondary-header.html
---

## Overview   {#filter}

The sticky header component is responsible for rendering additional [grid]({{ page.baseurl }}/ui-library/ui-listing-grid.html) header and grid toolbar.

Sticky header is displayed when the persistent header gets hidden during vertical scrolling. The persistent header reactivates when you scroll back up:

The following image is an illustration of a grid with a sticky header:

![a grid with a sticky header]({{ page.baseurl }}/pattern-library/displaying-data/datatable/img/datatable13.jpg)

## Enable sticky header for a grid   {#enable_header}

To enable the sticky header functionality for a certain grid, declare it as a child element in the grid configuration file using the following notation:

{% highlight xml %}
    <container name="sticky">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/grid/sticky/sticky</item>
                <item name="toolbarProvider" xsi:type="string">...</item>
                <item name="listingProvider" xsi:type="string">...</item>
            </item>
        </argument>
    </container>
{% endhighlight %}

Where the following should be specified:

- `toolbarProvider`: full name of the toolbar component on this page.
- `listingProvider`: full name of the listing (grid) component on this page; the one for which the sticky header is enabled.

**Example**

Enabling a sticky header for the CMS pages grid, configured in `<Magento_Cms_module_dir>/view/adminhtml/ui_component/cms_page_listing.xml`:

{% highlight xml %}
<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
        <container name="listing_top">
         ..
        </container>
        <container name="sticky">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="component" xsi:type="string">Magento_Ui/js/grid/sticky/sticky</item>
                    <item name="toolbarProvider" xsi:type="string">cms_page_listing.cms_page_listing.listing_top</item>
                    <item name="listingProvider" xsi:type="string">cms_page_listing.cms_page_listing.cms_page_columns</item>
                </item>
            </argument>
        </container>
    </listing>
{% endhighlight %}

## Sticky header configuration   {#sticky_config}

Any component of a sticky header can use a particular, not default template. This template is set in the `stickyTmpl` option. If the sticky template is not set, the default component's template is used for displaying in a sticky header.

**Example**
The toolbar component should use the `ui/grid/sticky/toolbar` template for the sticky header.
`<Magento_Cms_module_dir>/view/adminhtml/ui_component/cms_page_listing.xml`:
{% highlight xml %}
<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
        <container name="listing_top">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="template" xsi:type="string">ui/grid/toolbar</item>
                    <item name="stickyTmpl" xsi:type="string">ui/grid/sticky/toolbar</item>
                </item>
            </argument>
            ..
        </container name="listing_top">
    </listing>
{% endhighlight %}

## Component elements   {#sticky_elements}

The sticky header component consists of the following elements:

- Constructor: [`<Magento_Ui_module_dir>/view/base/web/js/grid/sticky/sticky.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/sticky/sticky.js)
- Main template: [`<Magento_Ui_module_dir>/view/base/web/templates/grid/sticky/sticky.html`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/sticky/sticky.html)
- Elements' templates:
	- [`<Magento_Ui_module_dir>/view/base/web/templates/grid/sticky/listing.html`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/sticky/listing.html)
	- [`<Magento_Ui_module_dir>/view/base/web/templates/grid/sticky/filters.html`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/sticky/filters.html)
	- [`<Magento_Ui_module_dir>/view/base/web/templates/grid/sticky/sticky.html`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/sticky/sticky.html)
	

## Dependencies   {#sticky_dependencies}

The sticky header component depends on the following components:

 - Listing
 - Toolbar


It also works both with and without the following components, preserving their functionality:

- Listing child components:
	- Dnd
	- [Resize]({{ page.baseurl }}/ui-library/ui-secondary-resize.html)
	- Bulk Edit
	- [Inline Edit]({{ page.baseurl }}/ui-library/ui-secondary-resize.html)
- Toolbar child components:
	- [Pagination]({{ page.baseurl }}/ui-library/ui-secondary-pagination.html)
	- [Filter]({{ page.baseurl }}/ui-library/ui-secondary-filter.html)
	- [Column]({{ page.baseurl }}/ui-library/ui-secondary-column.html)
	- [Mass Action]({{ page.baseurl }}/ui-library/ui-secondary-massaction.html)
	- [Bookmark]({{ page.baseurl }}/ui-library/ui-secondary-bookmark.html)
