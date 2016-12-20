---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento CE 2.1.4 Release Notes
menu_title: Magento CE 2.1.4 Release Notes
menu_order: 11
version: 2.1
github_link: release-notes/ReleaseNotes2.1.4CE.md
---

*	TOC
{:toc}


We are pleased to present Magento Community Edition 2.1.4. This release includes many functional enhancements and fixes.



## Highlights

Magento 2.1.4 contains more than 20 bug fixes and enhancements, including these highlights:






## Functional fixes and enhancements

We address the following functional issues in this release.

<!--- 62400-->* We've fixed an issue where third-party command line tools failed when you ran `setup:di:compile`.


<!--- 62281-->* The Magento Staging Dashboard now displays the Preview form as expected after an update.

<!---62266 -->* Catalog Module UpgradeData to 2.1.3 breaks when cost attribute is deleted. (GITHUB-7804) 


<!---61950 -->* We've fixed an issue with the UI Functional Upgrade Test from 2.1.x to 2.x.x. Components Version Support



<!--- 60718-->* The CreateCmsPageEntityTest no longer fails on `AssertCmsPageForm`. 

<!---60590 -->* The CreateCmsBlockEntityTestVariation2 test now fills the selected form as expected.

<!---60293 -->* Checkout cart `totals.js` diplays an error when estimating shipping. (GITHUB-5358), (GITHUB-7051)

<!--- 60248-->* The **Default Billing Address** and **Default Shipping Address** checkboxes on the Customer page are now saved correctly.

<!--- 60145-->* We've fixed an issue with mainline build failure for Sample Data tests.

<!--- 59853-->* The Magento flat indexer now collects correct product data for `ROW_ID`.


<!---59416 -->* Admin users can now reset the password for more than one customer at a time. (GITHUB-5260)


<!---59142 -->* UI Grid won't load initial data until its state gets modified

<!--- 59036-->* Broken File Type Custom Option. (GITHUB-5434)

<!--- 58895-->* Magento no longer redirects you to the Compare Products page if you try to remove a product.

<!--- 58893-->* IndexerHandlerFactory: Indexer Object cast to String. 

<!--- 58832-->* The order comments history no longer duplicates the time that a comment was made. 

<!--- 58559-->* [Flat] Filter Exception. 


<!--- 58437-->* Gallery doesn't show all images added to configurable options. (GITHUB-6195), (GITHUB-4101)

<!--- 58376-->* PayPal Payflow Pro now uses the currency you've specified in your store settings.  

<!---57832 -->* Magento now displays the  Swatches warning message as expected during checkout. 

<!--- 56695-->* You can now successfully complete Paypal checkout with products that have custom options. (GITHUB-5938)


<!--- 55612-->* Magento no longer displays the “No Payment method available” message when a customer tries to ship his items to a billing-restricted country. 



### Travis build issues

<!---62388-->* Fixed issue with Travis Builds. 

<!--- 59680-->* Travis failure: imagettfbbox 2.1.2






## Breaking changes






## Known issues




## System requirements
Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.


{% include install/releasenotes/ce_install_21.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits
Dear community members, thank you for your suggestions and bug reports. 

