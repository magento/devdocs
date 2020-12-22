---
group: installation-guide
subgroup: 05_Command-line installation
title: Create or update the deployment configuration
menu_title: Create or update the deployment configuration
menu_node:
menu_order: 9
functional_areas:
  - Install
  - System
  - Setup
  - Deploy
---

## First steps {#instgde-cli-before}

{% include install/first-steps-cli.md %}

In addition to the command arguments discussed here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common).

## Prerequisites {#instgde-cli-subcommands-configphp-prereq}

There are no prerequisites for using this command.

## Create or update the Magento deployment configuration {#instgde-cli-subcommands-configphp}

[Magento's deployment configuration]({{ page.baseurl }}/config-guide/config/config-php.html) provides the information Magento needs to initialize and bootstrap.

You can use this command if:

*  You previously installed the Magento software and you want to modify the deployment configuration
*  If you want to create only the deployment configuration and continue the Magento installation some other way
*  To update the deployment configuration without affecting anything else

Command options:

```bash
bin/magento setup:config:set [--<parameter>=<value>, ...]
```

The following table discusses the meanings of installation parameters and values.

|Parameter|Value|Required?|
|--- |--- |--- |
|`--backend-frontname`|Uniform Resource Identifier ([URI](http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.2)) to access the Magento Admin.<br><br>To prevent exploits, we recommend you not use a common word like admin, backend, and so on. The Admin URI can contain alphanumeric values and the underscore character (`_`) only.|No|
|`--db-host`|Use any of the following:<br><br>- The database server's fully qualified hostname or IP address.<br><br>- `localhost` (default) or `127.0.0.1` if your database server is on the same host as your web server. localhost means the MySQL client library uses UNIX sockets to connect to the database. `127.0.0.1` causes the client library to use the TCP protocol. For more information about sockets, see the [PHP PDO_MYSQL documentation](http://php.net/manual/en/ref.pdo-mysql.php).<br><br>**Note:** You can optionally specify the database server port in its hostname like `www.example.com:9000`|No|
|`--db-name`|Name of the Magento database instance in which you want to install the Magento database tables.<br><br>Default is `magento2`.|No|
|`--db-user`|Username of the Magento database instance owner.<br><br>Default is `root`.|No|
|`--db-password`|Magento database instance owner's password.|No|
|`--db-prefix`|Use only if you're installing the Magento database tables in a database instance that has Magento tables in it already.<br><br>In that case, use a prefix to identify the Magento tables for this installation. Some customers have more than one Magento instance running on a server with all tables in the same database.<br><br>The prefix can be a maximum of five characters in length. It must begin with a letter and can include only letters, numbers, and underscore characters.<br><br>This option enables those customers to share the database server with more than one Magento installation.|No|
|`--session-save`|Use any of the following:<br><br>- `db` to store session data in the [database]({{ page.baseurl }}/extension-dev-guide/cache/partial-caching/database-caching.html). Choose database storage if you have a clustered database; otherwise, there might not be much benefit over file-based storage.<br><br>- `files` to store session data in the file system. File-based session storage is appropriate unless the Magento file system access is slow, you have a clustered database, or you want to store session data in Redis.<br><br>- `redis` to store session data in [Use Redis for session storage]({{ page.baseurl }}/config-guide/redis/config-redis.html>Redis. If you will be using Redis for default or page caching, Redis must be already installed. |No|
|`--key`|If you have one, specify a key to encrypt [sensitive data](#sens-data) in the Magento database. If you don't have one, Magento generates one for you.|No|
|`--db-init-statements`|Advanced MySQL configuration parameter. Uses database initialization statements to run when connecting to the MySQL database.<br><br>Default is `SET NAMES utf8;`.<br><br>Consult a reference similar to [this one](http://dev.mysql.com/doc/refman/5.6/en/server-options.html) before you set any values.|No|
|`--http-cache-hosts`|Comma-separated list of HTTP cache gateway hosts to which to send purge requests. (For example, Varnish servers.) Use this parameter to specify the host or hosts to purge in the same request. (It doesn't matter if you have only one host or many hosts.)<br><br>Format must be `<hostname or ip>:<listen port>`, where you can omit `<listen port>` if it's port 80. For example, `--http-cache-hosts=192.0.2.100,192.0.2.155:6081`. Do not separate hosts with a space character.|No|

{% include install/sens-data.md %}

If applicable, continue your Magento software installation:

*  [Command line installation]({{ page.baseurl }}/install-gde/install/cli/install-cli-install.html)
*  [Setup Wizard installation]({{ page.baseurl }}/install-gde/install/web/install-web.html)

{:.ref-header}
Related topics

*  [Installing the Magento software using the command line]({{ page.baseurl }}/install-gde/install/cli/install-cli-install.html)
*  [Remove sample data modules or update sample data]({{ page.baseurl }}/install-gde/install/cli/install-cli-sample-data-other.html)
*  [Enable or disable modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html)
*  [Display or change the Admin URI]({{ page.baseurl }}/install-gde/install/cli/install-cli-adminurl.html)
*  [Uninstall modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-mods.html)
*  [Enable or disable maintenance mode]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-maint.html)
*  [Create the Magento database schema]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db.html)
*  [Update the Magento database schema and data]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db-upgr.html)
*  [Configure the store]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-store.html)
*  [Create or unlock a Magento administrator]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-admin.html)
*  [Back up and roll back the file system, media, and database]({{ page.baseurl }}/install-gde/install/cli/install-cli-backup.html)
*  [Uninstall themes]({{ page.baseurl }}/install-gde/install/cli/install-cli-theme-uninstall.html)
*  [Uninstall language packages]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-langpk.html)
*  [Uninstall the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall)
*  [Update the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update)
*  [Reinstall the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-reinstall)
