---
layout: default
group: release-notes
title: Release Notes
menu_title: Changes in 0.74-beta8
menu_node: 
menu_order: 5
github_link: release-notes/changes_074-beta8.md
---

<h2 id="changes-contents">Contents</h2>
*	<a href="#rn-074b8-compat">Backward compatible changes</a>
*	<a href="#rn-074b8-giftmessage">Backward incompatible changes in Magento_GiftMessage</a>
*	<a href="#rn-074b8-quoteapi">Backward incompatible changes in Magento_Quote</a>
*	<a href="#rn-074b8-webapi">Backward incompatible changes in Magento_Webapi and \Magento\Framework\Webapi</a>
*	<a href="#rn-074b8-sales-model">Backward incompatible changes in Magento_Sales</a>
*	<a href="#rn-074b8-other">Other backward incompatible changes</a>

<h2 id="rn-074b8-compat">Backward compatible changes</h2>
*	Added interface `Magento\Payment\Model\InfoInterface` which should be used instead of `Magento\Payment\Model\Info` which expects both `Magento\Sales\Model\Order\Payment\Info` and `Magento\Quote\Model\Quote\Payment\Info`
*	`Magento\Sales\Model\Resource\EntityAbstract` overrides native `save($object)`

<h2 id="rn-074b8-giftmessage">Backward incompatible changes in Magento_GiftMessage</h2>
In <a href="{{ site.mage2000url }}app/code/Magento/GiftMessage/Helper/Message.php" target="_blank">\Magento\GiftMessage\Helper\Message</a>, we made the following changes:

*	Renamed method `isMessagesAvailable` to `isMessagesAllowed`
*	Removed method `getIsMessagesAvailable` because it was a alias for `isMessagesAvailable`

	All usages of `isMessagesAvailable` and `getIsMessagesAvailable` are now replaced by `isMessagesAllowed`

<h2 id="rn-074b8-quoteapi">Backward incompatible changes in Magento_Quote</h2>
In <a href="{{ site.mage2000url }}app/code/Magento/Quote/Api/CartItemRepositoryInterface.php" target="_blank">\Magento\Quote\Api\CartItemRepositoryInterface</a> and its implementation, we made the following changes:

*	Removed method `delete`
*	Added methods `getListForCustomer`, `saveForCustomer`, and `deleteByIdForCustomer`

In <a href="{{ site.mage2000url }}app/code/Magento/Quote/Api/CartManagementInterface.php" target="_blank">\Magento\Quote\Api\CartManagementInterface</a> and its implementation, we made the following changes:

*	Removed parameter `$storeId` for method `createEmptyCart`
*	Added method `createEmptyCartForCustomer`

Under namespace <a href="{{ site.mage2000url }}app/code/Magento/Quote/Api" target="_blank">Magento\Quote\Api</a>, we added the following classes or interfaces:

*	`GuestBillingAddressManagementInterface`
*	`GuestCartItemRepositoryInterface`
*	`GuestCartManagementInterface`
*	`GuestCartRepositoryInterface`
*	`GuestCartTotalRepositoryInterface`
*	`GuestCouponManagementInterface`
*	`GuestPaymentMethodManagementInterface`
*	`GuestShippingAddressManagementInterface`
*	`GuestShippingMethodManagementInterface`

Under namespace <a href="{{ site.mage2000url }}app/code/Magento/Quote/Model/GuestCart" target="_blank">Magento\Quote\Model\GuestCart</a>, we added the following classes or implementations: 

*	`GuestBillingAddressManagement`
*	`GuestCartItemRepository`
*	`GuestCartManagement`
*	`GuestCartRepository`
*	`GuestCartTotalRepository`
*	`GuestCouponManagement`
*	`GuestPaymentMethodManagement`
*	`GuestShippingAddressManagement`
*	`GuestShippingMethodManagement`

Other changes:

*	Removed `Magento\Quote\Model\Cart\Access\CartManagementPlugin` and `Magento\Quote\Model\Cart\Access\CartRepositoryPlugin`
*	Added new class `Magento\Quote\Model\Resource\Quote\QuoteIdMask`
*	Added new class `Magento\Quote\Model\QuoteIdMask`
*	In `Magento\Quote\Setup\InstallSchema`, added code to create table for storing cartId and obscured UUID based cartId mapping
*	Added new interface `Magento\Framework\Webapi\Rest\Request\ParamOverriderInterface,` with the following two classes implementing it:
	*	Added new class `Magento\Quote\Model\Webapi\ParamOverriderCartId`
	*	Added new class `Magento\Webapi\Controller\Rest\ParamOverriderCustomerId`
*	Changed the constructor parameter for `Magento\Webapi\Controller\Rest\ParamsOverrider`

<h2 id="rn-074b8-webapi">Backward incompatible changes in Magento_Webapi and \Magento\Framework\Webapi</h2>
*	Added an additional parameter `$methodsMapProcessor` for the constructor of <a href="{{ site.mage2000url }}app/code/Magento/Webapi/Controller/Soap/Request/Handler.php" target="_blank">Magento\Webapi\Controller\Soap\Request\Handler</a>
*	Removed protected method `_formatRoutePath` from Magento\Webapi\Model\Rest\Config
*	Added an additional parameter `$methodsMapProcessor` for the constructor of `Magento\Framework\Api\DataObjectHelper`
*	Refactored class <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Reflection/DataObjectProcessor.php" target="_blank">Magento\Framework\Reflection\DataObjectProcessor</a> to separate out responsibilities to the following smaller classes:
 	*	Added new class `Magento\Framework\Reflection\CustomAttributesProcessor`
 	*	Added new class `Magento\Framework\Reflection\ExtensionAttributesProcessor`
 	*	Added new class `Magento\Framework\Reflection\FieldNamer`
 	*	Added new class `Magento\Framework\Reflection\MethodsMap`
 	*	Added new class `Magento\Framework\Reflection\TypeCaster`
*	Added an additional parameter `$methodsMapProcessor` for the constructor of Magento\Framework\Webapi\ServiceOutputProcessor

<h2 id="rn-074b8-sales-model">Backward incompatible changes in Magento_Sales</h2>
Removed a dependency on `gridAggregator` from <a href="{{ site.mage2000url }}app/code/Magento/Sales/Model" target="_blank">\Magento\Sales\Model</a> resource models, which changed the constructor signature in the following classes: 

*	`Magento\Sales\Model\Resource\Order`
*	`Magento\Sales\Model\Resource\Order\Item`
*	`Magento\Sales\Model\Resource\Order\Address`
*	`Magento\Sales\Model\Resource\Order\Payment`
*	`Magento\Sales\Model\Resource\Order\Payment\Transaction`
*	`Magento\Sales\Model\Resource\Order\Status\History`
*	`Magento\Sales\Model\Resource\Order\Shipment`
*	`Magento\Sales\Model\Resource\Order\Shipment\Item`
*	`Magento\Sales\Model\Resource\Order\Shipment\Track`
*	`Magento\Sales\Model\Resource\Order\Shipment\Comment`
*	`Magento\Sales\Model\Resource\Order\Invoice`
*	`Magento\Sales\Model\Resource\Order\Invoice\Item`
*	`Magento\Sales\Model\Resource\Order\Invoice\Comment`
*	`Magento\Sales\Model\Resource\Order\Creditmemo`
*	`Magento\Sales\Model\Resource\Order\Creditmemo\Item`
*	`Magento\Sales\Model\Resource\Order\Creditmemo\Comment`

Added dependency on `Magento\Sales\Model\Order\Address\Renderer` to the following:

*	`Magento\Rma\Block\Adminhtml\Rma\Edit\Tab\General\ShippingAddress`
*	`Magento\Rma\Block\Returns\Create`
*	`Magento\Rma\Model\Pdf\Rma`
*	`Magento\Rma\Model\Rma\Status\History`
*	`Magento\Sales\Block\Adminhtml\Order\View\Info`
*	`Magento\Sales\Block\Order\Info`
*	`Magento\Sales\Block\Order\PrintOrder\Creditmemo`
*	`Magento\Sales\Block\Order\PrintOrder\Invoice`
*	`Magento\Sales\Block\Order\PrintOrder\Shipment`
*	`Magento\Sales\Model\Order\Email\Sender\CreditmemoCommentSender`
*	`Magento\Sales\Model\Order\Email\Sender\CreditmemoSender`
*	`Magento\Sales\Block\Order\PrintOrder\Invoice`
*	`Magento\Sales\Block\Order\PrintOrder\Shipment`
*	`Magento\Sales\Model\Order\Email\Sender\CreditmemoCommentSender`
*	`Magento\Sales\Model\Order\Email\Sender\CreditmemoSender`
*	`Magento\Sales\Model\Order\Email\Sender\InvoiceCommentSender`
*	`Magento\Sales\Model\Order\Email\Sender\InvoiceSender`
*	`Magento\Sales\Model\Order\Email\Sender\OrderCommentSender`
*	`Magento\Sales\Model\Order\Email\Sender\OrderSender`
*	`Magento\Sales\Model\Order\Email\Sender\ShipmentCommentSender`
*	`Magento\Sales\Model\Order\Email\Sender\ShipmentSender`
*	`Magento\Sales\Model\Order\Pdf\AbstractPdf`
*	`Magento\Sales\Model\Order\Pdf\Creditmemo`
*	`Magento\Sales\Model\Order\Pdf\Invoice`
*	`Magento\Sales\Model\Order\Pdf\Shipment`
*	`Magento\Shipping\Model\Order\Pdf\Packaging`

Removed dependency on `Magento\Framework\Stdlib\DateTime\TimezoneInterface` and `Magento\Framework\Stdlib\DateTime\DateTime` from the following:

*	`Magento\Sales\Model\AbstractModel`
*	`Magento\Sales\Model\Order`
*	`Magento\Sales\Model\Order\Comment`
*	`Magento\Sales\Model\Order\Item`
*	`Magento\Sales\Model\Order\Address`
*	`Magento\Sales\Model\Order\Payment`
*	`Magento\Sales\Model\Order\Payment\Info`
*	`Magento\Sales\Model\Order\Payment\Transaction`
*	`Magento\Sales\Model\Order\Invoice`
*	`Magento\Sales\Model\Order\Invoice\Item`
*	`Magento\Sales\Model\Order\Invoice\Comment`
*	`Magento\Sales\Model\Order\Shipment`
*	`Magento\Sales\Model\Order\Shipment\Item`
*	`Magento\Sales\Model\Order\Shipment\Comment`
*	`Magento\Sales\Model\Order\Creditmemo`
*	`Magento\Sales\Model\Order\Creditmemo\Item`
*	`Magento\Sales\Model\Order\Creditmemo\Track`
*	`Magento\Sales\Model\Order\Creditmemo\Comment`

See the following table.

<table>
	<col width="35%">
	<col width="30%">
	<col width="35%">
	<tbody>
		<tr>
			<th>Class</th>
			<th>Method</th>
			<th>Description of change</th>
		</tr>
	<tr>
		<td><p><a href="{{ site.mage2000url }}app/code/Magento/Sales/Controller/Adminhtml/Order/Creditmemo/AddComment.php" target="_blank">\Magento\Sales\Controller\Adminhtml\ Order\Creditmemo\AddComment</a></p></td>
		<td><p>__construct()</p></td>
		<td><p>Type of the third parameter changed from <code>Magento\Sales\Model\Order\Email\Sender\CreditmemoSender</code> to <code>Magento\Sales\Model\Order\Email\Sender\CreditmemoCommentSender</code></p></td>
	</tr>
	<tr>
		<td><p><a href="{{ site.mage2000url }}app/code/Magento/Sales/Controller/Adminhtml/Order/Shipment/AddComment.php" target="_blank">\Magento\Sales\Controller\Adminhtml\ Order\Shipment\AddComment</a></p></td>
		<td><p>__construct()</p></td>
		<td><p>Type of the third parameter was changed from <code>\Magento\Sales\Model\Order\Email\Sender\ShipmentSender</code> to <code>\Magento\Sales\Model\Order\Email\Sender\ShipmentCommentSender</code></p></td>
	</tr>
	

</tbody>
</table>

Removed the following methods from abstract class `Magento\Sales\Model\AbstractModel`:
	*	`abstract getStore`
	*	`getCreatedAtDate`
	*	`getCreatedAtStoreDate`

Renamed `Magento\Sales\Model\Resource\Entity` to `Magento\Sales\Model\Resource\EntityAbstract`




<h2 id="rn-074b8-other">Other backward incompatible changes</h2>
*	Added required parameter `\Magento\Framework\Stdlib\DateTime` to the constructor in:
	*	`\Magento\Framework\App\Response\Http`
	*	`\Magento\MediaStorage\Model\File\Storage\Response`





