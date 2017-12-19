---
layout: default
group: cloud
title: magento/ece-tools
version: 2.2
github_link: cloud/composer-packages/ece-tools.md
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

This package contains the following scripts and {{site.data.var.ece}} commands that automatically perform build and deploy actions of the codebase in your environments:

  pre-deploy.php
  bin/magento magento-cloud:deploy
  bin/magento magento-cloud:build

For {{site.data.var.ece}}, versions are specified as `2.<x>.<y>`. The versioning for `magento/ece-tools` will then be  `<2000 + <x>.<y>.*`. For example, Magento Commerce 2.2.0 is associated with 2002.0.0.

`magento/ece-tools` patches strictly contain improvements for tools, including build and deploy hooks. These tools are updated as needed through patching and product upgrades; managed by the magento-cloud-metapackage.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
You must [patch magento/ece-tools](http://devdocs.magento.com/guides/v2.2/cloud/project/project-patch.html#patch-magentoece-tools) to get these updates.
</div>

## v2002.0.6

### Fixed issues
<!-- MAGECLOUD-1413 -->* We fixed an issue that was causing `gzip` errors when a file or directory name contains spaces.

<!-- MAGECLOUD-1424 -->* We fixed an issue that was preventing deployment scripts from properly recognizing and enabling module dependencies.


## v2002.0.5

### New features
* **Build/deploy notifications**. We added a new configuration file that you can use to [set up Slack and/or email notifications](http://devdocs.magento.com/guides/v2.2/cloud/env/setup-notifications.html) for build/deploy actions in all your environments.

* **Static content compression**. We now compress static content using [gzip](https://www.gnu.org/software/gzip/){:target="\_blank"} during the build and deploy phases. This compression, coupled with Fastly compression, helps reduce the size of your store and increase deployment speed. If necessary, you can disable compression using a [build option](http://devdocs.magento.com/guides/v2.2/cloud/env/environment-vars_magento.html#build) or [deploy variable](http://devdocs.magento.com/guides/v2.2/cloud/env/environment-vars_magento.html#deploy). See the following topics for more information:

  * [Magento application environment variables](http://devdocs.magento.com/guides/v2.2/cloud/env/environment-vars_magento.html)
  * [Static content deployment performance](http://devdocs.magento.com/guides/v2.2/cloud/live/sens-data-over.html#cloud-confman-scd-over)
  * [Deployment process](http://devdocs.magento.com/guides/v2.2/cloud/reference/discover-deploy.html)

* **Configuration management**. We now auto-generate an `app/etc/config.php` file in your git repository during the build phase if it doesn't already exist. The auto-generated file includes only a list of modules and extensions. If the file already exists, the build phase continues as normal. If you follow [Configuration Management](http://devdocs.magento.com/guides/v2.2/cloud/live/sens-data-over.html) at a later time, the commands update the file without requiring additional steps. Refer to [Deployment process](http://devdocs.magento.com/guides/v2.2/cloud/reference/discover-deploy.html) for more information.

* **Database dumps**. We added a new `magento/ece-tools` CLI command for creating database dumps in all environments. For Pro plan Production environments, this command only dumps from one of three high-availability nodes, so production data written to a different node during the dump may not be copied. We recommend putting the application in maintenance mode before doing a database dump in Production environments. See [Snapshots and backup management](http://devdocs.magento.com/guides/v2.2/cloud/project/project-webint-snap.html#db-dump) for more information.

* **Cron interval limitations lifted**. All Starter environments and Pro Integration environments now support 1-minute intervals for cron jobs (previously minimum 5 minutes). The default cron interval is 5 minutes in Starter and Pro Integration environments and 1 minute in Pro Staging and Production environments, but you can change this setting. To modify your existing cron jobs, edit your settings in `.magento.app.yaml` or create a support ticket for Production/Staging environments. Refer to [Set up cron jobs](http://devdocs.magento.com/guides/v2.2/cloud/configure/setup-cron-jobs.html) for more information.

### Fixed issues
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
