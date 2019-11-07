---
group: javascript-developer-guide
subgroup: 1_Javascript
title: Use custom JavaScript
---

## Overview {#custom_js_overview}

This topic discusses how to use custom [JavaScript](https://glossary.magento.com/javascript) components with the components provided by Magento or having replaced them with custom implementations.

We strongly recommend not changing the source code of default Magento components and widgets. All customizations must be implemented in custom modules or themes.

## Add a custom JS component

To add a custom JS component (module), take the following steps:

1. Place the custom component source file in one of the following locations:
   -  Your theme JS files: `<theme_dir>/web/js` or `<theme_dir>/<VendorName>_<ModuleName>/web/js`. In this case the component is available in your theme and its [child themes]({{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html).
   -  Your module view JS files: `<module_dir>/view/frontend/web/js`. In this case the component is available in all modules and themes (if your module is enabled).

1. Optionally, in the corresponding [module](https://glossary.magento.com/module) or theme, create a `requirejs-config.js` configuration file, if it does not yet exist there and set path for your resource. The RequireJS configuration file can be placed in one of the following locations:

   -  Your theme: `<theme_dir>`
   -  Module within your theme: `<theme_dir>/<module_dir>`
   -  Your module (depending on the needed area - **base**, **frontend**, **adminhtml**): `<module_dir>/view/<area>`

## Replace a default JS component {#js_replace}

To use a custom implementation of an existing Magento JS component:
Place the custom component source file in one of the following
locations:

-  Your theme JS files: `/web/js`
-  Your module view JS files: `<module_dir>/view/frontend/web/js`

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

-  `<default_component>`: the name of the default component you replace
-  `<custom_component>`: the name of the custom component

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

-  Your [theme](https://glossary.magento.com/theme) files: `<theme_dir>`
-  Your module view files: `<module_dir>/view/frontend`

This way your custom JS component is used instead of the [Magento component](https://glossary.magento.com/magento-component) in all entries all over the [frontend](https://glossary.magento.com/frontend) area.

## Extend a default JS component {#extend_js}

You can add a custom JS component/widget, which will extend a default Magento component/widget.

### Extend Magento widget {#extend_js_widget}

To extend a default Magento [jQuery](https://glossary.magento.com/jquery) widget, create `<your_widget_name>.js` with the following contents:

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

-  `<your_namespace>.<your_widget_name>` - the name of your custom [widget](https://glossary.magento.com/widget). According to the jQuery widgets naming
    convention, must contain a [namespace](https://glossary.magento.com/namespace) and name.
-  `mage.<widget.name>` - the name of the Magento widget that you
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

-  `<component_path>`: path to the default component that you extend
-  `<component_alias>`: variable containing the default component that you extend

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

To disable the auto-loading of default Magento JS components and widget initialization:

1. Create a `requirejs-config.js` file with the following content:

    ```javascript
    var config = { deps: [ ] };
    ```

1. Put the `requirejs-config.js` file in one of the following
  locations:

   -  Your custom theme files: `<theme_dir>`
   -  Your custom module files: `<module_dir>/view/frontend`

If you need to enable the loading of default Magento JS components and widget initialization on a certain stage, add the following code in your JS script:

```javascript
$(mage.apply);
```

{:.ref-header}
Related topic

-  [JavaScript resources in Magento]({{ page.baseurl }}/javascript-dev-guide/javascript/js-resources.html)
-  [About AMD modules and RequireJS]({{ page.baseurl }}/javascript-dev-guide/javascript/js-resources.html)

[JavaScript initialization]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html
