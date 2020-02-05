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

-  {:.new}<!--MAGECLOUD-3986-->Decoupled the Docker package from the `{{site.data.var.ct}}` package to maintain code quality and provide independent releases. Updates and fixes related to `{{site.data.var.ct}}` are managed from the [magento-cloud-docker](https://github.com/magento/magento-cloud-docker) GitHub repository.

-  {:.new}<!--MAGECLOUD-4567-->We moved Magento patches from the {{site.data.var.ct}} repository to the [magento-cloud-patches](https://github.com/magento/magento-cloud-patches) repository. See [Magento Cloud patches release notes]({{site.baseurl}}/cloud/release-notes/mcp-release-notes.html).

-  {:.new}**New cron command**–You can now manually manage cron processing in your Magento Commerce Cloud environment using the `cron:disable` and `cron:enable` commands. Use the disable command to stop all active cron processes and disable all Magento cron jobs.  Use the enable command to re-enable cron jobs when you are ready.  See [Disable cron jobs]({{site.baseurl}}/cloud/configure/setup-cron-jobs.html#disable-cron-jobs).

-  {:.new}<!--MAGECLOUD-4444-->Extended the functionality of the WARM_UP_PAGES environment variable to support cache preloading for specific product pages. See the expanded definition in the [post-deploy variables]({{site.baseurl}}/cloud/env/variables-post-deploy.html#warm_up_pages) topic.

-  {:.new}<!--MAGECLOUD-4849-->Improved error reporting for Magento CLI command failures that occur during {{site.data.var.ct}} processing.

-  {:.new}<!--MAGECLOUD-4076-->**Improved validation**–Added validation to check installed service versions against the EOL date for each service. Now, customers receive a notification if a service version is within three months of the EOL date, and a warning if the EOL date is in the past.

-  {:.fix}<!--MAGECLOUD-4407-->Removed the following deprecated environment variables: `SCD_EXCLUDE_THEMES`, `STATIC_CONTENT_THREADS`,`DO_DEPLOY_STATIC_CONTENT`, `SKIP_SCD`, and `STATIC_CONTENT_SYMLINK`. See [Backward incompatible changes]({{site.baseurl}}/cloud/release-notes/backward-incompatible-changes.html#environment-configuration-changes).

-  {:.fix}<!--MAGECLOUD-4474-->Fixed a configuration issue to ensure that the correct Elasticsearch settings are configured in all environments.

-  {:.fix}<!--MAGECLOUD-4127-->Fixed an issue that caused the build process to fail if the `config.php` file is empty.

-  {:.fix}<!--MAGECLOUD-4388-->Fixed an issue in the Elastic Suite configuration process so that the default configuration is overwritten as expected when you configure the `ELASTICSUITE_CONFIGURATION` deploy variable without the `_merge` option.

{:.bs-callout-info}
Before updating to {{site.data.var.ct}} version 2002.1.0, review the [backward incompatible changes]({{site.baseurl}}/cloud/release-notes/backward-incompatible-changes.html) to learn about changes that might require you to update the configuration or processes for your {{site.data.var.ece}} project.

## Older releases

See the [release notes archive]({{ site.baseurl }}/cloud/release-notes/cloud-release-archive.html) for version 2002.0.22 and earlier.