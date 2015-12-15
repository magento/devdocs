---
layout: default
group: howdoi
subgroup: checkout
title: Add a payment method rendering to the checkout
menu_title: Add a payment method rendering to the checkout
menu_order: 3
github_link: howdoi/checkout/checkout_payment.md
---

<h2> What's in this topic </h2>

Out of the box, checkout in Magento consists of two steps:
 
 - Shipping Information
 - Review and Payment Information

On the Review and Payment Information step the enabled payment methods are rendered. This topic descibes how to make your custom payment method appear on this step as well. 


To implement the payment method rendering in checkout, you need to take the following steps:

1. Create the .js file implementing the component (payment method renderer).

2. Create the .js component registering the payment method renderer.

3. Create a template for the payment method renderer.

4. Declare the new payment in the checkout page layout. 

All the steps are described further. 

## Create the .js component file {#create}
As any other customizations, adding a custom payment method requires creating a custom module, and all custom files must be stored there. For your checkout customization to be applied correctly, your custom module should depend on the Magento_Checkout module.
<p class="q">where are these dependecies specified?</p>

In you custom module directory create the component's `.js` file (payment method renderer). It must be located under the `<your_module_dir>/view/frontend/web/js/view/` directory. For example in the Magento modules, the payment methods renderers are stored in the `<your_module_dir>/view/frontend/web/js/view/payment/method-renderer/` directory.

Your component should extend the default payment method component implemented in the `<Magento_Checkout_module_dir>/view/frontend/web/js/view/payment/default.js` file. 

The general view of the payment method renderer is the following:


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

If your payment method requires credit cards information, you might use the Magento renderer implementing a credit card form: [`<Magento_Payment_module_dir>/view/frontend/web/js/view/payment/cc-form.js`]({{site.gdeurl}}app/code/Magento/Payment/view/frontend/web/js/view/payment/cc-form.js). It also extends the default payment renderer.

You can also add payment-related functionality, like reward points, gift registry an so on. They must be implemented as UI components as well.
<p class="q">What exactly does it mean? Any recommendations for these renderers? Should they be registered</p>
These additional features can be displayed before or after the payment method itself. You need to declare them in the [checkout page layout file correspondingly](#layout). 

## Create the .js component that registers the renderer {#register}
In you custom module directory create the `.js` UI component that registers the payment method renderer in the renderers list. It must be located under the `<your_module_dir>/view/frontend/web/js/view/` directory. For example in the Magento modules, the payment methods renderers are stored in the `<your_module_dir>/view/frontend/web/js/view/payment/` directory.

The file content must be  content similar to the following:

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
            // other payment method renderers if required
        );
        /** Add view logic here if needed */
        return Component.extend({});
    }
);
{%endhighlight%}

If your module adds several payment methods, you can register all payment methods renderers in one file.

## Create the template for the payment method component {#template}
In your custom module directory create a new `<your_module_dir>/view/frontend/web/template/<your_template>.html`. The template can use Knockout JS syntax. You can find a sample .html template in any module implementing payment methods, for example the Magento_Authorizenet module. The template for rendering the Authorize.Net payment method in checkout is [`<Magento_Authorizenet_module_dir>/view/frontend/web/template/payment/authorizenet-directpost.html`]({{site.mage2000url}}app/code/Magento/Authorizenet/view/frontend/web/template/payment/authorizenet-directpost.html).

Usually, the payment method renderer extends the default component, so its methods are available in a template. The following table contains the list of these methods.

<table>
   <tbody>
      <tr>
         <th>Method</th>
         <th>Description</th>
      </tr>
      <tr class="even">
         <td>getCode():string</td>
         <td>Returns the code of the payment method</td>
      </tr>
      <tr class="odd">
         <td>getData():object</td>
         <td>
Returns an object with the payment data to be sent to the server on selecting a payment method and/or an extension (on pressing Continue button). It must contain data according to `\Magento\Quote\Api\Data\PaymentInterface`. All data that is not presented in the interface must go as a part of additional_data field????</td>
      </tr>
      <tr class="even">
         <td>placeOrder():bool</td>
         <td>Places an order if all validations are passed???</td>
      </tr>
      <tr class="odd">
         <td>selectPaymentMethod():bool</td>
         <td>
Select the chosen payment method??</td>
      </tr>
      <tr class="even">
         <td>isChecked():string</td>
         <td>	
Returns the code of the selected payment code</td>
      </tr>
      <tr class="odd">
         <td>isRadioButtonVisible():bool</td>
         <td>
Returns `true` if only one payment method is available</td>
      </tr>
      <tr class="even">
         <td>getTitle(): string</td>
         <td>Return Payment method title</td>
      </tr>
      <tr class="odd">
         <td>validate():bool</td>
         <td>
You have ability to add you custom validation here??</td>
      </tr>
      <tr class="odd">
         <td>getBillingAddressFormName(): string</td>
         <td>
Get unique name for billing address name</td>
      </tr>
      <tr class="even">
         <td>disposeSubscriptions()</td>
         <td>Terminate a subscription???</td>
      </tr>
   </tbody>
</table>

If your renderer extends the `Magento_Payment/js/view/payment/cc-form` component, then the following methods are additionally available in templates:


<table>
   <tbody>
      <tr>
         <th>Method</th>
         <th>Description</th>
      </tr>
      <tr class="even">
         <td>getData():object/td>
         <td>
Returns an object with the payment data to be sent to the server on selecting a payment method and/or an extension (on pressing Continue button). It must contain data according to `\Magento\Quote\Api\Data\PaymentInterface`. All data that is not presented in the interface must go as a part of additional_data field. Add information about credit card data(credit card type, credit card expression year, credit card expression month, credit card number, credit card verification number etc??.</td>
      </tr>
      <tr class="odd">
         <td>getCcAvailableTypes():array</td>
         <td>
Returns the list of available credit card types</td>
      </tr>
      <tr class="even">
         <td>getIcons()</td>
         <td>Return links to picture for available credit card types</td>
      </tr>
      <tr class="odd">
         <td>getCcMonths()</td>
         <td>
Retrieves the month of the credit card expiration date</td>
      </tr>
      <tr class="even">
         <td>getCcYears()</td>
         <td>	
Retrieves the year of the credit card expiration date</td>
      </tr>
      <tr class="odd">
         <td>hasVerification():bool</td>
         <td>
A flag that shows if the credit card CVV number is required for this payment</td>
      </tr>
      <tr class="even">
         <td>hasSsCardType():bool</td>
         <td>Returns `true` if the switch/solo card types are available</td>
      </tr>
      <tr class="odd">
         <td>getCvvImageUrl():string</td>
         <td>
Retrieves the CVV tooltip image URL</td>
      </tr>
      <tr class="odd">
         <td>getCvvImageHtml():string</td>
         <td>
Retrieves the CVV tooltip image HTML</td>
      </tr>
      <tr class="even">
         <td>getSsStartYears()</td>
         <td>Solo/switch card start years??</td>
      </tr>
      <tr class="odd">
         <td>isShowLegend():bool</td>
         <td>
Return information is show legend???</td>
      </tr>
   </tbody>
</table>

## Declare the payment method in layout {#layout}

In your custom module directory, create the following new file: `<your_module_dir>/view/frontend/layout/checkout_index_index.xml`. In this file, add the following:

{%highlight xml%}
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
                                        <item name="billing-step" xsi:type="array">
                                            <item name="component" xsi:type="string">uiComponent</item>
                                            <item name="children" xsi:type="array">
                                                <item name="payment" xsi:type="array">
                                                    <item name="children" xsi:type="array">
                                                        <!-- Declare additional before payment components. START -->
                                                        <item name="beforeMethods" xsi:type="array">
                                                            <item name="component" xsi:type="string">uiComponent</item>
                                                            <item name="displayArea" xsi:type="string">beforeMethods</item>
                                                            <item name="children" xsi:type="array">
                                                            <!-- merge before payment components -->
                                                            </item>
                                                        </item>
                                                        <!-- Declare additional before payment components. END -->
                                                        <!-- Declare the payment method (the component that registrates in the list). START -->
                                                        <item name="renders" xsi:type="array">
                                                            <item name="children" xsi:type="array">
                                                                <item name="%group name of the payment methods%" xsi:type="array">
                                                                    <!-- Example of value: Magento_Authorizenet/js/view/payment/authorizenet-->
                                                                    <item name="component" xsi:type="string">%component_that_registers_payment_renderer%</item>
                                                                    <item name="methods" xsi:type="array">

                                                                        <!-- Add this if your payment method requires entering a billing address-->
                                                                        <item name="%payment_method_code%" xsi:type="array">
                                                                        <item name="isBillingAddressRequired" xsi:type="boolean">true</item>
                                                                    </item>
                                                                </item>
                                                            </item>
                                                        </item>
                                                        <!-- Declare the payment method (the component that registrates in the list). END -->
                                                        <!-- Declare additional after payment components. START -->
                                                        <item name="afterMethods" xsi:type="array">
                                                            <item name="component" xsi:type="string">uiComponent</item>
                                                            <item name="displayArea" xsi:type="string">afterMethods</item>
                                                            <item name="children" xsi:type="array">
                                                            <!-- merge additional data after payment methods here -->
                                                            </item>
                                                        </item>
                                                        <!-- Declare additional after payment components. END -->
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
{%endhighlight %}

For an illustration of `checkout_index_index.xml` where a new payment method is declared, view [`<Magento_Authorizenet_module_dir>/view/frontend/layout/checkout_index_index.xml`]({{site.gdeurl}}app/code/Magento/Authorizenet/view/frontend/layout/checkout_index_index.xml)



