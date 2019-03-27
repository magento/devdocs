---
group: software-update-guide
subgroup: 28_cli-upgr
title: Command-line upgrade
menu_title: Command-line upgrade
menu_node: parent
menu_order: 1
functional_areas:
  - Upgrade
---

## Command-line upgrade

You can upgrade Magento from the command line if you installed the software using any of the following:

*	Downloaded the {% glossarytooltip 7490850a-0654-4ce1-83ff-d88c1d7d07fa %}metapackage{% endglossarytooltip %} using `composer create-project`
*	Installed the compressed archive

<div class="bs-callout bs-callout-info" id="info" markdown="1">
* If you cloned the Magento 2 GitHub repository, you *cannot* use this method to upgrade; instead, see [Update the Magento application]({{ page.baseurl }}/install-gde/install/cli/dev_update-magento.html).
* If you configured Magento use use `pub` as its root directory, see the next section.
* If you're upgrading to Magento 2.1 (including a Release Candidate) from Magento 2.0.7 or earlier *and* you installed sample data, see [Command-line upgrade to Magento 2.1 with sample data]({{ page.baseurl }}/comp-mgr/cli/cli-rc1-samp.html) instead of this topic.
</div>

<div class="bs-callout bs-callout-warning" markdown="1">
* If you're upgrading to version 2.1, see [Upgrade to Magento version 2.1 (June 22, 2016)]({{ page.baseurl }}/release-notes/tech_bull_21-upgrade.html).
* If you're upgrading from {{site.data.var.ce}} or {{site.data.var.ee}} 2.0.0 or 2.0.1, you must first perform the tasks discussed in the [Technical Bulletin (1/28/16)]({{ page.baseurl }}/release-notes/tech_bull_201-upgrade.html).
</div>

## Prerequisite: `pub` directory root {#upgrade-cli-pub}

This section applies to you *only* if you set the Magento root directory to `<your Magento install dir>/pub`. If you did not do this, skip this section and continue with the next section.

{% collapsible If you use pub as your Magento root directory: %}

*	For the upgrade, create another subdomain or docroot that uses the Magento installation directory as its root.

	Run the [System Upgrade utility]({{ page.baseurl }}/comp-mgr/upgrader/upgrade-start.html) using that subdomain.
*	Use the [following procedure](#upgrade-cli-upgr) to upgrade Magento using the command line.

{% endcollapsible %}

## Put your store in maintenance mode {#upgrade-cli-maint}

To prevent access to your store while it's being upgraded, put your store in maintenance mode.

{: .bs-callout .bs-callout-info }
You can optionally create a [custom maintenance mode page]({{ page.baseurl }}/comp-mgr/trouble/cman/maint-mode.html).

{% collapsible To enable maintenance mode: %}

1.	Log in to your Magento server as, or switch to, the Magento file system owner.
2.	Enter the following command:

		php <your Magento install dir>/bin/magento maintenance:enable

	For additional options, see [Enable or disable maintenance mode]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-maint.html).

{% endcollapsible %}

## Upgrade using the command line {#upgrade-cli-upgr}

{% collapsible To upgrade using the command line: %}

1.	Log in to your Magento server as, or switch to, the Magento file system owner.
2.	Change to the directory in which you installed the Magento software.

	For example, `cd /var/www/html/magento2`
2.	Enter the following commands in the order shown:

		composer require <product> <version> --no-update
		composer update

	For example, to upgrade to {{site.data.var.ce}} version 2.0.13, enter:

		composer require magento/product-community-edition 2.0.13 --no-update
		composer update

	To upgrade to Magento EE version 2.0.13, enter:

		composer require magento/product-enterprise-edition 2.0.13 --no-update
		composer update

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
	If an error displays about a missing `.gitignore` files, see the [Technical Bulletin (1/28/16)]({{ site.baseurl }}/guides/v2.0/release-notes/tech_bull_201-upgrade.html#resolution2).
	</div>

3.	If prompted, enter your [authentication keys]({{ page.baseurl }}/comp-mgr/prereq/prereq_auth-token.html).
4.	Manually clear `var` subdirectories:

		rm -rf <Magento install dir>/var/cache/*
		rm -rf <Magento install dir>/var/page_cache/*
		rm -rf <Magento install dir>/var/generation/*

	<div class="bs-callout bs-callout-info" markdown="1">
	If you use a cache storage other than filesystem (e.g., Redis, Memcached, etc.) you need to manually clear the cache there too.
	</div>

4. Update the database schema and data:

		php bin/magento setup:upgrade
5.	Put your storefront online (that is, cancel maintenance mode):

		php bin/magento maintenance:disable
5.	Restart Varnish if you use it for page caching.

		service varnish restart
6.	Access your storefront.

	The following error might display:

		We're sorry, an error has occurred while generating this email.

	If so, perform the following tasks:

	1.	Reset [file system ownership and permissions]({{ page.baseurl }}/install-gde/prereq/file-system-perms.html) as a user with `root` privileges.
	2.	Clear the following directories and try again:

			<your Magento install dir>/var/cache
			<your Magento install dir>/var/page_cache
			<your Magento install dir>/var/generation

{% endcollapsible %}
