---
group: release-notes
subgroup: 02_rel-notes
title: Magento Commerce 2.0.8 Release Notes
menu_title: Magento Commerce 2.0.8 Release Notes
menu_order: 280
level3_menu_node: level3child
level3_subgroup: ee20-relnotes
---

We are pleased to present Magento Commerce (formerly Enterprise Edition) 2.0.8. This release includes several functional fixes.


Backward-incompatible changes are documented in [Magento 2.0 Backward Incompatible Changes]({{ page.baseurl }}/release-notes/changes_2.0.html){: target="_blank"}.

### Fixed issues

#### Installation and upgrade

<!--- 45608 -->* You can now successfully uninstall Magento_CustomerBalanceSampleData.

<!--- 51440 -->* Magento no longer throws a fatal error when you run the `setup upgrade` command in environments running {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} 7.0.5. 

#### Product creation

<!--- 53342 -->* Magento  no longer duplicates {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} keys during the creation of a {% glossarytooltip 2fd4d100-28d2-45ca-bec1-128444ea98e6 %}configurable product{% endglossarytooltip %}.

<!--- 50076 -->* Magento now supports GLOB_BRACE on non-GNU Linux systems. [(GITHUB-3490)](https://github.com/magento/magento2/issues/3490){: target="_blank"} 

#### Miscellaneous

<!--- 52448 -->* Magento now correctly displays the customer address on the {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %}. Previously,  when you selected a default billing address when creating a new customer account, Magento would not display the  address.

<!--- 50507 -->* You can now successfully reset the Product Attributes mass update {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} form.


<!--- 50716 -->* The Admin Action Log archive is now formatted as expected.


<!--- 49212 -->* We've improved the implementation of the `Magento\Sales\Model\OrderRepository::getList()` function.  [(GITHUB-3018)](https://github.com/magento/magento2/issues/3018){: target="_blank"} 

<!--- 46014 -->* Magento now displays error messages on the page where the error occurred. Previously, error messages invoked by actions on the login page were not displayed until you left that page.

<!--- 53814 -->* Magento now sends email using a store's specific email address when an Admin sends email. Previously, Magento would send email from the default instance email address instead of the store address.

<!--- 55087 -->* Solr search now returns search results as expected from both English and Spanish stores. Previously, Solr returned results for the English site but not for the Spanish site. 

### System requirements

Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{ page.baseurl }}/install-gde/system-requirements-tech.html){:target="_blank"}.


{% include install/releasenotes/ee_install_20.md %}

## Migration toolkits

The [Data Migration Tool]({{ page.baseurl }}/migration/migration-migrate.html){: target="_blank"} helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{ page.baseurl }}/migration/migration-tool-install.html){: target="_blank"}. Consider exploring or contributing to the [ Magento Data Migration repository](https://github.com/magento/data-migration-tool){: target="_blank"}.

The [Code Migration Toolkit](https://github.com/magento/code-migration){: target="_blank"} helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
