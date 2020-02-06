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

The `{{site.data.var.mcp}}` package uses the following version sequence: `<major>.<minor>.<patch>`.

## v1.0.1

We have included all {{site.data.var.ce}} 2.x patches from the [Magento Technical resources](https://magento.com/tech-resources/download) in the {{site.data.var.mcp}} v1.0.1 release. If you copied any patches into your project previously, remove them to avoid conflicts.

This release includes the following updates:

-  {:.fix}<!--MAGECLOUD-4606-->**Updated patches to include all available patches for {{site.data.var.ce}} 2.x**–Updated the {{site.data.var.mcp}} package to include all {{site.data.var.ce}} 2.x patches available on the [Magento Download page](https://magento.com/tech-resources/download). If you copied any {{site.data.var.ce}} patches into your {{site.data.var.ece}} project previously, remove them to avoid conflicts.

-  {:.fix}<!--MAGECLOUD-4847-->**Updated patch for Elasticsearch catalog pagingation fix** –Replaced the Elasticsearch catalog pagination patch delivered in {{site.data.var.mcp}} v1.0 with a more effective fix.

Catalog pagination does not work on Elasticsearch 6.x

-  {:.fix}<!--MAGECLOUD-4884-->**Updated the Magento Page Builder patches**–In {{site.data.var.mcp-prod}} 1.0.0, we bundled Page Builder patches to address a known Page Builder remote code execution (RCE) vulnerability, with the initial fix based on Magento 2.3.3. We have updated these patches with a more stable implementation based on Magento 2.3.4., which includes multiple optimizations for fixing the issue.

   If you have the {{site.data.var.mcp}} 1.0.0 package, you are still protected from the Page Builder RCE vulnerability issues. If you update to {{site.data.var.mcp}} 1.0.1 or later, you have a better implementation of the same fix.

## v1.0.0

This is the first release of the [`magento/magento-cloud-patches`](https://github.com/magento/magento-cloud-patches) package, which is a new dependency for the `{{ site.data.var.ct }}` package version 2002.0.22 or later releases.

<!--To do: Add a release note about changes to the patching process, and link from these release notes-->

This release includes the following patches and critical fixes:

-  {:.fix}<!--MAGECLOUD-4649-->**Page Builder security patches for 2.3.1.x and 2.3.2.x releases**–Fixes an issue in Page Builder preview that allows unauthenticated users to access some templating methods that can be used to trigger arbitrary code execution over the network (RCE) resulting in global information leaks. This issue can occur when using unsupported versions of Page Builder with {{ site.data.var.ee }} versions 2.3.1 and 2.3.2.

-  {:.fix}<!--MAGECLOUD-4428-->**MSI patches**–Fixes issues that caused indexing errors and performance issues when using default inventory settings for managing stock.

-  {:.fix}<!--MAGECLOUD-4422-->**Backward Compatibility of new Mail Interfaces**-Fixes a backward incompatibility issue caused by the `Magento\Framework\Mail\EmailMessageInterface` PHP interface introduced in {{ site.data.var.ee }} v2.3.3. In the scope of this patch, the new `EmailMessageInterface` inherits from the old `MessageInterface`, and {{ site.data.var.ee }} core modules are reverted to depend on `MessageInterface`.

-  {:.fix}<!--MAGECLOUD-4448-->**Catalog pagination does not work on Elasticsearch 6.x**–Fixes a critical issue with search result pagination that affects customers using Elasticsearch 6.x as the catalog search engine.
