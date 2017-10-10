---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento Open Source 2.2.1 Release Notes
menu_title: Magento Open Source 2.2.1 Release Notes
menu_order: 287
level3_menu_node:
level3_subgroup:
version: 2.2
github_link: release-notes/ReleaseNotes2.2.1CE.md
---
*Release notes updated October 2.* 


We are pleased to present Magento Open Source 2.2.1. This release includes numerous functional fixes and enhancements.


## Highlights

Look for the following highlights in this release:



Looking for more information on these new features as well as many others? Check out  [Magento 2.2 Developer Documentation](http://devdocs.magento.com/guides/v2.2/).


## Security enhancements
Magento 2.2.1 includes multiple security enhancements. Although this release includes these enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.


[Contact us](https://magento.com/company/contact-us) for more information.



## Known issues

Magento 2.2.1 GA includes the following known issues. Fixes for these issues are scheduled for patch releases in the near future. 




## Fixed issues
This release contains hundreds of fixes and enhancements. 

### Installation, upgrade, deployment

<!--- 80225 -->* We’ve improved the message that Magento displays during upgrade if any schema or data version in the `setup_modules` database is higher than the current module version in the code. *Fix submitted by community member <a href="https://github.com/schmengler" target="_blank">Fabian Schmengler </a> in pull request <a href="https://github.com/magento/magento2/pull/11064" target="_blank">11064</a>.*



### Catalog

<!--- 71520 -->* Magento now displays products that are filtered to a particular store view even when the corresponding store view has been deleted. Previously, Magento displayed a continuously spinning  spinner widget and this error message: **A technical problem with the server created an error. Try again to continue what you were doing. If the problem persists, try again later.**




### Configurable products
<!--- 72582 -->* Magento now longer displays the inappropriate  product price when a configurable product has two price options. Previously, Magento displayed the  out-of-stock price of a configurable product when both an out-of-stock and in-stock price were configured. 

<!--- 72370 -->* Configurable products no longer show up on category page when all children are disabled by a mass action, and the **display out-of-stock products** setting is off.

<!--- 72747 -->* If a configurable product is part of a shipment that is being created by REST, only the parent's quantity will count towards the total quantity of shipped items. Previously, Magento counted both child and parent products when calculating quantity.




### Frameworks

<!--- 67097 -->* You can now run Magento in an environment where Redis cache is installed and the PHPRedis extension is enabled. 



#### Configuration framework

<!--- 72860 -->* Magento now properly loads default values for `ArraySerialized` fields. 


### General
<!--- 80096 -->* We fixed JavaScript date validation on the store front. Previously, validation of the date of birth field during customer registration when the default locale did not work. *Fix submitted by community member <a href="https://github.com/joachimVT" target="_blank">Joachim Vanthuyne</a> in pull request <a href="https://github.com/magento/magento2/pull/11067" target="_blank">11067</a>.*

<!--- 80112 -->* We’ve added a CSS selector to remove an additional top-margin that was rendered when you added  a link widget to the footer in the Luma theme. Previously, when you added a new footer links, the block of footer links did not line up with the default footer links. *Fix submitted by community member <a href="https://github.com/fragdochkarl" target="_blank">Sandro Wagner</a> in pull request <a href="https://github.com/magento/magento2/pull/11063" target="_blank">11063</a>.*


### Indexing
<!--- 72866 -->* We’ve fixed multiple issues where indexes were invalidated as a result of typical import, scheduled import, and catalog permission tasks. 

  

### Orders
<!--- 77966 -->* You can now use PayPal Express Checkout  to place an order in a split-database environment. 

<!--- 72393 -->* If a credit card error occurs on an order, the user can now correct the error and successfully create a new order. Previously, Magento displayed the following error on any subsequent order, even when you entered accurate credit card information: "A customer with the same email already exists in an associated website”. 

<!--- 80102 -->* We’ve added a `name` attribute to the layout default renderer, and you can now add a new column to the Admin Sales > Order table . Previously,  the layout default renderer lacked a `name` attribute. *Fix submitted by community member <a href="https://github.com/gsomoza" target="_blank">Gabriel Somoza</a> in pull request <a href="https://github.com/magento/magento2/pull/11076" target="_blank">11076</a>.*




### Payment methods

<!--- 72351 -->* Double-clicking the **Place Order** button when using the  Braintree payment method to place an order no longer creates duplicate order requests. #10767

<!--- 71050 -->* Magento now completes processing an order if the customer needs to re-enter credit card information during the order process. Previously, Magento returned this error `No such entity with customerId = 0`. 







### Search

<!--- 77777 -->* Search terms from the same synonym group now return the same results.


<!--- 75935 -->* A search query results are now more consistent. Previously, identical search terms entered in different browser tabs resulted in different search results. 

<!--- 71552 -->* You can now search for attribute values on the store-view level. 


## Community contributions

 We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:


* If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member @member_name*". 

* The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of  top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub. 



### System requirements
Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{ page.baseurl }}install-gde/system-requirements-tech.html)



For more information, [System Requirements]({{ site.baseurl }}magento-system-requirements.html).

### Installation and upgrade instructions

You can install Magento Open Source 2.2 General Availability (GA) using Composer.


{% include install/releasenotes/ce_install_21.md %}

## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
