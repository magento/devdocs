---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento EE 2.1.6 Release Notes
menu_title: Magento EE 2.1.6 Release Notes
menu_order: 265
level3_menu_node: level3child
level3_subgroup: ee21-relnotes 
github_link: release-notes/ReleaseNotes2.1.6EE.md
---

*	TOC
{:toc}

We are pleased to present Magento Enterprise Edition 2.1.6. This release includes important performance enhancements for your Magento software.


Improved the performance of configurable products

Magento Performance team introduced bunch of optimizations to configurable product called to support large number of options with minimal impact on response time for both side of store: storefront and admin. Meanwhile when using configurable [big configurable] products together with Swatches module merchants report significant performance drop. Each option data is read and processed separately, moreover data processing duplication takes place. Goal of this story is to make configurable products pages responsiveness with swatches close to responsiveness without swatches.




performance enhancements:

configurable products loading — removed redundancies

enhance performance of swatch behavior, and added an option to turn off swatches for a category




Looking for the <a href="http://devdocs.magento.com/guides/v2.0/cloud/release-notes/CloudReleaseNotes2.1.4.html" target="_blank">Magento Enterprise Cloud Edition Release Notes</a>?


## Highlights

Magento 2.1.6 contains 15 security enhancements. Look for the following highlights in this release:




## Functional enhancements

<!--- 65404 -->


<!--- 65403 -->

<!--- 65402 -->

<!--- 65362 -->

<!--- 65339 -->

<!--- 65324 -->



<!--- 65251 -->* 

<!--- 65249 --> OMIT

<!--- 65248 -->

<!--- 65247 -->

<!--- 65246 -->

<!--- 64857 -->OMIT

<!--- 64856 -->

<!--- 65250 -->


<!--- 60565 --> OMIT


<!--- 65484 -->

<!--- 65483 -->


<!--- 65482 -->


<!--- 65481 -->

<!--- 65480 -->

<!--- 65609 -->





<!--- DUPLICATE -->
<!--- 65252 -->

<!--- INTERNAL ONLY -->
<!--- 65203 -->


## System requirements
Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.




{% include install/releasenotes/ee_install_21.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits
Dear community members, thank you for your suggestions and bug reports. 


