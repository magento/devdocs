---
layout: default
group:  UI Library
subgroup: D_UI Library Form Component
title: Form Component
menu_title: Form Component
menu_node: parent
version: 2.0
github_link: ui-components/ui-form.md
redirect_from: /guides/v2.0/ui-library/ui-form.html

---

* TOC
{:toc}

## Overview
Form component allows performing <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete">CRUD</a> operations on an entity. 

The following are the components element, the constructor: `app\code\Magento\Ui\view\base\web\js\form\form.js`

<h4>Related UI components</h4>

The following components are used to extend the Form component:

* DataSource
* FieldSet
* Field
* Layout
* Container

## Component options

* js_config -> deps - sets the dependency on component initialization
 
* js_config -> config -> provider - specifies the name of the component data
 
* layout - configuration class meets the visualization component
    (See examples in 'Configuring' section)

## Create an instance of the Form component

* Create configuration file for the instance (for example: customer_form.xml)

    * Add a set of fields (the Fieldset component with the component of the Field) for entity or to implement the upload of Meta info in the DataProvider. 
* Create the DataProvider class for the entity that implements DataProviderInterface
* Add a component in Magento layout as a node: `<uiComponent name="customer_form"/>`

Example:

{% highlight xml %}
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="content">
            ...
            <uiComponent name="customer_form"/>
        </referenceContainer>
    </body>
</page>
{% endhighlight %}
 
## Configure the Form component

Component could be configured in two ways:

* globally: using any module's `view//ui_component/etc/definition.xml` file. All settings declared in     this file will be applied to all component's instances
* locally: using concrete component instance configuration, such as `<your module root dir>/Magento/Customer/view/base/ui_component/customer_form`

Create configuration file: `<your module root dir>/Magento/Customer/view/base/ui_component/customer_form.xml`

{% highlight xml%}
<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    <argument name="data" xsi:type="array">
        <item name="js_config" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="provider" xsi:type="string">customer_form.customer_form_data_source</item>
            </item>
            <item name="deps" xsi:type="string">customer_form.customer_form_data_source</item>
        </item>
        <item name="label" xsi:type="string" translate="true">Customer Information</item>
        <item name="layout" xsi:type="array">
            <item name="type" xsi:type="string">tabs</item>
            <item name="navContainerName" xsi:type="string">left</item>
        </item>
...
{% endhighlight%}

Nodes are optional and contain parameters required for component:

* js_config -> deps - sets the dependency on component initialization

* js_config -> config -> provider - specifies the name of the component data

* layout - configuration class meets the visualization component. Names for deps and provider are specified with a complete path from the root component with the separator “.”

Add a description of the fields in the form using components and Field Fieldset:

{%highlight xml%}
...
<fieldset name="customer">
   <argument name="data" xsi:type="array">
       <item name="config" xsi:type="array">
           <item name="label" xsi:type="string" translate="true">Account Information</item>
       </item>
   </argument>
   <field name="entity_id">
       <argument name="data" xsi:type="array">
               <item name="config" xsi:type="array">
               <item name="visible" xsi:type="boolean">false</item>
               <item name="dataType" xsi:type="string">text</item>
               <item name="formElement" xsi:type="string">input</item>
               <item name="source" xsi:type="string">customer</item>
           </item>
        </argument>
    </field>
…
{% endhighlight%}

To group components you can use the component container as in example below:

{% highlight xml%}
<container name="container_group">
    <argument name="data" xsi:type="array">
        <item name="type" xsi:type="string">group</item>
        <item name="js_config" xsi:type="array">
            <item name="component" xsi:type="string">Magento_Ui/js/form/components/group</item>
        </item>
        <item name="config" xsi:type="array">
            <item name="label" xsi:type="string" translate="true">Group</item>
            <item name="required" xsi:type="boolean">true</item>
            <item name="dataScope" xsi:type="boolean">false</item>
            <item name="sortOrder" xsi:type="number">20</item>
        </item>
    </argument>
    <field name="group_id">
    ...
    </field>
    <field name="disable_auto_group_change">
    ...
    </field>
</container>
{% endhighlight %}
