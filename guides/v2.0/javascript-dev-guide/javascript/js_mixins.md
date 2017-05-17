---
layout: default
group: jsdg
subgroup: 1_Javascript
title: Using JavaScript mixins
menu_title: Using JavaScript mixins
menu_order: 30
version: 2.0
github_link: javascript-dev-guide/javascript/js_mixins.md
---

{::options syntax_highlighter="rouge" /}

This topic describes how to use JavaScript mixins to overwrite [JavaScript components']({{page.baseurl}}javascript-dev-guide/javascript/js_overview.html#js_terms) methods in Magento.


## Overview of JS mixins

One of the ways to implement {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} mixins is declaring them on the RequireJS loading level. This approach allows to modify (extend/overwrite) result that a JavaScript component returns before it is used anywhere.

The scope of your {% glossarytooltip 1a305bdb-9be8-44aa-adad-98758821d6a7 %}mixin{% endglossarytooltip %} usage depends on the [application area]({{page.baseurl}}architecture/archi_perspectives/components/modules/mod_and_areas.html) it is defined for:

 - `frontend`: the mixin is applied for all usages of the modified JS component on the {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %}
 - `adminhtml`: the mixin is applied for all usages of the modified JS component in the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} panel
 - `base`: the mixin is applied for all all usages of the modified JS component, if nothing else is specified in `frontend` and `adminhtml`

Generally, to add a JS mixin you need to do the following:

1. Define a mixin as a separate [AMD module](https://en.wikipedia.org/wiki/Asynchronous_module_definition). It should return a callback function. This function must get the target JS component (module) as an argument.
2. Declare the AMD {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} you created as a mixin to the target module.

There are more details for each step in the following section.

## Add a JS mixin

To add a JS mixin take the following steps:

1. In your custom module, define a mixin as a separate AMD module that returns a callback function. Add the mixin file anywhere in the `<your_module_dir>/view/%area%/web` directory. In this notation `%area%` stands for the [application area], and might be one of the following: `frontend`, `backend`, or `base`. There are no strict requirements for the mixin file naming.

   **Sample mixin**

   `Orange/Sample/view/base/web/js/columns-mixin.js`:

   ``` javascript
define(function () {
    'use strict';

    var mixin = {

        /**
         *
         * @param {Column} elem
         */
        isDisabled: function (elem) {
            return elem.blockVisibility || this._super();
        }
    };

    return function (target) { // target == Result that Magento_Ui/.../columns returns.
        return target.extend(mixin); // new result that all other modules receive
    };
});

   ```
   This sample mixin introduces a new `blockVisibility` property for [Grid](http://devdocs.magento.com/guides/v2.1/ui_comp_guide/components/ui-listing-grid.html) columns.
2. In the `requirejs-config.js` configuration file in your module, declare the AMD module you created as a mixin to the target module. The file must be located in the `<your_module_dir>/view/%area%` directory. Use the following syntax:

   ``` javascript
var config = {
    config: {
        mixins: {
            '%path/to/target/component%': {
                '%path/to/mixin/component%': true
            }
        }
    }
};
   ```

   where:

   - `%path/to/target/component%` is the RequireJS ID (alias/path) of the target component (module)
   - `%path/to/mixin/component%` is the RequireJS ID (alias/path) of the mixin
   - `mixins` is the RequireJS ID (alias/path) for the `mage/requirejs/mixin.js` file

   For details about the `config` RequireJS option, see [http://requirejs.org/docs/api.html#config-moduleconfig](http://requirejs.org/docs/api.html#config-moduleconfig).

   **Sample RequireJS configuration file**

   `<Orange_Sample_module_dir>/view/base/web/js/requirejs-config.js`:

   ``` javascript
var config = {
    config: {
        mixins: {
            'Magento_Ui/js/grid/controls/columns': {
                'Orange_Sample/js/columns-mixin': true
            }
        }
    }
};
   ```

## Example of usage
For example of using JavaScript mixins, see the Magento_CheckoutAgreement module files:

 - [Magento/CheckoutAgreements/view/frontend/web/js/model/place-order-mixin.js]({{site.mage2100url}}app/code/Magento/CheckoutAgreements/view/frontend/web/js/model/place-order-mixin.js)
 - [Magento/CheckoutAgreements/view/frontend/requirejs-config.js]({{site.mage2100url}}app/code/Magento/CheckoutAgreements/view/frontend/requirejs-config.js)

## Related reading

- [About AMD modules and RequireJS](http://devdocs.magento.com/guides/v2.1/ui_comp_guide/concepts/ui_comp_requirejs_concept.html)
- [Configure JS resources]({{page.baseurl}}javascript-dev-guide/javascript/js-resources.html)
