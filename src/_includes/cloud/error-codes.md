## Critical Errors


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

### General

{:.error-table}
| Error code | General step | Error description | Suggested action |
| - | - | - | - |
| 243 |  | Configuration is not defined in the `schema.yaml` file | Check that the config variable name is correct, and that it defined. |
| 244 |  | Failed to parse the `.magento.env.yaml` file | The `./.magento.env.yaml` file format is invalid. Use a YAML parser to check the syntax and fix any errors. |
| 245 |  | Unable to read the `.magento.env.yaml` file | Unable to read the `./.magento.env.yaml` file. Check file permissions. |
| 246 |  | Unable to read the `.schema.yaml` file |  |


## Warning Errors


### Build stage

{:.error-table}
| Error code | Build step | Error description | Suggested action |
| - | - | - | - |
| 1001 | validate-config | File app/etc/config.php does not exist |  |
| 1002 | validate-config | The ./build_options.ini file is no longer supported |  |
| 1003 | validate-config | The modules section is missing from the shared config file |  |
| 1004 | validate-config | The configuration is not compatible with this version of Magento |  |
| 1005 | validate-config | SCD options ignored |  |
| 1006 | validate-config | The configured state is not ideal |  |
| 1007 | run-baler | Baler JS bundling cannot be used |  |

### Deploy stage

{:.error-table}
| Error code | Deploy step | Error description | Suggested action |
| - | - | - | - |
| 2001 | pre-deploy:cache | Cache is configured for a Redis service that is not available. Configuration will be ignored. |  |
| 2002 | validate-config | The configured state is not ideal |  |
| 2003 | validate-config | The directory nesting level value for error reporting has not been configured |  |
| 2004 | validate-config | Invalid configuration in the ./pub/errors/local.xml file. |  |
| 2005 | validate-config | Admin data is used to create an admin user during initial installation only. Any changes to Admin data are ignored during the upgrade process. | After the initial installation, you can remove admin data from the configuration. |
| 2006 | validate-config | Admin user was not created as admin email was not set | After installation, you can create an admin user manually:  Use ssh to connect to your environment. Then, run the `bin/magento admin:user:create` command. |
| 2007 | validate-config | Update php version to recommended version |  |
| 2008 | validate-config | Solr support has been deprecated in Magento 2.1. |  |
| 2009 | validate-config | Solr is no longer supported by Magento 2.2 or later. |  |
| 2010 | validate-config | Elasticsearch service is installed at infrastructure layer, but it is not used as a search engine. | Consider removing the Elasticsearch service from the infrastructure layer to optimize resource usage. |
| 2011 | validate-config | Elasticsearch service version on infrastructure layer is not compatible with current version of the elasticsearch/elasticsearch module, used by your Magento application. |  |
| 2012 | validate-config | The current configuration is not compatible with this version of Magento |  |
| 2013 | validate-config | SCD options ignored because the deploy process did not run on the build phase |  |
| 2014 | validate-config | The configuration contains deprecated variables or values |  |
| 2015 | validate-config | Environment configuration is not valid |  |
| 2016 | validate-config | JSON type configuration can not be decoded |  |
| 2017 | validate-config | The current configuration is not compatible with this version of Magento |  |
| 2018 | validate-config | Some services have passed EOL |  |
| 2019 | validate-config | The MySQL search configuration option is deprecated | Use Elasticsearch instead. |
| 2020 | install-update | Magento installation completed, but the `app/etc/env.php` configuration file was missing or empty. | Required data will be restored from environment configurations and from .magento.env.yaml file. |
| 2021 | install-update:db-connection | For split databases used custom connections |  |
| 2022 | install-update:db-connection | You have changed to a database configuration that is not compatible with the slave connection. |  |
| 2023 | install-update:split-db | Enabling a split database will be skipped. |  |
| 2024 | install-update:split-db | The SPLIT_DB variable is missing the configuration for split connection types. |  |
| 2025 | install-update:split-db | Slave connection not set. |  |
| 2026 | pre-deploy:restore-writable-dirs | Restoring of some generated data from Build phase to mounted directories was failed. | Check the `cloud.log` for more information. |

### Post-deploy stage

{:.error-table}
| Error code | Post-deploy step | Error description | Suggested action |
| - | - | - | - |
| 3001 | validate-config | Debug logging is enabled in Magento | To save disk space, do not enable debug logging for your production environments. |
| 3002 | warm-up | Can not fetch store urls |  |
| 3003 | warm-up | Can not fetch store url |  |
| 3004 | backup | Cannot create backup files |  |

### General

{:.error-table}
| Error code | General step | Error description | Suggested action |
| - | - | - | - |
| 4001 |  | Can not get system processor count: |  |

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
