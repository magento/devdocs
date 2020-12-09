---
title: Command Line install (contributor)
functional_areas:
  - Install
  - System
  - Setup
redirect_from:
  - /guides/v2.4/install-gde/install/web/install-web-configure-catalog-search.html
  - /guides/v2.4/install-gde/install/web/install-web.html
  - /guides/v2.4/install-gde/install/web/install-web_1-readiness.html
  - /guides/v2.4/install-gde/install/web/install-web_2-db.html
  - /guides/v2.4/install-gde/install/web/install-web_3-web-conf.html
  - /guides/v2.4/install-gde/install/web/install-web_4-customize-store.html
  - /guides/v2.4/install-gde/install/web/install-web_5-create-admin.html
  - /guides/v2.4/install-gde/install/web/install-web_6-install.html
---

{:.bs-callout-tip}
Totally lost? Need a helping hand? Try our [installation quick reference (tutorial)]({{ page.baseurl }}/install-gde/install-quick-ref.html) or [installation roadmap (reference)]({{ page.baseurl }}/install-gde/install-roadmap_part1.html).

{:.bs-callout-info}
If you chose to enable SELinux, see [SELinux and iptables]({{ page.baseurl }}/install-gde/prereq/security.html).

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

## Introducing the Magento command-line interface (CLI) {#new-cli-intro}
{% include install/new-cli-intro.md %}

This topic discusses installing the Magento software using the CLI. For information about configuring Magento, see the [Configuration Guide]({{ page.baseurl }}/config-guide/bk-config-guide.html).
