---
layout: default
group: release-notes
subgroup: 02_ReleaseNotes
title: Magento EE 2.1.0 Release Notes
menu_title: Magento EE 2.1.0 Release Notes
menu_order:
github_link: release-notes/ReleaseNotes2.1.0EE.md
---

*	TOC
{:toc}

##Magento Enterprise Edition 2.1.0
We are pleased to present Magento Enterprise Edition 2.1.0 General Availability. This release includes numerous functional fixes and enhancements.

Backward-incompatible changes are documented in [Magento 2.1 backward incompatible changes]({{ page.baseurl }}release-notes/backward-incompatible-changes-2.1.html).

###Highlights
Magento Enterprise Edition 2.1.0 includes several new and exciting features:

* **Content Staging and Preview**  improves sales and productivity by enabling merchants to bring fresh and exciting shopping experiences to market faster than ever before. Marketers and merchandisers can easily create, preview, and schedule a wide range of content updates without involving IT. They can make updates to products, categories, CMS content, promotions, and pricing, and can preview these changes by date or store view to ensure a flawless shopper experience. User-friendly dashboards provide visibility into all scheduled site changes so merchants can easily coordinate campaigns to maximize their sales impact. Updates are automatically published and removed at scheduled times for greater efficiency.


* **Elasticsearch** is cutting edge search technology that is replacing Solr in Magento Enterprise Edition 2.1. It is simpler to set up, able to handle large catalogs, and can easily scale as search volume grows. It supports 33 languages out-of-the-box and merchants can set ‘stop words’, search synonyms, and attribute weighting to deliver highly relevant search results..

* **PayPal enhancements** include PayPal in-context checkout and saved credit cards. In-context checkout helps to increase conversion rates 69 bps by allowing shoppers to pay with PayPal without leaving the merchant’s site. PayPal saved credit cards boost repeat purchases by allowing merchants to securely store credit card information with PayPal so customers do not need to re-enter it in checkout or when reordering items from the Admin interface.

* **Braintree Hosted Fields** securely collect all sensitive payment information in checkout so merchants can qualify for the simplest set of PCI compliance requirements. Merchants retain complete control over their checkout style and layout because Braintree gathers credit card data using small, transparent iframes that replace individual payment fields. Braintree settlement reports are now also conveniently available within the Magento Admin.

* **Improved management interfaces** make it faster and easier to search for information in the Admin, set up global search synonyms, and create new product, category, and CMS content.

###Security enhancements
This release includes enhancements to improve the security of your Magento application. While there are no confirmed attacks related to these issues to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your Magento software to the latest version as soon as possible.

[Contact us](https://magento.com/company/contact-us){:target="_blank"} for more information.


###Fixed issues



#### Installation and upgrade
{:.no_toc}

<!--- 51033 -->* System upgrades now ignore the contents of the Magento `var/session` directory.

<!--- 51327 -->* You don't need to have a `composer.json` to run Magento CLI commands.

<!--- 50794 -->* Addressed an issue that caused the following error on the Magento storefront when optional sample data is installed: "We're sorry, an error has occurred while generating this email".

<!--- 52981 -->*  Magento upgrade now succeeds if you use a non-default MySQL listen port.  <a href="https://github.com/magento/magento2/issues/4548" target="_blank">(GITHUB-4548)</a>, <a href="https://github.com/magento/magento2/issues/2735" target="_blank">(GITHUB-2735)</a>, <a href="https://github.com/magento/magento2/issues/4275" target="_blank">(GITHUB-4275)</a>, <a href="https://github.com/magento/magento2/issues/3529" target="_blank">(GITHUB-3529)</a>

<!--- 53232 -->*  Resolved data loss issues during upgrade to version 2.0.4. <a href="https://github.com/magento/magento2/issues/4054" target="_blank">(GITHUB-4054)</a>, <a href="https://github.com/magento/magento2/issues/3951" target="_blank">(GITHUB-3951)</a>, <a href="https://github.com/magento/magento2/issues/3097" target="_blank">(GITHUB-3097)</a>, <a href="https://github.com/magento/magento2/issues/3249" target="_blank">(GITHUB-3249)</a>


<!--- 51544 -->* Upgrading the Magento system software now correctly updates the product version.

<!--- 52981 -->* Fixed issues when upgrading to Magento 2.0.4. <a href="https://github.com/magento/magento2/issues/3951" target="_blank">(GITHUB-3951)</a>

<!--- 51693 -->* Improved performance of installations and upgrades by compressing packages on repo.magento.com

<!--- 52187 -->* A user with limited access to the Magento Admin cannot run the Web Setup Wizard.

<!--- 52973 -->* Installing optional sample data no longer throws the following exception: `efault: Notice: /Stage[magento_setup]/Magento::Setup::Magento_cli/Exec[Run Magento reindex]/returns: SQLSTATE[23000]: Integrity constraint violation: 1062`.

<!--- 45608 -->* You can now successfully uninstall the Magento_CustomerBalanceSampleData module.

<!--- 51175 -->* The Component Manager now displays component versions that are compatible with your Magento software version.

<!--- 51718 -->* You can now successfully uninstall the Magento software after an incomplete installation.

<!--- 50742, 45652, 51102, 50508, 51956  -->* Fixed issues with installing optional sample data.


<!--- 50696 -->* Fixed issues with running integration tests on Microsoft Windows.

<!--- 50848 -->* The `magento setup:di:compile` command no longer throws a `No tokens were provided` exceptions when it encounters directories or empty files. <a href="https://github.com/magento/magento2/issues/3824" target="_blank">(GITHUB-3824)</a>

<!--- 51953 -->* Manually unselecting the DownloadableStaging during installation no longer throws a fatal error.

<!--- 45105 -->*   You can now successfully install Magento using a setup URL that contains a port number. <a href="https://github.com/magento/magento2/issues/2272" target="_blank">(GITHUB-2272)</a>

<!--- 46858-->* The Magento CLI `setup:config:set` now accepts  hyphens and dashes "-".  <a href="https://github.com/magento/magento2/issues/2700" target="_blank">(GITHUB-2700)</a>

<!--- 47531-->* Running `setup:config:set` updates the deployment configuration properly. <a href="https://github.com/magento/magento2/issues/2852" target="_blank">(GITHUB-2852)</a>

<!--- 51779-->* Magento Community Edition 2.0.4 with Sample Data.tar.bz2 (204 MB) download now works. <a href="https://github.com/magento/magento2/issues/4090" target="_blank">(GITHUB-4090)</a>

<!--- 53471-->* The `MAGE_MODE` environment variable is no longer a required server config variable for NGINX configuration.




#### Shopping
{:.no_toc}

<!--- 51987-->* We've fixed the Add to Cart button translation. <a href="https://github.com/magento/magento2/issues/4181" target="_blank">(GITHUB-4181)</a>


<!--- 40616 -->*  The shopping cart for a registered user now returns a complete list of products.  

<!--- 51259 -->*  You can now create a fixed amount discount for an entire cart.

<!--- 51248 -->*  You can now generate coupon codes for Cart Price Rules.


<!--- 49449 -->*  Magento no longer performs redundant GET requests if the customer has items in shopping cart.

<!--- 49416 -->*  The Date/time fields work as expected.


<!--- 43267-->* Magento now logs exceptions in a file under `var/report` when in  default mode.

<!--- 53468 -->*  Cart now updates and lists rates for custom shipping methods as expected when you change the shipping address. <a href="https://github.com/magento/magento2/issues/4679" target="_blank"> (GITHUB-4679)</a>

<!--- 51903 -->* You can now reorder a product with a required custom option (type = file). Previously, if you tried to reorder a product under these conditions, you would encounter an error when opening the shopping cart.
<a href="https://github.com/magento/magento2/issues/4058" target="_blank"> (GITHUB-4058)</a>

<!--- 32380-->* Magento no longer logs out a customer who clicks first on the Go to Checkout link, then clicks on the Shopping Cart link.

<!--- 50913-->* Discounts now behave consistently.

<!--- 51863-->* You can now successfully save conditions in Create Cart Price Rules.

<!--- 51086-->* You can now log out while persistent shopping cart functionality is enabled.

<!--- 52452-->* Shopping cart shipping estimation no longer fails randomly.


#### API
{:.no_toc}
<!--- 50878 -->* The Oauth handshake now clearly indicates the SAAS platform with which the Magento store is doing the Oauth handshake.

<!--- 49699 -->*  You can now use the Web API to access Version Manager.

<!--- 46720 -->* The Orders API now exposes Shipping Address. <a href="https://github.com/magento/magento2/issues/2628" target="_blank">(GITHUB-2628)</a>

<!--- 52613 -->* The Credit Memo REST API now updates attributes as expected.  <a href="https://github.com/magento/magento2/issues/4329" target="_blank">(GITHUB-4329)</a>

<!--- 47451-->* The 'in' filter now works in list APIs (checked customer, product, product attributes).  <a href="https://github.com/magento/magento2/issues/2892" target="_blank">(GITHUB-2892)</a>

<!--- 51451-->* The SOAP API now works in production mode.  <a href="https://github.com/magento/magento2/issues/3944" target="_blank">(GITHUB-3944)</a>


<!--- 50192-->* Magento now displays an error message if an error occurs when you try to set payment using the REST API. Previously, Magento creates only an internal error. <a href="https://github.com/magento/magento2/issues/3600" target="_blank">(GITHUB-3600)</a>

<!--- 47504-->* USPS API includes the January 17, 2016 USPS method name changes.


<!--- 50632-->* The title of the totals discount segment returned by the API is now correct.

<!--- 49558,51009 -->* You can now use the SOAP API to add product attribute options text swatch or visual swatch.

<!--- 47850-->* Magento no longer creates customers when validation fails. <a href="https://github.com/magento/magento2/issues/2914" target="_blank">(GITHUB-2914)</a>


<!--- 47792-->* You can now successfully update product categories through the SOAP API.

<!--- 50636-->* For all the appropriate REST calls with SearchCriteria filters, validate if response for search_criteria key is NOT null.


<!--- 53152-->*  REST API GET /V1/categories calls now return all the categories you expect (all created in the product interface). <a href="https://github.com/magento/magento2/issues/4525" target="_blank">(GITHUB-4525)</a>

<!--- 53545-->* System > Integrations > Add New Integration now returns a populated  resources list.  <a href="https://github.com/magento/magento2/issues/4537" target="_blank">(GITHUB-4537)</a>

<!--- 50611-->* Web APIs no longer allow anonymous access by default. <a href="https://github.com/magento/magento2/issues/3786" target="_blank">(GITHUB-3786)</a>

<!--- 51066 -->* Magento now returns available services in WSDL schema.  Previously, you could not process SOAP requests as expected.



#### JavaScript
{:.no_toc}

<!--- 50243 -->*  Attribute values are now consistently persisted after reloading a form.

<!--- 50864-->* You can now nest categories more than four levels deep.

<!--- 49967 -->*  We've optimized `registry.js` performance.

<!--- 51040-->* You can now  add a custom option to the new Update pop-up.



#### PHP
{:.no_toc}
<!--- 53524 -->*  PHP errors no longer occur when you run a cron script on installations running PHP5.5. <a href="https://github.com/magento/magento2/issues/4722" target="_blank">(GITHUB-4722)</a>

<!--- 47677-->* Remi PHP 7.0.1 now works with Sample Data.

<!--- 48387-->* Payment/Shipping config is no longer decrypted twice in a PHP7 environment.



#### Gift cards
{:.no_toc}

<!--- 52275 -->*  Merchants can now  edit Gift Card Product.

<!--- 50488-->* Fixed issue where customers could not purchase gift cards.

<!--- 53312-->* Clicking on Submit invoice button no longer exposes the PHP error log.

<!--- 52992-->* Expiration date for Gift Card account is left unspecified if you do not specify a date.





#### Paypal
{:.no_toc}
<!--- 49148 -->*  The Paypal button now displays as expected in the minicart.

<!--- 50557-->* The PayPal Express review rendering of tax block now works correctly.  <a href="https://github.com/magento/magento2/issues/3774" target="_blank">(GITHUB-3774)</a>


<!--- 45127-->* Paypal now works correctly if the applied discount brings the subtotal to negative, but the grand total is positive.

<!--- 47544-->* The "Learn More" link for Payments Pro now works correctly.

<!--- 48469-->* The Get Credentials From Paypal and Sandbox credentials buttons are now rendered correctly.

<!--- 42103-->* Magento now clears the minicart as expected after you complete  an order using Paypal.


<!--- 51014-->* Magento now displays the relevant error message when Express Checkout fraud filters are triggered.

<!--- 50910-->* Magento no longer disables the Continue button when you  submit an order with PayPal Payments Advanced.

<!--- 51789-->* Magento now successfully generates the Paypal Settlement report.

<!--- 51481-->* Magento now updates Shipping method  on the PayPal Order Review page.

<!--- 51099-->* The PayPal Settlement report now works correctly.


<!--- 50054-->* Magento now requires the Merchant Account ID field  in Paypal configuration.

<!--- 50024-->* Magento still displays products  in the mini shopping cart after guest checkout with PayPal Express.

<!--- 53403-->* Fixed issue with the terms and conditions agreement causes fatal error during checkout with PayPal Payments Pro method.  

<!--- 53211-->* Fixed issue with incorrect transaction totals in PayPal Settlement report.

<!--- 53714-->* Fixed issue with BNCODE in PayPal solutions.

<!--- 53238-->* In the Vault Provider field, Magento no longer displays the Payflow Pro option for countries that don't offer it.  



#### Braintree
{:.no_toc}
<!--- 48649-->* You can now change the quantity for an invoice.

<!--- 50309-->* You can now  create invoice of transaction with expired authorization.

<!--- 52359-->* You can now place an order through online payments in the Admin area.

<!--- 52560-->* You can now use stored cards on the Admin side.  

<!--- 53237-->* You can now apply Gift Card Account/Discount Code on the review page.


<!--- 53240-->* You can now check out  virtual product using Braintree.

<!--- 53798-->* The Braintree Paypal button is no longer active until checkout.


<!--- 53032-->* The PayPal Braintree popup now appears as expected when you click the Continue to PayPal button.

<!--- 52420-->* In the Vault Provider field, Magento no longer displays the Payflow Pro option for countries that don't offer it.

<!--- 54233-->* Magento no longer displays this error when you save an order:
"Order Saving error: Table 'magento.vault_payment_token_order_payment_link' doesn't exist."

<!--- 54293-->* You can now place an order from  within Braintree if 3d secure enabled.




#### Integration
{:.no_toc}

<!--- 50857 -->*  You can now select API resources while creating an integration.

<!--- 51642 -->* After you install and enable a module, the System > Extensions > Integrations page lists the new integration generated by the module. <a href="https://github.com/magento/magento2/issues/4023" target="_blank"> (GITHUB-4023)</a>

<!--- 46021-->* We've edited the `integration/acl.xml` file.  	
<!--- 46019-->* Magento now creates an integration  after adding the `integration/config.xml` file.


<!--- 47301-->* Fixed issue with PHP 7.0 Integration test.


<!--- 51112-->* Magento no longer deletes Access Token and Access Token Secret from all integrations when you delete it from only one integration. <a href="https://github.com/magento/magento2/issues/3450" target="_blank">(GITHUB-3450)</a>

<!--- 54231-->* You can now delete an Admin user that has the same ID as an integration user, without breaking the integration.



#### Testing
{:.no_toc}

<!--- 52414 -->* We've fixed several integration test syntax errors. <a href="https://github.com/magento/magento2/issues/4343" target="_blank">(GITHUB-4343)</a>

<!--- 50987 -->* You can now run all integration tests in developer mode.


<!--- 51715 -->*  CategoryTest integration test no longer fails on Travis builds. <a href="https://github.com/magento/magento2/issues/4099"
target="_blank">(GITHUB-4099)</a>


#### Import/Export
{:.no_toc}
<!--- 47555-->* The Import error message you receive when an attribute exceeds maximum permitted length now inserts variable that defines the attribute name. <a href="https://github.com/magento/magento2/issues/2844" target="_blank">(GITHUB-2844)</a>

<!--- 46245-->* Magento no longer throws this error when you import or export when you have multiple websites and stores:  "URL key for specified store already exists."


<!--- 47001-->* Magento no longer lets you  import two products with the same URL key.

<!--- 50973-->* Magento no longer throws a general exception when you try to import more than 100,000 products.

<!--- 50899 -->*  You can now export products to a CSV file, edit names, then import products successfully.


<!--- 47877 -->*   Import process speed has been improved. <a href="https://github.com/magento/magento2/issues/2957" target="_blank">(GITHUB-2957)</a>

<!--- 52831-->* You can now re-import data. <a href="https://github.com/magento/magento2/issues/4315" target="_blank">(GITHUB-4315)</a>  


<!--- 52037-->* Magento changes the order in which products are displayed  after you export or import catalog.

<!--- 49676-->* You can now import cross-sells, up-sells and related products. <a href="https://github.com/magento/magento2/issues/3286" target="_blank">(GITHUB-3286)</a>

<!--- 53781-->* The Ajax loader now stops if you use an incorrect file type during import.

<!--- 50817 -->*  The `console` command now flushes caches without error. Cache should be cleaned\flushed without errors





#### Search
{:.no_toc}
<!--- 50915 -->* Solr search no longer produces a fatal error when you use it to perform an advanced search on products by Size.

<!--- 50701 -->* Solr search results now display all products as expected in search results.

<!--- 50554 -->*  Magento no longer displays processing errors when you use the Advanced Search feature of Elasticsearch.

<!--- 51716-->* We've improved search performance.  

<!--- 51538-->* Search phrases that incorporate spaces now work successfully in Solr advanced search.


<!--- 52482-->* Magento no longer throws a fatal error if you use fewer than the minimal required characters in your search query.

<!--- 53263-->* Search input on themes using the Blank theme now works as expected.
 <a href="https://github.com/magento/magento2/issues/4282" target="_blank"> (GITHUB-4282)</a>


<!--- 53530-->* Performance of category pages significantly degrade when having around 3000 products or more in category.  

<!--- 53336-->* The advanced search function of Elasticsearch is more robust.

<!--- 52975-->* Both Solr and Elasticsearch now display correct date formatting.



#### Cloud
{:.no_toc}
<!--- 52448 -->* Magento now correctly displays customer addresses.  

<!--- 51072 -->* The storeview now reflects changes to the swatch attribute's property.  




#### Checkout
{:.no_toc}
<!--- 53193 -->* We've resolved several address-related issues associated with Checkout.


<!--- 53217 -->* Customers with an existing saved address can now add a new address during checkout.

<!--- 53464 -->* Clicking the Reorder button now loads products as expected when persistent shopping cart is enabled.

<!--- 53049 -->* The Go to Checkout button now works as expected. Previously, when you clicked the Go to Checkout button, Magento would display a login pop-up window.

<!--- 53307 -->* Checkout now works as expected when purchasing products during a persisted session.

<!--- 53940-->* Fixed problem with unnecessary redirects to checkout page after Sign-in.

<!--- 46891-->* Magento now provides information about the  country you've selected in the address in the  checkout flow.

<!--- 50912-->* Magento now saves custom customer attributes at checkout.

<!--- 51120-->* Fixed issue with JaveScript error during checkout when switch between addresses that either contain or don't contain Region data.

<!--- 50745-->* Loader now disappears as expected after you click  the Place Order button.

<!--- 52262-->* Fixed error on checkout page when you changed base currency at checkout.

<!--- 50830 -->*  Fixed problem with opening My Cart page in one-page checkout.




#### Bundle products
{:.no_toc}

<!--- 51194 -->* The Add Products to Option button now works as expected when you create a new update for a Bundle product.

<!--- 52832 -->* You can now include quotation marks in Bundle product names. <a href="https://github.com/magento/magento2/issues/4414" target="_blank"> (GITHUB-4414)</a>

<!--- 50652-->* Magento no longer displays an invalid date error message when you create a Bundle Product update.

<!--- 47379-->* You can now successfully move Bundle products to the Wishlist. <a href="https://github.com/magento/magento2/issues/2717" target="_blank">(GITHUB-2717)</a>


<!--- 45173-->* Bundle products created using Web API are now visible on the storefront.

<!--- 46695-->* Magento now saves the price for Bundle option items.

<!--- 51134-->* Magento no longer duplicates options for bundle products when you save the product.

<!--- 51255-->* You can now save duplicate Bundle products.

<!--- 50831-->* You can now specify Bundle option title on the storeview level.

<!--- 50826-->* You can now add a Bundle product to the shopping cart.

<!--- 52017-->* Magento now displays Bundle product prices in the shopping cart product grid.

<!--- 49484-->* Magento now correctly displays `sku_type`, `weight_type`, `shipment_type` after you save a Bundle product.


<!--- 51925 -->* The Edit Bundle product page now works as expected.

<!--- 49546 -->*  Magento now successfully validates the price_type field during import and export.

#### Messages and documentation
{:.no_toc}

<!--- 52340 -->* The `getList` method documentation has been enhanced.

<!--- 52000 -->* Error messages associated with `cron` processes are now more helpful. <a href="https://github.com/magento/magento2/issues/3189" target="_blank"> (GITHUB-3189)</a>

<!--- 50898 -->* Magento now displays an appropriate  message when you add less than the required minimum items in your cart.

<!--- 51378 -->* Message serialization now complies with AMQP specifications.

<!--- 48175 -->* We've improved the error message that users typically received during upgrade. The message now clearly states when a user must login first to `magento.com` before continuing the upgrade process. <a href="https://github.com/magento/magento2/issues/3059" target="_blank">(GITHUB-3059)</a>

<!--- 51371, 51580-->* Error messages generated during installation are now more informative.  


<!--- 51641-->* Documentation now states that the iconv extension is required in installations running PHP 7.x. <a href="https://github.com/magento/magento2/issues/4002" target="_blank">(GITHUB-4002)</a>

<!--- 46415-->* CLI documentation now includes `magento dev:css` command. <a href="https://github.com/magento/magento2/issues/433" target="_blank">(GITHUB-433)</a>







#### Testing
{:.no_toc}

<!--- 52414 -->* We've fixed some integration test syntax errors. <a href="https://github.com/magento/magento2/issues/4343" target="_blank">(GITHUB-4343)</a>

<!--- 50987 -->* You can now run all integration tests in developer mode.


<!--- 51715 -->*  CategoryTest integration test no longer fails on Travis builds. <a href="https://github.com/magento/magento2/issues/4099"
target="_blank">(GITHUB-4099)</a>




#### Staging
{:.no_toc}

<!--- 53536 -->* You can now successfully change an entity's Schedule Update End Time from none to a particular time. Previously, attempting to change an End Time from none to a specific time would result in an error. (Sample message: "Update (or link, if we are using downloadable product) does not exists".)


<!--- 53025 -->* You can now edit the Schedule Update of a CMS page as expected. Previously, Magento would duplicate the page when you would click on the CMS Page Schedule Update button after editing it.


<!--- 53220 -->* You can now successfully add an end date to an existing permanent update.

<!--- 51280 -->* Magento no longer duplicates a campaign each time you edit it. Previously, Magento would duplicate a campaign record whenever you selected it from its existing Scheduled Update.

<!--- 51443 -->* Product update is now applied as expected in Catalog Staging.

<!--- 51252 -->* You can now successfully save an update that was created for a category with a changed name.


<!--- 51278 -->* Magento no longer creates a new single update when you edit an existing update.

<!--- 52963 -->* You can now create and successfully save a future update for a downloadable product associated with links and file content.  

<!--- 51449 -->*  Update Staging product offline status now works.


<!--- 51516 -->*  The Staging preview calendar tabs display only valid captions.


<!--- 51637 -->*  Previews of different product updates can now display different prices.


<!--- 51155 -->* You can now edit the update information for a product that belongs to a Staging campaign.

<!--- 51150 -->*  The Edit existing update now works as expected.

<!--- 50591 -->*  You can now create both permanent and temporary updates for one date or time.


<!--- 50476 -->*  Magento no longer deletes a product from a quote after you delete a product update.

<!--- 52159 -->*  You can now open Catalogs for which you've applied multiple updates.  


<!--- 49574 -->*  Magento now displays an error message when you try to 'Save as a new update' using an end date that precedes the start date.

<!--- 48912 -->*  The Scheduled Changes grid now correctly sorts by date.

<!--- 49314 -->*  Magento date pickers now take into account Magento timezone settings.  

<!--- 49973 -->*  Update Preview for a simple product now works.

<!--- 51093 -->*  Magento now displays the "Is Active" flag for the Catalog rule when Staging is enabled.

<!--- 48687 -->*  Magento now loads a campaign's preview when the Use Secure URLs setting is set to yes.

<!--- 51293-->* The Schedule Update form no longer disappears when you double-click the Schedule New Update button.


<!--- 51215-->* Magento instances installed on a custom port now provide the Future Update Preview feature.

<!--- 51205-->* You can now save a new Update for a product that already has an update.


<!--- 51203-->* The Staging Preview Control panel now displays the Share link button.


<!--- 51474-->* Magento now applies catalog temporary updates to a storefront when a flat indexer is enabled.


<!--- 51171-->* Magento now applies a custom design update to products on preview.


<!--- 51615-->* You can now disable the 'Set product as new' setting after you've applied an update.

<!--- 51613-->* Data format for campaign start and end times are now presented in OS data format.

<!--- 51638-->* Magento no longer displays the wrong entity names on the popup that appears on the Staging timeline.


<!--- 51823-->* You must provide a valid ID to open the Staging form edit page.

<!--- 51812-->* Magento now uses the default time zone in the Schedule Update grid.


<!--- 51167-->* The Scheduled Changes section of a product update now displays dates.


<!--- 51153-->* Magento no longer removes all grouped products when you select a subset of products for removal.


<!--- 51557-->* You can now select an update that has already been applied to a product.

<!--- 50245-->* You no longer can insert a permanent update into a temporary one.  

<!--- 50692-->* When you update category settings, Magento no longer modifies Update settings, too.  


<!--- 50860-->* The Preview feature now works correctly on different domains.

<!--- 50856-->* You can now change an active campaign.

<!--- 50804-->* We've redesigned the Staging Dashboard Admin page.


<!--- 50511-->* You no longer lose your edits to a Staging campaign if validation fails.

<!--- 50629-->* Product links are no longer lost when you save an update.

<!--- 52693-->* The campaign reschedule feature now works correctly.


<!--- 51924-->* Magento now saves your Sales Rule edits.

<!--- 52230-->* Magento now displays products that were enabled in an update that was applied when indexers performed a scheduled update.


<!--- 52163-->* Magento no longer unexpectedly adds a new product or category to an existing update after you've created the entity.


<!--- 52148-->* Magento no longer deletes a campaign  after you change its start date.

<!--- 52106-->* Edit product update feature now works as expected.


<!--- 52105-->* The Edit category update feature now works as expected.

<!--- 52104-->* You can now remove an entity update.

<!--- 52057-->* Magento now displays attributes when you choose another attribute set in Staging Update.

<!--- 52576-->* The Catalog Price Rule now works as expected.

<!--- 52534-->* You can now update the date field in the Edit CMS page.  


<!--- 49511-->* The products Staging feature no longer changes schema and FKs for tables in modules that are disabled.


<!--- 49506-->* Magento correctly displays products after you've enabled the CatalogStaging module.

<!--- 49340-->* The Remove from Update feature now presents a list of operations that you can remove.  

<!--- 51305-->* Magento now creates Catalog Rule campaigns after you enable the Create Catalog Rule module.


<!--- 53305-->* Cross-Sells data is now displayed as expected in the shopping cart when you apply an update.  


<!--- 53044-->* Fixed issues with validation of dates for a new product update.

<!--- 53064-->* Magento no longer deletes a product when you change its campaign dates through the Staging dashboard.

<!--- 52587-->* Preview now works if the Use SID on Storefront setting is set to off.

<!--- 52486-->* You can now order Staging previews.

<!--- 53861-->* An entity update now remains visible after you update it with  dates that overlap. Now, both updates exist with dates that were set to intersect.


<!--- 53528-->* Staging now triggers application events as expected before version is applied.


<!--- 50468-->* Filtering the products grid  by Category ID now works as expected.  


<!--- 51121 --> *  Fixed issue where the Select from Existing Scheduled Update option resulted in an SQL error.

<!--- 51402-->* Fixed JavaScript errors that were occurring when you clicked Schedule New Update on the Product Edit page.  




#### Miscellaneous
{:.no_toc}

<!--- 53919 -->*  We changed the HTML header used for SSL offloading from SSL-OFFLOADED{:target="_blank"} to X-Forwarded-Proto: https{:target="_blank"} to be compatible with Varnish and for compatibility with load balancers.

To view this setting in the Magento Admin, click **Stores** > Settings > **Configuration** > GENERAL > **Web**. In the right pane, expand **Base URLs (Secure)**, value of the **Offloader header** field.

<div class="bs-callout bs-callout-info" id="info">
    <span class="glyphicon-class">
    <p>If you change the value of this field, you must regenerate your <code>.vcl</code> files.</p></span>
</div>

<!--- 51008 -->*  Magento now successfully migrates data when Google Analytics's "Content Experiments" is enabled.

<!--- 47082-->* Category creation from product page no longer fails when Google Content Experiments is enabled.

<!--- 51069-->* Page View Optimization tab is absent on edit CMS Page.

<!--- 49774-->* You no longer get a "Wrong request parameters" error when you try to assign products to a category on the store view level.

<!--- 47915-->* If you enable Google's content experiments in the Magento Admin, you can create categories as expected.

<!--- 48089-->* Undeclared dynamic property gets leaked in public space<a href="https://github.com/magento/magento2/issues/2103" target="_blank">(GITHUB-2103)</a>


<!--- 50492 -->* You can now access the Web setup wizard from the Admin interface.

<!--- 50377 -->* Magento now updates Attribute set after reloading a form.

<!--- 50141 -->* You can now update category settings.

<!--- 50630 -->*  You can now open the Admin Menu when JS minification is enabled.


<!--- 52650 -->*  We've corrected plugin sort order.


<!--- 52170 -->*  You can now create Downloadable products.


<!--- 52371 -->*  Magento no longer exposes Marketplace credentials via URL.




<!--- 49939 -->*  You can now assign a CMS page to multiple storeviews.



<!--- 49001 -->*  The Search Engine Optimization fieldset no longer displays Category url_key.


<!--- 49154 -->*  You can now successfully create a new update on 'custom store view'.


<!--- 48588 -->*  You can now add a new row to a Custom Option of Input Type when editing a simple product.


<!--- 48507 -->*  Magento can now complete reindexing when the product flat indexer is turned on.


<!--- 48714 -->*  You can now add form elements via layout and use the htmlContent component.



<!--- 48790 -->*  The performance of reindexing operations after import many products has been improved.

<!--- 48781 -->*  The performance of loading directories that contain products that include Swatches has been improved.



<!--- 48218 -->*  You can now create permanent or temporary URL rewrites.  <a href="https://github.com/magento/magento2/issues/2929" target="_blank">(GITHUB-2929)</a>


<!--- 48153 -->*  You can now save a product that's been assigned to more than one website.






<!--- 53807 -->*  You can now save Text Swatch "Swatch" values.

<!--- 53126 -->*  Multi-site cache now shows the correct site's content. <a href="https://github.com/magento/magento2/issues/4556" target="_blank">(GITHUB-4556)</a>


<!--- 52961 -->* URL Rewrites now work correctly with multiple store views.

<!--- 53678 -->* The Download link in the order confirmation email now works correctly.
 <a href="https://github.com/magento/magento2/issues/4762" target="_blank">(GITHUB-4762)</a>


<!--- 54228 -->* Varnish cache is no longer disabled on most HTML requests.

<!--- 54214 -->* You can now place orders using the Payflow Pro payment method.

<!--- 54182 -->* You can now place an order for an item for an amount that exceeds half of item's stock.  



<!--- 52612 -->* CLI is affected by the permissions configuration setting in server config.

<!--- 53342 -->* Magento no longer duplicates URL keys during the creation of a configurable product.





<!--- 51592 -->* Single tenant compiler now works when Magento is not installed.

<!--- 51834 -->* Maestro credit cards can now pass validation on the application server side.

<!--- 50507 -->* You can now successfully rest the Product Attributes mass update Admin form.

<!--- 52284 -->* You can now insert more than two images using the WYSIWYG editor. <a href="https://github.com/magento/magento2/issues/4221" target="_blank">(GITHUB-4221)</a>

<!--- 52436 -->* Magento now displays categories that contain children categories. <a href="https://github.com/magento/magento2/issues/2121" target="_blank">(GITHUB-2121)</a>

<!--- 49877 -->* Don't omit the "callable" argument type hint. <a href="https://github.com/magento/magento2/issues/2026" target="_blank">(GITHUB-2026)</a>

<!--- 47999 -->* Magento now registers added themes during production mode. <a href="https://github.com/magento/magento2/issues/2797" target="_blank">(GITHUB-2797)</a>

<!--- 50716 -->* The Admin Action Log archive is now formatted as expected.


<!--- 50193 -->* Layered Navigation now contains previously missing category filters.

<!--- 50522 -->* The WYSIWYG editor no longer removes HTML5 tags.


<!--- 54092 -->* We now include `.gitignore` as part of the project package. <a href="https://github.com/magento/magento2/issues/4358" target="_blank">(GITHUB-4358)</a>


<!--- 46022 -->*  The PHP code migration tool no longer fails with this error:  "Call to a member function xpath() on a non-object".

<!--- 46807 -->*  You can now add new Content CMS New Blocks.



<!--- 47054 -->*  Deployed static view files no longer contain references to BaseURL.


<!--- 51030 -->*  Magento now generates data in production mode.

<!--- 50905 -->*  Fatal errors no longer occur when you save configuration from the  Admin panel.

<!--- 51717 -->*  Magento now displays an error stating that user is prohibited from disabling the only default store view when you try to disable the default storeview for a store.

<!--- 51136 -->*  You can now change Video Role and Image Role.


<!--- 51113 -->*  Magento now displays a checkbox during the  create user role ACL if minification is set to on.

<!--- 51080 -->*  You can now update an existing variation of a configurable product.






<!--- 45339 -->*  Magento now applies the Cart price rule for payment method conditions.






<!--- 51068 -->* Admin User sessions no longer expire prematurely in installations that are running Redis for session storage. Previously, you were directed back to the login page after logging in to the Admin panel, waiting a short period time (less than the Admin Session Lifetime value), and trying to navigate to the Dashboard.


<!--- 51440 -->* Fatal errors no longer occur when running CLI commands after compilation in some regression environments.

<!--- 51407 -->* You can now save a product after applying an update for it.


<!--- 50768 -->* Newly created categories now appear as expected on the Navigation menu.


<!--- 53829 -->* Magento no longer references empty targets in other targets.




<!--- 51238 -->* Category pages now display swatches of configurable products based on color swatch attribute.


<!--- 51231 -->* Magento now successfully saves future special dates in the Advanced Price page.


<!--- 51751 -->* You can now filter entries in the Product Reviews report by date. (51751)

<!--- 51731 -->* Catalog Price Rules are now applied as expected, depending upon the time frame  stated in the Price Rule.



<!--- 51519 -->* The permissions set for a category are now applied as expected.





<!--- 51596 -->* Phrases with escaped slash characters are now translated. Previously, if a phrase were wrapped with single quotes, Magento would not display it correctly.


<!--- 52030 -->* Downloadable products are no longer shown as out of stock on the Category page.


<!--- 52117 -->* Changes to Customer group are now immediately applied to logged-in customers.


<!--- 52078 -->*  You can now successfully save products with custom options.


<!--- 51181 -->*  You can now configure a product whose last attribute has a price of zero, and the correct total price results. <a href="https://github.com/magento/magento2/issues/3912" target="_blank"> (GITHUB-3912)</a>


<!--- 50257 -->*  Optional dropdown product attributes can now be left blank.




<!--- 53131 -->* You can now view configurable products when using sample data.

<!--- 51611 -->* Layered navigation now includes a list of all product attributes.


<!--- 53397 -->* The `collectRates()` method now obtains the full address details for a registered customer.

<!--- 53463 -->* The Customer Address tab is populated as expected after you create a new order. Previously, Magento did not list addresses on this tab when you'd create a new order.


<!--- 52959 -->* Logo folders have been added to the list of allowed resources. <a href="https://github.com/magento/magento2/issues/4078" target="_blank"> (GITHUB-4078)</a>

<!--- 53119 -->* The Force Sign-in button now works as expected.

<!--- 53019 -->* Magento no longer makes unexpected calls when you view a product in the storefront.




<!--- 53362 -->* Gift Message information is now present as expected in the `extension_attributes` when you request this list by Web API.  Previously, if you placed an order with a Gift Message, and then performed a Web API request to get the list of orders, Gift Message information would be absent in the `extension_attributes`. <a href="https://github.com/magento/magento2/issues/4039" target="_blank"> (GITHUB-4309)</a>


<!--- 52782 -->* The `getPassword()` and `getPasswordConfirm()` methods now return the `password` and `passwordconfirm` parameters as strings. <a href="https://github.com/magento/magento2/issues/4355" target="_blank"> (GITHUB-4355)</a>









<!--- 51292 -->* The OAuth Token exchange expiration period is now calculated correctly. <a href="https://github.com/magento/magento2/issues/3449" target="_blank">(GITHUB-3449)</a>



<!--- 52607 -->*  We've enhanced Varnish caching performance. <a href="https://github.com/magento/magento2/issues/3926" target="_blank">(GITHUB-3926)</a>

<!--- 52316 -->*  Product update operations by either customers or store administrators no longer result in locking queries on catalog category product index. <a href="https://github.com/magento/magento2/issues/4342" target="_blank">(GITHUB-4342)</a>

<!--- 52079 -->* The Order Repository GetList method no longer returns the same shipping address for all orders. <a href="https://github.com/magento/magento2/issues/4019" target="_blank">(GITHUB-4019)</a>


<!--- 47440 -->*  Magento now displays the correct product prices on the Configurable product page when catalog prices include tax. <a href="https://github.com/magento/magento2/issues/2471" target="_blank">(GITHUB-2471)</a>

<!--- 47439 -->* The `i18n:collect-phrases -m` command now works correctly. Previously, this command would not find all important Magento phrases. <a href="https://github.com/magento/magento2/issues/2630" target="_blank">(GITHUB-2630)</a>

<!--- 47009 -->*  Plugins/interceptors now work with early stage single instance objects in Developer mode. <a href="https://github.com/magento/magento2/issues/2674" target="_blank">(GITHUB-2674)</a>

<!--- 46808 -->* Admin order creation no longer fails when the "Include Tax In Order Total" option is set to yes. <a href="https://github.com/magento/magento2/issues/2675" target="_blank">(GITHUB-2675)</a>

<!--- 47639 -->* The `setup:di:compile` script now compiles all files as expected. <a href="https://github.com/magento/magento2/issues/2888" target="_blank">(GITHUB-2888)</a>

<!--- 46044 -->* Synonyms now work as expected with Magento 2.x.  <a href="https://github.com/magento/magento2/issues/2519" target="_blank">(GITHUB-2519)</a>

<!--- 40320 -->* Attribute 'setup_version' is missing for module error when defined as optional. <a href="https://github.com/magento/magento2/issues/1493" target="_blank">(GITHUB-1493)</a>


<!--- 53865-->* The CC model now assigns cc data that is passed in the `additional_data` field.  <a href="https://github.com/magento/magento2/issues/4741" target="_blank">(GITHUB-4741)</a>

<!--- 51803-->* The Select All check box on the Cache Management page now works as expected. <a href="https://github.com/magento/magento2/issues/4080" target="_blank">(GITHUB-4080)</a>, <a href="https://github.com/magento/magento2/issues/3580" target="_blank">(GITHUB-3580)</a>



<!--- 41378-->* The locale for Chinese translation now works as expected. <a href="https://github.com/magento/magento2/issues/1547" target="_blank">(GITHUB-1547)</a>




<!--- 41377-->* Products > Catalog "Change status" mass action now works properly. <a href="https://github.com/magento/magento2/issues/1559" target="_blank">(GITHUB-1559)</a>


<!--- 46924-->* Magento now converts shipping_discount_amount to different currencies as needed. <a href="https://github.com/magento/magento2/issues/2708" target="_blank">(GITHUB-2708)</a>

<!--- 45019-->* You can now translate the phrases "records found" and "selected" that appear in the Admin panel.  <a href="https://github.com/magento/magento2/issues/2155" target="_blank">(GITHUB-2155)</a>




<!--- 47255-->* Magento now displays information in the dashboard when the Use Aggregated Data setting is turned on. <a href="https://github.com/magento/magento2/issues/3459" target="_blank">(GITHUB-3459)</a>








<!--- 52780-->*  Magento now checks for all return values used by the webservicex.net currency converter.  <a href="https://github.com/magento/magento2/issues/3118" target="_blank">(GITHUB-3118)</a>

<!--- 52621-->*  Magento now parallelizes the cron setting `use_separate_process`.
<a href="https://github.com/magento/magento2/issues/4435" target="_blank">(GITHUB-4435)</a>


<!--- 52590-->*  You can now set the datepicker time format  to 24 hour notation.  <a href="https://github.com/magento/magento2/issues/3856" target="_blank">(GITHUB-3856)</a> <a href="https://github.com/magento/magento2/issues/4243" target="_blank">(GITHUB-4243)</a>


<!--- 49805-->*  The creditmemo form no longer assumes that shipping amount excludes VAT when both catalog prices and shipping prices are set to 'including tax'.
 <a href="https://github.com/magento/magento2/issues/3406" target="_blank">(GITHUB-3406)</a>


<!--- 49957-->*  RequireJS now uses the correct baseUrl in pre-generated assets when `pub` is web-root.  <a href="https://github.com/magento/magento2/issues/2711" target="_blank">(GITHUB-2711)</a>

<!--- 48425-->* The allowed countries list for customer address in the Admin interface now uses all of the allowed countries set for the default store.  <a href="https://github.com/magento/magento2/issues/2946" target="_blank">(GITHUB-2946)</a>

<!--- 48393-->*  You no longer receive the "Undefined index: configurable_attribute" error message when you add a configurable product. <a href="https://github.com/magento/magento2/issues/3053" target="_blank">(GITHUB-3053)</a>


<!--- 48333-->* You can now create URLs that are shorter than three characters.  <a href="https://github.com/magento/magento2/issues/2910" target="_blank">(GITHUB-2910)</a>


<!--- 50026-->* Magento correctly type casts SalesInvoiceRepository attributes.
<a href="https://github.com/magento/magento2/issues/3605" target="_blank">(GITHUB-3605)</a>

<!--- 52919-->*  You can now resend order emails from the Admin interface when using Async mail. <a href="https://github.com/magento/magento2/issues/4507" target="_blank">(GITHUB-4507)</a>

<!--- 53410-->*  `system.log` behavior has changed to reduce the number of distracting logged broken references. <a href="https://github.com/magento/magento2/issues/3507" target="_blank">(GITHUB-3507)</a>

<!--- 53547-->*  Magento now paginates the product selection grid for reviews. <a href="https://github.com/magento/magento2/issues/4434" target="_blank">(GITHUB-4434)</a>

<!--- 54108-->*   Enabling inline translations no longer breaks order emails. <a href="https://github.com/magento/magento2/issues/4917" target="_blank">(GITHUB-4917)</a>



<!--- 42439-->* UI form components now support customer custom attributes of 'file' type.




<!--- 44598-->* Magento now identifies email validation errors after  you finish typing the email address.




<!--- 45318-->* Fixed issues with the  New Accounts Report.


<!--- 45723-->* Magento no longer calls plugin methods multiple times when a proxy exists for subject class.



<!--- 46145-->* Magento now applies a discount  only for the correct attribute.

<!--- 44789-->* Fixed issue with wrong AMQP connection alias creating message failures.


<!--- 45215-->* Magento no longer throws an unmasked fatal error when you supply an invalid product ID.  


<!--- 43336-->* Catalog Price Rules now work when based on configurable attributes.


<!--- 42982-->* fixed issue with Magento populating 'var/cache' and 'var/page_cache'  after cache configuration.



<!--- 46431-->* Form: Validation is disabled when you disable a field.





<!--- 46395-->* Fixed issue with performance of customer form creation for many customers.


<!--- 47528-->* Fixed issue with theCode  Migration tool's handling of password hashes.  



<!--- 47591-->* Fixed issue with rendering of  the "Remember Me" pop-up.



<!--- 45953-->* We edited the error message that Magento displays when you upload a custom option file to avoid displaying internal code structure.

<!--- 45882-->* "Custom option" prices are now present in Configurable product order calculations.



<!--- 46016-->* Unauthenticated users can no longer delete product reviews from a store.



<!--- 46010-->* Message structure is now enforced on encoder.

<!--- 46009-->* Magento now updates topology is not updated after module installation.


<!--- 46008-->* Magento now rejects messages if an exception happened on business logic.



<!--- 46004-->* Fixed issue with area code not being set for the consumer command.



<!--- 46663-->* Category fields now contain the Use Default Value option in Store and StoreView scope.





<!--- 46815, 46814 -->* Improved performance of the checkbox and removed duplicate labels.


<!--- 46295-->* You can now set `HtmlTag` to `nav`.  <a href="https://github.com/magento/magento2/issues/2549" target="_blank">(GITHUB-2549)</a>

<!--- 47377-->* Unnecessary StoreCookie plugins are no longer executed on each request.

<!--- 47375-->* Unnecessary MessageBox plugin no longer duplicate message logic.


<!--- 47321-->* MessageBox plugin is no longer triggered by frontend requests.



<!--- 47267-->* URL Rewrites now work for products that you access through the category landing pages.

<!--- 47844-->* Magento now displays  customer attribute options on the Attribute Edit page.



<!--- 47064-->* Fixed issue with JaveScript errors when loading the product grid after cleaning the cache and static files.

<!--- 51074-->* Product images now switch as expected when  you click on a swatch.


<!--- 51061, 51059 -->* Varnish now properly invalidates or refreshes the both Catalog Event change in the Product page abd Advance Inventory changes.  


<!--- 51053-->* Quote are no longer lost after you  cancel an order with the Worldpay payment method.




<!--- 51034-->* You can now create a simple product with custom options.

<!--- 50988-->* The 'Create an Account' form now opens as expected after checkout has been completed for a cutomer who is not logged in.



<!--- 50969-->* Fixed issue with incorrect or missing scope labels on the Product Creation/Editing page.



<!--- 50946-->* You can now configure multiple websites using NGINX.

<!--- 50937-->* Magento now displays the prices for Grouped Products in the storefront.



<!--- 51314-->* You can now successfully  sort products by swatch attribute.

<!--- 51299-->* You can now create an order from the Admin interface while using non-default website.


<!--- 51276-->* Magento now displays product attributes for a product on the store front as expected.


<!--- 51191-->* Fixed issue with resetting password  after waiting an hour.

<!--- 51186-->* Magento now provides an additional field in theAdmin and customer login forms that prevent web browsers from cacheing login credentials.


<!--- 51185-->* Magento now loads product image from product page when minification is enabled.


<!--- 51413-->* Remove usages of DummyAttributeLoader.

<!--- 51404-->* Fixed issue with changing product images.


<!--- 51363-->*  A configurable product image's JSON `isMain` attribute is no longer always set to falseA


<!--- 51352-->* Magento no longer throws an exception when an admin user requests a password reset password while working on a site that does not support email (for example, Vagrant).



<!--- 51791-->* Fixed issue with Sales Order extension_attributes.<a href="https://github.com/magento/magento2/issues/3967" target="_blank">(GITHUB-3967)</a>


<!--- 51719-->* Fixed issue with clearing the End Date.


<!--- 51518-->* Fixed incorrect translation function usage in template.



<!--- 51586-->* Fixed issues with Category page caching for different users on one web client.





<!--- 51847-->* Magento no longer displays a 400 Bad request error when clearing Varnish cache on GoDaddy.  


<!--- 51104-->* Fixed issue with displaying special prices on the catalog or product page for the configurable products.



<!--- 51096-->* Corrected an issue where Magento applied the wrong discount for orders when Apply to Shipping Amount is set to YES.



<!--- 51892-->* Fixed issue with incorrect default rows value for Dynamic Rows pagination.

<!--- 51889-->* Magento now displays an error message (instead of throwing an exception) on the Catalog product edit page with an invalid param ID.

<!--- 51881-->* Magento now correctly displays  Catalog Events Carousel widgets.  



<!--- 51549-->* Fixed issue with selecting correct number of filtered rows on Related Products.



<!--- 51541-->* Changing configurations in an update no longer changes the original configurations.

<!--- 50313-->* Magento no longer throws a fatal error  when you click on the related banner grid in Cart Price Rule form while in production mode.


<!--- 50248-->* Customer grid indexer performance has been enhanced.


<!--- 50772-->* Rule-based free shipping now works as expected.

<!--- 50761-->* You can now assign a product to a custom website.


<!--- 50752-->* We've enhanced the performance of the Sync button.


<!--- 50743-->* Fixed issue with CMS Pages being corrupted during mass actions.  

<!--- 50733-->* Removing all rows from a CMS grid no longer results in an error message.  	.
<!--- 50722-->* Magento now fills the confirmed email column as expected for confirmed customers.


<!--- 50710-->* The default full page cache (FPC) implementation no longer caches content with non-HTML Content-Type headers (for example, text/css, application/JavaScript), before re-serving this content as text/HTML.



<!--- 50890-->* Fixed issue with storefront prices not accurately reflecting products' custom options settings.


<!--- 50893-->* Magento now displays a  _Threshold_ message after a customer buys a product and its quantity does not decrease.

<!--- 50876-->* You can now change the base currency in website scope.


<!--- 50873-->* Fixed issue with the missing Delete button on the Edit Store and Store View pages on websites with multiple stores and storeviews.




<!--- 50828-->* Fixed issue with Downloadable product Links section on global scope level after edit on the storeview level.


<!--- 50819-->* Fixed issue with cache file permissions.


<!--- 50580-->* The Configurable Product page now displays the Create Configurations button.

<!--- 50569-->* Fixed problem using Internet Explorer 11 to access editable fields in a configurable product's Current Variations grid.




<!--- 50561-->* You can now save item-level gift messages for guests. <a href="https://github.com/magento/magento2/issues/3804" target="_blank">(GITHUB-3804)</a>



<!--- 50546-->* Magento now correctly displays the stock status of a product with a custom attribute set after you save the product while creating it.




<!--- 50498-->* The variations matrix is now populated as expected after you update a configurable product.




<!--- 50461-->* The default address check boxes are  checked as expected on the Customer View page.


<!--- 50375-->* Magento now displays images for configurable product variations on the storefront.

<!--- 50366-->* Magento now creates a new attribute set as expected after you use the Configurable Product wizard to create a new product.

<!--- 50025-->* The checkout page now loads correctly after you add an extension attribute to CartItemInterface.  <a href="https://github.com/magento/magento2/issues/3640" target="_blank">(GITHUB-3640)</a>

<!--- 50195-->* The Admin URL is no longer indexed in Google.

<!--- 50184-->* Fixed issue with Catalog Search Auto Suggest button.  <a href="https://github.com/magento/magento2/issues/3657" target="_blank">(GITHUB-3657)</a>





<!--- 50202-->* Fixed issue with saving  shipment data. <a href="https://github.com/magento/magento2/issues/527" target="_blank">(GITHUB-527)</a> 	


<!--- 52747-->* Fixed issue with fatal error while reordering.

<!--- 52737-->* Deleting a category's image on a custom storeview no longer deletes the image on all store views.


<!--- 52701-->* We've enhanced the decimal precision on the Product page. 	.


<!--- 52674-->* Fixed issue with the WYSIWYG editor not saving changes of raw content.


<!--- 52033-->* You can now remove a Gift Card Product's fixed amount.

<!--- 52023-->* You can now create a store view after selecting Save and duplicate option while creating a simple product.



<!--- 51999-->* Fixed issue with `updater/cron.php` processing newlines.


<!--- 51955-->* Fixed invalid view ID and changelog name for the customer grid indexer.




<!--- 51951-->* Magento no longer throws SQL errors when you clone a product with custom options when you have CatalogStaging enabled.


<!--- 51915-->* Magento no longer removes a configurable product from the shopping cart when you add another product.



<!--- 52176-->* New Accounts Report now correctly  calculates accounts for multiple websites.



<!--- 52468-->* Fixed miscellaneous errors in cron log.

<!--- 52442-->* Fixed issue with AMQP consumer message processing after duplicate message.

<!--- 52441-->* Customer account lockout now works as expected if the account has been unlocked previously.



<!--- 52387-->* Fixed issue with the Add Product to Cart with Minimum Qty Allowed Set feature.

<!--- 52385-->* Magento now transfers order data  to the new order when you initiate a reorder.




<!--- 52337-->* Fixed problems with the layout of the search results page for a search on related orders for billing agreement.

<!--- 52103-->* Fixed problem with exception message on `admin/mui/index/render/` page.

<!--- 52098-->* Magento no longer produces an exception when you add a configurable product with out-of-stock items to your shopping cart.


<!--- 52093-->* The cron updater now displays error messages instead of exceptions for permissions issues.


<!--- 52069-->* Fixed issues with placing  orders using FedEx shipping method.  


<!--- 52558-->* Cache is not invalidated or refreshed when product website visibility changes.

<!--- 52536-->* Magento no longer throws an exception  when you create a custom widget.





<!--- 52583-->* Fixed issue with updating Category products  on the storefront.

<!--- 49775-->* You can now  change the title of the Product Details tab.



<!--- 49692-->* Magento no longer redirects customers to checkout instead of My Account if guest checkout is disabled.

<!--- 49611-->* Magento no longer saves Category global attributes twice.


<!--- 49559-->* Online payment methods now display as expected when you place an order for a  virtual product as a guest.




<!--- 49538-->* You can now  dynamically switch product types when creating a new product.


<!--- 49520-->* You can now create a credit memo when placing an order using Eway payment method when the  payment action setting is set to Authorize only.




<!--- 49389-->* Setting category permissions to DENY now hides the category as expected.

<!--- 48240-->* Fixed issue with the display of forms incorporating new UI component in  Single-Store mode.




<!--- 49349-->* You can now save bookmarks you've created in Admin data tables.


<!--- 49338-->* Fixed issue with setting Custom attribute to Yes/No.

<!--- 47995-->* We've improved the performance of local caching that uses Zend_Cache_Backend_File.

<!--- 48285-->* When you enable PayPal Express Checkout but  disable PayPal Credit, only one PayPal Express Checkout option is available when the customer checks out.

<!--- 48261-->* Fixed the test dev/tests/integration/testsuite/Magento/Framework/Filesystem/Driver/FileTest.php to properly set file permissions. <a href="https://github.com/magento/magento2/issues/3119" target="_blank">(GITHUB-3119)</a>

<!--- 48803-->* The Use default value check box on a product in a non-default store view function properly.

<!--- 48809-->* Tests in dev/tests/integration/testsuite/Magento/Catalog/Model/ProductTest.php are executed as expected.

<!--- 48659-->* Corrected issues with HTML minification.


<!--- 48718-->* The REST API call POST /V1/products/attributes/ now creates a product's attributes properly.

<!--- 48722-->*  Improved export performance. <a href="https://github.com/magento/magento2/issues/3119" target="_blank">(GITHUB-3217)</a>

<!--- 48520-->* Saving a category with an invalid URL (such as a duplicate of another category's) fails as expected.

<!--- 48901-->* EE only. Assigning to an existing Staging edit no longer causes a 500 (Internal Server Error).

<!--- 49446-->* You can now place an order with PayPal Secure Checkout if your site uses secure URLs.








<!--- 47892-->* Fixed Fatal error: Maximum execution time of 60 seconds exceeded when deploying static files. <a href="https://github.com/magento/magento2/issues/3119" target="_blank">(GITHUB-2461)</a>


<!--- 47919-->* We improved the error message when you install the Magento software using composer install with the --no-dev option. (Only developers who contribute to the Magento codebase typically use composer install.) <a href="https://github.com/magento/magento2/issues/3119" target="_blank">(GITHUB-2561)</a>

<!--- 47931-->* A quick edit of a CMS page no longer switches the store view to the default store.




<!--- 53352-->* Resolved an exception during setup or upgrade that resulted from a non-existent directory.

<!--- 51015-->* You can now use an empty value for a non-required configurable swatch attribute.

<!--- 48079-->* Resolved issues with shipping providers for one-page checkout.

<!--- 48094-->* Updated packages on repo.magento.com to remove conflicts between Magento CE and EE components.

<!--- 48171-->* User notifications work as expected.

<!--- 47881-->* Removed the listing of arguments from Magento\Framework\DataObject::__call() - print_r() to avoid memory leaks.




<!--- 46039-->* You can now apply a Catalog Price rule  to a product created using Web API. Create category.




<!--- 47465-->* Fixed issue with Category products not being loaded as expected to a second website.


<!--- 51732-->* Using the default values for the Enable Product and Product name fields on a non-default site during product update no longer causes the original data to be lost.

<!--- 53015-->* Fixed issues with minification in forms.  



<!--- 52978-->* The Order grid filter now works as expected for Purchase Date.

<!--- 53060-->* You can now issue a partial refund.

<!--- 53070-->* You can now unassign a product from all websites.




<!--- 53375-->* We've improved the Catalog Events Carousel widget.

<!--- 53412-->* Fixed error that occurred during the creation of an international USPS shipment label with dimensions specified in inches.  

<!--- 53286-->* You can now create a shipping label for the FedEx shipping method.






<!--- 53144-->* Magento now applies the license agreement automatically if Terms & Conditions are in automatic application mode.

<!--- 53267-->* We've corrected errors with currency codes in invoices.  <a href="https://github.com/magento/magento2/issues/4264" target="_blank">(GITHUB-4264)</a>


<!--- 53320-->* Invoice amounts now display the currency symbol of the currency used on the store view.


<!--- 53395-->* Magento no longer displays Payment Review order status  to the customer after the Authorize.net  Fraud filters are triggered.

<!--- 52552-->* Invoice status now reflects the status of the captured saved invoice. <a href="https://github.com/magento/magento2/issues/4385" target="_blank">(GITHUB-4385)</a>



<!--- 53316-->* The eWay capture transaction no longer closes after creating partial refund.  EE and CE

<!--- 52158-->* Fixed issue with data migration tool providing wrong URL addresses for products and categories. <a href="https://github.com/magento/magento2/issues/59" target="_blank">(GITHUB-59)</a>


<!--- 52775-->* Magento now saves the values for product attributes of type "Multiple Select" during update.  <a href="https://github.com/magento/magento2/issues/4346" target="_blank">(GITHUB-4346)</a>, <a href="https://github.com/magento/magento2/issues/4312" target="_blank">(GITHUB-4312)</a>, <a href="https://github.com/magento/magento2/issues/4545" target="_blank">(GITHUB-4545)</a>

<!--- 53162-->* Magento no longer ignores tax when calculating totals for the shopping cart and checkout.

<!--- 51815-->* Fixed an issue with unexpected behavior of  the Password Strength Validator on Create Customer Storefront page.



<!--- 52605-->* Cache behavior on checkout now works as expected (the only pages  uncached  belong to the order (products and category of the products)). <a href="https://github.com/magento/magento2/issues/4222" target="_blank">(GITHUB-4222)</a>


<!--- 53527-->* Fixed issue with the sign-in modal overlay on the checkout page. <a href="https://github.com/magento/magento2/issues/4083" target="_blank">(GITHUB-4083)</a>


<!--- 52785-->* The Save button now works as expected on the Category Edit page after you've manipulated  CatalogPermissions elements.


<!--- 53223-->* Setting Merge CSS Files = Yes no longer erodes Magento performance.  <a href="https://github.com/magento/magento2/issues/4710" target="_blank">(GITHUB-4710)</a>

<!--- 53157-->* Image previewer now works with images that contain spaces in their name.   

<!--- 53489-->* The `setStoreId` method now checks for StoreInterface and Store.


<!--- 53034-->* Dynamic Rows are now draggable.

<!--- 53299-->* Fixed issue with the Go Today button  not working for the dates range component.


<!--- 54043-->* Magento no longer prompts you to select a dropdown attribute after you've  selected one. <a href="https://github.com/magento/magento2/issues/4899" target="_blank">(GITHUB-4899)</a>


<!--- 52993-->* The Media Uploader error messages now make clear that we do not support SVG format. <a href="https://github.com/magento/magento2/issues/2958" target="_blank">(GITHUB-2958)</a>


<!--- 51929-->* The Web Setup Wizard now works when Magento is installed in `/pub`. <a href="https://github.com/magento/magento2/issues/4159" target="_blank">(GITHUB-4159)</a>

<!--- 52766-->* Fixed issue with template minification on the product front-end. <a href="https://github.com/magento/magento2/issues/4365" target="_blank">(GITHUB-4365)</a>

<!--- 53795-->* Added support for Chinese currency code for UPS shipping method. <a href="https://github.com/magento/magento2/issues/4578" target="_blank">(GITHUB-4578)</a>

<!--- 50972-->* Move to Shopping Cart action does not work inside creation offline order.  


<!--- 53773-->* The Price vs. Destination value for the condition field in the Table Rate Shipping method now works as expected.  



<!--- 46014-->* Magento now displays error messages on the page where the error occurred.


<!--- 52928-->* Fixed issue with rendering of the category permissions landing page  config control.


<!--- 53178-->* Magento now caches catalog event statuses when event status changes.

<!--- 54172-->* Magento now creates product URL rewrites as expected on mass update to a new website.


<!--- 52923-->* Switching to Varnish causes category menu to force HTTPS links. <a href="https://github.com/magento/magento2/issues/4540" target="_blank">(GITHUB-4540)</a>


<!--- 54051-->* You can now log in to the product frontend when inline translation is enabled. <a href="https://github.com/magento/magento2/issues/4925" target="_blank">(GITHUB-4925)</a>


<!--- 45613-->* Magento now uses the XML schema location in both the `etc/adminhtml/system.xml`  and the `Magento/Config/etc/system_file.xsd` schema. <a href="https://github.com/magento/magento2/issues/2372" target="_blank">(GITHUB-2372)</a>  

<!--- 46966-->* Magento now reads the `.xml config` files during setup. <a href="https://github.com/magento/magento2/issues/2725" target="_blank">(GITHUB-2725)</a>

<!--- 46927-->* Categories path for product URLs now working for Sample Data. <a href="https://github.com/magento/magento2/issues/2619" target="_blank">(GITHUB-2619)</a>

<!--- 46922-->* SynchronizePersistentInfoObserver is no longer subscribed to a nonexistent event. <a href="https://github.com/magento/magento2/issues/2693" target="_blank">(GITHUB-2693)</a>REMOVED FROM CODE ?

<!--- 46918-->* Fixed possible memory leak in `\Magento\Framework\Image\Adapter\Gd2`. <a href="https://github.com/magento/magento2/issues/2696" target="_blank">(GITHUB-2696)</a>


<!--- 46877-->* Fixed issue with selecting a product template for a configurable attribute. <a href="https://github.com/magento/magento2/issues/2567" target="_blank">(GITHUB-2567)</a>

<!--- 46413-->* The Code Migration tool now recognizes all Magento 1.x resource models and collection classes.

<!--- 46328-->* You can now print both shipment and invoice information from My Orders page. <a href="https://github.com/magento/magento2/issues/2500" target="_blank">(GITHUB-2500)</a>


<!--- 46326-->* Corrected invalid user error message. <a href="https://github.com/magento/magento2/issues/2066" target="_blank">(GITHUB-2066)</a>



<!--- 47431-->* Fixed issue in the `$product->load($id)` method for specific products. <a href="https://github.com/magento/magento2/issues/2800" target="_blank">(GITHUB-2800)</a>



<!--- 54051-->* You can now login on the product frontend when inline translation is enabled. <a href="https://github.com/magento/magento2/issues/4925" target="_blank">(GITHUB-4925)</a>


<!--- 48089-->* Undeclared dynamic property is no longer leaked in public space. <a href="https://github.com/magento/magento2/issues/2103" target="_blank">(GITHUB-2103)</a>


###Known issues
Magento 2.1.0 GA includes the following known issues:

<!--- 54447-->* A developer who attempts to upgrade the Magento EE software using the commands `git pull` followed by `composer update` sees the error `Fatal error: Cannot use Composer\Installer as Installer because the name is already in use`.

To work around this issue, run the following commands in the order shown:

    composer update magento/magento-composer-installer:0.1.11
    composer update


<!--- 54512-->* You cannot currently remove a product or category from a campaign. Selecting Remove this Update > Move to Another Campaign results in the following error: "Something went wrong while removing the Magento\Catalog\Api\Data\ProductInterface."

<!--- 54591-->*  Magento does not current apply the Cart Price rules to total amount/item condition. <a href="https://github.com/magento/magento2/issues/5025" target="_blank">(GITHUB-5025)</a>



###System requirements
Our technology stack is built on PHP and MySQL. Magento 2.1.0 supports:

* PHP 5.6
	We do not support PHP 5.5.x
* PHP 7.0.2, 7.0.6 up to 7.1
* MySQL 5.6
*	Apache 2.2 or 2.4
*	nginx 1.8 (or <a href="http://nginx.org/en/linux_packages.html#mainline" target="_blank">latest mainline version</a>)



For more information, <a href="{{ page.baseurl21 }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.

### Installation and upgrade instructions

You can install Magento Enterprise Edition 2.1 General Availability (GA) using Composer. 


{% include install/releasenotes/ee_install_21.md %}

### Upgrades
To upgrade to Magento 2.1 (including a Release Candidate), see [Upgrade to Magento version 2.1 (June 22, 2016)]({{page.baseurl}}release-notes/tech_bull_21-upgrade.html).


## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl21 }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
