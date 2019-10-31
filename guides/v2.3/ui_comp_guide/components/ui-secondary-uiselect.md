---
group: ui-components-guide
subgroup: components
title: UI-select component
menu_title: UI-select component
menu_node:
---

The UI-select component is a single select/multiple select component that enables the selection of a collection of items. It extends all `abstract` configuration and can be configured in two modes:

*  Single - checkbox isn't displayed
*  Multiple - checkboxes are displayed

## Configuration options

{%
include note.html
type="tip"
content="You must create a controller for `searchUrl`. If you'd like to use other data for the request, you can override the `processRequest` method in your component."
%}

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Default</th>
    <th>Required</th>
  </tr>
  <tr>
    <td><code>imports</code></td>
    <td>Defines from where the component receives its data</td>
<td markdown="1">
```js
imports: {
    options: '${ $.optionsConfig.name }:options'
}
```
</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td><code>actions</code></td>
    <td>Modifies the default actions by renaming their storefront labels</td>
<td markdown="1">
```js
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
```
</td>
    <td>Yes</td>
  </tr>
</table>

### Optional configuration

|Option|Description|Type|Default|Required|
|--- |--- |--- |--- |--- |
|`chipsEnabled`|Selected options are shown in UI-select's header as deletable chips.|Boolean|True|Optional|
|`closeBtn`|Shows the button that closes the dropdown|Boolean|True|Optional|
|`closeBtnLabel`|Close Buttons Label|String|`$t('Done')`|Optional|
|`deviation`|Handles scroll download behavior|Number|30|Optional|
|`emptyOptionsHtml`|Specifies the HTML to display content if there are no options to display|String|Empty string|Optional|
|`filterPlaceholder`|Specifies captions for the filter placeholder|String|Empty string|Optional|
|`isDisplayMissingValuePlaceholder`|Specifies whether the display is missing the value placeholder|Boolean|False|Optional|
|`isRemoveSelectedIcon`|Specifies whether the "x" is present to enable removal of chosen entity|Boolean|False|Optional|
|`levelsVisibility`|If true, all levels are visible; if it is a number, the number of levels are visible.|Boolean/number|True|Optional|
|`loading`|Displays a loader to find options if a request is sent to the backend|Boolean|False|Optional|
|`missingValuePlaceholder`|Specifies the text to display if the entity that was chosen no longer exists|String|`'Entity with ID: %s doesn\'t exist'`|Optional|
|`options.< option name >.label`|Options label|String|Undefined|Optional|
|`options.< option name >.value`|Options value|String|Undefined|Optional|
|`options.< option name >.optgroup`|Nested level of options|Object|Undefined|Optional|
|`openLevelsAction`|Expands a tree to the child level|Boolean|True|Optional|
|`pageLimit`|Page limit for search|Number|50|Optional|
|`searchOptions`|Include search options|Boolean|False|Optional|
|`searchUrl`|Sends a request to load options|Boolean|False|Optional|
|`separator`|Group options in select|String|`optgroup`|Optional|
|`showCheckbox`|Shows the checkbox just before the option label; select options by checking|Boolean|True|Optional|
|`showOpenLevelsActionIcon`|--- |Boolean|True|Optional|
|`showTree`|--- |Boolean|False|Optional|
|`validationLoading`|Displays a loading icon to show that the chosen option is loading; icon will show if the display is set to true|Boolean|False|Optional|

The following configuration can be passed in as arguments:

*  Link to any of the UI component templates
*  Link to the constructor
*  Label to ui-select
*  Default caption
*  Caption if more than one element is selected

## Modes

### **`simple` mode**

`simple` mode sets the following values to `false`:

*  `showCheckbox`
*  `chipsEnabled`
*  `closeBtn`

### **`optgroup` mode**

`optgroup` mode sets the following values to `false`:

*  `showCheckbox`
*  `openLevelsAction`

`optgroup` sets the following values to `true`:

*  `lastSelectable`
*  `optgroupLabels`
*  `labelsDecoration`

## Examples

### Use `cms_page_listing.xml`

> `<Magento_Cms>/view/adminhtml/ui_component/cms_page_listing.xml`

```xml
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
```

### Configured select component view

The following is an example of the configuration of a select component. It is used as a column filter with three levels of options, with no selectable label for every level, without checkboxes:

![view the configuration]({{site.baseurl}}/common/images/ui-select21.jpg)

## Navigation

The UI-select component supports keyboard navigation.

Navigation keys:

*  **`Enter`**: if focus is on the caption a list of options opens; if focus is on the same option it will select or deselect the current option
*  **`Space`**: copies the `Enter` key functionality
*  **`Escape`**: closes the list of options
*  **`PageUp`**: sets focus to the previous option
*  **`PageDown`**: sets focus to the next option

## Source files

*  [app/code/Magento/Ui/view/base/web/js/form/element/ui-select.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/element/ui-select.js)
*  [Magento/Ui/view/base/web/js/form/element/abstract.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/element/abstract.js)
*  [app/code/Magento/Ui/view/base/web/templates/grid/filters/elements/ui-select.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/filters/elements/ui-select.html)
