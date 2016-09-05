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

* TOC
{:toc}

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

|`orderId`|	An identifier of a target order for operation|	Integer |	Required
|`capture`| Type of money capture. By default, FALSE - offline capture. If TRUE, service performs capture online.  | Boolean | Optional. **IMPORTANT: If you want to capture money in Magento, set TRUE.**
|`items`|	Array of items that will be included to an invoice, this argument is required only for partial invoice creation. By default, invoice will be created for all order items.| Array of interfaces `\Magento\Sales\Api\Data\InvoiceItemCreationInterface`. Example: `[ {"order_item_id": 1, "qty": 2}, {"order_item_id": 2, "qty": 0.5} ]` |	Optional
|`notify`| If TRUE, customer will be notified with email. e-mail includes invoice information. | Boolean|	Optional
|`appendComment`|	If TRUE and `comment` is specified, the comment will be included into e-mail with invoice.|	Boolean|	Optional
|`comment`|	Comment that must be added to invoice|	Format according to the `\Magento\Sales\Api\Data\InvoiceCommentCreationInterface` interface. Example: `"comment": {"comment": "test_invoice", "is_visible_on_front": true}`|	Optional
|`arguments`|	Operational arguments. Reserved for extension modules.|	Format according to the `\Magento\Sales\Api\Data\InvoiceCreationArgumentsInterface` interface |	Optional

### Service implementation

{% collapsible Click to show/hide included code %}

{% highlight php %}
{% remote_markdown https://raw.githubusercontent.com/magento/magento2/develop/app/code/Magento/Sales/Model/InvoiceOrder.php %}
{% endhighlight %}

{% endcollapsible %}

### Extension points

The service contains extension points marked with `@api` annotation. The APIs can be used by extension developers to extend service logic.

|`\Magento\Sales\Api\OrderRepositoryInterface`| Order repository is responsible for Order entity persistence.|
|`\Magento\Sales\Model\Order\InvoiceRepository`| Invoice repository is responsible for Invocie creation.|
|`\Magento\Sales\Model\Order\InvoiceDocumentFactory`|	Responsible for new invoice object creation. The factory uses the `arguments` parameter to process extension attributes of a new invoice document.|
|`\Magento\Sales\Model\Order\OrderValidatorInterface`| Performs order document validation with selected rules.|
|`\Magento\Sales\Model\Order\PaymentAdapterInterface`| Performs pay operation according to a selected option (`online`/`offline`), returns an order with modified state (containing payment specific information).|
|`\Magento\Sales\Model\Order\OrderStateResolverInterface`| Provides a correct order state according to performed operation.|
