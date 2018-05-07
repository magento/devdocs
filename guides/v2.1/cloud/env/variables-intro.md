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

-   [Application]({{page.baseurl}}/cloud/env/environment-vars_magento.html)—variables override application variables
-   [Build]({{page.baseurl}}/cloud/env/variables-build.html)—variables control build actions
-   [Cloud]({{page.baseurl}}/cloud/env/variables-cloud.html)—variables specific to {{site.data.var.ece}}
-   [Deploy]({{page.baseurl}}/cloud/env/variables-deploy.html)—variables control deploy actions
-   [Post-deploy]({{page.baseurl}}/cloud/env/variables-post-deploy.html)—variables control actions after deploy

Variables are _hierarchical_, which means that if a variable is not overridden, it is inherited from the parent environment.

You use the [`.magento.env.yaml`](http://devdocs.magento.com/guides/v2.1/cloud/project/magento-env-yaml.html) file to manage build and deploy actions across all of your environments—including Pro Staging and Production—without requiring a support ticket.

## Global variables
The following _global_ variables control actions in the build, deploy, and post-deploy stages of the `.magento.env.yaml` file. Because global variables impact every stage, you must set them in the `global` stage.

### `SCD_ON_DEMAND`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

Enable generation of static content when requested by a user. Pre-loading the cache using the [`post_deploy` hook]({{page.baseurl}}/cloud/project/project-conf-files_magento-app.html#hooks) reduces site downtime. The cache warming is not available when using the Starter plan architecture. Add the `SCD_ON_DEMAND` environment variable to the `global` stage in the `.magento.env.yaml` file:

```
stage:
  global:
    SCD_ON_DEMAND: true
```

The `SCD_ON_DEMAND` variable skips the SCD and the  `STATIC_CONTENT_SYMLINK` in both phases (build and deploy), clears the `pub/static` and `var/view_preprocessed` folders, and writes the following to the `app/etc/env.php` file:

```php
return array(
   ...
   'static_content_on_demand_in_production' => 1,
   ...
);
```

{% include note.html type="info" content="JS bundling and JS/CSS merging do not work with SCD on demand." %}

### `SKIP_HTML_MINIFICATION`

-  **Default**—`false`
-  **Version**—Magento 2.1.4 and later

Skip copying the static view files in the `var/view_preprocessed` directory to reduce downtime when deploying to the Staging and Production environments and generates minified HTML when requested.

-   **`false`**—Copies the `view_preprocessed` directory to the `<magento_root>/init/` directory at the end of the build stage, and restores the directory in the `<magento_root>/var` directory at the beginning of the deployment stage.
-   **`true`**—Enables on-demand static content minification; does *not* copy the `<magento_root>var/view_preprocessed` to the `<magento_root>/init/` directory at the end of the _build_ stage.

Add the `SKIP_HTML_MINIFICATION` environment variable to the `global` stage in the `.magento.env.yaml` file:

```
stage:
  global:
    SKIP_HTML_MINIFICATION: true
```