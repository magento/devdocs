---
layout: default
group: UI_Components_guide
subgroup: concepts
title: About the uiClass component
menu_title: About the uiClass component
menu_order: 7
version: 2.1
github_link: ui_comp_guide/concepts/ui_comp_uiclass_concept.md
---

## {{page.menu_title}}

{:.no_toc}

* TOC
{:toc}

## What is the uiClass component

The uiClass is an abstract component from which all components are extended. The path in the Magneto code base is `<UI_Module_dir>/view/base/web/js/lib/core/class.js`. The uiClass is low-level component and rarely used as direct parent for another component which implements functional UI.

## Commonly used uiClass methods
The uiClass component implements UI component's architecture through the following methods:

*  The `extend()` method implements inheritance of UI components. The `extend()` method gets a   JavaScript object as a parameter, and then extends the base object with the Javascript object's properties and methods. If the JS object (the extender) has the properties with the same name as the base object, the extender object overwrites the base object's properties.
   As an example: 
    %componentName%.extend(JavaScript_extender_object);

* The `initConfig()` method processes the UI component's configurations. The `initConfig()` method gets as a parameter the JavaScript configuration object, which is then merged with the default configuration (declared in the UI Component that calls the `initConfig()` method) and in the parent UI component. This resulting configuration is then set as first level properties in the current UI component instance.

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

* The `initialize()` method can be used to add custom functionality that is executed when the new component instance is initialized.

As an example:

{%highlight js%}
	initialize: function () {
		%yourMethodName%();

		return this;
	}
{%endhighlight%}

* The `_super()` method calls the parent UI component method with the same name as the `_super()` method's caller; if that method does not exists in the parent UI component, then the method tries to find it up the inheritance chain.
As an example:

{%highlight js%}
	initialize: function () {
		this._super(); //_super will call parent's `initialize` method here

		return this;
	}
{%endhighlight%}

<p class="q">Can we use these methods for any component inheriting from uiClass? How a dev knows that a component inherits from uiClass?</p>

### Commonly used uiClass properties

The `defaults` property declares the default configuration to UI component and communication between components if that needed.

<p class="q">Configuration to?</p>

As an example:
{%highlight js%}
	defaults: {
		%yourCustomProperty%: '',
		imports: {
            %yourCustomProperty%: '%anotherComponentLink%'
        },
	}
{%endhighlight%}