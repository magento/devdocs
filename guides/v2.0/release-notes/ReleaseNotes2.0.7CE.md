---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento Open Source 2.0.7 Release Notes 
menu_title: Magento Open Source 2.0.7 Release Notes 
menu_order: 188
level3_menu_node: level3child
level3_subgroup: ce20-relnotes
version: 2.0
github_link: release-notes/ReleaseNotes2.0.7CE.md
---

We are pleased to present Magento Open Source (formerly Community Edition) 2.0.7. This release includes one functional fix. 


Backward-incompatible changes are documented in <a href="http://devdocs.magento.com/guides/v2.0/release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.



<h3>Fixed issue</h3>

The {% glossarytooltip 5b963536-8f03-45c4-963b-688021f4eea7 %}payment gateway{% endglossarytooltip %} now works as expected in a Magento installation running {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} 7.0.3. Previously, when you would place an order in an installation running PHP 7.0.3, the {% glossarytooltip 278c3ce0-cd4c-4ffc-a098-695d94d73bde %}checkout{% endglossarytooltip %} page would become unresponsive, and the transaction would not appear in the payment gateway. <a href="https://github.com/magento/magento2/issues/2984" target="_blank">(GITHUB-2984</a>, <a href="https://github.com/magento/magento2/issues/2878" target="_blank">GITHUB-2878</a>, <a href="https://github.com/magento/magento2/issues/3305" target="_blank">GITHUB-3305</a>, <a href="https://github.com/magento/magento2/issues/4076" target="_blank">GITHUB-4076)</a>.



<h3>System requirements</h3>
Our technology stack is built on PHP and MySQL. Magento 2.0.1 and later support PHP 5.5, 5.6, 7.0.2, and MySQL 5.6. For more information, see 
[System Requirements]({{ site.baseurl}}/magento-system-requirements.html){:target="_blank"}.

<h3>Installation instructions</h3>

<h4>New installations</h4>
New users can now complete a full installation of Magento Open Source 2.0.7 from an archive file on the <a href="https://www.magentocommerce.com/download" target="_blank">Download</a> page.

##### <b>Download a new installation</b>#####

1. Go to the <a href="https://www.magentocommerce.com/download" target="_blank">Magento Open Source Download</a> page.

2. Under Full Release, select a format for the download archive file. Then, click **Download**.

3.	Follow the Magento <a href="http://devdocs.magento.com/guides/v2.0/install-gde/prereq/integrator_install.html#integrator-first-composer-ce" target="_blank">installation instructions</a>.

##### <b>Install a new installation with Composer</b>#####

1. Go to the <a href="https://www.magentocommerce.com/download" target="_blank">Magento Open Source Download</a> page.

2.	Under **Download with Composer**, click **Download**.

3.	Follow the instructions to download Composer, and get the Magento Open Source {% glossarytooltip 7490850a-0654-4ce1-83ff-d88c1d7d07fa %}metapackage{% endglossarytooltip %}.


<h4><b>Upgrade existing installations</b></h4>

This section discusses how to upgrade to 2.0.7.


##### <b>Upgrade using the Setup Wizard</b>#####
Use the instructions in [Start System Upgrade]({{page.baseurl}}/comp-mgr/upgrader/upgrade-start.html). When prompted to choose a version, choose 2.0.7.

##### <b>Upgrade an existing installation from the GitHub repository</b>#####
Developers who contribute to the Open Source codebase can <a href="{{page.baseurl}}/comp-mgr/bk-compman-upgrade-guide.html" target="_blank">upgrade manually</a> from the Magento Open Source GitHub repository.

1.	Go to the <a href="{{page.baseurl}}/install-gde/install/cli/dev_update-magento.html" target="_blank">Contributing Developers</a> page.

2.	Follow the instructions to pull the updates from the repository and update using {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %}.


##### <b>Upgrade using the command line</b>#####
To upgrade to 2.0.7 using the command line:

1.	Log in to your Magento server as, or switch to, the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %}.
2.	Change to the directory in which you installed the Magento software.

	For example, `cd /var/www/html/magento2`
2.	Enter the following command to disable the cache:

		php bin/magento cache:disable
2.	Enter the following commands in the order shown:

		composer require <product> 2.0.7 --no-update
		composer update

	To upgrade to {{site.data.var.ce}} 2.0.7, enter:

		composer require magento/product-community-edition 2.0.7 --no-update
		composer update


	
3.	If prompted, enter your [authentication keys]({{page.baseurl}}/comp-mgr/prereq/prereq_auth-token.html).

4. Update the {% glossarytooltip 66b924b4-8097-4aea-93d9-05a81e6cc00c %}database schema{% endglossarytooltip %} and data:

		php bin/magento setup:upgrade
5.	Enter the following command to enable the cache:

		php bin/magento cache:enable

<h3>Migration toolkits</h3>
The <a href="{{page.baseurl}}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{page.baseurl}}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.












