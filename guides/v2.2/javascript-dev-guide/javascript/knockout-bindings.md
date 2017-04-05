---
layout: default
group: jsdg
subgroup: 1_Javascript
title: Magento custom Knockout.js bindings 
menu_title: Magento custom Knockout.js bindings
menu_order: 60
version: 2.2
github_link: javascript-dev-guide/javascript/knockout-bindings.md
---

Dictionary
Implemented By: defines path to a module which implements binding.
Value: type of the value accepted by binding. Note that apart from a specified type every value may be wrapped in Knockout's observable.  
Aliases: a list of aliases that can be used to declare the binding as in addition to the standard form used in Knockout ([data-bind="binding: value"]) some bindings may be defined as standalone attributes ([binding="value"]) or nodes (<binding args="value">).
Bindings
afterRender
The "afterRender" binding allows to notify its subscriber when an associated element is inserted into the DOM.
Implemented By: Magento/Ui/view/base/web/js/lib/knockout/bindings/after-render.js
Value: (element: Element, viewModel: Object) => void - Function that will be invoked after the element is rendered.
Aliases: [afterRender]
afterRender binding example
<div afterRender="function (target, viewModel) {
    console.log('Rendered element:', target);
    console.log('Associated view model:' viewModel);
    console.log(this === viewModel);
}"></div>
autoselect
Binding "autoselect" is meant to automatically highlight text of an input element when it receives focus.
Implemented By: Magento/Ui/view/base/web/js/lib/knockout/bindings/autoselect.js
Value: boolean - defines whether binding is enabled (true) or disabled (false).
Aliases: [autoselect]
Autoselect binding example
<!-- as an attribute -->
<input type="text" autoselect/>
 
<!-- in a standard KO form -->
<input type="text" data-bind="autoselect: true"/>
bindHtml
The "bindHtml" binding renders provided string, which represents a collection of HTML elements, inside of the associated node.
On top of that it instantiates all bindings defined for the rendered elements in the scope of a current view model.
Implemented By: Magento/Ui/view/base/web/js/lib/knockout/bindings/bind-html.js
Value: string
Aliases: [bindHtml]
bindHtml example
<div bindHtml="
    <div data-bind='text: \'String from the text binding\''></div>
"></div>
collapsible
The "collapsible" binding provides methods and properties necessary for implementing collapsible panels. It can automatically collapse panel when clicking outside of the associated node, toggle optional CSS class when node changes its visibility and it also comes with additional helper bindings ("toggleCollapsible", "openCollapsible" and "closeCollapsible").
Implemented By: Magento/Ui/view/base/web/js/lib/knockout/bindings/collapsible.js
Value: Object - binding's configuration that may include following properties:
Property Name
Type
Default Value
Description
as	string	$collapsible	Key by which instance of the binding will be accessible in current scope.
closeOnOuter	boolean	true	Whether panel needs to be closed when click happens of its boundaries.
onTarget	boolean	false	Allows to toggle panel's visibility when click happens directly on the target node.
openClass	string	_active	CSS class that will be added to or removed from the target node when panel changes its visibility.
If value is an empty string, then binding won't modify element's classes.
Aliases: [collapsible]
datepicker
Implemented By: Magento/Ui/view/base/web/js/lib/knockout/bindings/datepicker.js
Value: string | Object
Aliases: -
<input type="text" data-bind="datepicker: value"/>
fadeVisible
The "fadeVisible" binding is used to progressively (with an animation effect) change visibility of an element.
Implemented By: Magento/Ui/view/base/web/js/lib/knockout/bindings/fadeVisible.js
Value: boolean - Defines whether the element is visible (true) or hidden (false).
Aliases: -
fadeVisible binding example
<div data-bind="fadeVisible: isVisible">Foo Bar</div>
<button click="function () { isVisible(!isVisible()); }">Toggle</button>
i18n
Implemented By: Magento/Ui/view/base/web/js/lib/knockout/bindings/i18n.js
Value: string
Aliases: [translate], <translate>
i18n binding example
<div data-bind="i18n: 'Translate as a standard knockout binding'"></div>
 
<div translate="'Translate using the attribute'"></div>
 
<translate args="'In a node form'"></translate>
keyboard
The "keyboard" binding allows to set up listeners for the "keypress" event of a specific button.
Implemented By: Magento/Ui/view/base/web/js/lib/knockout/bindings/keyboard.js
Value: [name: number]: (e: KeyboardEvent) => void - A collection in which keys represent a key code and values are callback functions invoked when the associated button is pressed.
Aliases: [keyboard]
Keyboard binding example
<input type="text" keyboard="{
    13: function (e) {
        console.log('Enter key has been pressed!');
    }
}"/>
mageInit
The "mageInit" binding is an adapter for the [data-mage-init] attribute which is primarily used to initialize jQuery widgets on an associated element.  
Implemented By: Magento/Ui/view/base/web/js/lib/knockout/bindings/mage-init.js
Value: [path: string]: Object
Aliases: -
Creating modal window
<div mageInit="{
    'Magento_Ui/js/modal/modal': {
        autoOpen: true,
        buttons: false,
        modalClass: 'modal-system-messages',
        title: 'Hello world!'
    }
}"></div>
optgroup
The "optgroup" binding is a decorator for the standard Knockout's options binding which adds the support of nested options rendering them as the <optgroup> element.
Implemented By: Magento/Ui/view/base/web/js/lib/knockout/bindings/optgroup.js
Value: Array<string> | Array<Object>
Aliases: -
<select data-bind="
    optionsValue: 'value',
    optionsText: 'label',
    optgroup: [{
        label: 'Swedish Cars',
        value: [{
            label: 'Volvo',
            value: 'volvo'
        }, {
            label: 'Saab',
            value: 'saab'      
        }]
    }, {
        label: 'German Cars',
        value: [{
            label: 'Mercedes',
            value: 'mercedes'
        }]
    }]"></select>
outerClick
The "outerClick" binding allows to subscribe for the "click" event that happens outside of the boundaries of the associated element.
Implemented By: Magento/Ui/view/base/web/js/lib/knockout/bindings/outer_click.js
Value: Function - Callback that is invoked when user clicks outside of the element.
Aliases: [outerClick]
outerClick example
<div id="target" outerClick="function () {
    console.log('Clicked outside of the "target" node.');
}"></div>
range
The "range" binding is an adapter for the jQuery UI Slider Widget. Additionally it implements necessary handlers to work with mobile devices.
Implemented By: Magento/Ui/view/base/web/js/lib/knockout/bindings/range.js
Value: Object - configuration that is passed to the Slider Widget.
Aliases: [range]
Range binding example
<div
    class="data-slider"
    range="{
        value: scale,
        min: 1,
        max: 200,
        step: 1
}"></div>
scope
Binding which allows to evaluate descendant nodes in the scope of an object found in the UiRegistry by provided string.
Implemented By: Magento/Ui/view/base/web/js/lib/knockout/bindings/scope.js
Value: string - Component's name by which to perform a lookup in the registry.
Aliases: [ko-scope], <scope>
scope binding example
<!-- as an attribute -->
<div ko-scope="'name.of.component'"></div>
 
<!-- in a standard KO form -->
<div data-bind="scope: 'name.of.component'"></div>
 
<!-- without an extra container node -->
<scope args="'name.of.component'"></scope>