---
layout: default
group: config-guide 
subgroup: 04_CLI
title: Set configuration values
menu_title: Set configuration values
menu_node: 
menu_order: 250
version: 2.2
github_link: config-guide/cli/config-cli-subcommands-config.md
---

This topic discusses advanced configuration commands you can use to:

*   Set any configuration option from the command line
*   Optionally lock any option so its value cannot be changed in the Magento Admin

You can use these commands to set the Magento configuration manually or using scripts. You set configuration options using a _configuration path_, which is a `/`-delimited string that uniquely identifies that configuration option. You can find a configuration path reference in [Configuration reference]({{ page.baseurl }}config-guide/config-reference.html).

You can set values at the following times:

*   Before you install Magento, you can set configuration values for the default scope only.

    That's because before you install Magento, the default scope is the only valid scope.
*   After you install Magento, you can set configuration values for any website or store view scope.

There are two commands:

* `config:set` sets any configuration value by its configuration path
* `config:show` shows saved configuration values
  
## First steps {#first}
{% include install/first-steps-cli.html %}

In addition to the command arguments discussed here, see <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands.html#config-cli-subcommands-common">Common arguments</a>.

## Prerequisites
To set a configuration value, you must know at least one of the following:

*   The [configuration path]({{ page.baseurl }}config-guide/config-reference.html)
*   To set a configuration value for a particular scope, you must know the scope code.

    To set a configuration value for the default scope, you don't need to do anything.

### Find the configuration path
See [Configuration reference]({{ page.baseurl }}config-guide/config-reference.html). TBD

### Find the scope code
You can find the scope code either in the Magento database or in the Magento Admin. See one of the following sections for more information.

#### Find the scope code in the Admin

{% collapsible To find the scope code in the Admin: %}

1.  Log in to the Admin as a user who can view websites and store views.
2.  Click **Stores** > Settings > **All Stores**.
3.  In the right pane, click the name of the website or store view to see its code.

    The following figure shows a sample website code.

    ![Get a website or store view code from the Admin]({{ site.baseurl }}common/images/config_configset_website-code.png){:width="450px"}
4.  Continue with [Set configuration values](#config-cli-config-set).

{% endcollapsible %}

#### Find the scope code in the database

{% collapsible To find the scope code in the database: %}

Scope codes for websites and store views are stored in the Magento database in the `STORE_WEBSITE` and `STORES` tables, respectively.

To find the values in the database:

1.  Connect to the Magento database.

        mysql -u <magento database user name> -p
2.  Enter the following commands:

        use <magento database name>;
        SELECT * FROM STORES;
        SELECT * FROM STORE_WEBSITE;

    A sample result follows:

        [mysql]> SELECT * FROM STORE_WEBSITE;
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
Command options:

    config:set [--scope="..."] [--scope-code="..."] [-l|--lock] path value

where

*   `--scope` is the scope of configuration (`default`, `website`, or `store`) *(default value is `default`)*
*   `--scope-code` is the scope code of configuration (website code or store view code)
*   `-l|--lock` prevents a configuration value from being changed in the Magento Admin 
*   `path` is configuration path *(required)*
*   `value` is value of configuration *(required)*

See one of the following sections for more information:

*   [Set configuration values that can be edited in the Magento Admin](#config-cli-config-set-edit)
*   [Set configuration values that cannot be edited in the Magento Admin](#config-cli-config-file)

### Set configuration values that can be edited in the Magento Admin {#config-cli-config-set-edit}
Use `magento config:set` _without_ `-l|-lock` to write the value to the database. Values you set this way can be edited in the Magento Admin.

Some examples for setting a store base URL follow:

Example to set the base URL for the default scope:

    bin/magento config:set web/unsecure/base_url http://example.com

Example to set the base URL for the `base` website:

    bin/magento config:set --scope=websites --scope-code=base web/unsecure/base_url http://example2.com 
    
Example to set the base URL for the `test` store view:

    bin/magento config:set --scope=stores --scope-code=test web/unsecure/base_url http://example3.com 

### Set configuration values that cannot be edited in the Magento Admin {#config-cli-config-file}
If you use the `-l|--lock` option as follows, the configuration value is saved in `config.php` and the field for editing this value in Admin page is disabled.

    bin/magento config:set --lock --scope=stores --scope-code=default web/unsecure/base_url http://example3.com

If you use the `-l|--lock` option:

*   Configuration values are saved in `<Magento base dir>/app/etc/config.php` 

    Transfer `config.php` to another system to use the same configuration values there. For example, if you have a testing system, using the same `config.php` means you don't have to set the same configuration values again.
*   Configuration values _cannot_ be edited in the Admin.
*   You can use `-l|-lock` to set configuration values if Magento is not installed. However, you can set values only for the default scope.

In case of wrong configuration path, this command returns an error

    The "wrong/config/path" does not exist

## Command config:show {#config-cli-config-show}
Command options:

    config:show [--scope[="..."]] [--scope-code[="..."]] [path]
    
where

* `--scope` is the scope of configuration (default, website, store) *(default: "default")*
* `--scope-code` is the scope code of configuration (website code or store view code)
* `path` is configuration path in format first_part/second_part/third_part/etc *(required)*

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The `config:show` command displays the values of any [encrypted values](TBD) as a series of asterisks: `******`.
</div>

##### Examples

**Show all saved configurations**:

    bin/magento config:show
    
Result:
    
<pre class="no-copy">web/unsecure/base_url - http://example.com/
general/region/display_all - 1
general/region/state_required - AT,BR,CA,CH,EE,ES,FI,LT,LV,RO,US
catalog/category/root_id - 2
analytics/subscription/enabled - 1</pre>

**Show all saved configurations for a specific scope**:

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
    
    

