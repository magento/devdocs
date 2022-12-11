---
layout: tutorial
group: how-do-i
subgroup:
title: Add a custom field for an offline payment method
contributor_name: Ziffity
contributor_link: https://www.ziffity.com/
subtitle: Customize Checkout
menu_order: 101
level3_subgroup: checkout-tutorial
functional_areas:
  - Checkout
redirect_to: https://developer.adobe.com/commerce/php/tutorials/frontend/custom-checkout/add-payment-field/
layout: migrated
---

This topic describes how to add a custom field to an offline payment method in the payment step of the checkout. The custom field allows the buyer to enter a comment about a purchase order.

## Prerequisites

{:.bs-callout-info}
The `Purchase Order` payment method must be enabled in the storefront for this task. Ensure this payment method is enabled by navigating to **Stores** > **Settings** > **Configuration** > **Sales** > **Payment Methods** > **Other Payment Methods** > **Purchase Order** in the Admin.

You must perform following steps to add a custom field to an offline payment method:

1. [Create a new module](#create-module).
1. [Add a `db_schema.xml` file](#add-db-schema).
1. [Add a `requirejs` file to the module](#add-require-js).
1. [Override the vendor files](#override-vendor-files).
1. [Add an Observer](#add-observer).
1. [Compile and deploy the module](#compile-deploy).
1. [Verify that the module works](#verify-implementation).

Let’s go through each step.

## Step 1: Create a new module {#create-module}

[Create a new module]({{ site.baseurl }}/videos/fundamentals/create-a-new-module/) named `Learning/CustomField` and register it.

## Step 2 Add a `db_schema.xml` file {#add-db-schema}

Add the `paymentpocomment` column in the `quote_payment` and `sales_order_payment` tables using the [declarative schema]({{page.baseurl}}/extension-dev-guide/declarative-schema/db-schema.html) method.

Create the `app/code/Learning/CustomField/etc/db_schema.xml` and define the declarative schema as follows:

```xml
<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">
    <table name="quote_payment" resource="checkout" engine="innodb" comment="Sales Flat Quote Payment">
        <column xsi:type="text" name="paymentpocomment" nullable="true" comment="PO Comment"/>
    </table>
    <table name="sales_order_payment" resource="sales" engine="innodb" comment="Sales Flat Order Payment">
        <column xsi:type="text" name="paymentpocomment" nullable="true" comment="PO Comment"/>
    </table>
</schema>
```

## Step 3: Add a requirejs file to the module {#add-require-js}

Create the `app/code/Learning/CustomField/view/frontend/requirejs-config.js` file and add the following code:

```js
 var config = {
    map: {
        '*': {
          'Magento_OfflinePayments/js/view/payment/offline-payments':'Learning_CustomField/js/view/payment/offline-payments',
        }
    }
}
```

## Step 4: Override the vendor files {#override-vendor-files}

We must override the behavior of the following files to display the custom field:

-  [Magento_OfflinePayments/view/frontend/web/js/view/payment/offline-payments.js](#offline-payment)
-  [Magento_OfflinePayments/view/frontend/web/js/view/payment/method-renderer/purchaseorder-method.js](#purchaseorder-method)
-  [Magento_OfflinePayments/view/frontend/web/template/payment/purchaseorder-form.html](#purchaseorder-form)

### Override the `offline-payments.js` {#offline-payment}

Override the `Magento_OfflinePayments/view/frontend/web/js/view/payment/offline-payments.js` file to change the renderer of the Purchase Order payment method.

Create the `app/code/Learning/CustomField/view/frontend/web/js/view/payment/offline-payments.js` file and add the following code:

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
                type: 'checkmo',
                component: 'Magento_OfflinePayments/js/view/payment/method-renderer/checkmo-method'
            },
            {
                type: 'banktransfer',
                component: 'Magento_OfflinePayments/js/view/payment/method-renderer/banktransfer-method'
            },
            {
                type: 'cashondelivery',
                component: 'Magento_OfflinePayments/js/view/payment/method-renderer/cashondelivery-method'
            },
            {
                type: 'purchaseorder',
                component: 'Learning_CustomField/js/view/payment/method-renderer/purchaseorder-method'
            }
        );
        /** Add view logic here if needed */
        return Component.extend({});
    }
);
```

### Override the `purchaseorder-method.js` {#purchaseorder-method}

It is also necessary to override the `Magento_OfflinePayments/view/frontend/web/js/view/payment/method-renderer/purchaseorder-method.js` file.

The `template` path value used in this file must be altered to use the custom template. Also, the logic to get the `additional_data` is implemented in this file.

Create the `app/code/Learning/CustomField/view/frontend/web/js/view/payment/method-renderer/purchaseorder-method.js` file and add the following code:

```js
define([
    'Magento_Checkout/js/view/payment/default',
    'jquery',
    'mage/validation'
], function (Component, $) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Learning_CustomField/payment/purchaseorder-form',
            purchaseOrderNumber: ''
        },

        /** @inheritdoc */
        initObservable: function () {
            this._super()
                .observe('purchaseOrderNumber');

            return this;
        },

        /**
         * @return {Object}
         */
        getData: function () {
            return {
                method: this.item.method,
                'po_number': this.purchaseOrderNumber(),
                'additional_data': {
                    'po_number': $('#po_number').val(),
                    'paymentpocomment': $('#purchaseorder_paymentpocomment').val(),
                }
            };
        },

        /**
         * @return {jQuery}
         */
        validate: function () {
            var form = 'form[data-role=purchaseorder-form]';

            return $(form).validation() && $(form).validation('isValid');
        }
    });
});
```

### Override the `purchaseorder-form.html` {#purchaseorder-form}

We must override the `Magento_OfflinePayments/view/frontend/web/template/payment/purchaseorder-form.html` template file to add the custom input field (**Purchase Order Comment**).

Create the `app/code/Learning/CustomField/view/frontend/web/template/payment/purchaseorder-form.html` file and add the following code:

{% collapsible Show code %}

```html
<div class="payment-method" data-bind="css: {'_active': (getCode() == isChecked())}">
    <div class="payment-method-title field choice">
        <input type="radio"
               name="payment[method]"
               class="radio"
               data-bind="attr: {'id': getCode()}, value: getCode(), checked: isChecked, click: selectPaymentMethod, visible: isRadioButtonVisible()"/>
        <label data-bind="attr: {'for': getCode()}" class="label">
            <span data-bind="text: getTitle()"></span>
        </label>
    </div>

    <div class="payment-method-content">
        <!-- ko foreach: getRegion('messages') -->
        <!-- ko template: getTemplate() --><!-- /ko -->
        <!--/ko-->
        <div class="payment-method-billing-address">
            <!-- ko foreach: $parent.getRegion(getBillingAddressFormName()) -->
            <!-- ko template: getTemplate() --><!-- /ko -->
            <!--/ko-->
        </div>
        <form id="purchaseorder-form" class="form form-purchase-order" data-role="purchaseorder-form">
            <fieldset class="fieldset payment method" data-bind='attr: {id: "payment_form_" + getCode()}'>
                <div class="field field-number required">
                    <label for="po_number" class="label">
                    <span><!-- ko i18n: 'Purchase Order Number'--><!-- /ko --></span>
                    </label>
                    <div class="control">
                    <div class="name-info">
                    <input type="text" id="po_number" name="payment[po_number]" placeholder="Purchase Order Number" data-validate="{required:true}"        data-bind='attr: {title: $t("Purchase Order Number")},value: purchaseOrderNumber' class="input-text"/>
                    <input type="text" id="purchaseorder_paymentpocomment" name="payment[paymentpocomment]" class="input-text" placeholder="Purchase Order Comment" value="" data-bind="attr: {title: $t('Purchase Order Comment'),'data-container': getCode() + '-paymentpocomment',valueUpdate: 'keyup' "/>
                        </div>
                    </div>
                </div>
            </fieldset>
        </form>
        <div class="checkout-agreements-block">
            <!-- ko foreach: $parent.getRegion('before-place-order') -->
                <!-- ko template: getTemplate() --><!-- /ko -->
            <!--/ko-->
        </div>
        <div class="actions-toolbar" id="review-buttons-container">
            <div class="primary">
                <button class="action primary checkout"
                        type="submit"
                        data-bind="
                        click: placeOrder,
                        attr: {title: $t('Place Order')},
                        enable: (getCode() == isChecked()),
                        css: {disabled: !isPlaceOrderActionAllowed()}
                        "
                        data-role="review-save">
                    <span data-bind="i18n: 'Place Order'"></span>
                </button>
            </div>
        </div>
    </div>
</div>
```
{% endcollapsible %}

## Step 5: Add an Observer {#add-observer}

Create an Observer file to save the custom field data to the order. For the Observer file an `events.xml` file is required to call the observer for a particular event. For this example, the `checkout_onepage_controller_success_action` event is used.

Create the `app/code/Learning/CustomField/etc/frontend/events.xml` file and add the following code:

```xml
<?xml version="1.0"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Event/etc/events.xsd">
    <event name="checkout_onepage_controller_success_action">
        <observer name="paymentfields_paymentfields_observer_frontend_sales_orderpaymentsavebefore" instance="Learning\CustomField\Observer\Frontend\Sales\OrderPaymentSaveBefore" />
    </event>
</config>
```

Then create the `app/code/Learning/CustomField/Observer/Frontend/Sales/OrderPaymentSaveBefore.php` file.

{% collapsible Show code %}

```php
<?php

namespace Learning\CustomField\Observer\Frontend\Sales;

use Magento\Framework\Event\Observer as EventObserver;
use Magento\Framework\Event\ObserverInterface;
use Magento\OfflinePayments\Model\Purchaseorder;
use Magento\Framework\App\Request\DataPersistorInterface;

class OrderPaymentSaveBefore implements \Magento\Framework\Event\ObserverInterface
{
    protected $order;
    protected $logger;
    protected $_serialize;
    protected $quoteRepository;

    public function __construct(
        \Magento\Sales\Api\Data\OrderInterface $order,
        \Magento\Quote\Api\CartRepositoryInterface $quoteRepository,
        \Psr\Log\LoggerInterface $logger,
        \Magento\Framework\Serialize\Serializer\Serialize $serialize
    ) {
        $this->order = $order;
        $this->quoteRepository = $quoteRepository;
        $this->logger = $logger;
        $this->_serialize = $serialize;
    }
    /**
     * Execute observer
     *
     * @param \Magento\Framework\Event\Observer $observer
     * @return void
     */
    public function execute(\Magento\Framework\Event\Observer $observer)
    {
        $orderids = $observer->getEvent()->getOrderIds();
        if(!$orderids){
            foreach ($orderids as $orderid) {
                $order = $this->_order->load($orderid);
                $method = $order->getPayment()->getMethod();
                if($method == 'purchaseorder') {
                    $quote_id = $order->getQuoteId();
                    $quote = $this->quoteRepository->get($quote_id);
                    $paymentQuote = $quote->getPayment();
                    $paymentOrder = $order->getPayment();
                    $paymentOrder->setData('paymentpocomment',$paymentQuote->getPaymentpocomment());
                    $paymentOrder->save();
                }
            }
        }
    }
}
```
{% endcollapsible %}

## Step 6: Compile and deploy the module {#compile-deploy}

Run the following sequence of commands to compile and deploy your custom module.

1. Enable the new module.

   ```bash
   bin/magento module:enable Learning_CustomField
   ```

1. Install the new module.

   ```bash
   bin/magento setup:upgrade
   ```

1. Compile the code.

   ```bash
   bin/magento setup:di:compile
   ```

1. Deploy the static files.

   ```bash
   bin/magento setup:static-content:deploy
   ```

## Step 7: Verify that the module works {#verify-implementation}

Use the following steps to verify your changes work as expected.

1. Go to the storefront as a guest user and add a product to the cart.

1. Go to the checkout page and select the **Purchase Order** payment.

1. Verify that the **Purchase Order Comment** field is visible.

   ![Custom field in checkout page]({{ site.baseurl }}/common/images/custom_field_payment.png)

1. Fill the purchase order comment field in the checkout and place an order.

1. Verify that the entered value is stored in the `paymentpocomment` column of the  `sales_order_payment` table.
