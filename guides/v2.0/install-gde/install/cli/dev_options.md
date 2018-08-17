---
group: install_cli
subgroup: 99_contrib
title: Contributing developers&mdash;update, reinstall Magento
menu_title: Contributing developers&mdash;update, reinstall Magento
menu_order: 1
menu_node: parent
version: 2.0
redirect_from:
 - /guides/v2.0/install-gde/install/dev_updater.html
 - /guides/v2.1/install-gde/install/dev_updater.html
functional_areas:
  - Install
  - System
  - Setup
---

The following topics apply to you *only* if you used `git clone` to install the {{site.data.var.ce}} GitHub repository. This usually means you contribute code to the {{site.data.var.ce}} codebase.

<div class="bs-callout bs-callout-warning">
    <p>If you clone the Magento 2 GitHub repository, you <em>cannot</em> use the Magento software in a production environment. You cannot have a live store that accepts orders and so on.</p>
</div>

*	To <a href="{{ page.baseurl }}/install-gde/install/cli/dev_update-magento.html">update the Magento software</a>, use `git pull origin` and `composer update`, then update the Magento database
*	To <a href="{{ page.baseurl }}/install-gde/install/cli/dev_downgrade.html">change versions</a> from `develop` to a release version like `2.0.4`, you must uninstall the Magento software and install the released version.
*	To <a href="{{ page.baseurl }}/install-gde/install/cli/dev_add-update.html">add, remove, or update components</a>, modify `composer.json` and run `composer update` and update the Magento database
*	To <a href="{{ page.baseurl }}/install-gde/install/cli/dev_reinstall.html">reinstall the Magento software</a>, modify the product version in `composer.json`, run `composer update`, then reinstall the Magento software

<div class="bs-callout bs-callout-info" id="info">
	<span class="glyphicon-class">
		<p>If you are not a contributing developer, you perform upgrades and upgrades as discussed in <a href="{{ page.baseurl }}/comp-mgr/bk-compman-upgrade-guide.html">Updating the Magento application and components</a>.</p> </span>
</div>

<!-- ABBREVIATIONS -->

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
