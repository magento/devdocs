---
group: cloud-guide
title: Magento Cloud Patches release notes
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

The [Magento Cloud Patches](https://github.com/magento/magento-cloud-patches) package provides a set of patches which improve the integration of all Magento versions with Cloud environments and supports quick delivery of critical fixes.

The {{ site.data.var.mcp }} package is a dependency for the {{site.data.var.ct}} package and is installed and updated when you install or update the {{ site.data.var.ct }} package. You can also use and manage the {{ site.data.var.mcp }} as a stand-alone package to apply patches to a {{ site.data.var.ee }} project that is not on the Cloud platform. These release notes describe the latest improvements to this package.

The `{{site.data.var.mcp-package}}` package uses the following version sequence: `<major>.<minor>.<patch>`.

{:.bs-callout-info}
See [Apply patches]({{site.baseurl}}/cloud/project/project-patch.html) to learn how to apply Magento patches and hot fixes to your {{site.data.var.ece}} project.

## v1.0.5
*Release date: {{ site.data.var.ece-release-date }}*<br/>

-  **Redis performance improvements**–Adds Redis optimization features to Magento versions 2.3.3 and 2.3.4. These fixes were included in the Magento version 2.3.5 release. See [Performance boosts]({{site.baseurl}}/guides/v2.3/release-notes/release-notes-2-3-5-commerce.html#performance-boosts) in the _Magento Commerce 2.3.5 Release Notes_.<!--MCLOUD-5771-->

-  **New Relic log enricher**–Adds the Monolog ProcessorInterface required to support improvements to New Relic logging capabilities introduced in {{site.data.var.mcc-prod}} version 1.0.4. This patch is required to deploy Magento 2.1.x. If the patch is not applied, the build fails during the `di:compile` process.<!--MCLOUD-6029-->

## v1.0.4
*Release date: May 12, 2020*<br/>

-  **Amazon Pay checkout**—Fixes an issue with the Amazon Pay payment widget that prevented customers from changing the payment method on the _Review & Payments_ step during the checkout process.<!--MCLOUD-5930-->

-  **Product display on Category page**—Fixes an issue that prevented products from displaying on the category page in _Show all pages_ view.<!--MCLOUD-5684-->

-  **Page Builder image upload**—Fixes a Page Builder interface issue that sometimes caused the following error when uploading images to the image gallery: `Destination folder is not writable or does not exist`<!--MCLOUD-5837-->

-  **Suppress unnecessary sitemap generation warnings**—Adds a retry attempt when errors occur during sitemap generation and skips customer email notification in cases where errors can be recovered automatically.<!--MCLOUD-3025-->

-  **Site performance improvement**—Fixes a performance issue with the `Magento\Framework\App\DeploymentConfig\Reader::load` function, which periodically experienced long load times that affected site performance. <!--MCLOUD-5650-->

-  Updated patch assignment for payment method patches to target the payment modules instead of the Magento base package (magento/magento2-base) so that the payment patches are applied only if the payment modules exist.<!--MCLOUD-5666-->

-  Updated patches for compatibility with Magento {{site.data.var.ce}}.<!--MCLOUD-5701-->

## v1.0.3
*Release date: April 28, 2020*<br/>

-  Added fix for the "FPC is getting disabled during deployments" patch to support Magento 2.3.5.

## v1.0.2
*Release date: February 27, 2020*<br/>

This release includes the following patches and critical fixes:

-  **Compatibility updates for {{site.data.var.mcp-package}}**

   -  Updated the `symfony` and `semver` version constraints in the `composer.json` file for compatibility with Magento 2.4 and later releases.<!--MAGECLOUD-5127-->

   -  Updated constraints in `composer.json` for compatibility with `{{site.data.var.ct}}` 2002.0.22 and later 2002.0.x releases.

-  **PayPal Express Checkout**—Published on February 12, 2020, this patch resolves an issue that affects orders placed with PayPal Express Checkout where the shipping address for the order specifies a country region that has been manually entered into the text field rather than selected from the drop-down menu on the Shipping page. See the complete patch description on the [patch download page](https://magento.com/tech-resources/download#download2353).

-  **Magento deployment fix**–Added a patch to fix an issue that disabled the full page cache during the Magento deployment process. This patch applies to Magento 2.3.2 and later releases.

-  **Scope parameter for Async/Bulk API**—Updated this patch to fix a syntax error in the `composer.json` file. This patch applies to {{site.data.var.ce}} 2.3.1 and 2.3.2. See the complete patch description on the [patch download page](https://magento.com/tech-resources/download#download2312).

## v1.0.1
*Release date: February 6, 2020*<br/>

We have included all {{site.data.var.ce}} 2.x patches from the [Magento Technical resources](https://magento.com/tech-resources/download) in the {{site.data.var.mcp-package}} v1.0.1 release. If you copied any patches into your project previously, remove them to avoid conflicts.

This release includes the following patches and critical fixes:

-  **Fix cron deadlocks and improve cron locking**–

   -  Fixes an issue with some cron jobs not running due to an incorrect status value in the `cron_schedule` table. Now, we use the Magento lock framework to check and update cron job status instead of using the `cron_schedule` table. Cron jobs that have ended with an error status are retried during the next cron run instead of waiting 24 hours.

   -  Adds a _retry_ operation to avoid deadlock during updates to the data in the `cron_schedule` table.

-  **Updated `{{site.data.var.mcp-package}}` to include all available patches for {{site.data.var.ce}} 2.x**–Updated the {{site.data.var.mcp-package}} package to include all {{site.data.var.ce}} 2.x patches available on the [Magento Download page](https://magento.com/tech-resources/download). If you copied any {{site.data.var.ce}} patches into your {{site.data.var.ece}} project previously, remove them to avoid conflicts.<!--MAGECLOUD-4606-->

-  **Elasticsearch catalog pagination fix** –Replaced the Elasticsearch catalog pagination patch delivered in {{site.data.var.mcp-package}} v1.0 with a more effective fix.<!--MAGECLOUD-4847-->

-  **Magento Page Builder patches**–In {{site.data.var.mcp-prod}} 1.0.0, we bundled Page Builder patches to address a known Page Builder remote code execution (RCE) vulnerability, with the initial fix based on Magento 2.3.3. We have updated these patches with a more stable implementation based on Magento 2.3.4., which includes multiple optimizations for fixing the issue.<!--MAGECLOUD-4884-->

   If you have the {{site.data.var.mcp-package}} 1.0.0 package, you are still protected from the Page Builder RCE vulnerability issues. If you update to 1.0.1 or later, you have a better implementation of the same fix.

## v1.0.0
*Release date: November 14, 2019*<br/>

This is the first release of the [`magento/magento-cloud-patches`](https://github.com/magento/magento-cloud-patches) package, which is a new dependency for the `{{ site.data.var.ct }}` package version 2002.0.22 or later releases.

<!--To do: Add a release note about changes to the patching process, and link from these release notes-->

This release includes the following patches and critical fixes:

-  **Page Builder security patches for 2.3.1.x and 2.3.2.x releases**–Fixes an issue in Page Builder preview that allows unauthenticated users to access some templating methods that can be used to trigger arbitrary code execution over the network (RCE) resulting in global information leaks. This issue can occur when using unsupported versions of Page Builder with {{ site.data.var.ee }} versions 2.3.1 and 2.3.2.<!--MAGECLOUD-4649-->

-  **MSI patches**–Fixes issues that caused indexing errors and performance issues when using default inventory settings for managing stock.<!--MAGECLOUD-4428-->

-  **Backward Compatibility of new Mail Interfaces**-Fixes a backward incompatibility issue caused by the `Magento\Framework\Mail\EmailMessageInterface` PHP interface introduced in {{ site.data.var.ee }} v2.3.3. In the scope of this patch, the new `EmailMessageInterface` inherits from the old `MessageInterface`, and {{ site.data.var.ee }} core modules are reverted to depend on `MessageInterface`.<!--MAGECLOUD-4422-->

-  **Catalog pagination does not work on Elasticsearch 6.x**–Fixes a critical issue with search result pagination that affects customers using Elasticsearch 6.x as the catalog search engine.<!--MAGECLOUD-4448-->
