---
group: javascript-developer-guide
title: JavaScript mixins
---

A [mixin] is a class whose methods are added to, or mixed in, with another class.

A base class includes the methods from a mixin instead of inheriting from it.
This allows you to add to or augment the behavior of the base class by adding different mixins to it.

This topic contains information on how you can use JavaScript mixins to overwrite component methods in Magento.

## Mixin scope

The scope of a module's mixin depends on its directory location under the `view` directory.
This allows you to target component instances in specific areas in Magento.

The following table maps a directory location to the [application area] a mixin affects:

| Directory        | Scope                                                                |
| ---------------- | -------------------------------------------------------------------- |
| `view/frontend`  | Storefront                                                           |
| `view/adminhtml` | Admin panel                                                          |
| `view/base`      | All areas (unless a specific `frontend` or `adminhtml` entry exists) |
{:style="table-layout:auto"}

## Mixin files

### Location

Mixins are JavaScript files located under the `web/js` directory under an area specific directory.
The mixin file can be nested under more directories as long as those directories are under `web/js`.

### Format

A mixin in Magento is written as an [AMD module] that returns a callback function.
This function accepts a target component(module) as an argument and returns a module.

This allows you to return a new instance of the target component with your modifications attached to it before it is used in the application.

### Examples

#### Extend UI Component

The following is an example of a mixin that extends the `target` component with a function that introduces a new `blockVisibility` property to a column element.

**File:** `OrangeCompany/Sample/view/base/web/js/columns-mixin.js`

```javascript
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

#### Extend jQuery Widget

The following is an example of a mixin that extends the [modal widget][] with a function that adds confirmation for a modal closing.

**File:** `OrangeCompany/Sample/view/base/web/js/modal-widget-mixin.js`

```javascript
define(['jquery'], function ($) {
    'use strict';

    var modalWidgetMixin = {
        options: {
            confirmMessage: "Please, confirm modal closing."
        },

        /**
         * Added confirming for modal closing
         *
         * @returns {Element}
         */
        closeModal: function () {
            if (!confirm(this.options.confirmMessage)) {
                return this.element;
            }

            return this._super();
        }
    };

    return function (targetWidget) {
        // Example how to extend a widget by mixin object
        $.widget('mage.modal', targetWidget, modalWidgetMixin); // the widget alias should be like for the target widget

        return $.mage.modal; //  the widget by parent alias should be returned
    };
});
```

#### Extend JS Object

Another use-case for the JS mixin is when the base Javascript file returns an object. In this case, a wrapper is necessary. The following example mixin extends the `setHash` method of [step navigator object][]. Here, `this._super()` is the base method that can be called if needed.

**File:** `OrangeCompany/Sample/view/frontend/web/js/model/step-navigator-mixin.js`

```javascript
define([
    'mage/utils/wrapper'
], function (wrapper) {
    'use strict';

    return function (stepNavigator) {
        stepNavigator.setHash = wrapper.wrapSuper(stepNavigator.setHash, function (hash) {
            this._super(hash);
            // add extended functionality here or modify method logic altogether
        });

        return stepNavigator;
    };
});
```

#### Extend JS Function

The following is an example of a mixin that adds additional functionality to the [proceed to checkout function][].

**File:** `OrangeCompany/Sample/view/frontend/web/js/proceed-to-checkout-mixin.js`

```javascript
define([
    'mage/utils/wrapper'
], function (wrapper) {
    'use strict';

    return function (proceedToCheckoutFunction) {
        return wrapper.wrap(proceedToCheckoutFunction, function (originalProceedToCheckoutFunction, config, element) {
            originalProceedToCheckoutFunction(config, element);
            // add extended functionality here
        });
    };
});
```

## Declaring a mixin

Mixins are declared in the `mixins` property in the `requirejs-config.js` configuration file.
This file must be created in the same area specific directory the mixin is defined in.

The mixins configuration in the `requirejs-config.js` associates a target component with a mixin using their paths.

### Example

The following is an example of a `requirejs-config.js` file that adds the `columns-mixin`, `modal-widget-mixin`, `step-navigator-mixin`, and `proceed-to-checkout-mixin` mixins, which were defined in the previous examples, to the [grid column component][], [modal widget][], [step navigator object][], and [proceed to checkout function][].

**File:** `OrangeCompany/Sample/view/base/requirejs-config.js`

```javascript
var config = {
 config: {
     mixins: {
         'Magento_Ui/js/grid/controls/columns': {
             'OrangeCompany_Sample/js/columns-mixin': true
         },
         'Magento_Ui/js/modal/modal': {
             'OrangeCompany_Sample/js/modal-widget-mixin': true
         },
         'Magento_Checkout/js/model/step-navigator': {
             'OrangeCompany_Sample/js/model/step-navigator-mixin': true
         },
         'Magento_Checkout/js/proceed-to-checkout': {
             'OrangeCompany_Sample/js/proceed-to-checkout-mixin': true
         }
     }
 }
};
```

## Mixin examples in Magento

The following is a list of files in the [`Magento_CheckoutAgreement`] module that declare and define mixins that modify checkout behavior:

*  [`view/frontend/requirejs-config.js`]
*  [`view/frontend/web/js/model/place-order-mixin.js`]
*  [`view/frontend/web/js/model/set-payment-information-mixin.js`]

## Related reading

*  [About AMD modules and RequireJS]
*  [Configure JS resources]

[mixin]: https://en.wikipedia.org/wiki/Mixin
[application area]: {{ page.baseurl }}/architecture/archi_perspectives/components/modules/mod_and_areas.html
[AMD module]: https://en.wikipedia.org/wiki/Asynchronous_module_definition
[grid column component]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/grid/controls/columns.js
[step navigator object]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Checkout/view/frontend/web/js/model/step-navigator.js
[proceed to checkout function]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Checkout/view/frontend/web/js/proceed-to-checkout.js
[`view/frontend/requirejs-config.js`]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/CheckoutAgreements/view/frontend/requirejs-config.js
[`view/frontend/web/js/model/place-order-mixin.js`]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/CheckoutAgreements/view/frontend/web/js/model/place-order-mixin.js
[`view/frontend/web/js/model/set-payment-information-mixin.js`]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/CheckoutAgreements/view/frontend/web/js/model/set-payment-information-mixin.js
[`Magento_CheckoutAgreement`]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/CheckoutAgreements
[About AMD modules and RequireJS]: {{ page.baseurl }}/javascript-dev-guide/javascript/js-resources.html#requirejs-library
[modal widget]: {{ page.baseurl }}/javascript-dev-guide/widgets/widget_modal.html
[Configure JS resources]: {{ page.baseurl }}/javascript-dev-guide/javascript/js-resources.html
