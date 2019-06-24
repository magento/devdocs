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
{:.style="table-layout: auto;"}

## Mixin files

### Location

Mixins are JavaScript files located under the `web/js` directory under an area specific directory. 
The mixin file can be nested under more directories as long as those directories are under `web/js`.

### Format

A mixin in Magento is written as an [AMD module] that returns a callback function.
This function accepts a target component(module) as an argument and returns a module.

This allows you to return a new instance of the target component with your modifications attached to it before it is used in the application.

### Example

The following is an example of a mixin module that extends the `target` component with a function that introduces a new `blockVisibility` property to a column element.

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

## Declaring a mixin

Mixins are declared in the `mixins` property in the `requirejs-config.js` configuration file.
This file must be created in the same area specific directory the mixin is defined in.

The mixins configuration in the `requirejs-config.js` associates a target component with a mixin using their paths.

### Example

The following is an example of a `requirejs-config.js` file that adds the `columns-mixins`, defined in the previous example, to the [grid column component].

**File:** `OrangeCompany/Sample/view/base/requirejs-config.js`

```javascript
var config = {
 config: {
     mixins: {
         'Magento_Ui/js/grid/controls/columns': {
             'OrangeCompany_Sample/js/columns-mixin': true
         }
     }
 }
};
```

## Mixin examples in Magento

The following is a list of files in the [`Magento_CheckoutAgreement`] module that declare and define mixins that modify checkout behavior:

* [`view/frontend/requirejs-config.js`]
* [`view/frontend/web/js/model/place-order-mixin.js`]
* [`view/frontend/web/js/model/set-payment-information-mixin.js`]

## Related reading

* [About AMD modules and RequireJS]
* [Configure JS resources]

[mixin]: https://en.wikipedia.org/wiki/Mixin
[application area]: {{ page.baseurl }}/architecture/archi_perspectives/components/modules/mod_and_areas.html
[AMD module]: https://en.wikipedia.org/wiki/Asynchronous_module_definition
[grid column component]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/grid/controls/columns.js
[`view/frontend/requirejs-config.js`]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/CheckoutAgreements/view/frontend/requirejs-config.js
[`view/frontend/web/js/model/place-order-mixin.js`]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/CheckoutAgreements/view/frontend/web/js/model/place-order-mixin.js
[`view/frontend/web/js/model/set-payment-information-mixin.js`]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/CheckoutAgreements/view/frontend/web/js/model/set-payment-information-mixin.js
[`Magento_CheckoutAgreement`]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/CheckoutAgreements
[About AMD modules and RequireJS]: {{ page.baseurl }}/javascript-dev-guide/javascript/js-resources.html#requirejs-library
[Configure JS resources]: {{ page.baseurl }}/javascript-dev-guide/javascript/js-resources.html
