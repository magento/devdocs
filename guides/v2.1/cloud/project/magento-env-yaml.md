---
layout: default
group: cloud
title: Manage build and deploy actions
version: 2.1
github_link: cloud/project/magento-env-yaml.md
functional_areas:
  - Cloud
  - Configuration
---

The `.magento.env.yaml` file centralizes the management of build and deploy actions across all of your environments, including Pro Staging and Production, using environment variables.

Unlike other YAML configuration files, such as [`.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html), [`.magento/routes.yaml`]({{page.baseurl}}cloud/project/project-conf-files_routes.html), and [`.magento/services.yaml`]({{page.baseurl}}cloud/project/project-conf-files_services.html), you can use the `.magento.env.yaml` file to manage configuration settings without opening a support ticket.

<div class="bs-callout bs-callout-warning" markdown="1">
-   Settings you configure with environment variables using the `magento-cloud` CLI tool or Project Web Interface override settings in the `.magento.env.yaml` file.
-   If you want to configure unique actions in each environment, you must modify this file in each environment branch.
</div>

Add the following sections to the `.magento.env.yaml` file:

-   **`stage`**—Contains the `global`, `build`, and `deploy` sections.
-   **`global`**—Controls actions in both the build _and_ deploy phases. You can override these settings in the build and deploy sections.
-   **`build`**—Controls actions in the build phase only. If you do not specify settings in this section, the build phase uses settings from the global section. Settings in the `build_options.ini` file override settings in this section.
-   **`deploy`**—Controls actions in the deploy phase only. If you do not specify settings in this section, the deploy phase uses settings from the global section. Settings you configure with environment variables using the `magento-cloud` CLI tool or Project Web Interface override settings in this section.

In each section, you use [build](http://devdocs.magento.com/guides/v2.1/cloud/env/environment-vars_magento.html#build) or [deploy](http://devdocs.magento.com/guides/v2.1/cloud/env/environment-vars_magento.html#deploy) variables to control build and deploy actions.

## Example
The following example shows how to minimize downtime during deployment by managing static content deployment:

```yaml
stage:
  global:
    SCD_STRATEGY: standard      # You cannot modify the strategy in 2.1.x.
    SKIP_SCD: true              # Skip static content deployment for both phases; you can override this in the build and deploy sections
  build:
    SKIP_SCD: false             # Override the global setting and perform static content deployment in the build phase
    SCD_COMPRESSION_LEVEL: 6    # Use the default gzip compression level for static content in the build phase
  deploy:
    SCD_COMPRESSION_LEVEL: 4    # Reduce the gzip compression level for static content in the deploy phase
```
