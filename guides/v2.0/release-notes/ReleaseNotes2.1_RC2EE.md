













---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento EE 2.1 Release Candidate 2 Release Notes 
menu_title: Magento EE 2.1 Release Candidate 2 Release Notes 
menu_order: 12
github_link: release-notes/ReleaseNotes2.1RC2EE.md
---

<h2>Magento Enterprise Edition 2.1, Release Candidate 2</h2>
We are pleased to present Magento 2.1 RC2. This release candidate build is not intended for production purposes. Instead, it provides a preview of the new features and fixes that Magento 2.1 GA will contain.

This candidate release also offers the development community an opportunity to contribute to the Magento 2.1 code base by identifying unresolved issues. We welcome your participation in this process on GitHub! For more information on how to contribute on GitHub, see <a href="{{ site.gdeurl }}contributor-guide/contributing.html" target="_blank">Code contributions</a>. 

This Release Candidate is available only on GitHub and `www.repo.magento.com`. 

<h3>Highlights</h3>

Magento Enterprise Edition 2.1 includes several new and exciting features:

* **Content Staging and Preview** improves productivity by enabling business teams to easily create, preview, and schedule a wide range of content updates without involving IT. Merchants can make updates to products, categories, CMS content, promotions, and pricing and can preview these changes based on specific dates and times or store views. User-friendly dashboards provide greater visibility into all planned site changes and updates can be automatically deployed at scheduled times.
 
* **Elasticsearch is a next-generation search technology** that is replacing Solr in Magento Enterprise Edition 2.1. It is simpler to set up, able to handle large catalogs, and can easily scale as search volume grows. It supports 33 languages out-of-the-box and merchants can configure stop words and synonyms to ensure high quality search results. 

* **PayPal enhancements** include PayPal in-context checkout and saved credit cards. In-context checkout helps to increase conversion rates 69 bps by allowing shoppers to pay with PayPal without leaving the merchant’s site. PayPal saved credit cards boost repeat purchases by allowing merchants to securely store credit card information with PayPal so customers do not need to re-enter it in checkout or when reordering items from the Admin interface.
 
* **Braintree enhancements enable merchants to qualify for the simplest set of PCI compliance** requirements by using Braintree Hosted Fields to collect all sensitive cardholder information in checkout. Merchants retain complete control over their checkout style and layout because Braintree uses small, transparent iframes to replace individual payment fields. Merchants can now also access Braintree settlement reports from within the Magento Admin interface.
 
* **Improved management interfaces** make it faster and easier to search for information in the Admin, set up global search synonyms, and create new product, category, and CMS content.
 


<h3>Known issues</h3>
Magento 2.1 RC2 includes the following known issues. Workarounds are noted when available. 


<!--- 53536 -->Impossible to update Magento 2.0.x to Magento 2.1.x with Sample Data. 



<h3>Fixed issues</h3>

<!--- P0 issues -->

<!--- 51068 --> * Admin User sessions no longer expire prematurely in installations running Redis for session storage. Previously, you were directed back to the login page after logging in to the Admin panel, waiting a short period time (less than the Admin Session Lifetime value), and trying to navigate to the Dashboard. 

<!--- 51066 --> * Magento now returns available services in WSDL schema.  Previously, you could not process SOAP requests as expected. (51066)

<!--- 51280 --> * Magento no longer duplicates a campaign each time you edit it. Previously, Magento would duplicate a campaign record whenever you selected it from its existing Scheduled Update. EE (51280) 

<!--- 51443 --> * Product update is now applied as expected.  (51443) EE

<!--- 51440 --> * Fatal errors no longer occur while running CLI commands after compilation on some regression environments. (51440) 

<!--- 51407 --> * You can now save a product after applying an update for it. (51407) 

<!--- 51378 --> * Message serialization now complies with AMPQ specifications. (51378) 

<!--- 50768 --> *  Newly created categories now appear as expected on the Navigation menu. (50768)

<!--- 50755 --> * Reflected XSS (50755) 


<!--- 53829 --> * Magento no longer references empty targets in other targets.(53829)



<!--- P1 issues -->




<!--- 50987 --> * You can now run all integration tests in  developer mode. (50987) 

<!--- 50915 --> * Solr no longer produces a fatal error when you use it to perform an advanced search by Size. (50915) 


<!--- 51278 --> * Magento no longer creates a new single update when you edit an  existing update. (51278) EE

<!--- 51252 --> * You can now successfully save an update created for a category with a changed name. (51252) 

<!--- 51238 --> * Category pages now display swatches of configurable products based on color swatch attribute. (51238) 


<!--- 51231 --> * (51231) Invalid date when save special price date in future. Step To Reproduce:
Create product with all required fields
Go to Advanced Price
Fill Special Price
Set Special Price From and Special Price To to today date
Save Product
Open Product
Go to Advanced Price
Set Special Price From and Special Price To to tomorrow date
Save Product
Actual Result:
Get error Invalid date
Expected Result:
Product saved success

<!--- 51194 --> * (51194) In new update for Bundle product: click on Add Products to Option does not open modal window. Steps to reproduce:
1. Create bundle product with some options
2. Start to create update for this product
3. Try to add options by clicking on 'Add Products to Option'

(/) Expects result:
- Modal is opened;

(x) Actual result:
- Modal is not opened. require('uiRegistry').get('catalogstaging_update_form.catalogstaging_update_form.bundle_data.modal') in console returns undefined.

<!--- 51413 --> * (51413) Remove usages of DummyAttributeLoader. 

<!--- 51751 --> * (51751)Unable to filter by date Product Reviews report. Log in to Admin
Go to Reports > By Products
Fill any data in "From" and "To" for Last Review
Click Search button
 Following exception appears "Exception #0 (Magento\Framework\Exception\LocalizedException): Invalid attribute name: last_created"
 No exceptions appeared, reviews can be filtered by date


<!--- 51731 --> * Catalog Price Rules are now applied as expected, depending upon the time frame  stated in the Price Rule. (51731) 


<!--- 51519 --> * Category permissions set for a category are now applied as expected. (51519)  EE


<!--- 51684 --> * (51684) When you run a command file with timestamp in name being created in var/generation. When you run a cli command it checks write access to var/generation folder by creating file under var/generation timestamp used as a name. This file not being removed.


<!--- 51642 --> * After you install and enable a module, the System->Extensions->Integrations page lists the new Integration generated by the module. (GITHUB-4023) (51642) 


<!--- 51596 --> * Phrases with escaped slash characters are now translated. Previously, if a phrase were wrapped with single quotes, Magento would not display it correctly. (51596) 

<!--- 50701 --> * (50701) Products are absent on storefront if used SOLR search adapter. 2. Create product
3. Open Category in frontend
Actual result: product is absent in category
 After run full reindex products appears on frontend EE

<!--- 50898 --> * (50898) [Add Product to Cart with Minimum Qty Allowed Set] No error message when qty is less than minimum. Create new simple product and set minimum qty allowed equals 3
Steps To Reproduce:
go to product page on storefront
set qty field to 1
push "add to cart" button
Expected Result:
"The minimum you may purchase is 3." message appears
Actual Result:
"You added Simple Product to your shopping cart." message appears and there are 3 products in shopping car

<!--- 52030 --> * (52030) Downloadable product show as out of stock in category page. Create downloadable product and assign it to category
2. Open Category on frontend
 Actual result: Downloadable product show as Out Of Stock


<!--- 52000 --> * (52000) [Github][PR]impossible to see what is wrong with cron - unhelpful error message #3189. 

<!--- 52438 --> * (52438) Admin Create Product scenario throwing error on Downloadable product

<!--- 52117 --> * (52117) Customer group is not changed for logged in customer. Category cannot be opened as it is denied by permissions. Customer group change is applied for logged in customer instantly. For example, Create new customer for group General
Enable category permissions in config (Stores -> Configuration -> Catalog -> Category Permissions)
Create some category
Set permissions DENY ALL for customer group Wholesale


<!--- 52078 --> * (52078) Impossible to save product with custom options. Add all types of customizable options to simple product
Click Save
Actual
Nothing happens, product is not saved, no error message


<!--- 52073 --> * (52073) Cannot run 'Admin Edit Product - Duration' scenario due to StackOverflowError. INTERNAL ONLY?

<!--- 53352 --> * (53352) Create regenerate only if var folder exists. 

<!--- 51181 --> * (51181) [GITHUB] Configurable product's last attribute with price zero results in error #3912. the product is not shown. The system.log displays the error message: main.CRITICAL: Configurable product "flowers" do not have sub-products [] []
Expected Result
 the product is shown with a zero (0) price. The user can configure the product, and the correct price results.


<!--- 52340 --> * (52340) Gift Message Data for Sales Order not available for retrieval using API. acceptable solution for now is to update documentation of ALL getList operations in the service layer. We need to explicitly specify there that getList operation will return only essential fields, for receiving detailed information, get method should be used. 


<!--- 53220 --> * (53220) [Staging] Unable to create temporary update from permanent one. create simple product A
add scheduled update A-A for this product with start date tomorrow (no end date)
save update
go to Content > Staging/Dashboard
edit A-A update: put end date - day after tomorrow, save update. Update is displayed as temporary update on dashboard
wait one minute (until cron works)
refresh Staging Dashboard
 Actual result
A-A update is displayed now as permanent (without end date)
click to edit A-A update. Error appears: This update not exists
 Expected result
It is possible to add end date to existing permanent update and it works correctly

<!--- 50257 --> * (50257) Unable to unset optional dropdown product attribute. If an attribute is optional it should be possible for it to be blank. This is the case if an attribute option has never been selected. However, after selecting any of the options the admin user is unable to clear their selection, only select another option.
Steps to reproduce:
1. Add several attribute options to "manufacturer" attribute 
2. Add "manufacturer" attribute to default attribute set 
3. Create new product, select one of the options for manufacturer, save 
4. Edit product
Expected result:
Admin user will see manufacturer dropdown with selected option and can select the "blank" value at the top of the dropdown to unset the manufacturer attribute.
Actual result:
Admin user will see manufacturer dropdown with selected option and does not find a "blank" value at the top of the dropdown. Therefore it is not possible to unset the manufacturer attribute.

<!--- 51008 --> * (51008) Unable to process data upgrade when Google Analytics's "Content Experiments" enabled. Install old version of Magento (2.0.2, for example)
Go to Stores -> Configuration -> Sales -> Google API
Enable Google Analytics
Set "Enable Content Experiments" to "Yes"
Save Config
Checkout code to actual version of Magento
Clean caches and run php bin/magento setup:upgrade (or php bin/magento setup:db-data:upgrade to go directly to data upgrade step)
 Expected result:
Data migrated successfully
 Actual result:
Exception was thrown: "Wrong request parameters"

<!--- 53468 --> * (53468) [Github] Cart custom shipping methods not updating when address changed #4679. Install Magento from develop branch.
Enable custom shipping methods added through extension.
Disable all built in shipping methods (i.e. UPS).
Add an item to your cart from the store front end.
Go to checkout.
Shipping methods show "Sorry, no quotes are available for this order at this time"
Enter an address.
Expected result
The shipping methods should update and list rates for the custom shipping methods.
Actual result
Shipping methods still shows "Sorry, no quotes are available for this order at this time"
This was fixed for built in methods such as UPS, but does not work for custom shipping method

<!--- 53131 --> * (53131) Cannot view configurable product when using sample data. 

<!--- 51611 --> * (51611)Layered navigation include list of all product attributes. Install Magento with Sample Data
2. Open Frontend
3. Go to Men->Bottoms->Pants
Actual Result: LN contain attributes without result and attributes that not relevant product attribute s

<!--- 53193 --> * (53193) Selected address issue on Checkout. My billing and shipping address are the same

<!--- 53217 --> * (53217) Error occurred during "save_in_address_book" processing" error during checkout with not saved address. (customer with exisiting saved address in account ttries to add a new address while ordering)

<!--- 53464 --> * (53464) Reorder not load products. Open order
Click reorder button
Expected result:
 Block products has product
Actual result:
 Products empty
 
 When persistent shopping cart is enabled


<!--- 53307 --> * (53307) Checkout is broken when purchasing products on persisted session. Got to storefront as customer (check Remember me checkbox)
2. Add product to cart
3. Sign out
4. Not you not logged in, but your persistence session is still active
5. Add product to cart
6. Try to Proceed to checkout through mini cart or shopping cart
Actual result:
 Empty checkout page is displayed
 Order summary block is not working on cart page
Expected result:
 Checkout can be performed
 Order summary block works

<!--- 53397 --> * (53397) \Magento\Quote\Model\ShippingMethodManagement::estimateByAddressId set not full address details. The collectRates() method can't obtain full address details for registered customer, when customer opens Checkout page with exists shipping address at first.

<!--- 53049 --> * (53049) Unexpected login popup after clicking "Go to Checkout" button. Go to Storefront
Add simple product to the shopping cart
Open shopping cart page
Click Go to Checkout button before Summary Block is fully loaded
 Checkout page is opened
 Checkout method popup is appeared

<!--- 53398 --> * (53398) [Staging] CatalogRuleStaging autotests still fail. EE OMIT??

<!--- 52963 --> * (52963) There is no ability to create future update for Downloadable product with links and file content. Go to Admin, Products > Catalog
Open Downloadable product from preconditions
Click Schedule New Update
Create new Update for some future date
Save
 Actual Result:
Error message: "error: : Provided Downloadable link is not related to given product."
Update is not saved
 Expected Result: Update is saved without any errors

<!--- 53463 --> * (53463) Customer Addresses empty after order create. Steps to reproduce:
Open Sales-> Order. Click Create New Order
Select customer
Select website2 store (even customer was registered in default website)
Select product and place order
Expected result:
 Order created
Open Customers-> All Customers
Expected result:
 customer with same email was created for website2
Open customer from default website
Click Addresses tab
Expected result:
 Addresses exists
Actuall result:
 Addresses disappears

<!--- 52959 --> * (52959) [GITHUB] Add logo folder to list of allowed resources #4078. This change fixes an issue where the logo folder isn't an allowed resource! If you're using my S3 file storage extension or even just Magento's built-in database file then you'll find that you'll get a 404 error even though the file exists!

<!--- 53119 --> * (53119) "Force Sign-In" is not clickable. Nothing happens when "Force Sign-In" button is clicked in the admin panel on customer edit page. See expected behavior in related testcase.

<!--- 53019 --> * (53019) [Performance]: Unexpected calls are made if view product on storefront. Register customer on storefront
Open category
Open product
Observe network calls in browser console
Actual:
 Unexpected calls

<!--- 53025 --> * (53025) Duplicating cms/page entity when cancel CMS Page "Shedule update" and save cms page. Go to existent page
Create any scheduled update for that page
Save current Cms Page
Edit the same CMS Page and click on the same CMS Page Schedule Update
Actual behaviour:

Got error: 
https://yadi.sk/i/tbmRjtPsrq3HY
Item (Magento\Cms\Model\Page) with the same ID "9" already exists.
Expected behaviour:

Editable Cms Page Schedule Update without data
 
<!--- 53025 --> * (53536) Update does not exist when changing update End Time. Create entity (cms page, product, e.g.)
Create schedule update for this entity without End Time
Steps
Go to created schedule update and add End Time.
Click Save
Expected Result

Popup with update closed and success message appear
Actual Result:

Message: "Update (or link, if we are using downloadable product) does not exists" (EE)

<!--- P2 GITHUB -->


<!--- 51903 --> * There is no ability to reorder product with required custom option(type = file) #4058 Magento 2 CE is installed from public GitHub
Simple product with required custom option type=file is created
Customer is created
Steps to reproduce
Go to Storefront as Customer from preconditions
Open Simple product page
Upload some file, e.g. image
Add the product to cart
Proceed to Checkout and place order
 Order successfully placed
Go to My Account > My Orders
Select last order and click "Reorder"
 Actual result
File from for custom option is not presented/assigned
Shopping cart is opened with error messages:

(GITHUB-4058)

<!--- 52832 --> * Bundle Products - error with quotation mark in product option name. While migrating products from Magento to Magento 2 we've encountered an error related to Bundle Products.
Steps to reproduce
Go to Magento admin panel.
Crate a bundle product with quotation mark in it's name.
Go to frontend and check if the quotation marks appears in product options dropdown, on bundle product page.
Expected result
Quotation marks will stay unchanged for bundle options names. 
Example: Test Product 11" x 15"
Screenshot:
Actual result
Quotation marks are being translated into HTML Entity & quot; 
Example: Test Product 11 & quot; x 14 & quot;
(GITHUB-4414) (52832)

<!--- 53362 --> * Gift Message information is now present as expected in the extension_attributes section when you request this list by Web API.  Previously, if you placed order with a Gift Message, and then performed WebAPI request to get the list of orders, Gift Message information would be absent in the extension_attributes section.(GITHUB-4309) (53362)


<!--- 52782 --> * The `getPassword()` and `getPasswordConfirm()` methods now return the `password` and `passwordconfirm` parameters as strings. (GITHUB-4355)(52782)



<h3>Technology stack</h3>

Our technology stack is built on PHP and MySQL. Magento 2.1 RC2 supports PHP 5.6 and 7.0.2, and MySQL 5.6.

We do not support PHP 5.5.x. 


<h3>Installation instructions</h3>

You can install Magento Enterprise Edition 2.1 Release Candidate 2 (RC1) using Composer. 

This Release Candidate is for test purposes only. Do not install it in a production environment.

<div class="bs-callout bs-callout-warning">
    <p>We did not publish sample data for RC2. Do not attempt to install RC2 sample data or upgrade to RC2 if you already have sample data (you can, however, perform a fresh RC2 installation in a different location in your web server's docroot).</p>
</div>


#####<b>Install using Composer</b>#####
This Release Candidate is available from `repo.magento.com`. Before installing this Release Candidate using Composer,  familiarize yourself with these  <a href="{{ site.gdeurl }}install-gde/prereq/integrator_install.html" target="_blank">prerequisites</a>, then run:

		composer create-project --repository-url=https://repo.magento.com/ magento/project-enterprise-edition=2.1.0-rc2 <installation directory name>

<h4><b>Upgrade existing installations</b></h4>
<!-- If you installed Magento Community Edition 2.0.0 from an archive, you must perform some additional tasks before you can upgrade your installation. Current users of Magento 2.0.0/2.0.1/2.0.2/2.0.3/2.0.4/2.0.5/2.0.6 must first update the installer from the command line.  -->

This section discusses how to upgrade to a Release Candidate.

<div class="bs-callout bs-callout-warning">
    <p><em>Do not</em> upgrade to a Release Candidate on a production system. Upgrade to a Release Candidate on a development system only.</p>
</div>

**Upgrade using the Setup Wizard**
Use the instructions in [Start System Upgrade]({{ site.gdeurl }}comp-mgr/upgrader/upgrade-start.html). When prompted to choose a version, choose a Release Candidate.

**Upgrade an existing installation from the GitHub repository**
Developers who contribute to the CE codebase can <a href="{{ site.gdeurl }}comp-mgr/bk-compman-upgrade-guide.html" target="_blank">upgrade manually</a> from the Magento CE GitHub repository.

1.	Go to the <a href="{{ site.gdeurl }}install-gde/install/cli/dev_update-magento.html" target="_blank">Contributing Developers</a> page.

2.	Follow the instructions to pull the updates from the repository and update using Composer.

**Upgrade using the command line**
To upgrade to a Release Candidate using the command line:

1.	Log in to your Magento server as, or switch to, the Magento file system owner.
2.	Change to the directory in which you installed the Magento software.

	For example, `cd /var/www/html/magento2`
2.	Enter the following command to disable the cache:

		php bin/magento cache:disable
2.	Enter the following commands in the order shown:

		composer require <product> 2.1.0-rc2 --no-update
		composer update

	To upgrade to Magento CE 2.1 RC1, enter:

		composer require magento/product-community-edition 2.1.0-rc2 --no-update
		composer update

	To upgrade to Magento EE 2.1 RC1, enter:

		composer require magento/product-enterprise-edition 2.1.0-rc2 --no-update
		composer update
	
3.	If prompted, enter your [authentication keys]({{ site.gdeurl }}comp-mgr/prereq/prereq_auth-token.html).
4. Update the database schema and data:

		php bin/magento setup:upgrade
5.	Enter the following command to enable the cache:

		php bin/magento cache:enable
<h3>Migration toolkits</h3>
The <a href="{{ site.gdeurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ site.gdeurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.











