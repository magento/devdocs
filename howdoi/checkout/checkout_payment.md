---
layout: tutorial
group: how-do-i
subgroup:
title: Add a custom payment method to checkout
subtitle: Customize Checkout
menu_order: 3
level3_subgroup: checkout-tutorial
functional_areas:
  - Checkout
---

Out of the box, Magento {% glossarytooltip 278c3ce0-cd4c-4ffc-a098-695d94d73bde %}checkout{% endglossarytooltip %} consists of two steps:

- Shipping Information
- Review and Payment Information

On the Review and Payment Information step the enabled payment methods are rendered. This topic describes how to add your custom {% glossarytooltip 422b0fa8-b181-4c7c-93a2-c553abb34efd %}payment method{% endglossarytooltip %} to this list.

To implement a payment method rendering in checkout, you need to take the following steps:

1. [Create the `.js` file implementing the component (payment method renderer).](#create)
2. [Create the `.js` component registering the payment method renderer.](#register)
3. [Create a template for the payment method renderer.](#template)
4. [Declare the new payment in the checkout page layout.](#layout)

## Step 1: Create the .js component file {#create}

Your payment method renderer must be implemented as a {% glossarytooltip 9bcc648c-bd08-4feb-906d-1e24c4f2f422 %}UI component{% endglossarytooltip %}. For the sake of compatibility, upgradability and easy maintenance, do not edit the default Magento code, add your customizations in a separate module. For your checkout customization to be applied correctly, your custom module should depend on the `Magento_Checkout` module. Module dependencies are specified in the [module's `composer.json`]({{ page.baseurl }}/extension-dev-guide/build/composer-integration.html).

Do not use `Ui` for your custom module name, because `%Vendor%_Ui` notation, required when specifying paths, might cause issues.

In your custom module directory, create the component's `.js` file (payment method renderer). It must be located under the `<your_module_dir>/view/frontend/web/js/view/` directory. For example in the Magento modules, the payment methods renderers are stored in the `<Magento_module_dir>/view/frontend/web/js/view/payment/method-renderer/` directory.

Usually, your component will extend the default payment method component (default payment method renderer) implemented in the `<Magento_Checkout_module_dir>/view/frontend/web/js/view/payment/default.js` file. The following table contains the list of the `default` component's methods.

<table>
   <tbody>
      <tr>
         <th>Method</th>
         <th>Description</th>
      </tr>
      <tr class="even">
         <td><code>getCode():string</code></td>
         <td>Returns the code of the payment method</td>
      </tr>
      <tr class="odd">
         <td><code>getData():object</code></td>
         <td> Returns an object with the payment data to be sent to the server on selecting a payment method and/or an extension (on pressing Continue button). It must contain data according to <code>\Magento\Quote\Api\Data\PaymentInterface</code>. All the payment information except the method code and purchase order number is passed in the <code>additional_data</code> field.</td>
      </tr>
      <tr class="even">
         <td><code>placeOrder():bool</code></td>
         <td>Places an order if all validations passed.</td>
      </tr>
      <tr class="odd">
         <td><code>selectPaymentMethod():bool</code></td>
         <td> Adds information about the payment method selected by the user to the Quote JS object.</td>
      </tr>
      <tr class="even">
         <td><code>isChecked():string</code></td>
         <td> Returns the code of the selected payment method.</td>
      </tr>
      <tr class="odd">
         <td><code>isRadioButtonVisible():bool</code></td>
         <td> Returns <code>true</code> if only one payment method is available.</td>
      </tr>
      <tr class="even">
         <td><code>getTitle():string</code></td>
         <td>Returns the payment method title.</td>
      </tr>
      <tr class="odd">
         <td><code>validate():bool</code></td>
         <td> Used in the <code>placeOrder()</code> method. So you can override validate() in your module, and this validation will be performed in the scope of <code>placeOrder()</code>.</td>
      </tr>
      <tr class="odd">
         <td><code>getBillingAddressFormName():string</code></td>
         <td>Gets the unique billing address name.</td>
      </tr>

      <tr class="even">
         <td><code>disposeSubscriptions()</code></td>
         <td>Terminates the object's subscription.</td>
      </tr>
   </tbody>
</table>


The general view of the payment method renderer is the following:

```js
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
            // add required logic here
        });
    }
);
```

If your payment method requires credit cards information, you might use the Magento renderer implementing a credit card form: [`<Magento_Payment_module_dir>/view/frontend/web/js/view/payment/cc-form.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Payment/view/frontend/web/js/view/payment/cc-form.js). It also extends the default payment renderer, but has the following own methods:


<table>
   <tr>
      <th>Method</th>
      <th>Description</th>
   </tr>
         <tr class="even">
          <td><code>getData():object</code></td>
          <td> Returns an object with the payment data to be sent to the server on selecting a payment method and/or an extension (on pressing Continue button). It must contain data according to <code>\Magento\Quote\Api\Data\PaymentInterface</code>. All the payment information except the method code and purchase order number is passed in the <code>additional_data</code> field. Adds credit card data (type, issue date, number, CVV).</td>
     </tr>
   <tr class="odd">
      <td><code>getCcAvailableTypes():array</code></td>
      <td> Returns the list of available credit card types.</td>
   </tr>
   <tr class="even">
      <td><code>getIcons()</code></td>
      <td>Returns links to the images for available credit card types.</td>
   </tr>
   <tr class="odd">
      <td><code>getCcMonths()</code></td>
      <td> Retrieves the month of the credit card expiration date.</td>
   </tr>
   <tr class="even">
      <td><code>getCcYears()</code></td>
      <td> Retrieves the year of the credit card expiration date.</td>
   </tr>
   <tr class="odd">
      <td><code>hasVerification():bool</code></td>
      <td> A flag that shows if the credit card CVV number is required for this payment. </td>
   </tr>
   <tr class="even">
      <td><code>hasSsCardType():bool</code></td>
      <td>Returns <code>true</code> if the Solo and Switch (Maestro) card types are available.</td>
   </tr>
   <tr class="odd">
      <td><code>getCvvImageUrl():string</code></td>
      <td> Retrieves the CVV tooltip image URL.</td>
   </tr>
   <tr class="odd">
      <td><code>getCvvImageHtml():string</code></td>
      <td> Retrieves the CVV tooltip image HTML.</td>
   </tr>
   <tr class="even">
      <td><code>getSsStartYears()</code></td>
      <td>Solo or Switch (Maestro) card start year.</td>
   </tr>
</table>

### Access the system config data {#system-config-data}

Your payment method might need to get data that cannot be defined in {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} configuration, JS components or templates directly, for example, data from the Magento system config.
This configuration is stored in the `window.checkoutConfig` variable that is defined in root checkout template.

In order to get access to the system configuration, your payment method or a group of payment methods has to implement the [`\Magento\Checkout\Model\ConfigProviderInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Checkout/Model/ConfigProviderInterface.php) interface, and the class implementing it must be injected to the composite config provider via DI {% glossarytooltip b00459e5-a793-44dd-98d5-852ab33fc344 %}frontend{% endglossarytooltip %} configuration. The following code samples illustrate this.

A sample `.php` class implementing `\Magento\Checkout\Model\ConfigProviderInterface`:

```php?start_inline=1
class MyCustomPaymentConfigProvider implements \Magento\Checkout\Model\ConfigProviderInterface
{
...
    public function getConfig()
    {
        return [
            // 'key' =&gt; 'value' pairs of configuration
        ];
    }
...
}
```

A sample DI configuration file of a custom module `<your_module_dir>/etc/frontend/di.xml`:

```xml
...
<type name="Magento\Checkout\Model\CompositeConfigProvider">
    <arguments>
        <argument name="configProviders" xsi:type="array">
            ...
            <item name="%Custom_provider_name%" xsi:type="object">MyCustomPaymentConfigProvider</item>
            ...
        </argument>
    </arguments>
...
</type>
```

### Add other payment-related features {#payment-features}

You can also add payment-related features (like reward points, gift registry, an so on) to the Review and Payment Information checkout step. They must be implemented as UI components as well, and can be displayed before or after the list of payment methods. This is configured in the [checkout page layout file correspondingly](#layout).

## Step 2: Create the .js component that registers the renderer {#register}

In your custom module directory create the `.js` UI component that registers the payment method renderer in the renderers list. It must be located under the `<your_module_dir>/view/frontend/web/js/view/` directory. For example in the Magento modules, the payment methods renderers are stored in the `<Magento_module_dir>/view/frontend/web/js/view/payment/` directory.

The file content must be similar to the following:

```js
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
```

If your {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} adds several payment methods, you can register all payment methods renderers in one file.

## Step 3: Create the template for the payment method component {#template}

In your custom module directory create a new `<your_module_dir>/view/frontend/web/template/<your_template>.html` file. The template can use [Knockout JS](http://knockoutjs.com/) syntax. You can find a sample `.html` template in any module implementing payment methods, for example the Magento_Authorizenet module.

The template for rendering the Authorize.Net payment method in checkout is [`<Magento_Authorizenet_module_dir>/view/frontend/web/template/payment/authorizenet-directpost.html`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Authorizenet/view/frontend/web/template/payment/authorizenet-directpost.html).

## Step 4: Declare the payment method in layout {#layout}

In your custom module directory, create a new `<your_module_dir>/view/frontend/layout/checkout_index_index.xml` file. In this file, add the following:

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
                                                                <item name="%your_feature_name%" xsi:type="array">
                                                                    <item name="component" xsi:type="string">%path/to/your/feature_js_component%</item>
                                                                </item>
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
                                                                    <item name="%your_feature_name%" xsi:type="array">
                                                                        <item name="component" xsi:type="string">%path/to/your/feature_js_component%</item>
                                                                    </item>
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
                    </item>
                </argument>
            </arguments>
        </referenceBlock>
    </body>
</page>
```

For an illustration of `checkout_index_index.xml` where a new payment method is declared, view [app/code/Magento/Authorizenet/view/frontend/layout/checkout_index_index.xml]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Authorizenet/view/frontend/layout/checkout_index_index.xml)
