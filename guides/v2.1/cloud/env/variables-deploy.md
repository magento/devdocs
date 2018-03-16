---
layout: default
group: cloud
title: Deploy variables
version: 2.1
github_link: cloud/env/variables-deploy.md
functional_areas:
  - Cloud
  - Configuration
---
The following environment variables are available during the deploy process.See [Manage build and deploy actions](http://devdocs.magento.com/guides/v2.1/cloud/project/magento-env-yaml.html) for more information about using these options in the `.magento.env.yaml` file. Also, you can override the [`ADMIN_` variables]({{page.baseurl}}cloud/env/environment-vars_magento.html).

For information on the build and deploy process, see [Deployment process]({{page.baseurl}}cloud/reference/discover-deploy.html).

### `CACHE_CONFIGURATION`

-  **Default**—_Not set_
-  **Version**—Magento 2.1 and later

Use to configure Redis page and default caching. Set the variable value using JSON. By default, the deployment process overwrites all settings in the `env.php` file.

Refer to [Configure Redis]({{page.baseurl}}cloud/env/working-with-variables.html#redis) for more information.

### `CLEAN_STATIC_FILES`

-  **Default**—`enabled`
-  **Version**—Available in all versions

The default value, `enabled`, cleans [generated static view files]({{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview) when you perform an action like enabling or disabling a component. We recommend the default value in development. The supported values are `enabled` and `disabled`.

Failure to clear static view files might result in issues if there are multiple files with the same name and you do not clear all of them.

Because of [static file fallback]({{page.baseurl}}howdoi/clean_static_cache.html) rules, if you do not clear static files and there is more than one file named `logo.gif` that are different, fallback might cause the wrong file to display.

### `CRON_CONSUMERS_RUNNER`

-  **Default**—_Not set_
-  **Version**—Magento 2.1 and later

By default, the deployment process overwrites all settings in the `env.php` file. Use this environment variable to make sure message queues are running after a deployment.
 
You must set the variable value using JSON. Refer to [Manage message queues]({{page.baseurl}}cloud/env/working-with-variables.html#manage-message-queues) for more information.

### `DO_DEPLOY_STATIC_CONTENT`

-  **Default**—`disabled`
-  **Version**—Available in all versions

You can forcefully enable or disable the deployment of static content during the deploy phase with this variable. If you already completed static content deployment in the build phase, and this variable is enabled, it is overridden to ensure static content deployment occurs only once. We strongly recommend always deploying static content during the build phase.

### `GENERATED_CODE_SYMLINK`

-  **Default**—`disabled`
-  **Version**—Magento 2.1.x

Enables the `var/generation` and `var/di` generated folders to be writable. 

### `MAGENTO_CLOUD_MODE`

-  **Default**—`enterprise`
-  **Version**—Available in all versions

We manage the values and setting of this variable. It identifies the type of environment as part of Integration, Staging, or Production. For example, for Pro, this value may be `enterprise` indicating Staging and Production. For `enterprise`, it sets the `STATIC_CONTENT_THREADS` to `3`, otherwise sets it to 1 for Integration. This is highly important for Pro plans Production, which has a three node high availability architecture with a very different technology stack.

### `QUEUE_CONFIGURATION`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

By default, the deployment process overwrites all settings in the `env.php` file. Use this environment variable to retain customized AMQP service settings between deployments.

You must set the variable value using JSON. Refer to [Connect to an existing AMQP-based service]({{page.baseurl}}cloud/env/working-with-variables.html#queue) for more information.

### `SCD_COMPRESSION_LEVEL`

-  **Default**—`6`
-  **Version**—Magento 2.1.x

Specifies which [gzip](https://www.gnu.org/software/gzip){target="\_blank} compression level (`0` to `9`) to use when compressing static content; `0` disables compression.

### `SCD_STRATEGY`

-  **Default**—`standard`
-  **Version**—You cannot modify the strategy in 2.1.x.

Deploys all static view files for all packages.

### `SEARCH_CONFIGURATION`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

By default, the deployment process overwrites all settings in the `env.php` file. Use this environment variable to retain customized search service settings between deployments.

You must set the variable value using JSON. Refer to [Connect to an existing search service]({{page.baseurl}}cloud/env/working-with-variables.html#search) for more information.

### `SESSION_CONFIGURATION`

-  **Default**—_Not set_
-  **Version**—Magento 2.1 and later

Use to configure Redis session storage. Set the variable value using JSON. By default, the deployment process overwrites all settings in the `env.php` file.

Refer to [Configure Redis]({{page.baseurl}}cloud/env/working-with-variables.html#redis) for more information.

### `STATIC_CONTENT_EXCLUDE_THEMES`

-  **Default**—_Not set_
-  **Version**—Available in all versions

Themes can include numerous files. If you want to skip copying over theme files during deployment, you can set this environment variable. For example, the Luma theme is included with {{site.data.var.ece}}. You may not need to constantly deploy this theme with your code updates and deployments. To exclude, you would add the theme, for example: `Magento/luma`.

### `STATIC_CONTENT_SYMLINK`

-  **Default**—`enabled`
-  **Version**—Available in all versions

Generates symlinks for static content. By default, symlinks are always generated unless you disable it using this environment variable. This setting is vital for Pro Production environment for the three node cluster. If disabled, every file will be copied during deployment without automated symlinks generated. If disabled, this will increase deployment time.

### `STATIC_CONTENT_THREADS`

-  **Default**: 
    -  `1`—Starter environments and Pro Integration environments
    -  `3`—Pro Staging and Production environments
-  **Version**—Available in all versions

Sets the number of threads for processing and deploying static content files. The higher amount of threads increasing the amount of files processed during the deployment. The lower the number of threads, the slower static files are processed increasing deployment time.

For Starter plan environments and Pro Integration environments, the threads value is `1`. This amount is fine for these environments. For Pro Staging and Production environments, the default threads is `3` to increase the speed of processing static content, especially for Production with three nodes and GlusterFS.

To further reduce deployment time, we recommend using [Configuration Management]({{page.baseurl}}cloud/live/sens-data-over.html) with the `scd-dump`command to move static deployment into the build phase.

### `UPDATE_URLS`

-  **Default**—`enabled`
-  **Version**—Magento 2.1.2 and later

On deployment, replace Magento base URLs in the database with project URLs. This is useful for local development, where base URLs are set up for your local environment. When you deploy to a Cloud environment, we change the URLs so you can access your storefront and Magento Admin using project URLs.

You should set this variable to `disabled` _only_ in Staging or Production environments, where the base URLs cannot change. For Pro, we already set this to `disabled` for you.

### `VERBOSE_COMMANDS`

-  **Default**—`disabled`
-  **Version**—Available in all versions

 Enables or disables the <a href="https://symfony.com/doc/current/console/verbosity.html">Symfony</a> debug verbosity level for your logs. Be aware, if you enable this verbosity, the logs will be deeply detailed.
