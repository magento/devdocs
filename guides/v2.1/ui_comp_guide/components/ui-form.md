---
layout: default
group: UI_Components_guide
subgroup: components
title: Form component
menu_title: Form component
version: 2.1
github_link: ui_comp_guide/components/ui-form.md
---


## Overview
Form component allows performing [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations on an entity. 

The following is the Form component constructor: [form.js]({{site.mage2100url}}app/code/Magento/Ui/view/base/web/js/form/form.js)

### Related UI components

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

To create an instance of the Form component, you need to do the following:

1. In you custom module, add a configuration file for the instance, for example: `customer_form.xml`.
2. Add a set of fields (the Fieldset component with the component of the Field) for entity or     to implement the upload of meta info in the DataProvider.
3. Create the DataProvider class for the entity that implements DataProviderInterface
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

* globally: using any module's `view/ui_component/etc/definition.xml` file. All settings declared in     this file will be applied to all component's instances
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

* layout - configuration class meets the visualization component. Names for deps and provider are specified with a complete path from the root component with the separator "."

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

## Creating DataSource 
You need to configure component's DataSource in order to provide data and meta information for your Form component.

DataSource aggregates an object of class implements the interface `\Magento\Framework\View\Element\UiComponent\DataProvider\DataProviderInterface`

An example of the configuration of the DataSource object:

{% highlight xml%}
<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    <argument name="data" xsi:type="array">
        ...
    </argument>
    <dataSource name="customer_form_data_source">
        <argument name="dataProvider" xsi:type="configurableObject">
            <argument name="class" xsi:type="string">Magento\Customer\Model\Customer\DataProvider</argument>
            <argument name="primaryFieldName" xsi:type="string">entity_id</argument>
            <argument name="requestFieldName" xsi:type="string">id</argument>
            <argument name="meta" xsi:type="array">
                <item name="customer" xsi:type="array">
                    <item name="config" xsi:type="array">
                        <item name="label" xsi:type="string" translate="true">Account Information</item>
                    </item>
                </item>
                <item name="address" xsi:type="array">
                    <item name="is_collection" xsi:type="boolean">true</item>
                    <item name="config" xsi:type="array">
                        <item name="label" xsi:type="string" translate="true">Addresses</item>
                    </item>
                </item>
            </argument>
            <argument name="data" xsi:type="array">
                <item name="js_config" xsi:type="array">
                    <item name="component" xsi:type="string">Magento_Ui/js/grid/provider</item>
                </item>
                <item name="config" xsi:type="array">
                    <item name="submit_url" xsi:type="string">customer/index/save</item>
                    <item name="validate_url" xsi:type="string">customer/index/validate</item>
                </item>
            </argument>
        </argument>
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/form/provider</item>
            </item>
        </argument>
    </dataSource>
</form>
{% endhighlight %}

Component configuration:

* argument "dataProvider" - contains configuration, class name and arguments

* js_config -> component - > JS indication of a responsible component

Data provided by data source is shared and available for all components in the Assembly (in this case for all child components of UI Form).

Data Source is another UI Component that provides data in specific format which is shared among all UI Components.

## Replacing

<div class="bs-callout bs-callout-info" id="info">
  <p>Replacing principles are the same for all UI Components.</p>
</div>

#### Global replacement

To replace all instances of a UI Form with a custom implementation redefine link to a constructor in `definition.xml`.

`app/code/Magento/Ui/view/base/ui_component/etc/definition.xml`

{% highlight xml%}
<form class="Magento\Ui\Component\Form">
    <argument name="data" xsi:type="array">
        <item name="js_config" xsi:type="array">
            <item name="component" xsi:type="string">Magento_Ui/js/form/customFormConstructor</item>
        </item>
    </argument>
</form>
{% endhighlight %}

## Instance Replacement

To replace one instance of a UI Form Component redefine link to a constructor in your module's form configuration file:

`app/code/Magento/Customer/view/base/ui_component/customer_form.xml`

{% highlight xml%}
<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Ui/etc/ui_configuration.xsd">
    <argument name="data" xsi:type="array">
        <item name="js_config" xsi:type="array">
            <item name="component" xsi:type="string">Magento_Customer/js/form/customFormConstructor</item>
        </item>
        </argument>
</form>
{% endhighlight %}
