---
group: install_cli
title: Create the Magento database schema
version: 2.1
redirect_from:
  - /guides/v1.0/install-gde/install/install-cli-subcommands-db.html
  - /guides/v2.0/install-gde/install/install-cli-subcommands-db.html
functional_areas:
  - Install
  - System
  - Setup
---

## First steps {#instgde-cli-before}

{% include install/first-steps-cli.html %}

In addition to the command arguments discussed here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common).

## Prerequisites {#instgde-cli-subcommands-db-prereq}

Before you run this command, you must [Create or update the deployment configuration]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html).

## Configure the database and add data {#instgde-cli-dbconfig}

Command usage:

	magento setup:db-schema:upgrade
	magento setup:db-data:upgrade

To see the status of the database, enter

	magento setup:db:status
