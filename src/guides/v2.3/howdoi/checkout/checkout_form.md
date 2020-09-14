---
layout: tutorial
group: how-do-i
subgroup:
title: Add a new input form to checkout
subtitle: Customize Checkout
menu_order: 9
level3_subgroup: checkout-tutorial
functional_areas:
  - Checkout
---

This topic describes how to add a custom input form (implemented as a UI component) to the [Checkout](https://glossary.magento.com/checkout) page.

Most of the elements, including the default forms on the Checkout page are implemented as UI components. And we recommend your custom form to be a UI component, extending the default [Magento_Ui/js/form/form]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/form.js) component.

Magento provides the ability to add a custom form to any of the checkout steps: Shipping Information, Review and Payment Information, or custom. In order to add a custom form that is a UI component, take the following steps:

1. [Create the JS implementation of the form UI component](#component).
1. [Create the knockout.js HTML template for rendering the form](#template).
1. [Declare the form in the checkout page layout](#layout).

## Prerequisites

[Set Magento to developer mode]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html) while you perform all customizations and debugging.

For the sake of compatibility, upgradability, and easy maintenance, do not edit the default Magento code. Instead, add your customizations in a separate module. For your checkout customization to be applied correctly, your custom module should [depend]({{ page.baseurl }}/extension-dev-guide/build/composer-integration.html) on the `Magento_Checkout` module.

Do not use `Ui` for your custom module name, because `%Vendor%_Ui` notation, required when specifying paths, might cause issues.

## Step 1: Create the JS implementation of the form UI component {#component}

In your `<your_module_dir>/view/frontend/web/js/view/` directory, create a `custom-checkout-form.js` file implementing the form.

Example of extending the default form component:

```js
/*global define*/
define([
    'Magento_Ui/js/form/form'
], function(Component) {
    'use strict';
    return Component.extend({
        initialize: function () {
            this._super();
            // component initialization logic
            return this;
        },

        /**
         * Form submit handler
         *
         * This method can have any name.
         */
        onSubmit: function() {
            // trigger form validation
            this.source.set('params.invalid', false);
            this.source.trigger('customCheckoutForm.data.validate');

            // verify that form data is valid
            if (!this.source.get('params.invalid')) {
                // data is retrieved from data provider by value of the customScope property
                var formData = this.source.get('customCheckoutForm');
                // do something with form data
                console.dir(formData);
            }
        }
    });
});
```

## Step 2: Create the HTML template {#template}

Add the `knockout.js` HTML template for the form component under the `<your_module_dir>/view/frontend/web/template` directory called `custom-checkout-form.html`.

Example:

```html
<div>
    <form id="custom-checkout-form" class="form" data-bind="attr: {'data-hasrequired': $t('* Required Fields')}">
        <fieldset class="fieldset">
            <legend data-bind="i18n: 'Custom Checkout Form'"></legend>
            <!-- ko foreach: getRegion('custom-checkout-form-fields') -->
            <!-- ko template: getTemplate() --><!-- /ko -->
            <!--/ko-->
        </fieldset>
        <button type="reset">
            <span data-bind="i18n: 'Reset'"></span>
        </button>
        <button type="button" data-bind="click: onSubmit" class="action">
            <span data-bind="i18n: 'Submit'"></span>
        </button>
    </form>
</div>
```

## Step 3: Declare the form in the checkout page layout {#layout}

Certain default checkout templates declare regions where additional content can be inserted. You can add your custom form in any of these regions. These regions are provided with corresponding comments in the default Checkout page layout file `<Checkout_module_dir>/view/frontend/layout/checkout_index_index.xml`.

Also you locate the regions in the `.html` templates of the blocks used in this [layout](https://glossary.magento.com/layout) file.
For example, the shipping JS component (see `<Magento_Checkout_module_dir>/view/frontend/web/template/shipping.html`) provides the `before-form` region and corresponding UI container.

Any content added here is rendered before the Shipping Address form on the Shipping Information step. To add content to this region, create a `checkout_index_index.xml` layout update in the `<your_module_dir>/view/frontend/layout/`.

It should be similar to the following:

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceBlock name="checkout.root">
            <arguments>
                <argument name="jsLayout" xsi:type="array">
                    <item name="components" xsi:type="array">
                        <item name="checkout" xsi:type="array">
                            <item name="children" xsi:type="array">
                                <item name="steps" xsi:type="array">
                                    <item name="children" xsi:type="array">
                                        <item name="shipping-step" xsi:type="array">
                                            <item name="children" xsi:type="array">
                                                <item name="shippingAddress" xsi:type="array">
                                                    <item name="children" xsi:type="array">
                                                        <item name="before-form" xsi:type="array">
                                                            <item name="children" xsi:type="array">
                                                                <item name="custom-checkout-form-container" xsi:type="array">
                                                                    <!-- Add this item to configure your js file  -->
                                                                    <item name="component" xsi:type="string">VendorName_ModuleName/js/view/custom-checkout-form</item>
                                                                    <item name="config" xsi:type="array">
                                                                        <!-- And this to add your html template  -->
                                                                        <item name="template" xsi:type="string">VendorName_ModuleName/custom-checkout-form</item>
                                                                    </item>
                                                                    <item name="children" xsi:type="array">
                                                                        <!-- Here we will add the form fields  -->
                                                                    </item>
                                                                </item>
                                                            </item>
                                                        </item>
                                                    </item>
                                                </item>
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

### Clear files after modification {#modify}

If you modify your custom `.html` template after it was applied on the store pages, the changes will not apply until you do the following:

1. Delete all files in the `pub/static/frontend` and `var/view_preprocessed` directories.
1. Reload the pages.

### Static forms {#static_form}

The term static refers to the forms where all the fields are already known/predefined and do not depend on any settings in the [Admin](https://glossary.magento.com/admin). Compare to [dynamic forms](#dynamic_form).

The fields of static forms are not generated dynamically, so they can be defined in a layout.

The following code sample shows the configuration of the `custom-checkout-form-container` form, defined in the previous step. It contains four fields: a text input, a select, a checkbox, and a date field. This form uses the checkout data provider (`checkoutProvider`) that was introduced in the `Magento_Checkout` module:

```xml
...
    <item name="custom-checkout-form-container" xsi:type="array">
        ...
        <item name="children" xsi:type="array">
            <item name="custom-checkout-form-fieldset" xsi:type="array">
                <!-- uiComponent is used as a wrapper for form fields (its template will render all children as a list) -->
                <item name="component" xsi:type="string">uiComponent</item>
                <!-- the following display area is used in template (see below) -->
                <item name="displayArea" xsi:type="string">custom-checkout-form-fields</item>
                <item name="children" xsi:type="array">
                    <item name="text_field" xsi:type="array">
                        <item name="component" xsi:type="string">Magento_Ui/js/form/element/abstract</item>
                        <item name="config" xsi:type="array">
                            <!-- customScope is used to group elements within a single form (e.g. they can be validated separately) -->
                            <item name="customScope" xsi:type="string">customCheckoutForm</item>
                            <item name="template" xsi:type="string">ui/form/field</item>
                            <item name="elementTmpl" xsi:type="string">ui/form/element/input</item>
                        </item>
                        <item name="provider" xsi:type="string">checkoutProvider</item>
                        <item name="dataScope" xsi:type="string">customCheckoutForm.text_field</item>
                        <item name="label" xsi:type="string" translate="true">Text Field</item>
                        <item name="sortOrder" xsi:type="string">1</item>
                        <item name="validation" xsi:type="array">
                            <item name="required-entry" xsi:type="string">true</item>
                        </item>
                    </item>
                    <item name="checkbox_field" xsi:type="array">
                        <item name="component" xsi:type="string">Magento_Ui/js/form/element/boolean</item>
                        <item name="config" xsi:type="array">
                            <!--customScope is used to group elements within a single form (e.g. they can be validated separately)-->
                            <item name="customScope" xsi:type="string">customCheckoutForm</item>
                            <item name="template" xsi:type="string">ui/form/field</item>
                            <item name="elementTmpl" xsi:type="string">ui/form/element/checkbox</item>
                        </item>
                        <item name="provider" xsi:type="string">checkoutProvider</item>
                        <item name="dataScope" xsi:type="string">customCheckoutForm.checkbox_field</item>
                        <item name="label" xsi:type="string" translate="true">Checkbox Field</item>
                        <item name="sortOrder" xsi:type="string">3</item>
                    </item>
                    <item name="select_field" xsi:type="array">
                        <item name="component" xsi:type="string">Magento_Ui/js/form/element/select</item>
                        <item name="config" xsi:type="array">
                            <!--customScope is used to group elements within a single form (e.g. they can be validated separately)-->
                            <item name="customScope" xsi:type="string">customCheckoutForm</item>
                            <item name="template" xsi:type="string">ui/form/field</item>
                            <item name="elementTmpl" xsi:type="string">ui/form/element/select</item>
                        </item>
                        <item name="options" xsi:type="array">
                            <item name="0" xsi:type="array">
                                <item name="label" xsi:type="string" translate="true">Please select value</item>
                                <item name="value" xsi:type="string"></item>
                            </item>
                            <item name="1" xsi:type="array">
                                <item name="label" xsi:type="string" translate="true">Value 1</item>
                                <item name="value" xsi:type="string">value_1</item>
                            </item>
                            <item name="2" xsi:type="array">
                                <item name="label" xsi:type="string" translate="true">Value 2</item>
                                <item name="value" xsi:type="string">value_2</item>
                            </item>
                        </item>
                        <!-- value element allows to specify default value of the form field -->
                        <item name="value" xsi:type="string">value_2</item>
                        <item name="provider" xsi:type="string">checkoutProvider</item>
                        <item name="dataScope" xsi:type="string">customCheckoutForm.select_field</item>
                        <item name="label" xsi:type="string" translate="true">Select Field</item>
                        <item name="sortOrder" xsi:type="string">2</item>
                    </item>
                    <item name="date_field" xsi:type="array">
                        <item name="component" xsi:type="string">Magento_Ui/js/form/element/date</item>
                        <item name="config" xsi:type="array">
                            <!--customScope is used to group elements within a single form (e.g. they can be validated separately)-->
                            <item name="customScope" xsi:type="string">customCheckoutForm</item>
                            <item name="template" xsi:type="string">ui/form/field</item>
                            <item name="elementTmpl" xsi:type="string">ui/form/element/date</item>
                        </item>
                        <item name="provider" xsi:type="string">checkoutProvider</item>
                        <item name="dataScope" xsi:type="string">customCheckoutForm.date_field</item>
                        <item name="label" xsi:type="string" translate="true">Date Field</item>
                        <item name="validation" xsi:type="array">
                            <item name="required-entry" xsi:type="string">true</item>
                        </item>
                    </item>
                </item>
            </item>
        </item>
    </item>
...
```

### Dynamically defined forms {#dynamic_form}

Dynamically defined, or dynamic, forms are the forms where the set or type of fields can change. For example, the fields displayed on the checkout form depend on the Admin settings: depending on the **Admin > Stores > Settings > Configuration > Customers > Customer Configuration > Name and Address Options**.

For such forms, you must implement a [plugin]({{ page.baseurl }}/extension-dev-guide/plugins.html) for the `\Magento\Checkout\Block\Checkout\LayoutProcessor::process` method.
A plugin can add custom fields definitions to layout at run-time. The format of the field definition is the same as for fields defined in layout.

For example:

```php?start_inline=1
$textField = [
    'component' => 'Magento_Ui/js/form/element/abstract',
    'config' => [
        'customScope' => 'customCheckoutForm',
        'template' => 'ui/form/field',
        'elementTmpl' => 'ui/form/element/input',
    ],
    'provider' => 'checkoutProvider',
    'dataScope' => 'customCheckoutForm.text_field',
    'label' => 'Text Field',
    'sortOrder' => 1,
    'validation' => [
        'required-entry' => true,
    ],
];
```

## Illustration

If you use the code samples provided as examples in this topic, this would result in adding the following form to the Shipping Information step:

![The input form with four fields]({{ site.baseurl }}/common/images/how_checkout_form.png)
