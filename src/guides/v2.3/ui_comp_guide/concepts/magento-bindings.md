---
group: ui-components-guide
subgroup: concepts
title: Magento binding syntax
---

## Overview

Within HTML templates, Magento gives you the option of using a binding syntax that is simpler and easier to read and write than the standard Knockout binding syntax. The following code snippets help make the comparison.

### Knockout native syntax

```html
<!-- ko if: isVisible -->
    <div class="someClass">
        <!-- ko i18n: 'Some translatable message!' --><!-- /ko -->
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

{:.bs-callout-info}
For better render performance, we recommend using the Knockout native syntax. Magento syntax can render more slowly than the native knockout syntax. When using the Magento syntax, every time the HTML template is loaded for a component, it gets parsed and adjusted accordingly. KnockoutJS knows exactly which bindings it should update. Test both ways if performance is critical.

## Binding map

The table below shows examples of how the Knockout bindings map to their Magento binding counterparts.

|Name| Knockout Syntax | Magento Syntax |
|--- | -------- | -------|
|if             |`<!-- ko if: isVisible--><!-- /ko -->`                                         | `<if args="isVisible"></if>`                                          |
|               |`<div data-bind="if: isVisible"></div>`                                        | `<div if="isVisible"></div>`
|               |`<!-- ko if: getCartParam('summary_count') -->`                                        | `<if args="getCartParam('summary_count')">`                                          |
|ifnot          |`<!-- ko ifnot: isVisible--><!-- /ko -->`                                      | `<ifnot args="isVisible"></ifnot>`                                    |
|               |`<div data-bind="ifnot: isVisible"></div>`                                     | `<div ifnot="isVisible"></div>`
|               |`<!-- ko ifnot: getCartParam('summary_count') -->`                                        | `<ifnot args="getCartParam('summary_count')">`                                       |
|text           |`<!-- ko text: 'Some text' --><!-- /ko -->`                                    | `<text args="'Some text'">`                                           |
|               |`<div data-bind="text: 'Some text'"></div>`                                    | `<div text="'Some text'"></div>`                                      |
|i18n           |`<!-- ko i18n: 'Sign In' --><!-- /ko -->`                                    | `<translate args="'Sign In'"/>`                                  |
|               |`<span data-bind="i18n: 'Sign In'"></span>`                                        | `<span translate="'Sign In'"></span>`                                      |
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
|template       |`<div data-bind="template: {name: 'templateUrl', data: {}}"> </div>`                               | `<div template=" {name: 'templateUrl', data: {}}" ></div>`                                 |
|submit         |`<form data-bind="submit: onSubmit"> </form>`                                  | `<form submit="onSubmit"> </form>`                                    |
|options        |`<select data-bind="options: optionsList"> </select>`                          | `<select options="optionsList"> </select>`                            |
|selectedOptions|`<select data-bind="options: optionsList, selectedOptions: value"> </select>`  | `<select options="optionsList" selectedOptions="value"> </select>`    |
|optionsText    |`<select data-bind="options: optionsList, optionsText: 'label'"> </select>`    | `<select options="optionsList" optionsText="'label'"> </select>`      |
|optionsValue    |`<select data-bind="options: optionsList, optionsValue: 'value'"> </select>`   | `<select options="optionsList" optionsValue="'value'"> </select>`     |
|enable         |`<input data-bind="enable: isEnabled"/>`                                       | `<input enable="isEnabled"/>`                                         |
|disable        |`<input data-bind="disable: !isEnabled"/>`                                     | `<input ko-disabled="!isEnabled"/>`                                   |
|hasFocus       |`<input data-bind="hasFocus: onFocus"/>`                                       | `<input ko-focused="onFocus"/>`                                       |
|textInput      |`<input data-bind="textInput: value"/>`                                        | `<input textInput="value"/>`                                          |
|value          |`<input data-bind="value: value"/>`                                            | `<input ko-value="value"/>`                                           |
|checked        |`<input type="checkbox" data-bind="checked: isChecked"/>`                      | `<input type="checkbox" ko-checked="isChecked"/>`                     |
|                |`<input type="radio" data-bind="value: value, checked: isSelected" />`                      | `<input type="radio" ko-checked="element.isSelected" ko-value="value" />`                     |
|checkedValue   |`<input type="checkbox" data-bind="checkedValue: $data, checked: isChecked"/>` | `<input type="checkbox" checkedValue="$data" ko-checked="isChecked"/>`   |
