---
layout: default
group: UI_Components_guide
subgroup: concepts
title: uiElement class
menu_title: uiElement class
menu_node:
menu_order: 1
version: 2.1
github_link: ui_comp_guide/concepts/ui_comp_uielement_concept.md
---

## About the uiElement class

The uiElement class is a direct successor of the uiClass [link uiClass document] library.  The path is `UI_Module_dir>/view/base/web/js/lib/core/element/element.js`. The uiElement class should be used as direct parent component in cases when we know that the current component will be the last link in component hierarchy chain.

### uiElement methods

1. `initLinks` - this method implements component communication by using the `links.js` file in (link to this file in GitHub) (<UI_Module_dir>/view/base/web/js/lib/core/element/links.js). The `initLinks` method creates interface to set it. (Link to UI component communication topic).

2. `initObservable` - this method allows you to declare observable variables within the same instance. There are many ways to declare an observable variable; for details refer to  "How to work with observable variable." (Add link)

As an example:

 initObservable: function () {
    this.track('childTemplate')
    this.observe([
        '%myVariable1%',
        '%myVariable2%'
    ]);
return this;
}

  3. `initModules` - this method initializes external UI Components instances and links them to local variables. This method works with the `modules` section of the configuration, where we define the name of the external instance and the local variable. The `module` section is an object where each key is the variable's name and each values is the instance's name. A develeloper does not need to be concerned with the instantiation of the module, because the `initModules` method will resolve the variables when the instance are instantiated.

As an example:
// Config where the `modules` property is declared
defaults: {
modules: {
        '%myProperty%': '%linkToTheComponent%'
    }
}

4. getTemplate - The`getTemplate` method returns a file path to UI component's template.

5. hasTemplate -  The `hasTemplate` method verifies that a `template` property was specified in the instance configuraiton.
