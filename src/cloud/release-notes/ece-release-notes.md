---
group: cloud-guide
title: ECE-Tools release notes
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

The [{{site.data.var.ct}}](https://github.com/magento/ece-tools) package is a set of scripts and tools designed to manage and deploy Cloud projects. These release notes describe the latest improvements to this package, which is part of the [{{site.data.var.csuite}}]({{page.baseurl}}/cloud/release-notes/cloud-tools.html).

{:.bs-callout-info}
See [Upgrades and patches]({{ site.baseurl }}/cloud/project/project-upgrade-parent.html) for information about updating to the latest release of the `{{site.data.var.ct}}` package.

The `{{site.data.var.ct}}` package uses the following release versioning sequence: `200<major>.<minor>.<patch>`

The release notes include:

-  {:.new}New features
-  {:.fix}Fixes and improvements

<!--Add release notes below-->

## v2002.1.8

Release date: October 25, 2021

-  {:.new}**Alternative dump location**—Added the `--dump-directory` option so that you can choose a target directory for a DB dump. Now `/app/var/dump-main` is the default target directory for a DB dump.<!-- MCLOUD-8063 -->
-  {:.fix}**Update Monolog**—Updated the minimum version required for the `monolog` package to `^2.3`.<!-- ACMP-1263 -->
-  {:.fix}**Update Symfony**—Updated the Symfony dependencies to be compatible with {{site.data.var.ee}} 2.4.4.<!-- ACMP-1533 -->
-  {:.fix}**Feature/resolve autoload**—Fixed an issue when deploying to an integration environment and seeing the `CRITICAL: [9] Required configuration is missed in autoload section of composer.json file.` error.<!-- https://github.com/magento/ece-tools/pull/799 -->

## v2002.1.7

Release date: July 29, 2021

**Configuration updates**—

-  {:.new}Added support for Composer 2.0.<!--MCLOUD-8003-->

-  {:.fix}**Updated composer requirements for `symphony/console`**—Updated the {{ site.data.var.ct }} `composer.json` version requirements for the `symphony/console` package to fix an issue that caused the `di:compile` commands to fail with the following error: `Incompatible argument type: Required type: int. Actual type: string`<!--MC-42919-->

-  {:.fix}Updated the end-of-life software checks (`eol.yaml`) to include Elasticsearch 7.9.x.<!--MCLOUD-7938-->

## v2002.1.6

Release date: April 20, 2021

-  {:.new}**Redis authentication credentials**—Added the ability to read Redis authorization credentials from the `relationships` property during the deploy phase.<!--MCLOUD-7694-->

-  {:.new}**Elasticsearch authorization credentials**—Added the ability to read Elasticsearch authorization credentials from the `relationships` property during the deploy phase.<!--MCLOUD-7695-->

-  {:.new}**Dedicated session storage service**—Added `redis-session` as a second option for session storage. You can use the `redis-session` service to store session information and use the `redis` service for cache to provide better performance.<!--MCLOUD-7698-->

-  {:.new}**Deprecated SPLIT_DB messages**—Added validator warning and critical messages for the deprecated `SPLIT_DB` option for {{site.data.var.ee}} 2.4.2 and its removal in {{site.data.var.ee}} 2.5.0.<!--MCLOUD-7806-->

-  {:.fix}**Elasticsearch version from relationships**—Fixed Service validator to retrieve the correct version of Elasticsearch from the `relationships` properties in Cloud Docker and integration environments.<!--MCLOUD-7572-->

-  {:.fix}**Flexible Redis port validation**—Redis can now validate the port in a custom cache connection from the `server` URL. For example, you can add your port number to your server URL as follows: `server: 'tcp://rfs-store-simple-page-cache:26379'`. This helps prevent validation errors where the `port` option is either missing or incorrect.<!--MCLOUD-7722-->

-  {:.fix}**Upgrading to {{site.data.var.ee}} 2.4.2**—Fixed the issue that required users to manually run `bin/magento setup:upgrade` to make their sites operational after upgrading to {{site.data.var.ee}} 2.4.2.<!--MCLOUD-7776-->

## v2002.1.5

Release date: February 1, 2021

-  {:.new}**Remote storage**—Added the `REMOTE_STORAGE` environment variable to enable Cloud Projects for remote storage of media files using a storage service, such as AWS S3. This configuration option is part of the {{site.data.var.ct}} package, but is not supported on {{site.data.var.ece}}.<!--MCLOUD-7153-->

-  {:.new}**New cloud:config:validate command**—Added command `php vendor/bin/ece-tools cloud:config:validate` to validate the `.magento.env.yaml` configuration before pushing changes to the remote Cloud environment.<!--MCLOUD-7120-->

-  {:.new}**Flushing the opcache**—Added support for the `opcache.enable_cli` PHP option to flush the OPcache before running the deploy hook. This configuration resets the cache configuration to ensure that the current configuration settings are applied on each deployment.<!--MCLOUD-7015-->

-  {:.new}**Validation of Aurora DB**—Updated the database service validation so that it is compatible with the Aurora database.<!--MCLOUD-7269-->

-  {:.new}**New SCD_NO_PARENT environment variable**—Added the `SCD_NO_PARENT` environment variable (for {{site.data.var.ee}} >=2.4.2) to manage the generation of static content for parent themes.<!--MCLOUD-7284-->

-  {:.fix}**Memory limits and commands**—Fixed an issue where `php vendor/bin/ece-tools` commands would not work if the size of the `cloud.log` file exceeded the PHP memory_limit. Instead of reading the entire `cloud.log` file into memory, we now only read a smaller subset of data from the log file.<!--MCLOUD-7275--><!--MCLOUD-7400-->

-  {:.fix}**Custom database connections**—Fixed a `.magento.env.yaml` configuration issue in which custom database connections defined for `DATABASE_CONFIGURATION` were not used. The connection settings were not being added to `app/etc/env.php`.<!--MCLOUD-7426-->

-  {:.fix}**Empty error logs**—Fixed an issue that caused deployments to fail if the `cloud.error.log` was empty.<!--MCLOUD-7296-->

-  {:.fix}**MariaDB 10.3 validation**—Fixed validation of MariaDB 10.3 for {{site.data.var.ee}} 2.3.6-p1.<!--MCLOUD-7416-->

-  {:.fix}**Cache:flush logging**—Improved log entries to indicate the start and finish of the `cache:flush` step.<!--MCLOUD-7503-->

## v2002.1.4

Release date: November 19, 2020

-  {:.fix}Fixed an issue that caused deployment failure when the search engine specified in the `SEARCH_CONFIGURATION` environment variable is a value other than `elasticsearch`.<!--MCLOUD-7283-->

## v2002.1.3

Release date: November 9, 2020

**Infrastructure updates**—

-  {:.new}Added ece-tools support for the read-only `pub/static` directory when static content is set to deploy in the build stage.<!--MC-37699-->

-  {:.new}Added support for Elasticsearch 7.9 and Redis 6 for compatibility with upcoming {{site.data.var.ee}} releases.<!--MCLOUD-7191-->

-  {:.fix}Updated the ece-tools `composer.json` to add a required dependency for the Quality Patches Tool. This fixes a circular dependency that existed between the ece-tools and magento-cloud-patches packages.<!--MCLOUD-6910-->

**Validation and log improvements**—

-  {:.new}Added search-engine validation to ensure that `elasticsearch` is set for {{site.data.var.ece }} 2.4 and later. If the validation fails, the deployment is stopped with a critical error message suggesting fixes for the issue. See [Critical Errors, Deploy stage]({{ site.baseurl }}/cloud/reference/ece-tools-error-reference.html#deploy-stage).<!--MCLOUD-6937-->

-  {:.new}Added Elasticsearch validation to check the compatibility between the Elasticsearch service version and the {{site.data.var.ee}} version.<!--MCLOUD-7193-->

-  {:.new}Updated the Elasticsearch compatibility error message to show the versions of Elasticsearch that are compatible with the {{site.data.var.ee}} Elasticsearch module. The error message now provides the specific Elasticsearch versions to install in your Cloud infrastructure so that it is compatible with the Elasticsearch module used by your version of {{site.data.var.ee}}. See [Warning Errors, Deploy stage]({{ site.baseurl }}/cloud/reference/ece-tools-error-reference.html#deploy-stage-1).<!--MCLOUD-6698-->

-  {:.new}Added warning errors `2026` and `2027` for invalid `MAGE_MODE` environment variable setting. The only valid value is `production`. Before this fix, `MAGE_MODE` could be set to `developer` without deployment errors, only to cause errors later when trying to write to read-only files. See [Warning Errors]({{ site.baseurl }}/cloud/reference/ece-tools-error-reference.html#warning-errors).<!--MCLOUD-6708-->

-  {:.fix}Fixed validation for Redis, RabbitMQ and MySQL services to ensure these versions are compatible with the {{site.data.var.ee}} version. Valid versions of these services are now written to the `cloud.log`.<!--MCLOUD-7098-->

-  {:.fix}Updated the `cloud.log` to include the concurrent requests limit for sending requests during cache warmup. This value is configured in the [WARM_UP_CONCURRENCY]({{ site.baseurl }}/cloud/env/variables-post-deploy.html#warm_up_concurrency) post-deploy variable.<!--MCLOUD-5563-->

**CLI command updates**—

-  {:.new}Added CLI commands (`cloud:config:create` and `cloud:config:update`) to create and update the `.magento.env.yaml` file with a configuration that can include one or more build, deploy, and post-deploy variables. See [Create configuration file from CLI]({{ site.baseurl }}/cloud/project/magento-env-yaml.html#create-configuration-file-from-cli).<!--MCLOUD-7072-->

**Environment variable updates**—

-  {:.new}Added the [SKIP_COMPOSER_DUMP_AUTOLOAD]({{ site.baseurl }}/cloud/env/variables-build.html#skip_composer_dump_autoload) build variable. Setting the variable to `true` stops the application from running the `composer dump-autoload` command during a {{ site.data.var.mcd-prod }} installation. The variable is only relevant to {{ site.data.var.mcd-prod }} containers with writable file systems (created for testing and development using `./vendor/bin/ece-docker build:compose --with-test`). With such installations, skipping the `composer dump-autoload` command prevents errors when running other commands that try to access files from a deleted `generated` directory.<!--MCLOUD-6939-->

## v2002.1.2

Release date: August 5, 2020

**Validation and log improvements**—

-  {:.new}Added the `schema.error.yaml` file that includes all error and warning notifications that can occur during the build, deploy, and post-deploy process along with suggestions for resolving the errors.  The information in this file is also available in the _Cloud Guide for Commerce_. See [Error message reference for ece-tools]({{ site.baseurl }}/cloud/reference/ece-tools-error-reference.html).<!--MCLOUD-5878-->

-  {:.new}Changed the Cloud error log (`/var/log/cloud.error.log`) entries to JSON format to make the log easier to parse programmatically.<!--MCLOUD-5879-->

-  {:.new}Added additional error checks to build, deploy, and post-deploy processing and improved existing checks:

   -  Error code 2026—Failed to restore some data generated during the build phase to the mounted directories

   -  Error code 3004—Cannot create backup files

   -  Error code 102—Added additional checks for issues that occur when the `env.php` file is not writable <!--MCLOUD-6221-->

-  {:.new}Added the **QUALITY_PATCHES** environment variable to specify one or more quality patches to apply during the deployment process. See [Build variables]({{ site.baseurl }}/cloud/env/variables-build.html#quality_patches).<!--MCLOUD-6375-->

## v2002.1.1

Release date: June 25, 2020

-  {:.new}**Infrastructure updates**—

   -  {:.new}**Logging improvements**—Improved log tracking capability by assigning exit codes to critical deploy errors and exposing the exit codes in error message notifications and log events. See [Error message reference for ece-tools]({{site.baseurl}}/cloud/reference/ece-tools-error-reference.html).<!-- MCLOUD-5637, 5531-->

   -  {:.new}Improved the process for database dumps (`vendor/bin/ece-tools db-dump`) and updated log messages to clarify that the database dump operation switches the application to maintenance mode, stops consumer queue processes, and disables cron jobs before the dump begins.<!--MCLOUD-5324, MCLOUD-2062-->

   -  {:.fix}Fixed an issue to ensure that the project URL is updated correctly when deploying to Staging and Production environments. Now, `{{site.data.var.ct}}` uses the URL for the route with the `primary:true` attribute set in the project route configuration. See [Deploy variables]({{site.baseurl}}/cloud/env/variables-deploy.html#update_urls).<!--MCLOUD-5883-->

   -  {:.fix}Updated the `generate.xml` build scenario workflow for applying patches. Patches must be applied earlier to update {{site.data.var.ee}} to fix any issues that might cause the `di:compile` and `module:refresh` steps to fail.<!--MCLOUD-5941-->

   -  {:.fix}Fixed an issue in the installation process that incorrectly returns the `Crypt key missing` error. The `crypt/key` value is generated automatically during the installation.<!--MCLOUD-6120-->

-  {:.new}**Service updates**—

   -  {:.new}Added support for PHP 7.4 and MariaDB 10.4.<!--MAGECLOUD-2957, MCLOUD-4144-->

-  {:.new}**Environment variable updates**—

   -  {:.new}Added the **SCD_USE_BALER** variable to enable the Baler module for JavaScript bundling during the {{site.data.var.ece }} build process. See the variable description in the [build variables]({{site.variable}}/cloud/env/variables-build.html#scd_use_baler).<!-- MCLOUD-3456, MCLOUD-3457-->

   -  {:.new}Added the **REDIS_BACKEND** environment variable to configure the Redis backend model for Redis cache for {{site.data.var.ee}} 2.3.5 or later. See the variable description in the [deploy variables]({{site.baseurl}}/cloud/env/variables-deploy.html#redis_backend).<!--MCLOUD-5721, MCLOUD-5865-->

-  {:.new}**CLI command updates**—

   -  {:.new}Updated the following CLI commands with an option for more detailed logging:

      -  `app:config:dump`
      -  `app:config:import`
      -  `module:enable`

      The logging level for each call is determined by the configuration of the [`VERBOSE_COMMANDS`]({{site.baseurl}}/cloud/env/variables-build.html#verbose_commands) variable in the `.magento.env.yaml` file.<!--MCLOUD-3503-->

-  {:.new}**Validation improvements**—

   -  {:.new}**Elasticsearch 7.x compatibility checks**—Updated Elasticsearch validation for Elasticsearch 7.x software compatibility checks.<!--MCLOUD-5542-->

   -  {:.new}**Updated service version and EOL validation checks**—Updated validation to check installed service versions against {{site.data.var.ee}} 2.4. requirements.<!--MCLOUD-6144-->

   -  {:.fix}Fixed a validation issue so that the following post-deploy warning message displays only if the `post-deploy` hook configuration is missing from the `.magento.app.yaml` file:

      ```text
      Your application does not have the "post_deploy" hook enabled.
      ```
      {:.no-copy}
      <!--MCLOUD-4077-->

   -  {:.new}**Added validation for Zend Framework dependencies**—Added composer dependency validation for the Zend Framework which has migrated to the Laminas project. If the required dependencies are missing, the following error message displays during the build process.

      ```text
      Required configuration is missing from the autoload section of the composer.json file.
      Add ("Laminas\Mvc\Controller\Zend\": "setupsrc/ Zend/Mvc/Controller/") to
      the `autoload -> psr-4` section. Then, re-run the "composer update" command locally, and
      commit the updated composer.json and composer.lock files.
      ```
      {:.no-copy}

      See [Verify Zend Framework dependencies]({{site.baseurl}}/cloud/project/project-upgrade.html#verify-zend-framework-composer-dependencies).<!--MCLOUD-4094-->

   -  {:.new}**Added validation for `env.php` file and data**—Added checks for the `env.php` file and data during the install and upgrade process.<!--MCLOUD-5991-->

      -  If the `env.php` file is missing from the installation, and the `crypt/key` value is not specified in the `.magento.app.yaml` file, the deployment fails with the following notification:

         ```text
         The crypt/key key value does not exist in the ./app/etc/env.php file or the CRYPT_KEY cloud environment variable``Missing crypt key for upgrading Magento`.
         ```
         {:.no-copy}

      -  If the installation does not include the `env.php` file, or the configuration contains only one cache type, the `cron:enable` command runs during the upgrade process to restore the file with all `cache_types`. The following notification is added to the log:

         ```text
         Magento state indicated as installed but configuration file app/etc/env.php was empty or did not exist.
         Required data will be restored from environment configurations and from the .magento.env.yaml file.
         ```
         {:.no-copy}

## v2002.1.0

Release date: February 6, 2020

-  {:.new}**Infrastructure updates**—

   -  {:.new}**Added separate package for Magento Cloud Docker**—Decoupled the Docker package from the `{{site.data.var.ct}}` package to maintain code quality and provide independent releases. Updates and fixes related to `{{site.data.var.ct}}` are managed from the [magento-cloud-docker](https://github.com/magento/magento-cloud-docker) GitHub repository.<!--MAGECLOUD-2927-->

   -  {:.new}**Updated patching capabilities**—Moved the patching functionality from the {{site.data.var.ct}} package to a separate [magento-cloud-patches](https://github.com/magento/magento-cloud-patches) package. During deployment, `{{site.data.var.ct}}` uses the new package to apply patches. See [Cloud patches release notes]({{site.baseurl}}/cloud/release-notes/mcp-release-notes.html).<!--MAGECLOUD-4567-->

   -  {:.new}**Updated Composer dependencies**—Updated the `composer.json` file for {{site.data.var.ece}} with a dependency for the `{{site.data.var.mcd-package}}` package. Now, `{{site.data.var.ct}}` includes dependencies for all packages in the [`{{site.data.var.csuite}}`]({{site.baseurl}}/cloud/release-notes/cloud-tools.html). These packages are installed and updated automatically when you install or update `{{site.data.var.ct}}`.

-  {:.new}**Support for scenario-based deployments**—<!--MAGECLOUD-4101-->

   -  {:.new}Now you can customize the build, deploy, and post-deploy processes using XML configuration files to override or customize the default configuration.

   -  {:.new}**Changed the `hooks` configuration in `.magento.app.yaml`**—We updated the `hooks` configuration format to support scenario-based deployments.  The legacy format from earlier {{site.data.var.ct}} 2002.0.x release is still supported. However, you must update to the new format to use the scenario-based deployment feature. See [Scenario-based deployments]({{site.baseurl}}/cloud/deploy/scenario-based-deployment.html#add-scenarios-using-build-and-deploy-hooks).

   {:.bs-callout-info}
   Before updating to {{site.data.var.ct}} version 2002.1.0, review the [backward   incompatible changes]({{site.baseurl}}/cloud/release-notes/backward-incompatible-changes.html) to learn about changes that might require you to   update {{site.data.var.ece}} project configuration or processes.

-  {:.new}**Service updates**—

   -  {:.new}Added support for PHP 7.3.<!--MAGECLOUD-4022-->

   -  {:.new}Added support for RabbitMQ 3.8.<!--MAGECLOUD-4674-->

   -  {:.new}Added validation to check installed service versions against the EOL date for each service. Now, customers receive a notification if a service version is within three months of the EOL date, and a warning if the EOL date is in the past.<!--MAGECLOUD-4076-->

   -  {:.fix}Fixed an Elasticsearch configuration issue to ensure that the correct Elasticsearch settings are configured in all environments.<!--MAGECLOUD-4474-->

   {:.bs-callout-info}
   See [Service versions]({{site.baseurl}}/cloud/project/services.html) for a list of services used in {{site.data.var.ece}} and their version compatibility with the Magento Cloud template.

-  {:.new}**Environment variable updates**—

   -  {:.new}Extended the functionality of the `WARM_UP_PAGES` environment variable to support cache preloading for specific product pages. See the expanded definition in the [post-deploy variables]({{site.baseurl}}/cloud/env/variables-post-deploy.html#warm_up_pages) topic.<!--MAGECLOUD-4444-->

   -  {:.new}Added the `ERROR_REPORT_DIR_NESTING_LEVEL` environment variable to simplify error report data management in the `<magento_root>/var/report/` directory. See the variable description in the [build variables]({{site.baseurl}}/cloud/env/variables-build.html#error_report_dir_nesting_level) topic.

   -  {:.fix}Removed the `SCD_EXCLUDE_THEMES`, `STATIC_CONTENT_THREADS`,`DO_DEPLOY_STATIC_CONTENT`, and `STATIC_CONTENT_SYMLINK` environment variables. See [Backward incompatible changes]({{site.baseurl}}/cloud/release-notes/backward-incompatible-changes.html#environment-configuration-changes).<!--MAGECLOUD-4407, MAGECLOUD-3873-->

   -  {:.fix}Fixed an issue in the Elastic Suite configuration process so that the default configuration is overwritten as expected when you configure the `ELASTICSUITE_CONFIGURATION` deploy variable without the `_merge` option.<!--MAGECLOUD-4388-->

-  {:.new}**CLI command updates**—

   -  {:.new}**New cron command**—You can now manually manage cron processing in your {{ site.data.var.ece }} environment using the `cron:disable` and `cron:enable` commands. Use the disable command to stop all active cron processes and disable all cron jobs.  Use the enable command to re-enable cron jobs when you are ready.  See [Disable cron jobs]({{site.baseurl}}/cloud/configure/setup-cron-jobs.html#disable-cron-jobs).

   -  {:.new}**Improved error reporting**—Added better logging for CLI command failures that occur during {{site.data.var.ct}} processing.<!--MAGECLOUD-4849-->

   -  {:.new}**Remove deprecated build commands**— Removed the following build commands: `m2-ece-build`, `m2-ece-deploy`, `m2-ece-scd-dump`, and renamed `ece-tools docker` commands to `ece-docker`. See [Backward incompatible changes]({{site.baseurl}}/cloud/release-notes/backward-incompatible-changes.html)<!--MAGECLOUD-4392-->

-  {:.new}Removed the deprecated `build_options.ini` file and added validation to fail the build if the file exists. Use the [.magento.env.yaml]({{site.baseurl}}/cloud/project/magento-env-yaml.html) file to configure build options.

-  {:.fix}Fixed an issue that caused the build process to fail when the `config.php` file is empty.<!--MAGECLOUD-4127-->

## 2002.0.23

Release date: February 27, 2020

-  {:.fix}Fixed a compatibility issue with `{{site.data.var.ct}}` 2002.0.x releases that prevented on-demand static content generation from completing successfully in production mode.

## Older releases

See the [release notes archive]({{ site.baseurl }}/cloud/release-notes/cloud-release-archive.html) for version 2002.0.22 and earlier.
