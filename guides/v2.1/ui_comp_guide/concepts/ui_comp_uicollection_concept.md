---
layout: default
group: UI_Components_guide
subgroup: concept
title: uiCollection class
menu_title: uiCollection class
menu_order: 1
version: 2.1
github_link: ui_comp_guide/concepts/ui_comp_uicollection_concept.md
---

## About the uiCollection class

The uiCollection class inherits from the uiElement class. This class' file path is `<UI_Module_dir>/view/base/web/js/lib/core/collection.js`. The uiCollection library class should be used as a base class by any components that contain a collection of child UI components. The uiCollection class implements the following methods:

1. initElement - this method allows you to add custom functionality to the current UI component, or to a child UI component when the child UI component initializes. The `initElement` method gets the child UI component instance as a parameter.
As an example:

initElement: function (instance) {
instance.%customPropery% = 21;
}

2. elems - observable property that contains the child UI components collection.
As an example:

console.log(this.elems());
// [
%uiComponentInstance1%,
%uiComponentInstance2%
%uiComponentInstance3%
%uiComponentInstance4%
]
3. destroy - this method is used to remove a child collection and all their dependency
As an example:
this.destroy();

4. getChild - this method returns element from child collection
As an example:
this.getChild(index) - where index is child element index
