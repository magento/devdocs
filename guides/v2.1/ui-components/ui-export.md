---
layout: default
group:  UI Library
subgroup: C_Listing/Grid Secondary Components
title: ExportButton Component
menu_title: Export Button Component
menu_node:
menu_order: 12
version: 2.1
github_link: ui-components/ui-export.md
---

<h2 id="export">UI ExportButton Component</h2>

ExportButton Component is responsible for export grid data to specified data format (cvs, xml, and so on).

To enable ExportButton Component add exportButton element with specified selectProvider item to listing configuration file.

{% highlight XML %}
<exportButton name="export_button">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="selectProvider" xsi:type="string">{select_provider_path}</item>
        </item>
    </argument>
</exportButton>
{% endhighlight %}

Example: `Magento/Sales/view/adminhtml/ui_component/sales_order_grid.xml`

{% highlight XML %}
<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <container name="listing_top">
        <exportButton name="export_button">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="selectProvider" xsi:type="string">sales_order_grid.sales_order_grid.sales_order_columns.ids</item>
                </item>
            </argument>
        </exportButton>
    </container>
</listing>
{% endhighlight %}

By default Magento allows CSV and Excel XML export data formats.

####How to add new export format

To add new export format:

* Add configuration data to ExportButton definition <a href="{{ site.gdeurl21 }}ui-library/ui-definition.html">`Magento/Ui/view/base/ui_component/etc/definition.xml`</a>
* Add controller for new format processing `\Magento\Ui\Controller\Adminhtml\Export\GridToFoo`
* Add converter `\Magento\Ui\Model\Export\ConvertToFoo`
