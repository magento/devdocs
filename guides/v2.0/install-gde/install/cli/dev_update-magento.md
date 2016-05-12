---
layout: default
group: install_cli 
subgroup: 99_contrib
title: Update the Magento application
menu_title: Update the Magento application
menu_order: 2
menu_node: 
github_link: install-gde/install/cli/dev_update-magento.md
redirect_from: /guides/v2.0/install-gde/install/cli/instgde-install-magento-update-db
---

This topic discusses how a contributing developer can update the Magento application without reinstalling it. To perform an upgrade if you're *not* a contributing developer, see <a href="{{ site.gdeurl }}comp-mgr/bk-compman-upgrade-guide.html">Updating the Magento application and components</a>.

To update the Magento software if you're a contributing developer:

1.	Log in to your Magento server as a user with permissions to modify files in the Magento file system (for example, the <a href="{{ site.gdeurl }}install-gde/prereq/file-sys-perms-over.html">>switch to the Magento file system owner</a>.
3. Save any changes you made to `composer.json` because the following steps will overwrite it:

		cd <your Magento install dir>
		cp composer.json composer.json.old

3.	Update your local repository to get the latest code:
		
		git pull origin develop

	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
  			<p>If <code>git pull origin develop</code> fails, see <a href="{{ site.gdeurl }}install-gde/trouble/git/tshoot_git-pull-origin.html">troubleshooting</a>.</p> </span>
	</div>
				
3.	Diff and merge your `composer.json.old` with `composer.json` installed with the Magento software.
4.	Enter the following command:

		composer update

5.	Update the Magento database:

		php <your Magento install dir>/bin/magento setup:upgrade

<!-- ABBREVIATIONS -->

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
*[contributing developers]: Developers who contribute code to the Magento 2 CE codebase