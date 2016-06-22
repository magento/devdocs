---
layout: default
group:  UI Library
subgroup: C_Listing/Grid Secondary Components
title: MassAction Component
menu_title: MassAction Component
menu_node:
menu_order: 3
version: 2.0
github_link: ui-components/ui-secondary-massaction.md
redirect_from: /guides/v2.0/ui-library/ui-secondary-massaction.html

---

<h3 id="massaction">UI MassAction Component</h3>

###MassAction JS component structure

MassActions component adds ability to be selectable (by attaching it's template to each item in Listing) to items in Listing and creates actions to perform with selected items (for example: 'Delete', 'Update attributes' and so on).

"Select all" functionality is improved in Magento 2. Instead of creating a list of all selected items they are now flagged and list is created only for excluded elements.

####Component Elements (classes, files)

The following are the component elements:

* Constructor `app\code\Magento\Ui\view\base\web\js\grid\massactions.js`
* Template: `app\code\Magento\Ui\view\base\web\templates\grid\actions.html`

####Dependencies on Other Components

Dependency on the following components:

* Collapsible: `app\code\Magento\Ui\view\base\web\js\lib\collapsible.js`
* Modal window with confirmation: `app\code\Magento\Ui\view\base\web\js\modal\confirm.js`
* Modal window with alert: `app\code\Magento\Ui\view\base\web\js\modal\alert.js`

####Component Options

The following options are available:

* noItemsMsg - message that is displayed if user tries to apply action without any selected items
* selectProvider - option that defines the component with selections data
* actions - array that contains initially available actions

<h5>Methods and Events</h5>

The following API methods are available:

* getAction - returns action instance found by the provided identifier
* addAction - adds new action to the actions
* applyAction - applies specified as identifier action
* getSelections - returns object with current selections

####Example of configuration modifications:

* Redefining the link to the template

{% highlight javascript %}
<massaction name="listing_massaction">
    <argument name="data" xsi:type="array">
        ...
        <item name="config" xsi:type="array">
            <item name="template" xsi:type="string">product/grid/columns/massactions</item>
        </item>
    </argument>
</massaction>
{% endhighlight %}

* Specifying action with confirmation

{% highlight xml %}
<massaction name="listing_massaction">
    <argument name="data" xsi:type="array">
        ...
    </argument>
    <action name="edit">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="confirm" xsi:type="array">
                    <item name="title" xsi:type="string" translate="true">Edit items</item>
                    <item name="message" xsi:type="string" translate="true">Are you sure you wan't to edit selected items?</item>
                </item>
                <item name="type" xsi:type="string">edit</item>
                <item name="label" xsi:type="string" translate="true">Edit</item>
            </item>
        </argument>
    </action>
</massaction>
{% endhighlight %}

* Action with a custom callback


Callback is provided by another component.

{% highlight xml %}
<massaction name="listing_massaction">
    <argument name="data" xsi:type="array">
        ...
    </argument>
    <action name="edit">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="type" xsi:type="string">edit</item>
                <item name="label" xsi:type="string" translate="true">Edit</item>
                <item name="callback" xsi:type="array">
                    <item name="provider" xsi:type="string">product_listing.inline_editing</item>
                    <item name="target" xsi:type="string">startEdit</item>
                </item>
            </item>
        </argument>
    </action>
</massaction>
{% endhighlight %}

* Instance replacement: one instance of a component

Redefine link to constructor.

<pre>
&lt;massaction name="listing_massaction"&gt;
    &lt;argument name="data" xsi:type="array"&gt;
        &lt;item name="js_config" xsi:type="array"&gt;
            &lt;item name="component" xsi:type="string"&gt;Magento_Products/js/grid/massactions&lt;/item&gt;
        &lt;/item&gt;
    &lt;/argument&gt;
&lt;/massaction&gt;
</pre>
