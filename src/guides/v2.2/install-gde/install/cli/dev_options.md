---
group: installation-guide
title: Contributing developers&mdash;update, reinstall Magento
functional_areas:
  - Install
  - System
  - Setup
---

The following topics apply to you *only* if you used `git clone` to install the {{site.data.var.ce}} GitHub repository. This usually means you contribute code to the {{site.data.var.ce}} codebase.

 {:.bs-callout-info}
If you clone the Magento 2 GitHub repository, you <em>cannot</em> use the Magento software in a production environment. You cannot have a live store that accepts orders and so on.

*  To [update the Magento software]({{ page.baseurl }}/install-gde/install/cli/dev_update-magento.html), use `git pull origin` and `composer update`, then update the Magento database
*  To [change versions]({{ page.baseurl }}/install-gde/install/cli/dev_downgrade.html) from `develop` to a release version like `2.0.4`, you must uninstall the Magento software and install the released version.
*  To [add, remove, or update components]({{ page.baseurl }}/install-gde/install/cli/dev_add-update.html), modify `composer.json` and run `composer update` and update the Magento database
*  To [reinstall the Magento software]({{ page.baseurl }}/install-gde/install/cli/dev_reinstall.html), modify the product version in `composer.json`, run `composer update`, then reinstall the Magento software

 {:.bs-callout-info}
If you are not a contributing developer, you perform upgrades and upgrades as discussed in [Updating the Magento application and components]({{ page.baseurl }}/comp-mgr/bk-compman-upgrade-guide.html).
