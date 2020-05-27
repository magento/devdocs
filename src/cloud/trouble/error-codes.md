---
group: cloud-guide
title: Ece-tools error codes
---

This page helps you to detect the problem in case of failed deployment process.

List of possible errors:

### Build stage

| Step | Description | Error code |
| --- | --- | --- |
| general | File `./app/etc/env.php` is not writable | [2](#ENV_PHP_IS_NOT_WRITABLE) |
| | Configuration isn't defined in schema.yaml | [3](#CONFIG_NOT_DEFINED) |
| | Failed to parse .magento.env.yaml | 4 |
| | Unable to read .magento.env.yaml | 5 |
| | Unable to read .schema.yaml | 6 |
| refresh-modules | File `./app/etc/config.php` is not writable | 7 |
| validate-config | Unable to read composer.json | 8 |
| | Composer.json missed required autolad section | 9 |
| | The file `.magento.env.yaml` contains an option which isn't declared in schema, or have invalid value or stage | 10 |
| refresh-modules | Command `/bin/magento module:enable --all` failed | 11 |
| apply-patches | Patch applying failed | 12 |
| set-report-dir-nesting-level | Can't write to the file /pub/errors/local.xml | 13 |
| copy-sample-data | Failed to copy sample data files | 14 |
| compile-di | Command `/bin/magento setup:di:compile` failed | 15 |
| dump-autoload | Command `composer dump-autoload` failed | 16 |
| run-baler | `Baler` command failed  for Javascript bundling | 17 |
| compress-static-content | Required utility wasn't found (timeout, bash) | 18 |
| deploy-static-content | Command `/bin/magento setup:static-content:deploy` failed | 19 |
| compress-static-content | Compression of static content failed | 20 | 
| backup-data: static-content | Failed to copy static content into `init` directory | 21 |
| backup-data: static-content | Failed to clean `./init/pub/static/` directory | 24 |
| backup-data: writable-dirs | Failed to copy some writable directories into `init` directory | 22 |
| general | Unable to create a logger object | 23 |
| | Cannot find Composer package | 25 |

### Deploy stage

| Step | Description | Error code |
| --- | --- | --- |
| pre-deploy: cache | Wrong cache configuration (missing port or host) | 101 |
| general | File `./app/etc/env.php` is not writable | 102 |
| | Configuration isn't defined in schema.yaml | [103](#CONFIG_NOT_DEFINED) |
| | Failed to parse `.magento.env.yaml` file | 104 |
| | Unable to read the `.magento.env.yaml` file | 105 |
| | Unable to read .schema.yaml | 106 |
| pre-deploy: clean-redis-cache | Failed to clean redis cache | 107 |
| pre-deploy: set-production-mode | Command `/bin/magento maintenance:enable` failed | 108 |
| validate-config | Wrong database configuration | 109 |
| | Wrong session configuration | 110 |
| | Wrong search configuration | 111 |
| | Wrong resource configuration | 112 |
| validate-config:elasticsuite-integrity | ElasticSuite is installed, but Elasticsearch service configuration is not available | 113 |
| | ElasticSuite is installed but another search engine is used | 114 |
| general | Database query execution failed | 115 |
| install-update: setup | Command `/bin/magento setup:install` failed | 116 |
| install-update: config-import | Command `app:config:import` failed | 117 |
| general | Required utility wasn't found (timeout, bash) | 118 |
| install-update: deploy-static-content	 | Command `/bin/magento setup:static-content:deploy` failed | 119 |
| compress-static-content | Failed to compress static content | 120 |
| deploy-static-content:generate | Cannot update deployed version | 121 |
| clean-static-content | Failed to clean static content files | 122 |
| install-update: split-db | Command `/bin/magento setup:db-schema:split` failed | 123 |
| clean-view-preprocessed | Failed to clean the `var/view_preprocessed` folder | 124 |
| install-update: reset-password | Failed to update `/var/credentials_email.txt` file | 125 |
| install-update: update | Command `/bin/magento setup:upgrade` failed | 126 |
| clean-cache | Command `/bin/magento cache:flush` failed | 127 |
| disable-maintenance-mode | Command `/bin/magento maintenance:disable` failed | 128 | 
| install-update: reset-password | Enable to read reset password template | 129 |

### Post-deploy stage

| Step | Description | Error code |
| --- | --- | --- |  
| is-deploy-failed | Deploy stage failed If deploy stage failed | 201 |
| general |  The `./app/etc/env.php` file is not writable | 202 |
| | Configuration isn't defined in schema.yaml | 203 |
| | Failed to parse .magento.env.yaml | 204 |
| | Unable to read .magento.env.yaml | 205 |
| | Unable to read .schema.yaml | 206 |
| warm-up | Failed to warm-up some pages | 207 |
| time-to-firs-byte | Failed to test time to first byte (TTFB) | 208 |
| clean-cache | Command `/bin/magento cache:flush` failed | 227 |

## Errors suggestion

##### ENV_PHP_IS_NOT_WRITABLE
Deployment script can't make required changes to the `/app/etc/env.php` file. Check your filesystem permissions.

##### CONFIG_NOT_DEFINED
Configuration isn't defined in the `./vendor/magento/ece-tools/config/schema.yaml` file. Check that config variable name is correct and it's defined.

##### CONFIG_PARSE_FAILED
The `./.magento.env.yaml` file format is invalid. Format the file according to YAML standards.

##### CONFIG_UNABLE_TO_READ
Unable to read `./.magento.env.yaml` file. Check file permissions.

##### CONFIG_PHP_IS_NOT_WRITABLE
Deployment script can't make required changes to the `/app/etc/config.php` file. Check your filesystem permissions.

##### CANT_READ_COMPOSER_JSON
Unable to read `./composer.json` file. Check file permissions.

##### COMPOSER_MISSED_REQUIRED_AUTOLOAD
Required `autoload` section is missing from the `composer.json` file. Compare the autoload section from the Magento `composer.json` file template, and add the missing configuration.

##### WRONG_CONFIGURATION_MAGENTO_ENV_YAML
The `./.magento.env.yaml` file contains invalid configuration settings. Check the error log for detailed information.

##### MODULE_ENABLE_COMMAND_FAILED
Check `cloud.log` for more information. Add `VERBOSE_COMMANDS: '-vvv'` into `.magento.env.yaml` for more detailed command output.

##### COMPOSER_DUMP_AUTOLOAD_FAILED
The `composer dump-autoload` command failed. Check `cloud.log` for more information.

##### BALER_NOT_FOUND
Check the `SCD_USE_BALER` environment variable to verify that the Baler module is configured and enabled for JS bundling. If you don't want to use the Baler module, set `SCD_USE_BALER: false`.

##### UTILITY_NOT_FOUND
One of required utilities was not found on server. Check `cloud.log` for more information and install required utility.

##### SCD_FAILED
Check `cloud.log` for more information. Add `VERBOSE_COMMANDS: '-vvv'` into `.magento.env.yaml` for more detailed command output.

##### SCD_COMPRESSION_FAILED
Check the `cloud.log` for more information.

##### SCD_COPYING_FAILED
Check the `cloud.log` for more information.

##### WRITABLE_DIRECTORY_COPYING_FAILED
Failed to copy writable directories into `./init` folder. Check your filesystem permissions.

##### CLEAN_INIT_PUB_STATIC_FAILED
Failed to clean `./init/pub/static` folder. Check your filesystem permissions.

##### COMPOSER_PACKAGE_NOT_FOUND
Check `cloud.log` for more information.
If you installed the Magento application version directly from the Magento git repository,  verify that the `DEPLOYED_MAGENTO_VERSION_FROM_GIT` environment variable is configured.

##### WRONG_CACHE_CONFIGURATION
Cache configuration is missing required `server` or `port` parameters. Check the `cloud.log` for more information.

##### REDIS_CACHE_CLEAN_FAILED
Failed to clean redis cache. Check that the redis cache configuration is correct and that the redis service is available. See [Setup Redis service]({{ site.baseurl}}/cloud/project/project-conf-files_services-redis.html).

##### MAINTENANCE_MODE_ENABLING_FAILED
Check `cloud.log` for more information. Add `VERBOSE_COMMANDS: '-vvv'` into `.magento.env.yaml` for more detailed command output.

##### WRONG_CONFIGURATION_DB
Check that the `DATABASE_CONFIGURATION` variable is configured correctly.

##### WRONG_CONFIGURATION_SESSION
Check that `SESSION_CONFIGURATION` environment variable is configured correctly. The configuration must contain at least the `save` parameter.

##### WRONG_CONFIGURATION_SEARCH
Check that the `SEARCH_CONFIGURATION` environment variable is configured properly. The configuration must contain at least the `engine` parameter.

##### WRONG_CONFIGURATION_RESOURCE
Check that the `RESOURCE_CONFIGURATION` environment variable is configured properly. The configuration must contain at least the `connection` parameter.

##### ELASTIC_SUITE_WITHOUT_ES
ElasticSuite is installed, but the Elasticsearch service is not available. Check that the `SEARCH_CONFIGURATION` environment variable is configured correctly, and verify that the Elasticsearch service is available.

##### ELASTIC_SUITE_WRONG_ENGINE
ElasticSuite is installed, but another search engine is configured. Update the `SEARCH_CONFIGURATION` environment variable to enable Elasticsearch and verify the Elasticsearch service configuration in the `services.yaml` file.

##### INSTALL_COMMAND_FAILED
Check `cloud.log` and `install_upgrade.log` for more information. Add `VERBOSE_COMMANDS: '-vvv'` into `.magento.env.yaml` for more detailed command output.

##### UPGRADE_COMMAND_FAILED
Check `cloud.log` and `install_upgrade.log` for more information. Add `VERBOSE_COMMANDS: '-vvv'` into `.magento.env.yaml` for more detailed command output.

##### CONFIG_IMPORT_COMMAND_FAILED
Check `cloud.log` for more information. Add `VERBOSE_COMMANDS: '-vvv'` into `.magento.env.yaml` for more detailed command output.

##### SCD_UNABLE_UPDATE_VERSION
Cannot update `./pub/static/deployed_version.txt` file. Check your filesystem permissions.

##### SPLIT_DB_COMMAND_FAILED
Check `cloud.log` for more information. Add `VERBOSE_COMMANDS: '-vvv'` into `.magento.env.yaml` for more detailed command output.

##### VIEW_PREPROCESSED_CLEAN_FAILED
Unable to clean `./var/view_preprocessed` folder. Check your filesystem permissions.

##### FILE_CREDENTIALS_EMAIL_NOT_WRITABLE
Failed to update `/var/credentials_email.txt` file. Check your filesystem permissions.

##### CACHE_FLUSH_COMMAND_FAILED
Check `cloud.log` for more information. Add `VERBOSE_COMMANDS: '-vvv'` into `.magento.env.yaml` for more detailed command output.
