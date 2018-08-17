---
group:  UI Library
subgroup: C_Listing/Grid Secondary Components
title: ExportButton Component
menu_title: Export Button Component
menu_node:
menu_order: 12
version: 2.0
redirect_from: /guides/v2.0/ui-library/ui-export.html

---

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

Example: `<Magento_Sales_module_dir>/view/adminhtml/ui_component/sales_order_grid.xml`

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

By default Magento allows {% glossarytooltip 6341499b-ead9-4836-9794-53d95eb48ea5 %}CSV{% endglossarytooltip %} and Excel {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} export data formats.

#### How to add new export format

To add new export format:

* Add configuration data to ExportButton definition <a href="{{ page.baseurl }}/ui-library/ui-definition.html">`Magento/Ui/view/base/ui_component/etc/definition.xml`</a>
* Add controller for new format processing `\Magento\Ui\Controller\Adminhtml\Export\GridToFoo`
* Add converter `\Magento\Ui\Model\Export\ConvertToFoo`
