---
group: cloud-guide
title: Magento Cloud Components release notes
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

The [Magento Cloud Components](https://github.com/magento/magento-cloud-components) package provides extended Magento Commerce core functionality for sites deployed on the Cloud platform. This package is a dependency for the {{ site.data.var.ct }} package. These release notes describe the latest improvements to this package, which is a component of [{{ site.data.var.csuite }}]({{ page.baseurl }}/cloud/release-notes/cloud-tools.html).

The `{{site.data.var.mcc}}` package uses the following version sequence: `<major>.<minor>.<patch>`.

## v1.0.2

This release includes the following updates:

-  Item 1

## v1.0.1

This release includes the following updates:

-  {:.fix}<!-- MAGECLOUD-3866 -->Fixed an issue affecting [**WARM_UP_PAGES**]({{ site.baseurl }}/cloud/env/variables-post-deploy.html#warm_up_pages) functionality that uses a default store URL. Now, if the `config:show:default-url` command cannot fetch a base URL, then the URL from the MAGENTO_CLOUD_ROUTES variable is used.

## v1.0.0

This is the first release of the [`magento/magento-cloud-components`](https://github.com/magento/magento-cloud-components) package, which is a new dependency for `{{ site.data.var.ct }}` package version 2002.0.20 and later.

This release includes the following updates:

-  {:.new}<!--MAGECLOUD-3258-->Added the capability to use regex patterns to configure the **WARM_UP_PAGES** environment variable to cache single pages, multiple domains, and multiple pages. See [Post-deploy variables]({{ site.baseurl }}/cloud/env/variables-post-deploy.html#warm_up_pages).