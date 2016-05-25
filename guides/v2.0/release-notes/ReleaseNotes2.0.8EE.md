---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento EE 2.0.8 Release Notes 
menu_title: Magento EE 2.0.8 Release Notes 
menu_order: 14
github_link: release-notes/ReleaseNotes2.0.8EE.md
---

<h2>Magento Enterprise Edition 2.0.8</h2>
We are pleased to present Magento Enterprise Edition 2.0.8. This release includes  several functional fixes.


Backward-incompatible changes are documented in <a href="{{ site.gdeurl }}release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.


<h3>Fixed issues</h3>




<h3>System requirements</h3>
Our technology stack is built on PHP and MySQL. Magento 2.0.1 and later supports PHP 5.5, 5.6, 7.0.2, and MySQL 5.6. For more information, see 
<a href="{{ site.gdeurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.


<h3>Installation instructions</h3>

<h4>New installations</h4>
New users can now complete a full installation of Magento Enterprise Edition 2.0.8 from an archive file.

#####<b>Download a new installation</b>#####
1. Go to the <a href="https://www.magento.com/" target="_blank">Magento</a> website, and click **My Account**. Then, log in to your account. 
2. In the panel on the left, choose **Downloads**. Choose **Magento Enterprise Edition 2.x**, and do the following:

	a.	Click **Magento Enterprise Edition 2.x Release**.

	b.	In the list, choose **Version 2.0.8**.

	c.	Click **Download**.

3.	Follow the instructions to upgrade and verify your installation. If you need help, go to the **Support** tab of your Magento account, and **Open a Ticket**.


<h4><b>Upgrade existing installations</b></h4>

This section discusses how to upgrade to Magento EE 2.0.8.


#####<b>Upgrade using the Setup Wizard</b>#####
Use the instructions in [Start System Upgrade]({{ site.gdeurl }}comp-mgr/upgrader/upgrade-start.html). When prompted to choose a version, choose 2.0.8.

#####<b>Upgrade an existing installation from the GitHub repository</b>#####
Developers who contribute to the CE codebase can <a href="{{ site.gdeurl }}comp-mgr/bk-compman-upgrade-guide.html" target="_blank">upgrade manually</a> from the Magento EE GitHub repository.

1.	Go to the <a href="{{ site.gdeurl }}install-gde/install/cli/dev_update-magento.html" target="_blank">Contributing Developers</a> page.

2.	Follow the instructions to pull the updates from the repository and update using Composer.

#####<b>Upgrade using the command line</b>#####
To upgrade to Magento EE 2.0.8 using the command line:

1.	Log in to your Magento server as, or switch to, the Magento file system owner.
2.	Change to the directory in which you installed the Magento software.

	For example, `cd /var/www/html/magento2`
2.	Enter the following command to disable the cache:

		php bin/magento cache:disable
2.	Enter the following commands in the order shown:

		composer require <product> 2.0.8 --no-update
		composer update

	

	To upgrade to Magento EE 2.0.8, enter:

		composer require magento/product-enterprise-edition 2.0.8 --no-update
		composer update
	
3.	If prompted, enter your [authentication keys]({{ site.gdeurl }}comp-mgr/prereq/prereq_auth-token.html).
4. Update the database schema and data:

		php bin/magento setup:upgrade
5.	Enter the following command to enable the cache:

		magento cache:enable


<h3>Migration toolkits</h3>
The <a href="{{ site.gdeurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ site.gdeurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.








