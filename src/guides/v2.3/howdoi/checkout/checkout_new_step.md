---
layout: tutorial
group: how-do-i
subgroup:
title: Add a new checkout step
subtitle: Customize Checkout
menu_order: 1
level3_subgroup: checkout-tutorial
functional_areas:
  - Checkout
---

This topic describes how to create the [frontend](https://glossary.magento.com/frontend) part of the component, implementing a checkout step, and how to add it to the checkout flow.

The default Magento [Checkout](https://glossary.magento.com/checkout) consists of two steps:

-  Shipping Information
-  Review and Payments Information

You can add a custom checkout step, it should be implemented as a [UI component](https://glossary.magento.com/ui-component). For the sake of compatibility, upgradability and easy maintenance, do not edit the default Magento code, add your customizations in a separate [module](https://glossary.magento.com/module).

1. [Create the view part of the checkout step component](#create-view).
1. [Add your step to the Checkout page layout](#checkout).
1. [Create mixins for payment and shipping steps (optional)](#create-mixin).

## Step 1: Create the view part of the checkout step component {#create-view}

To create the view part of the new checkout step:

1. Add a module directory (not covered in this topic). See [Build your module]({{ page.baseurl }}/extension-dev-guide/build/build.html) for details). All custom files must be stored there. For your checkout customization to be applied correctly, your custom module should depend on the `Magento_Checkout` module. Do not use `Ui` for your custom module name, because `%Vendor%_Ui` notation, required when specifying paths, might cause issues.
1. [Create the `.js` file implementing the view model](#component).
1. [Create an `.html` template for the component](#html-template).

### Add the JavaScript file implementing the new step {#component}

A new checkout step must be implemented as UI component. That is, its [JavaScript](https://glossary.magento.com/javascript) implementation must be a JavaScript module.

The file must be stored under the `<your_module_dir>/view/frontend/web/js/view` directory.

 {:.bs-callout-info}
`<your_module_dir>` notation stands for the path to your module directory from the root directory. Usually it will be one of the following: `app/code/<YourVendor>/<YourModule>` or `vendor/<yourvendor>/module-<module>-<name>`. For more details see [Conventional notations for paths to modules and themes]({{ page.baseurl }}/frontend-dev-guide/conventions.html)

A sample `my-step-view.js` with comments follows:

```js
define(
    [
        'ko',
        'uiComponent',
        'underscore',
        'Magento_Checkout/js/model/step-navigator'
    ],
    function (
        ko,
        Component,
        _,
        stepNavigator
    ) {
        'use strict';
        /**
        *
        * mystep - is the name of the component's .html template,
        * <Vendor>_<Module>  - is the name of the your module directory.
        *
        */
        return Component.extend({
            defaults: {
                template: '<Vendor>_<Module>/mystep'
            },

            //add here your logic to display step,
            isVisible: ko.observable(true),

            /**
            *
            * @returns {*}
            */
            initialize: function () {
                this._super();
                // register your step
                stepNavigator.registerStep(
                    //step code will be used as step content id in the component template
                    'step_code',
                    //step alias
                    null,
                    //step title value
                    'Step Title',
                    //observable property with logic when display step or hide step
                    this.isVisible,

                    _.bind(this.navigate, this),

                    /**
                    * sort order value
                    * 'sort order value' < 10: step displays before shipping step;
                    * 10 < 'sort order value' < 20 : step displays between shipping and payment step
                    * 'sort order value' > 20 : step displays after payment step
                    */
                    15
                );

                return this;
            },

            /**
        * The navigate() method is responsible for navigation between checkout step
        * during checkout. You can add custom logic, for example some conditions
        * for switching to your custom step
        * When the user navigates to the custom step via url anchor or back button we_must show step manually here
        */
            navigate: function () {

                this.isVisible(true);
            },

            /**
            * @returns void
            */
            navigateToNextStep: function () {
                stepNavigator.next();
            }
        });
    }
);
```

### Add the .html template {#html-template}

In the module directory, add the `.html` template for the component. It must be located under the `<your_module_dir>/view/frontend/web/template` directory.

A sample `mystep.html` follows:

```html
<!--The 'step_code' value from the .js file should be used-->
<li id="step_code" data-bind="fadeVisible: isVisible">
<div class="step-title" data-bind="i18n: 'Step Title'" data-role="title"></div>
    <div id="checkout-step-title"
         class="step-content"
         data-role="content">

        <form data-bind="submit: navigateToNextStep" novalidate="novalidate">
            <div class="actions-toolbar">
                <div class="primary">
                    <button data-role="opc-continue" type="submit" class="button action continue primary">
                        <span><!-- ko i18n: 'Next'--><!-- /ko --></span>
                    </button>
                </div>
            </div>
        </form>
    </div>
</li>
```

## Step 2: Add your step to the Checkout page layout {#checkout}

For the new step to be displayed on the page, you need to declare it in the Checkout page layout, which is defined in `checkout_index_index.xml`.

So you need to add an [extending]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-extend.html) `checkout_index_index.xml` layout file in the following location: `<your_module_dir>/view/frontend/layout/checkout_index_index.xml`

A sample `checkout_index_index.xml` follows:

```xml
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" layout="1column" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceBlock name="checkout.root">
                <arguments>
                    <argument name="jsLayout" xsi:type="array">
                        <item name="components" xsi:type="array">
                            <item name="checkout" xsi:type="array">
                                <item name="children" xsi:type="array">
                                    <item name="steps" xsi:type="array">
                                        <item name="children" xsi:type="array">
                                            <!-- The new step you add -->
                                            <item name="my-new-step" xsi:type="array">
                                                <item name="component" xsi:type="string">%Vendor%_%Module%/js/view/my-step-view</item>
                                                    <!--To display step content before shipping step "sortOrder" value should be < 1-->
                                                    <!--To display step content between shipping step and payment step  1 < "sortOrder" < 2 -->
                                                    <!--To display step content after payment step "sortOrder" > 2 -->
                                                <item name="sortOrder" xsi:type="string">2</item>
                                                <item name="children" xsi:type="array">
                                                    <!--add here child component declaration for your step-->
                                                </item>
                                            </item>
                                        </item>
                                    </item>
                                </item>
                            </item>
                        </item>
                    </argument>
                </arguments>
        </referenceBlock>
    </body>
</page>
```

## Step 3: Create mixins for payment and shipping steps (optional) {#create-mixin}

If your new step is the first step, you have to create mixins for the payment and shipping steps. Otherwise two steps will be activated on loading of the checkout.

Create a mixin as follows:

1. Create a `Vendor/Module/view/base/requirejs-config.js` file with these contents;

   ```js
   var config = {
       'config': {
           'mixins': {
              'Magento_Checkout/js/view/shipping': {
                  'Vendor_Module/js/view/shipping-payment-mixin': true
              },
              'Magento_Checkout/js/view/payment': {
                  'Vendor_Module/js/view/shipping-payment-mixin': true
              }
          }
       }
   }
   ```

1. Create the mixin. We'll use the same mixin for both payment and shipping:

   ```js
   define(
       [
           'ko'
       ], function (ko) {
           'use strict';

           var mixin = {

               initialize: function () {
                   this.isVisible = ko.observable(false); // set visible to be initially false to have your step show first
                   this._super();

                   return this;
               }
           };

           return function (target) {
               return target.extend(mixin);
           };
       }
   );
   ```

 {:.bs-callout-info}
For your changes to be applied, you might need to [clean layout cache]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html ) and [static view file cache]({{ page.baseurl }}/frontend-dev-guide/cache_for_frontdevs.html#clean_static_cache). For more info on mixins, see [JS Mixins]({{ page.baseurl }}/javascript-dev-guide/javascript/js_mixins.html).
