---
group: software-update-guide
title: Magento Quality Patches release notes
functional_areas:
  - Setup
  - Configuration
  - Upgrade
---

The [Magento Quality Patches](https://github.com/magento/quality-patches) package delivers individual patches developed by Magento and allows you to apply, revert, and view general information about all individual patches that are available for the installed version of {{ site.data.var.ee }} or {{ site.data.var.ce }}.

<!-- The release notes include:

-  {:.new}New features
-  {:.fix}Fixes and improvements
-  {:.bug}Known issues -->

{:.bs-callout-info}
See [Apply patches]({{site.baseurl}}/cloud/project/project-patch.html) for instructions on applying patches to your Magento projects.

## v1.0.2 example 1

{:.bs-callout-warning}
**Editorial note:** The following release notes sample (complete) is raw, unmodified output from our markdown conversion tool.

-  MDVA-26694: Product and catalog caches will expire as scheduled. Previously, caches expire daily, as cron runs the `catalogrule_apply_all` task once a day which re-indexes all the catalog rules and its dependent indexers and clears the cache for all products and categories.
-  MDVA-27825: Memory leak prevented by adding clearing of Customer objects in \Magento\Framework\Model\ResourceModel\Db\VersionControl\Snapshot class
-  MDVA-29085: After the company has been created through the API, the intended plugin will check if the company is created and dispatch the two emails accordingly.
-  MDVA-29344:
-  MDVA-29835: Issue fixed: Two gift card codes can be seen for the order.
-  Root Cause: cron jobs called \Magento\GiftCard\Observer\GenerateGiftCardAccountsInvoice::execute() and this method did not check if giftcard codes already were generated during invoice creation":
-  MDVA-29883: Code was not storing false values for custom attributes in Elastic Search, so filter was possible using "No" for boolean attributes using layered navigation. To address that, some boolean checks have been replaces for null checks, and an array_filter call has been erased completely as no callback function was provided in it, thus always returning false as "all entries of array equal to FALSE (see converting to boolean) will be removed".
-  MDVA-30052: Customer data section invalidation logic has been improved. This release introduces a new way of invalidating all customer sections data that avoids a known issue with local storage when custom `sections.xml` invalidations are active. (Previously, private content (local storage) was not correctly populated when you had a custom *etc/frontend/sections.xml* with action invalidations). See https://devdocs.magento.com/guides/v2.3/extension-dev-guide/cache/page-caching/private-content.html#invalidate-private-content
-  :
-  MDVA-30131: Issue fixed: "No" values are not included in layered nav aggregation options when using ElasticSearch as the search engine. This affected storefront and GraphQl scenarios in the same way.
-  :
-  Root cause: There were issues due to the way PHP handles false values.":

## v1.0.2 example 2

{:.bs-callout-warning}
**Editorial note:** The following release notes sample (incomplete) manually structured and entered from the 1.0.2 [`patches.json`](https://github.com/magento/quality-patches/pull/28/files#diff-2946f7f291517d21cc254a82219fdb51) file in the package repo.

-  **Patches for Magento 2.3.0 - 2.4.0**
   -  **MDVA-26694**—Product and catalog caches will expire as scheduled. Previously, caches expire daily, as сron runs the `catalogrule_apply_all` task once a day which re-indexes all the catalog rules and its dependent indexers and clears the cache for all products and categories.
   -  **MDVA-27825**—Big data customer export issue. Memory leak prevented by adding clearing of Customer objects in `\\Magento\\Framework\\Model\\ResourceModel\\Db\\VersionControl\\Snapshot` class.

-  **Patches for Magento 2.3.2-p2 - 2.3.5**
   -  **MDVA-30052**—Customer data section invalidation logic has been improved. This release introduces a new way of invalidating all customer sections data that avoids a known issue with local storage when custom `sections.xml` invalidations are active. (Previously, private content (local storage) was not correctly populated when you had a custom `etc/frontend/sections.xml` with action invalidations).
