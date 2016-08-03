---
layout: default
group:  UI Library
subgroup: C_Listing/Grid Secondary Components
title: ExportButton Component
menu_title: Export Button Component
menu_node:
menu_order: 12
version: 2.2
github_link: ui-components/ui-export.md

---

<h2 id="export">UI ExportButton Component</h2>

The `ExportButton` component is responsible for exporting grid data to a specified data format. By default, Magento exports CVS and Microsoft Excel XML files.  

To enable the `ExportButton` component, add the `exportButton` element to the listing configuration file.

{% highlight XML %}
<exportButton name="export_button"/>
{% endhighlight %}

By default, the export button uses the ids column for `selectProvider`. If the selections column has another name, use the specified `selectProvider` item.

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
    <listingToolbar name="listing_top">
        <exportButton name="export_button"/>
    </listingToolbar>
</listing>
{% endhighlight %}

To add parameters to a URL request, use the `additionalParams` config item. The following example shows how to add `entity_id` to a request, which is present in a provider `params` node.

{% highlight XML %}
<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <listingToolbar name="listing_top">
        <exportButton name="export_button">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="additionalParams" xsi:type="array">
                        <item name="entity_id" xsi:type="string">${ $.provider }:params.entity_id</item>
                    </item>
                </item>
            </argument>
        </exportButton>
    </listingToolbar>
</listing>
{% endhighlight %}


#### How to add new export format
By default, Magento allows CSV and Excel XML export data formats.

To add new export format:

* Add configuration data to ExportButton definition <a href="{{page.baseurl}}ui-library/ui-definition.html">`Magento/Ui/view/base/ui_component/etc/definition.xml`</a>
* Add controller for new format processing `\Magento\Ui\Controller\Adminhtml\Export\GridToFoo`
* Add converter `\Magento\Ui\Model\Export\ConvertToFoo`
