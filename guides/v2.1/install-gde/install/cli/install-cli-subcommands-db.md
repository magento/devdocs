---
layout: default
group: install_cli
title: Create the Magento database schema
version: 2.1
github_link: install-gde/install/cli/install-cli-subcommands-db.md
redirect_from:
  - /guides/v1.0/install-gde/install/install-cli-subcommands-db.html
  - /guides/v2.0/install-gde/install/install-cli-subcommands-db.html
functional_areas:
  - Install
  - System
  - Setup
---

<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{page.baseurl}}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="instgde-cli-subcommands-db-prereq">Prerequisites</h2>
Before you run this command, you must <a href="{{page.baseurl}}/install-gde/install/cli/install-cli-subcommands-deployment.html">Create or update the deployment configuration</a>.

<h2 id="instgde-cli-dbconfig">Configure the database and add data</h2>
Command usage:

	magento setup:db-schema:upgrade
	magento setup:db-data:upgrade

To see the status of the database, enter

	magento setup:db:status