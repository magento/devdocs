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

The _*.env_ file provides additional configuration of the MFTF.
All MFTF users will need to set the basic configuration values.
Advanced users may need to set additional values to work with their environment.

## Basic Configuration

These basic configuration values are required and must be set by the user before MFTF can function correctly.

### MAGENTO_BASE_URL

* Use: Required.
* Description: The root URL of the Magento application under test.
* Example: `http://magento2.vagrant251`

### MAGENTO_BACKEND_NAME

* Use: Required.
* Description: The path to the Magento Admin page.
* Example: `admin_12346`.

### MAGENTO_ADMIN_USERNAME

* Use: Required.
* Description: The username that tests will use to log in to the Magento Admin page.
* Example: `admin`.

### MAGENTO_ADMIN_PASSWORD

* Use: Required.
* Description: The password that tests will use to log in to the Magento Admin page.
* Example: `1234reTyt%$7`

## Advanced Configuration

In most cases, these values are not required.
Sensible defaults are in place.
But in case you do need to configure, here they are.

### SELENIUM

Optional.
The `SELENIUM_*` values are concatenated together to form the URL of a custom Selenium server to test against.
An example use for these would be in case you wanted to run your tests against Saucelabs or any other external Selenium source instead of your local machine.

```config
SELENIUM_HOST
SELENIUM_PORT
SELENIUM_PROTOCOL
SELENIUM_PATH
```

#### SELENIUM_HOST

* Use:
* Description:
* Example: ``

#### SELENIUM_PORT

* Use:
* Description:
* Example: ``

#### SELENIUM_PROTOCOL

* Use:
* Description:
* Example: ``

#### SELENIUM_PATH

* Use:
* Description:
* Example: ``

### MAGENTO_RESTAPI

Optional.
These `MAGENTO_RESTAPI_*` values can be used in cases where your Magento instance has a different API path than the standard `MAGENTO_BASE_URL`.

```config
MAGENTO_RESTAPI_SERVER_HOST
MAGENTO_RESTAPI_SERVER_PORT
```

#### MAGENTO_RESTAPI_SERVER_HOST

* Use:
* Description:
* Example: ``

#### MAGENTO_RESTAPI_SERVER_PORT

* Use:
* Description:
* Example: ``

### TESTS

Optional.
These values can be used in cases where you are working locally on both MFTF's implementation code and Magento's test case code.
In other words, if you have a more advanced local development setup probably involving symlinking MFTF into the `vendor` directory of `magento2`.

```config
TESTS_BP
FW_BP
TESTS_MODULES_PATH
```

#### TESTS_BP

* Use:
* Description:
* Example: ``

#### FW_BP

* Use:
* Description:
* Example: ``

#### TESTS_MODULES_PATH

* Use:
* Description:
* Example: ``

### MODULE_WHITELIST

The `MODULE_WHITELIST` environment variable can be used if you are working on a new module.
When adding a new directory under `Magento/FunctionalTest`, you must add the directory name to `MODULE_WHITELIST` or MFTF will not see it.