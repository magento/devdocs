---
group: marketplace-sellers
title: Installation & Varnish Tests
---

## Overview

The Installation and Varnish tests are automated EQP checks to ensure that the submitted extension version is compatible with the Magento versions and the editions that it claims to support.

## What testing is for

Magento is a complex, highly extensible platform. To ensure that third-party extensions are production-ready, the Installation and Varnish tests verify successful installation with the extension included, ability to switch to Magento  [production mode](https://devdocs.magento.com/guides/v2.4/config-guide/bootstrap/magento-modes.html), and that the extension does not affect the caching mechanism for the most critical scenarios. The caching check ensures that the Magento storefront provides a high performance customer experience.

## When testing is done

All extension submissions must pass the mandatory Installation and Varnish tests, regardless of extension type and scope of changes. Only extensions that have passed these tests can be listed in the [Magento Marketplace](https://marketplace.magento.com/).

## What is being checked

The Installation and Varnish tests complete the following checks:

1. Successful installation of Magento with the submitted extension and ability to switch to production mode–This check includes the following steps:

   -  Verify ability to add the extension to the [Magento project](https://devdocs.magento.com/guides/v2.4/install-gde/install-quick-ref.html#get-the-magento-software) with [Composer](https://getcomposer.org/).
   -  After adding and enabling the extension, verify successful Magento installation.
   -  Verify that you can [compile Magento code](https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-compiler.html).
  -  Verify that you can [deploy static content](https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-static-view.html).
   -  Verify that you can [enable Magento Production mode](https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-mode.html).
   -  Check that you can [reindex all data](https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-index.html) with the installed extension.

1. Check availability of critical pages and correct cache processing–This check includes the following steps:

   -  Complete acceptance testing to validate that product and category pages are properly cached.
   -  Complete acceptance testing to validate that the product and category page cache is reset when a product is edited.
   -  Verify that different product types are validated.

## Tools and environments used

The Magento test infrastructure follows the [recommended setup](https://devdocs.magento.com/guides/v2.4/install-gde/install-quick-ref.html) for the Magento installation. The Installation and Varnish tests always runs on the most up-to-date version of software compatible with the Magento release. You can use [Magento Cloud Docker](https://devdocs.magento.com/cloud/docker/docker-development.html) to create a similar environment.

The Installation and Varnish tests always use the latest patch version for the Magento release line that the submitted extension claims to support. For each supported release line, the entire test suite is performed on all compatible PHP versions.

### Additional Magento Configuration

The Varnish test requires [Varnish as a caching application](https://devdocs.magento.com/guides/v2.4/config-guide/varnish/config-varnish-magento.html). The test checks for the presence of the **X-EQP-Cache** HTTP header set by Varnish and analyzes its value on page loads. To complete this check, the following additional instruction must be added to the **vcl_deliver** function:

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

The Varnish test also uses the [setup:performance:generate-fixtures command](https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-perf-data.html) to install sample products to run the test against:

```bash
magento setup:performance:generate-fixtures ./varnish-config/profile.xml
```

> `*./varnish-config/profile.xml* file` contents

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

The Varnish test issues a series of requests, and then analyzes the value of the `X-EQP-Cache` HTTP header:

1. Check the value of the `X-EQP-Cache` header by submitting the following series of requests two times to the same URL to verify the cache operation.
   -  On the first set of requests against a fresh installation, the test verifies that each response returns the `X-EQP-Cache` header with the `MISS` value because the page has never been cached.
   -  On the second set of requests, the test verifies that each response returns the `X-EQP-Cache` header with the `HIT` value because the page was added to the cache after the initial request.
      -  GET "https://\<magento-host\>/simple-product-1.html"
      -  GET "https://\<magento-host\>/simple-product-2.html"
      -  GET "https://\<magento-host\>/simple-product-3.html"
      -  GET "https://\<magento-host\>/category-1.html"
      -  GET "https://\<magento-host\>/category-2.html"
      -  GET "https://\<magento-host\>/"
1. After updating product prices, the test runs the following requests to verify that the FPC cache is cleared:
   -  PUT "https://\<magento-host\>/rest/V1/products/product_dynamic_1" with `{"product":{"price":"999.99"}}`
   -  PUT "https://\<magento-host\>/rest/V1/products/product_dynamic_2" with `{"product":{"price":"999.99"}}`
   -  PUT "https://\<magento-host\>/rest/V1/products/product_dynamic_3" with `{"product":{"price":"999.99"}}`
1. After the FPC cache has been cleared, verify the cache operation again by submitting the following series of requests two times to the same URL to verify the cache operation.
   -  On the first set of requests, the test verifies that each response returns the `X-EQP-Cache` header with the `MISS` value because the cache was cleared and the page has not been cached yet.
   -  On the second set of requests, the test verifies that each response returns the `X-EQP-Cache` header with the `HIT` value because the page was added to the cache after the previous request.
      -  GET "https://\<magento-host\>/simple-product-1.html"
      -  GET "https://\<magento-host\>/simple-product-2.html"
      -  GET "https://\<magento-host\>/simple-product-3.html"

## Reading the error report

The Installation test returns the logs of the Magento CLI commands. You can reproduce any error in the log by running the failed command in a local environment.

The Varnish test provides the following information about failures:

-  A brief description of the failed scenario
-  Expected and actual cache behavior (HIT or MISS for cached page)

To debug Varnish test errors, we recommend using a locally installed Magento version with the Varnish cache configured to submit requests and check the HTTP headers in the response.

## Troubleshooting

If the extension submission fails Installation and Varnish testing, and you cannot reproduce or troubleshoot the issues locally, [create a Support ticket](https://marketplacesupport.magento.com/hc/en-us) to request assistance. Ensure that the relevant Submission ID is included on the ticket.

We always welcome feedback and discussion on the [Magento Community Engineering Slack](https://magentocommeng.slack.com/archives/C7SL5CGDN) #marketplace channel.
