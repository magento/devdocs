---
layout: default
group:
subgroup: Community Edition
title: Magento_Sales module services/APIs
menu_title: Services/APIs
menu_order:
version: 2.1
tabgroup:
tablabel: Services/APIs
tabweight: 30
level3_menu_node: level3child
level3_subgroup: 
github_link: mrg/ce/Sales/services.md
---


## InvoiceOrder

### Description

The service introduces a capability to execute Magento native business flow of the Sales module using API.

With this service you can:

- create an invoice document (full or partial)
- capture money placed with order payment
- notify a customer about document creation
- change order status and state

### `webapi.xml` declaration

{% highlight xml %}
<route url="/V1/order/:orderId/invoice" method="POST">
    <service class="Magento\Sales\Api\InvoiceOrderInterface" method="execute"/>
    <resources>
        <resource ref="Magento_Sales::sales" />
    </resources>
</route>
{% endhighlight %}

### PHP declaration

{% highlight php %}

<?php

/**
 * @param int $orderId
 * @param bool|false $capture
 * @param \Magento\Sales\Api\Data\InvoiceItemCreationInterface[] $items
 * @param bool|false $notify
 * @param bool|false $appendComment
 * @param Data\InvoiceCommentCreationInterface|null $comment
 * @param Data\InvoiceCreationArgumentsInterface|null $arguments
 * @return int
 */
public function execute(
    $orderId,
    $capture = false,
    array $items = [],
    $notify = false,
    $appendComment = false,
    \Magento\Sales\Api\Data\InvoiceCommentCreationInterface $comment = null,
    \Magento\Sales\Api\Data\InvoiceCreationArgumentsInterface $arguments = null
);

?>

{% endhighlight %}

### Service arguments

|Name | Description | Format | Required/Optional
|---|---|---|---
|`orderId`|	An identifier of a target order for operation. |	Integer |	Required
|`capture`| A type of money capture. By default, `false` - for offline capture. If `true`, service performs capture online.  | Boolean | Optional. **IMPORTANT: If you want to capture money in Magento, set `true`.**
|`items`|	An array of order items included to an invoice. By default, the invoice will be created for all order items. | An array of interfaces `\Magento\Sales\Api\Data\InvoiceItemCreationInterface`. Example: `[ {"order_item_id": 1, "qty": 2}, {"order_item_id": 2, "qty": 0.5} ]` |	Optional. This argument is required, when invoice must contain particular order items, not all of them.
|`notify`| E-mail notification about invoice details for a customer. If `true`, a customer will be notified. If `false` - no e-mail notification. | Boolean|	Optional
|`appendComment`|	Include or not the `comment` argument to the e-mail notification. If `true` and `comment` is specified, it will be added to an e-mail notification.|	Boolean|	Optional
|`comment`|	A comment to an invoice.|	A format according to the `\Magento\Sales\Api\Data\InvoiceCommentCreationInterface` interface. Example: `"comment": {"comment": "test_invoice", "is_visible_on_front": true}`.|	Optional
|`arguments`|	Operational arguments. Reserved for extension modules.|	A format according to the `\Magento\Sales\Api\Data\InvoiceCreationArgumentsInterface` interface |	Optional

### Service implementation

{% collapsible Click to show/hide included code %}

{% highlight php %}
{% remote_markdown https://raw.githubusercontent.com/magento/magento2/develop/app/code/Magento/Sales/Model/InvoiceOrder.php %}
{% endhighlight %}

{% endcollapsible %}

### Extension points

The service contains extension points marked with `@api` annotation. APIs can be used by extension developers to extend service logic.

|Extension point | Description |
|---|---
|`\Magento\Sales\Api\OrderRepositoryInterface`| An order repository responsible for an Order entity persistence.|
|`\Magento\Sales\Model\Order\InvoiceRepository`| An invoice repository responsible for an Invoice creation.|
|`\Magento\Sales\Model\Order\InvoiceDocumentFactory`|	A factory responsible for the new invoice object creation. The factory uses the `arguments` parameter to process extension attributes of a new invoice document.|
|`\Magento\Sales\Model\Order\OrderValidatorInterface`| An interface responsible for the order document validation with selected rules.|
|`\Magento\Sales\Model\Order\PaymentAdapterInterface`| An interface responsible for a payment according to a selected option (`online`/`offline`). It returns an order with modified state containing payment specific information.|
|`\Magento\Sales\Model\Order\OrderStateResolverInterface`| An interface which provides a correct state of an order according to performed operation.|
