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

## Magento command-line interface (CLI)

{% include install/new-cli-intro.md %}

This topic discusses installing the Magento software using the CLI. For information about configuring Magento, see the [Configuration Guide]({{ page.baseurl }}/config-guide/bk-config-guide.html).

## The basics

The basic steps for updating or reinstalling your Magento application are:

1. Ensure your server meets [our system requirements and create the Magento file system owner]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html).
1. [Install Composer and clone the Magento repository]({{ page.baseurl }}/install-gde/prereq/dev_install.html).
1. [Update installation dependencies]({{ page.baseurl }}/install-gde/install/prepare-install.html).
1. [Update the Magento application]({{ page.baseurl }}/install-gde/install/cli/dev_update-magento.html).
1. [Add/update components]({{ page.baseurl }}/install-gde/install/cli/dev_add-update.html).
1. [Change versions of the Magento software]({{ page.baseurl }}/install-gde/install/cli/dev_downgrade.html) after cloning.
1. _(Update or reinstall only)_ [Reinstall the Magento software]({{ page.baseurl }}/install-gde/install/cli/dev_reinstall.html).

Follow these processes in this section's topics to update or reinstall your Magento application software.

 {:.bs-callout-info}
If you are not a contributing developer, use our [Updating the Magento application and components topic]({{ page.baseurl }}/comp-mgr/bk-compman-upgrade-guide.html) to perform updates or upgrades or our [Quick start install (non-contributor) topic]({{ page.baseurl }}/install-gde/composer.html) to perform a brand new install.
