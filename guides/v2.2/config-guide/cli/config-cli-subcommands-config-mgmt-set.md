---
layout: default
group: config-guide
subgroup: 04_CLI
title: Set configuration values
menu_title: Set configuration values
menu_node:
level3_menu_node: level3child
level3_subgroup: cli-config-mgmt
menu_order: 252
version: 2.2
github_link: config-guide/cli/config-cli-subcommands-config-mgmt-set.md
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

This topic discusses advanced configuration commands you can use to:

*   Set any configuration option from the command line
*   Optionally lock any configuration option so its value cannot be changed in the Magento Admin
*   Change a configuration option that is locked in the Magento Admin

You can use these commands to set the Magento configuration manually or using scripts. You set configuration options using a _configuration path_, which is a `/`-delimited string that uniquely identifies that configuration option. You can find configuration paths in the following references:

*   [Sensitive and system-specific configuration paths reference]({{ page.baseurl}}/config-guide/prod/config-reference-sens.html)
*   [Payment configuration paths reference]({{ page.baseurl}}/config-guide/prod/config-reference-payment.html)
*   [Other configuration paths reference]({{ page.baseurl}}/config-guide/prod/config-reference-most.html)
*   [Magento Enterprise B2B Extension configuration paths reference]({{ page.baseurl}}/config-guide/prod/config-reference-b2b.html)

You can set values at the following times:

*   Before you install Magento, you can set configuration values for the default scope only.

    That's because before you install Magento, the default scope is the only valid scope.
*   After you install Magento, you can set configuration values for any {% glossarytooltip a3c8f20f-b067-414e-9781-06378c193155 %}website{% endglossarytooltip %} or {% glossarytooltip ca5a9ff1-8182-4fc4-a34b-9b3f831dbf3f %}store view{% endglossarytooltip %} scope.

Use the following commands:

*   `bin/magento config:set` sets any non-sensitive configuration value by its configuration path
*   `bin/magento config:sensitive:set` sets any sensitive configuration value by its configuration path
*   `bin/magento config:show` shows saved configuration values; values of encrypted settings are displayed as asterisks

## Prerequisites
To set a configuration value, you must know at least one of the following:

*   The configuration path
*   To set a configuration value for a particular scope, you must know the scope code.

    To set a configuration value for the default scope, you don't need to do anything.

### Find the configuration path
See the following references:

*   [Sensitive and system-specific configuration paths reference]({{ page.baseurl}}/config-guide/prod/config-reference-sens.html)
*   [Payment configuration paths reference]({{ page.baseurl}}/config-guide/prod/config-reference-payment.html)
*   [Other configuration paths reference]({{ page.baseurl}}/config-guide/prod/config-reference-most.html)
*   [Magento Enterprise B2B Extension configuration paths reference]({{ page.baseurl}}/config-guide/prod/config-reference-b2b.html)

### Find the scope code
You can find the scope code either in the Magento database or in the Magento {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %}. See one of the following sections for more information.

#### Find the scope code in the Admin

{% collapsible To find the scope code in the Admin: %}

1.  Log in to the Admin as a user who can view websites and store views.
2.  Click **Stores** > Settings > **All Stores**.
3.  In the right pane, click the name of the website or store view to see its code.

    The following figure shows a sample website code.

    ![Get a website or store view code from the Admin]({{ site.baseurl}}/common/images/config_configset_website-code.png){:width="450px"}
4.  Continue with [Set configuration values](#config-cli-config-set).

{% endcollapsible %}

#### Find the scope code in the database

{% collapsible To find the scope code in the database: %}

Scope codes for websites and store views are stored in the Magento database in the `store_website` and `store` tables, respectively.

To find the values in the database:

1.  Connect to the Magento database.

        mysql -u <magento database user name> -p
2.  Enter the following commands:

        use <magento database name>;
        SELECT * FROM store;
        SELECT * FROM store_website;

    A sample result follows:

        [mysql]> SELECT * FROM store_website;
        +------------+-------+--------------+------------+------------------+------------+
        | website_id | code  | name         | sort_order | default_group_id | is_default |
        +------------+-------+--------------+------------+------------------+------------+
        |          0 | admin | Admin        |          0 |                0 |          0 |
        |          1 | base  | Main Website |          0 |                1 |          1 |
        |          2 | test1 | Test Website |          0 |                3 |          0 |
        +------------+-------+--------------+------------+------------------+------------+

    Use the value in the `code` column.

3.  Continue with the next section.

{% endcollapsible %}

## Set configuration values {#config-cli-config-set}
To set system-specific configuration values, use:

    bin/magento config:set [--scope="..."] [--scope-code="..."] [-l|--lock] path value

where

*   `--scope` is the scope of configuration (`default`, `website`, or `store`). The default value is `default`.
*   `--scope-code` is the scope code of configuration (website code or store view code)
*   `-l|--lock` enables you to:

    *   Lock the value so it cannot be edited in the Magento Admin
    *   Change a setting that is already locked in the Magento Admin
*   `path` is configuration path *(required)*
*   `value` is value of configuration *(required)*

To set sensitive configuration values, use:

    bin/magento config:sensitive:set [--scope="..."] [--scope-code="..."] path value

See one of the following sections for more information:

*   [Set configuration values that can be edited in the Magento Admin](#config-cli-config-set-edit)
*   [Set configuration values that cannot be edited in the Magento Admin](#config-cli-config-file)

### Set configuration values that can be edited in the Magento Admin {#config-cli-config-set-edit}
Use `bin/magento config:set` _without_ `-l|-lock` to write the value to the database. Values you set this way can be edited in the Magento Admin.

Some examples for setting a store base {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} follow:

Example to set the base URL for the default scope:

    bin/magento config:set web/unsecure/base_url http://example.com/

Example to set the base URL for the `base` website:

    bin/magento config:set --scope=websites --scope-code=base web/unsecure/base_url http://example2.com/

Example to set the base URL for the `test` store view:

    bin/magento config:set --scope=stores --scope-code=test web/unsecure/base_url http://example3.com/

### Set configuration values that cannot be edited in the Magento Admin {#config-cli-config-file}
If you use the `-l|--lock` option as follows, the configuration value is saved in `env.php` and the field for editing this value in Admin page is disabled.

    bin/magento config:set --lock --scope=stores --scope-code=default web/unsecure/base_url http://example3.com

If you use the `-l|--lock` option:

*   Configuration values are saved in `<Magento base dir>/app/etc/env.php`

    Transfer `env.php` to another system to use the same configuration values there. For example, if you have a testing system, using the same `env.php` means you don't have to set the same configuration values again.
*   Configuration values _cannot_ be edited in the Admin.
*   You can use `-l|-lock` to set configuration values if Magento is not installed. However, you can set values only for the default scope.

If you enter an incorrect configuration path, this command returns an error

    The "wrong/config/path" does not exist

<div class="bs-callout bs-callout-info" id="info" markdown="1">
If you use the `--lock` option to set or change a value, you must use the [`bin/magento app:config:import` command]({{ page.baseurl}}/config-guide/cli/config-cli-subcommands-config-mgmt-import.html) to import the setting before you access the Admin or storefront.
</div>

## Display the value of configuration settings {#config-cli-config-show}
Command options:

    bin/magento config:show [--scope[="..."]] [--scope-code[="..."]] path

where

* `--scope` is the scope of configuration (default, website, store). The default value is `default`
* `--scope-code` is the scope code of configuration (website code or store view code)
* `path` is the configuration path in format first_part/second_part/third_part/etc *(required)*

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The `bin/magento config:show` command displays the values of any [encrypted values]({{ page.baseurl}}/config-guide/prod/config-reference-sens.html) as a series of asterisks: `******`.
</div>

### Examples

**Show all saved configurations**:

    bin/magento config:show

Result:

<pre class="no-copy">web/unsecure/base_url - http://example.com/
general/region/display_all - 1
general/region/state_required - AT,BR,CA,CH,EE,ES,FI,LT,LV,RO,US
catalog/category/root_id - 2
analytics/subscription/enabled - 1</pre>

**Show all saved configurations for the `base` website**:

    bin/magento config:show --scope=websites --scope-code=base

Result:

<pre class="no-copy">web/unsecure/base_url - http://example-for-website.com/
general/region/state_required - AT,BR,CA</pre>

**Show the base URL for the default scope**:

    bin/magento config:show web/unsecure/base_url

Result:

<pre class="no-copy">web/unsecure/base_url - http://example.com/</pre>

**Show the base URL for the `base` website**:

    bin/magento config:show --scope=websites --scope-code=base web/unsecure/base_url

Result:

<pre class="no-copy">web/unsecure/base_url - http://example-for-website.com/</pre>


**Show the base URL for the `default` store**:

    bin/magento config:show --scope=stores --scope-code=default web/unsecure/base_url

Result:

<pre class="no-copy">web/unsecure/base_url - http://example-for-store.com/</pre>

#### Related topic
[Deployment general overview]({{ page.baseurl}}/config-guide/deployment/pipeline/)
