---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento CE 2.1 Release Candidate 3 (RC3) Release Notes 
menu_title: Magento CE 2.1 Release Candidate 3 (RC3) Release Notes 
menu_order: 18
version: 2.0
github_link: release-notes/ReleaseNotes2.1_RC3CE.md
---

<h2>Magento Community Edition 2.1 Release Candidate 3 (RC3)</h2>
We are pleased to present Magento 2.1 Release Candidate 3 (RC3). This release candidate build is not intended for production purposes. Instead, it provides the development community opportunities to: 

* preview the new features and fixes that Magento 2.1 GA will contain

* contribute to the Magento 2.1 code base by identifying unresolved issues

* test your 2.0 extensions against  2.1 

We welcome your participation in this process!  Please open any Community Edition issues or Pull Requests on the Community Edition GitHub repository. For more information on how to provide feedback and contribute on GitHub, see <a href="{{ site.gdeurl }}contributor-guide/contributing.html" target="_blank">Code contributions</a>.

Backward-incompatible changes are documented in <a href="{{ site.gdeurl }}release-notes/backward-incompatible-changes-2.1.html" target="_blank">Magento 2.1 Backward Incompatible Changes</a>.
 

<h3>Highlights</h3>

Magento Community Edition 2.1 includes several new and exciting features:

* **PayPal enhancements** include PayPal in-context checkout and saved credit cards. In-context checkout helps to increase conversion rates 69 bps by allowing shoppers to pay with PayPal without leaving the merchant’s site. PayPal saved credit cards boost repeat purchases by allowing merchants to securely store credit card information with PayPal so customers do not need to re-enter it in checkout or when reordering items from the Admin interface.
 
* **Braintree enhancements enable merchants to qualify for the simplest set of PCI compliance** requirements by using Braintree Hosted Fields to collect all sensitive cardholder information in checkout. Merchants retain complete control over their checkout style and layout because Braintree uses small, transparent iframes to replace individual payment fields. Merchants can now also access Braintree settlement reports from within the Magento Admin interface.
 
* **Improved management interfaces** make it faster and easier to search for information in the Admin, set up global search synonyms, and create new product, category, and CMS content.
 


<h3>Known issues</h3>
Magento Community Edition 2.1, Release Candidate 3 includes the following known issues: 




<h3>Fixed issues</h3>

<!--- 54200-->* Wrong "gift_message_available" parameter exported

<!--- 51753-->* During install over existing database, giving different admin email results in exception

<!--- 52615-->* [Github] Backup error after disabling module in Web Setup Wizard #3562

<!--- 54205-->* After Disable\/Enable Magento modules via CLI  all cache types become disabled

<!--- 54283-->* ProductsList widget should implement IdentityInterface and return correct identities


<!--- 54211-->* 54211: [Staging] Downloadable product has direct link in category after update applied

<!--- 52124-->* 52124: Simple product special price lost if use it in grouped product

<!--- 54357-->* 54357: Product Update Preview doesn't work

<!--- 53121-->* 53121: [Email] "502 Bad Gateway" error when "New Account" email is initiated with custom templates.

<!--- 52165-->* 52165: [PS-API-FT] Fix functional test 
Magento\User\Test\TestCase\RevokeAllAccessTokensForAdminWithoutTokensTest

<!--- 52891-->* 52891: [FT] CreateSimpleProductEntityTest failed to recognize a comma and a dot in the product price

<!--- 54262-->* 54262: Cannot remove product from shopping cart

<!--- 54191-->* 54191: [GITHUB] Error saving new order status in backend #4146

<!--- 53424-->* 53424: [Staging] After changing Update time from entity page, Update settings are lost on other store views


<!--- 54186-->*  54186: Problem with js validation when adding product to shopping cart

<!--- 54242-->*  54242: [Github] Magento2: Issue in pagination #3861

<!--- 53139-->*  53139: Price of last customizable options add to price on product page

<!--- 54182-->*  54182: Unable to place order with quantity more than half in stock

<!--- 54293-->*  54293: Unable to place order from admin within Braintree if 3d secure enabled

<!--- 54222-->*  54222: [GitHub] Configurable Product. Edit Configurations changes names of simple products to SKU #4951

<!--- 54255-->*  54255: Full Path Disclosure in cache management

<!--- 54257-->*  54257: "Stock Status" attribute is not changed for Variation Simple Product

<!--- 53170-->* Add/Remove product actions are not observed by update cart qty event

<!--- 54214-->* Order can't be placed via Payflow Pro payment method

<!--- 54228-->* Varnish cache disabled on most html requests

<!--- 54120-->* Installation fails

<!--- 54231-->* Integration broken after deleting admin with same ID

<!--- 53008-->* [Github] Format of responses doesn't match Swagger

<!--- 54051-->* [GITHUB] Cannot login on frontend if inline translation is enabled #4925

<!--- 54172-->* Product URL rewrites are not created on mass assign to new website

<!--- 53238-->* Vault Provider field contains Payflow Pro option in countries which don't have such solution

<!--- 54031-->* Static Test for DI Configuration Misses Wrong Letter Case in Class Names

<!--- 53293-->* Remove PHP 5.5 from supported versions

<!--- 53474-->* [Github] Caches Aren't Enabled by Default on RC1 with Composer when Upgrading via CLI

<!--- 53223-->* [Github] Magento performance decreases significantly if Merge CSS Files = Yes #4710

<!--- 54043-->* [GitHub] Dropdown attribute required even when selected #4899

<!--- 53530-->*  Performance of category pages significantly degrade when having around 3000 products or more in category

<!--- 53034-->*  DnD in Dynamic Rows is not work

<!--- 50468-->* [Staging] Products Grid Filtering by Category ID doesn't work

<!--- 53366-->* Tax Report does not display any records

<!--- 52923-->* [Github] Switching to Varnish causes category menu to force HTTPS links #4540

<!--- 52993-->* [Github] Media Uploader Issues #2958

<!--- 52867-->* [APPSEC-1446] Sensitive server information disclosure upon specific URL requests












<!--- P0 issues -->
<h4>Checkout</h4>



<h4>Bundle products</h4>





<h4>Miscellaneous</h4>




<h4>Messages and documentation</h4>




<h3>Technology stack</h3>

Our technology stack is built on PHP and MySQL. Magento 2.1 RC3 supports:

* PHP 5.6
* PHP 7.0.2+ (with the exception of 7.0.5, due to a PHP bug)
* MySQL 5.6.

We do not support PHP 5.5.x or 7.0.5. 


## Installation and upgrade instructions
You can install Magento Community Edition 2.1 Release Candidate 3 (RC3) from either Github or by using Composer. 
This Release Candidate is for test purposes only. Do not install it in a production environment.

{% include install/releasenotes/ce_install_21rc.md %}


## Migration toolkits
The <a href="{{ site.gdeurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ site.gdeurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.
