---
group: marketplace-sellers
title: Installation & Varnish Test
---

## Overview

Installation & Varnish Test is automated EQP check that ensures compatibility of submitted extension with claimed Magento versions and editions.

## What testing is for

Magento is a complex and highly extensible platform. To ensure that 3rd party extensions are production-ready we check that it is possible to install the extension in [production mode](https://devdocs.magento.com/guides/v2.4/config-guide/bootstrap/magento-modes.html) and it does not affect the caching mechanism for the most critical scenarios so users will experience a performant storefront.

## When testing is done

Installation and Varnish Testing is mandatory for all submissions regardless of extension type and scope of changes. Only extensions that have passed Installation and Varnish Test may be listed on the [Magento Marketplace](https://marketplace.magento.com/).

## What is being checked

As reflected in a test name, two main areas are checked :

1. Magento with the submitted extension may be installed and switched to production mode. This check consists of the following steps :

    -  The extension can be added to the [Magento project](https://devdocs.magento.com/guides/v2.4/install-gde/install-quick-ref.html#get-the-magento-software) with [Composer](https://getcomposer.org/)

    -  Magento can be installed with the enabled extension
    -  It is possible to [compile Magento code](https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-compiler.htm)
    -  It is possible to [deploy static content](https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-static-view.html)
    -  Production mode [can be enabled](https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-mode.html)
    -  It is possible to [reindex all data](https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-index.html) with the installed extension

1. Critical pages are available for a user and the cache works as expected :

    -  Acceptance testing validates that product and category pages are properly cached
    -  Acceptance testing validates that the product and category page cache is reset when a product is edited
    -  Different product types are validated

## Tools and environments used

Our test infrastructure follows the [recommended setup](https://devdocs.magento.com/guides/v2.4/install-gde/install-quick-ref.html) for the Magento installation. Installation & Varnish Tests always run on the most up-to-date version of software compatible with Magento release. You may use [Magento Cloud Docker](https://devdocs.magento.com/cloud/docker/docker-development.html) to create a similar environment.

Installation & Varnish Tests always use the latest patch version of Magento for release line claimed as supported. For each supported release line the entire test suite is performed on all compatible PHP versions.

### Additional Magento Configuration

Varnish Test requires [Varnish as a caching application](https://devdocs.magento.com/guides/v2.4/config-guide/varnish/config-varnish-magento.html). The test checks for the presence of the **X-EQP-Cache** HTTP header set by Varnish and analyses its value on page loads. For this, the next additional instruction has to be added to the **vcl_deliver** function:

```vcl
sub vcl_deliver {
    if (resp.http.x-varnish ~ " ") {
        set resp.http.X-EQP-Cache = "HIT";
    } else {
        set resp.http.X-EQP-Cache = "MISS";
    }
    ...
}
```

The test also uses the [setup:performance:generate-fixtures command](https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-perf-data.html) to install sample products to run the test against :

```bash
magento setup:performance:generate-fixtures ./varnish-config/profile.xml
```

The content of the *./varnish-config/profile.xml* file is:

```xml
<?xml version="1.0"?>
<config xmlns:xi="http://www.w3.org/2001/XInclude">
    <profile>
        <admin_users>1</admin_users> <!--  Number of admin users to generate -->
        <websites>1</websites> <!--  Number of websites to generate -->
        <store_groups>1</store_groups> <!--Number of stores-->
        <store_views>1</store_views> <!--  Number of store views -->
        <assign_entities_to_all_websites>0</assign_entities_to_all_websites> <!--  Whether to assign all products per each website -->
        <simple_products>10</simple_products> <!--  Simple products count -->
        <categories>2</categories> <!--  Number of categories to generate -->
        <configs> <!--  Config variables and values -->
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
    -  GET "https://\<magento-host\>/simple-product-1.html"
    -  GET "https://\<magento-host\>/simple-product-2.html"
    -  GET "https://\<magento-host\>/simple-product-3.html"
    -  GET "https://\<magento-host\>/category-1.html"
    -  GET "https://\<magento-host\>/category-2.html"
    -  GET "https://\<magento-host\>/"
1. On the second request the "X-EQP-Cache" header's value has to be "HIT":
    -  GET "https://\<magento-host\>/simple-product-1.html"
    -  GET "https://\<magento-host\>/simple-product-2.html"
    -  GET "https://\<magento-host\>/simple-product-3.html"
    -  GET "https://\<magento-host\>/category-1.html"
    -  GET "https://\<magento-host\>/category-2.html"
    -  GET "https://\<magento-host\>/"
1. Then the test updates product prices and checks that the FPC cache is cleared:
    -  PUT "https://\<magento-host\>/rest/V1/products/product_dynamic_1" with "{"product":{"price":"999.99"}}"
    -  PUT "https://\<magento-host\>/rest/V1/products/product_dynamic_2" with "{"product":{"price":"999.99"}}"
    -  PUT "https://\<magento-host\>/rest/V1/products/product_dynamic_3" with "{"product":{"price":"999.99"}}"
1. The FPC cache has to be cleared, therefore the test expects that the "X-EQP-Cache" header's value is "MISS" for next requests:
    -  GET "https://\<magento-host\>/simple-product-1.html"
    -  GET "https://\<magento-host\>/simple-product-2.html"
    -  GET "https://\<magento-host\>/simple-product-3.html"
1. On the second request the "X-EQP-Cache" header's value has to be "HIT":
    -  GET "https://\<magento-host\>/simple-product-1.html"
    -  GET "https://\<magento-host\>/simple-product-2.html"
    -  GET "https://\<magento-host\>/simple-product-3.html"

## Reading the error report

For the installation part of this test, the logs of the Magento CLI commands are returned. The easiest way to reproduce an error is run a failed command on the local environment.

For Varnish tests specify :

1. A brief description of the failed scenario
1. Expected and actual cache behavior (HIT or MISS for cached page)

To debug this kind of error, it is recommended to have a locally installed Magento with Varnish cache configured and to check the corresponding HTTP headers.

## Troubleshooting

If the submission failed on the Installation and Varnish Test and after attempting to reproduce it locally, [create a Support ticket](https://marketplacesupport.magento.com/hc/en-us) so support will be able to assist or fix the a bug. Ensure that the relevant Submission ID is included on the ticket.

Feedback and communication on [Magento Community Engineering Slack](https://magentocommeng.slack.com/archives/C7SL5CGDN) #marketplace channel is always welcome.
