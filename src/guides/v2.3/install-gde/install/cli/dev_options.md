---
title: (Contributor) Update or reinstall Magento
functional_areas:
  - Install
  - System
  - Setup
---

The following topics apply to you *only* if you used `git clone` to install the {{site.data.var.ce}} GitHub repository. This usually means you contribute code to the {{site.data.var.ce}} codebase.

 {:.bs-callout-info}
If you clone the Magento 2 GitHub repository, you <em>cannot</em> use the Magento software in a production environment (a live store that accepts orders).

The basic steps for updating or reinstalling your Magento application are:

1. Ensure your server meets our system requirements and create the Magento file system owner.
1. Install Composer
1. Clone the Magento repository.
1. Update installation dependencies.
1. Update the Magento application.
1. Add/update components.
1. Change versions of the Magento software after cloning.
1. Reinstall the Magento software.

Follow these processes in this section's topics to update or reinstall your Magento application software.

*  To get started with your Magento update or reinstallation, ensure your server meets our system requirements, [create the Magento file system owner]({{ page.baseurl }}/install-gde/prereq/dev_install.html#prerequisites), [install Composer]({{ page.baseurl }}/install-gde/prereq/dev_install.html#instgde-prereq-compose-install), and [clone the repository]({{ page.baseurl }}/install-gde/prereq/dev_install.html#instgde-prereq-compose-clone).
*  To update the Magento software, pull in changes from the Magento 2 GitHub repository, [resolve dependencies]({{ page.baseurl }}/install-gde/install/prepare-install.html), and [update the Magento application]({{ page.baseurl }}/install-gde/install/cli/dev_update-magento.html).
*  To [add, remove, or update components]({{ page.baseurl }}/install-gde/install/cli/dev_add-update.html), specify them and their versions in Magento’s `composer.json`.
*  To [change versions]({{ page.baseurl }}/install-gde/install/cli/dev_downgrade.html) from `develop` to a release version like `2.4.1`, you must uninstall the Magento software and install the released version.
*  To [reinstall the Magento software]({{ page.baseurl }}/install-gde/install/cli/dev_reinstall.html), modify the product version in `composer.json`, run `composer update`, then reinstall the Magento software.

 {:.bs-callout-info}
If you are not a contributing developer, you perform updates and upgrades as detailed in [Updating the Magento application and components]({{ page.baseurl }}/comp-mgr/bk-compman-upgrade-guide.html).
