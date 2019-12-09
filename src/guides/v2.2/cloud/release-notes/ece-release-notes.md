---
group: cloud-guide
title: Release notes for ece-tools
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

The [ece-tools package](https://github.com/magento/ece-tools) is a set of scripts and tools designed to manage and deploy Cloud projects. These release notes describe the latest improvements to this package, which is part of the [{{ site.data.var.csuite }}]({{ page.baseurl }}/cloud/release-notes/cloud-tools.html).

The `{{site.data.var.ct}}` package uses the following release versioning sequence: `200<major>.<minor>.<patch>`. See [Upgrades and patches]({{ page.baseurl }}/cloud/project/project-upgrade-parent.html) for information about updating to the latest release of the
`{{site.data.var.ct}}` package.

The release notes include:

-  {:.new}New features
-  {:.fix}Fixes and improvements

## v2002.1.0

-  {:.new}Decoupled the Docker package from the `{{site.data.var.ctl}}` package to maintain code quality and provide independent releases. Updates and fixes related to `{{site.data.var.cd}}` are managed from the [`magento-cloud-docker`](https://github.com/magento/magento-cloud-docker) GitHub repository.<!--MAGECLOUD-3986-->

-  {:.new}Extended the functionality of the WARM_UP_PAGES environment variable to support cache preloading for specific product pages. See the expanded definition in the
[post-deploy variables]({{ page.baseurl }}/cloud/env/variables-post-deploy.html#warm_up_pages) topic.<!--MAGECLOUD-4444>