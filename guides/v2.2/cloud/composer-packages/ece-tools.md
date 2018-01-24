---
layout: default
group: cloud
title: vendor/magento/ece-tools
version: 2.2
github_link: cloud/composer-packages/ece-tools.md
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

{% include cloud/ece-tools.md %}

<div class="bs-callout bs-callout-info" id="info" markdown="1">
You must [update this package](http://devdocs.magento.com/guides/v2.2/cloud/project/project-patch.html) to get these features and fixes.
</div>

## v2002.0.7

### Fixed issues
<!-- MAGECLOUD-1454-->* We removed `var/view_preprocessed` symlinking to fix an issue that was causing JavaScript minification conflicts.

## v2002.0.6

### Fixed issues
<!-- MAGECLOUD-1413 -->* We fixed an issue that was causing `gzip` errors when a file or directory name contains spaces.

<!-- MAGECLOUD-1424 -->* We fixed an issue that was preventing deployment scripts from properly recognizing and enabling module dependencies.


## v2002.0.5

### New features
* **Configure a cron consumer with an environment variable**. You can now configure cron consumers using the new `CRON_CONSUMERS_RUNNER` environment variable.

* **Configuration scanning**. We now scan for critical components during the build/deploy process and halt the process if the scan fails, which prevents unnecessary downtime due to the site being in maintenance mode.

* **Build/deploy notifications**. We added a new configuration file that you can use to [set up Slack and/or email notifications](http://devdocs.magento.com/guides/v2.2/cloud/env/setup-notifications.html) for build/deploy actions in all your environments.

* **Static content compression**. We now compress static content using [gzip](https://www.gnu.org/software/gzip/){:target="\_blank"} during the build and deploy phases. This compression, coupled with Fastly compression, helps reduce the size of your store and increase deployment speed. If necessary, you can disable compression using a [build option](http://devdocs.magento.com/guides/v2.2/cloud/env/environment-vars_magento.html#build) or [deploy variable](http://devdocs.magento.com/guides/v2.2/cloud/env/environment-vars_magento.html#deploy). See the following topics for more information:

  * [Magento application environment variables](http://devdocs.magento.com/guides/v2.2/cloud/env/environment-vars_magento.html)
  * [Static content deployment performance](http://devdocs.magento.com/guides/v2.2/cloud/live/sens-data-over.html#cloud-confman-scd-over)
  * [Deployment process](http://devdocs.magento.com/guides/v2.2/cloud/reference/discover-deploy.html)

* **Configuration management**. We now auto-generate an `app/etc/config.php` file in your git repository during the build phase if it doesn't already exist. The auto-generated file includes only a list of modules and extensions. If the file already exists, the build phase continues as normal. If you follow [Configuration Management](http://devdocs.magento.com/guides/v2.2/cloud/live/sens-data-over.html) at a later time, the commands update the file without requiring additional steps. Refer to [Deployment process](http://devdocs.magento.com/guides/v2.2/cloud/reference/discover-deploy.html) for more information.

* **Database dumps**. We added a new `magento/ece-tools` CLI command for creating database dumps in all environments. For Pro plan Production environments, this command only dumps from one of three high-availability nodes, so production data written to a different node during the dump may not be copied. We recommend putting the application in maintenance mode before doing a database dump in Production environments. See [Snapshots and backup management](http://devdocs.magento.com/guides/v2.2/cloud/project/project-webint-snap.html#db-dump) for more information.

* **Cron interval limitations lifted**. All Starter environments and Pro Integration environments now support 1-minute intervals for cron jobs (previously minimum 5 minutes). The default cron interval is 5 minutes in Starter and Pro Integration environments and 1 minute in Pro Staging and Production environments, but you can change this setting. To modify your existing cron jobs, edit your settings in `.magento.app.yaml` or create a support ticket for Production/Staging environments. Refer to [Set up cron jobs](http://devdocs.magento.com/guides/v2.2/cloud/configure/setup-cron-jobs.html) for more information.

### Fixed issues
<!-- MAGECLOUD-1327 -->* We fixed an issue that was causing long deploy times due to the deploy process invoking the `cache-clean` operation before static content deployment.

<!-- MAGECLOUD-1322 -->* We fixed an issue causing errors during the static content generation step of deployment on Production environments.

<!-- MAGECLOUD-1264 -->* We fixed an issue preventing some `magento/ece-tools` commands from logging output to `stderr`.

<!-- MAGECLOUD-1242 -->* We fixed an issue preventing base URL values in `env.php` from being updated in forked branches.

<!-- MAGECLOUD-1171 -->* We fixed an issue causing the `magento setup:install` command to add an unsecure prefix (`http://`) to secure base URLs.

<!-- MAGECLOUD-1170 -->* We fixed an issue preventing patch errors from causing deployment failures.

<!-- MAGECLOUD-1152 -->* We fixed an issue preventing `ece-tools` from halting execution and throwing an exception if no patches can be applied.

<!-- MAGECLOUD-1138 -->* We fixed and issue causing errors when loading the storefront after enabling HTML minification in the Magento Admin.

## v2002.0.4

### Fixed issues
<!-- MAGECLOUD-1355 -->* You can now [manually reset stuck Magento cron jobs](http://devdocs.magento.com/guides/v2.2/cloud/configure/setup-cron-jobs.html#reset-cron-jobs) using a CLI command in all environments via SSH access. The deployment process automatically resets cron jobs.

## v2002.0.3

### Fixed issues
<!--MAGECLOUD-1311-->* We fixed an issue that was causing pages to time out because Redis was taking too long to read/write. You can now use the `disable_locking` parameter in Redis configurations to prevent this issue.

## v2002.0.2

### Fixed issues
<!--MAGECLOUD-1246-->* The RabbitMQ configuration process now obtains all required parameters automatically.

## v2002.0.1

### New features
<!--- MAGECLOUD-1057 -->* {{site.data.var.ece}} now supports scopes and [static content deployment strategies](http://devdocs.magento.com/guides/v2.2/config-guide/cli/config-cli-subcommands-static-deploy-strategies.html). We have added the `–s` parameter with a default setting of `quick` for the static content deployment strategy. You can use the environment variable [SCD_STRATEGY](http://devdocs.magento.com/guides/v2.2/cloud/env/environment-vars_magento.html) to customize and use these strategies with your build and deploy actions. This variable supports the options `standard`, `quick`, or `compact`. If you select `compact`, we override the `STATIC_CONTENT_THREADS` value with `1`, which can slow deployment, especially in production environments.

<!--- MAGECLOUD-1014, 1023 -->* We have created a new log file on environments to capture and compile build and deploy actions. The file is located in the `app/var/log/cloud.log` file inside the Magento root application directory.

### Fixed issues
<!-- MAGECLOUD-919 & MAGECLOUD-1030-->* Refactored the `ece-tools` package to make it compatible with {{site.data.var.ece}} 2.2.0 and higher.

<!-- MAGECLOUD-1186--> * We fixed an issue that was preventing `ece-tools` from halting execution and throwing an exception if no patches can be applied.

<!-- MAGECLOUD-1047 & MAGECLOUD-1049-->* We fixed an issue that was causing exceptions to be thrown when  dependency injection (di) compilation is skipped during builds.

<!-- MAGECLOUD-1019--> * We fixed an issue that was causing the deploy process to overwrite custom Redis configurations in the `env.php` file.

<!--MAGECLOUD-1020-->* We fixed an issue that was causing redirect loops due to disabled by default secure admin.

## v2002.0.0
<div class="bs-callout bs-callout-warning" markdown="1">
This package is no longer compatible with other versions of {{site.data.var.ece}} and **should not** be used.
</div>

### Initial release
Initial release of `ece-tools` for {{site.data.var.ece}} 2.2.0.
