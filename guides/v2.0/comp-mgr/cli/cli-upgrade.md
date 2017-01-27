---
layout: default 
group: compman
subgroup: 28_cli-upgr
title: Command-line upgrade
menu_title: Command-line upgrade
menu_node: parent
menu_order: 1
version: 2.0
github_link: comp-mgr/cli/cli-upgrade.md
---

## Command-line upgrade
You can upgrade Magento from the command line if you installed the software using any of the following:

*	Downloaded the metapackage using `composer create-project`
*	Installed the compressed archive

<div class="bs-callout bs-callout-info" id="info">
 	<ul><li>If you cloned the Magento 2 GitHub repository, you <em>cannot</em> use this method to upgrade; instead, see <a href="{{page.baseurl}}install-gde/install/cli/dev_update-magento.html">Update the Magento application</a>.</li>
 		<li>If you configured Magento use use <code>pub</code> as its root directory, see the next section.</li>
 		<li>If you're upgrading to Magento 2.1 (including a Release Candidate) from Magento 2.0.7 or earlier <em>and</em> you installed sample data, see <a href="{{page.baseurl}}comp-mgr/cli/cli-rc1-samp.html">Command-line upgrade to Magento 2.1 with sample data</a> instead of this topic.</li></ul>
</div>

<div class="bs-callout bs-callout-warning">
    <ul><li>If you're upgrading to version 2.1, see <a href="{{ page.baseurl }}release-notes/tech_bull_21-upgrade.html">Upgrade to Magento version 2.1 (June 22, 2016)</a>.</li>
    	<li>If you're upgrading from Magento CE or EE 2.0.0 or 2.0.1, you must first perform the tasks discussed in the <a href="{{page.baseurl}}release-notes/tech_bull_201-upgrade.html">Technical Bulletin (1/28/16)</a>.</li></ul>
</div>

## Prerequisite: `pub` directory root {#upgrade-cli-pub}
This section applies to you *only* if you set the Magento root directory to `<your Magento install dir>/pub`. If you did not do this, skip this section and continue with the next section.

{% collapsible If you use pub as your Magento root directory: %}

*	For the upgrade, create another subdomain or docroot that uses the Magento installation directory as its root. 

	Run the [System Upgrade utility]({{page.baseurl}}comp-mgr/upgrader/upgrade-start.html) using that subdomain.
*	Use the [following procedure](#upgrade-cli-upgr) to upgrade Magento using the command line.

{% endcollapsible %}

## Put your store in maintenance mode {#upgrade-cli-maint}
To prevent access to your store while it's being upgraded, put your store in maintenance mode.

<div class="bs-callout bs-callout-info" id="info">
  	<p>You can optionally create a <a href="{{page.baseurl}}comp-mgr/trouble/cman/maint-mode.html">custom maintenance mode page</a>.</p>
</div>

{% collapsible To enable maintenance mode: %}

1.	Log in to your Magento server as, or switch to, the Magento file system owner.
2.	Enter the following command:

		php <your Magento install dir>/bin/magento maintenance:enable

	For additional options, see [Enable or disable maintenance mode]({{page.baseurl}}install-gde/install/cli/install-cli-subcommands-maint.html).

{% endcollapsible %}

## Upgrade using the command line {#upgrade-cli-upgr}

{% collapsible To upgrade using the command line: %}

1.	Log in to your Magento server as, or switch to, the Magento file system owner.
2.	Change to the directory in which you installed the Magento software.

	For example, `cd /var/www/html/magento2`
2.	Enter the following commands in the order shown:

		composer require <product> <version> --no-update
		composer update

	For example, to upgrade to Magento CE version 2.0.11, enter:

		composer require magento/product-community-edition 2.0.11 --no-update
		composer update

	To upgrade to Magento EE version 2.0.11, enter:

		composer require magento/product-enterprise-edition 2.0.11 --no-update
		composer update
	
	<div class="bs-callout bs-callout-info" id="info">
  		<p>If an error displays about a missing <code>.gitignore</code> files, see the <a href="{{page.baseurl}}release-notes/tech_bull_201-upgrade.html#resolution2">Technical Bulletin (1/28/16)</a>.</p>
	</div>

3.	If prompted, enter your [authentication keys]({{page.baseurl}}comp-mgr/prereq/prereq_auth-token.html).
4.	Manually clear `var` subdirectories:

		rm -rf <Magento install dir>/var/cache/*
		rm -rf <Magento install dir>/var/page_cache/*
		rm -rf <Magento install dir>/var/generation/* 

    <div class="bs-callout bs-callout-info" markdown="1">
    If you use a cache storage other than filesystem (e.g., Redis, Memcached, etc.) you need to manually clear the cache there too.
    </div>

4. Update the database schema and data:

		php bin/magento setup:upgrade
5.	Restart Varnish if you use it for page caching.

		service varnish restart
6.	Access your storefront.

	The following error might display:

		We're sorry, an error has occurred while generating this email.
	
	If so, perform the following tasks:

	1.	Reset [file system ownership and permissions]({{page.baseurl}}install-gde/prereq/file-system-perms.html) as a user with `root` privileges.
	2.	Clear the following directories and try again:

			<your Magento install dir>/var/cache 
			<your Magento install dir>/var/page_cache 
			<your Magento install dir>/var/generation 

{% endcollapsible %}
