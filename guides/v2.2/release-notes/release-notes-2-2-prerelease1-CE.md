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

*Release date: June 23, 2017*


Magento Community Edition 2.2.0 Release Candidate includes significant new features as well as many bug fixes. 

Looking for information about how Magento 2.2.0 Release Candidate evaluation program works? Check out the [Magento 2.2.0 Release Candidate QuickStart Guide]({{page.baseurl}}release-notes/release-candidate/quick-start.html) for more information.  This guide provides a handy overview of [Component Status](`{{page.baseurl}}release-notes/release-candidate/component-status.html`), too. 

## Highlights

Look for the following highlights in this release: 


* **Advanced Reporting** provides merchants with an improved, reliable, and visuallying compelling way to report on their products, orders, and customers. 


* **Significant enhancements in platform security and developer experience**. Security improvements include the removal of specific un-serialize calls and changed hashing algorithm to improve security for sensitive values. Developers will appreciate  improvements in debugging, customizations, and logging.



* **Upgraded technology stack.**  We've dropped support for PHP 5.6 and Varnish 5.  We now support PHP 7.1, along with Redis 3.2, MySQL 5.7, and Varnish 5 support. All third-party libraries have been upgraded to the latest stable version.


* **Pipeline deployment**, a new deployment process, enables separate build and deployment stages that can run separately. Resource-intensive processes can run on the build server. Pipeline deployment supports easy management of configuration between environments, too.


* **Substantial performance gains from improvements in indexing, cart, and cache operations**. Customers can browse and shop on a storefront while indexers are running. (Long-running indexers operate in batches to better manage memory and run times.) Cart improvements enable a
buyer to create a cart with more than 300 line items, and merchants can process a cart with at least 300 line items. 



## Breaking issues

Here are some of the currently unresolved issues we are working on for this release:

<!--- 65555-->* Some `js.translation.js` files do not correctly regenerate during deployment. As a result, Magento does not display  translated theme strings.

<!--- 57995-->* Magento does not properly display videos for simple products. It displays thumbnail images instead of the actual video. [GITHUB-6360](https://github.com/magento/magento2/issues/6360)

<!--- 69636-->* Magento does not apply the Cart Price rules when sorting products by price. [GITHUB-7465](https://github.com/magento/magento2/issues/7465)


## System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{ page.baseurl }}install-gde/system-requirements.html).

## Installation

Installation instructions for all versions of this Release Candidate are documented [here]({{ page.baseurl }}release-candidate/install.html).


## Credits
Dear community members, thank you for your suggestions and bug reports. 
