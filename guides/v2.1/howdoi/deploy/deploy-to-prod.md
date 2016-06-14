---
layout: default
group: howdoi
subgroup: Deploy
title: Deploy to production
menu_title: Deploy to production
menu_node: parent
menu_order: 1
version: 2.1
github_link: howdoi/deploy/deploy-to-prod.md
---

#### Contents
*	<a href="#deploy-over">Overview of deployment</a>
*	<a href="#deploy-dev">Prepare your development system</a>
*	<a href="#deploy-prod">Guidelines for deployment to production</a>

<h2 id="deploy-over">Overview of deployment</h2>
This topic provides guidelines and best practices for deploying a Magento site to production. We don't recommend a *specific* set of instructions; these are intended as general guidelines. You should be working with an experienced system integrator who can help you make decisions for your particular deployment.

Assumptions:

*	Your *development* environment is behind a firewall with the Magento application in <a href="{{ site.gdeurl21 }}config-guide/bootstrap/magento-modes.html#mode-developer">developer mode</a>.
*	All custom code is in source control.
*	Your development environment is as similar as possible to production (same number of webnodes, same caching architecture, and so on)
*	Your *production* environment is a separate set of servers in a secure environment.
*	Your production environment runs the Magento application in <a href="{{ site.gdeurl21 }}config-guide/bootstrap/magento-modes.html#mode-production">production mode</a> with desired security options enabled.
*	Your production system has a working, live Magento installation.

Deploying to production involves the following essential steps. Each set of steps is discussed in more detail in the sections that follow.

### In your development system

1.	Test your system in your development environment.
2.	Put all custom code in source control.
6.	Compile code and generate static view files.
3.	Archive file system assets and export the database.
5.	Transfer file system and database assets to your production system.

### In your production system

5.	Create the Magento deployment configuration.
6.	Extract file system and database assets from your archives.
8.	Set file system permissions.
9.	Test everything.
9.	When everything is working, "flip" your DNS server to point to your production system.

<h2 id="deploy-dev">Prepare your development system</h2>
Your *development system* is a dedicated developer or build system where you periodically:

1.	Deploy Magento 2 code (including custom code).
2.	Clean static files.

		rm -rf <your Magento install dir>/pub/static/*
3.	Remove the Magento database and reinstall it with database schema and data from your implementation.

	One way to do this is to run the <a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-install.html">command-line installer</a> with the optional `--cleanup-database` command.
4.	Use the <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-static-view.html">`magento setup:static-content:deploy`</a> command to deploy static view files.
5.	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-compiler.html">Compile code</a>.

2.	Clean temporary files that shouldn't be in production.

		cd <your Magento install dir>/var
		rm -rf cache/* composer_home/* log/* page_cache/* session/*
6.	Archive the file system to a suitable format (`.tar`, `.tar.gz`, `.zip`, and so on).
7.	Export the database using a tool like <a href="https://dev.mysql.com/doc/refman/5.6/en/mysqldump.html" target="_blank">`mysqldump`</a>

Best practices in development:

*	Use the Magento file system owner to run <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-cron.html#config-cli-cron-bkg">cron</a>
*	Log in, or switch to, the <a href="{{ site.gdeurl21 }}install-gde/prereq/apache-user.html">Magento file system owner</a> to run commands, install or uninstall Magento, and so on
*	Use the <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-mode.html">`magento deploy:mode:set`</a> command to enable developer mode
*	Periodically <a href="{{ site.gdeurl21 }}howdoi/php/php_clear-dirs.html">clean the cache and compiled code directories</a>
*	Set up your `robots.txt` to *prevent* search engines from indexing your development site. (You don't want search results to point to this site because it won't be available to customers.)

<h2 id="checklist-prod">Production server checklist</h2>
Make sure you do as many as possible of the following before continuing:

*	Set up <a href="{{ site.gdeurl21 }}config-guide/redis/config-redis.html">Redis caching</a>
*	Set up <a href="{{ site.gdeurl21 }}config-guide/varnish/config-varnish.html">Varnish web acceleration</a>

	We *strongly recommend* Varnish for HTTP acceleration, including page caching.
*	Set up a Content Delivery Network (CDN)
*	Set up multiple webnodes with load balancing
*	Configure Magento payment and shipping methods
*	Set your web server virtual host to point to the Magento `pub` directory because doing so prevents running the Setup Wizard, Component Manager, or System Upgrade in production

<h2 id="deploy-prod">Guidelines for deployment to production</h2>
This section provides guidelines for deploying a Magento installation to production. Depending on your requirements, additional tasks might be required. Consult a system administrator for advice.

1.	Copy your development file system and database archives to the production system.
2.	Extract the Magento 2 file system archive to an empty directory.
4.	Set up persistent storage (for example, media, logs, cache, session, and so on).
5.	Take your existing system offline by enabling maintenance mode using <a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-subcommands-maint.html#instgde-cli-maint">magento maintenance:enable</a>. *(DOWNTIME STARTS)*
3.	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-install.html">Install the Magento software</a> in a clean database (optionally using the `--cleanup-database` option).
5.	Import database data from your development system.
5.	Move your existing file system to an archive location.
6.	Move the file system you copied from your production system to the Magento docroot.
4.	Change to <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-mode.html#config-mode">production mode</a> and set file system permissions and ownership for <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-mode.html#config-mode-over-dirs-perm">production</a>.
7.	Test everything thoroughly and carefully.
8.	Switch DNS to the new server. *(DOWNTIME ENDS)*

Best practices in production:

*	Use <a href="{{ site.gdeurl21 }}config-guide/varnish/config-varnish.html">Varnish</a> to accelerate HTTP traffic, including providing page caching
*	Use the <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-mode.html">`magento deploy:mode:set`</a> command to enable developer mode
*	Use the `pub` directory as the Magento docroot to prevent running the Setup Wizard, Component Manager, or System Upgrade in production. (Set up virtual hosts to point to `<your Magento install dir>/pub`.)
*	Set up your `robots.txt` to *allow* search engines to index your production site. 
