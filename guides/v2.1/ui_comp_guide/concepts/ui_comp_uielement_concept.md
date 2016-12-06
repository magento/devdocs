---
layout: default
group: UI_Components_guide
subgroup: concepts
title: About the uiElement class
menu_title: About the uiElement class
menu_node:
menu_order: 11
version: 2.1
github_link: ui_comp_guide/concepts/ui_comp_uielement_concept.md
---

## {{page.menu_title}}  
{:.no_toc}

* TOC
{:toc}

## What is the `uiElement` class

The `uiElement` class is a direct successor of the [uiClass library]({{page.baseur}}ui_comp_guide/concepts/ui_comp_uiclass_concept.html). 
When creating a new component, use the `uiElement` class as a direct parent, if your component will be the last in the components hierarchy chain.

`uiElement` source code is `<UI_Module_dir>/view/base/web/js/lib/core/element/element.js`, in the Magento CE github repository: [app/code/Magento/Ui/view/base/web/js/lib/core/element/element.js]({{site.mage2100url}}app/code/Magento/Ui/view/base/web/js/lib/core/element/element.js).


## Commonly used `uiElement` methods

- The `initLinks()` method implements component communication by using [`links.js`]({{site.mage2100url}}app/code/Magento/Ui/view/base/web/js/lib/core/element/links.js).  `initLinks()` introduces processing of the [`exports`, `imports`, `links` and `listens` properties](http://devdocs.magento.com/guides/v2.0/ui-components/ui_components_js.html#comp_link).

- The `initObservable()` method allows you to declare observable variables within the same instance. 
 
  Example:
    
      initObservable: function () {
          this._super();
  
          this.track('childTemplate')
          this.observe([
              '%myVariable1%',
              '%myVariable2%'
          ]);
   
          return this; 
      }
        
  , where:

    - the `observe()` method is a wrapper for the `ko.observable()` and `ko.observableArray()` methods. It converts the properties of the current method into the observable properties.  
`observe([{Boolean} isTracked,] {String|Array|Object} listOfProperties)`:

        - `isTracked` - `{Boolean}`, optional, - defines access usage: whether to use observable properties (`isTracked = false`) or property accessors (`isTracked = true`).
        - `listOfProperties` - `{String}` is treated as space-separated list of properties' names. Initial values will be used from current instance (when corresponding property exist).
        - `listOfProperties` - `{Array}` a list of properties' names. Initial values will be used from current instance (when corresponding property exist).
        - `listOfProperties` - `{Object}` a list of properties' names. Initial values will be used from this object.
    - the `track(listOfProperties)` method is equal to `observe(true, listOfProperties)`.
      The main difference between `observe()` and `track()` is that `observe()` is mainly used without first boolean argument. So it really converts properties to observable functions. It changes how property can be accessed. Otherwise `track()` uses property accessors. So property access remains the same.

      Example:

          this.observable = 1;
          this.observe('observable');

          this.observable(2); // setter
          this.observable();  // getter


          this.trackable = 1;
          this.track('trackable');

          this.trackable = 2; // setter
          this.trackable;     // getter

- The `initModules()` method initializes external UI components' instances and links them to local variables. This method works with the `modules` section of the configuration, where we define the name of the external instance and the local variable. The `modules` section is an object where each key is the variable's name and each value is the instance's name. A developer does not need to be concerned with the instantiation of the module (external instance), because the `initModules()` method will resolve the variable when the instance is instantiated.

  Example:

      // Config, where the `modules` property is declared
      defaults: {
          modules: {
              '%myProperty%': '%linkToTheComponent%'
          }
      }

- The `getTemplate()` method returns a file path to UI component's template.

- The `hasTemplate()` method verifies that the `template` property was specified in the instance configuration.
