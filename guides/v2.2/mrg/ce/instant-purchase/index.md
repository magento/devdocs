---
group: module-reference-guide
title: Instant Purchase module
functional_areas:
  - Checkout
---

The [Instant Purchase module] allows customers to place orders in seconds without going through the full checkout process.

This feature takes the form of a button on product pages.
When a customer clicks this button, the system places their order using the default shipping, billing address, and stored payment method.
Once the order is placed, an order confirmation message appears in the notification area.

This article explains how this module works and ways to customize it using its extension points.
For merchant instructions, see [Instant Purchase] in the user guide.

## Implementation details

The logic found in the [Instant Purchase module] is divided into two parts:

* [Instant Purchase logic]
* [Order placement]

### Instant Purchase logic

This module allows any product to be added to an instant purchase order.

The module creates an additional section in the [Customer Data cache] for Instant Purchase data.
This data is updated when the relevant customer data changes, such as adding or removing a stored payment method or the default shipping address.

#### Important interfaces

* [`InstantPurchaseInterface`]

  The implementation for this interface defines Instant Purchase calculations.
  The default implementation uses several interfaces to choose the appropriate payment method, billing and shipping addresses, and shipping method.

* [`PaymentTokenChooserInterface`]

  Responsible for choosing the stored payment method.
  The default value is the last created and saved payment method used.

  Instant Purchase will not use payment methods that were used but not saved.

* [`ShippingAddressChooserInterface`]

  Responsible for choosing the shipping address.
  The default implementation chooses the default shipping address set by the customer.

* [`BillingAddressChooserInterface`]

  Responsible for choosing the billing address.
  The default implementation chooses the default billing address set by the customer.

* [`ShippingMethodChooserInterface`]

  Responsible for choosing the shipping method.
  The default implementation chooses the cheapest shipping method.

  Since the final price of the shipment is calculated after product and quantity are specified in the final confirmation, "Cheapest price" is displayed in the confirmation pop-up for the customer.

{:.bs-callout .bs-callout-tip}
The Instant Purchase capability logic is the most customizable part of the module.
For more customization details, see the [Customization Points] section.

### Order placement

The logic for the order placement process is found in the [`PlaceOrder`] class.

The whole process is divided into several steps with each step implemented by a corresponding class in the [`Magento\InstantPurchase\Model\QuoteManagement`] namespace.

Since order placement requires specific steps to be followed, this part of the module does not declare separate interfaces.
To customize the behavior of the order placement process, use [plugins].

## Customization Points

Use [dependency injection] to override preferences for interfaces marked with the `@api` notation and modify the behavior of the module.

### Instant Purchase calculation

Custom implementations of the [`InstantPurchaseInterface`] should return an [`InstantPurchaseOption`] object.

The `InstantPurchaseOption` object is a data container that holds the stored payment method, shipping and billing addresses, and shipping method used by the Instant Purchase module.
The logic of how this data is retrieved is the responsibility of the `InstantPurchaseInterface` implementation.

To create an `InstantPurchaseOption` object from the gathered data, use the [`InstantPurchaseOptionFactory`].

The customization points for stored payment, shipping address, billing address, and shipping method are used in the default `InstantPurchaseInterface` implementation ([`InstantPurchaseChooser`]).
They become invalid if a different implementation is used.

The `choose()` method for custom implementations of the following interfaces must return an instance of the correct class or `null` if nothing can be chosen.

| Customization Point | Interface                           | Return Class                |
| ------------------- | ----------------------------------- | --------------------------- |
| Stored Payment      | [`PaymentTokenChooserInterface`]    | [`PaymentTokenInterface`]   |
| Shipping Address    | [`ShippingAddressChooserInterface`] | Customer's [`Address`]      |
| Billing Address     | [`BillingAddressChooserInterface`]  | Customer's [`Address`]      |
| Shipping Method     | [`ShippingMethodChooserInterface`]  | [`ShippingMethodInterface`] |

#### Deferred Shipping Method

Choosing the shipping method based on a customer's address is difficult without all the information on the shipping subject because it is hard to estimate the cost and effort.
To address this issue, the Instant Purchase module allows you to postpone the final decision on which shipping method to use until the exact product and quantity is known.

Use the following steps to help you implement a custom deferred shipping method:

1. Create an implementation of the [`ShippingMethodChooserInterface`] with a `choose()` method that returns a `ShippingMethodInterface` with the following properties:
   * Returns [`DeferredShippingMethodChooserInterface::CARRIER`] when `getCarrierCode()` is called.
   * Returns a unique string when `getMethodCode()` is called.

     This string is used as a key to determine the corresponding logic during order placement.
   * Returns a translated phrase when `getCarrierTitle()` is called.

     This phrase is shown as the shipping method description in the Instant Purchase confirmation pop-up.
   * Returns `true` when `getAvailable()` is called.
1. Create an implementation of the [`DeferredShippingMethodChooserInterface`].
   Unlike the `ShippingMethodChooserInterface`, this interface retrieves the [`Quote\Address`] instead of the customer's address, so it has access to the necessary data.

   This method must return a string that identifies the shipping method using the format `<carrier code>_<method code>` or `null` if nothing can be chosen.
1. Add an entry in the [`di.xml`] file that specifies your defined method code and custom implementation:

```xml
<type name="Magento\InstantPurchase\Model\ShippingMethodChoose\DeferredShippingMethodChooserPool">
    <arguments>
        <argument name="choosers" xsi:type="array">
            <!-- item name attribute is method code defined in ShippingMethodChooserInterface implementation-->
            <!-- item value is class name of DeferredShippingMethodChooserInterface implementation-->
            <item name="cheapest" xsi:type="object">Magento\InstantPurchase\Model\ShippingMethodChoose\CheapestMethodDeferredChooser</item>
        </argument>
    </arguments>
</type>
```

### Order placement

You can customize order placement using [plugins].
Before and after plugins can be created to add custom behaviors in the [`PlaceOrder`] class and any class in the [`Magento\InstantPurchase\Model\QuoteManagement`] namespace.

Customizing payment handling is a special case for the order placement process.
See [Payment Method Integration] for more details.

### Confirmation pop-up

You can customize the strings on the Instant Purchase confirmation pop-up by using [plugins] on classes in the [`Magento\InstantPurchase\Model\Ui`] namespace.
The format of the payment method can also be customized for [specific payments].

## Payment method integration

A payment method implementation can be integrated with Instant Purchase if it meets the following requirements:

* It implements the [payment provider gateway] mechanism.
* It implements [vault integration].
* The payment along with the stored payment token is processed on the server side

The framework for payment method integration is provided in the [`Magento\InstantPurchase\PaymentMethodIntegration`] namespace.

Integration is not enabled by default and requires developer action to make sure everything works as expected and avoid unpredictable bugs on production sites.

If the payment method meets all the requirements listed, you can enable Instant Purchase integration in the `config.xml` file.

The minimal configuration for Instant Purchase integration development is as follows:

```xml
<config>
  <default>
    <payment>
      <vault_payment_method_code><!-- replace this value with your vault payment method code -->
        <instant_purchase>
            <supported>1</supported>
        </instant_purchase>
      </vault_payment_method_code>
    </payment>
  <default>
</config>
```

{: .bs-callout .bs-callout-warning }
This minimal configuration is to help you get started with Instant Purchase integration development and is not recommended for production sites.

The following is an example of a full configuration meant for production:

```xml
<config>
  <default>
    <payment>
      <vault_payment_method_code><!-- replace this value with your vault payment method code -->
        <instant_purchase>
            <available>Implementation_Of_Magento\InstantPurchase\PaymentMethodIntegration\AvailabilityCheckerInterface</available>
            <tokenFormat>Implementation_Of_Magento\InstantPurchase\PaymentMethodIntegration\PaymentTokenFormatterInterface</tokenFormat>
            <additionalInformation>Implementation_Of_Magento\InstantPurchase\PaymentMethodIntegration\PaymentAdditionalInformationProviderInterface</additionalInformation>
        </instant_purchase>
      </vault_payment_method_code>
    </payment>
  <default>
</config>
```

All elements of the integration configuration are optional and have default implementations.
If some integration options are provided, then explicit usage of `<supported>1</supported>` is not required.
However, adding `<supported>0</supported>` will disable integration regardless of all other settings.

### Integration availability checker

The integration availability checker allows you to specify if your payment integration is available based on the current Magento configuration specification or other data.
For example, {{site.data.var.ce}} provides Braintree Stored Credit Cards which supports Instant Purchase unless 3D Secure is enabled.

The default implementation for the availability checker always returns `true`.

Custom availability checkers need to implement the [`AvailabilityCheckerInterface`] and can be applied to a payment method by specifying the class name (or virtual type name) in the `default/payment/<vault payment method code>/instant_purchase/available` configuration option.

### Payment Token Formatter

The Magento [Vault module] provides an interface to persist and manage stored payment methods.

The properties defined in the interface is necessary to use the payment method.

Almost all the information used to provide the description for stored payment methods are stored as additional data and are not standardized.
This is why the default token formatter returns the payment method title as the token description.

We recommend you provide a custom token formatter for your Instant Purchase integration to provide the correct information for your payment token

A custom payment token formatter should implement the [`PaymentTokenFormatterInterface`] and return a human-readable string that describes the [`PaymentTokenInterface`].

The Instant Purchase module guarantees that the correct token associated with corresponding payment method is passed to the formatter.
To configure the formatter, use the `default/payment/<vault payment method code>/instant_purchase/tokenFormat` configuration path.

### Additional Payment Information Provider

Some payment methods require the collection of additional information during the checkout process for order placement.

By default, the Instant Purchase module specifies the following properties as additional payment information:

| Name                              | Description                                   |
| --------------------------------- | --------------------------------------------- |
| `customer_id`                     | Holds the Customer identifier                 |
| `public_hash`                     | The public hash for the stored payment method |
| `is_active_payment_token_enabler` | Required by Vault framework                   |

To change the default behavior or add specific fields, implement the [`PaymentAdditionalInformationProviderInterface`] and specify it as the value for the `default/payment/<vault payment method code>/instant_purchase/additionalInformation` configuration option.
The default implementation returns an empty array.

### Instant Purchase Payment Marker

In most cases, developers should use interfaces for custom implementations and not rely on internal code.

However, sometimes conditional logic for payment processing needs to be implemented to handle payments initiated from different entry points.

For these cases, the payment object's [`InfoInterface`] holds an `additional_information` property, accessible via the `getAdditionalInformation()` method, which can return the `instant-purchase` marker.
Use this marker if no other options are available to implement specific payment logic for the Instant Purchase module.

[Instant Purchase]: http://docs.magento.com/m2/ce/user_guide/sales/checkout-instant-purchase.html
[Instant Purchase module]: https://github.com/magento/magento2/tree/{{ page.guide_version }}/app/code/Magento/InstantPurchase
[vault]: {{ page.baseurl }}/payments-integrations/vault/vault-intro.html
[Instant Purchase support]: #payment-method-integration
[Braintree Credit Cards]: https://github.com/magento/magento2/tree/{{ page.guide_version }}/app/code/Magento/Braintree/Model/InstantPurchase/CreditCard
[Braintree PayPal]: https://github.com/magento/magento2/tree/{{ page.guide_version }}/app/code/Magento/Braintree/Model/InstantPurchase/PayPal
[PayPal Payflow Pro]: https://github.com/magento/magento2/tree/{{ page.guide_version }}/app/code/Magento/Paypal/Model/InstantPurchase/Payflow/Pro
[module customization]: #customization-points
[Instant Purchase logic]: #instant-purchase-logic
[Customer Data cache]: {{ page.baseurl }}/extension-dev-guide/cache/page-caching/private-content.html
[Order placement]: #order-placement
[Customization Points]: #customization-points
[plugins]: {{ page.baseurl }}/extension-dev-guide/plugins.html
[`PaymentTokenChooserInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/InstantPurchase/Model/PaymentMethodChoose/PaymentTokenChooserInterface.php
[`ShippingAddressChooserInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/InstantPurchase/Model/ShippingAddressChoose/ShippingAddressChooserInterface.php
[`BillingAddressChooserInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/InstantPurchase/Model/BillingAddressChoose/BillingAddressChooserInterface.php
[`ShippingMethodChooserInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/InstantPurchase/Model/ShippingMethodChoose/ShippingMethodChooserInterface.php
[`PaymentTokenInterface`]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Vault/Api/Data/PaymentTokenInterface.php
[`Address`]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Customer/Model/Address.php
[`InstantPurchaseInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/InstantPurchase/Model/InstantPurchaseInterface.php
[`ShippingMethodInterface`]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Quote/Api/Data/ShippingMethodInterface.php
[`InstantPurchaseOption`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/InstantPurchase/Model/InstantPurchaseOption.php
[`InstantPurchaseOptionFactory`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/InstantPurchase/Model/InstantPurchaseOptionFactory.php
[`InstantPurchaseChooser`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/InstantPurchase/Model/InstantPurchaseChooser.php
[`DeferredShippingMethodChooserInterface::CARRIER`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/InstantPurchase/Model/ShippingMethodChoose/DeferredShippingMethodChooserInterface.php#L20
[`DeferredShippingMethodChooserInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/InstantPurchase/Model/ShippingMethodChoose/DeferredShippingMethodChooserInterface.php
[`di.xml`]: {{ page.baseurl }}/extension-dev-guide/build/di-xml-file.html
[`PlaceOrder`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/InstantPurchase/Model/PlaceOrder.php
[`Magento\InstantPurchase\Model\QuoteManagement`]: https://github.com/magento/magento2/tree/{{ page.guide_version }}/app/code/Magento/InstantPurchase/Model/QuoteManagement
[Payment Method Integration]: #payment-method-integration
[`Magento\InstantPurchase\Model\Ui`]: https://github.com/magento/magento2/tree/{{ page.guide_version }}/app/code/Magento/InstantPurchase/Model/Ui
[specific payments]: #payment-token-formatter
[payment provider gateway]: {{ page.baseurl }}/payments-integrations/bk-payments-integrations.html
[vault integration]: {{ page.baseurl }}/payments-integrations/vault/vault-intro.html
[`Magento\InstantPurchase\PaymentMethodIntegration`]: https://github.com/magento/magento2/tree/{{ page.guide_version }}/app/code/Magento/InstantPurchase/PaymentMethodIntegration
[`AvailabilityCheckerInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/InstantPurchase/PaymentMethodIntegration/AvailabilityCheckerInterface.php
[Vault module]: https://github.com/magento/magento2/tree/{{page.guide_version}}/app/code/Magento/Vault
[`PaymentTokenFormatterInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/InstantPurchase/PaymentMethodIntegration/PaymentTokenFormatterInterface.php
[`PaymentAdditionalInformationProviderInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/InstantPurchase/PaymentMethodIntegration/PaymentAdditionalInformationProviderInterface.php
[`Quote\Address`]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Quote/Model/Quote/Address.php
[`InfoInterface`]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Payment/Model/InfoInterface.php
[dependency injection]: {{ page.baseurl }}/extension-dev-guide/depend-inj.html
