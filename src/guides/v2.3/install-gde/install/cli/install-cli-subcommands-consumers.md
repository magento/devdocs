---
group: installation-guide
title: Configure the lock provider
functional_areas:
  - Install
  - System
  - Setup
---

## First steps {#instgde-cli-before}
{% include install/first-steps-cli.md %}
In addition to the command arguments discussed here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common).

## Prerequisites {#instgde-cli-subcommands-store-prereq}

Before you run this command, you must do all of the following *or* you must [install the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-install.html):

*  [Create or update the deployment configuration]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html)
*  [Create the Magento database schema]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db.html)

## Configure the consumers behaviour {#instgde-cli-consumersconfig}

> Command usage

```bash
magento setup:config:set [--<parameter_name>=<value>, ...]
```

> Parameter descriptions

{% include config/consumers.md %}
