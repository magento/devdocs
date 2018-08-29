---
group: cloud
title: Release notes for ece-tools
redirect_from:
  - guides/v2.2/cloud/composer-packages/ece-tools.html
functional_areas:
  - Cloud
  - Setup
  - Configuration
---
The `ece-tools` package is compatible with {{site.data.var.ee}} version 2.1.4 and later to provide a rich set of features you can use to manage your {{site.data.var.ece}} project. It contains scripts and {{site.data.var.ece}} commands designed to help manage your code and automatically build and deploy your projects.

You can list the available ece-tools commands using:

```bash
php ./vendor/bin/ece-tools list
```

The following updates describe the latest improvements to the `ece-tools` package, which uses the following version sequence:  `200<major>.<minor>.<patch>`.  See [Upgrades and patches]({{ site.baseurl }}/guides/v2.1/cloud/project/project-upgrade-parent.html) for information about updating to the latest release of the `ece-tools` package.

## v2002.0.13

#### New features

-  <!--MAGECLOUD-2169-->**Enable zero-downtime deployment**—Now {{site.data.var.ece}} queues requests with required database changes during deployment and applies the changes as soon as the deployment completes. Requests can be held for up to 5 minutes to ensure that no sessions are lost. See [Static content deployment options to reduce deployment downtime on Cloud](https://support.magento.com/hc/en-us/articles/360004861194-Static-content-deployment-options-to-reduce-deployment-downtime-on-Cloud).

-  **Docker Compose for Cloud**—Made the following improvements to the [Docker setup and configuration]({{ page.baseurl }}/cloud/reference/docker-config.html) process:

   -  <!--MAGECLOUD-2359-->Added a command—`docker:config:convert` to convert PHP configuration files to Docker ENV format to simplify environment configuration. Now, you copy the PHP configuration files to the Docker directory and convert them to Docker ENV files. See [Launch Docker]({{ page.baseurl }}/cloud/reference/docker-config.html#launch-docker-configuration}}).

   -  <!--MAGECLOUD--2357-->The {{site.data.var.ece}} installation process now supports deploying to both read-only and  read-write file systems to more closely emulate the Cloud file system. See [Configure Docker]({{ page.baseurl }}/cloud/reference/docker-config.html).

   -  <!--MAGECLOUD--2442-->Redis service support—Added a Redis image, which is deployed to a Docker container and configured automatically to work with your Docker installation.

   -  <!--MAGECLOUD--2358-->Varnish service support— Added a Varnish image, which is deployed automatically to a Docker container. After deployment, you can manually configure Varnish following Magento best practices. See [Configure and use Varnish]({{ page.baseurl }}/config-guide/varnish/config-varnish.html).

   -  <!--MAGECLOUD--2360-->Secure site access—Added SSL support to access your {{site.data.var.ee}} store and Admin panel.


-  <!--MAGECLOUD-2205-->**Improved {{site.data.var.ece}} extension support**—Downgraded the minimum version requirement for the guzzlehttp/guzzle package in the {{site.data.var.ece}} [composer.json file]({{ page.baseurl }}/cloud/reference/cloud-composer.html) to version 6.2 so that the `ece-tools` package is compatible with more extensions.

- <!--MAGECLOUD-2363-->**Apply custom changes to your {{site.data.var.ee}} application during the build phase**—We split the build phase into two separate processes so that you can use hooks to apply custom changes to the generated static content before packaging the application for deployment. The *build:generate* process generates code, applies patches, and generates static content. The *build:transfer* process transfers the generated code and static content to the final destination. See [Application hooks]({{ page.baseurl }}//cloud/project/project-conf-files_magento-app.html#hooks).

-  **Environment configuration checks**—Improved validation of the environment configuration to warn customers about version incompatibilities and configuration errors before building and deploying {{site.data.var.ece}}.

   -  <!--MAGECLOUD-2183-->Added version-specific validation to identify unsupported or deprecated environment variables and values.

   -  <!--MAGECLOUD-2389-->Added an Elasticsearch compatibility check to warn users about Elasticsearch configuration issues. Now, the deployment fails if the version of Elasticsearch service on the server is incompatible with {{site.data.var.ee}}. Previously, the deployment succeeded even if the Elasticsearch version was incompatible, which caused product catalog issues after site deployment.
   
      You can resolve the incompatiblity by [submitting a Support ticket]({{ page.baseurl }}/cloud/trouble/trouble.html) to upgrade Elasticsearch to a compatible version, or change the {{site.data.var.ee}} configuration to specify a compatible version of the Elasticsearch PHP client.
   
      -  For {{site.data.var.ee}} version 2.1.x to 2.2.2, upgrade Elasticsearch to version 2.4.
	  -  For {{site.data.var.ee}} version 2.2.3 and later, upgrade Elaticsearch to version 5.2.
	  -  If you have Elasticsearch 1.x or 2.x and do not want to upgrade, update the {{site.data.var.ee}} Elasticsearch PHP client version requirement in composer.json to `"elasticsearch/elasticsearch": "~2.0"`.

   -  <!--MAGECLOUD-2156-->Improved validation of environment variables to identify configuration settings that can cause conflicts during the build, deploy, and post-deploy phases. For example, a warning message displays during the install and upgrade process if the global setting for static content deployment conflicts with settings on the build or deploy phase.

-  **Environment variable updates**—Changed the following environment variables:

   -  <!--MAGECLOUD-2435-->**[SKIP_HTML_MINIFICATION global variable]({{ page.baseurl }}/cloud/env/variables-intro.html#skip_html_minification)**—Changed the default value to `true` to enable on-demand HTML content minification, which minimizes downtime when deploying to Staging and Production environments. This configuration is required for zero-downtime deployments.

   -  <!--MAGECLOUD-1506-->**[CLEAN_STATIC_FILES deploy variable]({{ page.baseurl }}/cloud/env/variables-deploy.html#clean_static_files)**—Added the capability to manage the clean static files processing for static content generated during the build phase based on the CLEAN_STATIC_FILES environment variable setting. Previously, static content files generated during the build phase were always cleaned.

-  **Logging**—
Made the following changes to improve log messages and reduce log size:

   -  <!--MAGECLOUD-2489-->Deployment failure log entries now include the command output from the operations that cause the failures even if your environment configuration does not specify debug level logging. See [`MIN_LOGGING_LEVEL`]({{ page.baseurl }}//cloud/env/variables-intro.html#min_logging_level).

   -  <!--MAGECLOUD-2209-->Added logging for deployment failures that occur when generated factories required by some extensions cannot be generated correctly because the file system is in a read-only state.

   -  <!--MAGECLOUD-2402-->Reduced the deploy log size and fixed formatting issues caused by setup commands that use the interactive progress bar.

   -  <!--MAGECLOUD-2227-->Eliminated unnecessary verbosity and updated the priority levels for some log statements.

#### Resolved Issues

-  **Cron-specific fixes**

   -  <!--MAGECLOUD-2427-->Changed the default cron job configuration settings for history lifetime from 3d (4320 min) to 1h (60 min) to prevent performance issues and deployment failures that can occur when the cron queue fills too quickly.

   -  <!--MAGECLOUD-2445-->Improved the cron job management process during the deploy phase to prevent database locks and other critical issues. Now, all cron jobs stop during the deploy phase and restart after deployment completes.

   -  <!--MAGECLOUD-2464-->Fixed an issue with the locking mechanism for scheduling consumers launched by cron jobs in {{site.data.var.ee}} versions 2.2.0 and later to prevent cron jobs from launching duplicate consumers.

- <!-- MAGECLOUD-2182-->Fixed an issue with the [static content compression process]({{ site.baseurl }}/guides/v2.2/cloud/env/variables-intro.html) (`gzip`) that caused `not overwritten` and `no such file or directory` errors when referencing the compressed file during the deployment process.

- <!--MAGECLOUD-2444-->Fixed an issue that prevented the `php ./vendor/bin/ece-tools config:dump` command from removing redundant sections from the `config.php` file during the dump process if the store locale is not specified.
Now you can easily move your configuration files between environments. After you update to `ece-tools` v2002.0.13, regenerate
older `config.php` files with the improved `config:dump` command. See [Configuration management for store settings]({{ page.baseurl }}/cloud/live/sens-data-over.html).

- <!--MAGECLOUD-2556-->Fixed an  issue that caused an error during the deploy phase if the route configuration in the `.magento/routes.yaml` file redirects from an [apex](https://blog.cloudflare.com/zone-apex-naked-domain-root-domain-cname-supp/) domain to a `www`domain.

-  <!--MAGECLOUD-2520-->Fixed an issue with the `_merge` option for the [`SEARCH_CONFIGURATION`]({{ page.baseurl }}/cloud/env/variables-deploy.html#search_configuration) variable that caused incorrect merge results if you do not include the `engine` parameter in the updated `.magento.env.yaml` configuration file. Now, the merge operation correctly overwrites only the values you specify in the updated `.magento.env.yaml` without requiring you to set the `engine` parameter.

-  <!-- MAGECLOUD-2515-->Fixed a Redis configuration issue that incorrectly enabled session locking for {{site.data.var.ece}} versions 2.2.1 and later, which can cause slow performance and timeouts. Now, session locking is disabled by default. The issue was caused by a change in the default behavior of the `disable_locking` parameter introduced in v1.3.4 of the Redis session handler package [colinmollenhour/php-redis-session-abstract package](https://github.com/colinmollenhour/php-redis-session-abstract).

## v2002.0.12

#### New features

-  <!-- MAGECLOUD-2250 -->**Docker Compose for Cloud**—Added a command—`docker:build`—to generate a [Docker Compose]({{ page.baseurl }}/cloud/reference/docker-config.html) configuration from the Cloud `ece-tools` repository.

-  <!-- MAGECLOUD-2019 -->**Change Locales**—Now you can [change store locale]({{page.baseurl}}/cloud/live/sens-data-over.html#change-locales) without the exporting and importing configuration process. While Magento is in Production and the SCD_ON_DEMAND is enabled, the Magento store and admin locale options are available.

-  <!-- MAGECLOU-1998 -->**Site map and Robots**—Created a [workflow]({{ page.baseurl }}/cloud/trouble/robots-sitemap.html)
to add a `robots.txt` file and generate a `sitemap.xml` file for a single domain configuration without requiring a change to the infrastructure.

- <!-- MAGECLOUD-1910 -->**Wizards**—Added two [wizards]({{ page.baseurl }}/cloud/env/smart-wizards.html) to help you with Cloud configuration:
    -  `ideal-state`—configure the ideal state for minimal deployment downtime
    -  `master-slave`—configure load balancing for database and Redis

- <!-- MAGECLOUD-1521 -->**Module Refresh**—Added a Cloud command—`module:refresh`—to enable modules that were disabled or not explicitly enabled, similar to the way that it is done automatically during a build. See [Build and deploy on local in Build phase]({{ page.baseurl }}/cloud/live/live-sanity-check.html#build).

-  <!-- MAGECLOUD-2105 -->Added the ability to choose to merge or overwrite configuration for services using the `_merge` option in [CACHE]({{ page.baseurl }}/cloud/env/variables-deploy.html#cache_configuration), [SESSION]({{ page.baseurl }}/cloud/env/variables-deploy.html#session_configuration), [QUEUE]({{ page.baseurl }}/cloud/env/variables-deploy.html#queue_configuration), and [SEARCH]({{ page.baseurl }}/cloud/env/variables-deploy.html#search_configuration) configurations.

- <!-- MAGECLOUD-1908 -->**Environment Configuration sample file**—We added a `.magento.env.yaml` sample file to the ece-tools package that includes a detailed description and possible values for each environment variable.
    -  <!-- MAGECLOUD-1907 -->We also added a deep validation for the `.magento.env.yaml` configuration that prevents failures in the deployment process caused by unexpected values. When a failure occurs, you now receive a detailed error message that begins with: `Environment configuration is not valid. Please correct .magento.env.yaml file with next suggestions:`

-  Added the following [**Environment variables**]({{ page.baseurl }}/cloud/env/variables-intro.html):
    - <!-- MAGECLOUD-1501 -->Now you can define multiple locales for each theme using the new [SCD_MATRIX]({{ page.baseurl }}/cloud/env/variables-deploy.html#scd_matrix) environment variable, which reduces the amount of theme files to deploy.
    -  <!-- MAGECLOUD-2047 --> Added the [DATABASE_CONFIGURATION]({{ page.baseurl }}/cloud/env/variables-deploy.html#database_configuration) environment variable to customize your database connections for deployment.
    -  <!-- MAGECLOUD-2129 -->The new [MIN_LOGGING_LEVEL]({{ page.baseurl }}/cloud/env/variables-intro.html#min_logging_level) variable overrides the minimum logging level for all output streams without making changes to the code.

#### Resolved issues

-  Fixed an issue that caused downtime between the deploy and post-deploy phase. Now, the post_deploy phase begins _immediately_ after the deploy phase ends.

-  <!-- MAGECLOUD-2268 -->Fixed an issue that did not clean the successful cron jobs, those with `status = success`, from the schedule.

-  <!-- MAGECLOUD-2113 -->Fixed an issue with the `post_deploy` hook that cleared the cache in the deploy phase instead of the post-deploy phase of the project.

-  <!-- MAGECLOUD-2034 -->Fixed an issue when using SCD with multiple locales, which generated the same `js-translation.json` file for each locale.

- <!-- MAGECLOUD-2033  -->Optimized the `db:dump` command in the `ece-tools` package to avoid locking tables and increase speed.

## v2002.0.11

{:.bs-callout .bs-callout-info}
The ece-tools version 2002.0.11 is required for 2.2.4 compatibility.

#### New features

- **Configuring read-only connections to non-master nodes**—This release adds the ability to configure a read-only connection to a non-master node to receive read-only traffic (for <!--MAGECLOUD-143 -->[Redis]({{ page.baseurl }}/cloud/env/variables-deploy.html#redis_use_slave_connection) and for <!--MAGECLOUD-143 --> [MariaDB]({{ page.baseurl }}/cloud/env/variables-deploy.html#mysql_use_slave_connection)).
-  <!--MAGECLOUD-1910 -->**Configuration Wizard**—Added a wizard to help verify your configuration for static content deployment. See [Smart wizards]({{ page.baseurl }}/cloud/env/smart-wizards.html).
-  <!-- MAGECLOUD-1966 -->**Symfony Console support**—Added support for Symfony Console 4 with Magento 2.3.
-  <!-- MAGECLOUD-1607 -->**Cron scheduling optimizations**—Improved the queue management and enhanced logging to help with debugging cron-related issues.

#### Resolved issues

-  <!-- MAGECLOUD-1221 -->Deployment validation fails if an `ADMIN_EMAIL` or `ADMIN_USERNAME` value is the same as an existing Magento administrator account.
-  <!-- MAGECLOUD-1282 -->Removed SOLR support for 2.2.x versions. 2.1.x versions retain the ability to enable SOLR.
-  <!-- MAGECLOUD-1489 -->The first installation of the Staging & Production environments of a PRO project now includes different index prefixes for ElasticSearch to prevent possible conflicts while identifying records belonging to each environment.
-  <!-- MAGECLOUD-2021 -->Fixed an issue that interrupted the build phase for legacy architecture during static content deployment.

-  <!-- MAGECLOUD-1607 -->**Cron-specific Improvements**—Re-worked the cron implementation:
    - Fixed an issue that caused the cron queue to fill quickly. Now it clears the outdated cron jobs in a more reliable way.
    - Re-organized the sequence of cron jobs so that all jobs in separate threads launch prior to the general group.
    - Improved logging to better assist in debugging cron issues.
    - **NOTE**—This release addresses many cron-related issues. If you currently use some cron-related patches in _m2-hotfixes_, remove them.

-  **SCD-specific improvements**
    -  <!-- MAGECLOUD-1819 -->You can now use the `VERBOSE_COMMANDS` and the `SCD_COMPRESSION_LEVEL` environment variables during both _build_ and _deploy_ phases.
    -  <!-- MAGECLOUD-2043 -->Fixed an issue that caused deployment to fail with a random error when encountering an unexpected value for the `SCD_COMPRESSION_LEVEL` environment variable. Improved the configuration validation to provide meaningful notifications. See [`SCD_COMPRESSION_LEVEL`]({{ page.baseurl }}/cloud/env/variables-build.html#scd_compression_level) for acceptable values.

    -  <!-- MAGECLOUD-2044 -->Fixed the behavior of the `SCD_COMPRESSION_LEVEL` environment variable configuration flow so the overrides work as expected.
    -  <!-- MAGECLOUD-2046 -->Fixed an issue that prevented the configuration of the `SCD_THREADS` environment variable in the `.magento.env.yaml` file _deploy_ stage.

## v2002.0.10

#### New features

-  <!-- MAGECLOUD-1285 -->**Static Content Deployment (SCD)**—There is a new, alternative deployment process to generate static content when requested (on-demand). This decreases downtime and improves cache handling by generating the most critical assets.
    -  <!-- MAGECLOUD-1738 -->**New environment variable**—Added the `SCD_ON_DEMAND` global environment variable to generate static content when requested.
    -  <!-- MAGECLOUD-1788 -->**Post-deploy hook**—Added a `post_deploy` hook for the `.magento.app.yaml` file that clears the cache and pre-loads (warms) the cache _after_ the container begins accepting connections. It is available only for Pro projects that contain [Staging and Production environments in the Project Web UI]({{ page.baseurl }}/cloud/trouble/pro-env-management.html) and for Starter projects. Although not required, this works in tandem with the `SCD_ON_DEMAND` environment variable.

-  <!-- MAGECLOUD-1842 -->**Optimization**—Optimized moving or copying files during deployment to improve deployment speed and decrease loads on the file system.

-  <!-- MAGECLOUD-1751 -->**Deployment Logging**—Added the ability to enable Syslog and Graylog Extended Log Format (GELF) handlers for outputting logs during the deployment process. See [Logging handlers]({{ page.baseurl }}/cloud/env/log-handlers.html).

-  Added the following [**Environment variables**]({{ site.baseurl }}/guides/v2.2/cloud/env/variables-intro.html):
    -  <!-- MAGECLOUD-1556 -->`CRYPT_KEY`—Provide a cryptographic key to another environment when moving a database.
    -  <!-- MAGECLOUD-1621 and MAGECLOUD-1736-->`SKIP_HTML_MINIFICATION`—_Global_ environment variable that skips copying the static view files in the `var/view_preprocessed` directory and generates minified HTML when requested.
    -  <!-- MAGECLOUD-1738 -->`SCD_ON_DEMAND`—_Global_ environment variable to generate static content when requested.
    -   `WARM_UP_PAGES`—You can list the pages to use to pre-load the cache. Available in the new [Post-deploy variables]({{ site.baseurl }}/guides/v2.2/cloud/env/variables-post-deploy.html).

#### Resolved issues

-  <!-- MAGECLOUD-982 -->We fixed an issue that involved a locally applied patch breaking the deployment on an instance. Now, ece-tools can detect that a patch has been applied.

-  <!-- MAGECLOUD-1735 -->Fixed a conflict between JavaScript bundling and GZIP functionality. Now these features work correctly together.

-  <!-- MAGECLOUD-1744 -->Fixed an issue that caused ece-tools CLI commands to fail when using earlier PHP 7.0.x versions.

-  <!-- MAGECLOUD-1822 -->Fixed an issue that prevented static content deployment with the compact strategy in multiple threads.

-  <!-- MAGECLOUD-1853 -->Fixed a Redis session locking issue that caused an Admin login delay. Also, the fix is available for 2.1.x.

## v2002.0.9

{:.bs-callout .bs-callout-info}
You must [upgrade the {{site.data.var.ece}} metapackage]({{ site.baseurl }}/guides/v2.2/cloud/project/project-upgrade-parent.html) to get this and all future updates.

#### New features

-   <!-- MAGECLOUD-1086 -->**ece-tools**—The `ece-tools` package now supports Magento 2.1.x.

-   <!-- MAGECLOUD-1552 -->**Redis configuration**—You can now [configure Redis]({{ site.baseurl }}/guides/v2.2/cloud/env/variables-deploy.html#cache_configuration) page and default cache and Redis session storage using an environment variable.

-   <!-- MAGECLOUD-1437 -->**Search, AMQP, and Redis service improvements**—We unified the service configuration flow so that it now behaves the same way for all services. Manually editing the `env.php` file to configure services is no longer supported. You must use environment variables or the `.magento.env.yaml` file instead.

-   **Environment variables**

    -    <!-- MAGECLOUD-1507 -->The use of `env:STATIC_CONTENT_THREADS` was deprecated and will be removed in a future release. Use the `STATIC_CONTENT_THREADS` environment variable instead.

    -    <!-- MAGECLOUD-1640 -->The `STATIC_CONTENT_EXCLUDE_THEMES` environment variable was deprecated. You must use the `SCD_EXCLUDE_THEMES` environment variable instead.

-   <!-- MAGECLOUD-1674 -->**Logging**—We simplified logging around built-in patching operations.

#### Resolved issues

-   <!-- MAGECLOUD-1615 -->We removed `developer` mode support and the `APPLICATION_MODE` environment variable because they were causing unexpected behavior.

-   <!-- MAGECLOUD-1630 -->We fixed an issue that was causing static content deployment failures related to Redis. Now, multi-threaded static content deployment runs as designed.

-   <!-- MAGECLOUD-1175 -->We fixed an issue that was preventing users from saving modifications to configuration fields in the Admin, which are marked as sensitive after running the `app:config:dump` command.

-   <!-- MAGECLOUD-1674 -->We added support for an earlier version of `symfony/yaml` to fix conflicts with some packages, which are not yet compatible with the latest version.

## v2002.0.8

{:.bs-callout .bs-callout-info}
We merged [`vendor/magento/ece-patches`]({{ site.baseurl }}/guides/v2.2/cloud/composer-packages/ece-patches.html) with `vendor/magento/ece-tools` in this release. You no longer need to update the `vendor/magento/ece-patches` package separately.

#### New features

-   <!-- MAGECLOUD-1253 -MAGECLOUD-1495-->**Improved logging**
    -   We improved log messaging to provide better explanations when the build or deploy process overrides an environment variable.
    -   You can now view installation and upgrade progress in real time. Tail the `install_update.log` file to view progress. For example,

            tail -f var/log/install_upgrade.log

-   <!-- MAGECLOUD-1367 -->**New cron command**—You can now unlock specific stuck cron jobs instead of stopping and re-launching all of them with the [`cron:unlock`]({{ site.baseurl }}/guides/v2.2/cloud/trouble/reset-cron-jobs.html) command. Not available in 2.1.

-   <!-- MAGECLOUD-1369 -->**Unified configuration file**—You can now configure build and deploy stages using a [`.magento.env.yaml`]({{ site.baseurl }}/guides/v2.2/cloud/project/magento-env-yaml.html) file.

-   <!-- MAGECLOUD-1372 -->**Backup configuration files**—The deployment process now automatically creates a backup of the `app/etc/env.php` and `app/etc/config.php` configuration files after deployment. We also added a [new CLI command]({{ site.baseurl }}/guides/v2.2/cloud/trouble/restore-configuration-files.html) to restore these configuration files from a backup.

-   <!-- MAGECLOUD-1491 -->**Troubleshooting validation errors**—We changed the command you must use to resolve validation errors when `config.php` does not contain enough data for static content deployment. Previously, the error message instructed you to run `bin/magento app:config:dump`. Now, you must run `php ./vendor/bin/ece-tools config:dump`.

-   <!-- MAGECLOUD-1410 -->**New environment variables**—You can now use environment variables to connect custom [search]({{ site.baseurl }}/guides/v2.1/cloud/env/variables-deploy.html#search_configuration) and [AMQP-based]({{ site.baseurl }}/guides/v2.1/cloud/env/variables-deploy.html#queue_configuration) services to your site.

-   <!--MAGECLOUD-1090-->We implemented smart patching. Now the package applies patches based not on {{site.data.var.ece}} version, but on patched package version.

#### Resolved issues

-   <!-- MAGECLOUD-1162 -->We fixed a logging issue that was causing build errors.

-   <!-- MAGECLOUD-1389 -->We fixed an issue that was causing timeout exceptions when running deployments in interactive mode.

-   <!-- MAGECLOUD-1446 MAGECLOUD-1485-->We fixed an issue that was causing errors when using the compact strategy for static content generation. Not available in 2.1.

-   <!-- MAGECLOUD-1493 -->We fixed an issue that was preventing the deployment script from properly identifying staging and production environments.

-   <!-- MAGECLOUD-1520 -->We fixed an issue that was causing network issues to disrupt database connections and cause failures during the installation and upgrade process.

-   <!--  MAGECLOUD-1567  -->We fixed an issue preventing you from exporting the configuration files using `app:config:dump` more than once. Not available in 2.1.

-   <!--  MAGECLOUD-1582  -->We fixed a Redis session _locking_ issue that caused an _Admin_ login delay. Not available in 2.1.

-   <!--MAGECLOUD-1450-->We fixed an implementation issue related to versioning that was causing a conflict with other Composer-based patching modules.

-   <!--MAGECLOUD-1310-->We fixed an issue that was causing PHP memory issues during import.

-   <!--MAGECLOUD-1033-->Removed patch; fixing bug in `colinmollenhour/credis` v1.6 to enable support for {{site.data.var.ece}} 2.2.1. Not available in 2.1.

## v2002.0.7

#### Resolved issues

-   <!-- MAGECLOUD-1454-->We removed `var/view_preprocessed` symlinking to fix an issue that was causing JavaScript minification conflicts.

## v2002.0.6

#### Resolved issues

-   <!-- MAGECLOUD-1413 -->We fixed an issue that was causing `gzip` errors when a file or directory name contains spaces.

-   <!-- MAGECLOUD-1424 -->We fixed an issue that was preventing deployment scripts from properly recognizing and enabling module dependencies.

## v2002.0.5

#### New features

-   **Configure a cron consumer with an environment variable**—You can now configure cron consumers using the new `CRON_CONSUMERS_RUNNER` environment variable.

-   **Configuration scanning**—We now scan for critical components during the build/deploy process and halt the process if the scan fails, which prevents unnecessary downtime due to the site being in maintenance mode.

-   **Build/deploy notifications**—We added a configuration file that you can use to [set up Slack and/or email notifications]({{ site.baseurl }}/guides/v2.2/cloud/env/setup-notifications.html) for build/deploy actions in all your environments.

-   **Static content compression**—We now compress static content using [gzip](https://www.gnu.org/software/gzip/) during the build and deploy phases. This compression, coupled with Fastly compression, helps reduce the size of your store and increase deployment speed. If necessary, you can disable compression using a [build option]({{ site.baseurl }}/guides/v2.2/cloud/env/variables-build.html) or [deploy variable]({{ site.baseurl }}/guides/v2.2/cloud/env/variables-deploy.html). See the following topics for more information:

    -   [Magento application environment variables]({{ site.baseurl }}/guides/v2.2/cloud/env/environment-vars_magento.html)
    -   [Static content deployment performance]({{ site.baseurl }}/guides/v2.2/cloud/live/sens-data-over.html#cloud-confman-scd-over)
    -   [Deployment process]({{ site.baseurl }}/guides/v2.2/cloud/reference/discover-deploy.html)

-   **Configuration management**—We now auto-generate an `app/etc/config.php` file in your git repository during the build phase if it doesn't already exist. The auto-generated file includes only a list of modules and extensions. If the file already exists, the build phase continues as normal. If you follow [Configuration Management]({{ site.baseurl }}/guides/v2.2/cloud/live/sens-data-over.html) at a later time, the commands update the file without requiring additional steps. Refer to [Deployment process]({{ site.baseurl }}/guides/v2.2/cloud/reference/discover-deploy.html) for more information.

-   **Database dumps**—We added a `magento/ece-tools` CLI command for creating database dumps in all environments. For Pro plan Production environments, this command only dumps from one of three high-availability nodes, so production data written to a different node during the dump may not be copied. We recommend putting the application in maintenance mode before doing a database dump in Production environments. See [Snapshots and backup management]({{ site.baseurl }}/guides/v2.2/cloud/project/project-webint-snap.html#db-dump) for more information.

-   **Cron interval limitations lifted**—The default cron interval for all environments provisioned in the us-3, eu-3, and ap-3 regions is 1 minute. The default cron interval in all other regions is 5 minutes for Pro Integration environments and 1 minute for Pro Staging and Production environments. To modify your existing cron jobs, edit your settings in `.magento.app.yaml` or create a support ticket for Production/Staging environments. Refer to [Set up cron jobs]({{ site.baseurl }}/guides/v2.2/cloud/configure/setup-cron-jobs.html) for more information.

#### Resolved issues

-   <!-- MAGECLOUD-1327 -->We fixed an issue that was causing long deploy times due to the deploy process invoking the `cache-clean` operation before static content deployment.

-   <!-- MAGECLOUD-1322 -->We fixed an issue causing errors during the static content generation step of deployment on Production environments.

-   <!-- MAGECLOUD-1264 -->We fixed an issue preventing some `magento/ece-tools` commands from logging output to `stderr`.

-   <!-- MAGECLOUD-1242 -->We fixed an issue preventing base URL values in `env.php` from being updated in forked branches.

-   <!-- MAGECLOUD-1171 -->We fixed an issue causing the `magento setup:install` command to add an unsecure prefix (`http://`) to secure base URLs.

-   <!-- MAGECLOUD-1170 -->We fixed an issue preventing patch errors from causing deployment failures.

-   <!-- MAGECLOUD-1152 -->We fixed an issue preventing `ece-tools` from halting execution and throwing an exception if no patches can be applied.

-   <!-- MAGECLOUD-1138 -->We fixed an issue causing errors when loading the storefront after enabling HTML minification in the Magento Admin.

## v2002.0.4

#### Resolved issues

-   <!-- MAGECLOUD-1355 -->You can now [manually reset stuck Magento cron jobs]({{ site.baseurl }}/guides/v2.2/cloud/configure/setup-cron-jobs.html#reset-cron-jobs) using a CLI command in all environments via SSH access. The deployment process automatically resets cron jobs. Not available in 2.1.

## v2002.0.3

#### Resolved issues

-   <!--MAGECLOUD-1311-->We fixed an issue that was causing pages to time out because Redis was taking too long to read/write. You can now use the `disable_locking` parameter in Redis configurations to prevent this issue.

## v2002.0.2

#### Resolved issues

-   <!--MAGECLOUD-1246-->The RabbitMQ configuration process now obtains all required parameters automatically.

## v2002.0.1

#### New features

-   <!--- MAGECLOUD-1057 -->{{site.data.var.ece}} now supports scopes and [static content deployment strategies]({{ site.baseurl }}/guides/v2.2/config-guide/cli/config-cli-subcommands-static-deploy-strategies.html). We have added the `–s` parameter with a default setting of `quick` for the static content deployment strategy. You can use the environment variable [SCD_STRATEGY]({{ site.baseurl }}/guides/v2.2/cloud/env/variables-deploy.html) to customize and use these strategies with your build and deploy actions. This variable supports the options `standard`, `quick`, or `compact`. If you select `compact`, we override the `STATIC_CONTENT_THREADS` value with `1`, which can slow deployment, especially in production environments. Not available in 2.1.

-   <!--- MAGECLOUD-1014 & MAGECLOUD-1023 -->We have created a log file on environments to capture and compile build and deploy actions. The file is located in the `var/log/cloud.log` file inside the Magento root application directory.

#### Resolved issues

-   <!-- MAGECLOUD-919 & MAGECLOUD-1030-->Refactored the `ece-tools` package to make it compatible with {{site.data.var.ece}} 2.2.0 and higher.

-   <!-- MAGECLOUD-1186-->We fixed an issue that was preventing `ece-tools` from halting execution and throwing an exception if no patches can be applied.

-   <!-- MAGECLOUD-1047 & MAGECLOUD-1049-->We fixed an issue that was causing exceptions to be thrown when  dependency injection (di) compilation is skipped during builds.

-   <!-- MAGECLOUD-1019-->We fixed an issue that was causing the deploy process to overwrite custom Redis configurations in the `env.php` file.

-   <!--MAGECLOUD-1020-->We fixed an issue that was causing redirect loops due to disabled by default secure admin.

## v2002.0.0

{:.bs-callout .bs-callout-warning}
This package is no longer compatible with other versions of {{site.data.var.ece}} and **should not** be used.

### Initial release

Initial release of `ece-tools` for {{site.data.var.ece}} 2.2.0.
