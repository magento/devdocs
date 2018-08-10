---
group: install_cli
title: Update the Magento database schema and data
version: 2.1
functional_areas:
  - Install
  - System
  - Setup
---

## First steps {#instgde-cli-before}
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common).

## Prerequisites {#instgde-cli-subcommands-maint-prereq}

Before you use this command, you must [install the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-install.html).

## Upgrade the Magento database schema and data {#instgde-cli-db-upgr}

Anytime you perform an action that causes the Magento {% glossarytooltip 66b924b4-8097-4aea-93d9-05a81e6cc00c %}database schema{% endglossarytooltip %} or data to change, you must update them by running the command discussed in this section. A partial list of reasons follows:

*	You upgraded the Magento software using the command line
*	You installed or updated a component using the command line
*	You enabled or disabled a component using the command line

Note the following:

*	If you used the Web Setup Wizard to do any of the preceding, you don't have to use the command discussed in this topic.
*	A Magento *component* can be a module, theme, or language pack; it doesn't matter whether the component comes from the Magento Marketplace or not

Command usage:

	magento setup:upgrade [--keep-generated]

where `--keep-generated` is an optional argument that does not update [static view files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html). This optional argument is for use *only* in limited circumstances by experienced system integrators. It should be used *only* in [production mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#production-mode). It should *not* be used in [developer mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#developer-mode).
