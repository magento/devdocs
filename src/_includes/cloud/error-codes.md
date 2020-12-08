<!--Note: This topic is auto-generated from the https://github.com/magento/ece-tools/blob/e3b13ca023afe324cd93d0caa2fd62d5683b60b9/config/schema.error.yaml source code. To request changes to error code descriptions or suggestions, submit a GitHub issue to the magento/ece-tools repository.-->

## Critical Errors

Critical errors indicate a problem with the {{ site.data.var.ece }} project configuration that causes deployment failure, for example incorrect, unsupported, or missing configuration for required settings. Before you can deploy, you must update the configuration to resolve these errors.

### Build stage

{:.error-table}
| Error code | Build step | Error description (Title) | Suggested action |
| - | - | - | - |
| 2 |  | Cannot write to the `./app/etc/env.php` file | Deployment script cannot make required changes to the `/app/etc/env.php` file. Check your filesystem permissions. |
| 3 |  | Configuration isn't defined in the `schema.yaml` file | Configuration is not defined in the `./vendor/magento/ece-tools/config/schema.yaml` file. Check that the config variable name is correct, and that it is defined. |
| 4 |  | Failed to parse the `.magento.env.yaml` file | The `./.magento.env.yaml` file format is invalid. Use a YAML parser to check the syntax and fix any errors. |
| 5 |  | Unable to read the `.magento.env.yaml` file | Unable to read the `./.magento.env.yaml` file. Check file permissions. |
| 6 |  | Unable to read the `.schema.yaml` file | Unable to read the `./vendor/magento/ece-tools/config/magento.env.yaml` file. Check file permissions and redeploy (`magento-cloud environment:redeploy`). |
| 7 | refresh-modules | Cannot write to the `./app/etc/config.php` file | The deployment script cannot make required changes to the `/app/etc/config.php` file. Check your filesystem permissions. |
| 8 | validate-config | Cannot read the `composer.json` file | Unable to read the `./composer.json` file. Check file permissions. |
| 9 | validate-config | Composer.json is missing required autoload section | Required `autoload` section is missing from the `composer.json` file. Compare the autoload section to the `composer.json` file in the Magento Cloud template, and add the missing configuration. |
| 10 | validate-config | The file `.magento.env.yaml` contains an option that is not declared in the schema, or an option configured with an invalid value or stage | The `./.magento.env.yaml` file contains invalid configuration. Check the error log for detailed info. |
| 11 | refresh-modules | Command failed: `/bin/magento module:enable --all` | Try to run `composer update` locally. Then, commit and push the updated `composer.lock` file. Also check the `cloud.log` for more information. For more detailed command output, add the `VERBOSE_COMMANDS: '-vvv'` option to  the `.magento.env.yaml` file. |
| 12 | apply-patches | Failed to apply patch |  |
| 13 | set-report-dir-nesting-level | Cannot write to the file `/pub/errors/local.xml` |  |
| 14 | copy-sample-data | Failed to copy sample data files |  |
| 15 | compile-di | Command failed: `/bin/magento setup:di:compile` | Check the `cloud.log` for more information. Add `VERBOSE_COMMANDS: '-vvv'` into `.magento.env.yaml` for more detailed command output. |
| 16 | dump-autoload | Command failed: `composer dump-autoload` | The `composer dump-autoload` command failed. Check the `cloud.log` for more information. |
| 17 | run-baler | The command to run `Baler` for Javascript bundling failed | Check the `SCD_USE_BALER` environment variable to verify that the Baler module is configured and enabled for JS bundling. If you do not need the Baler module, set `SCD_USE_BALER: false`. |
| 18 | compress-static-content | Required utility wasn't found (timeout, bash) |  |
| 19 | deploy-static-content | Command `/bin/magento setup:static-content:deploy` failed | Check the `cloud.log` for more information. For more detailed command output, add the `VERBOSE_COMMANDS: '-vvv'` option to  the `.magento.env.yaml` file. |
| 20 | compress-static-content | Static content compression failed | Check the `cloud.log` for more information. |
| 21 | backup-data: static-content | Failed to copy static content into the `init` directory | Check the `cloud.log` for more information. |
| 22 | backup-data: writable-dirs | Failed to copy some writable directories into the `init` directory | Failed to copy writable directories into the `./init` folder. Check your filesystem permissions. |
| 23 |  | Unable to create a logger object |  |
| 24 | backup-data: static-content | Failed to clean the `./init/pub/static/` directory | Failed to clean `./init/pub/static` folder. Check your filesystem permissions. |
| 25 |  | Cannot find the Composer package | If you installed the Magento application version directly from the Magento git repository, verify that the `DEPLOYED_MAGENTO_VERSION_FROM_GIT` environment variable is configured. |
| 26 | validate-config | Remove Magento Braintree module configuration which is no longer supported in Magento 2.4 and later versions. | Support for the Braintree module is no longer included with Magento 2.4.0 and later. Remove the CONFIG__STORES__DEFAULT__PAYMENT__BRAINTREE__CHANNEL variable from the variables section of the .magento.app.yaml file. For Braintree payment support, use an official extension from the Magento Marketplace instead. |

### Deploy stage

{:.error-table}
| Error code | Deploy step | Error description (Title) | Suggested action |
| - | - | - | - |
| 101 | pre-deploy: cache | Incorrect cache configuration (missing port or host) | Cache configuration is missing required parameters `server` or `port`. Check the `cloud.log` for more information. |
| 102 |  | Cannot write to the `./app/etc/env.php` file | Deployment script cannot make required changes to the `/app/etc/env.php` file. Check your filesystem permissions. |
| 103 |  | Configuration isn't defined in the `schema.yaml` file | Configuration is not defined in the `./vendor/magento/ece-tools/config/schema.yaml` file. Check that the config variable name is correct, and that it is defined. |
| 104 |  | Failed to parse the `.magento.env.yaml` file | Configuration is not defined in the `./vendor/magento/ece-tools/config/schema.yaml` file. Check that the config variable name is correct, and that it is defined. |
| 105 |  | Unable to read the `.magento.env.yaml` file | Unable to read the `./.magento.env.yaml` file. Check file permissions. |
| 106 |  | Unable to read the `.schema.yaml` file |  |
| 107 | pre-deploy: clean-redis-cache | Failed to clean the Redis cache | Failed to clean the Redis cache. Check that the Redis cache configuration is correct and that the Redis service is available. See [Setup Redis service](https://devdocs.magento.com/cloud/project/services-redis.html). |
| 108 | pre-deploy: set-production-mode | Command `/bin/magento maintenance:enable` failed | Check the `cloud.log` for more information. For more detailed command output, add the `VERBOSE_COMMANDS: '-vvv'` option to the `.magento.env.yaml` file. |
| 109 | validate-config | Incorrect database configuration | Check that the the `DATABASE_CONFIGURATION` environment variable is configured correctly. |
| 110 | validate-config | Incorrect session configuration | Check that the `SESSION_CONFIGURATION` environment variable is configured correctly. The configuration must contain at least the `save` parameter. |
| 111 | validate-config | Incorrect search configuration | Check that the `SEARCH_CONFIGURATION` environment variable is configured correctly. The configuration must contain at least the `engine` parameter. |
| 112 | validate-config | Incorrect resource configuration | Check that the `RESOURCE_CONFIGURATION` environment variable is configured correctly. The configuration must contain at least `connection` parameter. |
| 113 | validate-config:elasticsuite-integrity | ElasticSuite is installed, but the ElasticSearch service is not available | Check that the `SEARCH_CONFIGURATION` environment variable is configured correctly, and verify that the Elasticsearch service is available. |
| 114 | validate-config:elasticsuite-integrity | ElasticSuite is installed, but another search engine is used | ElasticSuite is installed, but another search engine is configured. Update the `SEARCH_CONFIGURATION` environment variable to enable Elasticsearch, and verify the Elasticsearch service configuration in the `services.yaml` file. |
| 115 |  | Database query execution failed |  |
| 116 | install-update: setup | Command `/bin/magento setup:install` failed | Check the `cloud.log` and `install_upgrade.log` for more information. For more detailed command output, add the `VERBOSE_COMMANDS: '-vvv'` option to the `.magento.env.yaml` file. |
| 117 | install-update: config-import | Command `app:config:import` failed | Check the `cloud.log` for more information. For more detailed command output, add the `VERBOSE_COMMANDS: '-vvv'` option to the `.magento.env.yaml` file. |
| 118 |  | Required utility wasn't found (timeout, bash) |  |
| 119 | install-update: deploy-static-content | Command `/bin/magento setup:static-content:deploy` failed | Check the `cloud.log` for more information. For more detailed command output, add the `VERBOSE_COMMANDS: '-vvv'` option to the `.magento.env.yaml` file. |
| 120 | compress-static-content | Static content compression failed | Check the `cloud.log` for more information. |
| 121 | deploy-static-content:generate | Cannot update the deployed version | Cannot update the `./pub/static/deployed_version.txt` file. Check your filesystem permissions. |
| 122 | clean-static-content | Failed to clean static content files |  |
| 123 | install-update: split-db | Command `/bin/magento setup:db-schema:split` failed | Check the `cloud.log` for more information. For more detailed command output, add the `VERBOSE_COMMANDS: '-vvv'` option to the `.magento.env.yaml` file. |
| 124 | clean-view-preprocessed | Failed to clean the `var/view_preprocessed` folder | Unable to clean the `./var/view_preprocessed` folder. Check your filesystem permissions. |
| 125 | install-update: reset-password | Failed to update the `/var/credentials_email.txt` file | Failed to update the `/var/credentials_email.txt` file. Check your filesystem permissions. |
| 126 | install-update: update | Command `/bin/magento setup:upgrade` failed | Check the `cloud.log` and `install_upgrade.log` for more information. For more detailed command output, add the `VERBOSE_COMMANDS: '-vvv'` option to the `.magento.env.yaml` file. |
| 127 | clean-cache | Command `/bin/magento cache:flush` failed | Check the `cloud.log` for more information. For more detailed command output, add the `VERBOSE_COMMANDS: '-vvv'` option to the `.magento.env.yaml` file. |
| 128 | disable-maintenance-mode | Command `/bin/magento maintenance:disable` failed | Check the `cloud.log` for more information. Add `VERBOSE_COMMANDS: '-vvv'` into `.magento.env.yaml` for more detailed command output. |
| 129 | install-update: reset-password | Unable to read reset password template |  |
| 130 | install-update: cache_type | Command failed: `php ./bin/magento cache:enable` | Command `php ./bin/magento cache:enable` runs only when Magento was installed but `./app/etc/env.php` file was absent or empty at the beginning of the deployment. Check the `cloud.log` for more information. Add `VERBOSE_COMMANDS: '-vvv'` into `.magento.env.yaml` for more detailed command output. |
| 131 | install-update | The `crypt/key`  key value does not exist in the `./app/etc/env.php` file or the `CRYPT_KEY` cloud environment variable | This error occurs if the `./app/etc/env.php` file is not present when Magento deployment begins, or if the `crypt/key` value is undefined. If you migrated the database from another environment, retrieve the crypt key value from that environment. Then, add the value to the [CRYPT_KEY](https://devdocs.magento.com/cloud/env/variables-deploy.html#crypt_key) cloud environment variable in your current environment. See [Add the Magento encryption key](https://devdocs.magento.com/cloud/setup/first-time-setup-import-import.html#encryption-key). If you accidentally removed the `./app/etc/env.php` file, use the following command to restore it from the backup files created from a previous deployment: `./vendor/bin/ece-tools backup:restore` CLI command ." |
| 132 |  | Can not connect to the Elasticsearch service | Check for valid Elasticsearch credentials and verify that the  service is running |
| 133 | validate-config | Remove Magento Braintree module configuration which is no longer supported in Magento 2.4 and later versions. | Support for the Braintree module is no longer included with Magento 2.4.0 and later. Remove the CONFIG__STORES__DEFAULT__PAYMENT__BRAINTREE__CHANNEL variable from the variables section of the .magento.app.yaml file. For Braintree support, use an official Braintree Payments extension from the Magento Marketplace instead. |
| 134 | validate-config | Magento 2.4.0 requires Elasticsearch service to be installed | Install Elasticsearch service |
| 135 | validate-config | The search engine must be set to Elasticsearch for Magento >= 2.4.0 | Check the SEARCH_CONFIGURATION variable for the `engine` option. If it is configured, remove the option, or set the value to "elasticsearch". |

### Post-deploy stage

{:.error-table}
| Error code | Post-deploy step | Error description (Title) | Suggested action |
| - | - | - | - |
| 201 | is-deploy-failed | Deploy stage failed |  |
| 202 |  | The `./app/etc/env.php` file is not writable | Deployment script cannot make required changes to the `/app/etc/env.php` file. Check your filesystem permissions. |
| 203 |  | Configuration isn't defined in the `schema.yaml` file | Configuration is not defined in the `./vendor/magento/ece-tools/config/schema.yaml` file. Check that the config variable name is correct, and that it is defined. |
| 204 |  | Failed to parse the `.magento.env.yaml` file | The `./.magento.env.yaml` file format is invalid. Use a YAML parser to check the syntax and fix any errors. |
| 205 |  | Unable to read the `.magento.env.yaml` file | Check file permissions. |
| 206 |  | Unable to read the `.schema.yaml` file |  |
| 207 | warm-up | Failed to warm-up some pages |  |
| 208 | time-to-firs-byte | Failed to test time to first byte (TTFB) |  |
| 227 | clean-cache | Command `/bin/magento cache:flush` failed | Check the `cloud.log` for more information. Add `VERBOSE_COMMANDS: '-vvv'` into `.magento.env.yaml` for more detailed command output. |

### General

{:.error-table}
| Error code | General step | Error description (Title) | Suggested action |
| - | - | - | - |
| 243 |  | Configuration is not defined in the `schema.yaml` file | Check that the config variable name is correct, and that it defined. |
| 244 |  | Failed to parse the `.magento.env.yaml` file | The `./.magento.env.yaml` file format is invalid. Use a YAML parser to check the syntax and fix any errors. |
| 245 |  | Unable to read the `.magento.env.yaml` file | Unable to read the `./.magento.env.yaml` file. Check file permissions. |
| 246 |  | Unable to read the `.schema.yaml` file |  |

## Warning Errors

Warning errors indicate a problem with the {{ site.data.var.ece }} project configuration such as incorrect, deprecated, unsupported, or missing configuration settings for optional features that can affect site operation. Although a warning does not cause deployment failure, you should review warning messages and update the configuration to resolve them.

### Build stage

{:.error-table}
| Error code | Build step | Error description (Title) | Suggested action |
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
| Error code | Deploy step | Error description (Title) | Suggested action |
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
| 2026 | pre-deploy:restore-writable-dirs | Failed to restore some data generated during the build phase to the mounted directories | Check the `cloud.log` for more information. |
| 2027 | validate-config:mage-mode-variable | Mode value for MAGE_MODE environment variable not supported | Remove the MAGE_MODE environment variable, or change its value to "production". Magento Cloud supports "production" mode only. |

### Post-deploy stage

{:.error-table}
| Error code | Post-deploy step | Error description (Title) | Suggested action |
| - | - | - | - |
| 3001 | validate-config | Debug logging is enabled in Magento | To save disk space, do not enable debug logging for your production environments. |
| 3002 | warm-up | Can not fetch store urls |  |
| 3003 | warm-up | Can not fetch store url |  |
| 3004 | backup | Cannot create backup files |  |

### General

{:.error-table}
| Error code | General step | Error description (Title) | Suggested action |
| - | - | - | - |
| 4001 |  | Can not get system processor count: |  |

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
