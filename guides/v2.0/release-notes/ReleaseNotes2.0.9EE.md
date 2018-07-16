---
group: release-notes
subgroup: 02_rel-notes
title: Magento Commerce 2.0.9 Release Notes
menu_title: Magento Commerce 2.0.9 Release Notes
menu_order: 279
level3_menu_node: level3child
level3_subgroup: ee20-relnotes
version: 2.0
github_link: release-notes/ReleaseNotes2.0.9EE.md
---

We are pleased to present Magento Commerce (formerly Enterprise Edition) 2.0.9. This release includes several functional fixes.


Backward-incompatible changes are documented in <a href="{{ page.baseurl }}/release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.



### Fixed issues


#### Shopping cart

<!--- 56019/49716 -->* Magento no longer displays an incorrect price in the {% glossarytooltip c7ecb18d-cefe-452d-83e2-3c4d5e355db9 %}shopping cart{% endglossarytooltip %} when using multiple shipping addresses.

<!--- 55464/53793 -->* The Minicart Maximum Display Recently Added Item setting now works as expected.  Previously, Magento displayed all the items in the shopping cart, even when the number of items exceeded this limit. <a href="https://github.com/magento/magento2/issues/4750" target="_blank">(GITHUB-4750)</a> 


#### Performance

<!--- 54682 -->* We've improved {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} performance when you use many variations of a {% glossarytooltip 2fd4d100-28d2-45ca-bec1-128444ea98e6 %}configurable product{% endglossarytooltip %}.


#### Miscellaneous

<!--- 55362/45339 -->* Cart Price Rules are now applied as expected to {% glossarytooltip 422b0fa8-b181-4c7c-93a2-c553abb34efd %}Payment method{% endglossarytooltip %} conditions. Previously, discounts set in Cart Price Rules were not applied during {% glossarytooltip 278c3ce0-cd4c-4ffc-a098-695d94d73bde %}checkout{% endglossarytooltip %}. 


* You can now select Gift Wrapping when purchasing a {% glossarytooltip 47841e42-b8b3-4030-9eb1-286137065be2 %}Grouped product{% endglossarytooltip %}. Previously, Magento did not permit you to select Gift Wrapping for a Grouped product.  <a href="https://github.com/magento/magento2/issues/4852" target="_blank">(GITHUB-4852)</a>


<!--- 55513/51015 -->* You can now save a product for which you've entered no Swatch attribute value when this attribute is not required.  Previously, during product creation, Magento would not save the product unless you added a value to the swatch attribute even with "Values Required" set to No. 
 

<!--- 55465/50026 -->* Attributes of the `salesInvoiceRepository` methods are now correctly type cast. (The datatype is now a float -- not nullable float.)  Previously, due to the use of an incorrect data type cast, Magento would produce an error when calling the `salesInvoiceRepositoryV1GetList` methods. <a href="https://github.com/magento/magento2/issues/3605" target="_blank">(GITHUB-3605)</a> 


<!--- 55461/54224 -->* We've renamed the Tier Price option on the Advanced Pricing tab to Customer Group Price option. 


<!--- 55441/55055 -->* Tier pricing now works correctly with full page {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %}. <a href="https://github.com/magento/magento2/issues/5364" target="_blank">(GITHUB-5364)</a>


 

<!--- Omitted (can't be reproduced or won't fix) 48425, 53777, 54721, 54804, 54718, 54647-->

### Known issue

<!--- 52805 -->The Sales {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} does not currently support all the update operations on objects that you can execute from the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} panel. (<i>Objects</i> in this context include orders, invoices, shipments, credit memos, and return merchandise authorizations.) 


The Sales API

* supports create, read, delete, and search operations on objects

* does not support updates to {% glossarytooltip ab517fb3-c9ff-4da8-b7f9-00337c57b3a5 %}order status{% endglossarytooltip %} or payment status. (<i>Order status</i> includes change to processing, shipped, processed, and hold, while <i>payment status</i> includes authorized, charged, reject, and refund.)

You can run these operations from the Admin panel.



### System requirements
Our technology stack is built on {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} and MySQL. For details, see [Technology stack requirements]({{ site.baseurl }}/magento-system-requirements.html){:target="_blank"}.


{% include install/releasenotes/ee_install_20.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
