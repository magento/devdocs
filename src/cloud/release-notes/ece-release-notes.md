---
group: cloud-guide
title: ECE-Tools release notes
functional_areas:
  - Cloud
  - Setup
  - Configuration
redirect_from:
   - /guides/v2.2/cloud/release-notes/CloudReleaseNotes.html
---

The [{{site.data.var.ct}}](https://github.com/magento/ece-tools) package is a set of scripts and tools designed to manage and deploy Cloud projects. These release notes describe the latest improvements to this package, which is part of the [{{site.data.var.csuite}}]({{page.baseurl}}/cloud/release-notes/cloud-tools.html). The release notes include:

-  {:.new}New features
-  {:.fix}Fixes and improvements

The `{{site.data.var.ct}}` package uses the following release versioning sequence: `200<major>.<minor>.<patch>`.

{:.bs-callout-info}
See [Upgrades and patches]({{ site.baseurl }}/cloud/project/project-upgrade-parent.html) for information about updating to the latest release of the `{{site.data.var.ct}}` package.

## v2002.1.0

-  {:.new}**Infrastructure updates**–

   -  {:.new}**Added separate package for Magento Cloud Docker**–Decoupled the Docker package from the `{{site.data.var.ct}}` package to maintain code quality and provide independent releases. Updates and fixes related to `{{site.data.var.ct}}` are managed from the [magento-cloud-docker](https://github.com/magento/magento-cloud-docker) GitHub repository.<!--MAGECLOUD-3986-->

   -  {:.new}**Updated patching capabilities**–Moved the Magento patching functionality from the {{site.data.var.ct}} package to a separate [magento-cloud-patches](https://github.com/magento/magento-cloud-patches) package. During deployment, `{{site.data.var.ct}}` uses the new package to apply patches. See [Magento Cloud patches release notes]({{site.baseurl}}/cloud/release-notes/mcp-release-notes.html).<!--MAGECLOUD-4567-->

   -  {:.new}**Updated Composer dependencies**–Updated the `composer.json` file for {{site.data.var.ece}} with a dependency for the `{{site.data.var.mcd}}` package. Now, `{{site.data.var.ct}}` includes dependencies for all components in the [`{{site.data.var.csuite}}`]({{site.baseurl}}/cloud/release-notes/cloud-tools.html). These packages are installed and updated automatically when you install or update `{{site.data.var.ct}}`.

-  {:.new}**Support for scenario-based deployments**–<!--MAGECLOUD-4101-->

   -  {:.new}Now you can customize the build, deploy, and post-deploy processes using XML configuration files to override or customize the default configuration.

   -  {:.new}**Changed the `hooks` configuration in `.magento.app.yaml`**–We updated the `hooks` configuration format to support scenario-based deployments.  The legacy format from earlier {{site.data.var.ct}} 2002.0.x release is still supported. However, you must update to the new format to use the scenario-based deployment feature. See [Scenario-based deployments]({{site.baseurl}}/cloud/deploy/scenario-based-deployment.html#add-scenarios-using-build-and-deploy-hooks).

   {:.bs-callout-info}
   Before updating to {{site.data.var.ct}} version 2002.1.0, review the [backward   incompatible changes]({{site.baseurl}}/cloud/release-notes/backward-incompatible-changes.html) to learn about changes that might require you to   update {{site.data.var.ece}} project configuration or processes.

-  {:.new}**Services updates**–

   -  {:.new}Added support for PHP 7.3.<!--MAGECLOUD-4022-->

   -  {:.new}Added support for RabbitMQ 3.8.<!--MAGECLOUD-4674-->

   -  {:.new}Added validation to check installed service versions against the EOL date for each service. Now, customers receive a notification if a service version is within three months of the EOL date, and a warning if the EOL date is in the past.<!--MAGECLOUD-4076-->

   -  {:.fix}Fixed an Elasticsearch configuration issue to ensure that the correct Elasticsearch settings are configured in all environments.<!--MAGECLOUD-4474-->

   {:.bs-callout-info}
   See [Service versions]({{site.baseurl}}/cloud/project/project-conf-files_services.html) for a list of services used in {{site.data.var.ece}} and their version compatibility with the Magento Cloud template.

-  {:.new}**Environment variable updates**–

   -  {:.new}Extended the functionality of the `WARM_UP_PAGES` environment variable to support cache preloading for specific product pages. See the expanded definition in the [post-deploy variables]({{site.baseurl}}/cloud/env/variables-post-deploy.html#warm_up_pages) topic.<!--MAGECLOUD-4444-->

   -  {:.new}Added the `ERROR_REPORT_DIR_NESTING_LEVEL` environment variable to simplify error report data management in the `<magento_root>/var/report/` directory. See the variable description in the [build variables]({{site.baseurl}}/cloud/env/variables-build.html#error_report_dir_nesting_level) topic.

   -  {:.fix}Removed the `SCD_EXCLUDE_THEMES`, `STATIC_CONTENT_THREADS`,`DO_DEPLOY_STATIC_CONTENT`, `SKIP_SCD`, and `STATIC_CONTENT_SYMLINK` environment variables. See [Backward incompatible changes]({{site.baseurl}}/cloud/release-notes/backward-incompatible-changes.html#environment-configuration-changes).<!--MAGECLOUD-4407, MAGECLOUD-3873-->

   -  {:.fix}Fixed an issue in the Elastic Suite configuration process so that the default configuration is overwritten as expected when you configure the `ELASTICSUITE_CONFIGURATION` deploy variable without the `_merge` option.<!--MAGECLOUD-4388-->

-  {:.new}**CLI command updates**–

   -  {:.new}**New cron command**–You can now manually manage cron processing in your Magento Commerce Cloud environment using the `cron:disable` and `cron:enable` commands. Use the disable command to stop all active cron processes and disable all Magento cron jobs.  Use the enable command to re-enable cron jobs when you are ready.  See [Disable cron jobs]({{site.baseurl}}/cloud/configure/setup-cron-jobs.html#disable-cron-jobs).

   -  {:.new}**Improved error reporting**–Added better logging for Magento CLI command failures that occur during {{site.data.var.ct}} processing.<!--MAGECLOUD-4849-->

   -  {:.new}**Remove deprecated build commands**– Removed the following build commands: `m2-ece-build`, `m2-ece-deploy`, `m2-ece-scd-dump`, and renamed `ece-tools docker` commands to `ece-docker`. See [Backward incompatible changes]({{site.baseurl}}/cloud/release-notes/backward-incompatible-changes.html)<!--MAGECLOUD-4392-->

-  {:.new}Removed the deprecated `build_options.ini` file and added validation to fail the build if the file exists. Use the [.magento.env.yaml]({{site.baseurl}}/cloud/project/magento-env-yaml.html) file to configure build options.

-  {:.fix}Fixed an issue that caused the build process to fail when the `config.php` file is empty.<!--MAGECLOUD-4127-->

## Older releases

See the [release notes archive]({{ site.baseurl }}/cloud/release-notes/cloud-release-archive.html) for version 2002.0.22 and earlier.
