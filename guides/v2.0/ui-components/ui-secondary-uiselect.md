---
layout: default
group:  UI Library
subgroup: C_Listing/Grid Secondary Components
title: UI-select Component
menu_title: UI-select Component
menu_node:
menu_order: 6
version: 2.0
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
    <td>options.< option name >.label</td>
    <td>Options label</td>
    <td>-</td>
    <td>String</td>
    <td>undefined</td>
</tr>
<tr>
    <td>options.< option name >.value</td>
    <td>Options value</td>
    <td>-</td>
    <td>String</td>
    <td>undefined</td>
</tr>
<tr>
    <td>options.< option name >.optgroup</td>
    <td>Nested level of options</td>
    <td>-</td>
    <td>Object</td>
    <td>undefined</td>
</tr>
<tr>
    <td>mode</td>
    <td>Mode overrides default values for some options. In 'simple' mode showCheckbox = chipsEnabled = closeBtn = false. In 'optgroup' mode showCheckbox = openLevelsAction = false, and lastSelectable = optgroupLabels = labelsDecoration = true.</td>
    <td>-</td>
    <td>Boolean</td>
    <td>false</td>
</tr>
<tr>
    <td>showCheckbox</td>
    <td>Show checkbox just before option label, select options by checking</td>
    <td>-</td>
    <td>Boolean</td>
    <td>true</td>
</tr>
<tr>
    <td>chipsEnabled</td>
    <td>Selected options are shown in ui select's header as deletable chips</td>
    <td>-</td>
    <td>Boolean</td>
    <td>true</td>
</tr>
<tr>
    <td>closeBtn</td>
    <td>Show button that closes dropdown</td>
    <td>-</td>
    <td>Boolean</td>
    <td>true</td>
</tr>
<tr>
    <td>closeBtnLabel</td>
    <td>Label of the close button</td>
    <td>-</td>
    <td>string</td>
    <td>$t('Done')</td>
</tr>
<tr>
    <td>levelsVisibility</td>
    <td>If true, all levels are visible. If is a number, this number of levels are visible.</td>
    <td>-</td>
    <td>Boolean/number</td>
    <td>true</td>
</tr>
<tr>
    <td>openLevelsAction</td>
    <td></td>
    <td>-</td>
    <td>Boolean</td>
    <td>true</td>
</tr>
<tr>
    <td>showOpenLevelsActionIcon</td>
    <td></td>
    <td>-</td>
    <td>Boolean</td>
    <td>true</td>
</tr>
<tr>
    <td>showTree</td>
    <td></td>
    <td>-</td>
    <td>Boolean</td>
    <td>false</td>
</tr>
<tr>
    <td>separator</td>
    <td></td>
    <td>-</td>
    <td>String</td>
    <td>optgroup</td>
</tr>
</tbody>
</table>

####Integration

Here is an example of configuration of select component. It is used as column filter and has 3 levels of options, with not selectable label for every level, without checkboxes:

<img src="{{site.baseurl}}common/images/ui-select.jpg" alt="view the configuration">
