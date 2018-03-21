---
layout: default
group: mftf
title: Configuration
version: 2.2
github_link: magento-functional-testing-framework/release-2/configuration.md
functional_areas:
 - Testing
mftf-release: 2.1.2
---

# .env file

The .env file provides additional configuration of MFTF. All MFTF users will need to set the basic configuration values. Advanced users may need to set additional values to work with their environment.

## Basic Configuration

These basic configuration values are required and must be set by the user before MFTF can function correctly.

### MAGENTO_BASE_URL
Required. The root URL of the Magento application under test. Example: http://magento2.vagrant251

### MAGENTO_BACKEND_NAME
Required. The path to the Magento Admin page. Usually just **admin**.

### MAGENTO_ADMIN_USERNAME
Required. The username that tests will use to log in to the Magento Admin page. Example: admin

### MAGENTO_ADMIN_PASSWORD
Required. The password that tests will use to log in to the Magento Admin page. Example: 123123q

## Advanced Configuration

In most cases, these values are not required. Sensible defaults are in place. But in case you do need to configure, here they are.

```
SELENIUM_HOST
SELENIUM_PORT
SELENIUM_PROTOCOL
SELENIUM_PATH
```

Optional. The `SELENIUM_*` values are concatenated together to form the URL of a custom Selenium server to test against. An example use for these would be in case you wanted to run your tests against Saucelabs or any other external Selenium source instead of your local machine.

```
MAGENTO_RESTAPI_SERVER_HOST
MAGENTO_RESTAPI_SERVER_PORT
```

Optional. These `MAGENTO_RESTAPI_*` values can be used in cases where your Magento instance has a different API path than the standard `MAGENTO_BASE_URL`.

```
TESTS_BP
FW_BP
TESTS_MODULES_PATH
```

Optional. These values can be used in cases where you are working locally on both MFTF's implementation code and Magento's test case code. In other words, if you have a more advanced local development setup probably involving symlinking MFTF into the vendor folder of magento2ce.

### MODULE_WHITELIST

The `MODULE_WHITELIST` env variable can be used if you are working on a new module. When adding a new directory under `Magento/FunctionalTest`, you must add the directory name to `MODULE_WHITELIST` or MFTF will not see it.