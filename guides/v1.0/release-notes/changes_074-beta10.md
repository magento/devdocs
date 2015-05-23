---
layout: default
group: release-notes
title: Release Notes
menu_title: Changes in 0.74-beta10
menu_node: 
menu_order: 5
github_link: release-notes/changes_074-beta10.md
---

<h2 id="changes-contents">Contents</h2>

*	<a href="#rn-074b10-overview">Overview of the 0.74-beta10 release</a>
*	<a href="#rn-074b10-changes">Major changes in the 0.74-beta10 release</a>
*	<a href="#rn-074b10-compat">Backward-compatible changes</a>
*	<a href="#rn-074b10-incompat">Backward-incompatible changes</a>

<h2 id="rn-074b10-overview">Overview of the 0.74-beta10 release</h2>
These Release Notes discuss important changes in this release. For additional details, see the following:

*	<a href="{{ site.mage2000url }}CHANGELOG.md#0740-beta10" target="_blank">Changelog</a>
*	<a href="{{ site.gdeurl }}release-notes/known-issues.html">Known issues</a>
*	<a href="{{ site.gdeurl }}release-notes/bk-release-notes.html">Release highlights</a>

<h2 id="rn-074b10-changes">Major changes in the 0.74-beta10 release</h2>
We made the following changes in this release:

<h3>Zend framework</h3>
Upgraded the Zend Framework 2 components from 2.3.4 to 2.4.0

<h3>Two deployment configuration files&mdash;config.php and env.php</h3>
{% include install/deployment-config_upgrade.html %}
<a href="{{ site.gdeurl }}config-guide/config/config-php.html">More information about the deployment configuration</a>

<h2 id="rn-074b10-compat">Backward-compatible changes</h2>
This section discusses the backward-compatible changes we made in this release.

### Magento_Bundle
We added the following extension attribute:
	<extension_attributes for="Magento\Catalog\Api\Data\ProductInterface">
	    <attribute code="bundle_product_options" type="Magento\Bundle\Api\Data\OptionInterface[]" />
	</extension_attributes>

This attribute is populated by a plug-in for `\Magento\Catalog\Model\Product::load` method and we added a plugin to `\Magento\Catalog\Api\ProductRepositoryInterface::save` method to process the extension attribute when it's present.

### Magento_Catalog
*	Extended interface `\Magento\Catalog\Api\Data\ProductInterface` to accept and provide additional information related to various product types.
*	Added the following extension attributes to `\Magento\Catalog\Api\Data\ProductInterface` through `data_object.xml`:
	*	`<attribute code="stock_item" type="Magento\CatalogInventory\Api\Data\StockItemInterface" />`
	*	`<attribute code="configurable_product_options" type="Magento\ConfigurableProduct\Api\Data\OptionInterface[]" />`
	*	`<attribute code="configurable_product_links" type="int[]" />`
	*	`<attribute code="downloadable_product_links" type="Magento\Downloadable\Api\Data\LinkInterface[]" />`
	*	`<attribute code="downloadable_product_samples" type="Magento\Downloadable\Api\Data\SampleInterface[]" />`
*	Changed the following methods in `app/code/Magento/CatalogInventory/Api/Data/StockItemInterface.php` to make the parameter optional:
	*	`getItemId`
	*	`getProductId`
	*	`getWebsiteId`
	*	`getStockId`
*	Added optional parameter `forceReload` to interface `\Magento\Catalog\Api\ProductRepositoryInterface.php`

### Magento_CatalogInventory
We extended the `\Magento\Catalog\Api\Data\ProductInterface` to include catalog inventory information in the Magento_CatalogInventory module:

	<extension_attributes for="Magento\Catalog\Api\Data\ProductInterface">
	    <attribute code="stock_item" type="Magento\CatalogInventory\Api\Data\StockItemInterface">
	        <resources>
	            <resource ref="Magento_CatalogInventory::cataloginventory"/>
	        </resources>
	    </attribute>
	</extension_attributes>

### Magento_ConfigurableProduct
We added the following extension attribute:
	<extension_attributes for="Magento\Catalog\Api\Data\ProductInterface">
	    <attribute code="configurable_product_options" type="Magento\ConfigurableProduct\Api\Data\OptionInterface[]" />
	    <attribute code="configurable_product_links" type="int[]" />
	</extension_attributes>

Those attributes are populated by a plug-in for `\Magento\Catalog\Model\Product::load` method and we added a plug-in to `\Magento\Catalog\Api\ProductRepositoryInterface::save` method to process these extension attributes for configurable products.

### Magento_Downloadable
We added the following extension attribute:
	<extension_attributes for="Magento\Catalog\Api\Data\ProductInterface">
	    <attribute code="downloadable_product_links" type="Magento\Downloadable\Api\Data\LinkInterface[]" />
	    <attribute code="downloadable_product_samples" type="Magento\Downloadable\Api\Data\SampleInterface[]" />
	</extension_attributes>

Those attributes are populated by a plug-in for the `\Magento\Catalog\Model\Product::load` method and we added a plug-in to `\Magento\Catalog\Api\ProductRepositoryInterface::save` method to process these extension attributes for configurable products.

### Magento_GroupedProduct
The child products in grouped product are returned in `\Magento\Catalog\Api\Data\ProductInterface::getProductLinks` method. This method returns product links of various types; for example, related, upsell, crosssell, and so on. For grouped products, the type of the product link is `super`

The `getProductLinks` returns an array of `\Magento\Catalog\Api\Data\ProductLinkInterface`. The Magento_GroupedProduct module extended the ProductLinkInterface to add a `qty` field:

	<extension_attributes for="Magento\Catalog\Api\Data\ProductLinkInterface">
	    <attribute code="qty" type="float" />
	</extension_attributes>

### Magento_Payment
*	Added interface `\Magento\Payment\Model\InfoInterface` which should be used instead of `\Magento\Payment\Model\Info` which expects both `\Magento\Sales\Model\Order\Payment\Info` and `\Magento\Quote\Model\Quote\Payment\Info`

### Magento_Sales
*	`\Magento\Sales\Model\Resource\EntityAbstract` overrides native `save($object)`

<h2 id="rn-074b10-incompat">Backward-incompatible changes</h2>
The following sections discuss backward-incompatible changes in this release:

*	<a href="#rn-074b10-bundle">Backward-incompatible changes in Magento_Bundle</a>
*	<a href="#rn-074b10-catalog">Backward-incompatible changes in Magento_Catalog</a>
*	<a href="#rn-074b10-checkout">Backward-incompatible changes in Magento_Checkout</a>
*	<a href="#rn-074b10-cms">Backward-incompatible changes in Magento_Cms</a>
*	<a href="#rn-074b10-config">Backward-incompatible changes in Magento_ConfigurableProduct</a>
*	<a href="#rn-074b10-dhl">Backward-incompatible changes in Magento_Dhl</a>
*	<a href="#rn-074b10-down">Backward-incompatible changes in Magento_Downloadable</a>
*	<a href="#rn-074b10-fedex">Backward-incompatible changes in Magento_Fedex</a>
*	<a href="#rn-074b10-giftmessage">Backward-incompatible changes in Magento_GiftMessage</a>
*	<a href="#rn-074b10-offline">Backward-incompatible changes in Magento_OfflineShipping</a>
*	<a href="#rn-074b10-payment">Backward-incompatible changes in Magento_Payment</a>
*	<a href="#rn-074b10-quoteapi">Backward-incompatible changes in Magento_Quote</a>
*	<a href="#rn-074b10-sales-model">Backward-incompatible changes in Magento_Sales</a>
*	<a href="#rn-074b10-search">Backward-incompatible changes in Magento_Search</a>
*	<a href="#rn-074b10-ship">Backward-incompatible changes in Magento_Shipping</a>
*	<a href="#rn-074b10-tax">Backward-incompatible changes in Magento_Tax</a>
*	<a href="#rn-074b10-ups">Backward-incompatible changes in Magento_Ups</a>
*	<a href="#rn-074b10-usps">Backward-incompatible changes in Magento_Usps</a>
*	<a href="#rn-074b10-except">Backward-incompatible changes in exceptions</a>


<h3 id="rn-074b10-bundle">Backward-incompatible changes in Magento_Bundle</h3>
*	Added the `saveChild` method to `app/code/Magento/Bundle/Api/ProductLinkManagementInterface.php`
*	Made the following changes to `app/code/Magento/Bundle/Api/Data/LinkInterface.php`:
	*	Added method `getId`
	*	Added method `setId`
 	*	Removed method `getIsDefined`
	*	Removed method `setIsDefined`

<h3 id="rn-074b10-catalog">Backward-incompatible changes in Magento_Catalog</h3>
*	Added the `setCreatedAt` method to `app/code/Magento/Catalog/Api/Data/CategoryInterface.php`
*	Added the following methods to `app/code/Magento/Catalog/Api/Data/ProductInterface.php`
	*	`getProductLinks`
	*	`setProductLinks`
	*	`getOptions`
	*	`setOptions`
	*	`getMediaGalleryEntries`
	*	`setMediaGalleryEntries`
	*	`getGroupPrices`
	*	`setGroupPrices`
	*	`getTierPrices`
	*	`setTierPrices`
*	Added the following methods to `app/code/Magento/Catalog/Api/Data/ProductTierPriceInterface.php`
	*	`getCustomerGroupId`
	*	`setCustomerGroupId`
*	Changed the signature for method `create` in `app/code/Magento/Catalog/Api/ProductAttributeMediaGalleryManagementInterface.php`
`
*	Protected properties now private, accessible using protected lazy loading methods:

	*	`/Magento/Catalog/Model/Resource/Category/Collection`
		*	property: `_productTable`

            method: `getProductTable()`
		*	property: `_productWebsiteTable`

            method: `getProductWebsiteTable()`
    *	`/Magento/Catalog/Model/Observer`
    	*	property: `_catalogLayer`

			method: `getCatalogLayer`

<h3 id="rn-074b10-checkout">Backward-incompatible changes in Magento_Checkout</h3>
Removed the following methods in `\Magento\Checkout\Controller\Sidebar\UpdateItemQty`:

*	`checkQuoteItem`
*	`updateQuoteItem`
*	`normalize`
*	`getSummaryQty`
*	`getSummaryText`
*	`getSubtotalHtml`

In the `__construct()` method in `app/code/Magento/Checkout/Block/Cart/Shipping.php`, changed the parameter `\Magento\Quote\Model\Quote\Address\CarrierFactoryInterface` to `\Magento\Shipping\Model\CarrierFactoryInterface`

<h3 id="rn-074b10-cms">Backward-incompatible changes in Magento_Cms</h3>
*	`\Magento\Cms\Model\BlockRepository` method name `get` renamed to `getById`
*	`\Magento\Cms\Model\Resource\Block\Collection` method name `init` renamed to `_renderFiltersBefore`
*	`\Magento\Cms\Model\Resource\Page\Collection` method name `init` renamed to `_construct`
*	`\Magento\Cms\Model\Resource\Page\Collection` method signature `addStoreFilter` changed

Removed the following methods:

*	`\Magento\Cms\Model\Resource\Block\Grid\Collection`
*	`\Magento\Cms\Model\Resource\Page\Grid\Collection`
*	`\Magento\Cms\Model\DataSource\BlockCollection`
*	`\Magento\Cms\Model\DataSource\PageCollection`
*	`\Magento\Cms\Model\Resource\BlockCriteria`
*	`\Magento\Cms\Model\Resource\BlockCriteriaMapper`
*	`\Magento\Cms\Model\Resource\CmsAbstractCriteria`
*	`\Magento\Cms\Model\Resource\CmsCriteriaMapper`
*	`\Magento\Cms\Model\Resource\PageCriteria`
*	`\Magento\Cms\Model\BlockCriteriaInterface`
*	`\Magento\Cms\Model\PageCriteriaInterface`
*	`\Magento\Cms\Model\Resource\PageCriteriaMapper`

<h3 id="rn-074b10-config">Backward-incompatible changes in Magento_ConfigurableProduct</h3>
*	Removed interface `app/code/Magento/ConfigurableProduct/Api/OptionTypesListInterface.php`, also removed the associated API from `webapi.xml`
*	Removed the following methods from `app/code/Magento/ConfigurableProduct/Api/OptionTypesListInterface.php`:
	*	`getType`
	*	`setType`

<h3 id="rn-074b10-dhl">Backward-incompatible changes in Magento_Dhl</h3>
In `app/code/Magento/Dhl/Model/Carrier.php`, made the following changes:

*	In the `collectRates()` method, changed parameter `\Magento\Quote\Model\Quote\Address\RateRequest` to `\Magento\Framework\Object`
*	In the `proccessAdditionalValidation()` method, changed parameter `\Magento\Quote\Model\Quote\Address\RateRequest` to `\Magento\Framework\Object`

<h3 id="rn-074b10-down">Backward-incompatible changes in Magento_Downloadable</h3>
*	Removed the following interfaces:
	*	`app/code/Magento/Downloadable/Api/Data/LinkContentInterface.php`
	*	`app/code/Magento/Downloadable/Api/Data/SampleContentInterface.php`
*	Added the following methods in `app/code/Magento/Downloadable/Api/Data/LinkInterface.php`
	*	`getLinkFileContent`
	*	`setLinkFileContent`
	*	`getSampleFileContent`
	*	`setSampleFileContent`
*	Added the following methods in `app/code/Magento/Downloadable/Api/Data/SampleInterface.php`
	*	`getSampleFileContent`
	*	`setSampleFileContent`
*	Added the following methods in `app/code/Magento/Downloadable/Api/LinkRepositoryInterface.php`
	*	`getSamplesByProduct`
	*	`getLinksByProduct`
*	Changed the method signature in `app/code/Magento/Downloadable/Api/LinkRepositoryInterface.php`
*	Changed parameter type from `\Magento/Downloadable/Api/Data/LinkContentInterface.php` to `\Magento/Downloadable/Api/Data/LinkContentInterface.php`
*	Change the method signature in `app/code/Magento/Downloadable/Api/SampleRepositoryInterface.php`
*	Changed parameter type from `\Magento\Downloadable\Api\Data\SampleContentInterface` to `\Magento\Downloadable\Api\Data\SampleInterface`

<h3 id="rn-074b10-fedex">Backward-incompatible changes in Magento_Fedex</h3>
In `app/code/Magento/Fedex/Model/Carrier.php` method `collectRates()`, changed parameter `\Magento\Quote\Model\Quote\Address\RateRequest` to `\Magento\Framework\Object`

<h3 id="rn-074b10-frame">Backward-incompatible changes in the Framework</h3>
*	Added the `getCurrencySymbol` method to `lib/internal/Magento/Framework/Pricing/PriceCurrencyInterface.php`        
*	Added the `getDisplayCurrencySymbol` method to `lib/internal/Magento/Framework/Pricing/Render/AmountRenderInterface.php`
*	Added required parameter `\Magento\Framework\Stdlib\DateTime` to the constructor in:

	*	`\Magento\Framework\App\Response\Http`
	*	`\Magento\MediaStorage\Model\File\Storage\Response`

*	Removed constants:

	*	`\Magento\Framework\App\Config\ValueInterface:: ENTITY`
	*	`\Magento\Framework\Locale\CurrencyInterface ::XML_PATH_ALLOW_CURRENCIES_INSTALLED`
*	Moved constants:

	*	from `\Magento\Framework\Locale\CurrencyInterface::DEFAULT_CURRENCY` to `\Magento\Framework\Locale\Currency::DEFAULT_CURRENCY`
	*	from `\Magento\Framework\Locale\ResolverInterface:: DEFAULT_LOCALE` to `\Magento\Framework\Locale\Resolver::DEFAULT_LOCALE`
	*	from `\Magento\Framework\Message\ManagerInterface:: DEFAULT_GROUP` to `\Magento\Framework\Message\Manager::DEFAULT_GROUP`
	*	from `\Magento\Framework\App\ScopeInterface:: SCOPE_DEFAULT` to `\Magento\Framework\App\Config\ScopeConfigInterface::SCOPE_TYPE_DEFAULT`

*	Protected properties now private, accessible using protected lazy loading methods:

	*	`/Magento/Framework/Url`
	
		property: `_routeParamsResolver`
		method: `getRouteParamsResolver()`

<h3 id="rn-074b10-giftmessage">Backward-incompatible changes in Magento_GiftMessage</h3>
In <a href="{{ site.mage2000url }}app/code/Magento/GiftMessage/Helper/Message.php" target="_blank">\Magento\GiftMessage\Helper\Message</a>:

*	Renamed method `isMessagesAvailable` to `isMessagesAllowed`
*	Removed method `getIsMessagesAvailable` because it was an alias for `isMessagesAvailable`

	All usages of `isMessagesAvailable` and `getIsMessagesAvailable` are now replaced by `isMessagesAllowed`

<h3 id="rn-074b10-offline">Backward-incompatible changes in Magento_OfflineShipping</h3>
*	In `app/code/Magento/OfflineShipping/Model/Carrier/Flatrate.php` method `collectRates()`, changed parameter `\Magento\Quote\Model\Quote\Address\RateRequest` to `\Magento\Framework\Object`
*	In `app/code/Magento/OfflineShipping/Model/Carrier/Freeshipping.php` method `collectRates()`, changed parameter `\Magento\Quote\Model\Quote\Address\RateRequest` to `\Magento\Framework\Object`
*	In `app/code/Magento/OfflineShipping/Model/Carrier/Pickup.php` method `collectRates()`, changed parameter `\Magento\Quote\Model\Quote\Address\RateRequest` to `\Magento\Framework\Object`
*	In `app/code/Magento/OfflineShipping/Model/Carrier/Tablerate.php` method `collectRates()`, changed parameter `\Magento\Quote\Model\Quote\Address\RateRequest` to `\Magento\Framework\Object`

<h3 id="rn-074b10-payment">Backward-incompatible changes in Magento_Payment</h3>
*	In `app/code/Magento/Payment/Model/Cart/SalesModel/Factory.php` method `create()`, changed parameter `\Magento\Sales\Model\Order|Magento\Quote\Model\Quote` to `\Magento\Quote\Api\Data\CartInterface`
*	In `app/code/Magento/Payment/Model/Cart/SalesModel/SalesModelInterface.php` method `getTaxContainer()`, changed return `\Magento\Sales\Model\Order|\Magento\Quote\Model\Quote\Address` to `\Magento\Sales\Api\Data\OrderInterface|\Magento\Quote\Api\Data\AddressInterface `
*	In `app/code/Magento/Payment/Model/Method/AbstractMethod.php`:
	*	In method `getInfoInstance()`, changed return `\Magento\Payment\Model\Info` to `\Magento\Payment\Model\InfoInterface`
	*	In method `isAvailable()`, changed return `\Magento\Quote\Model\Quote` to `\Magento\Quote\Api\Data\CartInterface`
*	In `app/code/Magento/Payment/Model/Method/Cc.php` method `isAvailable()`, changed parameter `\Magento\Quote\Model\Quote` to `\Magento\Quote\Api\Data\CartInterface`
*	In `app/code/Magento/Payment/Model/MethodList.php`:
	*	In method `getAvailableMethods()`, changed parameter `\Magento\Quote\Model\Quote` to `\Magento\Quote\Api\Data\CartInterface`
	*	In method `_canUseMethod()`, changed parameter `\Magento\Quote\Model\Quote` to `\Magento\Quote\Api\Data\CartInterface`

<h3 id="rn-074b10-quoteapi">Backward-incompatible changes in Magento_Quote</h3>
*	In <a href="{{ site.mage2000url }}app/code/Magento/Quote/Api/CartItemRepositoryInterface.php" target="_blank">\Magento\Quote\Api\CartItemRepositoryInterface</a> and its implementation:

	*	Removed method `delete`
	*	Added methods `getListForCustomer`, `saveForCustomer`, and `deleteByIdForCustomer`

*	In `app/code/Magento/Quote/Model/Resource/Quote.php`:
	*	In method `__construct()`, changed parameter `\Magento\Eav\Model\Config` to `\Magento\SalesSequence\Model\Manager`
	*	Removed method `isOrderIncrementIdUsed()`

*	In `app/code/Magento/Quote/Model/Resource/Quote/Address/Rate/Collection.php` method `__construct()`, changed parameter `\Magento\Quote\Model\Quote\Address\CarrierFactoryInterface` to `\Magento\Shipping\Model\CarrierFactoryInterface`

In <a href="{{ site.mage2000url }}app/code/Magento/Quote/Api/CartManagementInterface.php" target="_blank">\Magento\Quote\Api\CartManagementInterface</a> and its implementation:

*	Removed parameter `$storeId` for method `createEmptyCart`
*	Added method `createEmptyCartForCustomer`

Added the following classes or interfaces under namespace <a href="{{ site.mage2000url }}app/code/Magento/Quote/Api" target="_blank">Magento\Quote\Api</a>:

*	`GuestBillingAddressManagementInterface`
*	`GuestCartItemRepositoryInterface`
*	`GuestCartManagementInterface`
*	`GuestCartRepositoryInterface`
*	`GuestCartTotalRepositoryInterface`
*	`GuestCouponManagementInterface`
*	`GuestPaymentMethodManagementInterface`
*	`GuestShippingAddressManagementInterface`
*	`GuestShippingMethodManagementInterface`

Under namespace <a href="{{ site.mage2000url }}app/code/Magento/Quote/Model/GuestCart" target="_blank">Magento\Quote\Model\GuestCart</a>, added the following classes or implementations: 

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

*	Removed `\Magento\Quote\Model\Cart\Access\CartManagementPlugin` and `\Magento\Quote\Model\Cart\Access\CartRepositoryPlugin`
*	Added new class `\Magento\Quote\Model\Resource\Quote\QuoteIdMask`
*	Added new class `\Magento\Quote\Model\QuoteIdMask`
*	In `\Magento\Quote\Setup\InstallSchema`, added code to create a table for storing `cartId` and obscured UUID based `cartId` mapping
*	Added new interface `\Magento\Framework\Webapi\Rest\Request\ParamOverriderInterface,` with the following two classes implementing it:

	*	Added new class `\Magento\Quote\Model\Webapi\ParamOverriderCartId`
	*	Added new class `\Magento\Webapi\Controller\Rest\ParamOverriderCustomerId`
*	Changed the constructor parameter for `\Magento\Webapi\Controller\Rest\ParamsOverrider`

<h3 id="rn-074b10-sales-model">Backward-incompatible changes in Magento_Sales</h3>
*	Removed a dependency on `gridAggregator` from <a href="{{ site.mage2000url }}app/code/Magento/Sales/Model" target="_blank">\Magento\Sales\Model</a> resource models, which changed the constructor signature in the following classes: 

	*	`\Magento\Sales\Model\Resource\Order`
	*	`\Magento\Sales\Model\Resource\Order\Item`
	*	`\Magento\Sales\Model\Resource\Order\Address`
	*	`\Magento\Sales\Model\Resource\Order\Payment`
	*	`\Magento\Sales\Model\Resource\Order\Payment\Transaction`
	*	`\Magento\Sales\Model\Resource\Order\Status\History`
	*	`\Magento\Sales\Model\Resource\Order\Shipment`
	*	`\Magento\Sales\Model\Resource\Order\Shipment\Item`
	*	`\Magento\Sales\Model\Resource\Order\Shipment\Track`
	*	`\Magento\Sales\Model\Resource\Order\Shipment\Comment`
	*	`\Magento\Sales\Model\Resource\Order\Invoice`
	*	`\Magento\Sales\Model\Resource\Order\Invoice\Item`
	*	`\Magento\Sales\Model\Resource\Order\Invoice\Comment`
	*	`\Magento\Sales\Model\Resource\Order\Creditmemo`
	*	`\Magento\Sales\Model\Resource\Order\Creditmemo\Item`
	*	`\Magento\Sales\Model\Resource\Order\Creditmemo\Comment`

*	Added dependency on `\Magento\Sales\Model\Order\Address\Renderer` to the following:

	*	`\Magento\Rma\Block\Adminhtml\Rma\Edit\Tab\General\ShippingAddress`
	*	`\Magento\Rma\Block\Returns\Create`
	*	`\Magento\Rma\Model\Pdf\Rma`
	*	`\Magento\Rma\Model\Rma\Status\History`
	*	`\Magento\Sales\Block\Adminhtml\Order\View\Info`
	*	`\Magento\Sales\Block\Order\Info`
	*	`\Magento\Sales\Block\Order\PrintOrder\Creditmemo`
	*	`\Magento\Sales\Block\Order\PrintOrder\Invoice`
	*	`\Magento\Sales\Block\Order\PrintOrder\Shipment`
	*	`\Magento\Sales\Model\Order\Email\Sender\CreditmemoCommentSender`
	*	`\Magento\Sales\Model\Order\Email\Sender\CreditmemoSender`
	*	`\Magento\Sales\Block\Order\PrintOrder\Invoice`
	*	`\Magento\Sales\Block\Order\PrintOrder\Shipment`
	*	`\Magento\Sales\Model\Order\Email\Sender\CreditmemoCommentSender`
	*	`\Magento\Sales\Model\Order\Email\Sender\CreditmemoSender`
	*	`\Magento\Sales\Model\Order\Email\Sender\InvoiceCommentSender`
	*	`\Magento\Sales\Model\Order\Email\Sender\InvoiceSender`
	*	`\Magento\Sales\Model\Order\Email\Sender\OrderCommentSender`
	*	`\Magento\Sales\Model\Order\Email\Sender\OrderSender`
	*	`\Magento\Sales\Model\Order\Email\Sender\ShipmentCommentSender`
	*	`\Magento\Sales\Model\Order\Email\Sender\ShipmentSender`
	*	`\Magento\Sales\Model\Order\Pdf\AbstractPdf`
	*	`\Magento\Sales\Model\Order\Pdf\Creditmemo`
	*	`\Magento\Sales\Model\Order\Pdf\Invoice`
	*	`\Magento\Sales\Model\Order\Pdf\Shipment`
	*	`\Magento\Shipping\Model\Order\Pdf\Packaging`

*	Removed dependency on `\Magento\Framework\Stdlib\DateTime\TimezoneInterface` and `\Magento\Framework\Stdlib\DateTime\DateTime` from the following:

	*	`\Magento\Sales\Model\AbstractModel`
	*	`\Magento\Sales\Model\Order`
	*	`\Magento\Sales\Model\Order\Comment`
	*	`\Magento\Sales\Model\Order\Item`
	*	`\Magento\Sales\Model\Order\Address`
	*	`\Magento\Sales\Model\Order\Payment`
	*	`\Magento\Sales\Model\Order\Payment\Info`
	*	`\Magento\Sales\Model\Order\Payment\Transaction`
	*	`\Magento\Sales\Model\Order\Invoice`
	*	`\Magento\Sales\Model\Order\Invoice\Item`
	*	`\Magento\Sales\Model\Order\Invoice\Comment`
	*	`\Magento\Sales\Model\Order\Shipment`
	*	`\Magento\Sales\Model\Order\Shipment\Item`
	*	`\Magento\Sales\Model\Order\Shipment\Comment`
	*	`\Magento\Sales\Model\Order\Creditmemo`
	*	`\Magento\Sales\Model\Order\Creditmemo\Item`
	*	`\Magento\Sales\Model\Order\Creditmemo\Track`
	*	`\Magento\Sales\Model\Order\Creditmemo\Comment`

*	Renamed `\Magento\Sales\Model\Resource\Entity` to `\Magento\Sales\Model\Resource\EntityAbstract`

*	Added the `setCreatedAt` method to the following interfaces:

	*	`\Magento/Sales/Api/Data/CreditmemoCommentInterface.php`
	*	`app/code/Magento/Sales/Api/Data/CreditmemoInterface.php`
	*	`app/code/Magento/Sales/Api/Data/InvoiceCommentInterface.php`
	*	`app/code/Magento/Sales/Api/Data/InvoiceInterface.php`
	*	`app/code/Magento/Sales/Api/Data/OrderInterface.php`
	*	`app/code/Magento/Sales/Api/Data/OrderItemInterface.php`
	*	`app/code/Magento/Sales/Api/Data/OrderStatusHistoryInterface.php`
	*	`app/code/Magento/Sales/Api/Data/ShipmentCommentInterface.php`
	*	`app/code/Magento/Sales/Api/Data/ShipmentInterface.php`
	*	`app/code/Magento/Sales/Api/Data/ShipmentTrackInterface.php`
	*	`pp/code/Magento/Sales/Api/Data/TransactionInterface.php`

*	Added the `setTransactionId` method to interface `app/code/Magento/Sales/Api/Data/TransactionInterface.php`

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
	<!-- <tr>
		<td><p><a href="{{ site.mage2000url }}app/code/Magento/Sales/Controller/Adminhtml/Order/Shipment/AddComment.php" target="_blank">\Magento\Sales\Controller\Adminhtml\ Order\Shipment\AddComment</a></p></td>
		<td><p>__construct()</p></td>
		<td><p>Type of the third parameter was changed from <code>\Magento\Sales\Model\Order\Email\Sender\ShipmentSender</code> to <code>\Magento\Sales\Model\Order\Email\Sender\ShipmentCommentSender</code></p></td>
	</tr> -->
	<tr>
		<td><p><a href="{{ site.mage2000url }}app/code/Magento/Sales/Model/Order/Email/Sender/OrderSender.php" target="_blank">\Magento\Sales\Model\Order\Email\Sender\OrderSender</a></p></td>
		<td><p>send()</p></td>
		<td><p>Arguments list changed to <code>Creditmemo $creditmemo</code>, <code>$forceSyncMode = false</code></p></td>
	</tr>
	<tr>
		<td><p><a href="{{ site.mage2000url }}app/code/Magento/Sales/Model/Order/Email/Sender/OrderSender.php" target="_blank">\Magento\Sales\Model\Order\Email\Sender\OrderSender</a></p></td>
		<td><p>send()</p></td>
		<td><p>Arguments list changed to <code>Creditmemo $creditmemo</code>, <code>$forceSyncMode = false</code></p></td>
	</tr>
	<tr>
		<td><p><a href="{{ site.mage2000url }}app/code/Magento/Sales/Model/Order/Email/Sender/CreditmemoSender.php" target="_blank">\Magento\Sales\Model\Order\Email\Sender\CreditmemoSender</a></p></td>
		<td><p>send()</p></td>
		<td><p>Arguments list changed to <code>Creditmemo $creditmemo</code>, <code>$forceSyncMode = false</code></p></td>
	</tr>
	<tr>
		<td><p><a href="{{ site.mage2000url }}app/code/Magento/Sales/Model/Order/Email/Sender/InvoiceSender.php" target="_blank">\Magento\Sales\Model\Order\Email\Sender\InvoiceSender</a></p></td>
		<td><p>send()</p></td>
		<td><p>Arguments list changed to <code>Creditmemo $creditmemo</code>, <code>$forceSyncMode = false</code></p></td>
	</tr>
	<tr>
		<td><p><a href="{{ site.mage2000url }}app/code/Magento/Sales/Model/Order/Email/Sender/ShipmentSender.php" target="_blank">\Magento\Sales\Model\Order\Email\Sender\ShipmentSender</a></p></td>
		<td><p>send()</p></td>
		<td><p>Arguments list changed to <code>Creditmemo $creditmemo</code>, <code>$forceSyncMode = false</code></p></td>
	</tr>
	<tr>
		<td><p><a href="{{ site.mage2000url }}app/code/Magento/Reports/Model/Resource/Quote/Collection.php" target="_blank">\Magento\Reports\Model\Resource\Quote\Collection</a></p></td>
		<td><p>getOrdersSubSelect</p></td>
		<td><p>Renamed to <code>getOrdersData</code>.</p></td>
	</tr>
	<tr>
		<td><p><a href="{{ site.mage2000url }}app/code/Magento/Reports/Model/Resource/Customer/Collection.php" target="_blank">\Magento\Reports\Model\Resource\Customer\Collection</a></p></td>
		<td><p>joinOrders, addOrdersCount, addSumAvgTotals, orderByTotalAmount</p></td>
		<td><p>Removed</code></p></td>
	</tr>
	<tr>
		<td><p><a href="{{ site.mage2000url }}app/code/Magento/Reports/Model/Resource/Product/Collection.php" target="_blank">\Magento\Reports\Model\Resource\Product\Collection</a></p></td>
		<td><p>addOrdersCount, addOrderedQty</p></td>
		<td><p>Removed</code></p></td>
	</tr>
	<tr>
		<td><p><a href="{{ site.mage2000url }}lib/internal/Magento/Framework/DB/Adapter/Pdo/Mysql.php" target="_blank">\Magento\Framework\DB\Adapter\Pdo\Mysql</a></p></td>
		<td><p>addForeignKey</p></td>
		<td><p>Removed argument <code>$onUpdate</code></p>
			<p>Current list of arguments: <code>$fkName</code>, <code>$tableName</code>, <code>$columnName</code>, <code>$refTableName</code>, <code>$refColumnName</code>, <code>$onDelete = AdapterInterface::FK_ACTION_CASCADE</code>, <code>$purge = false</code>, <code>$schemaName = null</code>, <code>$refSchemaName = null</code></p></td>
	</tr>
	<tr>
		<td><p><a href="{{ site.mage2000url }}app/code/Magento/Sales/Model/AbstractModel.php" target="_blank">\Magento\Sales\Model\AbstractModel</a></p></td>
		<td><p>addForeignKey</p></td>
		<td><p><code>abstract getStore</code>, <code>getCreatedAtDate</code>, <code>getCreatedAtStoreDate</code></p></td>
	</tr>
</tbody>
</table>

<h3 id="rn-074b10-search">Backward-incompatible changes in Magento_Search</h3>
Protected properties now private, accessible using protected lazy loading methods:

`/Magento/Search/Model/SearchEngine`

property: `adapter`

method: `getAdapter`

<h3 id="rn-074b10-ship">Backward-incompatible changes in Magento_Shipping</h3>
*	In `app/code/Magento/Shipping/Model/Carrier/AbstractCarrier.php`:

	*	In method `collectRates()`, changed parameter `\Magento\Quote\Model\Quote\Address\RateRequest` to `\Magento\Framework\Object`
	*	In method `checkAvailableShipCountries()`, changed parameter `\Magento\Quote\Model\Quote\Address\RateRequest` to `\Magento\Framework\Object`
	*	In method `proccessAdditionalValidation()`, changed parameter `\Magento\Quote\Model\Quote\Address\RateRequest` to `\Magento\Framework\Object`
	*	In method `proccessAdditionalValidation()`, changed return `\$this|bool|Magento\Quote\Model\Quote\Address\RateResult\Error` to `$this|bool|\Magento\Framework\Object`

*	Moved `app/code/Magento/Quote/Model/Quote/Address/AbstractCarrierInterface.php` to `app/code/Magento/Shipping/Model/Carrier/AbstractCarrierInterface.php`
*	In `app/code/Magento/Shipping/Model/Carrier/AbstractCarrierInterface.php`:

	*	In method `collectRates()`, renamed parameter `\Magento\Quote\Model\Quote\Address\RateRequest` to `\Magento\Framework\Object`
	*	In method `checkAvailableShipCountries()`, renamed parameter `\Magento\Quote\Model\Quote\Address\RateRequest` to `\Magento\Framework\Object`
	* 	In method `proccessAdditionalValidation()`, renamed parameter `\Magento\Quote\Model\Quote\Address\RateRequest` to `\Magento\Framework\Object`

*	In `app/code/Magento/Shipping/Model/Carrier/AbstractCarrierOnline.php` method `proccessAdditionalValidation()`, renamed parameter `\Magento\Quote\Model\Quote\Address\RateRequest` to `\Magento\Framework\Object`
*	Moved `app/code/Magento/Quote/Model/Quote/Address/CarrierFactoryInterface.php` to `app/code/Magento/Shipping/Model/CarrierFactoryInterface.php`

<h3 id="rn-074b10-tax">Backward-incompatible changes in Magento_Tax</h3>
Removed constants from the following interfaces:

*	`app/code/Magento/Tax/Api/Data/AppliedTaxInterface.php`
*	`app/code/Magento/Tax/Api/Data/AppliedTaxRateInterface.php`
*	`app/code/Magento/Tax/Api/Data/OrderTaxDetailsAppliedTaxInterface.php`
*	`app/code/Magento/Tax/Api/Data/OrderTaxDetailsInterface.php`
*	`app/code/Magento/Tax/Api/Data/OrderTaxDetailsItemInterface.php`
*	`app/code/Magento/Tax/Api/Data/QuoteDetailsInterface.php`
*	`app/code/Magento/Tax/Api/Data/QuoteDetailsItemInterface.php`
*	`app/code/Magento/Tax/Api/Data/TaxClassInterface.php`
*	`app/code/Magento/Tax/Api/Data/TaxClassKeyInterface.php`
*	`app/code/Magento/Tax/Api/Data/TaxDetailsInterface.php`
*	`app/code/Magento/Tax/Api/Data/TaxDetailsItemInterface.php`
*	`app/code/Magento/Tax/Api/Data/TaxRateInterface.php`
*	`app/code/Magento/Tax/Api/Data/TaxRateTitleInterface.php`

<h3 id="rn-074b10-ups">Backward-incompatible changes in Magento_Ups</h3>
In `app/code/Magento/Ups/Model/Carrier.php` method `collectRates()`, renamed parameter `\Magento\Quote\Model\Quote\Address\RateRequest` to `\Magento\Framework\Object`

<h3 id="rn-074b10-usps">Backward-incompatible changes in Magento_Usps</h3>
In `app/code/Magento/Usps/Model/Carrier.php` method `collectRates()`, renamed parameter `\Magento\Quote\Model\Quote\Address\RateRequest` to `\Magento\Framework\Object`

<h3 id="rn-074b10-webapi">Backward-incompatible changes in Magento_Webapi and \Magento\Framework\Webapi</h3>
*	Added an additional parameter `$methodsMapProcessor` for the constructor of <a href="{{ site.mage2000url }}app/code/Magento/Webapi/Controller/Soap/Request/Handler.php" target="_blank">Magento\Webapi\Controller\Soap\Request\Handler</a>
*	Removed protected method `_formatRoutePath` from `\Magento\Webapi\Model\Rest\Config`
*	Added an additional parameter `$methodsMapProcessor` for the constructor of `\Magento\Framework\Api\DataObjectHelper`
*	Refactored class <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Reflection/DataObjectProcessor.php" target="_blank">\Magento\Framework\Reflection\DataObjectProcessor</a> to separate out responsibilities to the following smaller classes:

	*	Added new class `\Magento\Framework\Reflection\CustomAttributesProcessor`
	*	Added new class `\Magento\Framework\Reflection\ExtensionAttributesProcessor`
 	*	Added new class `\Magento\Framework\Reflection\FieldNamer`
	*	Added new class `\Magento\Framework\Reflection\MethodsMap`
	*	Added new class `\Magento\Framework\Reflection\TypeCaster`

*	Added an additional parameter `$methodsMapProcessor` for the constructor of `\Magento\Framework\Webapi\ServiceOutputProcessor`

<h3 id="rn-074b10-except">Backward-incompatible changes in exceptions</h3>
*	Eliminated the following exceptions and replaced with <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Exception/LocalizedException.php" target="_blank">\Magento\Framework\Exception\LocalizedException</a>:

	*	`\Magento\Backup\Exception`
	*	`\Magento\Catalog\Exception`
	*	`\Magento\Reports\Exception`
	*	`\Magento\Sales\Exception`
	*	`\Magento\SalesRule\Exception`
	*	`\Magento\Exception`
	*	`\Magento\Framework\Exception`
	*	`\Magento\UrlRewrite\Model\EntityNotAssociatedWithWebsiteException`
	*	`\Magento\Framework\App\Action\Exception`
	*	`\Magento\Framework\App\Action\NotFoundException`
	*	`\Magento\Framework\Code\ValidationException`
	*	`\Magento\Framework\Css\PreProcessor\Adapter\AdapterException`
	*	`\Magento\Framework\Mail\Exception`
	*	`\Magento\Framework\Stdlib\DateTime\Timezone\ValidationException`
	*	`\Magento\Framework\Module\Exception`
	*	`\Magento\Framework\Data\Argument\MissingOptionalValueException`
	*	`\Magento\Framework\Session\SaveHandlerException`
	*	`\Magento\Framework\ForeignKey\Exception`
	*	`\Magento\CatalogInventory\Exception`
	*	`\Magento\CatalogRule\CatalogRuleException`
	*	`\Magento\Payment\Exception`
	*	`\Magento\UrlRewrite\Model\Storage\DuplicateEntryException`

*	Eliminated the following and replaced with `\Magento\Framework\Exception\LocalizedException`:

	*	`\Magento\Eav\Exception`
	*	`\Magento\Shipping\Exception`
	*	`\Magento\Framework\Filesystem\FilesystemException`
	*	`\Magento\Framework\Filesystem\Io\IoException`
	*	`\Magento\Framework\DB\DBException`
	*	`\Magento\Framework\DB\Tree\Node\NodeException`
	*	`\Magento\Framework\DB\Tree\NodeSet\NodeSetException`
	*	`\Magento\Framework\DB\Tree\TreeException`
	*	`\Magento\Framework\Exception\File\ValidatorException`
	*	`\Magento\Framework\Exception\File\LargeSizeException`

*	Other replaced exceptions:

	*	`\Magento\BootstrapException` replaced with `\Magento\Framework\Exception\State\InitException`
	*	`\Magento\Framework\BootstrapException` replaced with `\Magento\Framework\Exception\State\InitException`

*	Direct dependency of `\Magento\Framework\Controller\Result\RedirectFactory` on `AbstractAction` removed and now `RedirectFactory` is injected using the context