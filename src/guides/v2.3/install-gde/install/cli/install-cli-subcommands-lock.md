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

{% include install/fully-secure.md %}

## Configure the lock {#instgde-cli-lockconfig}

Configure a lock provider to prevent the launch of duplicate cron jobs and cron groups. (Requires Magento 2.2.5 and later 2.2.x versions or version 2.3.2 and later.)

Magento uses the database to save locks by default. If you have multiple nodes on your Magento Commerce servers, we recommend using Zookeeper as the lock provider.

If you are running Magento Commerce on the cloud infrastructure, you do not need to configure lock provider settings. Magento configures the file lock provider for Magento Commerce Pro projects during the provisioning process. See [Cloud variables]({{ site.baseurl }}/cloud/env/variables-cloud.html).

> Command usage

```bash
bin/magento setup:config:set [--<parameter_name>=<value>, ...]
```

> Parameter descriptions

|Name|Value|Required?|
|--- |--- |--- |
|`--lock-provider`|Lock provider name: `db`, `zookeeper`, or `file`.<br><br>The default lock provider: `db`|No|
|`--lock-db-prefix`|The specific db prefix to avoid lock conflicts when using the `db` lock provider.<br><br>The default value: `NULL`|No|
|`--lock-zookeeper-host`|Host and port to connect to the Zookeeper cluster when you use the `zookeeper` lock provider.<br><br>For example: `127.0.0.1:2181`|Yes, if you set `--lock-provider=zookeeper`|
|`--lock-zookeeper-path`|The path where Zookeeper saves locks.<br><br>The default path is: `/magento/locks`|No|
|`--lock-file-path`|The path where file locks are saved.|Yes, if you set `--lock-provider=file`|
{:style="table-layout:auto"}
