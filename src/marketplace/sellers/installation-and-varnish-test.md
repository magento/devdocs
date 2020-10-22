---
group: marketplace-sellers
title: Installation & Varnish Test
---

## Overview

Installation & Varnish Test is automated EQP check that ensures compatibility of submitted extension with claimed Magento versions and editions.

## Why we test?

Magento is a complex and highly extensible software. To ensure that 3rd party extension is production-ready we check that it is possible to install extension in [production mode](https://devdocs.magento.com/guides/v2.4/config-guide/bootstrap/magento-modes.html) and it does not affect caching mechanism for most critical scenarios so customers will enjoy performant storefront.

## When we test?

Installation and Varnish Test is mandatory for all submission regardless of extension type and scope of changes. Only extensions that passed Installation and Varnish Test may be listed at [Magento Marketplace](https://marketplace.magento.com/).

## What we are looking for?

As reflected in a test name we check 2 main areas:

1. Magento with submitted extension may be installed and switched to production mode. This check consists of following steps:

    - Extension may be added into [Magento project](https://devdocs.magento.com/guides/v2.4/install-gde/install-quick-ref.html#get-the-magento-software) with [Composer](https://getcomposer.org/)

    - Magento may be installed with enabled extension
    - It is possible to [compile Magento code](https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-compiler.htm)
    - It is possible to [deploy static content](https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-static-view.html)
    - Production mode [may be enabled](https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-mode.html)
    - It is possible to [reindex all data](https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-index.html) with installed extension

2. Most critical pages are available for a user and cache works as expected:

    - Acceptance test validate that product and category pages properly cached
    - Acceptance test validate that product and category pages cache is reset when product is edited
    - Different product types are validated

## What tools and environment we are using?

Our test infrastructure follow [recommended setup](https://devdocs.magento.com/guides/v2.4/install-gde/install-quick-ref.html) for Magento environment. You may use [Magento Cloud Docker](https://devdocs.magento.com/cloud/docker/docker-development.html) to create similar.

Installation & Varnish Test always use latest patch version of Magento for release line claimed as supported. For each supported release line we perform entire test suite on all compatible PHP versions.

Versions of all other software required by Magento are most up-to-date compatible version on the day of Magento release.

### Additional Magento Configuration

Varnish Test requires [Varnish as a caching application](https://devdocs.magento.com/guides/v2.4/config-guide/varnish/config-varnish-magento.html). The test checks a presence of the **X-EQP-Cache** HTTP header set by Varnish and analyses its value on page loads. For that the next additional instruction has to be added to the **vcl_deliver** function:

```
sub vcl_deliver {
    if (resp.http.x-varnish ~ " ") {
        set resp.http.X-EQP-Cache = "HIT";
    } else {
        set resp.http.X-EQP-Cache = "MISS";
    }
    ...
}
```

Also the test uses the [setup:performance:generate-fixtures command](https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-perf-data.html) to install sample products to run the test against:

```bash
magento setup:performance:generate-fixtures ./varnish-config/profile.xml
```

The content of the *./varnish-config/profile.xml* file is:

```xml
<?xml version="1.0"?>
<config xmlns:xi="http://www.w3.org/2001/XInclude">
    <profile>
        <admin_users>1</admin_users> <!-- Number of admin users to generate -->
        <websites>1</websites> <!-- Number of websites to generate -->
        <store_groups>1</store_groups> <!--Number of stores-->
        <store_views>1</store_views> <!-- Number of store views -->
        <assign_entities_to_all_websites>0</assign_entities_to_all_websites> <!-- Whether to assign all products per each website -->
        <simple_products>10</simple_products> <!-- Simple products count -->
        <categories>2</categories> <!-- Number of categories to generate -->
        <configs> <!-- Config variables and values -->
            <config>
                <path>admin/security/use_form_key</path>
                <scope>default</scope>
                <scopeId>0</scopeId>
                <value>0</value>
            </config>
            <config>
                <path>system/full_page_cache/caching_application</path>
                <scope>default</scope>
                <scopeId>0</scopeId>
                <value>2</value>
            </config>
        </configs>
    </profile>
</config>
```

### Varnish Test Execution

Varnish Test subsequently runs the next commands and analyses the **X-EQP-Cache** HTTP header's value:

1. As it is a fresh Magento installation, on the first request all the next responses have to contain the "X-EQP-Cache" header with the "MISS" value:
    - GET "https://\<magento-host\>/simple-product-1.html"
    - GET "https://\<magento-host\>/simple-product-2.html"
    - GET "https://\<magento-host\>/simple-product-3.html"
    - GET "https://\<magento-host\>/category-1.html"
    - GET "https://\<magento-host\>/category-2.html"
    - GET "https://\<magento-host\>/"
2. On the second request the "X-EQP-Cache" header's value has to be "HIT":
    - GET "https://\<magento-host\>/simple-product-1.html"
    - GET "https://\<magento-host\>/simple-product-2.html"
    - GET "https://\<magento-host\>/simple-product-3.html"
    - GET "https://\<magento-host\>/category-1.html"
    - GET "https://\<magento-host\>/category-2.html"
    - GET "https://\<magento-host\>/"
3. Then the test updates product prices and checks that the FPC cache is cleared:
    - PUT "https://\<magento-host\>/rest/V1/products/product_dynamic_1" with "{"product":{"price":"999.99"}}"
    - PUT "https://\<magento-host\>/rest/V1/products/product_dynamic_2" with "{"product":{"price":"999.99"}}"
    - PUT "https://\<magento-host\>/rest/V1/products/product_dynamic_3" with "{"product":{"price":"999.99"}}"
4. The FPC cache has to be cleared, therefore the test expects that the "X-EQP-Cache" header's value is "MISS" for next requests:
    - GET "https://\<magento-host\>/simple-product-1.html"
    - GET "https://\<magento-host\>/simple-product-2.html"
    - GET "https://\<magento-host\>/simple-product-3.html"
5. On the second request the "X-EQP-Cache" header's value has to be "HIT":
    - GET "https://\<magento-host\>/simple-product-1.html"
    - GET "https://\<magento-host\>/simple-product-2.html"
    - GET "https://\<magento-host\>/simple-product-3.html"

## How read an error report?

For the installation part of this test we returns logs of Magento CLI commands. The easiest way to reproduce an error is run failed command on local environment.

For Varnish tests we specify:
1. Brief description of the failed scenario
2. Expected and actual cache behavior (HIT or MISS for cached page)
To debug such kind of error it is recommended to have locally installed Magento with configured Varnish cache and checking corresponding HTTP headers.

## Troubleshooting

If your submission failed on the Installation and Varnish Test and after attempt to reproduce it locally please [create a Support ticket](https://marketplacesupport.magento.com/hc/en-us) so we will be able to assist you or fix a bug on our end. Please specify your Submission ID in a ticket.

We also always glad for feedback and communication at [Magento Community Engineering Slack](https://magentocommeng.slack.com/archives/C7SL5CGDN) #marketplace channel.
