---
layout: default
group: UI_Components_guide
subgroup: concepts
title: uiElement class
menu_title: uiElement class
menu_node:
menu_order: 7
version: 2.1
github_link: ui_comp_guide/concepts/ui_comp_uielement_concept.md
---

## {{page.menu_title}}  
{:.no_toc}

* TOC
{:toc}

## What is the uiElement class

The uiElement class is a direct successor of the [uiClass library]({{page.baseur}}ui_comp_guide/concepts/ui_comp_uiclass_concept.html). The source file is stored in `UI_Module_dir>/view/base/web/js/lib/core/element/element.js`. The uiElement class should be used as direct parent component in cases when we know that the current component will be the last link in component hierarchy chain.

<p class="q">why we call uiClass a component, but uiCollection - a class</p>


## Commonly used uiElement methods

- The `initLinks()` method implements component communication by using the [`links.js`]({{site.mage2100url}}app/code/Magento/Ui/view/base/web/js/lib/core/element/links.js). The `initLinks()` method creates an interface to set it. 

- The `initObservable` method allows you to declare observable variables within the same instance. There are many ways to declare an observable variable; for details refer to  "How to work with observable variable." (Add link)

As an example:

{%highlight js%}
 initObservable: function () {
    this.track('childTemplate')
    this.observe([
        '%myVariable1%',
        '%myVariable2%'
    ]);
return this;
}

{%endhighlight%}

* The `initModules` method initializes external UI components instances and links them to local variables. This method works with the `modules` section of the configuration, where we define the name of the external instance and the local variable. The `module` section is an object where each key is the variable's name and each values is the instance's name. A developer does not need to be concerned with the instantiation of the module, because the `initModules()` method will resolve the variables when the instance are instantiated.

As an example:

{%highlight js%}
// Config where the `modules` property is declared
defaults: {
modules: {
        '%myProperty%': '%linkToTheComponent%'
    }
}
{%endhighlight%}

* the `getTemplate()`method returns a file path to UI component's template.

* The `hasTemplate()` method verifies that a `template` property was specified in the instance configuration.
