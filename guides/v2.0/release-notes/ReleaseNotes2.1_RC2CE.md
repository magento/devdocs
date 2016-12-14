---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento CE 2.1 Release Candidate 2 (RC2) Release Notes 
menu_title: Magento CE 2.1 Release Candidate 2 (RC2) Release Notes 
menu_order: 230
version: 2.0
github_link: release-notes/ReleaseNotes2.1_RC2CE.md
---

<h2>Magento Community Edition 2.1 Release Candidate 2 (RC2)</h2>
We are pleased to present Magento 2.1 Release Candidate 2 (RC2). This release candidate build is not intended for production purposes. Instead, it provides the development community opportunities to: 

* preview the new features and fixes that Magento 2.1 GA will contain

* contribute to the Magento 2.1 code base by identifying unresolved issues

* test your 2.0 extensions against  2.1 

We welcome your participation in this process!  Please open any Community Edition issues or Pull Requests on the Community Edition GitHub repository. For more information on how to provide feedback and contribute on GitHub, see <a href="{{page.baseurl}}contributor-guide/contributing.html" target="_blank">Code contributions</a>.

Backward-incompatible changes are documented in <a href="{{ site.gdeurl21 }}release-notes/backward-incompatible-changes-2.1.html" target="_blank">Magento 2.1 Backward Incompatible Changes</a>.
 

<h3>Highlights</h3>

Magento Community Edition 2.1 includes several new and exciting features:

* **PayPal enhancements** include PayPal in-context checkout and saved credit cards. In-context checkout helps to increase conversion rates 69 bps by allowing shoppers to pay with PayPal without leaving the merchant’s site. PayPal saved credit cards boost repeat purchases by allowing merchants to securely store credit card information with PayPal so customers do not need to re-enter it in checkout or when reordering items from the Admin interface.
 
* **Braintree enhancements enable merchants to qualify for the simplest set of PCI compliance** requirements by using Braintree Hosted Fields to collect all sensitive cardholder information in checkout. Merchants retain complete control over their checkout style and layout because Braintree uses small, transparent iframes to replace individual payment fields. Merchants can now also access Braintree settlement reports from within the Magento Admin interface.
 
* **Improved management interfaces** make it faster and easier to search for information in the Admin, set up global search synonyms, and create new product, category, and CMS content.
 


<h3>Known issues</h3>
Magento Community Edition 2.1, Release Candidate 2 includes the following known issues: 


<!--- 53169 --> * Magento does not apply the Cart Price or Catalog Price sales rules accordingly to the store  website's timezone, as expected.


<!--- 53536 -->* You cannot update from Magento 2.0.x to Magento 2.1.x with Sample Data. 



<h3>Fixed issues</h3>

<!--- P0 issues -->
<h4>Checkout</h4>
<!--- 53193 --> * Several address-related issues associated with Checkout have been resolved. 


<!--- 53217 --> * Customers with an existing saved address can now add a new address during checkout.  

<!--- 53464 --> * Clicking the Reorder button now loads products as expected when persistent shopping cart is enabled.

<!--- 53049 --> * The Go to Checkout button now works as expected. Previously, when you clicked the Go to Checkout button, Magento would display a login pop-up window. 

<!--- 53307 --> * Checkout now works as expected when purchasing products during a persisted session.



<h4>Bundle products</h4>

<!--- 51194 --> * The Add Products to Option button now works as expected when you create a new update for a Bundle product.

<!--- 52832 --> * Quotation marks can now be included in Bundle product names. <a href="https://github.com/magento/magento2/issues/4414" target="_blank"> (GITHUB-4414)</a>




<h4>Miscellaneous</h4>
<!--- 50755 --> * Reflected cross-site scripting (XSS) can no longer occur through the Authorizenet module’s redirect data.  

<!--- 51068 --> * Admin User sessions no longer expire prematurely in installations running Redis for session storage. Previously, you were directed back to the login page after logging in to the Admin panel, waiting a short period time (less than the Admin Session Lifetime value), and trying to navigate to the Dashboard.

<!--- 51066 --> * Magento now returns available services in WSDL schema.  Previously, you could not process SOAP requests as expected. 

<!--- 51440 --> * Fatal errors no longer occur when running CLI commands after compilation in some regression environments. 

<!--- 51407 --> * You can now save a product after applying an update for it. 


<!--- 50768 --> * Newly created categories now appear as expected on the Navigation menu.


<!--- 53829 --> * Magento no longer references empty targets in other targets.


<!--- 50987 --> * You can now run all integration tests in developer mode. 


<!--- 51238 --> * Category pages now display swatches of configurable products based on color swatch attribute. 


<!--- 51231 --> * Magento now successfully saves future special dates in the Advanced Price page.




<!--- 51751 --> * You can now filter entries in the Product Reviews report by date. 

<!--- 51731 --> * Catalog Price Rules are now applied as expected, depending upon the time frame  stated in the Price Rule.  



<!--- 51519 --> * The permissions set for a category are now applied as expected.



<!--- 51642 --> * After you install and enable a module, the System > Extensions > Integrations page lists the new Integration generated by the module. <a href="https://github.com/magento/magento2/issues/4023" target="_blank"> (GITHUB-4023)</a>


<!--- 51596 --> * Phrases with escaped slash characters are now translated. Previously, if a phrase were wrapped with single quotes, Magento would not display it correctly.


<!--- 52030 --> * Downloadable products are no longer shown as out of stock on the Category page. 


<!--- 52117 --> * Changes to Customer group are now immediately applied to logged-in customers. 


<!--- 52078 --> *  You can now successfully save products with custom options.


<!--- 51181 --> *  You can now configure a product whose last attribute has a price of zero, and the correct total price results. <a href="https://github.com/magento/magento2/issues/3912" target="_blank"> (GITHUB-3912)</a> 


<!--- 50257 --> *  Optional dropdown product attributes can now be left blank.


<!--- 51008 --> *  Magento now successfully migrates data when Google Analytics's "Content Experiments" is enabled. 

<!--- 53468 --> *  Cart now updates and lists rates for custom shipping methods as expected when you change the shipping address. <a href="https://github.com/magento/magento2/issues/4679" target="_blank"> (GITHUB-4679)</a> 

<!--- 53131 --> * You can now view configurable products when using sample data. 

<!--- 51611 --> * Layered navigation now includes a list of all product attributes.


<!--- 53397 --> * The `collectRates()` method now obtains the full address details for a registered customer.

<!--- 53463 --> * The Customer Address tab is populated as expected after you create a new order. Previously, Magento did not list addresses on this tab when you'd create a new order. 


<!--- 52959 --> * Logo folders have been added to the list of allowed resources. <a href="https://github.com/magento/magento2/issues/4078" target="_blank"> (GITHUB-4078)</a> 

<!--- 53119 --> * The Force Sign-in button now works as expected. 

<!--- 53019 --> * Magento no longer makes unexpected calls when you view a product in the storefront. 


<!--- 51903 --> * You can now reorder a product with a required custom option (type = file). Previously, if you tried to reorder a product under these conditions, you would encounter an error when opening the shopping cart.
<a href="https://github.com/magento/magento2/issues/4058" target="_blank"> (GITHUB-4058)</a> 


<!--- 53362 --> * Gift Message information is now present as expected in the `extension_attributes` when you request this list by Web API.  Previously, if you placed an order with a Gift Message, and then performed a Web API request to get the list of orders, Gift Message information would be absent in the `extension_attributes`. <a href="https://github.com/magento/magento2/issues/4039" target="_blank"> (GITHUB-4309)</a> 


<!--- 52782 --> * The `getPassword()` and `getPasswordConfirm()` methods now return the `password` and `passwordconfirm` parameters as strings. <a href="https://github.com/magento/magento2/issues/4355" target="_blank"> (GITHUB-4355)</a>



<h4>Messages and documentation</h4>

<!--- 52340 --> * The `getList` method documentation has been enhanced. 

<!--- 52000 --> * Error messages associated with `cron` processes are now more helpful. <a href="https://github.com/magento/magento2/issues/3189" target="_blank"> (GITHUB-3189)</a>

<!--- 50898 --> * Magento now displays an appropriate  message when you add less than the required minimum items in your cart. 

<!--- 51378 --> * Message serialization now complies with AMPQ specifications. 



<h3>Technology stack</h3>

Our technology stack is built on PHP and MySQL. Magento 2.1 RC3 supports:

* PHP 5.6
* PHP 7.0.2
* PHP 7.0.6 + up until 7.1
* MySQL 5.6.

We do not support PHP 5.5.x or 7.0.5.  


## Installation and upgrade instructions
You can install Magento Community Edition 2.1 Release Candidate 1 (RC1) from either Github or by using Composer. 
This Release Candidate is for test purposes only. Do not install it in a production environment.

See one of the following sections:

*	[Install from GitHub](#install-rc-gh)
*	[Install using Composer](#install-rc-composer)
*	[Upgrade existing installations](#upgrade-rc-nosamp)
*	[Upgrade to an RC with sample data](#upgrade-rc-samp)

### Install from GitHub {#install-rc-gh}
Before proceeding, please familiarize yourself with these prerequisites, then run

	git clone git@github.com:magento/magento2.git

	git checkout tags/2.1.0-rc2 [-b 2.1.0-rc2]

### Install using Composer
This Release Candidate is available from `repo.magento.com`. Before installing this Release Candidate using Composer,  familiarize yourself with the Composer metapackage  <a href="{{page.baseurl}}install-gde/prereq/integrator_install.html" target="_blank">prerequisites</a>, then run 

	composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition=2.1.0-rc1 <installation directory name>

## Upgrade existing installations {#upgrade-rc-nosamp}
This section discusses how to upgrade to a Release Candidate.

<div class="bs-callout bs-callout-warning">
    <p><em>Do not</em> upgrade to a Release Candidate on a production system. Upgrade to a Release Candidate on a development system only.</p>
</div>

### Upgrade an existing installation from the GitHub repository
Developers who contribute to the CE codebase can <a href="{{page.baseurl}}comp-mgr/bk-compman-upgrade-guide.html" target="_blank">upgrade manually</a> from the Magento CE GitHub repository.

1.	Go to the <a href="{{page.baseurl}}install-gde/install/cli/dev_update-magento.html" target="_blank">Contributing Developers</a> page.

2.	Follow the instructions to pull the updates from the repository and update using Composer.

### Other upgrades
Other types of upgrades are discussed in [Upgrade to Magento version 2.1 (June 22, 2016)]({{page.baseurl}}release-notes/tech_bull_21-upgrade.html).

## Migration toolkits
The <a href="{{page.baseurl}}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{page.baseurl}}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.
