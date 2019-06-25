---
group: release-notes
subgroup: 02_rel-notes
title: Magento Commerce 2.1.2 Release Notes
menu_title: Magento Commerce 2.1.2 Release Notes
menu_order: 270
level3_menu_node: level3child
level3_subgroup: ee21-relnotes
---

We are pleased to present Magento Commerce (formerly Enterprise Edition) 2.1.2. This release includes security enhancements and several functional fixes.



Backward-incompatible changes are documented in [Magento 2.1 backward incompatible changes]({{ page.baseurl }}/release-notes/backward-incompatible-changes/index.html).

## Highlights

Magento 2.1.2 contains multiple bug fixes and enhancements, including

* Support for <i>PHP 7.0.4 and 5.6.5</i>. This release supports [PHP](https://glossary.magento.com/php) 5.6.5 and above instead of 5.6.x.

* Compatible with <i>MySQL 5.7</i>.


* <i>Two new web APIs (or service contracts) for the Sales module</i> that incorporate functionality into the Sales [API](https://glossary.magento.com/api) that is currently available in the [Admin](https://glossary.magento.com/admin) interface. After you install this patch, you’ll be able to use the Sales API `ShipOrder` and `InvoiceOrder` methods to capture payment and ship product. See [Module Reference Guide]({{ page.baseurl }}/mrg/intro.html){:target="_blank"} for information on using the `ShipOrder` and `InvoiceOrder` interfaces. 

### Why are we adding new APIs in a patch release?
{:.no_toc} 

<i>These new interfaces will not break any existing customizations or extensions.</i>  See [Alan Kent’s blog about Magento](https://alankent.me/category/magento/){:target="_blank"} for more information about these features and Magento’s use of semantic versioning.  

## Security enhancements

This release includes enhancements to improve the security of your Magento software. While there are no confirmed attacks related to these issues to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento software to the latest version as soon as possible.

The following list provides an overview of the security issues fixed in this release. We describe each issue in greater detail in the [Magento Security Center](https://magento.com/security/patches/magento-2010-and-212-security-update){:target="_blank"}.

### General security
{:.no_toc} 

<!--- 56912/1488-->*  Fixed issue with using the Magento Enterprise Edition invitations feature to insert malicious [JavaScript](https://glossary.magento.com/javascript) and subsequently execute it in the Admin context.  


<!--- 57565-->* You can no longer change or fake a product price from the Magento [storefront](https://glossary.magento.com/storefront) and then complete an order with that faked price. 



<!--- 56852/1484-->*  Fixed issue with arbitrary PHP code execution during [checkout](https://glossary.magento.com/checkout). 


<!--- 56594/1490-->*  Magento no longer permits you to use Products > Images and Videos > Insert YouTube video to potentially upload malicious code.



<!--- 53971-->*  Fixed issue with running `cron` jobs less frequently than specified by the application `cron` setting. 


<!--- 57965-->* Sessions now expire as expected after logout.





<!--- 57463-->* Removed potential for exploitation of guest order view feature to harvest order information.  


<!--- 56940-->* Kount and 3D Secure now work as expected for Braintree Vault. 


<!--- 57812/1539, 1543-->* You can no longer delete a currently logged-in user. 

<!--- 56901/1492-->*  A user with lesser privileges can no longer force an Admin user to add his private or public key using a JSON call. 

### Denial-of-service (DoS) attacks and brute force attacks
{:.no_toc} 

<!--- 46026/57463-->* The Guest order view protection code is no longer vulnerable to brute force attacks.

<!--- 57302/1338-->*  You can no longer manipulate the full page [cache](https://glossary.magento.com/cache) to store incorrect pages under regular page [URL](https://glossary.magento.com/url) entries.

### Cross-site scripting  (XSS)
{:.no_toc} 

<!--- 57362-->*  Fixed issue with potential storage of malicious XSS code in the body of an email template. (A malicious user could use this script to steal user information and cookies, or to bypass cross-site request forgery protection.) 

<!--- 57804/1539-->* Fixed issue with cross-site scripting reflected in loading section of request.

<!--- 57580/1433 -->* Resolved a potential  vulnerability in which customer addresses could be deleted. You can no longer deceive a user into deleting his store address book entries.

### SQL injection
{:.no_toc} 


<!--- 56540/1480-->*  Fixed issue with potential SQL injection through the Zend framework through ordering or grouping parameters. 

## Functional fixes and enhancements

We address the following functional issues in this release.

### Sales API enhancements
{:.no_toc} 


<!--- 56429 -->*  We've added the ability to change the status of a [shipment](https://glossary.magento.com/shipment) through the [web API](https://glossary.magento.com/web-api).  The new `ShipOrder` interface supports tasks you can already do through the Admin dashboard, including the ability to:  

	* create a shipment document (full or partial)

	* add details about shipped items into an order

	* change status and state of an order according to performed actions

	* notify customer about new shipment document


<!--- 56428 -->*  We've added the ability to change the status of an invoice through the web API.  The new `InvoiceOrder` interface supports tasks you can already do through the Admin dashboard, including the ability to:  

	* create an invoice document (full or partial)

	* capture money placed with order payment

	* notify a customer about document creation

	* change order status and state


For more information on these API enhancements, see [Magento Sales API]({{ page.baseurl }}/mrg/ce/Sales/services.html){:target="_blank"}.



<!--- 55126-->* We've fixed an issue with using the REST API to link simple products to configurable ones. [(GITHUB-5243)](https://github.com/magento/magento2/issues/5243){:target="_blank"}


<!--- 58401-->* You can now use the REST API to create a [configurable product](https://glossary.magento.com/configurable-product) with a linked child product. [(GITHUB-5243)](https://github.com/magento/magento2/issues/5243){:target="_blank"}

### Cart and checkout
{:.no_toc} 

<!--- 56431, 56426-->* Magento now updates [order status](https://glossary.magento.com/order-status) as expected after a shipment or [invoice](https://glossary.magento.com/invoice) has been created through the API.


<!--- 54964-->* Magento now updates the mini cart as expected when you reorder an item. Previously, Magento added the reordered items to the shopping cart, but the mini cart did not update its item count. [(GITHUB-6121)](https://github.com/magento/magento2/issues/6121){:target="_blank"} 

### Tracking and shipping
{:.no_toc}  

<!--- 57460-->* Magento no longer throws an [exception](https://glossary.magento.com/exception) if you enter an invalid FedEx shipment tracking number.


<!--- 57097-->* Changing the city field of an order now affects the shipping rate as expected. Previously, the shipping rate did not update when you changed the city field. 	

### Upgrade
{:.no_toc} 

<!--- 59505-->* You can now save simple products created in 2.0.x environments after upgrading to environments running Magento 2.1.x. Previously, you could not successfully save the opened product after upgrading. 

### General fixes
{:.no_toc} 

<!--- 54737, 55116-->* Magento 2.1.2 now supports PHP 7.0.4. 


<!--- 57003-->* The Product page scope selector now displays all related websites associated with a restricted user. 

<!--- 56952-->* We've resolved an issue with the get active payment methods (`getActiveMethods`). [(GITHUB-5413)](https://github.com/magento/magento2/issues/5413){:target="_blank"}


<!--- 58568-->* Magento now correctly renders [HTML](https://glossary.magento.com/html) tags on the Sales Order page price field. 

<!--- 57032-->* Visual swatches are now displayed in search results.

<!--- 57049-->* Magento now factors in the Weight attribute as expected when you use advanced search on grouped products.




<!--- DELETED:  (won't fix) 57578, CLONE: 58123, 58111, 57049, 57032, OMIT: 58667, 57878, 58473, 58421, 58402, 58313 (releasenotes),57845, 55862, 57294, 58166, 58204, (internal) 58929, 58875, 58700, 58606, 58590, 58474, 56425 -->

## Known issues



* **Issue**: Error creating configurable products in 2.1.1 [(GITHUB-6424)](https://github.com/magento/magento2/issues/6424){:target="_blank"}. **Workaround**: Clear your browser cache after upgrading. 




* **Issue**: When you edit a configurable product and add options to a simple product, Magento does not save these options. **Workaround**: None.
<!--- 58034-->



* **Issue**: Logo for transactional emails cannot be uploaded successfully [(GITHUB-6275)](https://github.com/magento/magento2/issues/6275){:target="_blank"}. **Workaround:** None.
<!--- 57291-->


* **Issue**: The `catalogProductRepository` API (REST) returns an unexpected attribute type. Certain `attribute_code` values (for example,  `category_ids`) return an array instead of the expected string. **Workaround**: As needed, adjust your code so that it handles the response as an array.  

<!--- 56853-->


* **Issue**:  Magento does not correctly display Product > [Catalog](https://glossary.magento.com/catalog) table after upgrade from 2.0.1 to 2.1.0 on systems running Varnish. **Workaround**: Restart Varnish after upgrading. For more information, see [Component Manager and System Upgrade Guide: Step 4]({{page.baseurl}}/comp-mgr/upgrader/upgrade.html){:target="_blank"}.
<!--- 54618-->

## System requirements

Our technology stack is built on PHP and MySQL. For more information, see
[System Requirements]({{ page.baseurl }}/install-gde/system-requirements.html){:target="_blank"}.

{: .bs-callout .bs-callout-info }
Magento 2.1.2 requirements have changed slightly from 2.1.1. This release supports PHP 5.6.5 and above instead of 5.6.x.




{% include install/releasenotes/ee_install_21.md %}

## Migration toolkits

The [Data Migration Tool]({{ page.baseurl }}/migration/migration-migrate.html){:target="_blank"} helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  [Install the Data Migration Tool]({{ page.baseurl }}/migration/migration-tool-install.html){:target="_blank"}. Consider exploring or contributing to the [ Magento Data Migration repository](https://github.com/magento/data-migration-tool){:target="_blank"}.

The [Code Migration Toolkit](https://github.com/magento/code-migration){:target="_blank"} helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
