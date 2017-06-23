---
layout: default
group: release-notes
subgroup: 2.2.0 Release Candidate
title: Magento EE 2.2 Release Candidate Release Notes
menu_title: Magento EE 2.2 Release Candidate Release Notes
menu_order: 700
level3_menu_node: 
level3_subgroup:  
github_link: release-notes/release-notes-2-2-prerelease1-EE.md
---

*	TOC
{:toc}


*Release date: June 21, 2017*

Magento Enterprise Edition 2.2.0 Release Candidate includes significant new features as well as many bug fixes. 

Looking for information about how Magento 2.2.0 Release Candidate evaluation program works? Check out the [Magento 2.2.0 Release Candidate QuickStart Guide]({{page.baseurl}}release-notes/quick-start.html) for more information. 


## Highlights

Magento Enterprise Edition 2.2.0 Release Candidate 1 includes substantial new features as well as many bug fixes. Look for the following highlights in this release:

Look for the following highlights in this release: 

* **Enhanced B2B feature set** removes points of friction from the B2B purchasing process. We reduce the cost and complexity of building a B2B site on Magento by providing company account management features out-of-the-box.  B2B companies can easily view and manage all of their quotes in the Magento Admin Panel. B2B APIs enable backend integrations, too.


* **Advanced Reporting** provides merchants with an improved, reliable, and visuallying compelling way to report on their products, orders, and customers. 


* **Sygnifyd fraud protection** is now integrated with Magento. Sygnifyd identifies and rejects potential fraudulent orders and provides 
100% chargeback protection.



* **Significant enhancements in platform security and developer experience**. Security improvements include the removal of specific un-serialize calls and changed hashing algorithm to improve security for sensitive values. Developers will appreciate  improvements in debugging, customizations, and logging. We've introduced **Mass Asynchronous Operations as a framework feature** that leverages our queuing system to provide increased scalability for long running business processes. 



* **Upgraded technology stack.** Magento has dropped support for PHP 5.6.  We now support PHP 7.1, along with Redis 3.2, MySQL 5.7, Varnish 5 support
All third-party libraries have been upgraded to the latest stable version.


* **Pipeline deployment**, a new deployment process, enables separate build and deployment stages that can run separately. Resource-intensive processes can run on the build server. Pipeline deployment supports easy management of configuration between environments, too.


* **Substantial performance gains from improvements in indexing, cart, and cache operations**. Customers can browse and shop on a storefront while indexers are running. (Long-running indexers operate in batches to better manage memory and run times.) Cart improvements enable a
buyer to create a cart with more than 300 line items, and merchants can process a cart with at least 300 line items. 




## Breaking issues

Here are some of the currently unresolved issues we are working on for this release:


<!--- 66784-->* You cannot run B2B with Sample Data installed when Shared Catalogs are enabled.

<!--- 70066-->* The catalog permissions indexer in a medium B2B installation can take a long time (for example, hours for B2B medium profile) and consumes excessive memory.

<!--- 65555-->* Some `js.translation.js` files do not correctly regenerate during deployment. As a result, Magento does not display  translated theme strings.

<!--- 57995-->* Magento does not properly display videos for simple products. It displays thumbnail images instead of the actual video. [GITHUB-6360](https://github.com/magento/magento2/issues/6360)

<!--- 69636-->* Magento does not apply the Cart Price rules when sorting products by price. [GITHUB-7465](https://github.com/magento/magento2/issues/7465)



## System requirements
Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{ page.baseurl }}install-gde/system-requirements.html).

## Installation

Installation instructions for all versions of this Release Candidate are documented [here]({{ page.baseurl }})release-candidate/install.html).


## Credits
Dear community members, thank you for your suggestions and bug reports. 


