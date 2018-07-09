---
group: compman
subgroup: 01_Introduction
title: Upgrade the Magento application and components
landing-page: System Upgrade Guide
menu_title: Upgrade the Magento application and components
menu_node: parent
menu_order: 1
version: 2.1
github_link: comp-mgr/bk-compman-upgrade-guide.md
functional_areas:
  - Upgrade
---

This topic discusses the ways you can:

*	Upgrade (that is, *patch*) the Magento software from version 2.0.0 to 2.0.1, for example
*	Update *components*, which can be any of the following:

	*	Modules (extend Magento capabilities)
	*	Themes (change the look and feel of your storefront and Admin)
	*	Language packages (localize the storefront and Admin)

## Upgrade the Magento application

The way you upgrade (that is, patch) the Magento application depends on how you installed it:

*	{{site.data.var.ce}} and {{site.data.var.ee}}: If you used [Composer] to install the Magento application or if you downloaded an [archive], use the [System Upgrade utility] or the [command line].
*	{{site.data.var.ce}} only: If you cloned the Magento 2 GitHub repository because you are contributing code to the {{site.data.var.ce}} codebase, [upgrade the software manually].

*	If your Magento root directory is `<your Magento install directory/pub>`, you can upgrade in any of the following ways:

	*	For the upgrade, create another subdomain or docroot that uses the Magento installation directory as its root.

		Run the System Upgrade utility as discussed in this topic using that subdomain or docroot.
	*	Upgrade the Magento software using the [command line].
*	To upgrade from {{site.data.var.ce}} to {{site.data.var.ee}}, see [Upgrade from CE to EE].

{%
include note.html
type="info"
content="__System upgrade__ refers to updating the Magento 2.x core components and other installed components. To migrate from Magento 1.x to Magento 2, see the [Migration Guide]."
%}

<div class="bs-callout bs-callout-warning" id="warning" markdown="1">
For upgrade or update, you must use the same authentication keys you used to install the Magento software. For example, you __cannot__ use {{site.data.var.ce}} authentication keys to update or upgrade {{site.data.var.ee}} or vice versa. You also __cannot__ use:
* Another user's authentication keys
* [Shared account] authentication keys
</div>



## Update components

To update Magento components, use the [Component Manager]({{ page.baseurl }}/comp-mgr/module-man/compman-start.html).


### Next step

Complete the tasks discussed in [Prerequisites]({{ page.baseurl }}/comp-mgr/prereq/prereq_compman.html).



<!-- ABBREVIATIONS -->

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
*[contributing developers]: Developers who contribute code to the Magento 2 CE codebase


[Composer]: {{ page.baseurl }}/install-gde/prereq/integrator_install.html
[archive]: {{ page.baseurl }}/install-gde/prereq/zip_install.html
[System Upgrade utility]: {{ page.baseurl }}/comp-mgr/upgrader/upgrade-start.html
[command line]: {{ page.baseurl }}/comp-mgr/cli/cli-upgrade.html
[upgrade the software manually]: {{ page.baseurl }}/install-gde/install/cli/dev_options.html
[command line]: {{ page.baseurl }}/comp-mgr/cli/cli-upgrade.html
[Upgrade from CE to EE]: {{ page.baseurl }}/comp-mgr/upgrader/ce-ee-upgrade-start.html
[Migration Guide]: {{ page.baseurl }}/migration/bk-migration-guide.html
[Shared account]: http://docs.magento.com/m2/ce/user_guide/magento/magento-account-share.html
{:target="_blank"}
