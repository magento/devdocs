---
group: software-update-guide
title: Magento upgrade overview
functional_areas:
  - Upgrade
---

<!-- Topic variables
{% capture ce %}{{site.data.var.ce}}{% endcapture %}
{% capture ee %}{{site.data.var.ee}}{% endcapture %}
-->

This topic discusses the ways you can:

*  Upgrade the Magento software from one version to another
*  Update any of the following:

   *  Modules (also referred to as *extensions*; extend Magento capabilities)
   *  Themes (change the look and feel of your storefront and Admin)
   *  Language packages (localize the storefront and Admin)

*  Uninstall extensions

## Upgrade the Magento application

The way you upgrade (that is, patch) the Magento application depends on how you installed it:

*  {{ce}} and {{ee}}: If you used [Composer] to install the Magento application or if you downloaded an [archive], you must use the [command line].
*  {{ce}} only: If you cloned the Magento 2 GitHub repository because you are contributing code to the {{ce}} codebase, [upgrade the software manually].
*  If your Magento root directory is `<your Magento install directory/pub>`, you can upgrade in any of the following ways:
   *  For the upgrade, create another subdomain or docroot that uses the Magento installation directory as its root.
   *  Upgrade the Magento software using the [command line].

*  To upgrade from {{ce}} to {{ee}}, see [Upgrade from Open Source to Commerce].

 {:.bs-callout-info}
__System upgrade__ refers to updating the Magento 2.x core modules and other installed modules.
To migrate from Magento 1.x to Magento 2, see the [Migration Guide].

{:.bs-callout-warning}
For upgrade or update, you must use the same authentication keys you used to install the Magento software.

For example, you *cannot* use {{ce}} authentication keys to update or upgrade {{ee}} or vice versa.
You also *cannot* use another user's authentication keys or [Shared account] authentication keys.

{:.ref-header}
Related topics

Complete the tasks discussed in [Prerequisites].

<!-- ABBREVIATIONS -->

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
*[contributing developers]: Developers who contribute code to the Magento 2 CE codebase

[archive]: {{ page.baseurl }}/install-gde/prereq/zip_install.html
[command line]: {{ page.baseurl }}/comp-mgr/cli/cli-upgrade.html
[Composer]: {{ page.baseurl }}/install-gde/composer.html
[Migration Guide]: {{ page.baseurl }}/migration/bk-migration-guide.html
[Prerequisites]: {{ page.baseurl }}/comp-mgr/prereq/prereq_compman.html
[Shared account]: http://docs.magento.com/m2/ce/user_guide/magento/magento-account-share.html
{:target="_blank"}
[Upgrade from Open Source to Commerce]: {{ page.baseurl }}/comp-mgr/cli/cli-upgrade.html#manage-packages
[upgrade the software manually]: {{ page.baseurl }}/install-gde/install/cli/dev_options.html
