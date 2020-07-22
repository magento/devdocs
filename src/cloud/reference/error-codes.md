---
group: cloud-guide
title: Error message reference for ece-tools
functional_areas:
  - Cloud
  - Deploy
  - Configuration
---

{% assign suggestions = site.data.codebase.cloud.cloud-error-messages %}

This {{ site.data.var.ct }} error message reference provides information to troubleshoot errors that can occur during the {{site.data.var.ece }} deployment process.

All error and warning messages generated during deployment are written to both the `var/log/cloud.log` and `/var/log/cloud.error.log` files. The Cloud error log file contains only errors and warnings from the latest deployment. An empty file indicates a successful deployment with no errors.

Error messages are categorized by deployment stage–*build*, *deploy*, and *post-deploy*. Each section provides a list of associated errors with the following information for each error:

-  **Error code**:  The Magento-assigned identifier for the error message
-  **Step**:  Indicates the step in the deployment scenario where the error can occur. If the _Step_ column is blank, the error is a general error that can occur in multiple steps, or during pre-processing operations. See [Scenario-based deployment]({{ site.baseurl }}/cloud/deploy/scenario-based-deployment.html) for more information about the build, deploy, and post-deploy steps.
-  **Error description**: A short phrase that summarizes the cause of the error
-  **Suggested action**: Provides guidance to troubleshoot and resolve the error

## Build stage

{:.error-table}
| Error code | Build step | Error description | Suggested action |
| ---------- | ---------- | ----------------- | ---------------- |
| 2 | | Cannot write to the `./app/etc/env.php` file | {{ suggestions.ENV_PHP_IS_NOT_WRITABLE }}|
| 3 | | Configuration isn't defined in the `schema.yaml` file | {{ suggestions.CONFIG_NOT_DEFINED }}|
| 4 | | Failed to parse the `.magento.env.yaml` file | {{ suggestions.CONFIG_PARSE_FAILED }}|
| 5 | | Unable to read the `.magento.env.yaml` file | {{ suggestions.CONFIG_UNABLE_TO_READ }}|
| 6 | | Unable to read the `.schema.yaml` file | |
| 7 | refresh-modules | Cannot write to the `./app/etc/config.php` file |{{ suggestions.CONFIG_PHP_IS_NOT_WRITABLE }} |
| 8 | validate-config | Cannot read the `composer.json` file |{{ suggestions.CANT_READ_COMPOSER_JSON }} |
| 9 | validate-config | Composer.json is missing required autoload section | {{ suggestions.COMPOSER_MISSED_REQUIRED_AUTOLOAD }} |
| 10 | validate-config | The file `.magento.env.yaml` contains an option which isn't declared in the schema, or has an invalid value or stage | {{ suggestions.WRONG_CONFIGURATION_MAGENTO_ENV_YAML }}|
| 11 | refresh-modules | Command `/bin/magento module:enable --all` failed | {{ suggestions.CLOUD_LOG_VERBOSE_ACTION }} |
| 12 | apply-patches | Failed to apply patch | |
| 13 | set-report-dir-nesting-level | Cannot write to the file `/pub/errors/local.xml` | |
| 14 | copy-sample-data | Failed to copy sample data files | |
| 15 | compile-di | Command `/bin/magento setup:di:compile` failed | {{ suggestions.CLOUD_LOG_VERBOSE_ACTION }} |
| 16 | dump-autoload | Command `composer dump-autoload` failed | {{ suggestions.COMPOSER_DUMP_AUTOLOAD_FAILED }} |
| 17 | run-baler | The command to run `Baler` for Javascript bundling failed | {{ suggestions.BALER_NOT_FOUND }} |
| 18 | compress-static-content | Required utility wasn't found (timeout, bash) | {{ suggestions.UTILITY_NOT_FOUND }} |
| 19 | deploy-static-content | Command `/bin/magento setup:static-content:deploy` failed | {{ suggestions.CLOUD_LOG_VERBOSE_ACTION }} |
| 20 | compress-static-content | Static content compression failed | {{ suggestions.CHECK_CLOUD_LOG_ACTION }} |
| 21 | backup-data: static-content | Failed to copy static content into the `init` directory | {{ suggestions.CHECK_CLOUD_LOG_ACTION }} |
| 22 | backup-data: writable-dirs | Failed to copy some writable directories into the `init` directory | {{ suggestions.WRITABLE_DIRECTORY_COPYING_FAILED }} |
| 23 | | Unable to create a logger object | |
| 24 | backup-data: static-content | Failed to clean the `./init/pub/static/` directory | {{ suggestions.CLEAN_INIT_PUB_STATIC_FAILED }} |
| 25 | | Cannot find the Composer package | {{ suggestions.COMPOSER_PACKAGE_NOT_FOUND }} |

## Deploy stage

{:.error-table}
| Error code | Deploy step | Error description | Suggested action |
| --- | --- | --- | -- |
| 101 | pre-deploy: cache | Incorrect cache configuration (missing port or host) | {{ suggestions.WRONG_CACHE_CONFIGURATION }} |
| 102 | | Cannot write to the `./app/etc/env.php` file | {{ suggestions.ENV_PHP_IS_NOT_WRITABLE }} |
| 103 | | Configuration isn't defined in the `schema.yaml` file  | {{ suggestions.CONFIG_NOT_DEFINED }} |
| 104 | | Failed to parse the `.magento.env.yaml` file | {{ suggestions.CONFIG_NOT_DEFINED }} |
| 105 | | Unable to read the `.magento.env.yaml` file | {{ suggestions.CONFIG_UNABLE_TO_READ }} |
| 106 | | Unable to read the `.schema.yaml` file | |
| 107 | pre-deploy: clean-redis-cache | Failed to clean the Redis cache | {{ suggestions.REDIS_CACHE_CLEAN_FAILED }}. |
| 108 | pre-deploy: set-production-mode | Command `/bin/magento maintenance:enable` failed | {{ suggestions.CLOUD_LOG_VERBOSE_ACTION }} |
| 109 | validate-config | Incorrect database configuration | {{ suggestions.WRONG_CONFIGURATION_DB }} |
| 110 | validate-config | Incorrect session configuration | {{ suggestions.WRONG_CONFIGURATION_SESSION }} |
| 111 | validate-config | Incorrect search configuration | {{ suggestions.WRONG_CONFIGURATION_SEARCH }} |
| 112 | validate-config | Incorrect resource configuration | {{ suggestions.WRONG_CONFIGURATION_RESOURCE }} |
| 113 | validate-config:elasticsuite-integrity | ElasticSuite is installed, but the ElasticSearch service is not available | {{ suggestions.ELASTIC_SUITE_WITHOUT_ES }} |
| 114 | validate-config:elasticsuite-integrity | ElasticSuite is installed, but another search engine is used | {{ suggestions.ELASTIC_SUITE_WRONG_ENGINE }} |
| 115 |  | Database query execution failed | |
| 116 | install-update: setup | Command `/bin/magento setup:install` failed | {{ suggestions.INSTALL_UPGRADE_ACTION }} |
| 117 | install-update: config-import | Command `app:config:import` failed | {{ suggestions.CLOUD_LOG_VERBOSE_ACTION }} |
| 118 |  | Required utility wasn't found (timeout, bash) | {{ suggestions.UTILITY_NOT_FOUND }} |
| 119 | install-update: deploy-static-content | Command `/bin/magento setup:static-content:deploy` failed | {{ suggestions.CLOUD_LOG_VERBOSE_ACTION }} |
| 120 | compress-static-content | Static content compression failed | {{ suggestions.CHECK_CLOUD_LOG_ACTION }} |
| 121 | deploy-static-content:generate | Cannot update the deployed version | {{ suggestions.SCD_UNABLE_UPDATE_VERSION }} |
| 122 | clean-static-content | Failed to clean static content files | |
| 123 | install-update: split-db | Command `/bin/magento setup:db-schema:split` failed | {{ suggestions.CLOUD_LOG_VERBOSE_ACTION }} |
| 124 | clean-view-preprocessed | Failed to clean the `var/view_preprocessed` folder | {{ suggestions.VIEW_PREPROCESSED_CLEAN_FAILED }} |
| 125 | install-update: reset-password | Failed to update the `/var/credentials_email.txt` file | {{ suggestions.FILE_CREDENTIALS_EMAIL_NOT_WRITABLE }} |
| 126 | install-update: update | Command `/bin/magento setup:upgrade` failed | {{ suggestions.INSTALL_UPGRADE_ACTION }} |
| 127 | clean-cache | Command `/bin/magento cache:flush` failed | {{ suggestions.CLOUD_LOG_VERBOSE_ACTION }} |
| 128 | disable-maintenance-mode | Command `/bin/magento maintenance:disable` failed | {{ suggestions.CLOUD_LOG_VERBOSE_ACTION }} |
| 129 | install-update: reset-password | Enable to read reset password template | |
| 130 | install-update: cache_type | Command `php ./bin/magento cache:enable` failed. | {{ suggestions.CACHE_ENABLE_FAILED }} |
| 131 | install-update | The `crypt/key`  key value does not exist in the `./app/etc/env.php` file or the `CRYPT_KEY` cloud environment variable | {{ suggestions.CRYPT_KEY_IS_ABSENT }} |

## Post-deploy stage

{:.error-table}
| Error code | Post-deploy step | Error description | Suggested action |
| --- | --- | --- | -- |
| 201 | is-deploy-failed | Deploy stage failed | |
| 202 |  | The `./app/etc/env.php` file is not writable | {{ suggestions.ENV_PHP_IS_NOT_WRITABLE }} |
| 203 |  | Configuration isn't defined in the `schema.yaml` file | {{ suggestions.CONFIG_NOT_DEFINED }} |
| 204 |  | Failed to parse the `.magento.env.yaml` file | {{ suggestions.CONFIG_PARSE_FAILED }} |
| 205 |  | Unable to read the `.magento.env.yaml` file | {{ suggestions.CONFIG_UNABLE_TO_READ }} |
| 206 |  | Unable to read the `.schema.yaml` file | |
| 207 | warm-up | Failed to warm-up some pages | |
| 208 | time-to-firs-byte | Failed to test time to first byte (TTFB) | |
| 227 | clean-cache | Command `/bin/magento cache:flush` failed | {{ suggestions.CLOUD_LOG_VERBOSE_ACTION }} |

<!--Link definitions-->

[Scenario-based deployment]: {{site.baseurl }}/cloud/deploy/scenario-based-deployment.html

<!--Custom css-->

<!--
  This is a style declaration so that first column does not wrap
-->

<style>
table.error-table td:nth-child(1) {
  width: 100px;
}
table.error-table td:nth-child(2) {
  width: 200px;
}
</style>
