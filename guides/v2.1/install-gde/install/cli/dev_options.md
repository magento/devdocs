---
layout: default
group: install_cli 
subgroup: 99_contrib
title: Contributing developers&mdash;update, reinstall Magento
menu_title: Contributing developers&mdash;update, reinstall Magento
menu_order: 1
menu_node: parent
version: 2.1
github_link21: install-gde/install/cli/dev_options.md
---

The following topics apply to you *only* if you used `git clone` to install the Magento CE GitHub repository. This usually means you contribute code to the Magento CE codebase.

*	To <a href="{{ site.gdeurl21 }}install-gde/install/cli/dev_update-magento.html">update the Magento software</a>, use `git pull origin` and `composer update`
*	To <a href="{{ site.gdeurl21 }}install-gde/install/cli/dev_downgrade.html">change versions</a> from `develop` to a release version like `2.0.2`, you must uninstall the Magento software and install the released version.
*	To <a href="{{ site.gdeurl21 }}install-gde/install/cli/dev_add-update.html">add, remove, or update components</a>, modify `composer.json` and run `composer update`
*	To <a href="{{ site.gdeurl21 }}install-gde/install/cli/dev_reinstall.html">reinstall the Magento software</a>, modify the product version in `composer.json`, run `composer update`, then reinstall the Magento software

<div class="bs-callout bs-callout-info" id="info">
	<span class="glyphicon-class">
		<p>If you are not a contributing developer, you perform upgrades and upgrades as discussed in <a href="{{ site.gdeurl21 }}comp-mgr/bk-compman-upgrade-guide.html">Updating the Magento application and components</a>.</p> </span>
</div>

<!-- ABBREVIATIONS -->

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
