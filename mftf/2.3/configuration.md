---
mftf-release: 2.3.7
redirect_from: /guides/v2.3/magento-functional-testing-framework/2.3/configuration.html
---

# Configuration

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

The `*.env` file provides additional configuration for the Magento Functional Testing Framework (MFTF).
To run the MFTF on your Magento testing instance, specify the basic configuration values.
Advanced users can create custom configurations based on requirements and environment.

## Basic configuration

These basic configuration values are __required__ and must be set by the user before the MFTF can function correctly.

### MAGENTO_BASE_URL

The root URL of the Magento application under test.

Example:

```conf
MAGENTO_BASE_URL=http://magento2.vagrant251
```

{: .bs-callout .bs-callout-info }
If the `MAGENTO_BASE_URL` contains a subdirectory (like `http://magento.test/magento2ce`), specify [`MAGENTO_CLI_COMMAND_PATH`][].

### MAGENTO_BACKEND_NAME

The path to the Magento Admin page.

Example:

```conf
MAGENTO_BACKEND_NAME=admin_12346
```

### MAGENTO_ADMIN_USERNAME

The username that tests can use to access the Magento Admin page

Example:

```conf
MAGENTO_ADMIN_USERNAME=admin
```

### MAGENTO_ADMIN_PASSWORD

The password that tests will use to log in to the Magento Admin page.

Example:

```conf
MAGENTO_ADMIN_PASSWORD=1234reTyt%$7
```

## Advanced configuration

Depending on the environment you use, you may need to configure the MFTF more precisely by setting more configuration parameters then for basic configuration.
This section describes available configuration parameters and their default values (where applicable).

### DEFAULT_TIMEZONE

Sets a default value for the `timezone` attribute of a [`generateDate` action][generateDate].
This value is applied when a test step does not specify a time zone.
For the complete list of available time zones, refer to [List of Supported Timezones][timezones].

Default: `America/Los_Angeles`.

Example:

```conf
DEFAULT_TIMEZONE=UTC
```

### SELENIUM

The `SELENIUM_*` values form the URL of a custom Selenium server for running testing.

Default Selenium URL: `http://127.0.0.1:4444/wd/hub`

And the default configuration:

```conf
SELENIUM_HOST=127.0.0.1
SELENIUM_PORT=4444
SELENIUM_PROTOCOL=http
SELENIUM_PATH=/wd/hub
```

{:.bs-callout .bs-callout-warning}
`SELENIUM_*` values are required if you are running Selenium on an external system.
If you change the configuration of the external Selenium server, you must update these values.

#### SELENIUM_HOST

Override the default Selenium server host.

Example:

```conf
SELENIUM_HOST=user:pass@ondemand.saucelabs.com
```

#### SELENIUM_PORT

Override the default Selenium server port.

Example:

```conf
SELENIUM_PORT=443
```

#### SELENIUM_PROTOCOL

Override the default Selenium server protocol.

Example:

```conf
SELENIUM_PROTOCOL=https
```

#### SELENIUM_PATH

Override the default Selenium server path.

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

Example:

```conf
MAGENTO_RESTAPI_SERVER_HOST=http://localhost
```

#### MAGENTO_RESTAPI_SERVER_PORT

The port part of the API path.

Example:

```conf
MAGENTO_RESTAPI_SERVER_PORT=5000
```

### *_BP

Settings to override base paths for the framework.
You can use it when the MFTF is applied as a separate tool.
For example, when you need to place the MFTF and the Magento codebase in separate projects.

```conf
MAGENTO_BP
TESTS_BP
FW_BP
TESTS_MODULES_PATH
```

#### MAGENTO_BP

The path to a local Magento codebase.
It enables the [`bin/mftf`][mftf] commands such as `run` and `generate` to parse all modules of the Magento codebase for MFTF tests.

```conf
MAGENTO_BP=~/magento2/
```

#### TESTS_BP

BP is an acronym for _Base Path_.
The path to where MFTF supplementary files are located in the Magento codebase.

Example:

```conf
TESTS_BP=~/magento2ce/dev/tests/acceptance
```

#### FW_BP

The path to MFTF.
FW_BP is an acronym for _FrameWork Base Path_.

Example:

```conf
FW_BP=~/magento/magento2-functional-testing-framework
```

#### TESTS_MODULE_PATH

The path to where the MFTF modules mirror Magento modules.

Example:

```conf
TESTS_MODULE_PATH=~/magento2/dev/tests/acceptance/tests/functional/Magento/FunctionalTest
```

### MODULE_WHITELIST

Use for a new module.
When adding a new directory at `Magento/FunctionalTest`, add the directory name to `MODULE_WHITELIST` to enable the MFTF to process it.

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

Example: `dev/tests/acceptance/utils/command.php`

### BROWSER

Override the default browser performing the tests.

Default: Chrome

Example:

```conf
BROWSER=firefox
```

<!-- Link definitions -->

[`MAGENTO_CLI_COMMAND_PATH`]: #magento_cli_command_path
[generateDate]: test/actions.html#generatedate
[mftf]: commands/mftf.html
[timezones]: http://php.net/manual/en/timezones.php