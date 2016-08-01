---
layout: default
group:  UI Library
subgroup: C_Listing/Grid Secondary Components
title: Link Component
menu_title: Export Button Component
menu_node:
menu_order: 14
version: 2.2
github_link: ui-components/ui-link.md

---

<h2 id="export">UI Link Component</h2>

The Link component is responsible for representing a link in a column instead of text. This is a JS extension for default column.

To use the Link component, override the component item for column in the configuration file.

{% highlight XML %}
<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <columns name="columns">
        <column name="entity_id">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="component" xsi:type="string">Magento_Ui/js/grid/columns/link</item>
                    <item name="label" xsi:type="string" translate="true">Entity ID</item>
                </item>
            </argument>
        </column>
    </columns>
</listing>
{% endhighlight %}

By default, the Link component gets link information from the record data under the link key. If link information located under another key, specify the link item.

{% highlight XML %}
<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <columns name="columns">
        <column name="entity_id">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="component" xsi:type="string">Magento_Ui/js/grid/columns/link</item>
                    <item name="label" xsi:type="string" translate="true">Entity ID</item>
                    <item name="link" xsi:type="string">path.to.link</item>
                </item>
            </argument>
        </column>
    </columns>
</listing>
{% endhighlight %}
