---
layout: default
group: UI_Components_guide
subgroup: concepts
title: About the uiCollection class
menu_title: About the uiCollection class
menu_order: 12
version: 2.1
github_link: ui_comp_guide/concepts/ui_comp_uicollection_concept.md
---

## {{page.menu_title}}  
{:.no_toc}

* TOC
{:toc}

## What is `uiCollection` 

The `uiCollection` library class should be used as a base class by any components that contains a collection of child UI components. The path in the Magneto code base is `<UI_Module_dir>/view/base/web/js/lib/core/collection.js`. `uiCollection` inherits from the [uiElement class]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uielement_concept.md). 

## Commonly used `uiCollection` methods

The `uiCollection` class implements the following methods:

* The `initElement()` method allows you to add custom functionality to a child UI component or to the current UI component at the moment when the child UI component initializes. The `initElement()` method gets the child UI component instance as a parameter.
  
  Example:

  {%highlight js%}
  initElement: function (childInstance) {
      childInstance.%customProperty% = 21;
      this.%currentComponentProperty% = 42;
  }
  {%endhighlight%}

* The `destroy()` method removes the following for the child components and itself:
	* link to the component in `uiRegistry`
	* link to the component in the parent component
	* event listeners


  Example:

{%highlight js%}
    this.destroy();
{%endhighlight%}

* The `getChild()` method returns an element from the collection of child UI components. 
 
  Example:
{%highlight js%}
    this.getChild(childIndex)
{%endhighlight%}

  where `childIndex` is the value of the child element's `index` property.


## Commonly used `uiCollection` properties

* `elems` is the observable property that contains the collection of child UI components.

  Example:

{%highlight js%}
console.log(this.elems());

// [
//   %uiComponentInstance 1 %,
//   %uiComponentInstance 2 %,
//   %uiComponentInstance 3 %,
//   %uiComponentInstance 4 %
// ]
{%endhighlight%}

* `childDefaults` can be used to set the children defaults: properties from `childDefaults` are set into child elements' [`defaults` property]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uiclass_concept.html#uiclass_properties).