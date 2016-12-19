---
layout: default
group: mrg
subgroup: Community Edition
title: Magento_Sales module API
menu_title: Services/API
menu_order:
version: 2.0
tabgroup: sales-module
tablabel: Services/APIs
tabweight: 30
level3_menu_node: level3child
level3_subgroup: Sales
github_link: mrg/ce/Sales/services.md
---

## InvoiceOrder

### Description

The InvoiceOrder service introduces a capability to execute Magento native business flow of the Sales module using API.

With this service you can:

- create an invoice document (full or partial)
- capture money placed with order payment
- notify a customer about document creation
- change order status and state

### Parameters

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Format</th>
      <th>Example</th>
      <th>Required / Optional</th>
      <th>Default value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>orderId</code></td>
      <td>An identifier of a target order for operation.</td>
      <td>Integer</td>
      <td>&nbsp;</td>
      <td>Required</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><code>items</code></td>
      <td>An array of order items that will be included to invoice. By default, the invoice will contain all order items.</td>
      <td>Array of items with a format according to <a href="{{site.mage2000url}}app/code/Magento/Sales/Api/Data/InvoiceItemCreationInterface.php"><code>\Magento\Sales\Api\Data\InvoiceItemCreationInterface</code></a>.</td>
      <td>
      {% highlight json %}
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
      {% endhighlight %}
      </td>
      <td>Optional (required, when invoice must contain particular order items.</td>
      <td><code>[]</code></td>
    </tr>
    <tr>
      <td><code>capture</code></td>
      <td>Flag that sets whether the customer’s payment can be captured using an online payments system (for example, PayPal). <strong>IMPORTANT: If you created Invoice with the flag set to default value (<code>false</code>), you will not be able to capture money in Magento on the corresponding Invoice.</strong></td>
      <td>Boolean</td>
      <td>&nbsp;</td>
      <td>Optional</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>notify</code></td>
      <td>Flag that activates e-mail notification about new invoice for a customer. If <code>true</code>, the service will notify a customer. If <code>false</code>, the service won’t notify a customer.</td>
      <td>Boolean</td>
      <td>&nbsp;</td>
      <td>Optional</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>appendComment</code></td>
      <td>Flag that determines whether a <code>comment</code> argument must be included in an e-mail notification. If <code>true</code>, the service adds the comment.</td>
      <td>Boolean</td>
      <td>&nbsp;</td>
      <td>Optional</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>comment</code></td>
      <td>The comment to add to an invoice. Specify a comment if <code>appendComment</code> is set to <code>true</code>.</td>
      <td>A format according to <a href="{{site.mage2000url}}app/code/Magento/Sales/Api/Data/InvoiceCommentCreationInterface.php"><code>\Magento\Sales\Api\Data\InvoiceCommentCreationInterface</code></a>.</td>
      <td>
      {% highlight json %}
      {
          "comment": "The first Invoice",
          "is_visible_on_front": true
      }
      {% endhighlight %}
      </td>
      <td>Optional</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td><code>arguments</code></td>
      <td>Additional arguments. Reserved for use by extension modules.</td>
      <td>A format according to <a href="{{site.mage2000url}}app/code/Magento/Sales/Api/Data/InvoiceCreationArgumentsInterface.php"><code>\Magento\Sales\Api\Data\InvoiceCreationArgumentsInterface</code></a>.</td>
      <td>&nbsp;</td>
      <td>Optional</td>
      <td><code>null</code></td>
    </tr>
  </tbody>
</table>

### Return values

The service returns an identifier of the created Invoice.

### REST

#### POST Endpoint

`http://<magento_host>/rest/<store_code>/V1/<orderId>/invoice`

#### REST declaration

[`etc/webapi.xml`](https://github.com/magento/magento2/blob/2.0/app/code/Magento/Sales/etc/webapi.xml)

{% highlight xml %}
<route url="/V1/order/:orderId/invoice" method="POST">
    <service class="Magento\Sales\Api\InvoiceOrderInterface" method="execute"/>
    <resources>
        <resource ref="Magento_Sales::sales" />
    </resources>
</route>
{% endhighlight %}

### SOAP

#### SOAP Endpoint

`http://<magento_host>/soap/<store_code>?wsdl&services=salesInvoiceOrderV1`

### PHP interface

`\Magento\Sales\Api\InvoiceOrderInterface`

{% collapsible Click to show/hide a code %}

{% highlight php %}
{% remote_markdown https://raw.githubusercontent.com/magento/magento2/2.0/app/code/Magento/Sales/Api/InvoiceOrderInterface.php %}
{% endhighlight %}

{% endcollapsible %}

### PHP implementation

`\Magento\Sales\Model\InvoiceOrder`

{% collapsible Click to show/hide included code %}

{% highlight php %}
{% remote_markdown https://raw.githubusercontent.com/magento/magento2/2.0/app/code/Magento/Sales/Model/InvoiceOrder.php %}
{% endhighlight %}

{% endcollapsible %}

#### Exceptions

In case of failure, it returns an error object. Example in REST:

{% highlight json %}
{
    "message": "Creditmemo Document Validation Error(s):\nWe can't create creditmemo for the order.\nThe most money available to refund is 0."
}
{% endhighlight %}

#### Extension points

The service implementation contains extension points marked with `@api` annotation. Extension developers can use APIs to extend service logic.

|Extension point | Description
|---|---
|[`\Magento\Sales\Api\OrderRepositoryInterface`]{:target="_blank"}| An interface for saving and retrieving Orders.
|[`\Magento\Sales\Model\Order\OrderStateResolverInterface`]{:target="_blank"}| An interface which provides a correct state of an Order according to performed operation.
|[`\Magento\Sales\Api\InvoiceRepositoryInterface`]{:target="_blank"}| An interface for saving and retrieving Shipments.
|[`\Magento\Sales\Model\Order\InvoiceDocumentFactory`]{:target="_blank"}|	A factory for creating an Invoice data object. The factory uses the `arguments` parameter to process the extension attributes of a new Invoice.
|[`\Magento\Sales\Model\Order\Invoice\NotifierInterface`]{:target="_blank"}| An interface for sending notifications about new Invoice creation.
|[`\Magento\Sales\Model\Order\Validation\InvoiceOrderInterface`]{:target="_blank"}| An interface for validating service parameters and Invoice data object.
|[`\Magento\Sales\Model\Order\PaymentAdapterInterface`]{:target="_blank"}| An interface for a payment according to a selected option (online/offline). It returns Order with modified state, which contains payment specific information.




## RefundInvoice

### Description

The RefundInvoice service introduces a capability to execute Magento native business flow of the Sales module using API.

Please note, that current service is available only for invoices created using online payment methods. If you try to apply it to an Invoice created using offline payment method, system will throw a validation error.

With this service you can:

   * create a Credit Memo (complete or partial) for particular Invoice
   * add details about refunded items to an Order
   * change status and state of an Order according to performed actions
   * notify a customer about performed refund operation
   
### Service parameters

<table>
  <thead>
    <tr>
      <th>
        Name
      </th>
      <th>
        Description
      </th>
      <th>
        Format
      </th>
      <th>
        Example
      </th>
      <th>
        Required/Optional
      </th>
      <th>
        Default value
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>invoiceId</code>
      </td>
      <td>
        An identifier of a target Invoice for operation.
      </td>
      <td>
        Integer
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        Required
      </td>
      <td>
        &nbsp;
      </td>
    </tr>
    <tr>
      <td>
        <code>items</code>
      </td>
      <td>
        An array of invoice items included to a Credit Memo. By
        default, the service will create a Credit Memo for all
        invoice items.
      </td>
      <td>
        Array of items with a format according to <a href=
        "{{site.mage2000url}}app/code/Magento/Sales/Api/Data/CreditmemoItemCreationInterface.php">
        <code>\Magento\Sales\Api\Data\CreditmemoItemCreationInterface</code></a>.
      </td>
      <td>
        {% highlight json %}
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
        {% endhighlight %}
      </td>
      <td>
        Optional (required, when a Credit Memo must contain
        particular order items)
      </td>
      <td>
        <code>[]</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>isOnline</code>
      </td>
      <td>
        Flag that determines whether funds should be returned to a
        customer via online payment system (PayPal for example) or
        not.
      </td>
      <td>
        Boolean
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        Optional
      </td>
      <td>
        <code>false</code>
      </td>
    </tr>
    <tr>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>notify</code>
      </td>
      <td>
        Flag that activates e-mail notification about Credit Memo
        creation. If <code>true</code>, the service notifies a
        customer; if <code>false</code>, it doesn't.
      </td>
      <td>
        Boolean
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        Optional
      </td>
      <td>
        <code>false</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>appendComment</code>
      </td>
      <td>
        Flag that activates addition of a <code>comment</code>
        argument to the e-mail notification. If <code>true</code>
        and <code>comment</code> contains data, the service will
        add the comment to an e-mail notification.
      </td>
      <td>
        Boolean
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        Optional
      </td>
      <td>
        <code>false</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>comment</code>
      </td>
      <td>
        A comment to Credit Memo.
      </td>
      <td>
        A format according to the <a href=
        "{{site.mage2000url}}app/code/Magento/Sales/Api/Data/CreditmemoCommentCreationInterface.php">
        <code>\Magento\Sales\Api\Data\CreditmemoCommentCreationInterface</code></a>.
      </td>
      <td>
        {% highlight json %}
        {
            "comment": "The first Credit Memo",
            "is_visible_on_front": true
        }
        {% endhighlight %}
      </td>
      <td>
        Optional
      </td>
      <td>
        <code>null</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>arguments</code>
      </td>
      <td>
        Additional arguments for the service. Can be used by
        extension modules.
      </td>
      <td>
        A format according to <a href=
        "{{site.mage2000url}}app/code/Magento/Sales/Api/Data/CreditmemoCreationArgumentsInterface.php">
        <code>\Magento\Sales\Api\Data\CreditmemoCreationArgumentsInterface</code></a>.
      </td>
      <td>
        {% highlight json %}
        {
        "shipping_amount": 10.00,
        "adjustment_positive": 5.00,
        "adjustment_negative": 5.00
        }
        {% endhighlight %}
        A parameter <code>shipping_amount</code>
        behaves like at the Credit Memo creation page in the Admin
        area. If shipping amount is not specified, then shipping
        amount from a target Invoice is refunded automatically. To
        specify a shipping amount, consider shipping tax displays
        settings.
      </td>
      <td>
        Optional
      </td>
      <td>
        <code>null</code>
      </td>
    </tr>
  </tbody>
</table>

### Return values

The service returns an identifier of a created Credit Memo.

### REST

#### POST Endpoint

`http://<magento_host>/rest/<store_code>/V1/<invoiceId>/refund`

#### REST Declaration

[`etc/webapi.xml`](https://github.com/magento/magento2/blob/2.0/app/code/Magento/Sales/etc/webapi.xml)

{% highlight xml %}
<route url="/V1/invoice/:invoiceId/refund" method="POST">
    <service class="Magento\Sales\Api\RefundInvoiceInterface" method="execute"/>
    <resources>
        <resource ref="Magento_Sales::sales" />
    </resources>
</route>
{% endhighlight %}

### SOAP

#### SOAP Endpoint

`http://<magento_host>/soap/<store_code>?wsdl&services=salesRefundInvoiceV1`

### PHP interface

`\Magento\Sales\Api\RefundInvoiceInterface`

{% collapsible Click to show/hide a code %}

{% highlight php %}
{% remote_markdown https://raw.githubusercontent.com/magento/magento2/2.0/app/code/Magento/Sales/Api/RefundInvoiceInterface.php %}
{% endhighlight %}

{% endcollapsible %}

### PHP implementation

`\Magento\Sales\Model\RefundInvoice`

{% collapsible Click to show/hide a code %}

{% highlight php %}
{% remote_markdown https://raw.githubusercontent.com/magento/magento2/2.0/app/code/Magento/Sales/Model/RefundInvoice.php %}
{% endhighlight %}

{% endcollapsible %}

#### Exceptions

In case of failure, it returns an error object. Example in REST:

{% highlight json %}
{
    "message": "Creditmemo Document Validation Error(s):\nWe can't create creditmemo for the order.\nThe most money available to refund is 0."
}
{% endhighlight %}

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

### Description

With the RefundOrder service you can:

- create a Credit Memo (complete or partial) for a particular Order
- add details about refunded items to an Order
- change status and state of an Order according to performed actions
- notify a customer about performed refund operation

### Service parameters

<table>
  <thead>
    <tr>
      <th>
        Name
      </th>
      <th>
        Description
      </th>
      <th>
        Format
      </th>
      <th>
        Example
      </th>
      <th>
        Required/Optional
      </th>
      <th>
        Default value
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>orderId</code>
      </td>
      <td>
        An identifier of a target Order for operation.
      </td>
      <td>
        Integer
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        Required
      </td>
      <td>
        &nbsp;
      </td>
    </tr>
    <tr>
      <td>
        <code>items</code>
      </td>
      <td>
        An array of Order items included to a Credit Memo. By
        default, the service will create a Credit Memo for all
        Order items.
      </td>
      <td>
        Array of items with a format according to <a href=
        "{{site.mage2000url}}app/code/Magento/Sales/Api/Data/CreditmemoItemCreationInterface.php">
        <code>\Magento\Sales\Api\Data\CreditmemoItemCreationInterface</code></a>.
      </td>
      <td>
        {% highlight json %}
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
        {% endhighlight %}
      </td>
      <td>
        Optional (required, when a Credit Memo must contain
        particular order items)
      </td>
      <td>
        <code>[]</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>notify</code>
      </td>
      <td>
        Flag that activates e-mail notification about Credit Memo
        creation. If <code>true</code>, the service notifies a
        customer; if <code>false</code>, it doesn't.
      </td>
      <td>
        Boolean
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        Optional
      </td>
      <td>
        <code>false</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>appendComment</code>
      </td>
      <td>
        Flag that activates addition of a <code>comment</code>
        argument to the e-mail notification. If <code>true</code>
        and <code>comment</code> contains data, the service will
        add the comment to an e-mail notification.
      </td>
      <td>
        Boolean
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        Optional
      </td>
      <td>
        <code>false</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>comment</code>
      </td>
      <td>
        A comment to Credit Memo.
      </td>
      <td>
        A format according to the <a href=
        "{{site.mage2000url}}app/code/Magento/Sales/Api/Data/CreditmemoCommentCreationInterface.php">
        <code>\Magento\Sales\Api\Data\CreditmemoCommentCreationInterface</code></a>.
      </td>
      <td>
        {% highlight json %}
        {
            "comment": "The first Credit Memo",
            "is_visible_on_front": true
        }
        {% endhighlight %}
      </td>
      <td>
        Optional
      </td>
      <td>
        <code>null</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>arguments</code>
      </td>
      <td>
        Additional arguments for the service. Can be used by
        extension modules.
      </td>
      <td>
        A format according to <a href=
        "{{site.mage2000url}}app/code/Magento/Sales/Api/Data/CreditmemoCreationArgumentsInterface.php">
        <code>\Magento\Sales\Api\Data\CreditmemoCreationArgumentsInterface</code></a>.
      </td>
      <td>
        {% highlight json %}
        {
        "shipping_amount": 10.00,
        "adjustment_positive": 5.00,
        "adjustment_negative": 5.00
        }
        {% endhighlight %}
        A parameter <code>shipping_amount</code>
        behaves like at the Credit Memo creation page in the Admin
        area. If shipping amount is not specified, then shipping
        amount from a target Invoice is refunded automatically. To
        specify a shipping amount, consider shipping tax displays
        settings.
      </td>
      <td>
        Optional
      </td>
      <td>
        <code>null</code>
      </td>
    </tr>
  </tbody>
</table>

### Return values

The service returns an identifier of a created Credit Memo.

### REST

#### POST Endpoint

`http://<magento_host>/rest/<store_code>/V1/<orderId>/refund`

#### REST Declaration

[`etc/webapi.xml`](https://github.com/magento/magento2/blob/2.0/app/code/Magento/Sales/etc/webapi.xml)

{% highlight xml %}
<route url="/V1/order/:orderId/refund" method="POST">
    <service class="Magento\Sales\Api\RefundOrderInterface" method="execute"/>
    <resources>
        <resource ref="Magento_Sales::sales" />
    </resources>
</route>
{% endhighlight %}

### SOAP

#### SOAP Endpoint

`http://<magento_host>/soap/<store_code>?wsdl&services=salesRefundOrderV1`

### PHP interface

`\Magento\Sales\Api\RefundOrderInterface`

{% collapsible Click to show/hide a code %}

{% highlight php %}
{% remote_markdown https://raw.githubusercontent.com/magento/magento2/2.0/app/code/Magento/Sales/Api/RefundOrderInterface.php %}
{% endhighlight %}

{% endcollapsible %}

### PHP implementation

`\Magento\Sales\Model\RefundOrder`

{% collapsible Click to show/hide a code %}

{% highlight php %}
{% remote_markdown https://raw.githubusercontent.com/magento/magento2/2.0/app/code/Magento/Sales/Model/RefundOrder.php %}
{% endhighlight %}

{% endcollapsible %}

#### Exceptions

In case of failure, it returns an error object. Example in REST:

{% highlight json %}
{
    "message": "Creditmemo Document Validation Error(s):\nWe can't create creditmemo for the order.\nThe most money available to refund is 0."
}
{% endhighlight %}

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

### Description

With the ShipOrder service you can:

- create a shipment document (full or partial)
- add details about shipped items into an order
- change status and state of an order according to performed actions
- notify the customer of a new shipment document

### Service parameters

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Format</th>
      <th>Example</th>
      <th>Required/Optional</th>
      <th>Default value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>orderId</code></td>
      <td>An identifier of a target order for operation.</td>
      <td>Integer</td>
      <td>&nbsp;</td>
      <td>Required</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><code>items</code></td>
      <td>An array of order items included to a shipment. By default, the service will create a shipment for all order items.</td>
      <td>Array of items with a format according to <a href="{{site.mage2000url}}app/code/Magento/Sales/Api/Data/ShipmentItemCreationInterface.php"><code>\Magento\Sales\Api\Data\ShipmentItemCreationInterface</code></a>.</td>
      <td>
        {% highlight json %}
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
        {% endhighlight %}
      </td>
      <td>Optional (required, when a shipment document must contain particular order items)</td>
      <td><code>[]</code></td>
    </tr>
    <tr>
      <td><code>notify</code></td>
      <td>Flag that activates e-mail notification about shipment details. If <code>true</code>, the service notifies a customer; if <code>false</code>, it doesn't.</td>
      <td>Boolean</td>
      <td>&nbsp;</td>
      <td>Optional</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>appendComment</code></td>
      <td>Flag that activates addition of a <code>comment</code> argument to the e-mail notification. If <code>true</code> and <code>comment</code> contains data, the service will add the comment to an e-mail notification.</td>
      <td>Boolean</td>
      <td>&nbsp;</td>
      <td>Optional</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>comment</code></td>
      <td>A comment about a shipment.</td>
      <td>A format according to the
        <a href="{{site.mage2000url}}app/code/Magento/Sales/Api/Data/CreditmemoCommentCreationInterface.php"><code>\Magento\Sales\Api\Data\CreditmemoCommentCreationInterface</code></a>
        interface.</td>
      <td>
      {% highlight json %}
      {   
          "comment": "The first Invoice",
          "is_visible_on_front": true
      }
      {% endhighlight %}
      </td>
      <td> Optional </td>
      <td> <code>null</code> </td>
    </tr>
    <tr>
      <td> <code>tracks</code> </td>
      <td> A list of track numbers attached to a shipment. </td>
      <td> Array of objects with a format according to
        <a href="{{site.mage2000url}}app/code/Magento/Sales/Api/Data/ShipmentTrackCreationInterface.php"><code>\Magento\Sales\Api\Data\ShipmentTrackCreationInterface></code></a>. </td>
      <td>
      {% highlight json %}
      [
          {
              "track_number": "132456789",
              "title": "United States Postal Service",
              "carrier_code": "usps"
          }
      ]
      {% endhighlight %}
      </td>
      <td> Optional </td>
      <td> <code>[]</code> </td>
    </tr>
    <tr>
      <td> <code>packages</code> </td>
      <td> A list of packages attached to a shipment. </td>
      <td> Array of objects with a format according to
        <a href="{{site.mage2000url}}app/code/Magento/Sales/Api/Data/ShipmentPackageCreationInterface.php"><code>\Magento\Sales\Api\Data\ShipmentPackageCreationInterface</code></a>. </td>
      <td>
      {% highlight json %}
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
      {% endhighlight %}
      </td>
      <td>Optional</td>
      <td><code>[]</code></td>
    </tr>
    <tr>
      <td><code>arguments</code></td>
      <td>Additional arguments for the service. Can be used by
        extension modules.</td>
      <td>A format according to the
        <a href="{{site.mage2000url}}app/code/Magento/Sales/Api/Data/CreditmemoCreationArgumentsInterface.php"><code>\Magento\Sales\Api\Data\CreditmemoCreationArgumentsInterface</code></a>
        interface.</td>
      <td>&nbsp;</td>
      <td>Optional</td>
      <td><code>null</code></td>
    </tr>
  </tbody>
</table>

### Return values

The service returns the identifier of a created shipment.

### REST

#### POST Endpoint

`http://<magento_host>/rest/<store_code>/V1/<orderId>/ship`

#### REST Declaration

[`etc/webapi.xml`](https://github.com/magento/magento2/blob/2.0/app/code/Magento/Sales/etc/webapi.xml)

{% highlight xml %}
<route url="/V1/order/:orderId/ship" method="POST">
    <service class="Magento\Sales\Api\ShipOrderInterface" method="execute"/>
    <resources>
        <resource ref="Magento_Sales::sales" />
    </resources>
</route>
{% endhighlight %}

### SOAP

#### SOAP Endpoint

`http://<magento_host>/soap/<store_code>?wsdl&services=salesShipOrderV1`

### PHP interface

`\Magento\Sales\Api\ShipOrderInterface`

{% collapsible Click to show/hide a code %}

{% highlight php %}
{% remote_markdown https://raw.githubusercontent.com/magento/magento2/2.0/app/code/Magento/Sales/Api/ShipOrderInterface.php %}
{% endhighlight %}

{% endcollapsible %}

### PHP implementation

`\Magento\Sales\Model\ShipOrder`

{% collapsible Click to show/hide a code %}

{% highlight php %}
{% remote_markdown https://raw.githubusercontent.com/magento/magento2/2.0/app/code/Magento/Sales/Model/ShipOrder.php %}
{% endhighlight %}

{% endcollapsible %}

#### Exceptions

In case of failure, it returns an error object. Example in REST:

{% highlight json %}
{
    "message": "Creditmemo Document Validation Error(s):\nWe can't create creditmemo for the order.\nThe most money available to refund is 0."
}
{% endhighlight %}

#### Extension points

The service contains extension points marked with `@api` annotation. Extension developers can use APIs to extend service logic.

|Extension point | Description
|---|---
|[`\Magento\Sales\Api\OrderRepositoryInterface`]{:target="_blank"}| An interface for saving and retrieving Orders.
|[`\Magento\Sales\Model\Order\OrderStateResolverInterface`]{:target="_blank"}| An interface providing a correct state of an Order according to performed operation.
|[`\Magento\Sales\Api\ShipmentRepositoryInterface`]{:target="_blank"}| An interface for saving and retrieving Shipments.
|[`\Magento\Sales\Model\Order\ShipmentDocumentFactory`]{:target="_blank"}|	A factory creating a Shipment data object. The factory uses the `arguments` parameter to process the extension attributes of a new shipment document.
|[`\Magento\Sales\Model\Order\Shipment\NotifierInterface`]{:target="_blank"}| An interface for sending notifications about new Shipment creation.
|[`\Magento\Sales\Model\Order\Validation\ShipOrderInterface`]{:target="_blank"}| An interface for validating the service parameters and created Shipment data object.
|[`\Magento\Sales\Model\Order\Shipment\OrderRegistrarInterface`]{:target="_blank"}| An interface for registering a Shipment in Order to update amount of shipped items in a given Order according to Shipment. The `execute` method returns an updated Order.

<!-- LINK DEFINITIONS -->

[`\Magento\Sales\Api\CreditmemoRepositoryInterface`]: {{site.mage2000url}}app/code/Magento/Sales/Api/CreditmemoRepositoryInterface.php
[`\Magento\Sales\Api\OrderRepositoryInterface`]: {{site.mage2000url}}app/code/Magento/Sales/Api/OrderRepositoryInterface.php
[`\Magento\Sales\Model\Order\OrderStateResolverInterface`]: {{site.mage2000url}}app/code/Magento/Sales/Model/Order/OrderStateResolverInterface.php
[`\Magento\Sales\Api\ShipmentRepositoryInterface`]: {{site.mage2000url}}app/code/Magento/Sales/Api/ShipmentRepositoryInterface.php
[`\Magento\Sales\Model\Order\CreditmemoDocumentFactory`]: {{site.mage2000url}}app/code/Magento/Sales/Model/Order/CreditmemoDocumentFactory.php
[`\Magento\Sales\Model\Order\ShipmentDocumentFactory`]: {{site.mage2000url}}app/code/Magento/Sales/Model/Order/ShipmentDocumentFactory.php
[`\Magento\Sales\Model\Order\Creditmemo\NotifierInterface`]: {{site.mage2000url}}app/code/Magento/Sales/Model/Order/Shipment/NotifierInterface.php
[`\Magento\Sales\Model\Order\Shipment\NotifierInterface`]: {{site.mage2000url}}app/code/Magento/Sales/Model/Order/Shipment/NotifierInterface.php
[`\Magento\Sales\Model\Order\Validation\RefundInvoiceInterface`]: {{site.mage2000url}}app/code/Magento/Sales/Model/Order/Validation/RefundInvoiceInterface.php
[`\Magento\Sales\Model\Order\Validation\RefundOrderInterface`]: {{site.mage2000url}}app/code/Magento/Sales/Model/Order/Validation/RefundOrderInterface.php
[`\Magento\Sales\Model\Order\Validation\ShipOrderInterface`]: {{site.mage2000url}}app/code/Magento/Sales/Model/Order/Validation/ShipOrderInterface.php
[`\Magento\Sales\Model\Order\Shipment\OrderRegistrarInterface`]: {{site.mage2000url}}app/code/Magento/Sales/Model/Order/Shipment/OrderRegistrarInterface.php
[`\Magento\Sales\Api\InvoiceRepositoryInterface`]: {{site.mage2000url}}app/code/Magento/Sales/Api/InvoiceRepositoryInterface.php
[`\Magento\Sales\Model\Order\InvoiceDocumentFactory`]: {{site.mage2000url}}app/code/Magento/Sales/Model/Order/InvoiceDocumentFactory.php
[`\Magento\Sales\Model\Order\Invoice\NotifierInterface`]: {{site.mage2000url}}app/code/Magento/Sales/Model/Order/Invoice/NotifierInterface.php
[`\Magento\Sales\Model\Order\Validation\InvoiceOrderInterface`]: {{site.mage2000url}}app/code/Magento/Sales/Model/Order/Validation/InvoiceOrderInterface.php
[`\Magento\Sales\Model\Order\PaymentAdapterInterface`]: {{site.mage2000url}}app/code/Magento/Sales/Model/Order/PaymentAdapterInterface.php
[`\Magento\Sales\Model\Order\RefundAdapterInterface`]: {{site.mage2000url}}app/code/Magento/Sales/Model/Order/RefundAdapterInterface.php
