---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento CE 2.0.11 Release Notes
menu_title: Magento CE 2.0.11 Release Notes
menu_order: 19
github_link: release-notes/ReleaseNotes2.0.10CE.md
---
*	TOC
{:toc}


We are pleased to present Magento Community Edition 2.0.11. 

Backward-incompatible changes are documented in <a href="{{ page.baseurl }}release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.

## Highlights
Magento 2.0.11 contains more than 90 bug fixes and enhancements, including these highlights:


* **Management of configurable products with many variations** in the Admin interface without degrading performance.

* **Upgrade to Magento 2.0.11 without issue** when using multiple master databases for checkout, order management, and product data.

* **Successful import or export CSV files with data that contains special symbols** (that is, symbols that are not escaped during file processing).

* **Ten new web APIs (or service contracts) for the Sales module** that incorporate functionality into the Sales API that is currently available in the Admin interface. After you install this patch, you’ll be able to use these new Sales API methods to carry out these tasks:

	* create a credit memo (complete or partial) for particular invoice

	* add details about refunded items to an order

	* change status and state of an order according to performed actions

	* notify customer about performed refund operation

These new service contracts include the following:

`InvoiceOrderInterface`

`PaymentAdapterInterface`

`CreditmemoItemCreationInterface`

`CreditmemoCommentCreationInterface`

`CreditmemoCreationArgumentsInterface`

`CreditmemoDocumentFactory`

`RefundInvoiceInterface`

`RefundAdapterInterface`

`RefundOrderInterface`

`ShipOrderInterface`





## Functional fixes

We address the following functional issues in this release.



### Import/Export
{:.no_toc} 

<!--- 55156-->* You can now export a bundle product that contains a custom text attribute. Previously, if you tried to export this type of bundle product, the export failed, and Magento displayed the message, "There is no data for the export". 

<!--- 59413-->* You can now successfully import multiselect attributes that contain special symbols or delimiters. Previously, when you tried to import attributes that contained delimiters, data validation (and the import) failed. 

<!---58047 -->* Importing customer data no longer sets the Gender attribute to a blank field. 

<!---57106-->* You can now import negative quantities. Previously, when importing a product quantity of -1, Magento returned an error. 

<!--- 57162-->* Magento now prompts you to log in before attempting to upgrade. Previously, it was not clear that you needed to log in first before initiating an upgrade.  <a href="https://github.com/magento/magento2/issues/3059" target="_blank">(GITHUB-3059)</a> 

<!--- 57491-->* Magento no longer randomly throws this error during import after a file passes the data check: "Maximum error count has been reached or system error is occurred!". 


<!--- 56803-->* We've fixed an issue with the representation of date and timezones of items in the product catalog during import or export. Previously, Magento in the default format (UTC-8), including values that you set to be displayed using another standard. 




### Installation, upgrade, and deployment
{:.no_toc} 


<!--- 58065-->* You can now upgrade your Magento installation when using multiple master databases for checkout, order management, and product data. 

<!--- 57082-->* The Web Setup component manager now shows a list of all available versions of an extension for installation. Previously, the Web Setup component manager showed only the latest version of the extension. 

<!--- 57130-->* We've fixed an issue with upgrade that was caused by the `bin/magento` commands. These commands (`setup:cron:run`, `setup:upgrade`, and `setup:uninstall`) now skip the session folder.

<!--- 57944-->* Magento 2.0.x now supports the use of table prefixing during installation. Previously, when you used table prefixing, your Magento installation failed with this error: "Duplicate key on write or update". <a href="https://github.com/magento/magento2/issues/5688" target="_blank">(GITHUB-5688)</a>




### Performance
{:.no_toc} 

* We’ve improved the performance of these tasks:

<!--- 60187-->	* Using the WebAPI interface to save a product stock item. Previously, this type of save action worked inconsistently. 

<!--- 55785-->	* Loading the Configurable Product page.

<!---59394 -->	* Calculating batch sizes while indexing categories.

<!--- 57509-->* We've also streamlined the JavaScript bundling process, which reduces the size of bundled files. <a href="https://github.com/magento/magento2/issues/4506" target="_blank">(GITHUB-4506)</a> 

<!--- 57894-->* We’ve optimized compiler performance by adding several options to the `setup:di:compile` command.


### Configurable products
{:.no_toc} 

<!--- 55791-->* We've improved the performance of the review step when using the wizard to create a configurable product.

<!--- 59050-->* You can now successfully reorder a configurable product. Previously, if you created an order that includes multiple products, one of which is a reorder, options for these products were confused. <a href="https://github.com/magento/magento2/issues/3654" target="_blank">(GITHUB-3654)</a>, <a href="https://github.com/magento/magento2/issues/3820" target="_blank">(GITHUB-3820)</a>

<!--- 58793-->* You can now successfully edit configuration options when creating a configurable product. Previously, the **Edit Configuration** button did not work as expected.

<!--- 58917 -->* You can now successfully add a simple child product to a configurable product with advanced configurations. 

<!--- 57000-->* Magento no longer applies one simple product's special price to another simple product of the same configurable product. Previously, when you set both a regular and a special price for a child product, all products associated with the same configurable product displayed a regular and special price, even when these amounts were the same. <a href="https://github.com/magento/magento2/issues/4442" target="_blank">(GITHUB-4442)</a>, <a href="https://github.com/magento/magento2/issues/5097" target="_blank">(GITHUB-5097)</a>, <a href="https://github.com/magento/magento2/issues/6645" target="_blank">(GITHUB-6645)</a> 

<!--- 59415-->* Magento no longer displays the *as low as* price for a configurable product's simple options if the options are disabled.

<!--- 58035-->* You can now edit a product attribute for multiple configurable products. Previously, when you tried to bulk-edit an attribute on a collection of filtered, configurable products, Magento would complete the process without incorporating your edits, then incorrectly tell you that the products had been edited.

<!--- 58192-->* A price change to a custom option affects only that option. Previously, changing the price of a custom option also affected the price of related products. <a href="https://github.com/magento/magento2/issues/4588" target="_blank">(GITHUB-4588)</a>

<!--- 59950-->* Configurable product option price is displayed incorrectly per website.

<!--- 57056-->* You can now successfully disable the lowest price of a configurable product and its associated simple products. Previously, Magento displayed a configurable product's lowest price even after you disabled that price. <a href="https://github.com/magento/magento2/issues/4419" target="_blank">(GITHUB-4419)</a>


### Payment methods
{:.no_toc} 

<!--- 57099-->* You can now successfully place an order using the Payflow Pro payment method. 

<!--- 57172 -->* We've fixed an issue with how Magento captures and validates payment information. Previously, after you entered valid credit card information, Magento prompted you to re-enter the information, and threw this error: "Please  enter a valid credit card expiration date". <a href="https://github.com/magento/magento2/issues/4741" target="_blank">(GITHUB-4741)</a>



### APIs
{:.no_toc} 

* We’ve added the ability to change the status of a shipment through the web API. The new Creditmemo interface supports tasks you can already do through the Admin dashboard, including the ability to:

<!--- 61268-->	* Support returning multiple units of a configurable product. Previously, when you tried to refund an order, you could refund only one unit of a configurable product, not the amount in the original order. 

<!--- 59424 -->	* Return the product to stock 

<!--- 56433 -->	* Change order status after a credit memo has been created


* Magento now updates order status as expected on the Admin panel when you use the REST API to create a credit memo. 


<!--- 57066-->* Swagger now correctly documents how to retrieve gift message data for a sales order using the API.



### Gift cards
{:.no_toc} 

<!--- 57513-->* You can now complete the purchase of a gift card in environments where you've set the Braintree payment method Payment Action to Authorize and Capture. Previously, any order made under these conditions would remain indefinitely in the processing stage.

<!--- 57133-->* You can now save a gift message when ordering a gift while logged in as a guest. Previously, Magento would not save this information, and threw an error. <a href="https://github.com/magento/magento2/issues/3804" target="_blank">(GITHUB-3804)</a> 



### Orders
{:.no_toc} 

<!--- 57681-->* You can now reorder an item that is currently invoiced or being shipped. Previously, if you tried to reorder, Magento did not add the item to your shopping cart, and displayed an error. <a href="https://github.com/magento/magento2/issues/6278" target="_blank">(GITHUB-6278)</a>

<!--- 57715-->* User can view orders only on stores to which they've been assigned permission. Previously, an Admin user with permissions for only one store could view orders from all stores on the same website. 



### Cart and checkout
{:.no_toc} 

<!--- 61232-->* You can now reload a page during checkout without unintentionally changing shipping information. 

<!--- 61249-->* Magento no longer displays the spinning loader widget after you click the **Place Order** button. Previously, Magento displayed the spinning loader, even after you'd successfully placed an order. 

<!--- 61127-->* Magento now indicates that a product is out-of-stock if you disable it. Previously, Magento did not display the name of an out-of-stock product at all. 

<!--- 59211-->* The number of items in the minicart is now updated correctly when you run Magento in mixed HTTP/HTTPS mode. <a href="https://github.com/magento/magento2/issues/6487" target="_blank">(GITHUB-6487)</a> 

<!--- 59374-->* Refreshing your browser page while on the Review and Payments page of the checkout process no longer clears information from form fields. Previously, Magento cleared information from the Ship to field if you refreshed your browser page during this process. 

<!--- 58058-->* We've resolved an issue that prevented you from adding more than one product from the wishlist to your shopping cart. <a href="https://github.com/magento/magento2/issues/5282" target="_blank">(GITHUB-5282)</a> 

<!--- 55444-->* The Checkout page no longer freezes when you order a virtual gift card using the Authorize.net Payment Action value set to Authorize and Capture.

<!--- 56955-->* Magento now displays the product add validation message ("Product was added to the cart") only after you've successfully added a product to your cart.

<!--- 58037-->* You can now reload a page during checkout without unintentionally changing shipping information. 

<!--- 58614-->* You can now successfully reorder a product. Previously, if you tried to reorder a product, the checkout page would not load, and Magento would throw this error: "Uncaught TypeError: Cannot read property 'length' of undefined". 

<!--- 57844-->* A cart rule with a coupon code no longer overrides a cart rule without a coupon code when multiple cart rules are applied. Previously, when you created two cart rules and applied them to a cart, the rule with a coupon was applied, but the second rule was not. <a href="https://github.com/magento/magento2/issues/6294" target="_blank">(GITHUB-6294)</a> 




### Tracking and shipping
{:.no_toc} 

<!--- 56908-->* UPS now generates shipping rates for Puerto Rico postal codes.




### Images
{:.no_toc} 

<!--- 59829-->* You can now successfully import images when you set  your document root to `/pub`. Previously, you needed to set document root to `/magento` to import images. <a href="https://github.com/magento/magento2/issues/5359" target="_blank">(GITHUB-5359)</a> 

<!--- 56171-->* You can now preview uploaded images. 




### Email
{:.no_toc} 

<!--- 58243-->* Order emails now specify the amount of the gift card that you've purchased. 

<!--- 56859-->* The **Send Welcome Email From** field now accurately identifies the store that the customer is associated with. Previously, the **Attribute for Send Welcome Email From** displayed the wrong store ID.


### Static file processing
{:.no_toc}

<!--- 56895-->*  We’ve improved the speed of static asset deployment. See Deploy static view files for more information about available options.

<!--- 56076-->* Versioning of static files (including CSS, JS, fonts, and images) is now enabled by default.

<!---59547-->* Static versioning now works under nginx. 


### Scope
{:.no_toc}

<!--- 57336, 58205-->* You can now successfully assign products to a category on the storeview level. Previously, Magento threw this error when you tried to assign products to a category: "Wrong request parameters". 

<!--- 57002-->* A restricted user can now change storeview- or website- level attributes that are defined in his scope. Previously, Admin users with access to only one website could not edit a product, no matter how their scope was set. 

<!--- 57004-->* The scope selector on the Product page now accurately displays all related websites for a restricted user. 






### General fixes
{:.no_toc} 

<!--- 59503-->* Magento now creates a URL rewrite for the new URL key of a product as expected. Previously, after you saved a change to the URL key of a product by selecting the "Create Permanent Redirect for old URL" option, Magento did not rewrite the old URL to the new URL.

<!--- 61106-->* The Product page now displays swatches based on the color swatch attribute. Previously, the Product page did not display swatches. 

<!--- 57336-->* Magento no longer throws a "Wrong request parameters" error when you try to assign products to a category at the storeview level. Previously, Magento threw a levelWrong request parameters error when you assigned products to a category.

<!--- 59461-->* The Magento Framework now makes its dependencies explicit in the `composer.json` file. <a href="https://github.com/magento/magento2/issues/6442" target="_blank">(GITHUB-6442)</a>

<!--- 60608-->* We've corrected a pagination problem that Magento experienced when using the `groupBy` function. <a href="https://github.com/magento/magento2/issues/4767" target="_blank">(GITHUB-4767)</a>



<!--- 59449-->* Magento now decrements stock as expected in a multi-website environment. 

<!--- 59409-->* We've fixed an issue with the `max-message` argument setting for the consumer of the AMQP module. Previously, the consumer died after consuming only the existing messages in the queue, rather than waiting to reach the maximum messages. 

<!--- 55682-->* The catalog category now retrieves prices from the price index update as expected. 

<!--- 56001-->* The search field now works as expected on iOS devices using Safari. Previously on these devices, the search box closed randomly. 

<!--- 55664-->* We've removed the duplicate PHP settings from the sampple web server configuration files.

<!--- 58894-->* The Compare Products page now works as expected. Previously, you were erroneously redirected to another page when you removed an item from the Compare Products side bar. 



<!--- 57134-->* You can now access the Web Setup wizard from **System > Tools > Web Setup Wizard**. Previously, Magento logged you out if you tried to access the Web Setup wizard this way. 

<!--- 59398-->* Custom themes now inherit parent XML configuration information as expected. 

<!--- 57322-->* Magento no longer redirects users to the Checkout page after login. Now, if you set Redirect Customer to Account Dashboard after Logging in value to Yes, users will be redirected to the Account Dashboard page. If you set this value to No, then users will stay on the home page after login. 

<!--- 56875-->* We've eliminated difficulties saving product information when logged in as Admin. Previously, the Product Save feature worked erratically for some Admin users. 

<!--- 59102-->* Customers can now continue shopping after selecting an unavailable bundle product. Previously, if a customer selected a bundle product that was no longer available, Magento threw a fatal error. 

<!--- 57331-->* Magento now handles swatch attribute properties as expected. Previously, the storefront did not reflect changes in the swatch attributes. 

<!--- 57326-->* The Sales Order object can now contain more than one extension_attribute.  <a href="https://github.com/magento/magento2/issues/3967" target="_blank">(GITHUB-3967)</a>

<!--- 57352-->* We've removed the sample password from the Setup wizard.

<!--- 57338-->* Customers are now redirected as expected to the destination URL identified in the **Redirect to My Account After Log-in** setting. Previously, customers were redirected to the My Account page, no matter which URL you identified in this setting.

<!--- 58466-->* The order of products in a category display no longer changes when you add a new product to the category. 

<!--- 57498-->* Lengthy Order Status tables are now paginated as expected.

<!---57030 -->* We've fixed a problem with custom zip code masks in previous versions of Magento. <a href="https://github.com/magento/magento2/issues/4131" target="_blank">(GITHUB-4131)</a>

<!--- 57103-->* We've fixed an issue with how the Customer Segments report calculate the same customer on two websites. 

<!--- 57384, 39489 -->* You can now make Return Merchandise Authorization (RMA) comments visible from the storefront by setting Stores > Configuration > Sales > RMA Settings > Enable RMA on Storefront. 

<!--- 57036-->* You can now upload changes to the `robots.txt` file from the Admin panel. 















<!--- INTERNAL ONLY 59791, 59667, 59676, 59677, 59646, 61119, 55862, 60428, 60527, 60292, 58186, 57562, 59716, 58360, 58323 -->


<!--- CANNOT REPRODUCE 57169, 59312, 57503, 57332, 56002, 57100, 61181, 61218, 61803 -->


<!--- NOT A BUG 57471, 57145, 61177, 61192, 61121, 57016, 61160, 61343, 61172 -->


<!---  WON'T FIX 58853, 58798, 57105, 57802, 58083, 58900, 58611, 57311, 56916, 59370, 57510, 61242, 61339, 59414, 59408, 57330, 59411, 56958 -->

<!---  DUPLICATE 59410, 58085, 57095, 59558, 58095, 61149, 58095, 61254 -->


<!---  OMIT 58461-->




## System requirements
Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.

{% include install/releasenotes/ce_install_20.md %}


## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
