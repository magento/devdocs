---
group: UI_Components_guide
subgroup: concepts
title: Magento binding syntax
version: 2.2
---

## Overview

Within HTML templates, Magento gives you the option of using a binding syntax that is simpler and easier to read and write than the standard Knockout binding syntax. The following code snippets help make the comparison.

### Knockout syntax
```html
<!-- ko if: isVisible-->
    <div class="someClass">
        <!-- ko i18n: 'Some translatable message!'--><!-- /ko -->
        <span data-bind="html: content"></span>
    </div>
<!-- /ko -->
```
### Magento syntax
```html
<if args="isVisible">
    <div class="someClass">
        <translate args="'Some translatable message!'"/>
        <span html="content"></span>
    </div>
</if>
```
or
```html
<div class="someClass" if="isVisible">
    <span translate="'Some translatable message!'"></span>
    <span html="content"></span>
</div>
```

If you use the Magento syntax, the Magento wrapper replaces the Magento syntax with the matching Knockout comments or `data-bind` attributes during the loading of the HTML template. 

## Binding map

The table below shows how the Knockout bindings map to their Magento binding counterparts.

|Name| Knockout Syntax | Magento Syntax |
|--- | -------- | -------|
|if             |`<!-- ko if: isVisible--><!-- /ko -->`                                         | `<if args="isVisible"></if>`                                          |
|               |`<div data-bind="if: isVisible"></div>`                                        | `<div if="isVisible"></div>`                                          |
|ifnot          |`<!-- ko ifnot: isVisible--><!-- /ko -->`                                      | `<ifnot args="isVisible"></ifnot>`                                    |
|               |`<div data-bind="ifnot: isVisible"></div>`                                     | `<div ifnot="isVisible"></div>`                                       |
|text           |`<!-- ko text: 'Some text' --><!-- /ko -->`                                    | `<text args="'Some text'">`                                           |
|               |`<div data-bind="text: 'Some text'"></div>`                                    | `<div text="'Some text'"></div>`                                      |
|with           |`<!-- ko with: element --><!-- /ko -->`                                        | `<with args="element">`                                               |
|               |`<div data-bind="with: element"></div>`                                        | `<div with="element"></div>`                                          |
|foreach        |`<!-- ko foreach: elements --><!-- /ko -->`                                    | `<each args="elements">`                                              |
|               |`<div data-bind="foreach: elements"></div>`                                    | `<div each="elements"></div>`                                         |
|component      |`<!-- ko component: 'componentName' --> <!-- /ko -->`                          | `<component args="'componentName'">`                                  |
|               |`<div data-bind="component: 'componentName'"> </div>`                          | `<div component="'componentName'"> </div>`                            |
|css            |`<div data-bind="css: {_visible: isVisible}"> </div>`                          | `<div css="_visible: isVisible"> </div>`                              |
|attr           |`<div data-bind="attr: {title: title}"> </div>`                                | `<div attr="title: title"> </div>`                                    |
|style          |`<div data-bind="style: {color: redColor}"> </div>`                            | `<div ko-style="color: redColor"> </div>`                             |
|html           |`<div data-bind="html: '<span/>'"> </div>`                                     | `<div html="'<span/>'"> </div>`                                       |
|click          |`<div data-bind="click: onClick"> </div>`                                      | `<div click="onClick"> </div>`                                        |
|event          |`<div data-bind="event: {mouseover: showEl}"> </div>`                          | `<div event="mouseover: showEl"> </div>`                              |
|template       |`<div data-bind="template: templateUrl"> </div>`                               | `<div template="templateUrl"> </div>`                                 |
|submit         |`<form data-bind="submit: onSubmit"> </form>`                                  | `<form submit="onSubmit"> </form>`                                    |
|options        |`<select data-bind="options: optionsList"> </select>`                          | `<select options="optionsList"> </select>`                            |
|selectedOptions|`<select data-bind="options: optionsList, selectedOptions: value"> </select>`  | `<select options="optionsList" selectedOptions="value"> </select>`    |
|optionsText    |`<select data-bind="options: optionsList, optionsText: 'label'"> </select>`    | `<select options="optionsList" optionsText="'label'"> </select>`      |
|optionsText    |`<select data-bind="options: optionsList, optionsValue: 'value'"> </select>`   | `<select options="optionsList" optionsValue="'value'"> </select>`     |
|enable         |`<input data-bind="enable: isEnabled"/>`                                       | `<input enable="isEnabled"/>`                                         |
|disable        |`<input data-bind="disable: !isEnabled"/>`                                     | `<input ko-disabled="!isEnabled"/>`                                   |
|hasFocus       |`<input data-bind="hasFocus: onFocus"/>`                                       | `<input ko-focused="onFocus"/>`                                       |
|textInput      |`<input data-bind="textInput: value"/>`                                        | `<input textInput="value"/>`                                          |
|value          |`<input data-bind="value: value"/>`                                            | `<input ko-value="value"/>`                                           |
|checked        |`<input type="checkbox" data-bind="checked: isChecked"/>`                      | `<input type="checkbox" ko-checked="isChecked"/>`                     |
|checkedValue   |`<input type="checkbox" data-bind="checkedValue: $data, checked: isChecked"/>` | `<input type="checkbox" checkedValue="$data" checked="isChecked"/>`   |
{:style="table-layout:auto"}
