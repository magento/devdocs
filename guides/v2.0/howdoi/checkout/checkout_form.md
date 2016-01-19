---
layout: default
group: howdoi
subgroup: checkout
title: Add a new input form to Checkout
menu_title: Add a new input form to Checkout
menu_order: 8
github_link: howdoi/checkout/checkout_form.md
---
## What's in this topic

This topic describes how to add a custom input form to the Checkout page. 

<p class="q">should this form be a UI component? Would a link to the Form component be appropriate http://devdocs.magento.com/guides/v2.0/ui-components/ui-form.html?</p>

Magento provides ability to add a custom form to any of the checkout steps: Shipping Information, Review and Payment Information, or custom. In order to add a custom form developer has to follow the following steps:

1. [Create the JS implementation of the form UI component] (#component)
2. [Create the knockout.js HTML template] (#template)
3. [Declare the form in the checkout page layout] (#layout)

## Create the JS implementation of the form UI component {#component}

For the sake of compatibility, upgradability, and easy maintenance, do not edit the default Magento code, add your customizations in a separate module. For your checkout customization to be applied correctly, your custom module should [depend]({{site.gdeurl}}extension-dev-guide/composer-integration.html) on the Magento_Checkout module.

In your `<your_module_dir>/view/frontend/web/js/model` directory, create a `.js` file implementing the form.

<p class="q">Where should it be located?</p> 

The form must be implemented as a UI component. It can extend the default Magento [form UI component]({{site.gdeurl}}ui-components/ui-form.html). Its implementation is stored in `<Magento_Ui_module_dir>/view/base/web/js/form/form.js`.

Example of extending the default form component:

{%highlight js%}
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
{%endhighlight%}

<p class="q">is it a must that a form is a UI component? is it a must to use the default Magento form component?</p>

## Create the HTML template {#template}
Add the HTML template that will be rendered by Magento.
In the module directory, add the `knockout.js` HTML template for the form component. It must be located under the `<your_module_dir>/view/frontend/web/template` directory.

Example:

{%highlight html%}

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

{%endhighlight%}

## Declare the form in the checkout page layout {#layout}

Certain default checkout templates declare regions where some additional content can be inserted. 

<p class="q">any content or UI components? Or JS components? (what is the difference?)</p>

You can add your custom form in any of these regions.
 
For example, the shipping JS component (see app/code/Magento/Checkout/view/frontend/web/template/shipping.html) provides the `before-form` region and corresponding UI container. 

<p classs="q">How devs can find other regions?</p>

Any content added here is rendered before the Shipping Address form on the Shipping Information step. To add content to this region, the following layout update can be used:

<p class="q">What exactly is declared in layout? names of .js components? templates?</p>

{%highlight xml%}
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
                                                                <!-- Your additional content goes here -->
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
{%endhighlight%}

If the form fields are not generated dynamically, they can be defined in layout. 

The following code sample shows configuration of the form that contains four fields: text input, select, checkbox, and date. This form uses checkout data provider (checkoutProvider) that is introduced in the Magento_Checkout module:

<p class="q">need explanations here</p>

{%highlight xml%}
<item name="custom-checkout-form-container" xsi:type="array">
    <item name="component" xsi:type="string">%MODULE_NAME%/js/view/custom-checkout-form</item>
    <item name="provider" xsi:type="string">checkoutProvider</item>
    <item name="config" xsi:type="array">
        <item name="template" xsi:type="string">%MODULE_NAME%/custom-checkout-form</item>
    </item>
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
                <item name="label" xsi:type="string">Text Field</item>
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
                <item name="label" xsi:type="string">Checkbox Field</item>
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
                        <item name="label" xsi:type="string">Please select value</item>
                        <item name="value" xsi:type="string"></item>
                    </item>
                    <item name="1" xsi:type="array">
                        <item name="label" xsi:type="string">Value 1</item>
                        <item name="value" xsi:type="string">value_1</item>
                    </item>
                    <item name="2" xsi:type="array">
                        <item name="label" xsi:type="string">Value 2</item>
                        <item name="value" xsi:type="string">value_2</item>
                    </item>
                </item>
                <!-- value element allows to specify default value of the form field -->
                <item name="value" xsi:type="string">value_2</item>
                <item name="provider" xsi:type="string">checkoutProvider</item>
                <item name="dataScope" xsi:type="string">customCheckoutForm.select_field</item>
                <item name="label" xsi:type="string">Select Field</item>
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
                <item name="label" xsi:type="string">Date Field</item>
                <item name="validation" xsi:type="array">
                    <item name="required-entry" xsi:type="string">true</item>
                </item>
            </item>
        </item>
    </item>
</item>
{%endhighlight%}

### Dynamically defined forms

If form fields are generated dynamically, developer must implement an interceptor for the `\Magento\Checkout\Block\Checkout\LayoutProcessor::process` method.
Interceptor can add custom fields definitions to layout at run-time. The format of the field definition is the same as for fields defined in layout. 

For example:

{% highlight php startinline=true %}
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
{%endhighlight%}

## Illustration
If you use the code samples provided as examples in this topic, this would result in adding the following form to the Shipping Information step:
<img src="{{ site.baseurl }}common/images/how_checkout_form.png" alt="The input form with four fields">