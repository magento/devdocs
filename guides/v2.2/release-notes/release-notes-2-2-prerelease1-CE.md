---
layout: default
group: release-notes
subgroup: 2.2.0 Release Candidate
title: Magento CE 2.2 Release Candidate Release Notes
menu_title: Magento CE 2.2 Release Candidate Release Notes
menu_order: 500
level3_menu_node:
level3_subgroup:
github_link: release-notes/release-notes-2-2-prerelease1-CE.md
---

*	TOC
{:toc}

*Release date: July 14, 2017*

*Notes updated: July 16, 2017*


Magento Community Edition 2.2.0 Release Candidate includes significant new features as well as many bug fixes.

Looking for information about how the Magento 2.2.0 Release Candidate evaluation program works? Check out the [Magento 2.2.0 Release Candidate QuickStart Guide]({{page.baseurl}}release-notes/release-candidate/quick-start.html) for more information.  This guide provides a handy overview of [Component Status]({{page.baseurl}}release-notes/release-candidate/component-status.html), too.

## Highlights

Look for the following highlights in this release:


* **Significant enhancements in platform security and developer experience**. Security improvements include the removal of specific un-serialize calls and changes to hashing algorithm to improve security for sensitive values. Developers will appreciate  improvements in debugging, customizations, and logging.



* **Upgraded technology stack.**  We've dropped support for PHP 5.6 and Varnish 3.  We now support PHP 7.1, along with Redis 3.2, MySQL 5.7, and Varnish 5 support. All third-party libraries have been upgraded to the latest stable version.


* **Pipeline deployment**, a new deployment process, enables separate build and deployment stages that can run separately. Resource-intensive processes can run on the build server. Pipeline deployment supports easy management of configuration between environments, too. Read more about pipleine deployment [here]({{page.baseurl}}config-guide/deployment/pipeline/).


* **Substantial performance gains from improvements in indexing, cart, and cache operations**. Customers can browse and shop on a storefront while indexers are running. (Long-running indexers operate in batches to better manage memory and run times.) Cart improvements enable a
buyer to create a cart with more than 300 line items, and merchants can process a cart with at least 300 line items.


## Issues fixed in this Release Candidate
The following fixed and open issues have been logged against the Magento 2.2.0 RC1.x release.



### Catalog

<!--- 70066 -->* We’ve improved the performance of the CatalogPermissions indexer in installations that contain many customer groups.

<!--- 66480 -->* You can now successfully create a product and assign it to a store without encountering the following error: `Unique constraint violation found`. [GitHub-6671](https://github.com/magento/magento2/issues/6671)

<!--- 62637 -->* You can now successfully set the **Enable Product** attribute to **no**. 



### Installation and Configuration 


<!--- 69854 -->* You can now successfully use the `config:set` command to set allowed or default currencies. 


<!--- 67299, 67315 -->* The `catalog_url_rewrite_product_category` table is the same whether you’ve freshly installed or updated Magento 2.2. 


<!--- 70314 -->* The `cron:install` command now works as expected in Magento 2.2.0 RC1.x. Previously, the configuration for `crontab` commands contained double quotes that were not escaped, which caused invalid commands to be written to the `crontab` file. [GitHub-10040](https://github.com/magento/magento2/issues/10040)

<!--- 70318 -->* You can now generate static content without a database connection. [GitHub-10041](https://github.com/magento/magento2/issues/10041) 


### MBI

<!--- 69615 -->* Requests for data transfer from Magento to MBI data now complete successfully. 




### Miscellaneous

<!--- 69657 -->* Credit card information now persists as expected after a user enters a promotion code during checkout. Previously, After an user enters credit card information, then discount code and then press "Place Order". The credit card information fields are emptied and user has to enter the credit card information again to proceed with  the order transaction.


<!--- 56062 -->* The Recently Viewed Products block now appears as expected when the full page cache is enabled. [GitHub-3890](https://github.com/magento/magento2/issues/3890)

<!--- 59514 -->* The `tax_region_id` value is no longer hard-coded in the `\Magento\Tax\Setup\InstallData` file. 

<!--- 69964 -->* PHPCS can now correctly parse the syntax of PHP 7.x return types. 

<!--- 67619 -->* The Customer Segment page no longer shows non-matching customers when a customer logs in and you refresh the Customer Segment page. 

<!--- 59801 -->* We’ve improved the performance of the Tax Rules form in installations containing many tax rates. 

<!--- 69750 -->* Magento now successfully completes checkout when a custom address attribute is added. Previously, an error occurred during checkout when the user added a required custom address attribute. 

<!--- 67296 -->* Magento now handles string localization when the string contains a quote (\’). Previously, localization did not work under these conditions. 




### Search


<!--- 59477 -->* Attribute weighting now works correctly for the MySQL adapter. [GitHub-9020](https://github.com/magento/magento2/issues/9020)



## System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{ page.baseurl }}install-gde/system-requirements-tech.html).

## Installation

Installation instructions for all versions of this Release Candidate are documented [here]({{ page.baseurl }}release-notes/release-candidate/install.html).


## Credits
Dear community members, thank you for your suggestions and bug reports.
