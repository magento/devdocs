---
layout: default
group: release-notes
title: Release Notes
menu_title: Changes in 1.0.0-beta (Merchant Beta)
menu_node: 
menu_order: 6
github_link: release-notes/changes_1.0.0-beta.md
---

<h2 id="changes-contents">Contents</h2>

*	<a href="#rn-074b10-overview">Overview of the 0.74-beta16 release</a>
*	<a href="#1.0.0-beta-changes">Major changes in the 0.74-beta16 release</a>
*	<a href="#1.0.0-beta-incompat">Backward-incompatible changes</a>

<h2 id="rn-074b10-overview">Overview of the 0.74-beta10 release</h2>
These Release Notes discuss important changes in this release. For additional details, see the following:

*	<a href="{{ site.mage2000url }}CHANGELOG.md#0740-beta16" target="_blank">Changelog</a>
*	<a href="{{ site.gdeurl }}release-notes/known-issues.html">Known issues</a>
*	<a href="{{ site.gdeurl }}release-notes/bk-release-notes.html">Release highlights</a>

<h2 id="1.0.0-beta-changes">Major changes in the 0.74-beta16 release</h2>
We made the following changes in this release:

*	<a href="#1.0.0-beta-changes-join">Join directive</a>
*	<a href="#1.0.0-beta-changes-backup">Uninstall and backup</a>
*	<a href="#1.0.0-beta-changes-other">Other changes</a>

<h3 id="1.0.0-beta-changes-join">Join directive</h3>
*	Created a Join directive, join process for tables, and XML configuration support to define a performant join for search services.
*	Changed return type from `\Magento\Sales\Api\Data\OrderSearchResultInterface[]` to `\Magento\Sales\Api\Data\OrderInterface[]` in the API method `getList` in `Magento\Sales\Api\Data\OrderSearchResultInterface`
*	Changed return type from `\Magento\Sales\Api\Data\InvoiceSearchResultInterface` to `\Magento\Sales\Api\Data\InvoiceCommentSearchResultInterface` in the API method `getList` in `Magento\Sales\Api\InvoiceCommentRepositoryInterface`

<h3 id="1.0.0-beta-changes-backup">Uninstall and backup</h3>
We've added the ability to <a href="{{ site.gdeurl }}install-gde/install/install-cli-backup.html">back up and roll back to</a> at any time:

*	The Magento 2 file system
*	The `pub/media` directories
*	The Magento 2 database

You can also uninstall any of the following after optionally backing up:

*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-uninstall-mods.html">Modules</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-theme-uninstall.html">Themes</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-uninstall-langpk.html">Language packages</a>

<h3 id="1.0.0-beta-changes-other">Other changes</h3>
*	Updated the "composer/composer" dependency to version "1.0.0-alpha10".
*	The <a href="http://php.net/manual/en/book.xsl.php" target="_blank">ext-xsl</a> PHP extension is now a requirement to install the Magento software.

	This extension is typically provided with PHP on CentOS but you might need to install it on Ubuntu (`apt-get install php5-xsl`).
*	We added the `pub/media/tmp` directory to the list of allowed media resources.

	For example, now when you upload an image using the product edit page, the image displays even if the product isn't saved.

*	The `pub/get.php` entry point now displays exceptions in <a href="{{ site.gdeurl }}config-guide/bootstrap/magento-modes.html#mode-developer">developer mode</a>.

This change also enables you to get a table prefix without injecting `Magento\Framework\App\Resource` into <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Api/ExtensionAttributesFactory.php" target="_blank">ExtensionAttributesFactory</a>.

<h2 id="1.0.0-beta-incompat">Backward-incompatible changes</h2>
This section discusses the backward-incompatible changes we made in this release.

### Magento_Captcha changes

`/Magento/Captcha/Model/Checkout/Plugin/Validation` validation moved to `Magento/Captcha/Model/Customer/Plugin/AjaxLogin`

### Magento_Catalog changes

#### Magento_Catalog API changes to product_sku attribute
The product link entity used as the payload for PUT, POST (`/V1/products/:sku/links`) and DELETE (`/V1/products/:sku/links/:type/:linkedProductSku`) has changed. The `product_sku` attribute is now `sku`. Examples follow:

OLD

	{% highlight json %}
	{ 
	    "entity": { 
	       "product_sku": "Simple_Product",         
  	      "linked_product_sku": "simple3", 
 	       "link_type": "upsell" 
 	  }
	}
	{% endhighlight %}
 
NEW

	{% highlight json %}
	{ 
    	"entity": { 
        	"sku": "Simple_Product",         
    	    "linked_product_sku": "simple3", 
        	"link_type": "upsell" 
    	}
	}
	{% endhighlight %}

`link_type` is no longer specified in the REST URL. You must specify it in the payload for PUT and POST operations as follows:

OLD

	POST: /V1/products/Simple_Product/links/related

NEW

	POST: /V1/products/Simple_Product/links

#### Magento_Catalog API change to stock item quantity
The new REST route URL to update stock item quantity is now `/V1/products/:sku/stockItems/:itemId`

#### Magento_Catalog argument change

In `Magento\CatalogUrlRewrite\Model\ProductUrlPathGenerator`, we added a new argument `\Magento\Catalog\Api\ProductRepositoryInterface $productRepository` in `__construct;`

### Magento_Checkout changes

*	`checkout_onepage_index.xml` renamed to `checkout_index_index.xml`
*	Updated process method according to changed in checkout layout `Magento/Checkout/Block/Checkout/LayoutProcessor`
*	In `Magento/Checkout/Model/DefaultConfigProvider` we added required parameters `Cart\ImageProvider`, `Magento\Directory\Model\Country\Postcode\ConfigInterface`, `Magento\Directory\Helper\Data`, `Magento\Quote\Api\Data\EstimateAddressInterfaceFactory`,
`Magento\Shipping\Model\Config`, `Magento\Store\Model\StoreManagerInterface`, `Magento\Quote\Api\PaymentMethodManagementInterface`, `Magento\Framework\App\Config\ScopeConfigInterface`,
`Magento\Store\Model\ScopeInterface`, `Magento\Quote\Api\CartTotalRepositoryInterface`

### Magento_Config changes

*	`\Magento\Config\Model\Config\Structure\Reader`

	Add new argument `\Magento\Framework\View\TemplateEngine\Xhtml\CompilerInterface $compiler` into `__construct;`

*	`\Magento\Payment\Model\Method\AbstractMethod`

	Add new argument `\Magento\Payment\Model\Method\Logger $logger` into `__construct;`

*	`\Magento\Payment\Model\Method\Cc`

	Add new argument `\Magento\Payment\Model\Method\Logger $logger` into `__construct;`

*	`\Magento\Payment\Model\Method\Free`

	Add new argument `\Magento\Payment\Model\Method\Logger $Logger` into `__construct;`

*	`\Magento\Payment\Model\Method\Logger`

	Replace arguments for method `debug` from `($logData, ConfigInterface $config)` to `(array $debugData, array $debugReplaceKeys, $debugFlag);`

### Magento_Email changes
Constructors of `\Magento\Email\Model\AbstractTemplate` and `\Magento\Email\Model\BackendTemplate` now have two additional parameters parameters: `\Magento\Framework\Model\Resource\AbstractResource` and `\Magento\Framework\Data\Collection\AbstractDb`. 

We also swapped the `$design` and `$registry` parameters.

### Removed the Magento_GoogleShopping module
We removed the `Magento_GoogleShopping` module.

### Magento_Quote changes
Removed:

*	`/Magento/Quote/Api/AddressDetailsManagementInterface`
*	`/Magento/Quote/Api/Data/AddressDetailsInterface`
*	`/Magento/Quote/Api/GuestAddressDetailsManagementInterface`
*	`/Magento/Quote/Model/AddressDetails`
*	`/Magento/Quote/Model/AddressDetailsManagement`
*	`/Magento/Quote/Model/GuestCart/GuestAddressDetailsManagement`

### Removed and replaced JavaScript
*	`app/code/Magento/Captcha/view/frontend/web/js/view/checkout/guestCaptcha.js` replaced with `Magento/Captcha/view/frontend/web/js/view/checkout/loginCaptcha.js`
*	`app/code/Magento/Captcha/view/frontend/web/js/view/checkout/registerCaptcha.js` replaced with `Magento/Captcha/view/frontend/web/js/view/checkout/loginCaptcha.js`
*	`app/code/Magento/Checkout/view/frontend/web/js/view/payment/method-info.js` replaced with `Magento/Checkout/view/frontend/web/js/view/payment/default.js`
*	`app/code/Magento/Checkout/view/frontend/web/js/view/progress.js` replaced with `Magento/Checkout/view/frontend/web/js/view/progress-bar`
*	`app/code/Magento/Checkout/view/frontend/web/js/view/review/item/column.js` replaced with `Magento/Checkout/view/frontend/web/js/view/summary/cart-items.js`
*	`app/code/Magento/Checkout/view/frontend/web/js/view/review/item/columns/price.js` replaced with `Magento/Checkout/view/frontend/web/js/view/summary/cart-items.js`
*	`app/code/Magento/Checkout/view/frontend/web/js/view/review/item/columns/qty.js` replaced with `Magento/Checkout/view/frontend/web/js/view/summary/cart-items.js`
*	`app/code/Magento/Checkout/view/frontend/web/js/view/shipping-address.js` replaced with `app/code/Magento/Checkout/view/frontend/web/js/view/shipping.js`
*	`app/code/Magento/Checkout/view/frontend/web/js/view/shipping-method.js` replaced with `app/code/Magento/Checkout/view/frontend/web/js/view/shipping.js`
*	`app/code/Magento/CheckoutAgreements/view/frontend/web/js/view/checkoutAgreements.js` replaced with `Magento/CheckoutAgreements/view/frontend/web/js/view/checkout-agreements-modal.js`
*	`app/code/Magento/OfflinePayments/view/frontend/web/js/view/payment/checkmo-method.js` replaced with `OfflinePayments/view/frontend/web/js/view/payment/method-renderer/checkmo-method.js`
*	`app/code/Magento/OfflinePayments/view/frontend/web/js/view/payment/purchaseorder-method.js` replaced with `OfflinePayments/view/frontend/web/js/view/payment/method-renderer/purchaseorder-method.js`

*	Removed:

	*	`app/code/Magento/Checkout/view/frontend/web/js/model/addresslist.js`
	*	`app/code/Magento/Checkout/view/frontend/web/js/view/columns.js`
	*	`app/code/Magento/Checkout/view/frontend/web/js/view/discount.js`
	*	`app/code/Magento/Checkout/view/frontend/web/js/view/itemsAfter.js`
	*	`app/code/Magento/Checkout/view/frontend/web/js/view/itemsBefore.js`
	*	`app/code/Magento/Checkout/view/frontend/web/js/view/payment/generic.js`
	*	`app/code/Magento/Checkout/view/frontend/web/js/view/payment/virtual.js`
	*	`app/code/Magento/Checkout/view/frontend/web/js/view/subtotal.js`
	*	`app/code/Magento/Checkout/view/frontend/web/js/view/totals.js`
	*	`app/code/Magento/Checkout/view/frontend/web/js/view/review.js`
	*	`app/code/Magento/OfflinePayments/view/frontend/web/js/view/payment/instructions-method.js`

### Framework changes
*	We removed the method `getDefaultResult` from `\Magento\Framework\App\Action\AbstractAction`
*	We removed `field_expr` support from `Magento\Framework\DB\Adapter\Pdo\Mysql::prepareSqlCondition()`