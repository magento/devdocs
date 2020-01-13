---
group: cloud-guide
title: Magento Cloud Patches release notes
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

The [Magento Cloud Patches](https://github.com/magento/magento-cloud-patches) package provides a set of patches which improve the integration of all Magento versions with Cloud environments and supports quick delivery of critical fixes. These release notes describe the latest improvements to this package, which is a component of [{{ site.data.var.csuite }}]({{ page.baseurl }}/cloud/release-notes/cloud-tools.html).

The `{{site.data.var.mcp}}` package uses the following version sequence: `<major>.<minor>.<patch>`.

## v1.0.0

This is the first release of the [`magento/magento-cloud-patches`](https://github.com/magento/magento-cloud-patches) package, which is a new dependency for the `{{ site.data.var.ct }}` package version 2002.0.22 or later releases.

<!--To do: Add a release note about changes to the patching process, and link from these release notes-->

This release includes the following patches and critical fixes:

-  {:.fix}<!--MAGECLOUD-4649-->**Page Builder security patches for 2.3.1.x and 2.3.2.x releases**–Fixes an issue in Page Builder preview that allows unauthenticated users to access some templating methods that can be used to trigger arbitrary code execution over the network (RCE) resulting in global information leaks. This issue can occur when using unsupported versions of Page Builder with {{ site.data.var.ee }} versions 2.3.1 and 2.3.2.

-  {:.fix}<!--MAGECLOUD-4428-->**MSI patches**–Fixes issues that caused indexing errors and performance issues when using default inventory settings for managing stock.

-  {:.fix}<!--MAGECLOUD-4422-->**Backward Compatibility of new Mail Interfaces**-Fixes a backward incompatibility issue caused by the `Magento\Framework\Mail\EmailMessageInterface` PHP interface introduced in {{ site.data.var.ee }} v2.3.3. In the scope of this patch, the new `EmailMessageInterface` inherits from the old `MessageInterface`, and {{ site.data.var.ee }} core modules are reverted to depend on `MessageInterface`.

-  {:.fix}<!--MAGECLOUD-4448-->**Catalog pagination does not work on Elasticsearch 6.x**–Fixes a critical issue with search result pagination that affects customers using Elasticsearch 6.x as the catalog search engine.

## v1.0.1

All Magento Open Source 2.x patches form [Magento Technical resources](https://magento.com/tech-resources/download) were included in this release. If any of them were copied to your project before, they should be removed to avoid possible conflicts.

This release includes the following patches and critical fixes:

-  {:.fix}<!--MAGECLOUD-4606-->**Review Hotfixes List and Add All Missing for 2.1.4+**–Updated the magento-cloud-patches package to include all Magento Open Source 2.x patches available on the [Magento Download page](https://magento.com/tech-resources/download).

-  {:.fix}<!--MAGECLOUD-4847-->**Fixed issues caused by the MC-21696 hot fix from `ece-tools` patches**–Replaced the patch for MC-21696 with a more accurate fix.

-  {:.fix}<!--MAGECLOUD-4884-->**Update PageBuilder Patches for RCE**–Update PageBuilder Patches which were bundled for 2.3.1 and 2.3.2 in MAGECLOUD-4649 before + add few more patches..
