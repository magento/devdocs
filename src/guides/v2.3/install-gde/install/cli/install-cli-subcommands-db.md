---
group: installation-guide
title: Create the Magento database schema
functional_areas:
  - Install
  - System
  - Setup
---

## First steps {#instgde-cli-before}

{% include install/first-steps-cli.md %}

In addition to the command arguments discussed here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common).

## Prerequisites {#instgde-cli-subcommands-db-prereq}

Before you run this command, you must [Create or update the deployment configuration]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html).

## Configure the database and add data {#instgde-cli-dbconfig}

Command usage:

```bash
bin/magento setup:db-schema:upgrade
```

To see the status of the database, enter

```bash
bin/magento setup:db:status
```
