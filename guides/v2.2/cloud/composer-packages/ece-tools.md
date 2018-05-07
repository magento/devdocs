---
layout: default
group: cloud
title: Patch Cloud tools
version: 2.2
github_link: cloud/composer-packages/ece-tools.md
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

{% include cloud/ece-tools.md %}

## v2002.0.10

### New features

-  <!-- MAGECLOUD-1285 -->**Static Content Deployment (SCD)**—There is a new, alternative deployment process to generate static content when requested (on-demand). This decreases downtime and improves cache handling by generating the most critical assets.
    -  <!-- MAGECLOUD-1738 -->**New environment variable**—Added the new `SCD_ON_DEMAND` global environment variable to generate static content when requested.
    -  <!-- MAGECLOUD-1788 -->**Post-deploy hook**—Added a new `post_deploy` hook for the `.magento.app.yaml` file that clears the cache and pre-loads (warms) the cache _after_ the container begins accepting connections. It is available only for Pro projects that contain [Staging and Production environments in the Project Web UI]({{page.baseurl}}/cloud/trouble/pro-env-management.html) and for Starter projects. Although not required, this works in tandem with the `SCD_ON_DEMAND` environment variable.

-  <!-- MAGECLOUD-1842 -->**Optimization**—Optimized moving or copying files during deployment to improve deployment speed and decrease loads on the file system.

-  <!-- MAGECLOUD-1751 -->**Deployment Logging**—Added the ability to enable Syslog and Graylog Extended Log Format (GELF) handlers for outputting logs during the deployment process. See [Logging handlers]({{page.baseurl}}/cloud/env/log-handlers.html).

-  Added the following new [**Environment variables**](http://devdocs.magento.com/guides/v2.2/cloud/env/variables-intro.html):
    -  <!-- MAGECLOUD-1556 -->`CRYPT_KEY`—Provide a cryptographic key to another environment when moving a database.
    -  <!-- MAGECLOUD-1621 and MAGECLOUD-1736-->`SKIP_HTML_MINIFICATION`—_Global_ environment variable that skips copying the static view files in the `var/view_preprocessed` directory and generates minified HTML when requested.
    -  <!-- MAGECLOUD-1738 -->`SCD_ON_DEMAND`—_Global_ environment variable to generate static content when requested.
    -   `WARM_UP_PAGES`—You can list the pages to use to pre-load the cache. Available in the new [Post-deploy variables](http://devdocs.magento.com/guides/v2.2/cloud/env/variables-post-deploy.html).

### Fixed issues

-  <!-- MAGECLOUD-982 -->We fixed an issue that involved a locally applied patch breaking the deployment on an instance. Now, ece-tools can detect that a patch has been applied.

-  <!-- MAGECLOUD-1735 -->Fixed a conflict between JavaScript bundling and GZIP functionality. Now these features work correctly together.

-  <!-- MAGECLOUD-1744 -->Fixed an issue that caused ece-tools CLI commands to fail when using earlier PHP 7.0.x versions.

-  <!-- MAGECLOUD-1822 -->Fixed an issue that prevented static content deployment with the compact strategy in multiple threads.

-  <!-- MAGECLOUD-1853 -->Fixed a Redis session locking issue that caused an Admin login delay. Also, the fix is available for 2.1.x.

## v2002.0.9

<div class="bs-callout bs-callout-info" id="info" markdown="1">
You must [upgrade the {{site.data.var.ece}} metapackage](http://devdocs.magento.com/guides/v2.2/cloud/project/project-upgrade-parent.html) to get this and all future updates.
</div>

### New features
-   <!-- MAGECLOUD-1086 -->**ece-tools**—The `ece-tools` package now supports Magento 2.1.x.

-   <!-- MAGECLOUD-1552 -->**Redis configuration**—You can now [configure Redis](http://devdocs.magento.com/guides/v2.2/cloud/env/working-with-variables.html#redis) page and default cache and Redis session storage using an environment variable.

-   <!-- MAGECLOUD-1437 -->**Search, AMQP, and Redis service improvements**—We unified the service configuration flow so that it now behaves the same way for all services. Manually editing the `env.php` file to configure services is no longer supported. You must use environment variables or the `.magento.env.yaml` file instead.

-   **Environment variables**

    -    <!-- MAGECLOUD-1507 -->The use of `env:STATIC_CONTENT_THREADS` was deprecated and will be removed in a future release. Use the `STATIC_CONTENT_THREADS` environment variable instead.

    -    <!-- MAGECLOUD-1640 -->The `STATIC_CONTENT_EXCLUDE_THEMES` environment variable was deprecated. You must use the `SCD_EXCLUDE_THEMES` environment variable instead.

-   <!-- MAGECLOUD-1674 -->**Logging**—We simplified logging around built-in patching operations.

### Fixed issues
-   <!-- MAGECLOUD-1615 -->We removed `developer` mode support and the `APPLICATION_MODE` environment variable because they were causing unexpected behavior.

-   <!-- MAGECLOUD-1630 -->We fixed an issue that was causing static content deployment failures related to Redis. Now, multi-threaded static content deployment runs as designed.

-   <!-- MAGECLOUD-1175 -->We fixed an issue that was preventing users from saving modifications to configuration fields in the Admin, which are marked as sensitive after running the `app:config:dump` command.

-   <!-- MAGECLOUD-1674 -->We added support for an earlier version of `symfony/yaml` to fix conflicts with some packages, which are not yet compatible with the latest version.

## v2002.0.8
<div class="bs-callout bs-callout-info" markdown="1">
We merged [`vendor/magento/ece-patches`](http://devdocs.magento.com/guides/v2.2/cloud/composer-packages/ece-patches.html) with `vendor/magento/ece-tools` in this release. You no longer need to update the `vendor/magento/ece-patches` package separately.
</div>

### New features
-   <!-- MAGECLOUD-1253 -MAGECLOUD-1495-->**Improved logging**
    -   We improved log messaging to provide better explanations when the build or deploy process overrides an environment variable.
    -   You can now view installation and upgrade progress in real time. Tail the `install_update.log` file to view progress. For example,

            tail -f var/log/install_upgrade.log

-   <!-- MAGECLOUD-1367 -->**New cron command**—You can now unlock specific stuck cron jobs instead of stopping and re-launching all of them with the [`cron:unlock`](http://devdocs.magento.com/guides/v2.2/cloud/trouble/reset-cron-jobs.html) command. Not available in 2.1.

-   <!-- MAGECLOUD-1369 -->**Unified configuration file**—You can now configure build and deploy stages using a [`.magento.env.yaml`](http://devdocs.magento.com/guides/v2.2/cloud/project/magento-env-yaml.html) file.

-   <!-- MAGECLOUD-1372 -->**Backup configuration files**—The deployment process now automatically creates a backup of the `app/etc/env.php` and `app/etc/config.php` configuration files after deployment. We also added a [new CLI command](http://devdocs.magento.com/guides/v2.2/cloud/trouble/restore-configuration-files.html) to restore these configuration files from a backup.

-   <!-- MAGECLOUD-1491 -->**Troubleshooting validation errors**—We changed the command you must use to resolve validation errors when `config.php` does not contain enough data for static content deployment. Previously, the error message instructed you to run `bin/magento app:config:dump`. Now, you must run `php ./vendor/bin/ece-tools config:dump`.

-   <!-- MAGECLOUD-1410 -->**New environment variables**—You can now use environment variables to connect custom [search](http://devdocs.magento.com/guides/v2.1/cloud/env/working-with-variables.html#search) and [AMQP-based](http://devdocs.magento.com/guides/v2.1/cloud/env/working-with-variables.html#queue) services to your site.

-   <!--MAGECLOUD-1090-->We implemented smart patching. Now the package applies patches based not on {{site.data.var.ece}} version, but on patched package version.


### Fixed issues
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

### Fixed issues
-   <!-- MAGECLOUD-1454-->We removed `var/view_preprocessed` symlinking to fix an issue that was causing JavaScript minification conflicts.

## v2002.0.6

### Fixed issues
-   <!-- MAGECLOUD-1413 -->We fixed an issue that was causing `gzip` errors when a file or directory name contains spaces.

-   <!-- MAGECLOUD-1424 -->We fixed an issue that was preventing deployment scripts from properly recognizing and enabling module dependencies.


## v2002.0.5

### New features
-   **Configure a cron consumer with an environment variable**—You can now configure cron consumers using the new `CRON_CONSUMERS_RUNNER` environment variable.

-   **Configuration scanning**—We now scan for critical components during the build/deploy process and halt the process if the scan fails, which prevents unnecessary downtime due to the site being in maintenance mode.

-   **Build/deploy notifications**—We added a new configuration file that you can use to [set up Slack and/or email notifications](http://devdocs.magento.com/guides/v2.2/cloud/env/setup-notifications.html) for build/deploy actions in all your environments.

-   **Static content compression**—We now compress static content using [gzip](https://www.gnu.org/software/gzip/){:target="\_blank"} during the build and deploy phases. This compression, coupled with Fastly compression, helps reduce the size of your store and increase deployment speed. If necessary, you can disable compression using a [build option](http://devdocs.magento.com/guides/v2.2/cloud/env/environment-vars_magento.html#build) or [deploy variable](http://devdocs.magento.com/guides/v2.2/cloud/env/environment-vars_magento.html#deploy). See the following topics for more information:

    -   [Magento application environment variables](http://devdocs.magento.com/guides/v2.2/cloud/env/environment-vars_magento.html)
    -   [Static content deployment performance](http://devdocs.magento.com/guides/v2.2/cloud/live/sens-data-over.html#cloud-confman-scd-over)
    -   [Deployment process](http://devdocs.magento.com/guides/v2.2/cloud/reference/discover-deploy.html)

-   **Configuration management**—We now auto-generate an `app/etc/config.php` file in your git repository during the build phase if it doesn't already exist. The auto-generated file includes only a list of modules and extensions. If the file already exists, the build phase continues as normal. If you follow [Configuration Management](http://devdocs.magento.com/guides/v2.2/cloud/live/sens-data-over.html) at a later time, the commands update the file without requiring additional steps. Refer to [Deployment process](http://devdocs.magento.com/guides/v2.2/cloud/reference/discover-deploy.html) for more information.

-   **Database dumps**—We added a new `magento/ece-tools` CLI command for creating database dumps in all environments. For Pro plan Production environments, this command only dumps from one of three high-availability nodes, so production data written to a different node during the dump may not be copied. We recommend putting the application in maintenance mode before doing a database dump in Production environments. See [Snapshots and backup management](http://devdocs.magento.com/guides/v2.2/cloud/project/project-webint-snap.html#db-dump) for more information.

-   **Cron interval limitations lifted**—The default cron interval for all environments provisioned in the us-3, eu-3, and ap-3 regions is 1 minute. The default cron interval in all other regions is 5 minutes for Pro Integration environments and 1 minute for Pro Staging and Production environments. To modify your existing cron jobs, edit your settings in `.magento.app.yaml` or create a support ticket for Production/Staging environments. Refer to [Set up cron jobs](http://devdocs.magento.com/guides/v2.2/cloud/configure/setup-cron-jobs.html) for more information.

### Fixed issues
-   <!-- MAGECLOUD-1327 -->We fixed an issue that was causing long deploy times due to the deploy process invoking the `cache-clean` operation before static content deployment.

-   <!-- MAGECLOUD-1322 -->We fixed an issue causing errors during the static content generation step of deployment on Production environments.

-   <!-- MAGECLOUD-1264 -->We fixed an issue preventing some `magento/ece-tools` commands from logging output to `stderr`.

-   <!-- MAGECLOUD-1242 -->We fixed an issue preventing base URL values in `env.php` from being updated in forked branches.

-   <!-- MAGECLOUD-1171 -->We fixed an issue causing the `magento setup:install` command to add an unsecure prefix (`http://`) to secure base URLs.

-   <!-- MAGECLOUD-1170 -->We fixed an issue preventing patch errors from causing deployment failures.

-   <!-- MAGECLOUD-1152 -->We fixed an issue preventing `ece-tools` from halting execution and throwing an exception if no patches can be applied.

-   <!-- MAGECLOUD-1138 -->We fixed an issue causing errors when loading the storefront after enabling HTML minification in the Magento Admin.

## v2002.0.4

### Fixed issues
-   <!-- MAGECLOUD-1355 -->You can now [manually reset stuck Magento cron jobs](http://devdocs.magento.com/guides/v2.2/cloud/configure/setup-cron-jobs.html#reset-cron-jobs) using a CLI command in all environments via SSH access. The deployment process automatically resets cron jobs. Not available in 2.1.

## v2002.0.3

### Fixed issues
-   <!--MAGECLOUD-1311-->We fixed an issue that was causing pages to time out because Redis was taking too long to read/write. You can now use the `disable_locking` parameter in Redis configurations to prevent this issue.

## v2002.0.2

### Fixed issues
-   <!--MAGECLOUD-1246-->The RabbitMQ configuration process now obtains all required parameters automatically.

## v2002.0.1

### New features
-   <!--- MAGECLOUD-1057 -->{{site.data.var.ece}} now supports scopes and [static content deployment strategies](http://devdocs.magento.com/guides/v2.2/config-guide/cli/config-cli-subcommands-static-deploy-strategies.html). We have added the `–s` parameter with a default setting of `quick` for the static content deployment strategy. You can use the environment variable [SCD_STRATEGY](http://devdocs.magento.com/guides/v2.2/cloud/env/environment-vars_magento.html) to customize and use these strategies with your build and deploy actions. This variable supports the options `standard`, `quick`, or `compact`. If you select `compact`, we override the `STATIC_CONTENT_THREADS` value with `1`, which can slow deployment, especially in production environments. Not available in 2.1.

-   <!--- MAGECLOUD-1014 & MAGECLOUD-1023 -->We have created a new log file on environments to capture and compile build and deploy actions. The file is located in the `var/log/cloud.log` file inside the Magento root application directory.

### Fixed issues
-   <!-- MAGECLOUD-919 & MAGECLOUD-1030-->Refactored the `ece-tools` package to make it compatible with {{site.data.var.ece}} 2.2.0 and higher.

-   <!-- MAGECLOUD-1186-->We fixed an issue that was preventing `ece-tools` from halting execution and throwing an exception if no patches can be applied.

-   <!-- MAGECLOUD-1047 & MAGECLOUD-1049-->We fixed an issue that was causing exceptions to be thrown when  dependency injection (di) compilation is skipped during builds.

-   <!-- MAGECLOUD-1019-->We fixed an issue that was causing the deploy process to overwrite custom Redis configurations in the `env.php` file.

-   <!--MAGECLOUD-1020-->We fixed an issue that was causing redirect loops due to disabled by default secure admin.

## v2002.0.0
<div class="bs-callout bs-callout-warning" markdown="1">
This package is no longer compatible with other versions of {{site.data.var.ece}} and **should not** be used.
</div>

### Initial release
Initial release of `ece-tools` for {{site.data.var.ece}} 2.2.0.
