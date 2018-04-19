---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento Commerce 2.0.7 Release Notes 
menu_title: Magento Commerce 2.0.7 Release Notes 
menu_order: 288
level3_menu_node: level3child
level3_subgroup: ee20-relnotes
version: 2.0
github_link: release-notes/ReleaseNotes2.0.7EE.md
---

We are pleased to present Magento Commerce (formerly Enterprise Edition) 2.0.7. This release includes  several functional fixes.


Backward-incompatible changes are documented in <a href="{{page.baseurl}}/release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.


<h3>Fixed issues</h3>

* Resolved multiple issues with the accurate display of the contents of the cart, mini cart, and checkout,  including:

	* Estimated shipping and taxes. Previously, these values were not always displayed consistently. 

	* Checkout. Previously, the checkout process did not display all items.

	* Contents of the mini cart. Previously, mini cart sometimes appeared empty when it actually contained items.

	* When a user first logged in, the User menu did not display the expected information about him.



* The {% glossarytooltip 5b963536-8f03-45c4-963b-688021f4eea7 %}payment gateway{% endglossarytooltip %} now works as expected in a Magento installation running {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} 7.0.3. Previously, when you would place an order in an installation running PHP 7.0.3, the {% glossarytooltip 278c3ce0-cd4c-4ffc-a098-695d94d73bde %}checkout{% endglossarytooltip %} page would become unresponsive, and the transaction would not appear in the payment gateway.  <a href="https://github.com/magento/magento2/issues/2984" target="_blank">(GITHUB-2984</a>, <a href="https://github.com/magento/magento2/issues/2878" target="_blank">GITHUB-2878</a>, <a href="https://github.com/magento/magento2/issues/3305" target="_blank">GITHUB-3305</a>, <a href="https://github.com/magento/magento2/issues/4076" target="_blank">GITHUB-4076)</a>.




<h3>System requirements</h3>
Our technology stack is built on PHP and MySQL. Magento 2.0.1 and later supports PHP 5.5, 5.6, 7.0.2, and MySQL 5.6. For more information, see 
<a href="{{ site.baseurl}}/magento-system-requirements.html" target="_blank">System Requirements</a>.


<h3>Installation instructions</h3>

<h4>New installations</h4>
New users can now complete a full installation of Magento Commerce 2.0.7 from an archive file.

##### <b>Download a new installation</b>#####
1. Go to the <a href="https://www.magento.com/" target="_blank">Magento</a> website, and click **My Account**. Then, log in to your account. 
2. In the panel on the left, choose **Downloads**. Choose **Magento Commerce 2.x**, and do the following:

	a.	Click **Magento Commerce 2.x Release**.

	b.	In the list, choose **Version 2.0.7**.

	c.	Click **Download**.

3.	Follow the instructions to upgrade and verify your installation. If you need help, go to the **Support** tab of your Magento account, and **Open a Ticket**.


<h4><b>Upgrade existing installations</b></h4>

This section discusses how to upgrade to Magento Commerce 2.0.7.


##### <b>Upgrade using the Setup Wizard</b>#####
Use the instructions in [Start System Upgrade]({{page.baseurl}}/comp-mgr/upgrader/upgrade-start.html). When prompted to choose a version, choose 2.0.7.

##### <b>Upgrade an existing installation from the GitHub repository</b>#####
Developers who contribute to the codebase can <a href="{{page.baseurl}}/comp-mgr/bk-compman-upgrade-guide.html" target="_blank">upgrade manually</a> from the Magento Commerce GitHub repository.

1.	Go to the <a href="{{page.baseurl}}/install-gde/install/cli/dev_update-magento.html" target="_blank">Contributing Developers</a> page.

2.	Follow the instructions to pull the updates from the repository and update using {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %}.

##### <b>Upgrade using the command line</b>#####
To upgrade to Magento Commerce 2.0.7 using the command line:

1.	Log in to your Magento server as, or switch to, the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %}.
2.	Change to the directory in which you installed the Magento software.

	For example, `cd /var/www/html/magento2`
2.	Enter the following command to disable the cache:

		php bin/magento cache:disable
2.	Enter the following commands in the order shown:

		composer require <product> 2.0.7 --no-update
		composer update

	

	To upgrade to Magento Commerce 2.0.7, enter:

		composer require magento/product-enterprise-edition 2.0.7 --no-update
		composer update
	
3.	If prompted, enter your [authentication keys]({{page.baseurl}}/comp-mgr/prereq/prereq_auth-token.html).
4. Update the {% glossarytooltip 66b924b4-8097-4aea-93d9-05a81e6cc00c %}database schema{% endglossarytooltip %} and data:

		php bin/magento setup:upgrade
5.	Enter the following command to enable the cache:

		php bin/magento cache:enable


<h3>Migration toolkits</h3>
The <a href="{{page.baseurl}}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{page.baseurl}}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.








