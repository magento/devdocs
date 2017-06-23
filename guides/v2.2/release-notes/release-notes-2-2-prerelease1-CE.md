---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento 2.2 Pre-Release Candidate Release Notes
menu_title: Magento CE 2.2 Pre-Release Candidate Release Notes
menu_order: 162
level3_menu_node: level3child
level3_subgroup: ce21-relnotes 
github_link: release-notes/release-notes-2-2-prelease1-CE.md
---

*	TOC
{:toc}


*Release date: June 21, 2017*


Magento Community Edition 2.2.0 Pre-Release Candidate includes substantial new features as well as many bug fixes. Look for the following highlights in this release: 



## Highlights

Magento 2.2.0 contains over 15 security enhancements as well as one significant functional enhancement. Look for the following highlights in this release:

## Fixed issues

<!--- 69308-->* We've resolved two vulnerabilties that involved arbitrary file deletion and a lack of input sanitization that lead to Remote Code Execution. 

<!--- 64842-->* We've eliminated unnecessary file check operations, which improved the performance of the Catalog and Product pages. 

<!--- 63159-->* You can now save as changes to Sales rules as expected when Staging is enabled. 

<!--- 57846-->* Magento now processes the New Order Status field (available in the Admin panel when configuring payment methods) as expected. [GITHUB-5860](https://github.com/magento/magento2/issues/5860)

<!--- 67623-->* 

<!--- 59135-->* 


## Breaking issues

Here are some of the currently unresolved issues we are working on for this release:


<!--- 66784-->* You cannot run B2B with Sample Data installed when Shared Catalogs are enabled.

<!--- 65555-->* Some `js.translation.js` files do not correctly regenerate during deployment. As a result, Magento does not display your translated theme strings.

<!--- 57995-->* Magento does not properly display videos for simple products. It displays thumbnail images instead of the actual video.  [GITHUB-6360](https://github.com/magento/magento2/issues/6360)

<!--- 69636-->* Magento does not apply the Cart Price rules when sorting products by price. [GITHUB-7465](https://github.com/magento/magento2/issues/7465)


## System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{ page.baseurl }}install-gde/system-requirements.html).

## Installation

Installation instructions for all versions of this Release Candidate are documented [here]({{ page.baseurl }})release-candidate/install.html).


## Credits
Dear community members, thank you for your suggestions and bug reports. 
