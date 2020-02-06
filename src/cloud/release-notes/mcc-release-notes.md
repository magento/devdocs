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

-  {:.new}Extended the functionality of the `WARM_UP_PAGES` environment variable to support cache preloading for specific product pages. See the [post-deploy variables]({{site.baseurl}}/cloud/env/variables-post-deploy.html#warm_up_pages) topic for a detailed feature description.<!--MAGECLOUD-4444-->

-  {:.fix}Fixed an issue where an invalid store URL causes the post-deploy hook to fail when using the `WARM_UP_PAGES` functionality to populate the cache. This issue occurred only when URL rewrites were disabled.<!-- MAGECLOUD-4094 -->

## v1.0.1

-  {:.fix}Fixed an issue affecting [**WARM_UP_PAGES**]({{ site.baseurl }}/cloud/env/variables-post-deploy.html#warm_up_pages) functionality that uses a default store URL. Now, if the `config:show:default-url` command cannot fetch a base URL, then the URL from the MAGENTO_CLOUD_ROUTES variable is used.<!-- MAGECLOUD-3866 -->

## v1.0.0

This is the first release of the [`magento/magento-cloud-components`](https://github.com/magento/magento-cloud-components) package, which is a new dependency for `{{ site.data.var.ct }}` package version 2002.0.20 and later.

-  {:.new}<!--MAGECLOUD-3258-->Added the capability to use regex patterns to configure the **WARM_UP_PAGES** environment variable to cache single pages, multiple domains, and multiple pages. See [Post-deploy variables]({{ site.baseurl }}/cloud/env/variables-post-deploy.html#warm_up_pages).
