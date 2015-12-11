---
layout: default
group: howdoi
subgroup: checkout
title: Add a payment method rendering to the checkout
menu_title: Customize the view of a checkout step
menu_order: 3
github_link: howdoi/checkout/checkout_payment.md
---

<h2> What's in this topic </h2>

Out of the box, checkout in Magento consists of two steps:
 
 - Shipping Information
 - Review and Payment Information

On the Review and Payment Information step the enabled payment methods are rendered. This topic descibes how to make your custom payment method appear on this step as well. 

* TOC
{:toc}

To implement the payment method rendering in checkout, you need to take the following steps:

1. Create the .js file implementing the component (payment method renderer).
<p class="q">What is exactly is this component?</p>
2. Create the .js component registering the payment method renderer.
<p class="q">Where does it register it and what is the name of the file</p>
3. Create a template for the payment method 
<p class="q">is it a template for the payment method rendering in checkout?</p>
4. Declare the ... in the checkout_index_index.xml 
<p class="q">What should be declared here except the case </p>

## Create the .js component file
 As any other customizations, adding a custom payment method requires creating a custom module, and all custom files must be stored there. For your checkout customization to be applied correctly, your custom module should depend on the Magento_Checkout module.
<p class="q">where are these dependecies specified?</p>

In you custom module directory create the .js component's file (payment method renderer) with the content similar to the following:

<p class="q">where should it be stored?</p>

{%highlight js%}
define(
    [
        'Magento_Checkout/js/view/payment/default'
    ],
    function (Component) {
        'use strict';
        return Component.extend({
            defaults: {
                template: '%path to template%'
            },
 
            /** add required logic here */
        });
    }
);
{%endhighlight%}

## Create the .js component that registers the renderer
In you custom module directory create the .js component that registers the payment method renderer(payment method renderer) with the content similar to the following:

{%highlight js%}
define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: '%payment_method_code%',
                component: '%js_renderer_component%'
            },
            // other payment method renderers (developer can register multiple payment methods)
        );
        /** Add view logic here if needed */
        return Component.extend({});
    }
);
{%endhighlight%}

## Create the template for the payment method component
In your custom module directory create a new `<your_module_dir>/view/frontend/web/template/<your_template>.phtml`. The following is a sample of a template:

<p class="q">does this sample have any value?</p>

{%highlight phtml %}
<div class="payment-method" data-bind="css: {'_active': (getCode() == isChecked())}">
    <div class="payment-method-title field choice">
        <input type="radio"
               name="payment[method]"
               class="radio"
               data-bind="attr: {'id': getCode()}, value: getCode(), checked: isChecked, click: selectPaymentMethod, visible: isRadioButtonVisible()"/>
        <label data-bind="attr: {'for': getCode()}" class="label"><span data-bind="text: getTitle()"></span></label>
    </div>
    <div class="payment-method-content">
        <div class="payment-method-billing-address">
            <!-- ko foreach: $parent.getRegion(getBillingAddressFormName()) -->
            <!-- ko template: getTemplate() --><!-- /ko -->
            <!--/ko-->
        </div>
 
 
        <!-- /ko -->
        <div class="actions-toolbar">
            <div class="primary">
                <button class="action primary checkout"
                        type="submit"
                        data-bind="
                        click: placeOrder,
                        attr: {title: $t('Place Order')},
                        css: {disabled: !isPlaceOrderActionAllowed()},
                        enable: (getCode() == isChecked())
                        "
                        disabled>
                    <span data-bind="text: $t('Place Order')"></span>
                </button>
            </div>
        </div>
    </div>
</div>
{%endhighlight%}
 

## Declare the payment method in layout

In your custom module directory, create the following new file: `<your_module_dir>/view/frontend/layout/checkout_index_index.xml`. In this file, add the following:

If your payment method requires billing information, add the following in your `checkout_index_index.xml`
<p class="q">is it about only setting the billing information to true or registering the payment method as well? Do we have an illustration of adding a payment method in our defualt files?</p>

{%highlight xml%}
...
<item name="payment" xsi:type="array">
    <item name="children" xsi:type="array">
        <item name="renders" xsi:type="array">
             <item name="%group name of the payment methods%" xsi:type="array">
                  <item name="component" xsi:type="string">%component_that_registers_payment_renderers_by_payment_code%</item>
                  <item name="methods" xsi:type="array">
                       <item name="%payment_method_code%" xsi:type="array">
                           <item name="isBillingAddressRequired" xsi:type="boolean">true</item>
                       </item>
                  </item>
             </item>
        </item>
    </item>
</item>
...
{%endhighlight %}

<p class="q">This is not enough isn't it? We should copy a lot of parent nodes as well</p>



