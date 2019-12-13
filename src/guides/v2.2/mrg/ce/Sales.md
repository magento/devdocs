---
group: module-reference-guide
subgroup: 10_Community Edition
title: Magento_Sales module
menu_title: Sales
menu_order: 1
redirect_from:
 - /guides/v2.2/mrg/ce/Sales/description.html
 - /guides/v2.2/mrg/ce/Sales/dependencies.html
 - /guides/v2.2/mrg/ce/Sales/services.html
---

Magento_Sales [module](https://glossary.magento.com/module) is responsible for order processing and appearance in the system.

Magento_Sales module manages next system entities and flows:

*  order management
*  [invoice](https://glossary.magento.com/invoice) management
*  [shipment](https://glossary.magento.com/shipment) management (including track management)
*  credit memos management

Magento_Sales module is required for Magento_Checkout module to perform [checkout](https://glossary.magento.com/checkout) operations.

## Public API

## InvoiceOrder

The InvoiceOrder service introduces a capability to execute Magento native business flow of the Sales [module](https://glossary.magento.com/module) using [API](https://glossary.magento.com/api).

With this service you can:

*  create an [invoice](https://glossary.magento.com/invoice) document (full or partial)
*  capture money placed with order payment
*  notify a customer about document creation
*  change [order status](https://glossary.magento.com/order-status) and state

### Parameters

#### orderId

An identifier of a target order for operation.

*Format:* Integer

*Presence:* Required

#### items

An array of order items that will be included to invoice. By default, the invoice will contain all order items.

*Format:* Array of items with a format according to [`\Magento\Sales\Api\Data\InvoiceItemCreationInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Api/Data/InvoiceItemCreationInterface.php).

*Default:* `[]`

*Presence:* Optional (required, when invoice must contain particular order items.

*Example:*

```json
[
  {
      "order_item_id": 1,
      "qty": 2
  },
  {
  "order_item_id": 2,
  "qty": 0.5
  }
  ]
```

#### capture

Flag that sets whether the customer’s payment can be captured using an online payments system (for example, PayPal).
**IMPORTANT**: If you created Invoice with the flag set to default value (`false`), you will not be able to capture money in Magento on the corresponding Invoice.

*Format:* Boolean

*Default:* false

*Presence:* Optional

#### notify

Flag that activates e-mail notification about new invoice for a customer. If `true`, the service will notify a customer. If `false`, the service won’t notify a customer.

*Format:* Boolean

*Default:* false

*Presence:* Optional

#### appendComment

Flag that determines whether a `comment` argument must be included in an e-mail notification. If `true`, the service adds the comment.

*Format:* Boolean

*Default:* false

*Presence:* Optional

#### comment

The comment to add to an invoice. Specify a comment if `appendComment` is set to `true`.

*Format:* A format according to [`\Magento\Sales\Api\Data\InvoiceCommentCreationInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Api/Data/InvoiceCommentCreationInterface.php).

*Default:* null

*Presence:* Optional

*Example:*

```json
{
  "comment": "The first Invoice",
  "is_visible_on_front": true
}
```

#### arguments

Additional arguments. Reserved for use by extension modules.

*Format:* A format according to [`\Magento\Sales\Api\Data\InvoiceCreationArgumentsInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Api/Data/InvoiceCreationArgumentsInterface.php).

*Default:* null

*Presence:* Optional

### Return values

The service returns an identifier of the created Invoice.

### REST

#### POST Endpoint

`http://<magento_host>/rest/<store_code>/V1/order/<orderId>/invoice`

#### REST declaration

[`etc/webapi.xml`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/etc/webapi.xml)

```xml
<route url="/V1/order/:orderId/invoice" method="POST">
    <service class="Magento\Sales\Api\InvoiceOrderInterface" method="execute"/>
    <resources>
        <resource ref="Magento_Sales::invoice" />
    </resources>
</route>
```

### SOAP

#### SOAP Endpoint

`http://<magento_host>/soap/<store_code>?wsdl&services=salesInvoiceOrderV1`

### PHP interface

[`\Magento\Sales\Api\InvoiceOrderInterface`][]

### PHP implementation

[`\Magento\Sales\Model\InvoiceOrder`][]

#### Exceptions

In case of failure, it returns an error object. Example in REST:

```json
{
  "message": "Creditmemo Document Validation Error(s):\nWe can't create creditmemo for the order.\nThe most money available to refund is 0."
}
```

#### Extension points

The service implementation contains [extension](https://glossary.magento.com/extension) points marked with `@api` annotation. Extension developers can use APIs to extend service logic.

|Extension point | Description
|---|---
|[`\Magento\Sales\Api\OrderRepositoryInterface`]{:target="_blank"}| An interface for saving and retrieving Orders.
|[`\Magento\Sales\Model\Order\OrderStateResolverInterface`]{:target="_blank"}| An interface which provides a correct state of an Order according to performed operation.
|[`\Magento\Sales\Api\InvoiceRepositoryInterface`]{:target="_blank"}| An interface for saving and retrieving Shipments.
|[`\Magento\Sales\Model\Order\InvoiceDocumentFactory`]{:target="_blank"}| A factory for creating an Invoice data object. The factory uses the `arguments` parameter to process the extension attributes of a new Invoice.
|[`\Magento\Sales\Model\Order\Invoice\NotifierInterface`]{:target="_blank"}| An interface for sending notifications about new Invoice creation.
|[`\Magento\Sales\Model\Order\Validation\InvoiceOrderInterface`]{:target="_blank"}| An interface for validating service parameters and Invoice data object.
|[`\Magento\Sales\Model\Order\PaymentAdapterInterface`]{:target="_blank"}| An interface for a payment according to a selected option (online/offline). It returns Order with modified state, which contains payment specific information.

## RefundInvoice

The RefundInvoice service introduces a capability to execute Magento native business flow of the Sales module using API.

Please note, that current service is available only for invoices created using online payment methods. If you try to apply it to an Invoice created using offline payment method, system will throw a validation error.

With this service you can:

*  create a [Credit Memo](https://glossary.magento.com/credit-memo) (complete or partial) for particular Invoice
*  add details about refunded items to an Order
*  change status and state of an Order according to performed actions
*  notify a customer about performed refund operation

### Service parameters

#### invoiceId

An identifier of a target Invoice for operation.

*Format:* Integer

*Presence:* Required

#### items

An array of invoice items included to a Credit Memo. By default, the service will create a Credit Memo for all invoice items.

*Format:* Array of items with a format according to [ `\Magento\Sales\Api\Data\CreditmemoItemCreationInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Api/Data/CreditmemoItemCreationInterface.php).

*Default:* `[]`

*Presence:* Optional (required, when a Credit Memo must contain particular order items).

*Example:*

```json
[
    {
          "order_item_id": 1,
          "qty": 2
    },
    {
    "order_item_id": 2,
    "qty": 0.5
    }
]
```

#### isOnline

Flag that determines whether funds should be returned to a customer via online payment system (PayPal for example) or not.

*Format:* Boolean

*Default:* false

*Presence:* Optional

#### notify

Flag that activates e-mail notification about Credit Memo creation. If `true`, the service notifies a customer; if `false`, it doesn't.

*Format:* Boolean

*Default:* false

*Presence:* Optional

#### appendComment

Flag that activates addition of a `comment` argument to the e-mail notification. If `true` and `comment` contains data, the service will add the comment to an e-mail notification.

*Format:* Boolean

*Default:* false

*Presence:* Optional

#### comment

A comment to Credit Memo.

*Format:* A format according to the [ `\Magento\Sales\Api\Data\CreditmemoCommentCreationInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Api/Data/CreditmemoCommentCreationInterface.php).

*Default:* null

*Presence:* Optional

*Example:*

```json
{
  "comment": "The first Credit Memo",
  "is_visible_on_front": true
}
```

#### arguments

Additional arguments for the service. Can be used by extension modules.

*Format:* A format according to [ `\Magento\Sales\Api\Data\CreditmemoCreationArgumentsInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Api/Data/CreditmemoCreationArgumentsInterface.php).

*Default:* null

*Presence:* Optional

*Example:*

```json
{
"shipping_amount": 10.00,
"adjustment_positive": 5.00,
"adjustment_negative": 5.00
}
```

A parameter `shipping_amount` behaves like at the Credit Memo creation page in the Admin area. If shipping amount is not specified, then shipping amount from a target Invoice is refunded automatically. To specify a shipping amount, consider shipping tax displays settings.

### Return values

The service returns an identifier of a created Credit Memo.

### REST

#### POST Endpoint

`http://<magento_host>/rest/<store_code>/V1/invoice/<invoiceId>/refund`

#### REST Declaration

[`etc/webapi.xml`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/etc/webapi.xml)

```xml
<route url="/V1/invoice/:invoiceId/refund" method="POST">
    <service class="Magento\Sales\Api\RefundInvoiceInterface" method="execute"/>
    <resources>
        <resource ref="Magento_Sales::sales_invoice" />
    </resources>
</route>
```

### SOAP

#### SOAP Endpoint

`http://<magento_host>/soap/<store_code>?wsdl&services=salesRefundInvoiceV1`

### PHP interface

[`\Magento\Sales\Api\RefundInvoiceInterface`][]

### PHP implementation

[`\Magento\Sales\Model\RefundInvoice`][]

#### Exceptions

In case of failure, it returns an error object. Example in REST:

```json
{
  "message": "Creditmemo Document Validation Error(s):\nWe can't create creditmemo for the order.\nThe most money available to refund is 0."
}
```

#### Extension points

The service contains extension points marked with `@api` annotation. Extension developers can use APIs to extend service logic.

|Extension point | Description|
|---|---|
|[`\Magento\Sales\Api\OrderRepositoryInterface`]{:target="_blank"}| An interface for saving and retrieving Orders.|
|[`\Magento\Sales\Model\Order\OrderStateResolverInterface`]{:target="_blank"}| An interface providing a correct state of an Order according to performed operation.|
|[`\Magento\Sales\Api\InvoiceRepositoryInterface`]{:target="_blank"}| An interface for saving and retrieving Invoices.|
|[`\Magento\Sales\Api\CreditmemoRepositoryInterface`]{:target="_blank"}| An interface for saving and retrieving Credit Memos.|
|[`\Magento\Sales\Model\Order\CreditmemoDocumentFactory`]{:target="_blank"}| A factory for creating an Credit Memo data object. The factory uses the `arguments` parameter to process the extension attributes of a new Credit Memo.|
|[`\Magento\Sales\Model\Order\Creditmemo\NotifierInterface`]{:target="_blank"}| An interface for sending notifications about new Credit Memo creation.|
|[`\Magento\Sales\Model\Order\Validation\RefundInvoiceInterface`]{:target="_blank"}| An interface for validating service parameters and Credit Memo data object.|
|[`\Magento\Sales\Model\Order\RefundAdapterInterface`]{:target="_blank"}| An interface for a payment according to a selected option (online/offline). It returns Order with modified state, which contains payment specific information.|

## RefundOrder

With the RefundOrder service you can:

*  create a Credit Memo (complete or partial) for a particular Order
*  add details about refunded items to an Order
*  change status and state of an Order according to performed actions
*  notify a customer about performed refund operation

### Service parameters

#### orderId

An identifier of a target Order for operation.

*Format:* Integer

*Presence:* Required

#### items

An array of Order items included to a Credit Memo. By default, the service will create a Credit Memo for all Order items.

*Format:* Array of items with a format according to [ `\Magento\Sales\Api\Data\CreditmemoItemCreationInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Api/Data/CreditmemoItemCreationInterface.php).

*Default:* `[]`

*Presence:* Optional (required, when a Credit Memo must contain particular order items).

*Example:*

```json
[
  {
        "order_item_id": 1,
        "qty": 2
  },
  {
        "order_item_id": 2,
        "qty": 0.5
  }
]
```

#### notify

Flag that activates e-mail notification about Credit Memo creation. If `true`, the service notifies a customer; if `false`, it doesn't.

*Format:* Boolean

*Default:* false

*Presence:* Optional

#### appendComment

Flag that activates addition of a `comment` argument to the e-mail notification. If `true` and `comment` contains data, the service will add the comment to an e-mail notification.

*Format:* Boolean

*Default:* false

*Presence:* Optional

#### appendComment

Flag that activates addition of a `comment` argument to the e-mail notification. If `true` and `comment` contains data, the service will add the comment to an e-mail notification.

*Format:* Boolean

*Default:* false

*Presence:* Optional

#### comment

A comment to Credit Memo.

*Format:* A format according to the [ `\Magento\Sales\Api\Data\CreditmemoCommentCreationInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Api/Data/CreditmemoCommentCreationInterface.php).

*Default:* null

*Presence:* Optional

*Example:*

```json
{
  "comment": "The first Credit Memo",
  "is_visible_on_front": true
}
```

#### arguments

Additional arguments for the service. Can be used by extension modules.

*Format:* A format according to [ `\Magento\Sales\Api\Data\CreditmemoCreationArgumentsInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Api/Data/CreditmemoCreationArgumentsInterface.php).

*Default:* null

*Presence:* Optional

*Example:*

```json
{
"shipping_amount": 10.00,
"adjustment_positive": 5.00,
"adjustment_negative": 5.00
}
```

A parameter shipping_amount behaves like at the Credit Memo creation page in the Admin area. If shipping amount is not specified, then shipping amount from a target Invoice is refunded automatically. To specify a shipping amount, consider shipping tax displays settings.

### Return values

The service returns an identifier of a created Credit Memo.

### REST

#### POST Endpoint

`http://<magento_host>/rest/<store_code>/V1/order/<orderId>/refund`

#### REST Declaration

[`etc/webapi.xml`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/etc/webapi.xml)

```xml
<route url="/V1/order/:orderId/refund" method="POST">
    <service class="Magento\Sales\Api\RefundOrderInterface" method="execute"/>
    <resources>
        <resource ref="Magento_Sales::creditmemo" />
    </resources>
</route>
```

### SOAP

#### SOAP Endpoint

`http://<magento_host>/soap/<store_code>?wsdl&services=salesRefundOrderV1`

### PHP interface

[\Magento\Sales\Api\RefundOrderInterface][]

### PHP implementation

[`\Magento\Sales\Model\RefundOrder`][]

#### Exceptions

In case of failure, it returns an error object. Example in REST:

```json
{
  "message": "Creditmemo Document Validation Error(s):\nWe can't create creditmemo for the order.\nThe most money available to refund is 0."
}
```

#### Extension points

The service contains extension points marked with `@api` annotation. Extension developers can use APIs to extend service logic.

|Extension point | Description|
|---|---|
|[`\Magento\Sales\Api\OrderRepositoryInterface`]{:target="_blank"}| An interface for saving and retrieving Orders.|
|[`\Magento\Sales\Model\Order\OrderStateResolverInterface`]{:target="_blank"}| An interface providing a correct state of an Order according to performed operation.|
|[`\Magento\Sales\Api\CreditmemoRepositoryInterface`]{:target="_blank"}| An interface for saving and retrieving Credit Memos.|
|[`\Magento\Sales\Model\Order\CreditmemoDocumentFactory`]{:target="_blank"}| A factory for creating an Credit Memo data object. The factory uses the `arguments` parameter to process the extension attributes of a new Credit Memo.|
|[`\Magento\Sales\Model\Order\Creditmemo\NotifierInterface`]{:target="_blank"}| An interface for sending notifications about new Credit Memo creation.|
|[`\Magento\Sales\Model\Order\Validation\RefundOrderInterface`]{:target="_blank"}| An interface for validating service parameters and Credit Memo data object.|
|[`\Magento\Sales\Model\Order\RefundAdapterInterface`]{:target="_blank"}| An interface for a payment according to a selected option (online/offline). It returns Order with modified state, which contains payment specific information.|

## ShipOrder

With the ShipOrder service you can:

*  create a [shipment](https://glossary.magento.com/shipment) document (full or partial)
*  add details about shipped items into an order
*  change status and state of an order according to performed actions
*  notify the customer of a new [shipment document](https://glossary.magento.com/shipment-document)

### Service parameters

#### orderId

An identifier of a target order for operation.

*Format:* Integer

*Presence:* Required

#### items

An array of order items included to a shipment. By default, the service will create a shipment for all order items.

*Format:* Array of items with a format according to [`\Magento\Sales\Api\Data\ShipmentItemCreationInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Api/Data/ShipmentItemCreationInterface.php).

*Default:* `[]`

*Presence:* Optional (required, when a shipment document must contain particular order items).

*Example:*

```json
[
  {
      "order_item_id": 1,
      "qty": 2
  },
  {
      "order_item_id": 2,
      "qty": 0.5
  }
]
```

#### notify

Flag that activates e-mail notification about shipment details. If `true`, the service notifies a customer; if `false`, it doesn't.

*Format:* Boolean

*Default:* false

*Presence:* Optional

#### appendComment

Flag that activates addition of a `comment` argument to the e-mail notification. If `true` and `comment` contains data, the service will add the comment to an e-mail notification.

*Format:* Boolean

*Default:* false

*Presence:* Optional

#### comment

A comment about a shipment.

*Format:* A format according to the [`\Magento\Sales\Api\Data\CreditmemoCommentCreationInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Api/Data/CreditmemoCommentCreationInterface.php) interface.

*Default:* null

*Presence:* Optional

*Example:*

```json
{
    "comment": "The first Invoice",
    "is_visible_on_front": true
}
```

#### tracks

A list of track numbers attached to a shipment.

*Format:* Array of objects with a format according to [`\Magento\Sales\Api\Data\ShipmentTrackCreationInterface>`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Api/Data/ShipmentTrackCreationInterface.php).

*Default:* `[]`

*Presence:* Optional

*Example:*

```json
[
    {
        "track_number": "132456789",
        "title": "United States Postal Service",
        "carrier_code": "usps"
    }
]
```

#### packages

A list of packages attached to a shipment.

*Format:* Array of objects with a format according to [`\Magento\Sales\Api\Data\ShipmentPackageCreationInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Api/Data/ShipmentPackageCreationInterface.php).

*Default:* `[]`

*Presence:* Optional

*Example:*

```json
[
    {
        "extension_attributes":
        {
            "ups":
                {
                    "weight": 20,
                    "height": 15,
                    "width": 20
                }
        }
      }
]
```

#### arguments

Additional arguments for the service. Can be used by extension modules.

*Format:* A format according to the [`\Magento\Sales\Api\Data\CreditmemoCreationArgumentsInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Api/Data/CreditmemoCreationArgumentsInterface.php) interface.

*Default:* null

*Presence:* Optional

### Return values

The service returns the identifier of a created shipment.

### REST

#### POST Endpoint

`http://<magento_host>/rest/<store_code>/V1/order/<orderId>/ship`

#### REST Declaration

[`etc/webapi.xml`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/etc/webapi.xml)

```xml
<route url="/V1/order/:orderId/ship" method="POST">
    <service class="Magento\Sales\Api\ShipOrderInterface" method="execute"/>
    <resources>
        <resource ref="Magento_Sales::ship" />
    </resources>
</route>
```

### SOAP

#### SOAP Endpoint

`http://<magento_host>/soap/<store_code>?wsdl&services=salesShipOrderV1`

### PHP interface

[`\Magento\Sales\Api\ShipOrderInterface`][]

### PHP implementation

[`\Magento\Sales\Model\ShipOrder`][]

#### Exceptions

In case of failure, it returns an error object. Example in REST:

```json
{
  "message": "Creditmemo Document Validation Error(s):\nWe can't create creditmemo for the order.\nThe most money available to refund is 0."
}
```

#### Extension points

The service contains extension points marked with `@api` annotation. Extension developers can use APIs to extend service logic.

|Extension point | Description
|---|---
|[`\Magento\Sales\Api\OrderRepositoryInterface`]{:target="_blank"}| An interface for saving and retrieving Orders.
|[`\Magento\Sales\Model\Order\OrderStateResolverInterface`]{:target="_blank"}| An interface providing a correct state of an Order according to performed operation.
|[`\Magento\Sales\Api\ShipmentRepositoryInterface`]{:target="_blank"}| An interface for saving and retrieving Shipments.
|[`\Magento\Sales\Model\Order\ShipmentDocumentFactory`]{:target="_blank"}| A factory creating a Shipment data object. The factory uses the `arguments` parameter to process the extension attributes of a new shipment document.
|[`\Magento\Sales\Model\Order\Shipment\NotifierInterface`]{:target="_blank"}| An interface for sending notifications about new Shipment creation.
|[`\Magento\Sales\Model\Order\Validation\ShipOrderInterface`]{:target="_blank"}| An interface for validating the service parameters and created Shipment data object.
|[`\Magento\Sales\Model\Order\Shipment\OrderRegistrarInterface`]{:target="_blank"}| An interface for registering a Shipment in Order to update amount of shipped items in a given Order according to Shipment. The `execute` method returns an updated Order.

<!-- LINK DEFINITIONS -->

[`\Magento\Sales\Api\CreditmemoRepositoryInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Api/CreditmemoRepositoryInterface.php
[`\Magento\Sales\Api\OrderRepositoryInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Api/OrderRepositoryInterface.php
[`\Magento\Sales\Model\Order\OrderStateResolverInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Model/Order/OrderStateResolverInterface.php
[`\Magento\Sales\Api\ShipmentRepositoryInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Api/ShipmentRepositoryInterface.php
[`\Magento\Sales\Model\Order\CreditmemoDocumentFactory`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Model/Order/CreditmemoDocumentFactory.php
[`\Magento\Sales\Model\Order\ShipmentDocumentFactory`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Model/Order/ShipmentDocumentFactory.php
[`\Magento\Sales\Model\Order\Creditmemo\NotifierInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Model/Order/Shipment/NotifierInterface.php
[`\Magento\Sales\Model\Order\Shipment\NotifierInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Model/Order/Shipment/NotifierInterface.php
[`\Magento\Sales\Model\Order\Validation\RefundInvoiceInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Model/Order/Validation/RefundInvoiceInterface.php
[`\Magento\Sales\Model\Order\Validation\RefundOrderInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Model/Order/Validation/RefundOrderInterface.php
[`\Magento\Sales\Model\Order\Validation\ShipOrderInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Model/Order/Validation/ShipOrderInterface.php
[`\Magento\Sales\Model\Order\Shipment\OrderRegistrarInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Model/Order/Shipment/OrderRegistrarInterface.php
[`\Magento\Sales\Api\InvoiceRepositoryInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Api/InvoiceRepositoryInterface.php
[`\Magento\Sales\Model\Order\InvoiceDocumentFactory`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Model/Order/InvoiceDocumentFactory.php
[`\Magento\Sales\Model\Order\Invoice\NotifierInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Model/Order/Invoice/NotifierInterface.php
[`\Magento\Sales\Model\Order\Validation\InvoiceOrderInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Model/Order/Validation/InvoiceOrderInterface.php
[`\Magento\Sales\Model\Order\PaymentAdapterInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Model/Order/PaymentAdapterInterface.php
[`\Magento\Sales\Model\Order\RefundAdapterInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Model/Order/RefundAdapterInterface.php
[`\Magento\Sales\Api\RefundOrderInterface`]: {{ site.mage2bloburl }}/2.2/app/code/Magento/Sales/Api/RefundOrderInterface.php
[`\Magento\Sales\Model\RefundOrder`]: {{ site.mage2bloburl }}/2.2/app/code/Magento/Sales/Model/RefundOrder.php
[`\Magento\Sales\Api\ShipOrderInterface`]: {{ site.mage2bloburl }}/2.2/app/code/Magento/Sales/Api/ShipOrderInterface.php
[`\Magento\Sales\Model\ShipOrder`]: {{ site.mage2bloburl }}/2.2/app/code/Magento/Sales/Model/ShipOrder.php
[`\Magento\Sales\Api\InvoiceOrderInterface`]: {{ site.mage2bloburl }}/2.2/app/code/Magento/Sales/Api/InvoiceOrderInterface.php
[`\Magento\Sales\Model\InvoiceOrder`]: {{ site.mage2bloburl }}/2.2/app/code/Magento/Sales/Model/InvoiceOrder.php
[`\Magento\Sales\Api\RefundInvoiceInterface`]: {{ site.mage2bloburl }}/2.2/app/code/Magento/Sales/Api/RefundInvoiceInterface.php
[`\Magento\Sales\Model\RefundInvoice`]: {{ site.mage2bloburl }}/2.2/app/code/Magento/Sales/Model/RefundInvoice.php