---
group: cloud-guide
title: Environment variables
functional_areas:
  - Cloud
  - Configuration
---

{{site.data.var.ece}} enables you to assign environment variables to override configuration options:

-   [ADMIN]({{ page.baseurl }}/cloud/env/environment-vars_magento.html)—variables override project ADMIN variables
-   [Build]({{ page.baseurl }}/cloud/env/variables-build.html)—variables control build actions
-   [Cloud]({{ page.baseurl }}/cloud/env/variables-cloud.html)—variables specific to {{site.data.var.ece}}
-   [Deploy]({{ page.baseurl }}/cloud/env/variables-deploy.html)—variables control deploy actions
-   [Post-deploy]({{ page.baseurl }}/cloud/env/variables-post-deploy.html)—variables control actions after deploy

Variables are _hierarchical_, which means that if a variable is not overridden, it is inherited from the parent environment.

You can set [ADMIN variables]({{ page.baseurl }}/cloud/env/environment-vars_magento.html)
from the Project Web interface or using the Magento CLI. Other environment variables can be managed from the [`.magento.env.yaml`]({{ site.baseurl }}/guides/v2.1/cloud/project/magento-env-yaml.html) file to manage build and deploy actions across all of your environments—including Pro Staging and Production—without requiring a support ticket.

## Global variables

The following _global_ variables control actions in the build, deploy, and post-deploy stages of the `.magento.env.yaml` file. Because global variables impact every stage, you must set them in the `global` stage. Insert these variables in the `global` stage of the `.magento.env.yaml` file:

```yaml
stage:
  global:
    GLOBAL_VARIABLE_NAME: value
```
### `MIN_LOGGING_LEVEL`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

Overrides the minimum logging level for all output streams without making changes to the code. This helps to improve troubleshooting problems with deployment. For example, if your deployment fails, you can use this variable to increase the logging granularity globally. See [Set up notifications—Log levels]({{ page.baseurl }}/cloud/env/setup-notifications.html#log-levels). The `min_level` value in Logging handlers overwrites this setting.

```yaml
stage:
    global:
        MIN_LOGGING_LEVEL: debug
```
### `SCD_ON_DEMAND`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

Enable generation of static content when requested by a user. This is ideal for the development and testing workflow, because it decreases the deployment time.

Pre-loading the cache using the [`post_deploy` hook]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html#hooks) reduces site downtime. The cache warming is available only for Pro projects that contain Staging and Production environments in the Project Web UI and for Starter projects. Add the `SCD_ON_DEMAND` environment variable to the `global` stage in the `.magento.env.yaml` file:

```yaml
stage:
  global:
    SCD_ON_DEMAND: true
```

The `SCD_ON_DEMAND` variable skips the SCD and the `STATIC_CONTENT_SYMLINK` in both phases (build and deploy), clears the `pub/static` and `var/view_preprocessed` folders, and writes the following to the `app/etc/env.php` file:

```php
return array(
   ...
   'static_content_on_demand_in_production' => 1,
   ...
);
```
{% include note.html type="info" content="JS bundling and JS/CSS merging do not work with SCD on demand." %}

### `SKIP_HTML_MINIFICATION`

-  **Default**
   - `true` for `ece-tools` 2002.0.13 and later
   - `false` for earlier versions of `ece-tools`
-  **Version**—Magento 2.1.4 and later

Enables or disables copying static view files to the `<magento_root>/init/` directory at the end of the build stage. If set to `true` files are not copied and HTML minification is available on request. Set this value to `true` to reduce downtime when deploying to Staging and Production environments.

-   **`false`**—Copies the `view_preprocessed` directory to the `<magento_root>/init/` directory at the end of the build stage, and restores the directory in the `<magento_root>/var` directory at the beginning of the deployment stage.
-   **`true`**—Enables on-demand HTML minification; does *not* copy the `<magento_root>var/view_preprocessed` to the `<magento_root>/init/` directory at the end of the _build_ stage.

Add the `SKIP_HTML_MINIFICATION` environment variable to the `global` stage in the `.magento.env.yaml` file:


```yaml
stage:
  global:
    SKIP_HTML_MINIFICATION: true
```
