---
group: installation-guide
subgroup: 99_contrib
title: Update the Magento application
menu_title: Update the Magento application
menu_order: 2
menu_node:
redirect_from: /guides/v2.0/install-gde/install/cli/instgde-install-magento-update-db
functional_areas:
  - Install
  - System
  - Setup
---

This topic discusses how a contributing developer can update the Magento application without reinstalling it. To perform an upgrade if you're *not* a contributing developer, see <a href="{{ page.baseurl }}/comp-mgr/bk-compman-upgrade-guide.html">Updating the Magento application and components</a>.

To update the Magento software if you're a contributing developer:

1.	Log in to your Magento server as, or switch to, the <a href="{{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html">Magento file system owner</a>.
3. Save any changes you made to `composer.json` because the following steps will overwrite it:

		cd <your Magento install dir>
		cp composer.json composer.json.old

3.	Update your local repository to get the latest code:
		
		git pull origin develop

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
	If `git pull origin develop` fails, see [troubleshooting]({{ page.baseurl }}/install-gde/trouble/git/tshoot_git-pull-origin.html).
	</div>
				
3.	Diff and merge your `composer.json.old` with `composer.json` installed with the Magento software.
4.	Enter the following command:

		composer update

5.	Update the Magento database:

		php <your Magento install dir>/bin/magento setup:upgrade

<!-- ABBREVIATIONS -->

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
*[contributing developers]: Developers who contribute code to the Magento 2 CE codebase
