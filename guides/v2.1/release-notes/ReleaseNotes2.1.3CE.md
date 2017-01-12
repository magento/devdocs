---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento CE 2.1.3 Release Notes
menu_title: Magento CE 2.1.3 Release Notes
menu_order: 9
version: 2.1
github_link: release-notes/ReleaseNotes2.1.3CE.md
---

*	TOC
{:toc}


We are pleased to present Magento Community Edition 2.1.3. This release includes many functional enhancements and fixes.

<div class="bs-callout bs-callout-info" id="info">
  <p>We republished these Release Notes with clarifications on December 16th, 2016.</p>
</div>


## Highlights

Magento 2.1.3 contains more than 90 bug fixes and enhancements, including these highlights:



* **New PayPal and Braintree payment features**

	* Increase conversion rates through faster checkouts by empowering customers to save their PayPal account as a payment option. This feature eliminates the need to enter a PayPal ID and password when making future purchases.

	* Reduce chargebacks and support calls by customizing the business name, phone number, and URL that appears on credit card statements for each of your websites through Braintree.

	* Reduce your risk of accidently shipping products to customers flagged by Braintree’s fraud risk feature with a new process that requires you to confirm risk decisions before proceeding with orders.

	* Enable unregistered customers to reorder or add items to an existing order in the Admin without having to re-enter their credit card information. Merchant can now bill the last payment method used during a guest checkout.

	* Simplify the process of configuring payments for your store with a redesigned Payment Methods page in the Admin interface.


* **Increased storefront performance** by removing excessive and slow SQL media queries.

* **Management of configurable products with many variations** in the Admin interface without degrading performance.


* **Successful import or export CSV files with data that contains special symbols** (that is, symbols that are not escaped during file processing).

* The Sales module provides **two new web API endpoints that allow you to process refunds from an order or invoice**. Previously, these actions could only be performed from the Admin interface. After you install this patch, you can:

	* Create a credit memo (complete or partial) for a particular invoice or order.

	* Add details about refunded items to an invoice or order.

	* Update the status and state of an invoice or order after actions are performed.

	* Notify a customer about refunded items or invoice or order.

	REST integrators can use `POST /V1/invoice/{invoiceId}/refund` and `/V1/order/{orderId}/refund` to perform these actions. SOAP integrators can call `salesRefundInvoiceV1` and `salesRefundOrderV1`.


* **Enhanced performance in the processing of large catalogs**. The catalog/product indexer no longer requires a large temporary table memory allocation in MySQL for large catalogs.




## Functional fixes and enhancements

We address the following functional issues in this release.



### Cart and checkout
{:.no_toc} 

<!---58036-->* You can now reload a page during checkout without unintentionally changing shipping information. 

<!---58902-->* Custom address attributes now appear in the Checkout summary.  

<!---57497-->* Lengthy Order Status tables are now paginated as expected. 

<!---56956-->* Magento now displays the product add validation message ("Product was added to the cart") only after you have successfully added a product to your cart.

<!---58057-->* We've resolved an issue that prevented you from adding more than one product to a shopping cart from a wishlist. <a href="https://github.com/magento/magento2/issues/5282" target="_blank">(GITHUB-5282)</a> 

<!---59209-->* The number of items in the minicart is now updated correctly when you run Magento in mixed HTTP/HTTPS mode. <a href="https://github.com/magento/magento2/issues/6487" target="_blank">(GITHUB-6487)</a> 


<!---57062-->* The minicart now performs as expected in deployments that span multiple websites. Previously, in a Magento installation that had multiple websites, products you added to one website appeared in the other websites' minicarts.

<!---57843-->* A cart rule with a coupon code no longer overrides a cart rule without a coupon code when multiple cart rules are applied. Previously, when you created two cart rules and applied them to a cart,  the rule with a coupon was applied, but the second rule was not.<a href="https://github.com/magento/magento2/issues/7171" target="_blank"> (GITHUB-6294)</a> 

<!---59024-->* Refreshing your browser page while on the Review and Payments page of the checkout process no longer clears information from form fields. Previously, Magento cleared information from the **Ship to** field if you refreshed your browser page during this process. 

<!---60103-->* Magento no longer lets you add a product variation to your shopping cart if the item is out of stock. Previously, Magento permitted you to select an out-of-stock item and when you added it to your cart, displayed the "Product is out of stock" message.

<!---58090-->* We've corrected a problem with Magento displaying an HTTP ERROR 500 intermittently during checkout. 


<!---57168-->* We fixed a JavaScript error that occurred on the Checkout page after you changed the country in the **Estimate Shipping and Tax** field.




### Configurable products
{:.no_toc} 

We've enhanced the performance of configurable products in several ways:

<!---57055-->*  You can now successfully disable the lowest price of a configurable product and its associated simple products. Previously, Magento displayed a configurable product's lowest price even after you disabled that price. 


<!---56998 -->* Magento no longer applies one simple product's special price to another simple product of the same configurable product. Previously, when you set a regular and special price for a child product, all products associated with the same configurable product displayed a regular and special price, even when these amounts were the same. <a href="https://github.com/magento/magento2/issues/4442" target="_blank">(GITHUB-4442)</a>, <a href="https://github.com/magento/magento2/issues/5097" target="_blank">(GITHUB-5097)</a>, <a href="https://github.com/magento/magento2/issues/6645" target="_blank">(GITHUB-6645)</a>



<!---54808 -->* You can now edit a product attribute for multiple configurable products. Previously, when you tried to bulk-edit an attribute on a collection of filtered, configurable products, Magento would complete the process without incorporating your edits, and then incorrectly tell you that the products had been edited.


<!---60605-->* Magento no longer displays an error when you add a configurable product by SKU if an associated simple product is out-of-stock. 


<!---61055-->* Magento now correctly displays a product as out-of-stock if its child products are disabled. Previously, the category page failed to list the product at all, rather than listing it as out of stock. 


<!---57044-->* A price change to a custom option affects only that option. Previously, changing the price of a custom option also affected the price of related products.  <a href="https://github.com/magento/magento2/issues/4588" target="_blank">(GITHUB-4588)</a>,  <a href="https://github.com/magento/magento2/issues/5798" target="_blank">(GITHUB-5798)</a>, <a href="https://github.com/magento/magento2/issues/6041" target="_blank">(GITHUB-6041)</a>, <a href="https://github.com/magento/magento2/issues/6097" target="_blank">(GITHUB-6097)</a> 




### Email
{:.no_toc}

<!---57496-->* Magento now successfully loads the New Order Email templates. <a href="https://github.com/magento/magento2/issues/5101" target="_blank">(GITHUB-5101)</a>

<!---57204 -->* The **Send Welcome Email From** field now identifies the store that the customer is associated with. 



### General fixes
{:.no_toc} 

<!--- 60890 -->* Admin users with restricted permissions can now log in successfully as determined by those permissions. Previously, Magento displayed a fatal error upon login under these conditions.



<!---55662-->* We've removed the duplicated PHP settings from the sample web server configuration files. 


<!--- 59581-->* We've improved and streamlined the Magento Admin PayPal configuration interface. 


<!---56962 -->* Magento now displays the **State/Province** field on the Add New Address page. <a href="https://github.com/magento/magento2/issues/5279" target="_blank">(GITHUB-5279)</a>



<!---57187-->*  When creating a new page with the Add New Page feature, Magento no longer throws a JavaScript error when Layout is set to empty. 

<!---57035-->* You can now upload changes to the `robots.txt` file from the Admin panel. 


<!---57351-->* We've removed the sample password from the Setup Wizard.

<!---56742-->* You can now sort and filter on the New Review page. <a href="https://github.com/magento/magento2/issues/6294" target="_blank">(GITHUB-5391)</a> 

<!---58511-->* Magento now displays server-side Ajax error messages. 


<!---56964-->* Magento now validates the uniqueness of product attribute values as you create or edit them. Previously, you could add identically named values to an attribute. <a href="https://github.com/magento/magento2/issues/4881" target="_blank">(GITHUB-4881)



<!---59879-->* Magento no longer displays the "as low as" label for a disabled price on the Category page.


<!---58500-->* The Magento Framework now makes its dependency upon the `zendframework/zend-stdlib` library explicit in `composer.json`.  <a href="https://github.com/magento/magento2/issues/6442" target="_blank">(GITHUB-6442)</a>



<!---59397-->* Custom themes now inherit parent XML configuration information as expected.  





### Images
{:.no_toc} 

<!---55447-->* Magento no longer displays an exception when it cannot find a product image file. <a href="https://github.com/magento/magento2/issues/5184" target="_blank">(GITHUB-5184)</a>, <a href="https://github.com/magento/magento2/issues/5497" target="_blank">(GITHUB-5497)</a>,  <a href="https://github.com/magento/magento2/issues/3545" target="_blank">(GITHUB-3545)</a>, <a href="https://github.com/magento/magento2/issues/5871" target="_blank">(GITHUB-5871)</a>

<!---56944-->*  Magento now successfully saves images that you edit in a WYSIWYG editor. Previously, when you tried to change an image by right-clicking it in a WYSIWYG editor and choosing Insert/Edit Image, Magento did not save your changes. 

<!---58335-->* You can now preview uploaded images.


<!---56972-->* You can now set an image size for product watermarks. <a href="https://github.com/magento/magento2/issues/5270" target="_blank">(GITHUB-5270)</a> 

<!---55608-->*  Graphics now scroll as expected on mobile devices. <a href="https://github.com/magento/magento2/issues/5302" target="_blank">(GITHUB-5302)</a> 




### Import/Export
{:.no_toc} 


<!---58977-->* You can now successfully import multiselect attributes that contain special symbols or delimiters. Previously, when you tried to import attributes containing delimiters, data validation (and the import) failed.  


<!---56804-->* We've fixed an issue with the correct representation of date and time zones of items in a product catalog during import or export. Previously, Magento exported all dates in the default format (UTC-8), including values that you set to be displayed using another standard. 


<!---57052-->* You can now import negative quantities. 

<!---56018-->* Magento now imports custom options correctly. Previously, when you tried to import a custom option, the import failed, and Magento displayed this error: `Javascript Error: Uncaught RangeError: Maximum call stack size exceeded`. <a href="https://github.com/magento/magento2/issues/5573" target="_blank">(GITHUB-5573)</a> 

<!---57438-->* We’ve added a new way to import images: You can now successfully import images when you set your document root to <your Magento install dir>/pub. Previously, you needed to set document root to `/magento` to import images. Both ways of importing now work.  <a href="https://github.com/magento/magento2/issues/5359" target="_blank">(GITHUB-5359)</a>


<!---57490-->* Magento now removes category URL keys from the `url_rewrite` table as expected during import. Previously, Magento did not remove these keys, which triggered a failure during import. This subsequently caused Magento to quickly reach the maximum error count, returning this error: "Maximum error count has been reached or system error is occurred!".  <a href="https://github.com/magento/magento2/issues/1471" target="_blank">(GITHUB-1471)</a> 


<!---57981-->* You can now export a bundle product that contains a custom text area attribute.  Previously, if you tried to export this type of bundle product, the export would fail, and Magento displayed the message, "There is no data for the export".




### Indexing
{:.no_toc} 

<!---56928-->* We've improved the performance of the algorithm that Magento uses to calculate batch sizes while indexing categories.  



<!---58703-->* The category/product indexer now successfully completes a full reindexing of all indexes on large profiles with 500,000 or more products. Previously, Magento successfully generated a large profile, but failed to complete the reindexing of the categories or products, and displayed the following error:  "Error 1114: Table is full".





### Installation, upgrade, and deployment
{:.no_toc} 





<!---56977-->* We fixed an issue that blocked using the web installer to successfully set up Magento. Previously, if you tried to install Magento with the web installer, Magento would indicate that the readiness check failed, and installation would not complete. 




<!---58312-->* Magento no longer incorrectly shows products as "out of stock" after you update your installation from 2.0.7 to 2.1.0. <a href="https://github.com/magento/magento2/issues/5222" target="_blank">(GITHUB-5222)</a> 

<!---57943-->* Magento 2.0.x and 2.1.x now supports the use of table prefixing during installation. Previously, when you used table prefixing, your Magento installation failed with this error:   "Duplicate key on write or update". <a href="https://github.com/magento/magento2/issues/5688" target="_blank">(GITHUB-5688)</a> 


<!---60832-->* You can now successfully upgrade your Magento installation from CE 2.1.1 to EE 2.1.3. Previously, Magento displayed this error, "Default website not defined" when upgrading because Magento read the list of websites from the database. It now reads from the config file. 



### Orders
{:.no_toc} 


<!--- 61268, 59424, 56433, --> * We’ve added PHP interfaces that add the ability to change the status of a shipment. The new Creditmemo interface supports tasks you can already do through the Magento Admin, including the ability to:

	* support returning multiple units of a configurable product. Previously, when you tried to refund an order, you could refund only one unit of a configurable product, not the amount in the original order. 

	* return the product to stock 

	* change order status after a credit memo has been created.

<!--- 57077-->* You can now set the customer group when creating a new order from the Admin interface. <a href="https://github.com/magento/magento2/issues/6162" target="_blank">(GITHUB-6162)</a> 


<!---57387 -->* You can now print invoices and credit memos from the Order page. 


### Payment methods
{:.no_toc} 

<!---59578 -->* We've enhanced our PayPal and Braintree implementations so that merchants can now: 


	* Save customer PayPal account information in the Braintree Vault when using Braintree as a service. This enhancement provides a secure method for charging my customers without prompting them to enter a payment information for multiple purchases or for purchases from multiple devices. We've also added support for Maestro and Discover bins added to the credit card form both for Braintree and PayPal solutions. 


	* Configure dynamic descriptors (Company Name, Phone and URL) for Braintree.  This enhancement supports customers easily identifying a source of transactions in their bank statements. (This will potential simplify the resolution of disputed transactions by supporting the display of the Kount status for Braintree in the Admin interface.) 


<!---56910-->* The Braintree payment method now works as expected with Vault table prefixing.  


<!---57426-->* Magento no longer throws an error when using the Braintree Vault payment GET order API call. <a href="https://github.com/magento/magento2/issues/6215" target="_blank">(GITHUB-6215)</a>




<!---59353-->* You can now use JCB and Diners Club credit cards with the Authorize.net payment method.

<!--- 59124-->* Fixed issue with credit card capture information failing to remain associated with its first authorization. <a href="https://github.com/magento/magento2/issues/6716" target="_blank">(GITHUB-6716)</a> 

<!---57086-->* You can now successfully place orders with Braintree when using an alternative merchant account ID. (The merchant account does not need to match the 3D Secure authorization merchant account.) <a href="https://github.com/magento/magento2/issues/5910" target="_blank">(GITHUB-5910)</a> 

<!---59637-->*  Braintree no longer encounters an error during checkout when you apply a 100% discount coupon to a product and enable free shipping. Previously, Magento  displayed a spinning loader widget, and your screen froze. The Developer console displayed this error:
`Uncaught Error: [paypal-container] is not a valid DOM Element`. 





### Performance
{:.no_toc} 
We've improved the performance of these tasks: 



<!---59708-->* Creating many (2500 - 5000) product variants, both simple and complex product types


<!---59806-->* Loading many configurable products with multiple images (for example, configurable products with three attributes and 250 options) <a href="https://github.com/magento/magento2/issues/6979" target="_blank">(GITHUB-6979)</a> 

<!---60041-->* Resizing images on the frontend

<!---57905-->We've optimized compiler performance (that is, the [`setup:di:compile`]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-compiler.html) command). 





### Scope
{:.no_toc} 


<!---56936 -->*  The list of allowed countries is now configured as part of website scope, not store view scope.  <a href="https://github.com/magento/magento2/issues/2946" target="_blank">(GITHUB-2946)</a>


<!---57001-->* A restricted user can now change storeview- or website- level attributes that are defined within his scope. 

<!---59284-->* You can now select the scope for an action that you are running from the Catalog page's product table. 

<!---59953-->* The price you set on the website scope no longer overrides any local settings you set on configurable products at the store view level.



### Static file processing
{:.no_toc} 
<!---60603-->* We've corrected a problem with `_requirejs` asset retrieval via `static.php` in static content versioning. 

<!---56914-->* Versioning of static files (including CSS, JS, font, and image files) is now enabled by default. 

<!---57904-->* We've improved the speed of static asset deployment. See <a href="http://devdocs.magento.com/guides/v2.1/config-guide/cli/config-cli-subcommands-static-view.html" target="_blank">Deploy static view files</a> for more information about available options. 





### Tier pricing
{:.no_toc} 

<!---57625-->* Magento no longer resets the tier price during quote recalculation. Previously, when you triggered an automatic quote recalculation (by changing the shipping address, for example), the tier price was lost. (This issue occurred only if the product record in the database had values for `row_id` and `entity_id` that didn't match.)


<!---56922-->*  Magento no longer adds a thousands separator ( , ) to representations of quantities that exceed 1,000.  <a href="https://github.com/magento/magento2/issues/5745" target="_blank">(GITHUB-5745)</a> 


### Tracking and shipping
{:.no_toc}  

<!---57037-->* UPS now generates shipping rates for Puerto Rico postal codes.




### Varnish
{:.no_toc}  

<!---58362-->* We've changed the behavior of the Varnish X-header. Only the parent (meta) SKU is now included in the list -- not the SKUs of all child products. <a href="https://github.com/magento/magento2/issues/6401" target="_blank">(GITHUB-6401)</a>





### Web APIs
{:.no_toc} 

<!--- 57066-->* The Swagger documentation erroneously indicated that search queries can return detailed information about multiple objects. The description of these APIs now state which API to use to return detailed information about a single object.

<!---59874-->* We've improved the process of using the WebAPI interface to save a product stock item. Previously, this type of save action worked inconsistently.

<!---57039-->* You can now update a product's media gallery through the REST API. 




























































## Breaking changes

We've introduced a backward-incompatible change to the `Magento_Vault` module. We've bumped the version of this module from 100.1.1 to 100.2.0 to identify this change and resolve it with Composer configuration.



### New method
{:.no_toc} 

This release introduces the `Magento\Vault\Block\TokenRendererInterface::getToken` method. This method provides details about payment tokens to renderer components, such as public hash (allows to place orders) and available card or account details. Third-party developers can use this method to implement this functionality in their payment integrations. 
































<!---INTERNAL ONLY: 59791, 59678, 59645, 56585, 57593, 60536, 60060, 60062, 60064, 59873, 60348, 60471, 60561, 59675, 60289, 60525,  60427, 60479, 60366, 60053,  60898, 60460,  59894, 56142, 61039, 62006,  59309, 60381, 58004, 59376,  62013, 61850
-->


<!---DUPLICATE: 55974, 55853, 56929, 57507, 58829, 60457, 61346, 59835, 58291, 55351 -->

<!---WON'T FIX: 57329, 57310, 56879, 58088,  55299, 58660, 59293, 58660, 58460, 59300, 60105, 59627, 60586, 58916, 56957, 60662, 60695, 60971, 61341, 60579, 57602, 57144, 60801 -->

<!---CANNOT REPRODUCE: 57502, 60607, 60733, 60738, 60736, 61827, 60780, 61024, 60744, 61731-->



## Known issues

<!-- 62669 -->*	**Issue**: A payment method configuration is not displayed in the Magento Admin if the sort order for the group is not specified or is less than 5.

	**Workaround**: In `<Payment module base dir>/etc/adminhtml/system.xml`, file set group sortOrder greater than 5.

	[Example for the Braintree module]({{ site.mage2100url }}app/code/Magento/Braintree/etc/adminhtml/system.xml#L11){:target="_blank"}.

	[GITHUB-7891](https://github.com/magento/magento2/issues/7891){:target="_blank"}

<!-- 62660 -->*	**Issue**: Deploying static content deployment for multiple locales at the same time causes JavaScript translations to fail. Example of a command that demonstrates this issue: 

		bin/magento setup:static-content:deploy --theme=Magento/luma en_US de_DE

	**Workaround**: Execute static content deployment command for every locale separately. For example:

		bin/magento setup:static-content:deploy --theme=Magento/luma en_US
		bin/magento setup:static-content:deploy --theme=Magento/luma de_D

	[GITHUB-7862](https://github.com/magento/magento2/issues/7862){:target="_blank"}

!---62083-->
* **Issue**: You receive the following fatal error while installing 2.1.3 from `repo.magento.com`.
   
  > Fatal error: Cannot instantiate interface Magento\Framework\App\Config\Scope\ReaderPoolInterface in /var/www/html/magento2ce/vendor/magento/framework/ObjectManager/Factory/Dynamic/Developer.php on line 73.
  
  **Workaround**:  You can avoid this fatal error by taking one of these actions: 

	*	If your Magento root directory is `<Magento install dir>/pub`,  then start the Web Setup Wizard from `http://<Magento host or IP>/setup` instead of from `http://<Magento host or IP>`

	*	Install Magento using the [command line]({{ page.baseurl }}comp-mgr/cli/cli-upgrade.html).


<!---60553-->* **Issue**: When editing a product, you cannot edit customizable options on the storeview level. That is, a change to one option affects products on all stores. Also, the  'Use Default Value' checkbox for the option title does not work. Un-checking this box and then changing the title affects all storeviews. 


<!---60781-->* **Issue**: When you add a new product and re-index using Varnish, Magento does not display the product on the frontend, even after you purge the cache and re-index. 


<!---60616-->* **Issue**: Magento fails to validate required Customer Address or Customer attributes.  




<!---61341-->* **Issue**: A Paypal SSL curl communication error can occur if your Magento installation is not running the minimal required TLS version. Older versions of Magento might not run the minimal version, which is [TLS 1.2]({{ page.baseurl }}install-gde/system-requirements_tls1-2.html).  

	If it isn't, then Magento throws this error: `curl: (35) Cannot communicate securely with peer: no common encryption algorithm(s)`. 

	**Workaround**: Upgrade your version of curl to the latest possible version that will enable the use of [TLS 1.2]({{ page.baseurl }}install-gde/system-requirements_tls1-2.html by default. 


<!---59555 --> * **Issue**: Mass actions can be slow and consume excessive memory unless you increase the PHP `memory_limit` setting. The default settings typically supports processing about 1,000 variables. If you try an mass action that involves 1,000 or more variables, the mass action might fail. 

	**Workaround**: You can reduce processing time and performance by increasing your [PHP `memory_limit` setting]({{ page.baseurl }}install-gde/prereq/php-settings.html) to 1 GB.

* **Issue** If using Nginx to serve static content you will see 404 responses for CSS/JS. This is due to requirements for a  rewrite which has been added in pub/static/.htaccess
```
    # Remove signature of the static files that is used to overcome the browser cache
    RewriteRule ^version.+?/(.+)$ $1 [L]
```

 **Workaround** You can add the equivalent Nginx rewrite in your Nginx configuration as below.
```
	server {
		...
		# Needed for M2 2.1.3+
                rewrite ^/pub/static/version.+?/(.*)$ /pub/static/$1 last;
		....
	}
```




## System requirements
Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.


{% include install/releasenotes/ce_install_21.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits
Dear community members, thank you for your suggestions and bug reports. 

