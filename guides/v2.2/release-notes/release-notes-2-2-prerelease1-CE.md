---
layout: default
group: release-notes
subgroup:
title: Magento CE 2.2 Release Candidate Release Notes
menu_title: Magento CE 2.2 Release Candidate Release Notes
menu_order: 162
level3_menu_node: level3child
level3_subgroup: ce21-relnotes 
github_link: release-notes/release-notes-2-2-prelease1-CE.md
---

*	TOC
{:toc}

*Release date: June 21, 2017*


Magento Community Edition 2.2.0 Release Candidate includes significant new features as well as many bug fixes. 

Looking for information about how Magento 2.2.0 Release Candidate evaluation program works? Check out the [Magento 2.2.0 Release Candidate QuickStart Guide]({{page.baseurl}}release-notes/quick-start.html) for more information. 

## Highlights

Look for the following highlights in this release: 


* **Advanced Reporting** provides merchants with an improved, reliable, and visuallying compelling way to report on their products, orders, and customers. 


* **Sygnifyd fraud protection** is now integrated with Magento. Sygnifyd identifies and rejects potential fraudulent orders and provides 
100% chargeback protection.



* **Significant enhancements in platform security and developer experience**. Security improvements include the removal of specific un-serialize calls and changed hashing algorithm to improve security for sensitive values. Developers will appreciate  improvements in debugging, customizations, and logging.



* **Upgraded technology stack.**  We've dropped support for PHP 5.6.  We now support PHP 7.1, along with Redis 3.2, MySQL 5.7, Varnish 5 support
All third-party libraries have been upgraded to the latest stable version.


* **Pipeline deployment**, a new deployment process, enables separate build and deployment stages that can run separately. Resource-intensive processes can run on the build server. Pipeline deployment supports easy management of configuration between environments, too.


* **Substantial performance gains from improvements in indexing, cart, and cache operations**. Customers can browse and shop on a storefront while indexers are running. (Long-running indexers operate in batches to better manage memory and run times.) Cart improvements enable a
buyer to create a cart with more than 300 line items, and merchants can process a cart with at least 300 line items. 




## Fixed issues

We've resolved many issues in this Release Candidate, including these issues:

<!--- 69308-->* We've resolved two vulnerabilties that involved arbitrary file deletion and a lack of input sanitization that lead to Remote Code Execution. 

<!--- 64842-->* We've eliminated unnecessary file check operations, which improved the performance of the Catalog and Product pages. 

<!--- 57846-->* Magento now processes the New Order Status field (available in the Admin panel when configuring payment methods) as expected. [GITHUB-5860](https://github.com/magento/magento2/issues/5860)

<!--- 67623-->*  When using Multiple Select Attribute as a Condition, the customers are now matched as exoected when the condition uses the value "contains". When specifying membership as contains condition in segment creation, customer who owns the target membership (no matter how many other membership he/she owns ) should be a matched customer. Previously, when specifying membership as contains condition in segment creation, customers were not matched. 

<!--- 59135-->* Magento no longer shares customer session data between multiple customers on two websites. [GITHUB-4842](https://github.com/magento/magento2/issues/4842), [GITHUB-6468](https://github.com/magento/magento2/issues/6468)


## Breaking issues

Here are some of the currently unresolved issues we are working on for this release:

<!--- 65555-->* Some `js.translation.js` files do not correctly regenerate during deployment. As a result, Magento does not display  translated theme strings.

<!--- 57995-->* Magento does not properly display videos for simple products. It displays thumbnail images instead of the actual video. [GITHUB-6360](https://github.com/magento/magento2/issues/6360)

<!--- 69636-->* Magento does not apply the Cart Price rules when sorting products by price. [GITHUB-7465](https://github.com/magento/magento2/issues/7465)


## System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{ page.baseurl }}install-gde/system-requirements.html).

## Installation

Installation instructions for all versions of this Release Candidate are documented [here]({{ page.baseurl }})release-candidate/install.html).


## Credits
Dear community members, thank you for your suggestions and bug reports. 
