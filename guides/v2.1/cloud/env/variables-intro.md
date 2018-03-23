---
layout: default
group: cloud
title: Environment variables
version: 2.1
github_link: cloud/env/variables-intro.md
redirect_from:
  - /guides/v2.1/cloud/live/config-reference-most.html
  - /guides/v2.2/cloud/live/config-reference-most.html
  - /guides/v2.3/cloud/live/config-reference-most.html
  - /guides/v2.1/cloud/live/config-reference-payment.html
  - /guides/v2.2/cloud/live/config-reference-payment.html
  - /guides/v2.3/cloud/live/config-reference-payment.html
  - /guides/v2.1/cloud/live/config-reference-sens.html
  - /guides/v2.2/cloud/live/config-reference-sens.html
  - /guides/v2.3/cloud/live/config-reference-sens.html
  - /guides/v2.1/cloud/env/environment-vars_over.html
  - /guides/v2.2/cloud/env/environment-vars_over.html
  - /guides/v2.2/cloud/env/environment-vars_over.html
functional_areas:
  - Cloud
  - Configuration
---

{{site.data.var.ece}} enables you to assign environment variables to override configuration options:

-   [Application]({{page.baseurl}}cloud/env/environment-vars_magento.html)—variables to override application variables
-   [Build]({{page.baseurl}}cloud/env/variables-build.html)—variables to control build actions
-   [Cloud]({{page.baseurl}}cloud/env/variables-cloud.html)—variables specific to {{site.data.var.ece}}
-   [Deploy]({{page.baseurl}}cloud/env/variables-deploy.html)—variables to control deploy actions

Variables are _hierarchical_, which means that if a variable is not overridden, it is inherited from the parent environment.

You use the [`.magento.env.yaml`](http://devdocs.magento.com/guides/v2.1/cloud/project/magento-env-yaml.html) file to manage build and deploy actions across all of your environments—including Pro Staging and Production—without requiring a support ticket.
