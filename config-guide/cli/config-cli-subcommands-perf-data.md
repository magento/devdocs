---
group: configuration-guide
subgroup: 04_CLI
title: Generate data for performance testing
menu_title: Generate data for performance testing
menu_node:
menu_order: 800
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## Overview of performance testing data {#config-cli-perf-overview}

To use the [Magento Performance Toolkit]({{ site.mage2bloburl }}/{{ page.guide_version }}/setup/performance-toolkit){:target="_blank"} or another tool for performance testing, you must generate a large amount of data (for example, stores, categories, products, and so on).

You can adjust the amount of data you create using *profiles* (small, medium, large, and extra large). The next section discusses profiles in more detail.

The following figure shows how a product displays on the {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} using the small profile:

![Sample storefront with generated data]({{ site.baseurl }}/common/images/config_generate-data.png){:width="550px"}

This gives you an idea about what the data looks like.

## About profiles {#config-cli-perf-prof}

The following table provides details about the data generator profiles (small, medium, large, and extra large).

Profiles are located in `<your Magento install dir>/setup/performance-toolkit/profiles/<ce or ee>`

For example, `/var/www/html/magento2/setup/performance-toolkit/profiles/ce`

<table>
    <tbody>
        <tr>
            <th>Parameter</th>
            <th>Small profile</th>
            <th>Medium profile</th>
            <th>Large profile</th>
            <th>Extra large profile</th>
        </tr>

    <tr>
        <td><p>websites</p></td>
        <td><p>1</p></td>
        <td><p>1</p></td>
        <td><p>3</p></td>
        <td><p>5</p></td>
    </tr>
    <tr>
        <td><p>store_groups</p></td>
        <td><p>1</p></td>   
        <td><p>2</p></td>
        <td><p>3</p></td>
        <td><p>5</p></td>   
    </tr>
    <tr>
        <td><p>store_views</p></td>
        <td><p>1</p></td>   
        <td><p>2</p></td>
        <td><p>3</p></td>
        <td><p>5</p></td>   
    </tr>
    <tr>
        <td><p>simple_products</p></td>
        <td><p>800</p></td>
        <td><p>16,000</p></td>
        <td><p>400,000</p></td>
        <td><p>800,000</p></td>
    </tr>
    <tr>
        <td><p>configurable_products</p></td>
        <td><p>50</p></td>  
        <td><p>1,000</p></td>
        <td><p>25,000</p></td>
        <td><p>50,000</p></td>  
    </tr>
    <tr>
        <td><p>categories</p></td>
        <td><p>30</p></td>  
        <td><p>300</p></td>
        <td><p>1,000</p></td>
        <td><p>3,000</p></td>   
    </tr>
    <tr>
        <td><p>categories_nesting_level</p></td>
        <td><p>3</p></td>   
        <td><p>3</p></td>
        <td><p>3</p></td>
        <td><p>6</p></td>   
    </tr>
    <tr>
        <td><p>catalog_price_rules</p></td>
        <td><p>10</p></td>  
        <td><p>20</p></td>
        <td><p>50</p></td>
        <td><p>100</p></td>
    </tr>
    <tr>
        <td><p>catalog_target_rules</p></td>
        <td><p>2</p></td>   
        <td><p>5</p></td>
        <td><p>10</p></td>
        <td><p>50</p></td>  
    </tr>
    <tr>
        <td><p>cart_price_rules</p></td>
        <td><p>10</p></td>  
        <td><p>20</p></td>
        <td><p>50</p></td>
        <td><p>100</p></td>     
    </tr>
    <tr>
        <td><p>cart_price_rules_floor</p></td>
        <td><p>2</p></td>   
        <td><p>2</p></td>
        <td><p>2</p></td>
        <td><p>5</p></td>       
    </tr>
    <tr>
        <td><p>customers</p></td>
        <td><p>20</p></td>  
        <td><p>200</p></td>
        <td><p>2,000</p></td>
        <td><p>5,000</p></td>       
    </tr>
    <tr>
        <td><p>tax rates</p></td>
        <td><p>40,000</p></td>  
        <td><p>40,000</p></td>
        <td><p>40,000</p></td>
        <td><p>40,000</p></td>      
    </tr>
    <tr>
        <td><p>orders</p></td>
        <td><p>80</p></td>  
        <td><p>1,600</p></td>
        <td><p>40,000</p></td>
        <td><p>80,000</p></td>      
    </tr>
    </tbody>
</table>

## Run the data generator {#config-cli-perf-run}

{: .bs-callout .bs-callout-warning }
Before running the data generator, disable all cron jobs running on the server. Disabling cron jobs prevents the data generator from performing actions that conflict with active cron jobs and avoids unnecessary errors.

Run the command as discussed in this section. After the command runs, you must [reindex all indexers]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html#config-cli-subcommands-index-reindex).

Command options:

    bin/magento setup:perf:generate-fixtures {path to profile}

Where `<path to profile>` specifies the absolute file system path to, and name of, a profile.

For example,

    bin/magento setup:perf:generate-fixtures /var/www/html/magento2/setup/performance-toolkit/profiles/ce/small.xml

Sample output for the small profile:

    Generating profile with following params:
     |- Websites: 1
     |- Store Groups: 1
     |- Store Views: 1
     |- Categories: 30
     |- Simple products: 800
     |- Configurable products: 50
     |- Customers: 20
     |- Cart Price Rules: 10
     |- Catalog Price Rules: 10
     |- Orders: 80
    Generating websites, stores and store views...  done in <time>
    Generating categories...  done in <time>
    Generating simple products...  done in <time>
    Generating configurable EAV variations...  done in <time>
    ... more ...

#### Related topics

*   [Manage the cache]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html)
*   [Manage the indexers]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html)
*   [Configure and run cron]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html)
*   [Code compiler]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-compiler.html)
*   [Set the Magento mode]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html)
*   [URN highlighter]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-urn.html)
*   [Dependency reports]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-depen.html)
*   [Translation dictionaries and language packages]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html)
*   [Deploy static view files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html)
*   [Create symlinks to LESS files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-less-sass.html)
*   [Run unit tests]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-test.html)
*   [Convert layout XML files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-layout-xml.html)
