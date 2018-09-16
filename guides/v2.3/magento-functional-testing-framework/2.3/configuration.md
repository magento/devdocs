---
group: magento-functional-testing-framework-guide-2_3
title: Configuration
functional_areas:
 - Testing
mftf-release: 2.3.6
redirect_from: /guides/v2.3/magento-functional-testing-framework/2.2/configuration.html
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

The `*.env` file provides additional configuration of the Magento Functional Testing Framework (MFTF).
To run the MFTF on your Magento testing instance, specify the basic configuration values.
For advanced usage, customize the configuration according to your requirements and environment.

## Basic Configuration

These basic configuration values are required and must be set by the user before MFTF can function correctly.

### MAGENTO_BASE_URL

The root URL of the Magento application under test.

Use: required.

Example:

```conf
MAGENTO_BASE_URL=http://magento2.vagrant251
```

### MAGENTO_BACKEND_NAME

The path to the Magento Admin page.

Use: required.

Example:

```conf
MAGENTO_BACKEND_NAME=admin_12346
```

### MAGENTO_ADMIN_USERNAME

The username that tests will use to log in to the Magento Admin page.

Use: required.

Example:

```conf
MAGENTO_ADMIN_USERNAME=admin
```

### MAGENTO_ADMIN_PASSWORD

The password that tests will use to log in to the Magento Admin page.

Use: required.

Example:

```conf
MAGENTO_ADMIN_PASSWORD=1234reTyt%$7
```

## Advanced Configuration

In most cases, these values are not required.
Sensible defaults are in place.
But in case you do need to do some configuration, they are shown here for your reference.

### SELENIUM

The `SELENIUM_*` values form the URL of a custom Selenium server to be run for testing.
An example use case for these would be if you wanted to run your tests against any other external Selenium source instead of your local machine.

Your default Selenium URL:
```
http://127.0.0.1:4444/wd/hub
```

And the default configuration:

```conf
SELENIUM_HOST=127.0.0.1
SELENIUM_PORT=4444
SELENIUM_PROTOCOL=http
SELENIUM_PATH=/wd/hub
```

{:.bs-callout .bs-callout-warning}
Only change or specify `SELENIUM_*` values if you are not running Selenium locally, or if you have changed your Selenium Server configuration.

#### SELENIUM_HOST

Override the default Selenium server host.

Use: Optional.

Example:

```conf
SELENIUM_HOST=user:pass@ondemand.saucelabs.com
```

#### SELENIUM_PORT

Override the default Selenium server port.

Optional.

Example:

```conf
SELENIUM_PORT=443
```

#### SELENIUM_PROTOCOL

Override the default Selenium server protocol.

Use: optional.

Example: 

```conf
SELENIUM_PROTOCOL=https
```

#### SELENIUM_PATH

Override the default Selenium server path.

Use: optional.

Example:

```conf
SELENIUM_PATH=/wd/hub
```

### MAGENTO_RESTAPI

These `MAGENTO_RESTAPI_*` values are optional and can be used in cases when your Magento instance has a different API path than the one in `MAGENTO_BASE_URL`.

```conf
MAGENTO_RESTAPI_SERVER_HOST
MAGENTO_RESTAPI_SERVER_PORT
```

#### MAGENTO_RESTAPI_SERVER_HOST

The protocol and the host of the REST API server path.

Use: optional.
Example: 

```conf
MAGENTO_RESTAPI_SERVER_HOST=http://localhost
```

#### MAGENTO_RESTAPI_SERVER_PORT

The port part of the API path.

Use: optional

Example:

```conf
MAGENTO_RESTAPI_SERVER_PORT=5000
```

### TESTS

These values can be used in cases where you are working locally on both MFTF's implementation code and Magento's test case code.
Use them if you have a more advanced local development setup that involves symlinking the MFTF into the `vendor` directory of the Magento root directory.

```conf
TESTS_BP
FW_BP
TESTS_MODULES_PATH
```

#### TESTS_BP

The path to where MFTF supplementary files are located in the Magento2 codebase.
BP is an acronym for _BasePath_.

Use: optional.

Example:

```conf
TESTS_BP=~/magento2ce/dev/tests/acceptance
```

#### FW_BP

The path to where MFTF exists and from which it is symlinked.
FW_BP is an acronym for _FrameWork BasePath_.

Use: optional.

Example:

```conf
FW_BP=~/magento/magento2-functional-testing-framework
```

#### TESTS_MODULE_PATH

The path to where MFTF modules mirror Magento's modules.

Use: optional.

Example: 

```conf
~/magento2/dev/tests/acceptance/tests/functional/Magento/FunctionalTest
```

### MODULE_WHITELIST

Use for a new module.
When adding a new directory at `Magento/FunctionalTest`, add the directory name to `MODULE_WHITELIST` to enable the MFTF to process it.

Use: optional.

Example:

```conf
MODULE_WHITELIST=Magento_Framework,Magento_ConfigurableProductWishlist,Magento_ConfigurableProductCatalogSearch
```

### MAGENTO_CLI_COMMAND_PATH

Path to the Magento CLI command entry point.

Default: `dev/tests/acceptance/utils/command.php`.
It points to `MAGENTO_BASE_URL` + `dev/tests/acceptance/utils/command.php`

Modify the default value:

- for non-default Magento installation
- when use a subdirectory in the `MAGENTO_BASE_URL`

Use: optional.
Example: `dev/tests/acceptance/utils/command.php`

### BROWSER

Override the default browser performing the tests.

Default: Chrome

Example:

```conf
BROWSER=firefox
```