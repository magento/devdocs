---
group: jsdg
subgroup: 1_Javascript
title: Use custom JavaScript
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/custom_js.html
 - /guides/v1.0/frontend-dev-guide/javascript/custom_js.html
---

## Overview {#custom_js_overview}

This topic discusses how to use custom {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} components with the components provided by Magento or having replaced them with custom implementations.

We strongly recommend not changing the source code of default Magento components and widgets. All customizations must be implemented in custom modules or themes.

## Add a custom JS component 

To add a custom JS component (module), take the following steps:

1. Place the custom component source file in one of the following locations:
	- Your theme JS files: `<theme_dir>/web/js` or `<theme_dir>/<VendorName>_<ModuleName>/web/js`. In this case the component is available in your theme and its [child themes]({{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html). 
	- Your module view JS files: `<module_dir>/view/frontend/web/js`. In this case the component is available in all modules and themes (if your module is enabled). 

2. Optionally, in the corresponding {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} or theme, create a `requirejs-config.js` configuration file, if it does not yet exist there and set path for your resource.

## Replace a default JS component {#js_replace}

To use a custom implementation of an existing Magento JS component:
Place the custom component source file in one of the following
locations:

-   Your theme JS files: \`/web/js\` or \`/\_/web/js\`
-   Your module view JS files: `<module_dir>/view/frontend/web/js`

Create a RequireJS configuration file `requirejs-config.js`, having
specified the following:
```javascript
var config = {
  "map": {
    "*": {
      "<default_component>": "<custom_component>"
    }
  }
};
```

-   `<default_component>`: the name of the default component you replace
-   `<custom_component>`: the name of the custom component

For example, if you want to use custom `navigation-menu.js` script instead of the default menu widgets, your `requirejs-config.js` should contain the following: 
```javascript
var config = {
  "map": {
    "*": {
      "menu": "js/navigation-menu",
      "mage/backend/menu": "js/navigation-menu"
    }
  }
};
```
  
Place your `requirejs-config.js` file in one of the following
directories (according to the location of your custom script, see step 1
of this procedure):

-   Your {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019
    %}theme{% endglossarytooltip %} files: `<theme_dir>`
-   Your module view files: `<module_dir>/view/frontend`

This way your custom JS component is used instead of the {% glossarytooltip 3425e9ae-5edf-4fc6-b645-06023e9e5e5b %}Magento component{% endglossarytooltip %} in all entries all over the {% glossarytooltip b00459e5-a793-44dd-98d5-852ab33fc344 %}frontend{% endglossarytooltip %} area.

## Extend a default JS component {#extend_js}

You can add a custom JS component/widget, which will extend a default Magento component/widget.

### Extend Magento widget {#extend_js_widget}

To extend a default Magento {% glossarytooltip 5bfa8a8e-6f3e-4fed-a43e-62339916f02e %}jQuery{% endglossarytooltip %} widget, create `<your_widget_name>.js` with the following contents:

```javascript
define([
  'jquery',
  'jquery/ui',
  'mage/<widget.name>' // usually widget can be found in /lib/web/mage dir
], function($){
 
  $.widget('<your_namespace>.<your_widget_name>', $.mage.<widget.name>, { ... });
 
  return $.<your_namespace>.<your_widget_name>;
});
```

Where the following notation is used:
-   `<your_namespace>.<your_widget_name>` - the name of your custom {%
    glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{%
    endglossarytooltip %}. According to the jQuery widgets naming
    convention, must contain a {% glossarytooltip
    621ef86b-7314-4fbc-a80d-ab7fa45a27cb %}namespace{%
    endglossarytooltip %} and name.
-   `mage.<widget.name>` - the name of the Magento widget that you
    extend.

For information about how to initialize your custom widget in a `.phtml` template, see the [JavaScript initialization]({{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html){:target="_blank"} topic.

### Extend a default Ui component {#extend_js_component}

To extend a default JS Ui component, your custom script must contain the following:

```javascript
define([
  '<component_path>'
], function(<component_alias>){
 
  return <component_alias>.extend({
 
    defaults: { ... }, // properties with default values
    ... // methods of your component
  });
});
```

Where the following notation is used:

-   `<component_path>`: path to the default component that you extend
-   `<component_alias>`: variable containing the default component that you extend

For example, `Filters.js` script extends the default `filters.js`:

```javascript
define([
  'Magento_Ui/js/grid/filters/filters'
], function(Filters){
 
  return Filters.extend({
 
    defaults: { ... }, // properties with default values
    ... // methods of your component
  });
});
```
For information about how to initialize your custom JS component in a `.phtml` template, see the [JavaScript initialization] topic.

## Disable default Magento JS {#disable_default_js}

To disable the auto-loading of default Magento JS components and widget
initialization:

1.  Create a `requirejs-config.js` file with the following content: {%
    highlight JavaScript %} var config = { deps: \[ \] }; {%
    endhighlight %}
2.  Put the `requirejs-config.js` file in one of the following
    locations:
    -   Your custom theme files: `<theme_dir>`
    -   Your custom module files: `<module_dir>/view/frontend`
    
If you need to enable the loading of default Magento JS components and widget initialization on a certain stage, add the following code in your JS script:

```javascript
$(mage.apply);
```

#### Related topic

- [JavaScript resources in Magento]({{ page.baseurl }}/javascript-dev-guide/javascript/js-resources.html)
- [About AMD modules and RequireJS]({{ page.baseurl }}/javascript-dev-guide/javascript/requirejs_concept.html)
  
[JavaScript initialization]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html