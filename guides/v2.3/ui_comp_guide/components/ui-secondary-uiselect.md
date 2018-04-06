---
layout: default
group: UI_Components_guide
subgroup: components
title: UI-select component
menu_title: UI-select component
menu_node:
version: 2.3
github_link: ui-components/ui-secondary-uiselect.md

---

## Overview

The UI-select component is a single select/multiple select component that enables the selection of a collection of items. It extends all `abstract` configuration and can be configured in two modes:
* Single - checkbox isn't displayed
* Multiple - checkboxes are displayed

### Examples

Example 1:

> `<Magento_Cms>/view/adminhtml/ui_component/cms_page_listing.xml`

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


Example 2:

The following is an example of the configuration of a select component. It is used as a column filter with three levels of options, with no selectable label for every level, without checkboxes:

<img src="{{site.baseurl}}common/images/ui-select21.jpg" alt="view the configuration">

### Configuration

The following configuration can be passed in as arguments:

* Link to any of the UI component templates
* Link to the constructor
* Label to ui-select
* Default caption
* Caption if more than one element is selected

### Navigation

The UI-select component supports keyboard navigation.

Navigation keys:

* **`Enter`**: if focus is on the caption a list of options opens; if focus is on the same option it will select or deselect the current option
* **`Space`**: copies the `Enter` key functionality
* **`Escape`**: closes the list of options
* **`PageUp`**: sets focus to the previous option
* **`PageDown`**: sets focus to the next option

### UI-select JS component structure

| Type                            | Filename                                                          |
| ------------------------------- | ----------------------------------------------------------------- |
| JavaScript class                | `app/code/Magento/Ui/view/base/web/js/form/element/ui-select.js`|
| Dependencies                    | `Magento/Ui/view/base/web/js/form/element/abstract.js`|
| Template                        | `app/code/Magento/Ui/view/base/web/templates/grid/filters/elements/ui-select.html`  |
{:style="table-layout:auto;"}


### UI-select component-specific configuration

<table style="table-layout:auto;">
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>imports</code></td>
    <td>Defines from where the component receives its data</td>
    <td>
    {% highlight javascript %}imports: {
        options: '${ $.optionsConfig.name }:options'
    }{% endhighlight %}</td>
  </tr>
  <tr>
    <td><code>actions</code></td>
    <td>Modifies the default actions by renaming their storefront labels</td>
    <td><code>
        {% highlight javascript %}
        actions: [
            {
                value: 'selectAll',
                label: $t('Select all')
            },
            {
                value: 'deselectAll',
                label: $t('Deselect all')
            }, 
            {
                value: 'selectPage',
                label: $t('Select all on this page')
            },
            {
                value: 'deselectPage',
                label: $t('Deselect all on this page')
            }
        ]
        {% endhighlight %}
        </code>
    </td>
  </tr>  
</table>

    
## Component options

{%
include note.html
type="tip"
content="You must create a controller for `searchUrl`. If you'd like to use other data for the request, you can override the `processRequest` method in your component."
%}

<table style="table-layout:auto;">
<tbody>
<tr>
    <th>Title</th>
    <th>Type</th>
    <th>Default Value</th>
    <th>Description</th>
</tr>
<tr>
    <td><code>chipsEnabled</code></td>
    <td>Boolean</td>
    <td>True</td>
    <td>Selected options are shown in UI-select's header as deletable chips.</td>
</tr>
<tr>
    <td><code>closeBtn</code></td>
    <td>Boolean</td>
    <td>True</td>
    <td>Shows the button that closes the dropdown</td>
</tr>
<tr>
    <td><code>closeBtnLabel</code></td>
    <td>String</td>
    <td><code>$t('Done')</code></td>
    <td>Label of the close button</td>
</tr>
<tr>
    <td><code>deviation</code></td>
    <td>Number</td>
    <td>30</td>
    <td>Handles scroll download behavior</td>
</tr>
<tr>
    <td><code>emptyOptionsHtml</code></td>
    <td>String</td>
    <td>Empty string</td>
    <td>Specifies the HTML to display content if there are no options to display</td>
</tr>
<tr>
    <td><code>filterPlaceholder</code></td>
    <td>String</td>
    <td>Empty string</td>
    <td>Specifies captions for the filter placeholder</td>
</tr>
<tr>
    <td><code>isDisplayMissingValuePlaceholder</code></td>
    <td>Boolean</td>
    <td>False</td>
    <td>Specifies whether the display is missing the value placeholder</td>
</tr>
<tr>
    <td><code>isRemoveSelectedIcon</code></td>
    <td>Boolean</td>
    <td>False</td>
    <td>Specifies whether the "x" is present to enable removal of chosen entity</td>
</tr>
<tr>
    <td><code>levelsVisibility</code></td>
    <td>Boolean/number</td>
    <td>True</td>
    <td>If true, all levels are visible; if it is a number, the number of levels are visible.</td>
</tr>
<tr>
    <td><code>loading</code></td>
    <td>Boolean</td>
    <td>False</td>
    <td>Displays a loader to find options if a request is sent to the backend</td>
</tr>
<tr>
    <td><code>missingValuePlaceholder</code></td>
    <td>String</td>
    <td><code>'Entity with ID: %s doesn\'t exist'</code></td>
    <td>Specifies the text to display if the entity that was chosen no longer exists</td>
</tr>
<tr>
    <td><code>options.< option name >.label</code></td>
    <td>String</td>
    <td>Undefined</td>
    <td>Options label</td>
</tr>
<tr>
    <td><code>options.< option name >.value</code></td>
    <td>String</td>
    <td>Undefined</td>
    <td>Options value</td>
</tr>
<tr>
    <td><code>options.< option name >.optgroup</code></td>
    <td>Object</td>
    <td>Undefined</td>
    <td>Nested level of options</td>
</tr>
<tr>
    <td><code>openLevelsAction</code></td>
    <td>Boolean</td>
    <td>True</td>
    <td>Expands a tree to the child level</td>
</tr>
<tr>
    <td><code>pageLimit</code></td>
    <td>Number</td>
    <td>50</td>
    <td>Page limit for search</td>
</tr>
<tr>
    <td><code>searchOptions</code></td>
    <td>Boolean</td>
    <td>False</td>
    <td>Include search options</td>
</tr>
<tr>
    <td><code>searchUrl</code></td>
    <td>Boolean</td>
    <td>False</td>
    <td>Sends a request to load options</td>
</tr>
<tr>
    <td><code>separator</code></td>
    <td>String</td>
    <td><code>optgroup</code></td>
    <td>Group options in select</td>
</tr>
<tr>
    <td><code>showCheckbox</code></td>
    <td>Boolean</td>
    <td>True</td>
    <td>Shows the checkbox just before the option label; select options by checking</td>
</tr>
<tr>
    <td><code>showOpenLevelsActionIcon</code></td>
    <td>Boolean</td>
    <td>True</td>
    <td>-</td>
</tr>
<tr>
    <td><code>showTree</code></td>
    <td>Boolean</td>
    <td>False</td>
    <td>-</td>
</tr>
<tr>
    <td><code>validationLoading</code></td>
    <td>Boolean</td>
    <td>False</td>
    <td>Displays a loading icon to show that the chosen option is loading; icon will show if the display is set to <code>true</code></td>
</tr>
</tbody>
</table>

### Mode

#### **`simple` mode**

`simple` mode sets the following values to `false`:
* `showCheckbox`
* `chipsEnabled`
* `closeBtn`

#### **`optgroup` mode**

`optgroup` mode sets the following values to `false`:
* `showCheckbox`
* `openLevelsAction`

`optgroup` sets the following values to `true`:
* `lastSelectable`
* `optgroupLabels`
* `labelsDecoration`

