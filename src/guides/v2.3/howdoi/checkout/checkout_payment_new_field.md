---
layout: tutorial
group: how-do-i
subgroup:
title: Add a custom field in offline payment method
contributor_name: Ziffity
contributor_link: https://www.ziffity.com/
subtitle: Customize Checkout
menu_order: 3
level3_subgroup: checkout-tutorial
functional_areas:
  - Checkout
---

The following steps are required to add a custom field to an offline payment method:

1. Create a new module.
1. Add a `db_schema.xml` file.
1. Add a `requirejs` file to the module.
1. Override the vendor files.
1. Add an Observer.
1. Verify that the module works.

Let’s go through each step.

## Step 1: Create a new module

Create a new module named `Learning/CustomField` and register it.

For more information about creating a new module, refer to [Create a Module](https://devdocs.magento.com/videos/fundamentals/create-a-new-module/)

## Step 2 Add a `db_schema.xml` file

Add the `paymentpocomment` column in the `quote_payment` and `sales_order_payment` table using the declarative schema method.

Create the declarative schema in the following path `app/code/Learning/CustomField/etc/db_schema.xml`:

{% collapsible Show code %}

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

## Step 3: Add a requirejs file to the module

Next, create the `requirejs-config.js` file:

`app/code/Learning/CustomField/view/frontend/requirejs-config.js`

```js
 var config = {
    map: {
        '*': {
          'Magento_OfflinePayments/js/view/payment/offline-payments':'Learning_CustomField/js/view/payment/offline-payments',
        }
    }
}
```

{% endcollapsible %}

## Step 4: Override the vendor files

Next, override the `offline-payments.js` file to change the renderer of the Purchase Order payment method.

`app/code/Learning/CustomField/view/frontend/web/js/view/payment/offline-payments.js`

{% collapsible Show code %}

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

{% endcollapsible %}

It is also necessary to override the `purchaseorder-method.js` file.

`app/code/Learning/CustomField/view/frontend/web/js/view/payment/method-renderer/purchaseorder-method.js`

{% collapsible Show code %}

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

{% endcollapsible %}

It is also necessary to override the `purchaseorder-form.html` template file to add the custom input field (Purchase Order Comment).

`app/code/Learning/CustomField/view/frontend/web/template/payment/purchaseorder-form.html`

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

## Step 5: Add an Observer

Next, it is necessary to create the Observer file to save the custom field data to the order. For the Observer file an `event.xml` file is required to call the observer for a particular event. For this example, the `checkout_onepage_controller_success_action` event is used.

`app/code/Learning/CustomField/etc/frontend/events.xml`

```xml
<?xml version="1.0"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Event/etc/events.xsd">
    <event name="checkout_onepage_controller_success_action">
        <observer name="paymentfields_paymentfields_observer_frontend_sales_orderpaymentsavebefore" instance="Learning\CustomField\Observer\Frontend\Sales\OrderPaymentSaveBefore" />
    </event>
</config>
```

`app/code/Learning/CustomField/Observer/Frontend/Sales/OrderPaymentSaveBefore.php`

{% collapsible Show code %}

```php?start_inline=1
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

## Step 6: Verify that the module works

Add the product to the cart and go to the checkout page and select `purchase order` payment method and check that the new custom field can be seen (Purchase Order Comment).

If the `purchase order` payment method cannot be seen on the checkout page then go to Magento Admin and enable the payment method. See **Stores** > **Settings** > **Configuration** > **Sales** > **Payment Methods** > **Other Payment Methods** > **Purchase Order**

![Custom field in checkout page]({{ site.baseurl }}/common/images/custom_field_payment.png)