---
group: cloud-guide
title: Release notes for Cloud Suite
functional_areas:
  - Cloud
  - Setup
  - Configuration
redirect_from:
  - /cloud/release-notes/CloudReleaseNotes.html
---

This release information details the latest improvements to the {{site.data.var.csuite}} packages which are designed to deploy and manage {{site.data.var.ee}} installations and upgrades on the Cloud platform.

| Release notes | Version | Description | Package source |
| --- | --- | --- | --- |
| [`{{site.data.var.ct}}` release notes]] | 2002.1.0 | A set of scripts and tools designed to manage and deploy Cloud projects | [{{site.data.var.ct}}][ece package] |
| [`{{site.data.var.mcp-prod}}` release notes] | 1.0.1 | A set of patches which improve the integration of all Magento versions with Cloud environments. This package includes Magento patches and available hot fixes that are applied when you use `{{site.data.var.ct}}` to deploy | [{{site.data.var.mcp}}][Patches package] |
| [`{{site.data.var.mcd-prod}}` release notes] | 1.0.0 | Functionality and configuration files for Docker images to deploy Magento Commerce to a local Cloud environment | [{{site.data.var.mcd}}][Docker package] |
| [`{{site.data.var.mcc-prod}}` release notes] | 1.0.2 | Extended Magento Commerce core functionality for sites deployed on the Cloud platform | [{{site.data.var.mcc}}][Components package] |

When you update to `{{site.data.var.ct}}` 2002.1.0 or later, you automatically update to the latest versions of the other packages, which are dependencies for `{{site.data.var.ct}}`.

[`{{site.data.var.ct}}` release notes]: {{site.baseurl}}/cloud/release-notes/ece-release-notes.html
[`{{site.data.var.mcc-prod}}` release notes]: {{site.baseurl}}/cloud/release-notes/mcc-release-notes.html
[`{{site.data.var.mcd-prod}}` release notes]: {{site.baseurl}}/cloud/release-notes/mcd-release-notes.html
[`{{site.data.var.mcp-prod}}` release notes]: {{site.baseurl}}/cloud/release-notes/mcp-release-notes.html
[ece package]: https://github.com/magento/ece-tools/tree/2002.1
[Docker package]: https://github.com/magento/magento-cloud-docker/tree/1.0
[Components package]: https://github.com/magento/magento-cloud-components/tree/1.0.2
[Patches package]: https://github.com/magento/magento-cloud-patches/tree/1.0.1
