---
group: mftf
title: Configuration
version: 2.2
github_link: magento-functional-testing-framework/release-2/configuration.md
functional_areas:
 - Testing
mftf-release: 2.1.2
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

The _*.env_ file provides additional configuration of the Magento Functional Testing Framework (MFTF).
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
But in case you do need to do some configuration, they are shown here for your reference.

### SELENIUM

The `SELENIUM_*` values are concatenated together to form the URL of a custom Selenium server to test against.
An example use case for these would be if you wanted to run your tests against any other external Selenium source instead of your local machine.

```config
SELENIUM_HOST
SELENIUM_PORT
SELENIUM_PROTOCOL
SELENIUM_PATH
```

#### SELENIUM_HOST

* Use: Optional
* Description: For overriding the default Selenium server URL.
* Example: `user:pass@ondemand.saucelabs.com`

#### SELENIUM_PORT

* Use: Optional
* Description: For overriding the default Selenium server URL.
* Example: `443`

#### SELENIUM_PROTOCOL

* Use: Optional
* Description: For overriding the default Selenium server URL.
* Example: `https`

#### SELENIUM_PATH

* Use: Optional
* Description: For overriding the default Selenium server URL.
* Example: `/wd/hub`

### MAGENTO_RESTAPI

These `MAGENTO_RESTAPI_*` values are optional and can be used in cases where your Magento instance has a different API path than the standard `MAGENTO_BASE_URL`.

```config
MAGENTO_RESTAPI_SERVER_HOST
MAGENTO_RESTAPI_SERVER_PORT
```

#### MAGENTO_RESTAPI_SERVER_HOST

* Use: Optional
* Description: The protocol and host part of the API path.
* Example: `http://localhost`

#### MAGENTO_RESTAPI_SERVER_PORT

* Use: Optional
* Description: The port part of the API path.
* Example: `5000`

### TESTS

These values can be used in cases where you are working locally on both MFTF's implementation code and Magento's test case code.
Use them if you have a more advanced local development setup involving symlinking MFTF into the `vendor` directory of `magento2`.

```config
TESTS_BP
FW_BP
TESTS_MODULES_PATH
```

#### TESTS_BP

BP is an acronym for BasePath.

* Use: Optional.
* Description: The path to where MFTF supplementary files are located in the Magento2 codebase.
* Example: `~/magento2ce/dev/tests/acceptance`

#### FW_BP

FW_BP is an acronym for FrameWork BasePath.

* Use: Optional.
* Description: The path to where MFTF exists and from which it is symlinked.
* Example: `~/magento/magento2-functional-testing-framework`

#### TESTS_MODULE_PATH

* Use: Optional.
* Description: The path to where MFTF modules mirror Magento's modules.
* Example: `~/magento2ce/dev/tests/acceptance/tests/functional/Magento/FunctionalTest`

### MODULE_WHITELIST

Use the `MODULE_WHITELIST` environment variable if you are working on a new module.
When adding a new directory under `Magento/FunctionalTest`, add the directory name under `MODULE_WHITELIST` to enable the MFTF to process it.