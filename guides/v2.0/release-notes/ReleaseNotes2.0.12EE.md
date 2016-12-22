---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento EE 2.0.12 Release Notes
menu_title: Magento EE 2.0.12 Release Notes
menu_order: 268
level3_menu_node: level3child
level3_subgroup: ee20-relnotes 
github_link: release-notes/ReleaseNotes2.0.12EE.md
---

We are pleased to present Magento Enterprise Edition 2.0.12. This release includes many functional fixes and enhancements. 




## Highlights
Magento 2.0.12 contains more than 20 bug fixes and enhancements, including these highlights:


## Functional fixes

We address the following functional issues in this release.



<!--- 56925 -->* You can now ship items to a billing-restricted country.

<!--- 60877 -->* The **Use Default Checkboxes for Custom Options** now works as expected.

<!---  58946-->* Custom address attributes now appear on the Checkout summary.

<!--- 61075 -->* Magento no longer deletes a product after you select the Replace option during import a product.

<!--- 57610 -->* You can now use a gift card to complete payment for an order that contains gift wrap.

<!--- 61264 -->* Magento can now import `additional_images` that are tagged with labels that contain a comma separator.

<!--- 61022 -->* You can now create a new order from the Magento server side after using nl_NL, de_DE locales. (GITHUB-5533), (GITHUB-6855)

<!--- 61113 -->* Magento now displays the "Thank you for your purchase!" message after a customer successfully checks out.

<!---  61151-->* Magento now displays an error message as expected when qty is less than minimum

<!--- 61091 -->* Magento Free Shipping method now appears as expected in the Magento server side. (GITHUB-2939)

<!---  58504-->* Add Configurable Product To Cart from Category Page. (GITHUB-2574), (GITHUB-5850), (GITHUB-5882), (GITHUB-6572), (GITHUB-5558)

<!--- 60724 -->* Nginx now redirects you to the Setup page as expected.

<!--- 60327 -->* Magento no longer assigns orders a status of Suspected Fraud in multi-currency store configurations. (GITHUB-4263)

<!--- 61146 -->* An Admin user with restricted permissions no longer has access to all orders. 

<!--- 60055 -->* Users can no longer create an empty URL key for a category.

<!--- 60965 -->* New attributes are now visible when you add a new address.

<!---  57519-->* Requests to ESI now returns data. Previously, requests to ESI did not return data because the requested block is absent in the layout. 

<!--- 61628 -->* "Match products by rule" in the Admin interface now works.



### Internal only
<!--- 61148 -->* Product image issue with multiple store views Magento 2.1.0. (GITHUB-6259) CANNOT REPRODUCE

<!--- 62455 -->* Travis build failures

<!--- 62121 -->* Package 2.0.12






## Known issues






## System requirements
Our technology stack is built on PHP and MySQL. See
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.


{% include install/releasenotes/ee_install_20.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits

Dear community members, thank you for your suggestions and bug reports.
