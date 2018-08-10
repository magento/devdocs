---
group: release-notes
subgroup: 02_rel-notes
title: Magento Open Source 2.1.0 Release Notes
menu_title: Magento Open Source 2.1.0  Release Notes
menu_order: 199
level3_menu_node: level3child
level3_subgroup: ce21-relnotes
version: 2.1
---

We are pleased to present Magento Open Source (formerly Community Edition) 2.1.0 General Availability. This release includes numerous functional fixes and enhancements.


Backward-incompatible changes are documented in [Magento 2.1 backward incompatible changes]({{ page.baseurl }}/release-notes/backward-incompatible-changes/index.html).


<div class="bs-callout bs-callout-info" id="info">
  <p>This version of the Magento Open Source 2.1.0 Release Notes varies from the version of the Release Notes that we published with the June 23, 2016 GA release. We've identified these  changes in italics below.  The code base has not changed.</p>
</div>

### Highlights

Magento Open Source 2.1.0 includes several new and exciting features:


* **PayPal enhancements** include PayPal in-context {% glossarytooltip 278c3ce0-cd4c-4ffc-a098-695d94d73bde %}checkout{% endglossarytooltip %} and saved credit cards. In-context checkout helps to increase {% glossarytooltip 38c73ce4-8f01-4f74-ab30-1134cec5664f %}conversion{% endglossarytooltip %} rates 69 bps by allowing shoppers to pay with PayPal without leaving the merchant’s site. PayPal saved credit cards boost repeat purchases by allowing merchants to securely store credit card information with PayPal so customers do not need to re-enter it in checkout or when reordering items from the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} interface.

* **Braintree Hosted Fields** securely collect all sensitive payment information in checkout so merchants can qualify for the simplest set of PCI compliance requirements. Merchants retain complete control over their checkout style and {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} because Braintree gathers credit card data using small, transparent iframes that replace individual payment fields. Braintree {% glossarytooltip 73a87074-8de7-4e69-a97f-12c65c6f5582 %}settlement{% endglossarytooltip %} reports are now also conveniently available within the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %}.

* **Improved management interfaces** make it faster and easier to search for information in the Admin, set up global search synonyms, and create new product, category, and {% glossarytooltip f3944faf-127e-4097-9918-a2e9c647d44f %}CMS{% endglossarytooltip %} content.

### Security enhancements

This release includes enhancements to improve the security of your Magento application. While there are no confirmed attacks related to these issues to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your Magento software to the latest version as soon as possible.

[Contact us](https://magento.com/company/contact-us){:target="_blank"} for more information.

### Known issue

<i>Known issue <a href="https://github.com/magento/magento2/issues/5025" target="_blank"> (GITHUB-5025)</a>  removed.</i>

### Fixed issues

#### Installation and upgrade
{:.no_toc}

<!--- 51033 -->* System upgrades now ignore the contents of the Magento `var/session` directory.

<!--- 51327 -->* You don't need to have a `composer.json` to run Magento CLI commands.

<!--- 50794 -->* Addressed an issue that caused the following error on the Magento {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} when optional sample data is installed: "We're sorry, an error has occurred while generating this email".


<!--- 53232 -->*  Resolved data loss issues during upgrade to version 2.0.4. <a href="https://github.com/magento/magento2/issues/4054" target="_blank"> (GITHUB-4054)</a>, <a href="https://github.com/magento/magento2/issues/3951" target="_blank"> (GITHUB-3951)</a>, <a href="https://github.com/magento/magento2/issues/3097" target="_blank"> (GITHUB-3097)</a>, <a href="https://github.com/magento/magento2/issues/3249" target="_blank"> (GITHUB-3249)</a>


<!--- 51544 -->* Upgrading the Magento system software now correctly updates the product version.


<!--- 51693 -->* Improved performance of installations and upgrades by compressing packages on repo.magento.com

<!--- 52187 -->* A user with limited access to the Magento Admin cannot run the Web Setup Wizard.

<!--- 52973 -->* Installing optional sample data no longer throws the following exception: `efault: Notice: /Stage[magento_setup]/Magento::Setup::Magento_cli/Exec[Run Magento reindex]/returns: SQLSTATE[23000]: Integrity constraint violation: 1062`.

<!--- 45608 -->* You can now successfully uninstall the Magento_CustomerBalanceSampleData {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %}.

<!--- 51175 -->* The Component Manager now displays component versions that are compatible with your Magento software version.

<!--- 51718 -->* You can now successfully uninstall the Magento software after an incomplete installation.

<!--- 50742, 45652, 51102, 50508, 51956  -->* Fixed issues with installing optional sample data.


<!--- 50696 -->* Fixed issues with running integration tests on Microsoft Windows.

<!--- 50848 -->* The `magento setup:di:compile` command no longer throws a `No tokens were provided` exceptions when it encounters directories or empty files. <a href="https://github.com/magento/magento2/issues/3824" target="_blank"> (GITHUB-3824)</a>

<!--- 51953 -->* Manually unselecting the DownloadableStaging during installation no longer throws a fatal error.

<!--- 45105 -->*   You can now successfully install Magento using a setup {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} that contains a port number. <a href="https://github.com/magento/magento2/issues/2272" target="_blank"> (GITHUB-2272)</a>

<!--- 46858-->* The Magento CLI `setup:config:set` now accepts  hyphens and dashes "-".  <a href="https://github.com/magento/magento2/issues/2700" target="_blank"> (GITHUB-2700)</a>

<!--- 47531-->* Running `setup:config:set` updates the deployment configuration properly. <a href="https://github.com/magento/magento2/issues/2852" target="_blank"> (GITHUB-2852)</a>

<!--- 51779-->* Magento Community Edition 2.0.4 with Sample Data.tar.bz2 (204 MB) download now works. <a href="https://github.com/magento/magento2/issues/4090" target="_blank"> (GITHUB-4090)</a>

<!--- 53471-->* The `MAGE_MODE` environment variable is no longer a required server config variable for {% glossarytooltip b14ef3d8-51fd-48fe-94df-ed069afb2cdc %}NGINX{% endglossarytooltip %} configuration.

#### Shopping
{:.no_toc}

<!--- 51987-->* We've fixed the Add to Cart button translation. <a href="https://github.com/magento/magento2/issues/4181" target="_blank"> (GITHUB-4181)</a>


<!--- 40616 -->*  The {% glossarytooltip c7ecb18d-cefe-452d-83e2-3c4d5e355db9 %}shopping cart{% endglossarytooltip %} for a registered user now returns a complete list of products.  

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

#### Product
{:.no_toc}

<!--- 52030 -->* Downloadable products are no longer shown as out of stock on the {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}Category{% endglossarytooltip %} page.

<!--- 48153 -->*  You can now save a product that's been assigned to more than one {% glossarytooltip a3c8f20f-b067-414e-9781-06378c193155 %}website{% endglossarytooltip %}.

<!--- 48781 -->*  The performance of loading directories that contain products that include Swatches has been improved.

<!--- 48588 -->*  You can now add a new row to a Custom Option of Input Type when editing a {% glossarytooltip f85f36ad-2942-446e-b711-39f2a16f6364 %}simple product{% endglossarytooltip %}.

<!--- 53342 -->* Magento no longer duplicates URL keys during the creation of a {% glossarytooltip 2fd4d100-28d2-45ca-bec1-128444ea98e6 %}configurable product{% endglossarytooltip %}.

<!--- 50507 -->* You can now successfully rest the Product Attributes mass update Admin form.

<!--- 51034-->* You can now create a simple product with custom options.

<!--- 51407 -->* You can now save a product after applying an update for it.

<!--- 52078 -->*  You can now successfully save products with custom options.

<!--- 51181 -->*  You can now configure a product whose last attribute has a price of zero, and the correct total price results. <a href="https://github.com/magento/magento2/issues/3912" target="_blank"> (GITHUB-3912)</a>

<!--- 50257 -->*  Optional dropdown product attributes can now be left blank.

<!--- 53131 -->* You can now view configurable products when using sample data.

<!--- 51611 -->* Layered navigation now includes a list of all product attributes.

<!--- 51751 -->* You can now filter entries in the Product Reviews report by date. 

<!--- 51080 -->*  You can now update an existing variation of a configurable product.

<!--- 50969-->* Fixed issue with incorrect or missing scope labels on the Product Creation/Editing page.

<!--- 53019 -->* Magento no longer makes unexpected calls when you view a product in the storefront.

<!--- 47440 -->*  Magento now displays the correct product prices on the Configurable product page when {% glossarytooltip 8d40d668-4996-4856-9f81-b1386cf4b14f %}catalog{% endglossarytooltip %} prices include tax. <a href="https://github.com/magento/magento2/issues/2471" target="_blank"> (GITHUB-2471)</a>

<!--- 41377-->* Products > Catalog "Change status" mass action now works properly. <a href="https://github.com/magento/magento2/issues/1559" target="_blank"> (GITHUB-1559)</a>

#### API
{:.no_toc}
<!--- 50878 -->* The Oauth handshake now clearly indicates the SAAS platform with which the Magento store is doing the Oauth handshake.

<!--- 46720 -->* The Orders {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} now exposes Shipping Address. <a href="https://github.com/magento/magento2/issues/2628" target="_blank"> (GITHUB-2628)</a>

<!--- 52613 -->* The {% glossarytooltip 6a9783a3-cdec-4fed-843d-8eda12819804 %}Credit Memo{% endglossarytooltip %} REST API now updates attributes as expected.  <a href="https://github.com/magento/magento2/issues/4329" target="_blank"> (GITHUB-4329)</a>

<!--- 47451-->* The 'in' filter now works in list APIs (checked customer, product, product attributes).  <a href="https://github.com/magento/magento2/issues/2892" target="_blank"> (GITHUB-2892)</a>

<!--- 51451-->* The SOAP API now works in production mode.  <a href="https://github.com/magento/magento2/issues/3944" target="_blank"> (GITHUB-3944)</a>


<!--- 50192-->* Magento now displays an error message if an error occurs when you try to set payment using the REST API. Previously, Magento creates only an internal error. <a href="https://github.com/magento/magento2/issues/3600" target="_blank"> (GITHUB-3600)</a>

<!--- 47504-->* USPS API includes the January 17, 2016 USPS method name changes.


<!--- 50632-->* The title of the totals discount segment returned by the API is now correct.

<!--- 49558, 51009 -->* You can now use the SOAP API to add product attribute options text swatch or visual swatch.

<!--- 47850-->* Magento no longer creates customers when validation fails. <a href="https://github.com/magento/magento2/issues/2914" target="_blank"> (GITHUB-2914)</a>


<!--- 47792-->* You can now successfully update product categories through the SOAP API.

<!--- 50636-->* Magento validates all the appropriate REST calls with SearchCriteria filters if the response to the `search_criteria` key is NOT null.


<!--- 53152-->*  REST API GET /V1/categories calls now return all the categories you expect (that is, all that are created in the product interface). <a href="https://github.com/magento/magento2/issues/4525" target="_blank"> (GITHUB-4525)</a>

<!--- 53545-->* System > Integrations > Add New Integration now returns a populated  resources list.  <a href="https://github.com/magento/magento2/issues/4537" target="_blank"> (GITHUB-4537)</a>

<!--- 50611-->* Web APIs no longer allow anonymous access by default. <a href="https://github.com/magento/magento2/issues/3786" target="_blank"> (GITHUB-3786)</a>

<!--- 51066 -->* Magento now returns available services in WSDL schema.  Previously, you could not process SOAP requests as expected.

#### JavaScript
{:.no_toc}

<!--- 50243 -->*  Attribute values are now consistently persisted after reloading a form.

<!--- 50864-->* You can now nest categories more than four levels deep.

<!--- 49967 -->*  We've optimized `registry.js` performance.

#### PHP
{:.no_toc}
<!--- 53524 -->*  {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} errors no longer occur when you run a cron script on installations running PHP5.5. <a href="https://github.com/magento/magento2/issues/4722" target="_blank"> (GITHUB-4722)</a>

<!--- 47677-->* Remi PHP 7.0.1 now works with Sample Data.

<!--- 48387-->* Payment/Shipping config is no longer decrypted twice in a PHP7 environment.

#### PayPal
{:.no_toc}
<!--- 49148 -->*  The PayPal button now displays as expected in the minicart.

<!--- 50557-->* The PayPal Express review rendering of tax block now works correctly.  <a href="https://github.com/magento/magento2/issues/3774" target="_blank"> (GITHUB-3774)</a>


<!--- 45127-->* PayPal now works correctly if the applied discount brings the subtotal to negative, but the grand total is positive.

<!--- 47544-->* The "Learn More" link for Payments Pro now works correctly.

<!--- 48469-->* The Get Credentials From PayPal and Sandbox credentials buttons are now rendered correctly.

<!--- 42103-->* Magento now clears the minicart as expected after you complete  an order using PayPal.


<!--- 51014-->* Magento now displays the relevant error message when Express Checkout fraud filters are triggered.

<!--- 50910-->* Magento no longer disables the Continue button when you  submit an order with PayPal Payments Advanced.

<!--- 51789-->* Magento now successfully generates the PayPal Settlement report.

<!--- 51481-->* Magento now updates Shipping method  on the PayPal Order Review page.

<!--- 51099-->* The PayPal Settlement report now works correctly.


<!--- 50054-->* Magento now requires the {% glossarytooltip 5ac2d367-070a-474c-badf-df2b84fe3b09 %}Merchant Account{% endglossarytooltip %} ID field  in PayPal configuration.

<!--- 50024-->* Magento still displays products  in the mini shopping cart after guest checkout with PayPal Express.

<!--- 53403-->* Fixed issue with the terms and conditions agreement causes fatal error during checkout with PayPal Payments Pro method.  

<!--- 53211-->* Fixed issue with incorrect transaction totals in PayPal Settlement report.

<!--- 53714-->* Fixed issue with BNCODE in PayPal solutions.

<!--- 53238-->* In the Vault Provider field, Magento no longer displays the Payflow Pro option for countries that don't offer it.  

#### Braintree
{:.no_toc}
<!--- 48649-->* You can now change the quantity for an {% glossarytooltip 631b9627-a367-4a56-b3b1-0f6ca8fe6e02 %}invoice{% endglossarytooltip %}.

<!--- 50309-->* You can now  create invoice of transaction with expired {% glossarytooltip 34ecb0ab-b8a3-42d9-a728-0b893e8c0417 %}authorization{% endglossarytooltip %}.

<!--- 52359-->* You can now place an order through online payments in the Admin area.

<!--- 52560-->* You can now use stored cards on the Admin side.  

<!--- 53237-->* You can now apply {% glossarytooltip f5cdf732-d644-4bd5-9f75-53b01401b7e7 %}Gift Card{% endglossarytooltip %} Account/Discount Code on the review page.


<!--- 53240-->* You can now check out  {% glossarytooltip dcd8e53f-079c-43fa-abf3-bdeabdbb9e86 %}virtual product{% endglossarytooltip %} using Braintree.

<!--- 53798-->* The Braintree PayPal button is no longer active until checkout.


<!--- 53032-->* The PayPal Braintree popup now appears as expected when you click the Continue to PayPal button.

<!--- 54233-->* Magento no longer displays this error when you save an order:
"Order Saving error: Table 'magento.vault_payment_token_order_payment_link' doesn't exist."

<!--- 54293-->* You can now place an order from  within Braintree if 3D Secure Verification is enabled.

#### Integration
{:.no_toc}

<!--- 50857 -->*  You can now select API resources while creating an integration.

<!--- 51642 -->* After you install and enable a module, the System > Extensions > Integrations page lists the new integration generated by the module. <a href="https://github.com/magento/magento2/issues/4023" target="_blank"> (GITHUB-4023)</a>

<!--- 46021-->* We've edited the `integration/acl.xml` file. 

<!--- 46019-->* Magento now creates an integration  after adding the `integration/config.xml` file.


<!--- 47301-->* Fixed issue with PHP 7.0 Integration test.


<!--- 51112-->* Magento no longer deletes Access Token and Access Token Secret from all integrations when you delete it from only one integration. <a href="https://github.com/magento/magento2/issues/3450" target="_blank"> (GITHUB-3450)</a>

<!--- 54231-->* You can now delete an Admin user that has the same ID as an integration user, without breaking the integration.

#### Testing
{:.no_toc}

<!--- 52414 -->* We've fixed several integration test syntax errors. <a href="https://github.com/magento/magento2/issues/4343" target="_blank"> (GITHUB-4343)</a>

<!--- 50987 -->* You can now run all integration tests in developer mode.


<!--- 51715 -->*  CategoryTest integration test no longer fails on Travis builds. <a href="https://github.com/magento/magento2/issues/4099"
target="_blank"> (GITHUB-4099)</a>

#### Search
{:.no_toc}

<!--- 51716-->* We've improved search performance.  

<!--- 52482-->* Magento no longer throws a fatal error if you use fewer than the minimal required characters in your search query.

<!--- 53263-->* Search input on themes using the Blank {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} now works as expected.
 <a href="https://github.com/magento/magento2/issues/4282" target="_blank"> (GITHUB-4282)</a>

<!--- 53530-->* Performance of category pages significantly degrade when having around 3000 products or more in category.  

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

<!--- 52262-->* Fixed error on checkout page when you changed {% glossarytooltip 825b5f85-7bb8-4005-938e-51c1bb4b401b %}base currency{% endglossarytooltip %} at checkout.

<!--- 50830 -->* Fixed problem with opening My Cart page in one-page checkout.

#### Bundle products
{:.no_toc}

<!--- 51194 -->* The Add Products to Option button now works as expected when you create a new update for a {% glossarytooltip fbcfce51-68e2-482f-84d5-f28d84404cff %}Bundle product{% endglossarytooltip %}.

<!--- 52832 -->* You can now include quotation marks in Bundle product names. <a href="https://github.com/magento/magento2/issues/4414" target="_blank"> (GITHUB-4414)</a>

<!--- 50652-->* Magento no longer displays an invalid date error message when you create a Bundle Product update.

<!--- 47379-->* You can now successfully move Bundle products to the Wishlist. <a href="https://github.com/magento/magento2/issues/2717" target="_blank"> (GITHUB-2717)</a>


<!--- 45173-->* Bundle products created using {% glossarytooltip 377dc0a3-b8a7-4dfa-808e-2de37e4c0029 %}Web API{% endglossarytooltip %} are now visible on the storefront.

<!--- 46695-->* Magento now saves the price for Bundle option items.


<!--- 51255-->* You can now save duplicate Bundle products.

<!--- 50831-->* You can now specify Bundle option title on the storeview level.

<!--- 50826-->* You can now add a Bundle product to the shopping cart.

<!--- 52017-->* Magento now displays Bundle product prices in the shopping cart product grid.

<!--- 49484-->* Magento now correctly displays `sku_type`, `weight_type`, `shipment_type` after you save a Bundle product.


<!--- 51925 -->* The Edit Bundle product page now works as expected.

<!--- 49546 -->*  Magento now successfully validates the price_type field during import and export.

#### Import/Export
{:.no_toc}
<!--- 47555-->* The Import error message you receive when an attribute exceeds maximum permitted length now inserts variable that defines the attribute name. <a href="https://github.com/magento/magento2/issues/2844" target="_blank"> (GITHUB-2844)</a>

<!--- 46245-->* Magento no longer throws this error when you import or export when you have multiple websites and stores:  "URL key for specified store already exists."


<!--- 47001-->* Magento no longer lets you  import two products with the same URL key.

<!--- 50973-->* Magento no longer throws a general {% glossarytooltip 53da11f1-d0b8-4a7e-b078-1e099462b409 %}exception{% endglossarytooltip %} when you try to import more than 100,000 products.

<!--- 50899 -->*  You can now export products to a {% glossarytooltip 6341499b-ead9-4836-9794-53d95eb48ea5 %}CSV{% endglossarytooltip %} file, edit names, then import products successfully.


<!--- 47877 -->*   Import process speed has been improved. <a href="https://github.com/magento/magento2/issues/2957" target="_blank"> (GITHUB-2957)</a>

<!--- 52831-->* You can now re-import data. <a href="https://github.com/magento/magento2/issues/4315" target="_blank"> (GITHUB-4315)</a>  


<!--- 52037-->* Magento changes the order in which products are displayed  after you export or import a catalog.

<!--- 49676-->* You can now import cross-sells, up-sells and related products. <a href="https://github.com/magento/magento2/issues/3286" target="_blank"> (GITHUB-3286)</a>

<!--- 53781-->* The Ajax loader now stops if you use an incorrect file type during import.

<!--- 50817 -->*  The `console` command now flushes caches without error. {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}Cache{% endglossarytooltip %} should be flushed without errors.

#### Messages and documentation
{:.no_toc}

<!--- 52340 -->* The `getList` method documentation has been enhanced.

<!--- 52000 -->* Error messages associated with `cron` processes are now more helpful. <a href="https://github.com/magento/magento2/issues/3189" target="_blank"> (GITHUB-3189)</a>

<!--- 50898 -->* Magento now displays an appropriate  message when you add less than the required minimum items in your cart.

<!--- 51378 -->* Message serialization now complies with AMQP specifications.

<!--- 48175 -->* We've improved the error message that users typically received during upgrade. The message now clearly states when a user must login first to `magento.com` before continuing the upgrade process. <a href="https://github.com/magento/magento2/issues/3059" target="_blank"> (GITHUB-3059)</a>

<!--- 51371, 51580-->* Error messages generated during installation are now more informative.  


<!--- 51641-->* Documentation now states that the iconv {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} is required in installations running PHP 7.x. <a href="https://github.com/magento/magento2/issues/4002" target="_blank"> (GITHUB-4002)</a>

<!--- 46415-->* CLI documentation now includes `magento dev:css` command. <a href="https://github.com/magento/magento2/issues/433" target="_blank"> (GITHUB-433)</a>

#### Admin
{:.no_toc}
<!--- 50492 -->* You can now access the Web setup wizard from the Admin interface.

<!--- 50377 -->* Magento now updates {% glossarytooltip 44d60586-b853-40dd-bf82-4a1580450416 %}Attribute set{% endglossarytooltip %} after reloading a form.

<!--- 50141 -->* You can now update category settings.

<!--- 50630 -->*  You can now open the Admin Menu when JS minification is enabled.

<!--- 49939 -->*  You can now assign a CMS page to multiple storeviews.

<!--- 49001 -->*  The {% glossarytooltip ae8f7f2b-ddfb-41ed-bec3-bed191406fdd %}Search Engine Optimization{% endglossarytooltip %} fieldset no longer displays Category url_key.

<!--- 49154 -->*  You can now successfully create a new update on 'custom store view'.

<!--- 48218 -->*  You can now create permanent or temporary URL rewrites.  <a href="https://github.com/magento/magento2/issues/2929" target="_blank"> (GITHUB-2929)</a>

<!--- 53807 -->*  You can now save Text Swatch "Swatch" values.

<!--- 52284 -->* You can now insert more than two images using the {% glossarytooltip 98cf4fd5-59b6-4610-9c1f-b84c8c0abd97 %}WYSIWYG{% endglossarytooltip %} editor. <a href="https://github.com/magento/magento2/issues/4221" target="_blank"> (GITHUB-4221)</a>

<!--- 52436 -->* Magento now displays categories that contain children categories. <a href="https://github.com/magento/magento2/issues/2121" target="_blank"> (GITHUB-2121)</a>


<!--- 50193 -->* Layered Navigation now contains previously missing category filters.

<!--- 50522 -->* The WYSIWYG editor no longer removes HTML5 tags.

<!--- 46807 -->*  You can now add new Content CMS New Blocks.

<!--- 51299-->* You can now create an order from the Admin interface while using a non-default website.

<!--- 50905 -->*  Fatal errors no longer occur when you save configuration from the  Admin panel.

<!--- 51136 -->*  You can now change Video Role and Image Role.

<!--- 51113 -->*  Magento now displays a checkbox during the  create user role ACL if minification is set to ON.

<!--- 51068 -->* Admin User sessions no longer expire prematurely in installations that are running Redis for session storage. Previously, you were directed back to the login page after logging in to the Admin panel, waiting a short period time (less than the Admin Session Lifetime value), and trying to navigate to the Dashboard.

<!--- 50768 -->* Newly created categories now appear as expected on the Navigation menu.

<!--- 51238 -->* Category pages now display swatches of configurable products based on color swatch attribute.

<!--- 51231 -->* Magento now successfully saves future special dates in the Advanced Price page.


<!--- 52117 -->* Changes to Customer group are now immediately applied to logged-in customers.

<!--- 52316 -->*  Product update operations by either customers or store administrators no longer result in locking queries on catalog category product index. <a href="https://github.com/magento/magento2/issues/4342" target="_blank"> (GITHUB-4342)</a>

<!--- 46808 -->* Admin order creation no longer fails when the "Include Tax In Order Total" option is set to YES. <a href="https://github.com/magento/magento2/issues/2675" target="_blank"> (GITHUB-2675)</a>

<!--- 45019-->* You can now translate the phrases "records found" and "selected" that appear in the Admin panel.  <a href="https://github.com/magento/magento2/issues/2155" target="_blank"> (GITHUB-2155)</a>

<!--- 47255-->* Magento now displays information in the dashboard when the Use Aggregated Data setting is turned on. <a href="https://github.com/magento/magento2/issues/3459" target="_blank"> (GITHUB-3459)</a>

#### Storefront
{:.no_toc}
<!--- 48714 -->*  You can now add form elements via layout and use the htmlContent component.

<!--- 53126 -->*  Multi-site cache now shows the correct site's content. <a href="https://github.com/magento/magento2/issues/4556" target="_blank"> (GITHUB-4556)</a>

<!--- 52961 -->* URL Rewrites now work correctly with multiple store views.

<!--- 47999 -->* Magento now registers added themes during production mode. <a href="https://github.com/magento/magento2/issues/2797" target="_blank"> (GITHUB-2797)</a>

<!--- 47054 -->*  Deployed static view files no longer contain references to BaseURL.

<!--- 50946-->* You can now configure multiple websites using NGINX.

<!--- 50937-->* Magento now displays the prices for Grouped Products in the storefront.

<!--- 51314-->* You can now successfully  sort products by swatch attribute.

<!--- 51276-->* Magento now displays product attributes for a product on the storefront as expected.

#### Indexing
{:.no_toc}
<!--- 48507 -->*  Magento can now complete reindexing when the product flat indexer is turned on.

<!--- 48790 -->*  The performance of re-indexing operations after importing many products has been improved.

#### Varnish
{:.no_toc}
<!--- 54228 -->* Varnish cache is no longer disabled on most {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} requests.

<!--- 53919 -->*  We changed the HTML header used for SSL offloading from SSL-OFFLOADED{:target="_blank"} to X-Forwarded-Proto: https{:target="_blank"} to be compatible with Varnish and for compatibility with load balancers.

To view this setting in the Magento Admin, click **Stores** > Settings > **Configuration** > GENERAL > **Web**. In the right pane, expand **Base URLs (Secure)**, value of the **Offloader header** field.

<div class="bs-callout bs-callout-info" id="info">
    <span class="glyphicon-class">
    <p>If you change the value of this field, you must regenerate your <code>.vcl</code> files.</p></span>
</div>

<!--- 51061, 51059 -->* Varnish now properly invalidates or refreshes the both Catalog {% glossarytooltip c57aef7c-97b4-4b2b-a999-8001accef1fe %}Event{% endglossarytooltip %} change in the Product page and Advance Inventory changes.  

<!--- 52607 -->*  We've enhanced Varnish caching performance. <a href="https://github.com/magento/magento2/issues/3926" target="_blank"> (GITHUB-3926)</a>

#### Miscellaneous
{:.no_toc}



<!--- 51008 -->* Magento now successfully migrates data when Google Analytics's Content Experiments is enabled.

<!--- 47082-->* Category creation from product page no longer fails when Google Content Experiments is enabled.

<!--- 51069-->* Page View Optimization tab is absent on edit CMS Page.

<!--- 49774-->* You no longer get a "Wrong request parameters" error when you try to assign products to a category on the {% glossarytooltip ca5a9ff1-8182-4fc4-a34b-9b3f831dbf3f %}store view{% endglossarytooltip %} level.

<!--- 47915-->* If you enable Google's content experiments in the Magento Admin, you can create categories as expected.

<!--- 48089-->* Undeclared dynamic property gets leaked in public space. <a href="https://github.com/magento/magento2/issues/2103" target="_blank"> (GITHUB-2103)</a>


<!--- 52650 -->*  We've corrected plugin sort order.

<!--- 52170 -->*  You can now create downloadable products.

<!--- 52371 -->*  Magento no longer exposes Marketplace credentials via URL.






<!--- 53678 -->* The Download link in the order confirmation email now works correctly.
 <a href="https://github.com/magento/magento2/issues/4762" target="_blank"> (GITHUB-4762)</a>



<!--- 54214 -->* You can now place orders using the Payflow Pro {% glossarytooltip 422b0fa8-b181-4c7c-93a2-c553abb34efd %}payment method{% endglossarytooltip %}.

<!--- 54182 -->* You can now place an order for an item for an amount that exceeds half of item's stock.  

<!--- 52612 -->* CLI is affected by the permissions configuration setting in server config.


<!--- 51592 -->* Single tenant compiler now works when Magento is not installed.

<!--- 51834 -->* Maestro credit cards can now pass validation on the application {% glossarytooltip ebe2cd14-d6d4-4d75-b3d7-a4f2384e5af9 %}server side{% endglossarytooltip %}.



<!--- 49877 -->* Don't omit the "callable" argument type hint. <a href="https://github.com/magento/magento2/issues/2026" target="_blank"> (GITHUB-2026)</a>






<!--- 54092 -->* We now include `.gitignore` as part of the project package. <a href="https://github.com/magento/magento2/issues/4358" target="_blank"> (GITHUB-4358)</a>

<!--- 46022 -->*  The PHP {% glossarytooltip 610157a5-5054-41f5-994b-4eadf54786ec %}code migration{% endglossarytooltip %} tool no longer fails with this error:  "Call to a member function xpath() on a non-object".


<!--- 51030 -->*  Magento now generates data in production mode.


<!--- 51717 -->*  Magento now displays an error stating that user is prohibited from disabling the only default store view when you try to disable the default storeview for a store.




<!--- 45339 -->*  Magento now applies the Cart price rule for payment method conditions.

<!--- 51440 -->* Fatal errors no longer occur when running CLI commands after compilation in some regression environments.



<!--- 53829 -->* Magento no longer references empty targets in other targets.




<!--- 51731 -->* Catalog Price Rules are now applied as expected, depending upon the time frame  stated in the Price Rule.


<!--- 51596 -->* Phrases with escaped slash characters are now translated. Previously, if a phrase were wrapped with single quotes, Magento would not display it correctly.








<!--- 53397 -->* The `collectRates()` method now obtains the full address details for a registered customer.

<!--- 53463 -->* The Customer Address tab is populated as expected after you create a new order. Previously, Magento did not list addresses on this tab when you'd create a new order.


<!--- 52959 -->* Logo folders have been added to the list of allowed resources. <a href="https://github.com/magento/magento2/issues/4078" target="_blank"> (GITHUB-4078)</a>

<!--- 53119 -->* The Force Sign-in button now works as expected.


<!--- 53362 -->* Gift Message information is now present as expected in the `extension_attributes` when you request this list by Web API.  Previously, if you placed an order with a Gift Message, and then performed a Web API request to get the list of orders, Gift Message information would be absent in the `extension_attributes`. <a href="https://github.com/magento/magento2/issues/4414" target="_blank"> (GITHUB-4414)</a>

<!--- 52782 -->* The `getPassword()` and `getPasswordConfirm()` methods now return the `password` and `passwordconfirm` parameters as strings. <a href="https://github.com/magento/magento2/issues/4355" target="_blank"> (GITHUB-4355)</a>

<!--- 51292 -->* The OAuth Token exchange expiration period is now calculated correctly. <a href="https://github.com/magento/magento2/issues/3449" target="_blank"> (GITHUB-3449)</a>



<!--- 52079 -->* The Order Repository GetList method no longer returns the same shipping address for all orders. <a href="https://github.com/magento/magento2/issues/4019" target="_blank"> (GITHUB-4019)</a>


<!--- 47439 -->* The `i18n:collect-phrases -m` command now works correctly. Previously, this command would not find all important Magento phrases. <a href="https://github.com/magento/magento2/issues/2630" target="_blank"> (GITHUB-2630)</a>

<!--- 47009 -->*  Plugins/interceptors now work with early stage single instance objects in Developer mode. <a href="https://github.com/magento/magento2/issues/2674" target="_blank"> (GITHUB-2674)</a>


<!--- 47639 -->* The `setup:di:compile` script now compiles all files as expected. <a href="https://github.com/magento/magento2/issues/2888" target="_blank"> (GITHUB-2888)</a>

<!--- 46044 -->* Synonyms now work as expected with Magento 2.x.  <a href="https://github.com/magento/magento2/issues/2519" target="_blank"> (GITHUB-2519)</a>

<!--- 40320 -->* Attribute 'setup_version' is missing for module error when defined as optional. <a href="https://github.com/magento/magento2/issues/1493" target="_blank"> (GITHUB-1493)</a>

<!--- 53865-->* The CC model now assigns cc data that is passed in the `additional_data` field.  <a href="https://github.com/magento/magento2/issues/4741" target="_blank"> (GITHUB-4741)</a>

<!--- 51803-->* The Select All checkbox on the Cache Management page now works as expected. <a href="https://github.com/magento/magento2/issues/4080" target="_blank">(GITHUB-4080)</a>, <a href="https://github.com/magento/magento2/issues/3580" target="_blank"> (GITHUB-3580)</a>

<!--- 41378-->* The {% glossarytooltip 05099dbb-d491-4e33-a065-16035cb2d4d9 %}locale{% endglossarytooltip %} for Chinese translation now works as expected. <a href="https://github.com/magento/magento2/issues/1547" target="_blank"> (GITHUB-1547)</a>



<!--- 46924-->* Magento now converts shipping_discount_amount to different currencies as needed. <a href="https://github.com/magento/magento2/issues/2708" target="_blank"> (GITHUB-2708)</a>



<!--- 52780-->*  Magento now checks for all return values used by the webservicex.net currency converter.  <a href="https://github.com/magento/magento2/issues/3118" target="_blank"> (GITHUB-3118)</a>

<!--- 52621-->*  Magento now parallelizes the cron setting `use_separate_process`.
<a href="https://github.com/magento/magento2/issues/4435" target="_blank"> (GITHUB-4435)</a>
<!--- 52590-->*  You can now set the date picker time format  to 24 hour notation.  <a href="https://github.com/magento/magento2/issues/3856" target="_blank"> (GITHUB-3856)</a>, <a href="https://github.com/magento/magento2/issues/4243" target="_blank"> (GITHUB-4243)</a>

<!--- 49805-->*  The Credit Memo form no longer assumes that shipping amount excludes VAT when both catalog prices and shipping prices are set to 'including tax'.
 <a href="https://github.com/magento/magento2/issues/3406" target="_blank"> (GITHUB-3406)</a>

<!--- 52919-->*  You can now resend order emails from the Admin interface when using Async mail. <a href="https://github.com/magento/magento2/issues/4507" target="_blank"> (GITHUB-4507)</a>

<!--- 53410-->*  `system.log` behavior has changed to reduce the number of distracting logged broken references. <a href="https://github.com/magento/magento2/issues/3507" target="_blank"> (GITHUB-3507)</a>
<!--- 42439-->* UI form components now support customer custom attributes of 'file' type.
<!--- 44598-->* Magento now identifies email validation errors after  you finish typing the email address.
<!--- 45318-->* Fixed issues with the  New Accounts Report.
<!--- 45723-->* Magento no longer calls plugin methods multiple times when a proxy exists for subject class.
<!--- 46145-->* Magento now applies a discount  only for the correct attribute.
<!--- 44789-->* Fixed issue with wrong AMQP connection alias creating message failures.
<!--- 45215-->* Magento no longer throws an unmasked fatal error when you supply an invalid product ID.  
<!--- 43336-->* Catalog Price Rules now work when based on configurable attributes
<!--- 42982-->* Fixed issue with Magento populating `var/cache` and `var/page_cache`  after cache configuration.

<!--- 46431-->* Form: Validation is disabled when you disable a field.
<!--- 46395-->* Fixed issue with performance of customer form creation for many customers.
<!--- 47528-->* Fixed issue with the Code  Migration tool's handling of password hashes.  
<!--- 47591-->* Fixed issue with rendering of  the "Remember Me" pop-up.
<!--- 45953-->* We edited the error message that Magento displays when you upload a custom option file to avoid displaying internal code structure.

<!--- 45882-->* "Custom option" prices are now present in Configurable product order calculations.
<!--- 46016-->* Unauthenticated users can no longer delete product reviews from a store.
<!--- 46010-->* Message structure is now enforced on encoder.

<!--- 46009-->* Magento now updates topology  after module installation.
<!--- 46008-->* Magento now rejects messages if an exception happens on business logic.
<!--- 46004-->* Fixed issue with area code not being set for the consumer command.
<!--- 46663-->* Category fields now contain the Use Default Value option in Store and StoreView scope.
<!--- 46815, 46814 -->* Improved performance of the checkbox and removed duplicate labels.

<!--- 46295-->* You can now set `HtmlTag` to `nav`.  <a href="https://github.com/magento/magento2/issues/2549" target="_blank"> (GITHUB-2549)</a>

<!--- 47377-->* Unnecessary StoreCookie plugins are no longer executed on each request.
<!--- 47375-->* Unnecessary MessageBox plugin no longer duplicate message logic.
<!--- 47321-->* MessageBox plugin is no longer triggered by {% glossarytooltip b00459e5-a793-44dd-98d5-852ab33fc344 %}frontend{% endglossarytooltip %} requests.

<!--- 47267-->* URL Rewrites now work for products that you access through the category landing pages.
<!--- 47844-->* Magento now displays  customer attribute options on the Attribute Edit page.
<!--- 47064-->* Fixed issue with JaveScript errors when loading the product grid after cleaning the cache and {% glossarytooltip 363662cb-73f1-4347-a15e-2d2adabeb0c2 %}static files{% endglossarytooltip %}.

<!--- 51074-->* Product images now switch as expected when  you click on a swatch.


<!--- 50988-->* The Create an Account form now opens as expected after checkout has been completed for a customer who is not logged in.



<!--- 51191-->* Fixed issue with resetting password  after waiting an hour.

<!--- 51186-->* Magento now provides an additional field in the Admin and customer login forms that prevent web browsers from caching login credentials.
<!--- 51185-->* Magento now loads product image from product page when minification is enabled.
<!--- 51413-->* Remove usages of DummyAttributeLoader.

<!--- 51404-->* Fixed issue with changing product images.
<!--- 51363-->*  A configurable product image's JSON `isMain` attribute is no longer always set to false.
<!--- 51352-->* Magento no longer throws an exception when an admin user requests a password reset password while working on a site that does not support email (for example, Vagrant).
<!--- 51791-->* Fixed issue with Sales Order extension_attributes.<a href="https://github.com/magento/magento2/issues/3967" target="_blank"> (GITHUB-3967)</a>
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

<!--- 50313-->* Magento no longer throws a fatal error  when you click on the related {% glossarytooltip f6528c80-6c22-4d84-9c31-13f1794d1757 %}banner{% endglossarytooltip %} grid in Cart Price Rule form while in production mode.
<!--- 50248-->* Customer grid indexer performance has been enhanced.
<!--- 50772-->* Rule-based free shipping now works as expected.
<!--- 50761-->* You can now assign a product to a custom website.
<!--- 50752-->* We've enhanced the performance of the Sync button.
<!--- 50743-->* Fixed issue with CMS Pages being corrupted during mass actions.  

<!--- 50733-->* Removing all rows from a CMS grid no longer results in an error message.  	
<!--- 50722-->* Magento now fills the confirmed email column as expected for confirmed customers.
<!--- 50710-->* The default full page cache (FPC) implementation no longer caches content with non-HTML Content-Type headers (for example, text/css, application/JavaScript), before re-serving this content as text/HTML.

<!--- 50890-->* Fixed issue with storefront prices not accurately reflecting products' custom options settings.

<!--- 50893-->* Magento now displays a  Threshold message after a customer buys a product and its quantity does not decrease.

<!--- 50876-->* You can now change the base currency in website scope.
<!--- 50873-->* Fixed issue with the missing Delete button on the Edit Store and Store View pages on websites with multiple stores and storeviews.

<!--- 50828-->* Fixed issue with {% glossarytooltip 38fc3629-ee25-4de5-ac7a-72db8e8de6de %}downloadable product{% endglossarytooltip %} Links section on global scope level after edit on the storeview level.

<!--- 50819-->* Fixed issue with cache file permissions.
<!--- 50580-->* The Configurable Product page now displays the Create Configurations button.

<!--- 50569-->* Fixed problem using Internet Explorer 11 to access editable fields in a configurable product's Current Variations grid.

<!--- 50561-->* You can now save item-level gift messages for guests. <a href="https://github.com/magento/magento2/issues/3804" target="_blank"> (GITHUB-3804)</a>

<!--- 50546-->* Magento now correctly displays the stock status of a product with a custom attribute set after you save the product while creating it.

<!--- 50498-->* The variations matrix is now populated as expected after you update a configurable product.

<!--- 50461-->* The default address checkboxes are  checked as expected on the Customer View page.


<!--- 50375-->* Magento now displays images for configurable product variations on the storefront.

<!--- 50366-->* Magento now creates a new attribute set as expected after you use the Configurable Product wizard to create a new product.

<!--- 50025-->* The checkout page now loads correctly after you add an {% glossarytooltip 45013f4a-21a9-4010-8166-e3bd52d56df3 %}extension attribute{% endglossarytooltip %} to CartItemInterface.  <a href="https://github.com/magento/magento2/issues/3640" target="_blank"> (GITHUB-3640)</a>

<!--- 50195-->* The Admin URL is no longer indexed in Google.

<!--- 50184-->* Fixed issue with Catalog Search Auto Suggest button.  <a href="https://github.com/magento/magento2/issues/3657" target="_blank"> (GITHUB-3657)</a>

<!--- 50202-->* Fixed issue with saving  {% glossarytooltip c8f00e9d-7f70-4561-9773-60da604ba5c9 %}shipment{% endglossarytooltip %} data. <a href="https://github.com/magento/magento2/issues/527" target="_blank"> (GITHUB-527)</a> 	


<!--- 52747-->* Fixed issue with fatal error while reordering.

<!--- 52737-->* Deleting a category's image on a custom storeview no longer deletes the image on all store views.

<!--- 52701-->* We've enhanced the decimal precision on the Product page. 	


<!--- 52674-->* Fixed issue with the WYSIWYG editor not saving changes of raw content.


<!--- 52033-->* You can now remove a Gift Card Product's fixed amount.

<!--- 52023-->* You can now create a store view after selecting Save and duplicate option while creating a simple product.

<!--- 51999-->* Fixed issue with `updater/cron.php` processing newlines.


<!--- 51955-->* Fixed invalid view ID and changelog name for the customer grid indexer.

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

<!--- 52536-->* Magento no longer throws an exception  when you create a custom {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %}.


<!--- 52583-->* Fixed issue with updating Category products  on the storefront.

<!--- 49775-->* You can now  change the title of the Product Details tab.

<!--- 49692-->* Magento no longer redirects customers to checkout instead of My Account if guest checkout is disabled.

<!--- 49611-->* Magento no longer saves Category global attributes twice.


<!--- 49559-->* Online payment methods now display as expected when you place an order for a  virtual product as a guest.

<!--- 49538-->* You can now  dynamically switch {% glossarytooltip 6e836354-0067-48ac-84ce-a4ab7c0c492e %}product types{% endglossarytooltip %} when creating a new product.

<!--- 49520-->* You can now create a credit memo when placing an order using Eway payment method when the  payment action setting is set to Authorize only.


<!--- 49389-->* Setting category permissions to DENY now hides the category as expected.

<!--- 48240-->* Fixed issue with the display of forms incorporating new {% glossarytooltip 9bcc648c-bd08-4feb-906d-1e24c4f2f422 %}UI component{% endglossarytooltip %} in  Single-Store mode.

<!--- 49349-->* You can now save bookmarks you've created in Admin data tables.

<!--- 49338-->* Fixed issue with setting Custom attribute to Yes/No.

<!--- 47995-->* We've improved the performance of local caching that uses Zend_Cache_Backend_File.

<!--- 48285-->* When you enable PayPal Express Checkout but  disable PayPal Credit, only one PayPal Express Checkout option is available when the customer checks out.

<!--- 48261-->* Fixed the test dev/tests/integration/testsuite/Magento/Framework/Filesystem/Driver/FileTest.php to properly set file permissions.

<!--- 48803-->* The Use default value checkbox on a product in a non-default store view function properly.

<!--- 48809-->* Tests in `dev/tests/integration/testsuite/Magento/Catalog/Model/ProductTest.php` are executed as expected.

<!--- 48659-->* Corrected issues with HTML minification.


<!--- 48718-->* The REST API call POST /V1/products/attributes/ now creates a product's attributes properly.

<!--- 48722-->*  Improved export performance. <a href="https://github.com/magento/magento2/issues/3217" target="_blank">(GITHUB-3217)</a>

<!--- 48520-->* Saving a category with an invalid URL (such as a duplicate of another category's) fails as expected.

<!--- 49446-->* You can now place an order with PayPal Secure Checkout if your site uses secure URLs.

<!--- 47892-->* Fixed Fatal error: Maximum execution time of 60 seconds exceeded when deploying static files. <a href="https://github.com/magento/magento2/issues/2461" target="_blank"> (GITHUB-2461)</a>

<!--- 47919-->* We improved the error message when you install the Magento software using {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}composer{% endglossarytooltip %} install with the --no-dev option. (Only developers who contribute to the Magento codebase typically use composer install.) <a href="https://github.com/magento/magento2/issues/2561" target="_blank"> (GITHUB-2561)</a>

<!--- 47931-->* A quick edit of a CMS page no longer switches the store view to the default store.

<!--- 53352-->* Resolved an exception during setup or upgrade that resulted from a non-existent directory.

<!--- 51015-->* You can now use an empty value for a non-required configurable swatch attribute.

<!--- 48079-->* Resolved issues with shipping providers for one-page checkout.

<!--- 48094-->* Updated packages on repo.magento.com to remove conflicts between {{site.data.var.ce}} and {{site.data.var.ee}} components.

<!--- 48171-->* User notifications work as expected.

<!--- 47881-->* Removed the listing of arguments from Magento\Framework\DataObject::__call() - print_r() to avoid memory leaks.

<!--- 46039-->* You can now apply a Catalog Price rule  to a product created using the Web API. 

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

<!--- 53267-->* We've corrected errors with currency codes in invoices.  <a href="https://github.com/magento/magento2/issues/4264" target="_blank"> (GITHUB-4264)</a>


<!--- 53320-->* Invoice amounts now display the currency symbol of the currency used on the store view.

<!--- 53395-->* Magento no longer displays Payment Review {% glossarytooltip ab517fb3-c9ff-4da8-b7f9-00337c57b3a5 %}order status{% endglossarytooltip %}  to the customer after the Authorize.net  Fraud filters are triggered.

<!--- 52552-->* Invoice status now reflects the status of the captured saved invoice. <a href="https://github.com/magento/magento2/issues/4385" target="_blank"> (GITHUB-4385)</a>

<!--- 53316-->* The eWay capture transaction no longer closes after creating a partial refund.  

<!--- 52775-->* Magento now saves the values for product attributes of type "Multiple Select" during update.  <a href="https://github.com/magento/magento2/issues/4346" target="_blank"> (GITHUB-4346)</a>, <a href="https://github.com/magento/magento2/issues/4312" target="_blank"> (GITHUB-4312)</a>, <a href="https://github.com/magento/magento2/issues/4545" target="_blank"> (GITHUB-4545)</a>

<!--- 53162-->* Magento no longer ignores tax when calculating totals for the shopping cart and checkout.

<!--- 51815-->* Fixed an issue with unexpected behavior of  the Password Strength Validator on Create Customer Storefront page.

<!--- 52605-->* Cache behavior on checkout now works as expected (the only pages  uncached  belong to the order (products and category of the products). <a href="https://github.com/magento/magento2/issues/4222" target="_blank"> (GITHUB-4222)</a>


<!--- 53527-->* Fixed issue with the sign-in modal overlay on the checkout page. <a href="https://github.com/magento/magento2/issues/4083" target="_blank"> (GITHUB-4083)</a>

<!--- 52785-->* The Save button now works as expected on the Category Edit page after you've manipulated  CatalogPermissions elements.

<!--- 53223-->* Setting Merge {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} Files = Yes no longer erodes Magento performance.  <a href="https://github.com/magento/magento2/issues/4710" target="_blank"> (GITHUB-4710)</a>

<!--- 53157-->* Image previewer now works with images that contain spaces in their name.   

<!--- 53489-->* The `setStoreId` method now checks for StoreInterface and Store.

<!--- 53034-->* Dynamic Rows are now draggable.

<!--- 53299-->* Fixed issue with the Go Today button  not working for the dates range component.

<!--- 54043-->* Magento no longer prompts you to select a dropdown attribute after you've  selected one. <a href="https://github.com/magento/magento2/issues/4899" target="_blank"> (GITHUB-4899)</a>

<!--- 52993-->* The Media Uploader error messages now make clear that we do not support SVG format. <a href="https://github.com/magento/magento2/issues/2958" target="_blank"> (GITHUB-2958)</a>

<!--- 51929-->* The Web Setup Wizard now works when Magento is installed in `/pub`. <a href="https://github.com/magento/magento2/issues/4159" target="_blank"> (GITHUB-4159)</a>

<!--- 52766-->* Fixed issue with template minification on the product frontend. <a href="https://github.com/magento/magento2/issues/4365" target="_blank"> (GITHUB-4365)</a>

<!--- 53795-->* Added support for Chinese currency code for UPS shipping method. <a href="https://github.com/magento/magento2/issues/4578" target="_blank"> (GITHUB-4578)</a>

<!--- 50972-->* Move to Shopping Cart action does not work inside creation offline order.  

<!--- 53773-->* The Price vs. Destination value for the condition field in the Table Rate Shipping method now works as expected.  

<!--- 46014-->* Magento now displays error messages on the page where the error occurred.


<!--- 54172-->* Magento now creates product URL rewrites as expected on mass update to a new website.

<!--- 52923-->* Switching to Varnish causes category menu to force HTTPS links. <a href="https://github.com/magento/magento2/issues/4540" target="_blank"> (GITHUB-4540)</a>

<!--- 54051-->* You can now log in to the product frontend when inline translation is enabled. <a href="https://github.com/magento/magento2/issues/4925" target="_blank"> (GITHUB-4925)</a>

<!--- 45613-->* Magento now uses the XML schema location in both the `etc/adminhtml/system.xml`  and the `Magento/Config/etc/system_file.xsd` schema. <a href="https://github.com/magento/magento2/issues/2372" target="_blank"> (GITHUB-2372)</a>  

<!--- 46966-->* Magento now reads the `.xml config` files during setup. <a href="https://github.com/magento/magento2/issues/2725" target="_blank"> (GITHUB-2725)</a>

<!--- 46927-->* Categories path for product URLs now working for Sample Data. <a href="https://github.com/magento/magento2/issues/2619" target="_blank"> (GITHUB-2619)</a>

<!--- 46922-->* SynchronizePersistentInfoObserver is no longer subscribed to a nonexistent event. <a href="https://github.com/magento/magento2/issues/2693" target="_blank"> (GITHUB-2693)</a>

<!--- 46918-->* Fixed possible memory leak in `\Magento\Framework\Image\Adapter\Gd2`. <a href="https://github.com/magento/magento2/issues/2696" target="_blank"> (GITHUB-2696)</a>

<!--- 46877-->* Fixed issue with selecting a product template for a configurable attribute. <a href="https://github.com/magento/magento2/issues/2567" target="_blank"> (GITHUB-2567)</a>

<!--- 46413-->* The Code Migration tool now recognizes all Magento 1.x resource models and collection classes.

<!--- 46328-->* You can now print both shipment and invoice information from My Orders page. <a href="https://github.com/magento/magento2/issues/2500" target="_blank"> (GITHUB-2500)</a>


<!--- 46326-->* Corrected invalid user error message. <a href="https://github.com/magento/magento2/issues/2263" target="_blank"> (GITHUB-2263)</a>

<!--- 47431-->* Fixed issue in the `$product->load($id)` method for specific products. <a href="https://github.com/magento/magento2/issues/2800" target="_blank"> (GITHUB-2800)</a>

<!--- 54051-->* You can now log in on the product frontend when inline translation is enabled. <a href="https://github.com/magento/magento2/issues/4925" target="_blank"> (GITHUB-4925)</a>

<!--- 48089-->* Undeclared dynamic property is no longer leaked in public space. <a href="https://github.com/magento/magento2/issues/2103" target="_blank"> (GITHUB-2103)</a>






*  <i>Fixed GitHub issue <a href="https://github.com/magento/magento2/issues/4917" target="_blank"> (GITHUB-4917)</a> removed.</i>


*  <i>Fixed GitHub issue <a href="https://github.com/magento/magento2/issues/4434" target="_blank"> (GITHUB-4434)</a> removed.</i>

* <i>Fixed GitHub issue  <a href="https://github.com/magento/magento2/issues/2910" target="_blank"> (GITHUB-2910)</a> removed.</i>


*  <i>Fixed GitHub issue  <a href="https://github.com/magento/magento2/issues/3053" target="_blank"> (GITHUB-3053)</a> removed. </i>

* <i>Fixed GitHub issue  <a href="https://github.com/magento/magento2/issues/2946" target="_blank"> (GITHUB-2946)</a> removed. </i>

*  <i>Fixed GitHub issue   <a href="https://github.com/magento/magento2/issues/2711" target="_blank"> (GITHUB-2711)</a> removed.</i>

* <i>Fixed GitHub issue <a href="https://github.com/magento/magento2/issues/2121" target="_blank"> (GITHUB-2121)</a> removed. </i>

* <i>Fixed GitHub issue <a href="https://github.com/magento/magento2/issues/3605" target="_blank"> (GITHUB-3605)</a>  removed.</i>

* <i>Fixed GitHub issue <a href="https://github.com/magento/magento2/issues/59" target="_blank"> (GITHUB-59)</a>  removed.</i>

* <i>Fixed GitHub issues <a href="https://github.com/magento/magento2/issues/4548" target="_blank"> (GITHUB-4548)</a>, <a href="https://github.com/magento/magento2/issues/2735" target="_blank"> (GITHUB-2735)</a>, <a href="https://github.com/magento/magento2/issues/4275" target="_blank"> (GITHUB-4275)</a>, <a href="https://github.com/magento/magento2/issues/3529" target="_blank"> (GITHUB-3529)</a> removed. </i>

### System requirements

Our technology stack is built on PHP and MySQL. Magento 2.1.0 supports:

* PHP 5.6
	We do not support PHP 5.5.x
* PHP 7.0.2, 7.0.6 up to 7.1
* MySQL 5.6
*	Apache 2.2 or 2.4
*	nginx 1.8 (or <a href="http://nginx.org/en/linux_packages.html#mainline" target="_blank">latest mainline version</a>)


For more information, [System Requirements]({{ site.baseurl }}/magento-system-requirements.html){:target="_blank"}.

### Installation and upgrade instructions

You can install Magento Open Source 2.1.0 (General Availability) release either Github or by using Composer.

{% include install/releasenotes/ce_install_21.md %}

## Migration toolkits

The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

<!--- NOT DOCUMENTING THE FOLLOWING
-- All issues marked as DUPLICATE. WONT FIX, CANNOT REPRODUCE, and NOT A BUG, plus 52239, 50665, 51578, 52667-->


<!--- OMITTED  ISSUES --->



<!--- 54588,54464, 51379, 54582, 52167, 52246,50178, 50537, 52865, 50037, 50499, 42577,52666, 50797, 50790, 50806, 50286, 50875, 51669, 50300, 50835, 50816,52791,52624,52496, 49771, 49536, 49079, 49452, 48557, 48713, 48305, 48732, 42184, 53784, 53466, 45365, 45728, 45256, 46466, 46414, 46397, 47514, 47513, 47442, 47442, 47443, 47288, 47122, 47104, 47693, 47651, 51403, 51389, 51754, 51569, 50875, 52073, 52438, 52535, 49720, 49595, 49572, 49481, 53525, 48214, 53922, 53783, 52781, 52478, 53293, 53293, 53689, 53003, 54031, 50985, 53398, 50504, 48049, 54582, 54588, 54582, 53095, 48643, 54123, 46832, 47679, 49938, 49924, 46415, 46325, 46415, 52093, 53474, 47301, 50558, 50411, 52311  -->
