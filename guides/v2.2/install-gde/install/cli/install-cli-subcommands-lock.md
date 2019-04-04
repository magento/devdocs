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

*	[Create or update the deployment configuration]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html)
*	[Create the Magento database schema]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db.html)

{% include install/fully-secure.md %}

## Configure the lock {#instgde-cli-lockconfig}

Configure a lock provider to prevent the launch of duplicate cron jobs and cron groups. (Requires Magento 2.2.9 and later 2.2.x versions or version 2.3.2 and later.)

Locks are used to prevent the launch of duplicate cron jobs and cron groups.

Command usage:

	magento setup:store-config:set [--<parameter_name>=<value>, ...]

where the following table defines parameters and values.

|Name|Value|Required?|
|--- |--- |--- |
|`--lock-provider`|Lock provider name.<br><br>Available lock providers: `db`, `zookeeper`, `file`.<br><br>The default lock provider: `db`|No|
|`--lock-db-prefix`|The specific db prefix to avoid lock conflicts when using the `db` lock provider.<br><br>The default value: `NULL`|No|
|`--lock-zookeeper-host`|Host and port to connect to Zookeeper cluster when you use `zookeeper` lock provider.<br><br>For example: `127.0.0.1:2181`|Yes, if you set `--lock-provider=zookeeper`|
|`--lock-zookeeper-path`|The path where Zookeeper saves locks.<br><br>The default path is: `/magento/locks`|No|
|`--lock-file-path`|The path where file locks are saved.|Yes, if you set `--lock-provider=file`|
{:style="table-layout:auto;"}
