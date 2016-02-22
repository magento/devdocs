---
layout: default
group:  UI Library
subgroup: C_Listing/Grid Secondary Components
title: UI-select Component
menu_title: UI-select Component
menu_node:
menu_order: 6
github_link: ui-components/ui-secondary-uiselect.md
redirect_from: /guides/v2.0/ui-library/ui-secondary-uiselect.html

---

<h3 id="uiselect">UI-select component</h3>

The UI-select component is used to provide check box interface for a specific listing or a specific data set. The component allows selecting a collection of items.

The UI-select component has extended from the Abstract component.

Example integration:

`<your module root dir>/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml`

{% highlight xml %}
<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
            <filterSelect name="uiSelect">
                <argument name="optionsProvider" xsi:type="configurableObject">
                    <argument name="class" xsi:type="string">Magento\Cms\Model\Page\Source\PageLayout</argument>
                </argument>
                <argument name="data" xsi:type="array">
                    <item name="config" xsi:type="array">
                        <item name="component" xsi:type="string">Magento_Ui/js/form/element/ui-select</item>
                        <item name="template" xsi:type="string">ui/grid/filters/elements/ui-select</item>
                        <item name="dataScope" xsi:type="string">uiSelect</item>
                        <item name="label" xsi:type="string" translate="true">uiSelect</item>
                    </item>
                </argument>
            </filterSelect>
</listing>
{% endhighlight %}

####Configuration

The following configuration can be passed in arguments:

* Link to any of the following templates
* Link to the constructor
* Label to ui-select
* Default caption
* Caption if selected more then one elements

####Navigation

The UI-select component supports keyboard navigation.

Navigation keys:

* Enter key: if focus on the caption - a list of options opens, if focus on the some option - selected or unselected current option
* Space key: copy 'Enter key' functionality
* Escape key: closes the list of options
* PageUp key: sets focus to previous option
* PageDown key: sets focus to next option

####UI-select JS component structure

* Component elements
    
    The Ui-select component is implemented in the class `app\code\Magento\Ui\view\base\web\js\form\element\ui-select.js`
    
    Templates used by this component are:
    
    `app\code\Magento\Ui\view\base\web\templates\grid\filters\elements\ui-select.html`
    
* Dependencies on Other Components

    Abstract
    
* imports option
    
    The option defines from where the component receives its data.
        
    Code samples available in the default configuration:
    
    {% highlight javascript %}
    imports: {
        options: '${ $.optionsConfig.name }:options'
    }
    {% endhighlight %}

* actions option

    You can modify the default actions by renaming their storefront labels
    
    Code samples available in the default configuration:
    
    {% highlight javascript %}
    actions: [{
                    value: 'selectAll',
                    label: $t('Select all')
                }, {
                    value: 'deselectAll',
                    label: $t('Deselect all')
                }, {
                    value: 'selectPage',
                    label: $t('Select all on this page')
                }, {
                    value: 'deselectPage',
                    label: $t('Deselect all on this page')
                }],
    {% endhighlight %}
    
<h2 id="structure">Component options</h2>

<table>
<tbody>
<tr>
    <th>Title</th>
    <th>Description</th>
    <th>Required For Correct Work</th>
    <th>Type</th>
    <th>Default Value</th>
</tr>
<tr>
    <td><br>options.< option name >.label</br>
        <br>options.< option name >.value</br>
        <br>options.< option name >.optgroup</br></td>
    <td>Options label, value, nested level of options</td>
    <td>No</td>
    <td><br>String</br>
        <br>String</br>
        <br>Object</br>
    </td>
    <td>undefined</td>
</tr>
<tr>
    <td>mode</td>
    <td><br>Mode overrides default values for some options.</br>
        <br>In 'simple' mode showCheckbox = chipsEnabled = closeBtn = false</br>
        <br>In 'optgroup' mode showCheckbox = openLevelsAction = false, and lastSelectable = optgroupLabels = labelsDecoration = true</br></td>
    <td>No</td>
    <td>Boolean</td>
    <td>false</td>
</tr>
<tr>
    <td>isMultipleFiles</td>
    <td>Flag which indicates whether multiple files can be uploaded or not</td>
    <td>No</td>
    <td>Boolean</td>
    <td>false</td>
</tr>
<tr>
    <td>allowedExtensions</td>
    <td>List of allowed file extensions</td>
    <td>No</td>
    <td>String/Array</td>
    <td>*</td>
</tr>
<tr>
    <td>dropZone</td>
    <td>CSS selector of a drop zone element relative to a file input element</td>
    <td>No</td>
    <td>String</td>
    <td>[data-role=drop-zone]</td>
</tr>
<tr>
    <td>uploaderConfig</td>
    <td>Configuration which will be passed to jquery-file-upload plugin</td>
    <td>Yes</td>
    <td>Object</td>
    <td></td>
</tr>
<tr>
    <td>uploaderConfig.url</td>
    <td>Route to server controller which will handle file uploading process</td>
    <td>Yes</td>
    <td>String</td>
    <td>null</td>
</tr>
</tbody>
</table>