---
group: cloud-guide
title: Release notes archive for ece-tools
functional_areas:
  - Cloud
---

## v2002.0.8

{:.bs-callout .bs-callout-info}
We merged `vendor/magento/ece-patches` with `vendor/magento/ece-tools` in this release. You no longer need to update the `vendor/magento/ece-patches` package separately.

#### New features

-   <!-- MAGECLOUD-1253 -MAGECLOUD-1495-->**Improved logging**
    -   We improved log messaging to provide better explanations when the build or deploy process overrides an environment variable.
    -   You can now view installation and upgrade progress in real time. Tail the `install_update.log` file to view progress. For example,

            tail -f var/log/install_upgrade.log

-   <!-- MAGECLOUD-1367 -->**New cron command**—You can now unlock specific stuck cron jobs instead of stopping and re-launching all of them with the [`cron:unlock`]({{ site.baseurl }}/guides/v2.2/cloud/trouble/reset-cron-jobs.html) command. Not available in 2.1.

-   <!-- MAGECLOUD-1369 -->**Unified configuration file**—You can now configure build and deploy stages using a [`.magento.env.yaml`]({{ site.baseurl }}/guides/v2.1/cloud/project/magento-env-yaml.html) file.

-   <!-- MAGECLOUD-1372 -->**Backup configuration files**—The deployment process now automatically creates a backup of the `app/etc/env.php` and `app/etc/config.php` configuration files after deployment. We also added a [new CLI command]({{ site.baseurl }}/guides/v2.1/cloud/trouble/restore-configuration-files.html) to restore these configuration files from a backup.

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

-   **Build/deploy notifications**—We added a new configuration file that you can use to [set up Slack and/or email notifications]({{ site.baseurl }}/guides/v2.1/cloud/env/setup-notifications.html) for build/deploy actions in all your environments.

-   **Static content compression**—We now compress static content using [gzip](https://www.gnu.org/software/gzip/) during the build and deploy phases. This compression, coupled with Fastly compression, helps reduce the size of your store and increase deployment speed. If necessary, you can disable compression using a [build option]({{ site.baseurl }}/guides/v2.1/cloud/env/variables-build.html) or [deploy variable]({{ site.baseurl }}/guides/v2.1/cloud/env/variables-deploy.html). See the following topics for more information:

    -   [Magento application environment variables]({{ site.baseurl }}/guides/v2.1/cloud/env/environment-vars_magento.html)
    -   [Static content deployment performance]({{ site.baseurl }}/guides/v2.1/cloud/live/sens-data-over.html#cloud-confman-scd-over)
    -   [Deployment process]({{ site.baseurl }}/guides/v2.1/cloud/reference/discover-deploy.html)

-   **Configuration management**—We now auto-generate an `app/etc/config.php` file in your Git repository during the build phase if it does not already exist. The auto-generated file includes only a list of modules and extensions. If the file already exists, the build phase continues as normal. If you follow [Configuration Management]({{ site.baseurl }}/guides/v2.1/cloud/live/sens-data-over.html) at a later time, the commands update the file without requiring additional steps. Refer to [Deployment process]({{ site.baseurl }}/guides/v2.1/cloud/reference/discover-deploy.html) for more information.

-   **Database dumps**—We added a new `magento/ece-tools` CLI command for creating database dumps in all environments. For Pro plan Production environments, this command only dumps from one of three high-availability nodes, so production data written to a different node during the dump may not be copied. We recommend putting the application in maintenance mode before doing a database dump in Production environments. See [Snapshots and backup management]({{ site.baseurl }}/guides/v2.1/cloud/project/project-webint-snap.html#db-dump) for more information.

-   **Cron interval limitations lifted**—The default cron interval for all environments provisioned in the us-3, eu-3, and ap-3 regions is 1 minute. The default cron interval in all other regions is 5 minutes for Pro Integration environments and 1 minute for Pro Staging and Production environments. To modify your existing cron jobs, edit your settings in `.magento.app.yaml` or create a support ticket for Production/Staging environments. Refer to [Set up cron jobs]({{ site.baseurl }}/guides/v2.1/cloud/configure/setup-cron-jobs.html) for more information.

#### Resolved issues

-   <!-- MAGECLOUD-1327 -->We fixed an issue that was causing long deploy times due to the deploy process invoking the `cache-clean` operation before static content deployment.

-   <!-- MAGECLOUD-1322 -->We fixed an issue causing errors during the static content generation step of deployment on Production environments.

-   <!-- MAGECLOUD-1264 -->We fixed an issue preventing some `magento/ece-tools` commands from logging output to `stderr`.

-   <!-- MAGECLOUD-1242 -->We fixed an issue preventing base URL values in `env.php` from being updated in forked branches.

-   <!-- MAGECLOUD-1171 -->We fixed an issue causing the `magento setup:install` command to add an unsecure prefix (`http://`) to secure base URLs.

-   <!-- MAGECLOUD-1170 -->We fixed an issue preventing patch errors from causing deployment failures.

-   <!-- MAGECLOUD-1152 -->We fixed an issue preventing `{{site.data.var.ct}}` from halting execution and throwing an exception if no patches can be applied.

-   <!-- MAGECLOUD-1138 -->We fixed an issue causing errors when loading the storefront after enabling HTML minification in the Magento Admin.

## v2002.0.4

#### Resolved issues

-   <!-- MAGECLOUD-1355 -->You can now [manually reset stuck Magento cron jobs]({{ site.baseurl }}/guides/v2.2/cloud/trouble/reset-cron-jobs.html) using a CLI command in all environments via SSH access. The deployment process automatically resets cron jobs. Not available in 2.1.

## v2002.0.3

#### Resolved issues

-   <!--MAGECLOUD-1311-->We fixed an issue that was causing pages to time out because Redis was taking too long to read/write. You can now use the `disable_locking` parameter in Redis configurations to prevent this issue.

## v2002.0.2

#### Resolved issues

-   <!--MAGECLOUD-1246-->The RabbitMQ configuration process now obtains all required parameters automatically.

## v2002.0.1

#### New features

-   <!--- MAGECLOUD-1057 -->{{site.data.var.ece}} now supports scopes and [static content deployment strategies]({{ site.baseurl }}/guides/v2.2/config-guide/cli/config-cli-subcommands-static-deploy-strategies.html). We have added the `–s` parameter with a default setting of `quick` for the static content deployment strategy. You can use the environment variable [SCD_STRATEGY]({{ site.baseurl }}/guides/v2.2/cloud/env/variables-deploy.html) to customize and use these strategies with your build and deploy actions. This variable supports the options `standard`, `quick`, or `compact`. If you select `compact`, we override the `STATIC_CONTENT_THREADS` value with `1`, which can slow deployment, especially in production environments. Not available in 2.1.

-   <!--- MAGECLOUD-1014 & MAGECLOUD-1023 -->We have created a new log file on environments to capture and compile build and deploy actions. The file is located in the `var/log/cloud.log` file inside the Magento root application directory.

#### Resolved issues

-   <!-- MAGECLOUD-919 & MAGECLOUD-1030-->Refactored the `{{site.data.var.ct}}` package to make it compatible with {{site.data.var.ece}} 2.2.0 and higher.

-   <!-- MAGECLOUD-1186-->We fixed an issue that was preventing `{{site.data.var.ct}}` from halting execution and throwing an exception if no patches can be applied.

-   <!-- MAGECLOUD-1047 & MAGECLOUD-1049-->We fixed an issue that was causing exceptions to be thrown when  dependency injection (di) compilation is skipped during builds.

-   <!-- MAGECLOUD-1019-->We fixed an issue that was causing the deploy process to overwrite custom Redis configurations in the `env.php` file.

-   <!--MAGECLOUD-1020-->We fixed an issue that was causing redirect loops due to disabled by default secure admin.

## v2002.0.0

{:.bs-callout .bs-callout-warning}
This package is no longer compatible with other versions of {{site.data.var.ece}} and **should not** be used.

### Initial release

Initial release of `{{site.data.var.ct}}` for {{site.data.var.ece}} 2.2.0.
