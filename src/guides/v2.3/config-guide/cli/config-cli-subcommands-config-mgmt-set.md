---
group: configuration-guide
title: Set configuration values
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

This topic discusses advanced configuration commands you can use to:

*  Set any configuration option from the command line
*  Optionally lock any configuration option so its value cannot be changed in the Magento Admin
*  Change a configuration option that is locked in the Magento Admin

You can use these commands to set the Magento configuration manually or using scripts. You set configuration options using a _configuration path_, which is a `/`-delimited string that uniquely identifies that configuration option. You can find configuration paths in the following references:

*  [Sensitive and system-specific configuration paths reference]({{ page.baseurl }}/config-guide/prod/config-reference-sens.html)
*  [Payment configuration paths reference]({{ page.baseurl }}/config-guide/prod/config-reference-payment.html)
*  [Other configuration paths reference]({{ page.baseurl }}/config-guide/prod/config-reference-most.html)
*  [Magento Enterprise B2B Extension configuration paths reference]({{ page.baseurl }}/config-guide/prod/config-reference-b2b.html)

You can set values at the following times:

*  Before you install Magento, you can set configuration values for the default scope only.

   That's because before you install Magento, the default scope is the only valid scope.

*  After you install Magento, you can set configuration values for any [website](https://glossary.magento.com/website) or [store view](https://glossary.magento.com/store-view) scope.

Use the following commands:

*  `bin/magento config:set` sets any non-sensitive configuration value by its configuration path
*  `bin/magento config:sensitive:set` sets any sensitive configuration value by its configuration path
*  `bin/magento config:show` shows saved configuration values; values of encrypted settings are displayed as asterisks

## Prerequisites

To set a configuration value, you must know at least one of the following:

*  The configuration path
*  To set a configuration value for a particular scope, you must know the scope code.

   To set a configuration value for the default scope, you don't need to do anything.

### Find the configuration path

See the following references:

*  [Sensitive and system-specific configuration paths reference]({{ page.baseurl }}/config-guide/prod/config-reference-sens.html)
*  [Payment configuration paths reference]({{ page.baseurl }}/config-guide/prod/config-reference-payment.html)
*  [Other configuration paths reference]({{ page.baseurl }}/config-guide/prod/config-reference-most.html)
*  [Magento Enterprise B2B Extension configuration paths reference]({{ page.baseurl }}/config-guide/prod/config-reference-b2b.html)

### Find the scope code

You can find the scope code either in the Magento database or in the Magento [Admin](https://glossary.magento.com/admin). See one of the following sections for more information.

#### Find the scope code in the Admin

{% collapsible To find the scope code in the Admin: %}

1. Log in to the Admin as a user who can view websites and store views.
1. Click **Stores** > Settings > **All Stores**.
1. In the right pane, click the name of the website or store view to see its code.

   The following figure shows a sample website code.

   ![Get a website or store view code from the Admin]({{ site.baseurl }}/common/images/config_configset_website-code.png){:width="450px"}

1. Continue with [Set configuration values](#config-cli-config-set).

{% endcollapsible %}

#### Find the scope code in the database

{% collapsible To find the scope code in the database: %}

Scope codes for websites and store views are stored in the Magento database in the `store_website` and `store` tables, respectively.

To find the values in the database:

1. Connect to the Magento database.

   ```bash
   mysql -u <magento database username> -p
   ```

1. Enter the following commands:

   ```shell
   use <magento database name>;
   ```

   ```shell
   SELECT * FROM store;
   ```

   ```shell
   SELECT * FROM store_website;
   ```

   A sample result follows:

   ```terminal
   [mysql]> SELECT * FROM store_website;
   +------------+-------+--------------+------------+------------------+------------+
   | website_id | code  | name         | sort_order | default_group_id | is_default |
   +------------+-------+--------------+------------+------------------+------------+
   |          0 | admin | Admin        |          0 |                0 |          0 |
   |          1 | base  | Main Website |          0 |                1 |          1 |
   |          2 | test1 | Test Website |          0 |                3 |          0 |
   +------------+-------+--------------+------------+------------------+------------+
   ```

   Use the value in the `code` column.

1. Continue with the next section.

{% endcollapsible %}

## Set configuration values {#config-cli-config-set}

To set system-specific configuration values, use:

```bash
bin/magento config:set [--scope="..."] [--scope-code="..."] [-le | --lock-env] [-lc | --lock-config] path value
```

To set sensitive configuration values, use:

```bash
bin/magento config:sensitive:set [--scope="..."] [--scope-code="..."] path value
```

The following table describes the `set` command parameters:

Parameter | Description
--- | --- | ---
`--scope` | The scope of the configuration. The possible values are `default`, `website`, or `store`. The default is `default`.
`--scope-code` | The scope code of configuration (website code or store view code)
`-le or --lock-env` | Either locks the value so it cannot be edited in the Magento Admin or changes a setting that is already locked in the Magento Admin. The command writes the value to the `<Magento base dir>/app/etc/env.php` file.
`-lc or --lock-config` | Either locks the value so it cannot be edited in the Magento Admin or changes a setting that is already locked in the Magento Admin. The command writes the value to the `<Magento base dir>/app/etc/config.php` file. The `--lock-config` option overwrites `--lock-env` if you specify both options.
`path` | *Required*. The configuration path
`value` | *Required*. The value of the configuration

{:.bs-callout-info}

*  As of Magento 2.2.4, the `--lock-env` and `--lock-config` options replace the `--lock` option.
*  If you use the `--lock-env` or `--lock-config` option to set or change a value, you must use the [`bin/magento app:config:import` command]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-config-mgmt-import.html) to import the setting before you access the Admin or storefront.

If you enter an incorrect configuration path, this command returns an error

```text
The "wrong/config/path" does not exist
```

See one of the following sections for more information:

*  [Set configuration values that can be edited in the Magento Admin](#config-cli-config-set-edit)
*  [Set configuration values that cannot be edited in the Magento Admin](#config-cli-config-file)

### Set configuration values that can be edited in the Magento Admin {#config-cli-config-set-edit}

Use `bin/magento config:set` _without_ `--lock-env` or `--lock-config` to write the value to the database. Values you set this way can be edited in the Magento Admin.

Some examples for setting a store base [URL](https://glossary.magento.com/url) follow:

Set the base URL for the default scope:

```bash
bin/magento config:set web/unsecure/base_url http://example.com/
```

Set the base URL for the `base` website:

```bash
bin/magento config:set --scope=websites --scope-code=base web/unsecure/base_url http://example2.com/
```

Set the base URL for the `test` store view:

```bash
bin/magento config:set --scope=stores --scope-code=test web/unsecure/base_url http://example3.com/
```

### Set configuration values that cannot be edited in the Magento Admin {#config-cli-config-file}

If you use the `--lock-env`  option as follows, the command saves the configuration value in `<Magento base dir>/app/etc/env.php` and disables the field for editing this value in Admin.

```bash
bin/magento config:set --lock-env --scope=stores --scope-code=default web/unsecure/base_url http://example3.com
```

You can use the `--lock-env` option to set configuration values if Magento is not installed. However, you can set values only for the default scope.

{:.bs-callout-info}
The `env.php` file is system specific. You should not transfer it to another system. You can use it to overwrite configuration values from the database. For example, you can take a database dump from another system and overwrite the `base_url` and other values so you don't have to modify the database.

If you use the `--lock-config` option as follows, the configuration value is saved in `<Magento base dir>/app/etc/config.php`. The field for editing this value in Admin page is disabled.

```bash
bin/magento config:set --lock-config --scope=stores --scope-code=default web/url/use_store 1
```

You can use `--lock-config` to set configuration values if Magento is not installed. However, you can set values only for the default scope.

{:.bs-callout-info}
You can transfer `config.php` to another system to use the same configuration values there. For example, if you have a testing system, using the same `config.php` means you don't have to set the same configuration values again.

## Display the value of configuration settings {#config-cli-config-show}

Command options:

```bash
bin/magento config:show [--scope[="..."]] [--scope-code[="..."]] path
```

where

*  `--scope` is the scope of configuration (default, website, store). The default value is `default`
*  `--scope-code` is the scope code of configuration (website code or store view code)
*  `path` is the configuration path in format first_part/second_part/third_part/etc *(required)*

{:.bs-callout-info}
The `bin/magento config:show` command displays the values of any [encrypted values]({{ page.baseurl }}/config-guide/prod/config-reference-sens.html) as a series of asterisks: `******`.

### Examples

**Show all saved configurations**:

```bash
bin/magento config:show
```

Result:

<pre class="no-copy">web/unsecure/base_url - http://example.com/
general/region/display_all - 1
general/region/state_required - AT,BR,CA,CH,EE,ES,FI,LT,LV,RO,US
catalog/category/root_id - 2
analytics/subscription/enabled - 1</pre>

**Show all saved configurations for the `base` website**:

```bash
bin/magento config:show --scope=websites --scope-code=base
```

Result:

<pre class="no-copy">web/unsecure/base_url - http://example-for-website.com/
general/region/state_required - AT,BR,CA</pre>

**Show the base URL for the default scope**:

```bash
bin/magento config:show web/unsecure/base_url
```

Result:

<pre class="no-copy">web/unsecure/base_url - http://example.com/</pre>

**Show the base URL for the `base` website**:

```bash
bin/magento config:show --scope=websites --scope-code=base web/unsecure/base_url
```

Result:

<pre class="no-copy">web/unsecure/base_url - http://example-for-website.com/</pre>

**Show the base URL for the `default` store**:

```bash
bin/magento config:show --scope=stores --scope-code=default web/unsecure/base_url
```

Result:

<pre class="no-copy">web/unsecure/base_url - http://example-for-store.com/</pre>

{:.ref-header}
Related topic

[Deployment general overview]({{ page.baseurl }}/config-guide/deployment/pipeline/)
