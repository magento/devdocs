---
group: UI_Components_guide
subgroup: concepts
title: About the uiClass library
menu_title: About the uiClass library
menu_order: 60
version: 2.1
---

## What is `uiClass`?

The `uiClass` is an abstract class from which all components are extended. The `uiClass` is a low-level class and is rarely used as direct parent for UI component classes.

`uiClass` source code is `<UI_Module_dir>/view/base/web/js/lib/core/class.js`, in the {{site.data.var.ce}} github repository: [app/code/Magento/Ui/view/base/web/js/lib/core/class.js]({{ site.mage2100url }}app/code/Magento/Ui/view/base/web/js/lib/core/class.js)

## Commonly used uiClass methods

The uiClass class introduces the architecture of UI components through the following methods:

*  The `extend()` method implements inheritance of UI components. The `extend()` returns new class. The `extend()` method gets a {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} object as a parameter, and then extends the base object with the properties and methods of the argument's object. The properties of the argument's object have higher priority than base object's properties.
   As an example:
    %componentName%.extend(%JavaScript_extender_object%);

* The `initConfig()` method processes the UI component's configurations. The `initConfig()` method gets as a parameter the JavaScript configuration object, which is then merged with the default configuration (declared in the UI Component that calls the `initConfig()` method) and in the parent {% glossarytooltip 9bcc648c-bd08-4feb-906d-1e24c4f2f422 %}UI component{% endglossarytooltip %}. This resulting configuration is then set as first level properties in the current UI component instance.

  As an example:
{%highlight js%}
	defaults: {
		myFirstProperty: 0,
		mySecondProperty: 1
	}

	Before executing initConfig method:
	console.log(this.myFirstProperty) // Undefined
	console.log(this.mySecondProperty) // Undefined

	After executing initConfig method:
	console.log(this.myFirstProperty) // 0
	console.log(this.mySecondProperty) // 1
{%endhighlight%}

* The `initialize()` method is called during instantiation. It can be used to add custom functionality executed only once, during component instance creation.

As an example:

{%highlight js%}
	initialize: function () {
		%yourMethodName%();

		return this;
	}
{%endhighlight%}

* The `_super()` method calls the parent UI component method with the same name as the `_super()` method's caller; if that method does not exists in the parent UI component, then the method tries to find it higher in the inheritance chain.
As an example:

{%highlight js%}
	initialize: function () {
		this._super(); //_super will call parent's `initialize` method here

		return this;
	}
{%endhighlight%}

### Commonly used uiClass properties {#uiclass_properties}

The `defaults` property declares the list of properties of a UI component's instance. Also it declares communications between components if needed.

As an example:
{%highlight js%}
	defaults: {
		%yourCustomProperty%: '',
		imports: {
            %yourCustomProperty%: '%anotherComponentLink%',
            disabled: 'checked'
        },
	}
{%endhighlight%}
