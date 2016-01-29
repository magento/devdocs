---
layout: default
group:  UI Library
subgroup: B_UI Library Listing/Grid Component
title: Listing/Grid Component
menu_title: Dynamic Rows Component
github_link: ui-components/ui-listing-grid.md
redirect_from: /guides/v2.0/ui-library/ui-listing-grid.html
---
## Overview

The dynamic-rows component is used to create a table where rows of configurable fields can be dynamically added and removed. 

Following is an illustration of how such a table looks like:

<img src="{{site.baseutl}}/common/images/ui-dynamic-row.png" >

**Contents:**

* TOC
{:toc}

<p class="q">definition.xml?</p>

## Dynamic Rows JS Component Structure
Component Elements (classes, files, etc)


- The dynamic Rows component is implemented in the class `app\code\Magento\Ui\view\base\web\js\dynamic-rows\dynamic-rows.js` and has extended component to transfer data with grid `app\code\Magento\Ui\view\base\web\js\dynamic-rows\dynamic-rows-grid.js`
- Record component: `app\code\Magento\Ui\view\base\web\js\dynamic-rows\record.js`
- For Drag and Drop dynamic-rows use module: `app\code\Magento\Ui\view\base\web\js\dynamic-rows\dnd.js`
- Templates used by this component are: 
	- `app\code\Magento\Ui\view\base\web\templates\dynamic-rows\templates\default.html`
	- `app\code\Magento\Ui\view\base\web\templates\dynamic-rows\templates\grid.html`
	- `app\code\Magento\Ui\view\base\web\templates\dynamic-rows\templates\collapsible.html` 
- Templates for fields:
	- `app\code\Magento\Ui\view\base\web\templates\dynamic-rows\cells\action-delete.html`, 
	- `app\code\Magento\Ui\view\base\web\templates\dynamic-rows\cells\text.html`.
Also Dynamic rows uses Form field templates.

## Integration

<p class="q">What is this xml file? Is it something we should if we want to use the component? where should it be added?</p>

{%highlight xml%}
<dynamicRows name="Integration">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <!-- Its simple integration. Full configuration list you can see in section "Configuration" -->
            <item name="itemTemplate" xsi:type="string">record</item>      
        </item>
    </argument>
    <container name="record">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="isTemplate" xsi:type="boolean">true</item>
                <item name="is_collection" xsi:type="boolean">true</item>
                <item name="component" xsi:type="string">Magento_Ui/js/lib/core/collection</item>
            </item>
            </argument>
        <field name="website">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="dataType" xsi:type="string">text</item>
                    <item name="formElement" xsi:type="string">select</item> <!-- We can use different type element. Full list element you can see in section "Configuration -> Field types"  -->
                    <item name="dataScope" xsi:type="string">currentDataScopeName</item>
                    <item name="label" xsi:type="string">currentLabel</item>
                    <item name="options" xsi:type="array">
                        <item name="0" xsi:type="array">
                            <item name="label" xsi:type="string">Item</item>
                            <item name="value" xsi:type="string">0</item>
                        </item>
                    </item>
                </item>
            </argument>
         </field>
    </container>
</dynamicRows>

{%endhighlight%}

## Configuration

## Public methods
`setDisabled(state)` - disabled or enabled all grid
`state` - {Boolean} - Grid state
`setColumnDisabled(index, state)` - disabled or enabled some column in grid
`index `- {Number} - Column index
`state` - {Boolean} - Column state
`setVisible(state)` - set visibility to all grid
`state` - {Boolean} - Grid state
`setColumnVisibility(index, state)` - show or hide some column in grid
`index` - {Number} - Column index
`state` - {Boolean} - Column state
`reload()` - rerender records
`onUpdateRecordTemplate(templateName)` - rerender records with new template
`templateName` - {String} - new template name
`sort(position, elem)` - sort elements by position
`position` - {Number}
`elem` - {Object}
`deleteRecord(index)` - delete record by index
`index` - {Number} - index record
`addChild(data, index)` - render new record instance
`data` - {Object} - object with instance data
`index` - {Number} - index for new instance
