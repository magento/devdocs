---
layout: default
group:  UI Library
subgroup: C_Listing/Grid Secondary Components
title: TreeMassAction Component
menu_title: TreeMassAction Component
menu_node:
menu_order: 4
version: 2.0
github_link: ui-components/ui-secondary-treemass.md
redirect_from: /guides/v2.0/ui-library/ui-secondary-treemass.html

---

<h3 id="treemass">UI TreeMassAction Component</h3>

TreeMassAction Component is extension to MassAction component that provides nested sub-menu. 

The TreeMassAction JS component is used by the TwoStepMassAction component.

####PHP Implementation of TreeMassAction

To enable Massaction Component for your Listing instance it should be declared as a child.

Example:
`<your module root dir>/Magento/Catalog/view/adminhtml/ui_component/product_listing.xml`

{% highlight XML %}
<massaction name="listing_massaction">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="selectProvider" xsi:type="string">product_listing.product_listing.product_columns.ids</item>
            <item name="component" xsi:type="string">Magento_Ui/js/grid/tree-massactions</item>
            <item name="displayArea" xsi:type="string">bottom</item>
            <item name="indexField" xsi:type="string">entity_id</item>
        </item>
    </argument>
    <action name="delete">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="confirm" xsi:type="array">
                    <item name="title" xsi:type="string" translate="true">Delete items</item>
                    <item name="message" xsi:type="string" translate="true">Delete selected items?</item>
                </item>
                <item name="type" xsi:type="string">delete</item>
                <item name="label" xsi:type="string" translate="true">Delete</item>
                <item name="url" xsi:type="url" path="catalog/product/massDelete"/>
            </item>
        </argument>
    </action>
    <action name="status">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="type" xsi:type="string">status</item>
                <item name="label" xsi:type="string" translate="true">Change status</item>
            </item>
        </argument>
        <argument name="actions" xsi:type="array">
            <item name="0" xsi:type="array">
                <item name="type" xsi:type="string">enable</item>
                <item name="label" xsi:type="string" translate="true">Enable</item>
                <item name="url" xsi:type="url" path="catalog/product/massStatus">
                    <param name="status">1</param>
                </item>
            </item>
            <item name="1" xsi:type="array">
                <item name="type" xsi:type="string">disable</item>
                <item name="label" xsi:type="string" translate="true">Disable</item>
                <item name="url" xsi:type="url" path="catalog/product/massStatus">
                    <param name="status">2</param>
                </item>
            </item>
        </argument>
    </action>
    <action name="attributes">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="type" xsi:type="string">attributes</item>
                <item name="label" xsi:type="string" translate="true">Update attributes</item>
                <item name="url" xsi:type="url" path="catalog/product_action_attribute/edit"/>
            </item>
        </argument>
    </action>
</massaction>
{% endhighlight%}

####Configuration
Component can be configured in two ways:

* Globally: using any module's <a href="{{page.baseurl}}ui-library/ui-definition.html">`view/*/ui_component/etc/definition.xml`</a> file. All settings declared in this file are applied to all component's instances
* Locally: using concrete component instance configuration, such as `<your module root dir>/Magento/Catalog/view/adminhtml/ui_component/product_listing.xml`

####TreeMassAction JS Component Structure

####Component Elements (classes, files, etc)

The following are the component elements:

* Constructor `app\code\Magento\Ui\view\base\web\js\grid\tree-massactions.js`
* Template: `app\code\Magento\Ui\view\base\web\templates\grid\tree-massactions.html`
* Template: `app\code\Magento\Ui\view\base\web\templates\grid\submenu.html`

####Dependencies on Other Components

Dependency on the following component:

* Collapsible: `app\code\Magento\Ui\view\base\web\js\grid\massactions.js`

####Component Options

The following options are available:

* noItemsMsg - message which will be shown if user tries to apply action without any selected items
* selectProvider - option which defines the component with selections data
* actions - array which contains initially available actions

####Methods and Events

The following api methods are available:

* getAction - returns action instance found by the provided identifier
* applyAction - applies specified as identifier action
* hideSubmenus - hide specified actions and nested submenu

####How to Configure Already Used in Code TreeMassAction Component

`app\code\Magento\Catalog\view\adminhtml\ui_component\product_listing.xml`

Example of configuration modifications:

* Redefining the link to the template

{% highlight XML %}
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

{% highlight XML %}
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

{% highlight XML %}
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

####Instance Replacement: One Instance of a Component

Redefine link to constructor:

{% highlight XML %}
<massaction name="listing_massaction">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="component" xsi:type="string">Magento_Products/js/grid/tree-massactions</item>
        </item>
    </argument>
</massaction>
{% endhighlight %}
