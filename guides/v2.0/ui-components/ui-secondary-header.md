---
layout: default
group:  UI Library
subgroup: C_Listing/Grid Secondary Components
title: Sticky Header Component
menu_title: Sticky Header Component
menu_node:
menu_order: 11
version: 2.0
github_link: ui-components/ui-secondary-header.md
redirect_from: /guides/v2.0/ui-library/ui-secondary-header.html
---

<h2 id="filter">Overview</h2>

The sticky header component is responsible for rendering additional <a href="{{site.gdeurl}}ui-library/ui-listing-grid.html">grid</a> header and grid toolbar.

Sticky header is displayed when the persistent header gets hidden during vertical scrolling. The persistent header reactivates when you scroll back up:

The following image is an illustration of a grid with a sticky header:

<img src="{{site.gdeurl}}pattern-library/displaying-data/datatable/img/datatable13.jpg" alt="a grid with a sticky header">

<h2 id="enable_header">Enable sticky header for a grid</h2>

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

Enabling a sticky header for the CMS pages grid, configured in `<your module root dir>/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml`:

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

<h2 id="sticky_config">Sticky header configuration</h2>

Any component of a sticky header can use a particular, not default template. This template is set in the `stickyTmpl` option. If the sticky template is not set, the default component's template is used for displaying in a sticky header.

**Example**
The toolbar component should use the `ui/grid/sticky/toolbar` template for the sticky header.
`<your module root dir>/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml`:
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

<h2 id="sticky_elements">Component elements</h2>
The sticky header component consists of the following elements:

- Constructor: <a href="{{site.mage2000url}}app/code/Magento/Ui/view/base/web/js/grid/sticky/sticky.js">`<your module root dir>/Magento/Ui/view/base/web/js/grid/sticky/sticky.js`</a>
- Main template: <a href="{{site.mage2000url}}app/code/Magento/Ui/view/base/web/templates/grid/sticky/sticky.html">`<your module root dir>/Magento/Ui/view/base/web/templates/grid/sticky/sticky.html`</a>
- Elements' templates:
	- <a href="{{site.mage2000url}}app/code/Magento/Ui/view/base/web/templates/grid/sticky/listing.html">`<your module root dir>/Magento/Ui/view/base/web/templates/grid/sticky/listing.html`</a>
	- <a href="{{site.mage2000url}}app/code/Magento/Ui/view/base/web/templates/grid/sticky/filters.html">`<your module root dir>/Magento/Ui/view/base/web/templates/grid/sticky/filters.html`</a>
	- <a href="{{site.mage2000url}}app/code/Magento/Ui/view/base/web/templates/grid/sticky/sticky.html">`<your module root dir>/Magento/Ui/view/base/web/templates/grid/sticky/sticky.html`</a>
	

<h2 id="sticky_dependencies">Dependencies</h2>
The sticky header component depends on the following components:

 - Listing
 - Toolbar


It also works both with and without the following components, preserving their functionality:

- Listing child components:
	- Dnd
	- <a href="{{site.gdeurl}}ui-library/ui-secondary-resize.html">Resize</a>
	- Bulk Edit
	- <a href="{{site.gdeurl}}ui-library/ui-secondary-resize.html">Inline Edit</a>
- Toolbar child components:
	- <a href="{{site.gdeurl}}ui-library/ui-secondary-pagination.html">Pagination</a>
	- <a href="{{site.gdeurl}}ui-library/ui-secondary-filter.html">Filter</a>
	- <a href="{{site.gdeurl}}ui-library/ui-secondary-column.html">Column</a>
	- <a href="{{site.gdeurl}}ui-library/ui-secondary-massaction.html">Mass Action</a>
	- <a href="{{site.gdeurl}}ui-library/ui-secondary-bookmark.html">Bookmark</a>
