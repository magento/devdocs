---
layout: default 
group: compman
subgroup: 13_cli-upgr
title: Command-line upgrade
menu_title: Command-line upgrade
menu_node: parent
menu_order: 1
github_link: comp-mgr/cli/cli-upgrade.md
---

## Command-line upgrade
You can upgrade Magento from the command line if you installed the software using any of the following:

*	Downloaded the metapackage using `composer create-project`
*	Installed the compressed archive

<div class="bs-callout bs-callout-info" id="info">
 	<p>If you cloned the Magento 2 GitHub repository, you *cannot* use this method to upgrade; instead, see <a href="{{ site.gdeurl }}install-gde/install/cli/dev_update-magento.html">Update the Magento application</a>.</p>
</div>

<div class="bs-callout bs-callout-warning">
    <p>If you're upgrading from Magento CE or EE 2.0.0 or 2.0.1, you must first perform the tasks discussed in the <a href="{{ site.gdeurl }}release-notes/tech_bull_201-upgrade.html">Technical Bulletin (1/28/16)</a>.</p>
</div>

To upgrade using the command line:

1.	Log in to your Magento server as, or switch to, the Magento file system owner.
2.	Change to the directory in which you installed the Magento software.

	For example, `cd /var/www/html/magento2`
3.	If you're upgrading to Magento 2.0.4 from an earlier version, enter the following commands to prevent errors during upgrade:

		php bin/magento cache:disable
		rm -rf var/generation/* var/cache/*
2.	Enter the following commands in the order shown:

		composer require <product> <version> --no-update
		composer update

	For example, to upgrade to Magento CE version 2.0.4, enter:

		composer require magento/product-community-edition 2.0.4 --no-update
		composer update

	To upgrade to Magento EE version 2.0.4, enter:

		composer require magento/product-enterprise-edition 2.0.4 --no-update
		composer update
	
	<div class="bs-callout bs-callout-info" id="info">
  		<p>If an error displays about a missing <code>.gitignore</code> file, see the <a href="{{ site.gdeurl }}release-notes/tech_bull_201-upgrade.html#resolution2">Technical Bulletin (1/28/16)</a>.</p>
	</div>

3.	If prompted, enter your [authentication keys]({{ site.gdeurl }}).
3. Enter the following commands to clean the cache, code generation, and dependency injection directories:

		rm -rf var/cache/* var/di/* var/generation/*

4. Update the database schema and data:

		php bin/magento setup:upgrade
5.	Enable the Magento cache:

		php bin/magento cache:enable
6.	Access your storefront.

	The following error might display:

		We're sorry, an error has occurred while generating this email.
	
	If so, perform the following tasks:

	1.	Reset [file system ownership and permissions]({{ site.gdeurl }}install-gde/prereq/file-system-perms.html) as a user with `root` privileges.
	2.	Clear the following directories and try again:

			<your Magento install dir>/var/cache <your Magento install dir>/var/page_cache <your Magento install dir>/var/generation 