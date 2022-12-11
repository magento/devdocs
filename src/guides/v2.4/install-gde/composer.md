---
title: Quick start install
functional_areas:
  - Install
  - System
  - Setup
redirect_from:
  - guides/v2.4/install-gde/prereq/zip_install.html
redirect_to: https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/composer.html
layout: migrated
---

{% include install/composer-overview.md %}

## Prerequisites

Before you continue, you must do the following:

-  Complete all [prerequisite tasks][].
-  [Install Composer][].
-  Get [authentication keys][] to the Magento Composer repository.

## Log in as file system owner {#instgde-cli-before}

Learn about ownership, permissions, and the file system owner in our [Overview of ownership and permissions topic]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).

To switch to the file system owner:
{% include install/first-steps-cli.md %}
In addition to the command arguments discussed here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common).

## Get the metapackage

To get the Magento metapackage:

1. Log in to your Magento server as, or switch to, the [file system owner][].
1. Change to the web server docroot directory or a directory that you have configured as a virtual host docroot.
1. Create a new Composer project using the {{site.data.var.ce}} or {{site.data.var.ee}} metapackage.

    **{{site.data.var.ce}}**

    ```bash
    composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition <install-directory-name>
    ```

    **{{site.data.var.ee}}**

    ```bash
    composer create-project --repository-url=https://repo.magento.com/ magento/project-enterprise-edition <install-directory-name>
    ```

    When prompted, enter your Magento authentication keys. Public and private keys are created and configured in your [Commerce Marketplace][].

    If you encounter errors, such as `Could not find package...` or `...no matching package found`, make sure there are no typos in your command. If you still encounter errors, you may not be authorized to download {{site.data.var.ee}}. Contact [Magento support](https://magento.com/support) for help.

    See [Troubleshooting][] for help with more errors.

    {% include install/pre-release.md %}

### Example - Minor release

Minor releases contain new features, quality fixes, and security fixes. Use Composer to specify a minor release. For example, to specify the {{site.data.var.ee}} 2.4.3 metapackage:

```bash
composer create-project --repository-url=https://repo.magento.com/ magento/project-enterprise-edition=2.4.3 <install-directory-name>
```

### Example - Quality patch

Quality patches primarily contain functional _and_ security fixes. However, they can also sometimes contain new, backward-compatible features. Use Composer to download a quality patch. For example, to specify the {{site.data.var.ee}} 2.4.3 metapackage:

```bash
composer create-project --repository-url=https://repo.magento.com/ magento/project-enterprise-edition=2.4.3 <install-directory-name>
```

### Example - Security patch

Security patches contain security fixes only. They are designed to make the upgrade process faster and easier.

Security patches use the Composer naming convention `2.4.3-px`. Use Composer to specify a patch. For example, to download the {{site.data.var.ee}} 2.4.3-p1 metapackage:

```bash
composer create-project --repository-url=https://repo.magento.com/ magento/project-enterprise-edition=2.4.3-p1 <install-directory-name>
```

## Set file permissions

You must set read-write permissions for the web server group before you install the Magento software. This is necessary so that the command line can write files to the Magento file system.

```terminal
cd /var/www/html/<magento install directory>
find var generated vendor pub/static pub/media app/etc -type f -exec chmod g+w {} +
find var generated vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} +
chown -R :www-data . # Ubuntu
chmod u+x bin/magento
```

## Install Magento

You must use the command line to install Magento.

This example assumes that the Magento install directory is named `magento2ee`, the `db-host` is on the same machine (`localhost`), and that the `db-name`, `db-user`, and `db-password` are all `magento`:

```bash
bin/magento setup:install \
--base-url=http://localhost/magento2ee \
--db-host=localhost \
--db-name=magento \
--db-user=magento \
--db-password=magento \
--admin-firstname=admin \
--admin-lastname=admin \
--admin-email=admin@admin.com \
--admin-user=admin \
--admin-password=admin123 \
--language=en_US \
--currency=USD \
--timezone=America/Chicago \
--use-rewrites=1 \
--search-engine=opensearch \
--opensearch-host=es-host.example.com \
--opensearch-port=9200 \
--opensearch-index-prefix=magento2 \
--opensearch-timeout=15
```

{:.bs-callout-tip}
You can customize the Admin URI with the `--backend-frontname` option. However, we recommend omitting this option and allowing the installation command to automatically generate a random URI. A random URI is harder for hackers or malicious software to exploit. The URI displays in your console when installation is complete.

{:.bs-callout-tip}
For a full description of the CLI install options, refer to [Install the Magento software from the command line][].

## Command summary {#instgde-cli-summary}
{% include install/cli_help-commands.md %}

The following table summarizes the available commands. Commands are shown in summary form only. For more information about a command, click the link in the Command column.

|Command|Description|Prerequisites|
|--- |--- |--- |
|`magento setup:install`|Installs the Magento software|None|
|`magento setup:uninstall`|Removes the Magento software.|Magento software installed|
|`magento setup:upgrade`|Updates the Magento software.|Deployment configuration|
|`magento maintenance:{enable/disable}`|Enables or disables maintenance mode (in maintenance mode, only exempt IP addresses can access the Admin or storefront).|Magento software installed|
|`magento setup:config:set`|Creates or updates the deployment configuration.|None|
|`magento module:{enable/disable}`|Enable or disable modules.|None|
|`magento setup:store-config:set`|Sets storefront-related options, such as base URL, language, timezone, and so on.|Deployment configuration
Database (simplest way is to use magento setup:upgrade)|
|`magento setup:db-schema:upgrade`|Updates the Magento database schema.|Deployment configuration|
|`magento setup:db-data:upgrade`|Updates the Magento database data.|Deployment configuration|
|`magento setup:db:status`|Checks if the database is up-to-date with the code.|Deployment configuration|
|`magento admin:user:create`|Creates a Magento administrator.|All of the following:<br><br>Deployment configuration<br><br>Enable at minimum the Magento_User and Magento_Authorization modules<br><br>Database (simplest way is to use magento setup:upgrade)|
|`magento list`|Lists all available commands.|None|
|`magento help`|Provides help for the specified command.|None|

### Common arguments {#instgde-cli-subcommands-common}

{% include install/cli_common-commands.md %}

{:.bs-callout-info}
Hooray! You've completed the quick install. Need more advanced help? Check out our [Advanced install]({{ page.baseurl }}/install-gde/install/cli/install-cli.html) guide.

<!-- Link Definitions -->
[Commerce Marketplace]: https://marketplace.magento.com/customer/accessKeys/
[Modify docroot for security]: {{page.baseurl}}/install-gde/tutorials/change-docroot-to-pub.html
[Install the Magento software from the command line]: {{page.baseurl}}/install-gde/install/cli/install-cli.html
[troubleshooting]: https://support.magento.com/hc/en-us/articles/360033818091
[file system owner]: {{page.baseurl}}/install-gde/prereq/file-sys-perms-over.html
[authentication keys]: {{page.baseurl}}/install-gde/prereq/connect-auth.html
[Install Composer]: https://getcomposer.org/download/
[system requirements]: {{ page.baseurl }}/install-gde/system-requirements.html
[prerequisite tasks]: {{ page.baseurl }}/install-gde/prereq/prereq-overview.html
