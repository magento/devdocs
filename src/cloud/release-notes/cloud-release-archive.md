---
group: cloud-guide
title: Release notes archive for ece-tools
functional_areas:
  - Cloud
---

{:.bs-callout-info}
These release notes provide information and updates for `{{site.data.var.ct}}` v2002.0.22 and later. See [Release notes for Cloud Suite]({{site.baseurl}}/cloud/release-notes/cloud-tools.html) to get the latest updates for `{{site.data.var.ct}}` and other Magento Cloud packages.

## v2002.0.22

The `{{site.data.var.ct}}` 2002.0.22 release changes the structure of the `{{site.data.var.ct}}` package to decouple the release of `{{site.data.var.ece }}` patches from the {{ site.data.var.ct }} release. Starting with this release, patches and critical fixes will be delivered using the [`magento/magento-cloud-patches`](https://github.com/magento/magento-cloud-patches) package, which is a new dependency for the `{{ site.data.var.ct }}` package. We made these changes to reduce complexity for scheduling release updates and working with community contributions.

-  {:.new}**Changes to the ece-tools package**

   -  {:.new}Moved the {{site.data.var.ee}} patches from the `{{site.data.var.ct}}` package to a new [`magento/magento-cloud-patches`](https://github.com/magento/magento-cloud-patches) composer package.

   -  {:.new}Updated the `composer.json` file for the `{{site.data.var.ct}}` package to add a dependency for the `magento/magento-cloud-patches` v1.0.0 package.

   -  {:.fix}<!--MAGECLOUD-4661-->Fixed an issue that caused the `{{site.data.var.ct }}` patching process to break when applying patch sets on top of security-only releases, starting with Magento version 2.3.2-p2 and later. This issue was introduced by the new versioning scheme adopted for [security-only patches]({{ site.baseurl }}/guides/v2.3/release-notes/bk-release-notes.html#security-only-patches).

-  {:.fix}**Patches and critical fixes**–Update your Cloud environments with `{{ site.data.var.ct }}` version 2002.0.22 to apply the following patches and critical fixes. These patches are included in the `magento/magento-cloud-patches` v1.0.0 package.

   -  {:.fix}<!--MAGECLOUD-4649-->**Page Builder security patches for 2.3.1.x and 2.3.2.x releases**–Fixes an issue in Page Builder preview that allows unauthenticated users to access some templating methods that can be used to trigger arbitrary code execution over the network (RCE) resulting in global information leaks. This issue can occur when using unsupported versions of Page Builder with {{ site.data.var.ee }} versions 2.3.1 and 2.3.2.

   -  {:.fix}<!--MAGECLOUD-4428-->**MSI patches**–Fixes issues that caused indexing errors and performance issues when using default inventory settings for managing stock.

   -  {:.fix}<!--MAGECLOUD-4422-->**Backward Compatibility of new Mail Interfaces**-Fixes a backward incompatibility issue caused by the `Magento\Framework\Mail\EmailMessageInterface` PHP interface introduced in {{ site.data.var.ee }} v2.3.3. In the scope of this patch, the new `EmailMessageInterface` inherits from the old `MessageInterface`, and {{ site.data.var.ee }} core modules are reverted to depend on `MessageInterface`.

   -  {:.fix}<!--MAGECLOUD-4448-->**Catalog pagination does not work on Elasticsearch 6.x**–Fixes a critical issue with search result pagination that affects customers using Elasticsearch 6.x as the catalog search engine.

## v2002.0.21

-  {:.new}**Docker updates**—

   -  {:.new}<!-- MAGECLOUD-3345 -->**New Docker Images**—Supported by Magento versions 2.3.3 and later

      -  <!-- MAGECLOUD-4017 -->PHP version 7.3.

      -  <!-- MAGECLOUD-4017 -->Varnish Cache 6.2.0

   -  {:.new}<!-- MAGECLOUD-3505-->Added support to apply custom hook configuration specified in `.magento.app.yaml` in the Docker environment. Previously, the Docker environment supported only the default hook configuration.

   -  {:.new}<!-- MAGECLOUD-3816-->Docker ENV files are no longer generated during the Docker build, and the `docker:config:convert` command is deprecated. The corresponding data is now stored in the `docker-compose.yml` file.

   -  {:.new}<!-- MAGECLOUD-3953 -->**Updated PHP image**–Added Node.js to the PHP Docker image to support node, npm, and grunt-cli capabilities.

-  {:.new}**Environment variable updates**–

   -  {:.new}<!-- MAGECLOUD-4052 -->Added the **LOCK_PROVIDER** deploy variable to configure the lock provider which prevents the launch of duplicate cron jobs and cron groups. See the variable description in the [deploy variables]({{ site.baseurl }}/cloud/env/variables-deploy.html#lock_provider) topic.

   -  {:.new}<!-- MAGECLOUD-4071 -->Added the **CONSUMERS_WAIT_FOR_MAX_MESSAGES** environment variable to configure how consumers process messages from the message queue when using the `CRON_CONSUMERS_RUNNER` environment variable to manage cron jobs. See the variable description in the [deploy variables]({{ site.baseurl }}/cloud/env/variables-deploy.html#consumers_wait_for_max_messages) topic.

   -  {:.fix}<!-- MAGECLOUD-3913 -->Fixed an issue that can cause database deadlock errors when the `consumers_runner` cron job starts multiple instances of the same consumer on different nodes. Now, if you have enabled the [**CRON_CONSUMERS_RUNNER**]({{ site.baseurl }}/cloud/env/variables-deploy.html#cron_consumers_runner) deploy variable in your environment, the `consumers_runner` job uses the `single-thread` option to start one instance of each consumer on only one node.

   -  {:.fix}<!-- MAGECLOUD-3866 -->Fixed an issue affecting [**WARM_UP_PAGES**]({{ site.baseurl }}/cloud/env/variables-post-deploy.html#warm_up_pages) functionality that uses a default store URL. Now, if the `config:show:default-url` command cannot fetch a base URL, then the URL from the MAGENTO_CLOUD_ROUTES variable is used.

-  {:.new}<!-- MAGECLOUD-2514 -->Updated the logging information returned by the `module:refresh` command. Now, you can see a detailed list of enabled modules in the `cloud.log` file.

-  {:.new}<!-- MAGECLOUD-3535 -->Improved version compatibility validation and warning notifications for compatibility issues between Magento version and installed services, such as Elasticsearch, RabbitMq, Redis, and DB.

-  {:.new}<!-- MAGECLOUD-4674-->Added support for RabitMQ version 3.8.

-  {:.new}<!-- MAGECLOUD-4018 -->Updated interactive validations for service compatibility to reflect supported versions for the new {{ site.data.var.ee }} 2.3.3 and 2.2.10 releases. See [Service versions]({{ site.baseurl }}/cloud/project/services.html#service-versions).

-  {:.fix}<!-- MAGECLOUD-3653-->Improved the log message returned when the cron job management process in the deploy phase tries to stop a cron job that has already finished to clarify that this issue is not an error.  Changed the log level from `INFO` to `DEBUG`.

-  {:.fix}<!-- MAGECLOUD-3806 -->Fixed an issue when running the `setup:upgrade` command that did not interrupt the deployment process when a failure occurred during the `app:config:import` task.

-  {:.new}<!-- MAGECLOUD-3871 -->Changed the default log level for the file handler to `debug` to reduce the amount of detail in the log displayed in the Project Web Interface, while still providing detailed information for debugging.

-  {:.fix}<!-- MAGECLOUD-3957 -->Fixed an issue that caused an error with static content deployment during build. After a Magento installation and `{{site.data.var.ct}}` config dump, an error occurred if there was no locale specified for the admin user in the `config.php` file. Now, there is a default locale for the admin user in the `config.php` file.

-  {:.fix}<!-- MAGECLOUD-4009 -->Fixed an `Undefined index error` that occurs when a Magento Cloud CLI command fails in an environment that is not configured with a secure URL (https). Now, the ece-tools package uses the base URL (http) if the secure URL is not available.

## v2002.0.20

-  {:.new}**Docker Updates**—

   -  {:.new}<!-- MAGECLOUD-3129/3684 -->You can now perform functional testing using the `{{site.data.var.ct}}` package in the Docker environment. See [Magento application testing]({{site.baseurl}}/cloud/docker/docker-test-magecloud-pkg-code.html).

   -  {:.new}<!-- MAGECLOUD-3357 -->Added support for configuring PHP modules using the `.magento.app.yaml` file. Any [PHP Extensions specified in the `.magento.app.yaml` file]({{ site.baseurl }}/cloud/project/magento-app-php-application.html#php-extensions) become available in the Docker PHP containers.

   -  {:.new}<!-- MAGECLOUD-3569 -->There are new commands available to improve the Docker command line experience. See the [`bin/magento-docker` section of the Docker reference]({{ site.baseurl }}/cloud/docker/docker-quick-reference.html#magento-cloud-docker-cli).

   -  {:.new}<!-- MAGECLOUD-3559 -->Added the ability to use Mutagen.io to synchronize files during development between the local host and Docker. See [Docker prerequisites]({{ site.baseurl }}/cloud/docker/docker-config.html#prerequisites).

   -  {:.fix}<!-- MAGECLOUD-3582 -->Corrected the default path when using the Docker environment. Now, when you use SSH to log in to the Docker container, you are at the Magento root in the `/app` directory, as expected.

   -  {:.fix}<!-- MAGECLOUD-3832 -->Updated the Sodium library from version 1.0.11 to version 1.0.18, and updated the Sodium PHP extension.

      {:.bs-callout-warning}
      {{site.data.var.ece}} customers must submit a support ticket to upgrade the libsodium package on Pro Production and Staging environments prior to upgrading to {{site.data.var.ee}} 2.3.2. Currently, you cannot upgrade Starter environments to {{site.data.var.ee}} 2.3.2.

   -  {:.fix}<!-- MAGECLOUD-3446 -->Added the `analysis-icu` and the `analysis-phonetic` Elasticsearch plugins to all Docker images.

   -  {:.fix}<!-- MAGECLOUD-3486 & MAGECLOUD-3678 -->Improved validations: When using options for the `docker:build` command, you must provide a value when using an option. Also, added validation for the Node version when using the `docker:build run` command.

-  {:.new}**Environment variable updates**—

   -  {:.new}<!-- MAGECLOUD-2901 -->Added support for database table prefixes using the [DATABASE_CONFIGURATION environment variable]({{ site.baseurl }}/cloud/env/variables-deploy.html#database_configuration).

   -  {:.new}<!-- MAGECLOUD-3602 -->Added the **FORCE_UPDATE_URLS** deploy variable to update Magento base URLs when deploying to Pro and Starter production and staging environments. See the definition in the [deploy variables]({{ site.baseurl }}/cloud/env/variables-deploy.html#force_update_urls) content.

   -  {:.new}<!-- MAGECLOUD-3643 -->Added the **TTFB_TESTED_PAGES** post-deploy variable to configure _Time to First Byte_  page tests to check Magento Commerce application performance on sites deployed to Cloud infrastructure. See the variable description in [post-deploy variables]({{ site.baseurl }}/cloud/env/variables-post-deploy.html).

   -  {:.fix}<!-- MAGECLOUD-3611 -->Fixed an issue with multi-threaded SCD, which caused random failures in static content deployment. The workaround involved setting the **SCD_THREADS** variable to `1`. You can now increase the count as needed. See the definitions in the [deploy variables]({{ site.baseurl }}/cloud/env/variables-deploy.html#scd_threads) and the [build variables]({{ site.baseurl }}/cloud/env/variables-build.html#scd_threads).

   -  {:.fix}<!-- MAGECLOUD-3258 -->You can configure the **WARM_UP_PAGES** environment variable to cache single pages, multiple domains, and multiple pages. See the expanded definition in the [post-deploy variables]({{ site.baseurl }}/cloud/env/variables-post-deploy.html#warm_up_pages) content.

-  {:.fix}<!-- MAGECLOUD-3545/Github#455 -->Added the `pub/static/.htaccess` file to the exclude list. [Fix submitted by Björn Kraus of PHOENIX MEDIA GmbH](https://github.com/magento/ece-tools/pull/455).

-  {:.fix}<!-- MAGECLOUD-3178 -->Fixed an error when all validation messages were showing as `Critical` if at least one critical level validator returned an error.

-  {:.fix}<!-- MAGECLOUD-3075 -->Fixed an issue that caused a deployment failure if the Magento base URL did not exist in the database.

-  {:.new}<!-- MAGECLOUD-3451 -->Added a new **`env:config:show` command** to the `{{site.data.var.ct}}` package that displays environment services, routes, or variables. See [Services, routes, and variables]({{ site.baseurl }}/cloud/reference/ece-tools-reference.html#services-routes-and-variables). [Feature submitted by Vladimir Kerkhoff](https://github.com/magento/ece-tools/pull/486).

-  {:.fix}<!-- MAGECLOUD-3665 -->Fixed an issue that caused a critical error when attempting to install Magento 2.2.6 or earlier with `{{site.data.var.ct}}` develop after shell refactoring.

-  {:.fix}<!-- MAGECLOUD-3704 -->Fixed an issue that caused Magento 2.1.x and 2.2.x installations to fail with a warning about using a deprecated version of Carbon.

-  {:.fix}<!-- MAGECLOUD-3277 -->Decreased the `cloud.log` log level for shell output from `info` to `debug`.

-  {:.fix}<!-- MAGECLOUD-3510 -->Added the `--remove-definers (-d)` option to the `ece-tools db-dump` command to remove definers from the dump file.

## v2002.0.19

-  {:.fix}<!-- MAGECLOUD-3668 -->Fixed an issue that overwrites the `env.php` file during a deploy, resulting in a loss of custom configurations.  This update ensures that {{site.data.var.ece}} updates the `env.php` file with every deployment, while preserving custom configurations.

## v2002.0.18

-  {:.new}**Docker Updates**—

   -  {:.new}<!-- MAGECLOUD-3150 -->Now, the Docker environment supports the cron configuration defined in the [crons property of the .magento.app.yaml file]({{ site.baseurl }}/cloud/project/magento-app-properties.html#crons).

   -  {:.new}<!-- MAGECLOUD-2890 -->**New Docker Container**—Added a [TLS termination proxy container]({{ site.baseurl }}/cloud/docker/docker-containers-service.html#varnish-container) to facilitate the Varnish SSL termination over HTTPS.

   -  {:.new}<!-- MAGECLOUD-3345 -->**New Docker Image**—Added a Node.js image to support Gulp and other capabilities, such as Jasmine JS Unit Testing.

   -  {:.new}<!-- MAGECLOUD-3152/3511 -->**Docker build modes**—Now you can choose to launch the Docker environment in [Production mode or Developer mode]({{ site.baseurl }}/cloud/docker/docker-config.html#set-the-launch-mode). Developer mode supports active development with full, writable filesystem permissions.

   -  {:.fix}<!-- MAGECLOUD-3369 -->Fixed an issue that caused Docker deploy to fail with a `Name or service not known` error if the cache is configured for a service that is not available. Now, you can remove a service from the [`.magento/services.yaml` file]({{ site.baseurl }}/cloud/project/services.html). The Docker configuration generator updates the service in the `docker/config.php.dist` file automatically.

   -  {:.new}<!-- MAGECLOUD-3251 -->Added interactive validations for service compatibility. Now, if a requested service is incompatible with the Magento version or other services, the _interactive mode_ prompts the user with a message and a choice to continue. See the [Service versions]({{ site.baseurl }}/cloud/docker/docker-containers.html#service-containers) available for Docker. Use the `-n` option to skip the interactivity for CICD purposes.

   -  {:.fix}<!-- MAGECLOUD-3366 -->Fixed an issue with the Docker compose `db-dump` command that erased existing dumps.

   -  {:.fix}<!-- MAGECLOUD-3172 -->Fixed an issue that assigned Redis `session`, `default`, and `page_cache` cache storage to the same database ID.

-  {:.new}**Environment variable updates**—

   -  {:.new}<!-- MAGECLOUD-3205 -->The new **ELASTICSUITE\_CONFIGURATION** environment variable retains your customized service settings between deployments. See the definition in the [deploy variables]({{ site.baseurl }}/cloud/env/variables-deploy.html#elasticsuite_configuration) content.

   -  {:.new}<!-- MAGECLOUD-2822 -->Added the **SCD_MAX_EXECUTION_TIMEOUT** environment variable so you can increase the time to complete the static content deployment from the `.magento.env.yaml` file. See the definition in the [deploy variables]({{ site.baseurl }}/cloud/env/variables-deploy.html#scd_max_execution_time), the [build variables]({{ site.baseurl }}/cloud/env/variables-build.html#scd_max_execution_time), and the [global variables]({{ site.baseurl }}/cloud/env/variables-global.html#scd_max_execution_time).

      -  {:.new}<!-- MAGECLOUD-3135 -->Added the **MAGENTO_CLOUD_LOCKS_DIR** environment variable to configure the path to the mount point for the lock provider on the cloud infrastructure. The lock provider prevents the launch of duplicate cron jobs and cron groups. This variable is supported on {{ site.data.var.ee }} version 2.2.5 and later and automatically configured. See the definition in [Cloud variables]({{ site.baseurl }}/cloud/env/variables-cloud.html).

      -  {:.fix}<!-- MAGECLOUD-3382 -->Changed the **SCD_THREADS** environment variable default values to automatically determine the optimal value based on the detected CPU thread count. See the updated definitions in the [deploy variables]({{ site.baseurl }}/cloud/env/variables-deploy.html#scd_threads) and the [build variables]({{ site.baseurl }}/cloud/env/variables-build.html#scd_threads).

-  {:.fix}<!-- MAGECLOUD-3383 -->Fixed an issue with a patch for DB Isolation Mechanism that caused an error when upgrading to {{site.data.var.ece}} version 2002.0.16.

-  {:.fix}<!-- MAGECLOUD-3456 -->Added a patch that replaces _Google Image Charts_ with _Image-Charts_. See the DevBlog article [Google Image Charts deprecation and update for M1](https://community.magento.com/t5/Magento-DevBlog/Google-Image-Charts-deprecation-and-update-for-M1/ba-p/125006).

-  {:.fix}<!-- MAGECLOUD-3470 -->Added validation for the [SEARCH_CONFIGURATION variable]({{ site.baseurl }}/cloud/env/variables-deploy.html#search_configuration). Deploy fails when the 'engine' option is not set and `_merge` is not required.

-  {:.fix}<!-- MAGECLOUD-3525 -->Fixed an issue that exposed sensitive data after an exception occurs. Now the sensitive information is masked appropriately.

-  {:.fix}<!-- MAGECLOUD-2899 -->Improved the fault-tolerant settings of the {{site.data.var.ce}} package. In the case when Magento 2 cannot read data from the Redis `slave` instance, a reading is made from the Redis `master` instance. See [REDIS_USE_SLAVE_CONNECTION]({{ site.baseurl }}/cloud/env/variables-deploy.html#redis_use_slave_connection).

## v2002.0.17

{:.bs-callout-info}
The `{{site.data.var.ct}}` version 2002.0.17 includes an important security patch. See [Tech Resources: Magento Open Source Patches](https://magento.com/tech-resources/download#download2288).

-  {:.new}**Service updates**—Supported by the following Magento versions: 2.2.8 and later 2.2.x, 2.3.1 and later 2.3.x

   -  <!-- MAGECLOUD-3196 -->Added support for Elasticsearch version 6.x.

   -  Added support for Redis version 5.0.

-  {:.new}**New Docker images**—Added the following services to the Docker build:

   -  <!-- MAGECLOUD-3196 -->Elasticsearch 6.5

   -  <!-- MAGECLOUD-3223 -->Redis 5.0

-  {:.new}<!-- MAGECLOUD-2870 -->**New environment variable**—Previously, there was a hard-coded timeout for SCD compression. Now you can configure the SCD compression timeout using the **SCD_COMPRESSION_TIMEOUT** environment variable. See the definitions in the [build variables]({{ site.baseurl }}/cloud/env/variables-build.html#scd_compression_timeout) and the [deploy variables]({{ site.baseurl }}/cloud/env/variables-deploy.html#scd_compression_timeout) content.

-  {:.fix}<!-- MAGECLOUD-3246 -->Added the `--use-rewrites` option to the Magento install command so that it uses web server rewrites for generated links in the storefront and Admin access to improve security and customer experience.

-  {:.fix}<!-- MAGECLOUD-2895 -->Added timestamps to the `var/log/install_upgrade.log` file so that it shows dates for the Magento installation and upgrade events.

## v2002.0.16

-  {:.new}**Docker updates**—

   -  <!-- MAGECLOUD-3025 -->Now, the default service configuration generated in the Docker environment is the same as the default configuration in the Cloud template.

   -  <!-- MAGECLOUD-2907 -->You can send mail from your Docker environment using the [`sendmail` service]({{ site.baseurl }}/cloud/docker/docker-config.html#set-up-email).

   -  <!-- MAGECLOUD-2891 -->Added the ability to [configure Xdebug]({{ site.baseurl }}/cloud/docker/docker-development-debug.html) to debug in the Cloud Docker environment.

   -  <!-- MAGECLOUD-2883 -->Fixed an issue with web service permissions when generating the `docker-compose.yml` file.

-  {:.new}<!-- MAGECLOUD-2392 -->**Upgrade improvement**—Added validation to confirm that the `autoload` property in the `composer.json` file contains required configuration changes before upgrading to {{ site.data.var.ee }} v2.3. See [Upgrade Magento version]({{site.baseurl }}/cloud/project/project-upgrade.html).

-  {:.new}<!-- MAGECLOUD-3104 -->The compression process in deploying static content now includes all assets—natively generated or customized—and occurs during the build phase at the beginning of the [`build:transfer` section]({{ site.baseurl }}/cloud/project/magento-app-properties.html#hooks). Previously, the compression process occurred before applying custom minification and bundling of static assets. [Fix submitted by Rafael Garcia Lepper from Tryzens Limited](https://github.com/magento/ece-tools/pull/413).

-  {:.fix}<!-- MAGECLOUD-3035 -->Fixed a database connection error that occurred during deployment immediately after configuring an additional database and service relationship. Also, this fix addresses an issue that occurred during the configuration process of MBI for Starter. For Starter, this upgrade is a "must have" for using MBI.

-  {:.fix}<!-- MAGECLOUD-3003 -->Fixed a validation issue with the database configuration that caused the deploy process to fail.

-  {:.fix}<!-- MAGECLOUD-2956 -->Updated the constraint with the appropriate version of the `symfony/yaml` package to use with [PHP constants]({{ site.baseurl }}/cloud/project/magento-env-yaml.html#php-constants). Constant parsing does not work when using a `symfony/yaml` package version earlier than 3.2. [Fix submitted by Vladimir Kerkhoff](https://github.com/magento/ece-tools/pull/404).

-  {:.new}<!--MAGECLOUD-2903-->**Environment configuration check**—Added validation to check the PHP version and warn users if they are not using the latest recommended version.

-  {:.fix}<!-- MAGECLOUD-2851 -->Fixed an issue with processing malformed JSON variables. Now, if a JSON variable causes a syntax error, a warning appears in the `cloud.log` file and deployment continues using the default variable.

-  {:.fix}<!-- MAGECLOUD-2747 -->Fixed a connection error that occurred during deployment immediately after disabling the Redis service.

-  {:.new}<!--MAGECLOUD-2925-->**Logging changes**—Updated the [log level]({{ site.baseurl }}/cloud/env/log-handlers.html#log-levels) from `Info` to `Notice` for the following build and deploy process events:

   -  Begin and end of the process for reconciling installed modules in `composer.json` with shared configuration settings in the `app/etc/config.php` file

   -  Begin and end of the configuration validation process

   -  Begin and end of the `setup:di:compile` process for generating classes

-  {:.new}**New environment variables**—

   -  <!-- MAGECLOUD-3026 & MAGECLOUD-2963-->**[RESOURCE_CONFIGURATION deploy variable]({{ site.baseurl }}/cloud/env/variables-deploy.html#resource_configuration)**—Use this variable to map a resource name to a database connection.

   -  <!-- MAGECLOUD-3048 -->**[X_FRAME_CONFIGURATION global variable]({{ site.baseurl }}/cloud/env/variables-global.html#x_frame_configuration)**—Use this variable to change the `X-Frame-Options` header configuration for rendering a {{ site.data.var.ee }} page in a `<frame>`, `<iframe>`, or `<object>`.

-  {:.fix}**Environment variable updates**—Changed the following environment variables:

   -  <!-- MAGECLOUD-2466 -->**[WARM_UP_PAGES]({{ site.baseurl }}/cloud/env/variables-post-deploy.html)**—Added the capability to preload the cache for specified pages on all domains defined for a {{ site.data.var.ee }} store. Previously, if your site was configured with multiple domains, the post-deploy process failed to preload the cache for the specified pages on non-default domains and returned the following error in the post-deploy log: `ERROR: Warming up failed: <uri>`

   -  <!-- MAGECLOUD-2823 -->**SCD_COMPRESSION_LEVEL**—Updated the documentation and the sample `.magento.env.yaml` file with the correct default values for SCD compression level. See the definitions in the [build variables]({{ site.baseurl }}/cloud/env/variables-build.html#scd_compression_level) and the [deploy variables]({{ site.baseurl }}/cloud/env/variables-deploy.html#scd_compression_level) content.

   -  <!--MAGECLOUD-2882-->**SCD_EXCLUDE_THEMES**——This environment variable is deprecated. Use the [SCD_MATRIX]({{ site.baseurl }}/cloud/env/variables-build.html#scd_matrix) to control theme configuration.

   -  <!-- MAGECLOUD-2904 -->**SCD\_MATRIX**—Fixed the validation process to prevent a problem that occurred when the SCD_MATRIX ignored a theme value that contained different character cases. See the definitions in the [build variables]({{ site.baseurl }}/cloud/env/variables-build.html#scd_matrix) and the [deploy variables]({{ site.baseurl }}/cloud/env/variables-deploy.html#scd_matrix) content.

   -  <!-- MAGECLOUD-2573/MAGECLOUD-2848 -->**ADMIN variables**—

      -  Improved security when managing credentials for the Magento Admin user using environment variables. You can no longer use the ADMIN_EMAIL, ADMIN_USERNAME, and ADMIN_PASSWORD environment variables to override admin credentials during upgrades. If you cannot access the Admin panel, use the *Forgot password* feature or the Magento CLI `admin:user:create` command to create a new admin user. See [Access your Magento Admin panel]({{ site.baseurl }}/cloud/onboarding/onboarding-tasks.html#admin).

      -  ADMIN_EMAIL is no longer required when upgrading or applying patches.

## v2002.0.15

-  {:.new}**Docker updates**—

   -  <!-- MAGECLOUD-2888 -->Now the Docker generator uses the services specified in the `.magento.app.yaml` and `.magento/services.yaml` configuration files when [building your Docker environment]({{ site.baseurl }}/cloud/docker/docker-config.html). You can choose a different service version using build parameters.

   -  <!-- MAGECLOUD-2799 -->Added PHP 7.2 image—Added support for PHP 7.2 in Cloud Docker; updated the [Launch Docker configuration]({{ site.baseurl }}/cloud/docker/docker-config.html) to include the `docker:build --php` option to specify the version of PHP compatible with your Magento Commerce version.

   -  <!-- MAGECLOUD-2565 -->Added a [Cron container]({{ site.baseurl }}/cloud/docker/docker-containers-cli.html#cron-container) based on the PHP-CLI image.

   -  Added the following services to the Docker build:

      -  <!-- MAGECLOUD-2567 & 2889-->RabbitMQ 3.5 and 3.7

      -  <!-- MAGECLOUD-2569 & 2887 -->ElasticSearch 1.7, 2.4, and 5.2

      -  <!-- MAGECLOUD-2886 -->Redis 3.2 and 4.0

-  {:.new}<!-- MAGECLOUD- 2575 -->**Configure with PHP constants**—Added support for [PHP constants]({{ site.baseurl }}/cloud/project/magento-env-yaml.html#php-constants) in the `.magento.env.yaml` configuration file.

-  {:.new}<!--MAGECLOUD-2879-->**New environment variable**—By default, only the Production environment has Google Analytics enabled. You can enable Google Analytics on the Staging and Integration environments using the  [ENABLE_GOOGLE_ANALYTICS environment variable]({{ site.baseurl }}/cloud/env/variables-deploy.html#enable_google_analytics).

-  {:.fix}<!-- MAGECLOUD-2923 -->Fixed an issue that removed customized cron configurations from the `env.php` file after a redeployment. Now, custom cron configurations safely remain in the `env.php` file.

-  {:.fix}<!-- MAGECLOUD-2919 -->Fixed inconsistencies in the messages and [log levels]({{ site.baseurl }}/cloud/env/log-handlers.html#log-levels) for build, deploy, and post-deploy phases. Increased beginning and ending log message levels from **info** to **notice** for all phases and sub-phases. Added beginning and ending log messages, where appropriate.

-  {:.fix}<!-- MAGECLOUD-2862 -->Fixed an issue involving cron processes that prevented the start of the post-deploy phase, when configured. Now, if you have the post-deploy hook enabled, the cron processes are enabled again at the beginning of the post-deploy phase.

-  {:.fix}<!--MAGECLOUD-2736-->Resolved an issue that prevented a successful installation of Magento when specifying a custom database configuration. Previously, the installation process used the database configuration from the [MAGENTO_CLOUD_RELATIONSHIP variable]({{ site.baseurl }}/cloud/env/variables-cloud.html) even if you designated customized connection information in the [DATABASE_CONFIGURATION environment variable]({{ site.baseurl }}/cloud/env/variables-deploy.html#database_configuration).

-  {:.fix}<!--MAGECLOUD-2740-->Corrected the `config:dump` command so that it includes each website locale in the `system` section of the `config.php` file.

-  {:.fix}<!--MAGECLOUD-2797-->Fixed an issue that resulted in _warm-up_ errors during the post-deploy phase by correcting the source base URL reference.

-  {:.fix}<!--MAGECLOUD-2850-->Fixed an issue that generated files improperly during the `setup:di:compile` process, which affected the Amazon Pay module.

## v2002.0.14

-  {:.new}<!--MAGECLOUD-2372-->**Verify Ideal State**—The `ideal-state` wizard now verifies the current configuration during each deployment and provides clear instructions for updating the configuration to achieve a faster, zero-downtime deployment.

-  {:.fix}<!--MAGECLOUD-2521-->**PCI Compliance**—Updated the messaging protocols for {{site.data.var.ece}} to require Transport Layer Security (TLS) version 1.2 when connecting with third-party messaging services. If you are using a message service that does not support TLS version 1.2, you must upgrade your service. Otherwise, the following error message displays when your {{site.data.var.ee}} application tries to connect to the message server to send an email: `Unable to connect via TLS`.

-  {:.new}<!--MAGECLOUD-2517-->**Deployment improvement**—Added validation to warn customers if a Staging or Production environment has `dev`, `debug`, or `debug_logging` options enabled to prevent performance issues caused by excessive logging activity.

-  {:.fix}**Deployment fixes**—

   -  <!--MAGECLOUD-2603-->Now maintenance mode is enabled at the start of the deploy phase and disabled at the end. If the deployment fails, the site remains in maintenance mode until the deployment issues are resolved. Previously, the site returned to production mode even if the deployment failed.

      -  Reworked the deploy phase validation checks to downgrade the error level for the following deployment issues from `CRITICAL` to `WARNING` so that the deployment completes. Previously, these issues caused the deployment to fail.

      -  Environment configuration contains incorrect values for deploy or cloud variables.

   -  <!--MAGECLOUD-2600-->The Elasticsearch version on the cloud infrastructure is incompatible with the version of the elasticsearch/elasticsearch module supported by {{ site.data.var.ece }}. See the [Elasticsearch troubleshooting article](https://support.magento.com/hc/en-us/articles/360015758471-Deployment-fails-or-interrupts-with-cloud-log-error-Elasticsearch-version-is-not-compatible-with-current-version-of-magento) in the Magento Support Knowledgebase.

   -  <!--MAGECLOUD-2173-->Fixed an issue with the shared configuration settings in the `app/etc/config.php` file that caused `recursion detected` errors during deployment.

-  {:.fix}**Cron-related fixes**—

   -  <!--MAGECLOUD-2602-->Fixed a cron scheduling issue that prevented jobs from running if you specify a cron frequency other than the default (1 minute).

   -  <!--MAGECLOUD--2537-->Fixed an issue in the deploy phase that allowed cron jobs to continue running during deployment, which can cause database locks and other critical issues. Now, all cron jobs are stopped before the deploy phase begins and restarted after the deployment completes.

   -  <!--MAGECLOUD-2501-->Fixed the cron job workflow in versions 2.2.x to unlock frozen cron jobs so that they can be stopped before beginning deployment. Previously, a frozen cron job caused the deployment to stall.

-  {:.fix}<!--MAGECLOUD-2527-->Changed the format of the `config.php` file generated by the `vendor/bin/ece-tools config:dump` command to use short array syntax and 4-space indentation to comply with Magento coding standards.

-  {:.fix}<!--MAGECLOUD-2607-->Fixed a deployment error that occurs when the `.magento.env.yaml` contains `{{ base_url }}` and `{{ unsecure_base_url }}` placeholders for web configurations instead of the default URL configuration for a {{site.data.var.ece}} project./

## v2002.0.13

-  {:.new}<!--MAGECLOUD-2169-->**Enable zero-downtime deployment**—Now {{site.data.var.ece}} queues requests with required database changes during deployment and applies the changes as soon as the deployment completes. Requests can be held for up to 5 minutes to ensure that no sessions are lost. See [Static content deployment options to reduce deployment downtime on Cloud](https://support.magento.com/hc/en-us/articles/360004861194-Static-content-deployment-options-to-reduce-deployment-downtime-on-Cloud).

-  {:.new}**Docker Compose for Cloud**—Made the following improvements to the [Docker setup and configuration]({{ site.baseurl }}/cloud/docker/docker-config.html) process:

   -  <!--MAGECLOUD-2359-->Added a command—`docker:config:convert` to convert PHP configuration files to Docker ENV format to simplify environment configuration. Now, you copy the PHP configuration files to the Docker directory and convert them to Docker ENV files. See [Launch Docker]({{ site.baseurl }}/cloud/docker/docker-config.html).

   -  <!--MAGECLOUD--2357-->The {{site.data.var.ece}} installation process now supports deploying to both read-only and read-write file systems to more closely emulate the Cloud file system. See [Configure Docker]({{ site.baseurl }}/cloud/docker/docker-config.html).

   -  <!--MAGECLOUD--2442-->**Redis service support**—Added a Redis image, which is deployed to a Docker container and configured automatically to work with your Docker installation.

   -  <!-- MAGECLOUD-2577 -->Now you have the DB dump capability when using the Cloud Docker [database container]({{ site.baseurl }}/cloud/docker/docker-containers-service.html#database-container). Also, you can [share files]({{ site.baseurl }}/cloud/docker/docker-containers.html#sharing-data-between-host-machine-and-container) between a host machine and a container using the `docker/mnt` directory.

   -  <!--MAGECLOUD--2358-->**Varnish service support**— Added a Varnish image, which is deployed automatically to a Docker container. After deployment, you can manually configure Varnish following Magento best practices. See [Configure and use Varnish]({{ site.baseurl }}/guides/v2.3/config-guide/varnish/config-varnish.html).

   -  <!--MAGECLOUD--2360-->Secure site access—Added SSL support to access your {{site.data.var.ee}} store and Admin panel.

-  {:.fix}<!--MAGECLOUD-2205-->**Improved {{site.data.var.ece}} extension support**—Downgraded the minimum version requirement for the guzzlehttp/guzzle package in the {{site.data.var.ece}} [composer.json file]({{ site.baseurl }}/cloud/reference/cloud-composer.html) to version 6.2 so that the `{{site.data.var.ct}}` package is compatible with more extensions.

-  {:.new}<!--MAGECLOUD-2363-->**Apply custom changes to your {{site.data.var.ee}} application during the build phase**—We split the build phase into two separate processes so that you can use hooks to apply custom changes to the generated static content before packaging the application for deployment. The *build:generate* process generates code, applies patches, and generates static content. The *build:transfer* process transfers the generated code and static content to the final destination. See [Application hooks]({{ site.baseurl }}/cloud/project/magento-app-properties.html#hooks).

-  {:.fix}**Environment configuration checks**—Improved validation of the environment configuration to warn customers about version incompatibilities and configuration errors before building and deploying {{site.data.var.ece}}.

   -  <!--MAGECLOUD-2183-->Added version-specific validation to identify unsupported or deprecated environment variables and values.

   -  <!--MAGECLOUD-2389-->Added an Elasticsearch compatibility check to warn users about Elasticsearch configuration issues. Now, the deployment fails if the version of Elasticsearch service on the server is incompatible with {{site.data.var.ee}}. Previously, the deployment succeeded even if the Elasticsearch version was incompatible, which caused product catalog issues after site deployment.

      You can resolve the incompatibility by [submitting a Support ticket]({{ site.baseurl }}/cloud/trouble/trouble.html) to upgrade Elasticsearch to a compatible version, or change the {{site.data.var.ee}} configuration to specify a compatible version of the Elasticsearch PHP client.

      -  For {{site.data.var.ee}} version 2.1.x to 2.2.2, upgrade Elasticsearch to version 2.4.

      -  For {{site.data.var.ee}} version 2.2.3 and later, upgrade Elasticsearch to version 5.2.

      -  If you have Elasticsearch 1.x or 2.x and do not want to upgrade, update the {{site.data.var.ee}} Elasticsearch PHP client version requirement in composer.json to `"elasticsearch/elasticsearch": "~2.0"`.

   -  <!--MAGECLOUD-2156-->Improved validation of environment variables to identify configuration settings that can cause conflicts during the build, deploy, and post-deploy phases. For example, a warning message displays during the install and upgrade process if the global setting for static content deployment conflicts with settings on the build or deploy phase.

-  {:.fix}**Environment variable updates**—Changed the following environment variables:

   -  <!--MAGECLOUD-2435-->**[SKIP_HTML_MINIFICATION global variable]({{ site.baseurl }}/cloud/env/variables-global.html#skip_html_minification)**—Changed the default value to `true` to enable on-demand HTML content minification, which minimizes downtime when deploying to Staging and Production environments. This configuration is required for zero-downtime deployments.

   -  <!--MAGECLOUD-1506-->**[CLEAN_STATIC_FILES deploy variable]({{ site.baseurl }}/cloud/env/variables-deploy.html#clean_static_files)**—Added the capability to manage the clean static files processing for static content generated during the build phase based on the CLEAN_STATIC_FILES environment variable setting. Previously, static content files generated during the build phase were always cleaned.

-  {:.fix}**Logging**—Made the following changes to improve log messages and reduce log size:

   -  <!--MAGECLOUD-2489-->Deployment failure log entries now include the command output from the operations that cause the failures even if your environment configuration does not specify debug level logging. See [`MIN_LOGGING_LEVEL`]({{ site.baseurl }}/cloud/env/variables-global.html#min_logging_level).

   -  <!--MAGECLOUD-2209-->Added logging for deployment failures that occur when generated factories required by some extensions cannot be generated correctly because the file system is in a read-only state.

   -  <!--MAGECLOUD-2402-->Reduced the deploy log size and fixed formatting issues caused by setup commands that use the interactive progress bar.

   -  <!--MAGECLOUD-2227-->Eliminated unnecessary verbosity and updated the priority levels for some log statements.

-  {:.fix}**Cron-specific fixes**—

   -  <!--MAGECLOUD-2427-->Changed the default cron job configuration settings for history lifetime from 3d (4320 min) to 1h (60 min) to prevent performance issues and deployment failures that can occur when the cron queue fills too quickly.

   -  <!--MAGECLOUD-2445-->Improved the cron job management process during the deploy phase to prevent database locks and other critical issues. Now, all cron jobs stop during the deploy phase and restart after deployment completes.

   -  <!--MAGECLOUD-2464-->Fixed an issue with the locking mechanism for scheduling consumers launched by cron jobs in {{site.data.var.ee}} versions 2.2.0 and later to prevent cron jobs from launching duplicate consumers.

-  {:.fix}<!-- MAGECLOUD-2182-->Fixed an issue with the [static content compression process]({{ site.baseurl }}/cloud/env/variables-intro.html) (`gzip`) that caused `not overwritten` and `no such file or directory` errors when referencing the compressed file during the deployment process.

-  {:.fix}<!--MAGECLOUD-2444-->Fixed an issue that prevented the `php ./vendor/bin/ece-tools config:dump` command from removing redundant sections from the `config.php` file during the dump process if the store locale is not specified. Now you can easily move your configuration files between environments. After you update to `{{site.data.var.ct}}` v2002.0.13, regenerate older `config.php` files with the improved `config:dump` command. See [Configuration management for store settings]({{ site.baseurl }}/cloud/live/sens-data-over.html).

-  {:.fix}<!--MAGECLOUD-2556-->Fixed an issue that caused an error during the deploy phase if the route configuration in the `.magento/routes.yaml` file redirects from an [apex](https://blog.cloudflare.com/zone-apex-naked-domain-root-domain-cname-supp/) domain to a `www` domain.

-  {:.fix}<!--MAGECLOUD-2520-->Fixed an issue with the `_merge` option for the [`SEARCH_CONFIGURATION`]({{ site.baseurl }}/cloud/env/variables-deploy.html#search_configuration) variable that caused incorrect merge results if you do not include the `engine` parameter in the updated `.magento.env.yaml` configuration file. Now, the merge operation correctly overwrites only the values you specify in the updated `.magento.env.yaml` without requiring you to set the `engine` parameter.

-  {:.fix}<!-- MAGECLOUD-2515-->Fixed a Redis configuration issue that incorrectly enabled session locking for {{site.data.var.ece}} versions 2.2.1 and later, which can cause slow performance and timeouts. Now, session locking is disabled by default. The issue was caused by a change in the default behavior of the `disable_locking` parameter introduced in v1.3.4 of the Redis session handler package. See [colinmollenhour/php-redis-session-abstract package](https://github.com/colinmollenhour/php-redis-session-abstract).

## v2002.0.12

-  {:.new}<!-- MAGECLOUD-2250 -->**Docker Compose for Cloud**—Added a command—`docker:build`—to generate a [Docker Compose]({{ site.baseurl }}/cloud/docker/docker-config.html) configuration from the Cloud `{{site.data.var.ct}}` repository.

-  {:.new}<!-- MAGECLOUD-2019 -->**Change Locales**—Now you can [change store locale]({{ site.baseurl }}/cloud/live/sens-data-over.html#change-locales) without the exporting and importing configuration process. While Magento is in Production and the SCD_ON_DEMAND is enabled, the Magento store and admin locale options are available.

-  {:.new}<!-- MAGECLOU-1998 -->**Site map and Robots**—Created a [workflow]({{ site.baseurl }}/cloud/trouble/robots-sitemap.html)to add a `robots.txt` file and generate a `sitemap.xml` file for a single domain configuration without requiring a change to the infrastructure.

-  {:.new}<!-- MAGECLOUD-1910 -->**Wizards**—Added two [wizards]({{ site.baseurl }}/cloud/deploy/smart-wizards.html) to help you with Cloud configuration:
   -  `ideal-state`—configure the ideal state for minimal deployment downtime
   -  `master-slave`—configure load balancing for database and Redis

-  {:.new}<!-- MAGECLOUD-1521 -->**Module Refresh**—Added a Cloud command—`module:refresh`—to enable modules that were disabled or not explicitly enabled, similar to the way that it is done automatically during a build. See [Build and deploy on local in Build phase]({{ site.baseurl }}/cloud/live/live-sanity-check.html#build).

-  {:.new}<!-- MAGECLOUD-2105 -->Added the ability to choose to merge or overwrite configuration for services using the `_merge` option in [CACHE]({{ site.baseurl }}/cloud/env/variables-deploy.html#cache_configuration), [SESSION]({{ site.baseurl }}/cloud/env/variables-deploy.html#session_configuration), [QUEUE]({{ site.baseurl }}/cloud/env/variables-deploy.html#queue_configuration), and [SEARCH]({{ site.baseurl }}/cloud/env/variables-deploy.html#search_configuration) configurations.

-  {:.new}<!-- MAGECLOUD-1908 -->**Environment Configuration sample file**—We added a `.magento.env.yaml` sample file to the ece-tools package that includes a detailed description and possible values for each environment variable.

   -  <!-- MAGECLOUD-1907 -->We also added a deep validation for the `.magento.env.yaml` configuration that prevents failures in the deployment process caused by unexpected values. When a failure occurs, you now receive a detailed error message that begins with: `Environment configuration is not valid. Please correct .magento.env.yaml file with next suggestions:`

-  {:.new}Added the following [**Environment variables**]({{ site.baseurl }}/cloud/env/variables-intro.html):

   -  <!-- MAGECLOUD-1501 -->Now you can define multiple locales for each theme using the new [SCD_MATRIX]({{ site.baseurl }}/cloud/env/variables-deploy.html#scd_matrix) environment variable, which reduces the amount of theme files to deploy.
   -  <!-- MAGECLOUD-2047 --> Added the [DATABASE_CONFIGURATION]({{ site.baseurl }}/cloud/env/variables-deploy.html#database_configuration) environment variable to customize your database connections for deployment.
   -  <!-- MAGECLOUD-2129 -->The new [MIN_LOGGING_LEVEL]({{ site.baseurl }}/cloud/env/variables-global.html#min_logging_level) variable overrides the minimum logging level for all output streams without making changes to the code.

-  {:.fix}Fixed an issue that caused downtime between the deploy and post-deploy phase. Now, the post-deploy phase begins _immediately_ after the deploy phase ends.

-  {:.fix}<!-- MAGECLOUD-2268 -->Fixed an issue that did not clean the successful cron jobs, those with `status = success`, from the schedule.

-  {:.fix}<!-- MAGECLOUD-2113 -->Fixed an issue with the `post_deploy` hook that cleared the cache in the deploy phase instead of the post-deploy phase of the project.

-  {:.fix}<!-- MAGECLOUD-2034 -->Fixed an issue when using SCD with multiple locales, which generated the same `js-translation.json` file for each locale.

-  {:.fix}<!-- MAGECLOUD-2033 -->Optimized the `db:dump` command in the `{{site.data.var.ct}}` package to avoid locking tables and increase speed.

## v2002.0.11

{:.bs-callout-info}
The ece-tools version 2002.0.11 is required for 2.2.4 compatibility.

-  {:.new}**Configuring read-only connections to non-master nodes**—This release adds the ability to configure a read-only connection to a non-master node to receive read-only traffic (for <!--MAGECLOUD-143 -->[Redis]({{ site.baseurl }}/cloud/env/variables-deploy.html#redis_use_slave_connection) and for <!--MAGECLOUD-143 --> [MariaDB]({{ site.baseurl }}/cloud/env/variables-deploy.html#mysql_use_slave_connection)).

-  {:.new}<!--MAGECLOUD-1910 -->**Configuration Wizard**—Added a wizard to help verify your configuration for static content deployment. See [Smart wizards]({{ site.baseurl }}/cloud/deploy/smart-wizards.html).

-  {:.new}<!-- MAGECLOUD-1966 -->**Symfony Console support**—Added support for Symfony Console 4 with Magento 2.3.

-  {:.fix}<!-- MAGECLOUD-1607 -->**Cron scheduling optimizations**—Improved the queue management and enhanced logging to help with debugging cron-related issues.

-  {:.fix}<!-- MAGECLOUD-1221 -->Deployment validation fails if an `ADMIN_EMAIL` or `ADMIN_USERNAME` value is the same as an existing Magento administrator account.

-  {:.fix}<!-- MAGECLOUD-1282 -->Removed SOLR support for 2.2.x versions. 2.1.x versions retain the ability to enable SOLR.

-  {:.fix}<!-- MAGECLOUD-1489 -->The first installation of the Staging & Production environments of a PRO project now includes different index prefixes for ElasticSearch to prevent possible conflicts while identifying records belonging to each environment.

-  {:.fix}<!-- MAGECLOUD-2021 -->Fixed an issue that interrupted the build phase for legacy architecture during static content deployment.

-  {:.fix}<!-- MAGECLOUD-1607 -->**Cron-specific Improvements**—Re-worked the cron implementation:

   -  Fixed an issue that caused the cron queue to fill quickly. Now it clears the outdated cron jobs in a more reliable way.

   -  Re-organized the sequence of cron jobs so that all jobs in separate threads launch prior to the general group.

   -  Improved logging to better assist in debugging cron issues.

   -  **NOTE**—This release addresses many cron-related issues. If you currently use some cron-related patches in _m2-hotfixes_, remove them.

-  {:.fix}**SCD-specific improvements**—

   -  <!-- MAGECLOUD-1819 -->You can use the `VERBOSE_COMMANDS` and the `SCD_COMPRESSION_LEVEL` environment variables during both *build* and *deploy* phases.
   -  <!-- MAGECLOUD-2043 -->Fixed an issue that caused deployment to fail with a random error when encountering an unexpected value for the `SCD_COMPRESSION_LEVEL` environment variable. Improved the configuration validation to provide meaningful notifications. See [`SCD_COMPRESSION_LEVEL`]({{ site.baseurl }}/cloud/env/variables-build.html#scd_compression_level) for acceptable values.
   -  <!-- MAGECLOUD-2044 -->Fixed the behavior of the `SCD_COMPRESSION_LEVEL` environment variable configuration flow so the overrides work as expected.
   -  <!-- MAGECLOUD-2046 -->Fixed an issue that prevented the configuration of the `SCD_THREADS` environment variable in the `.magento.env.yaml` file *deploy* stage.

## v2002.0.10

-  {:.new}<!-- MAGECLOUD-1285 -->**Static Content Deployment (SCD)**—There is a new, alternative deployment process to generate static content when requested (on-demand). This decreases downtime and improves cache handling by generating the most critical assets.

   -  <!-- MAGECLOUD-1738 -->**New environment variable**—Added the `SCD_ON_DEMAND` global environment variable to generate static content when requested.

   -  <!-- MAGECLOUD-1788 -->**Post-deploy hook**—Added a `post_deploy` hook for the `.magento.app.yaml` file that clears the cache and pre-loads (warms) the cache *after* the container begins accepting connections. It is available only for Pro projects that contain Staging and Production environments in the Project Web Interface and for Starter projects. Although not required, this works in tandem with the `SCD_ON_DEMAND` environment variable.

-  {:.new}<!-- MAGECLOUD-1842 -->**Optimization**—Optimized moving or copying files during deployment to improve deployment speed and decrease loads on the file system.

-  {:.new}<!-- MAGECLOUD-1751 -->**Deployment Logging**—Added the ability to enable Syslog and Graylog Extended Log Format (GELF) handlers for outputting logs during the deployment process. See [Logging handlers]({{ site.baseurl }}/cloud/env/log-handlers.html).

-  {:.new}Added the following [**Environment variables**]({{ site.baseurl }}/cloud/env/variables-intro.html):

   -  <!-- MAGECLOUD-1556 -->`CRYPT_KEY`—Provide a cryptographic key to another environment when moving a database.

   -  <!-- MAGECLOUD-1621 and MAGECLOUD-1736-->`SKIP_HTML_MINIFICATION`—_Global_ environment variable that skips copying the static view files in the `var/view_preprocessed` directory and generates minified HTML when requested.

   -  <!-- MAGECLOUD-1738 -->`SCD_ON_DEMAND`—_Global_ environment variable to generate static content when requested.

   -  `WARM_UP_PAGES`—You can list the pages to use to pre-load the cache. Available in the new [Post-deploy variables]({{ site.baseurl }}/cloud/env/variables-post-deploy.html).

-  {:.fix}<!-- MAGECLOUD-982 -->Fixed an issue that involved a locally applied patch breaking the deployment on an instance. Now, ece-tools can detect that a patch has been applied.

-  {:.fix}<!-- MAGECLOUD-1735 -->Fixed a conflict between JavaScript bundling and GZIP functionality. Now these features work correctly together.

-  {:.fix}<!-- MAGECLOUD-1744 -->Fixed an issue that caused ece-tools CLI commands to fail when using earlier PHP 7.0.x versions.

-  {:.fix}<!-- MAGECLOUD-1822 -->Fixed an issue that prevented static content deployment with the compact strategy in multiple threads.

-  {:.fix}<!-- MAGECLOUD-1853 -->Fixed a Redis session locking issue that caused an Admin login delay. Also, the fix is available for 2.1.x.

## v2002.0.9

{.bs-callout-info}
You must [upgrade the {{site.data.var.ece}} metapackage]({{ site.baseurl }}/cloud/project/project-upgrade-parent.html) to get this and all future updates.

-  {:.new}<!-- MAGECLOUD-1086 -->**ece-tools**—The `{{site.data.var.ct}}` package now supports Magento 2.1.x.

-  {:.new}<!-- MAGECLOUD-1552 -->**Redis configuration**—You can now [configure Redis]({{ site.baseurl }}/cloud/env/variables-deploy.html#cache_configuration) page and default cache and Redis session storage using an environment variable.

-  {:.new}<!-- MAGECLOUD-1437 -->**Search, AMQP, and Redis service improvements**—We unified the service configuration flow so that it now behaves the same way for all services. Manually editing the `env.php` file to configure services is no longer supported. You must use environment variables or the `.magento.env.yaml` file instead.

-  {:.fix}**Environment variables**—

   -  <!-- MAGECLOUD-1507 -->The use of `env:STATIC_CONTENT_THREADS` was deprecated and will be removed in a future release. Use the [SCD_THREADS]({{ site.baseurl }}/cloud/env/variables-deploy.html#scd_threads) instead.

   -  <!-- MAGECLOUD-1640 -->The `STATIC_CONTENT_EXCLUDE_THEMES` environment variable was deprecated. You must use the `SCD_EXCLUDE_THEMES` environment variable instead.

-  {:.fix}<!-- MAGECLOUD-1674 -->**Logging**—We simplified logging around built-in patching operations.

-  {:.fix}<!-- MAGECLOUD-1615 -->We removed `developer` mode support and the `APPLICATION_MODE` environment variable because they were causing unexpected behavior.

-  {:.fix}<!-- MAGECLOUD-1630 -->We fixed an issue that was causing static content deployment failures related to Redis. Now, multi-threaded static content deployment runs as designed.

-  {:.fix}<!-- MAGECLOUD-1175 -->We fixed an issue that was preventing users from saving modifications to configuration fields in the Admin, which are marked as sensitive after running the `app:config:dump` command.

-  {:.fix}<!-- MAGECLOUD-1674 -->We added support for an earlier version of `symfony/yaml` to fix conflicts with some packages, which are not yet compatible with the latest version.

## v2002.0.8

{:.bs-callout-info}
We merged [`vendor/magento/ece-patches`]({{ site.baseurl }}/cloud/composer-packages/ece-patches.html) with `vendor/magento/ece-tools` in this release. You no longer need to update the `vendor/magento/ece-patches` package separately.

**New features:**

-  <!-- MAGECLOUD-1253 -MAGECLOUD-1495-->**Improved logging**
   -  We improved log messaging to provide better explanations when the build or deploy process overrides an environment variable.
   -  You can now view installation and upgrade progress in real time. Tail the `install_update.log` file to view progress. For example,

      ```bash
      tail -f var/log/install_upgrade.log
      ```

-  <!-- MAGECLOUD-1367 -->**New cron command**—You can now unlock specific stuck cron jobs instead of stopping and re-launching all of them with the [`cron:unlock`](https://support.magento.com/hc/en-us/articles/360033099451) command. Not available in 2.1.

-  <!-- MAGECLOUD-1369 -->**Unified configuration file**—You can now configure build and deploy stages using a [`.magento.env.yaml`]({{ site.baseurl }}/cloud/project/magento-env-yaml.html) file.

-  <!-- MAGECLOUD-1372 -->**Backup configuration files**—The deployment process now automatically creates a backup of the `app/etc/env.php` and `app/etc/config.php` configuration files after deployment. We also added a [new CLI command](https://support.magento.com/hc/en-us/articles/360033182871) to restore these configuration files from a backup.

-  <!-- MAGECLOUD-1491 -->**Troubleshooting validation errors**—We changed the command you must use to resolve validation errors when `config.php` does not contain enough data for static content deployment. Previously, the error message instructed you to run `bin/magento app:config:dump`. Now, you must run `php ./vendor/bin/ece-tools config:dump`.

-  <!-- MAGECLOUD-1410 -->**New environment variables**—You can now use environment variables to connect custom [search]({{ site.baseurl }}/cloud/env/variables-deploy.html#search_configuration) and [AMQP-based]({{ site.baseurl }}/cloud/env/variables-deploy.html#queue_configuration) services to your site.

-  <!--MAGECLOUD-1090-->We implemented smart patching. Now the package applies patches based not on {{site.data.var.ece}} version, but on patched package version.

**Resolved issues:**

-  <!-- MAGECLOUD-1162 -->We fixed a logging issue that was causing build errors.

-  <!-- MAGECLOUD-1389 -->We fixed an issue that was causing timeout exceptions when running deployments in interactive mode.

-  <!-- MAGECLOUD-1446 MAGECLOUD-1485-->We fixed an issue that was causing errors when using the compact strategy for static content generation. Not available in 2.1.

-  <!-- MAGECLOUD-1493 -->We fixed an issue that was preventing the deployment script from properly identifying staging and production environments.

-  <!-- MAGECLOUD-1520 -->We fixed an issue that was causing network issues to disrupt database connections and cause failures during the installation and upgrade process.

-  <!--  MAGECLOUD-1567  -->We fixed an issue preventing you from exporting the configuration files using `app:config:dump` more than once. Not available in 2.1.

-  <!--  MAGECLOUD-1582  -->We fixed a Redis session _locking_ issue that caused an _Admin_ login delay. Not available in 2.1.

-  <!--MAGECLOUD-1450-->We fixed an implementation issue related to versioning that was causing a conflict with other Composer-based patching modules.

-  <!--MAGECLOUD-1310-->We fixed an issue that was causing PHP memory issues during import.

-  <!--MAGECLOUD-1033-->Removed patch; fixing bug in `colinmollenhour/credis` v1.6 to enable support for {{site.data.var.ece}} 2.2.1. Not available in 2.1.

## v2002.0.7

**Resolved issues:**

-  <!-- MAGECLOUD-1454-->We removed `var/view_preprocessed` symlinking to fix an issue that was causing JavaScript minification conflicts.

## v2002.0.6

**Resolved issues:**

-  <!-- MAGECLOUD-1413 -->We fixed an issue that was causing `gzip` errors when a file or directory name contains spaces.

-  <!-- MAGECLOUD-1424 -->We fixed an issue that was preventing deployment scripts from properly recognizing and enabling module dependencies.

## v2002.0.5

**New features:**

-  **Configure a cron consumer with an environment variable**—You can now configure cron consumers using the new `CRON_CONSUMERS_RUNNER` environment variable.

-  **Configuration scanning**—We now scan for critical components during the build/deploy process and halt the process if the scan fails, which prevents unnecessary downtime due to the site being in maintenance mode.

-  **Build/deploy notifications**—We added a configuration file that you can use to [set up Slack and/or email notifications]({{ site.baseurl }}/cloud/env/setup-notifications.html) for build/deploy actions in all your environments.

-  **Static content compression**—We now compress static content using [gzip](https://www.gnu.org/software/gzip/) during the build and deploy phases. This compression, coupled with Fastly compression, helps reduce the size of your store and increase deployment speed. If necessary, you can disable compression using a [build option]({{ site.baseurl }}/cloud/env/variables-build.html) or [deploy variable]({{ site.baseurl }}/cloud/env/variables-deploy.html). See the following topics for more information:

   -  [Magento application environment variables]({{ site.baseurl }}/cloud/env/environment-vars_magento.html)
   -  [Static content deployment performance]({{ site.baseurl }}/cloud/live/sens-data-over.html#scd-performance)
   -  [Deployment process]({{ site.baseurl }}/cloud/reference/discover-deploy.html)

-  **Configuration management**—We now auto-generate an `app/etc/config.php` file in your Git repository during the build phase if it does not already exist. The auto-generated file includes only a list of modules and extensions. If the file already exists, the build phase continues as normal. If you follow [Configuration Management]({{ site.baseurl }}/cloud/live/sens-data-over.html) at a later time, the commands update the file without requiring additional steps. Refer to [Deployment process]({{ site.baseurl }}/cloud/reference/discover-deploy.html) for more information.

-  **Database dumps**—We added a `magento/ece-tools` CLI command for creating database dumps in all environments. For Pro plan Production environments, this command only dumps from one of three high-availability nodes, so production data written to a different node during the dump may not be copied. We recommend putting the application in maintenance mode before doing a database dump in Production environments. See [Snapshots and backup management]({{ site.baseurl }}/cloud/project/project-webint-snap.html#db-dump) for more information.

-  **Cron interval limitations lifted**—The default cron interval for all environments provisioned in the us-3, eu-3, and ap-3 regions is 1 minute. The default cron interval in all other regions is 5 minutes for Pro Integration environments and 1 minute for Pro Staging and Production environments. To modify your existing cron jobs, edit your settings in `.magento.app.yaml` or create a support ticket for Production/Staging environments. Refer to [Set up cron jobs]({{ site.baseurl }}/cloud/configure/setup-cron-jobs.html) for more information.

**Resolved issues:**

-  <!-- MAGECLOUD-1327 -->We fixed an issue that was causing long deploy times due to the deploy process invoking the `cache-clean` operation before static content deployment.

-  <!-- MAGECLOUD-1322 -->We fixed an issue causing errors during the static content generation step of deployment on Production environments.

-  <!-- MAGECLOUD-1264 -->We fixed an issue preventing some `magento/ece-tools` commands from logging output to `stderr`.

-  <!-- MAGECLOUD-1242 -->We fixed an issue preventing base URL values in `env.php` from being updated in forked branches.

-  <!-- MAGECLOUD-1171 -->We fixed an issue causing the `magento setup:install` command to add an unsecure prefix (`http://`) to secure base URLs.

-  <!-- MAGECLOUD-1170 -->We fixed an issue preventing patch errors from causing deployment failures.

-  <!-- MAGECLOUD-1152 -->We fixed an issue preventing `{{site.data.var.ct}}` from halting execution and throwing an exception if no patches can be applied.

-  <!-- MAGECLOUD-1138 -->We fixed an issue causing errors when loading the storefront after enabling HTML minification in the Magento Admin.

## v2002.0.4

**Resolved issues:**

-  <!-- MAGECLOUD-1355 -->You can now [manually reset stuck Magento cron jobs](https://support.magento.com/hc/en-us/articles/360033099451) using a CLI command in all environments via SSH access. The deployment process automatically resets cron jobs.

## v2002.0.3

**Resolved issues:**

-  <!--MAGECLOUD-1311-->We fixed an issue that was causing pages to time out because Redis was taking too long to read/write. You can now use the `disable_locking` parameter in Redis configurations to prevent this issue.

## v2002.0.2

**Resolved issues:**

-  <!--MAGECLOUD-1246-->The RabbitMQ configuration process now obtains all required parameters automatically.

## v2002.0.1

**New features:**

-  <!--- MAGECLOUD-1057 -->{{site.data.var.ece}} now supports scopes and [static content deployment strategies]({{ site.baseurl }}/guides/v2.3/config-guide/cli/config-cli-subcommands-static-deploy-strategies.html). We have added the `–s` parameter with a default setting of `quick` for the static content deployment strategy. You can use the environment variable [SCD_STRATEGY]({{ site.baseurl }}/cloud/env/variables-deploy.html) to customize and use these strategies with your build and deploy actions. This variable supports the options `standard`, `quick`, or `compact`. If you select `compact`, we override the `STATIC_CONTENT_THREADS` value with `1`, which can slow deployment, especially in production environments. Not available in 2.1.

-  <!--- MAGECLOUD-1014 & MAGECLOUD-1023 -->We have created a log file on environments to capture and compile build and deploy actions. The file is located in the `var/log/cloud.log` file inside the Magento root application directory.

**Resolved issues:**

-  <!-- MAGECLOUD-919 & MAGECLOUD-1030-->Refactored the `{{site.data.var.ct}}` package to make it compatible with {{site.data.var.ece}} 2.2.0 and higher.

-  <!-- MAGECLOUD-1186-->We fixed an issue that was preventing `{{site.data.var.ct}}` from halting execution and throwing an exception if no patches can be applied.

-  <!-- MAGECLOUD-1047 & MAGECLOUD-1049-->We fixed an issue that was causing exceptions to be thrown when  dependency injection (di) compilation is skipped during builds.

-  <!-- MAGECLOUD-1019-->We fixed an issue that was causing the deploy process to overwrite custom Redis configurations in the `env.php` file.

-  <!--MAGECLOUD-1020-->We fixed an issue that was causing redirect loops due to disabled by default secure admin.

## v2002.0.0

{:.bs-callout-warning}
This package is no longer compatible with other versions of {{site.data.var.ece}} and **should not** be used.

### Initial release

Initial release of `{{site.data.var.ct}}` for {{site.data.var.ece}} 2.2.0.
