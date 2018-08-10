---
group: compman
title: Upgrade the Magento application and components
version: 2.1
functional_areas:
  - Upgrade
---

<!-- Topic variables
{% capture ce %}{{site.data.var.ce}}{% endcapture %}
{% capture ee %}{{site.data.var.ee}}{% endcapture %}
-->

This topic discusses the ways you can:
* Upgrade (that is, *patch*) the Magento software from version {{ page.version }}.0 to {{ page.version }}.1, for example
* Update *components*, which can be any of the following:
  *	Modules (extend Magento capabilities)
  *	Themes (change the look and feel of your storefront and Admin)
  *	Language packages (localize the storefront and Admin)

## Upgrade the Magento application

The way you upgrade (that is, patch) the Magento application depends on how you installed it:

* {{ce}} and {{ee}}: If you used [Composer] to install the Magento application or if you downloaded an [archive], use the [System Upgrade utility] or the [command line].
* {{ce}} only: If you cloned the Magento 2 GitHub repository because you are contributing code to the {{ce}} codebase, [upgrade the software manually].

* If your Magento root directory is `<your Magento install directory/pub>`, you can upgrade in any of the following ways:
  * For the upgrade, create another subdomain or docroot that uses the Magento installation directory as its root.
    
    Run the System Upgrade utility as discussed in this topic using that subdomain or docroot.
  
  *	Upgrade the Magento software using the [command line].
* To upgrade from {{ce}} to {{ee}}, see [Upgrade from CE to EE].

{:.bs-callout .bs-callout-info}
__System upgrade__ refers to updating the Magento 2.x core components and other installed components.
To migrate from Magento 1.x to Magento 2, see the [Migration Guide].

<div class="bs-callout bs-callout-warning" markdown="1">
content="For upgrade or update, you must use the same authentication keys you used to install the Magento software.
For example, you __cannot__ use {{ce}} authentication keys to update or upgrade {{ee}} or vice versa.
You also __cannot__ use:
* Another user's authentication keys
* [Shared account] authentication keys"
</div>

## Update components

To update Magento components, use the [Component Manager].

### Next step

Complete the tasks discussed in [Prerequisites].

<!-- Tooltips -->
*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
*[contributing developers]: Developers who contribute code to the Magento 2 CE codebase
 
<!-- Link definitions -->
[archive]: {{ page.baseurl }}/install-gde/prereq/zip_install.html
[command line]: {{ page.baseurl }}/comp-mgr/cli/cli-upgrade.html
[Component Manager]: {{ page.baseurl }}/comp-mgr/module-man/compman-start.html
[Composer]: {{ page.baseurl }}/install-gde/composer.html
[Migration Guide]: {{ page.baseurl }}/migration/bk-migration-guide.html
[Prerequisites]: {{ page.baseurl }}/comp-mgr/prereq/prereq_compman.html
[Shared account]: http://docs.magento.com/m2/ce/user_guide/magento/magento-account-share.html
{:target="_blank"}
[System Upgrade utility]: {{ page.baseurl }}/comp-mgr/upgrader/upgrade-start.html
[Upgrade from CE to EE]: {{ page.baseurl }}/comp-mgr/upgrader/ce-ee-upgrade-start.html
[upgrade the software manually]: {{ page.baseurl }}/install-gde/install/cli/dev_options.html