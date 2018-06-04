---
group: mftf
title: Getting started with the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/release-1/getting-started.md
functional_areas:
 - Testing
redirect_from:
    - guides/v2.2/magento-functional-testing-framework/getting-started.html
    - guides/v2.2/magento-functional-testing-framework/1.0/getting-started.html
mftf-release: 1.0.0
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

## Prepare environment

Make sure that you've set up the following software: 

* [PHP v7.1.x+][php]
* [Composer v1.3.x+][composer]
* [Java v1.8.x+][java]
* [Selenium Server Standalone v3.6.0+](#selenium-server)
* [ChromeDriver v2.33+][chromedriver]

### Recommendations

We recommend using [PHPStorm 2017](https://www.jetbrains.com/phpstorm/) for your IDE.
They recently added support for [Codeception Test execution](https://blog.jetbrains.com/phpstorm/2017/03/codeception-support-comes-to-phpstorm-2017-1/) which is helpful when debugging.

## Prepare Magento

Make sure that the following settings in Magento are set as described.

### WYSIWYG settings

A Selenium web driver cannot enter data to fields with {% glossarytooltip 98cf4fd5-59b6-4610-9c1f-b84c8c0abd97 %}WYSIWYG{% endglossarytooltip %}.

This option disables the WYSIWYG and enables the web driver to process these fields as simple text areas.

1. Log in to the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} as an administrator.
2. Click **Stores \> Configuration \> General \> Content Management \> WYSIWYG Options**.
3. Set **Enable WYSIWYG Editor** to **Disabled Completely**.
4. Click **Save Config**.

### Security settings

Enable the **Admin Account Sharing** setting to avoid unpredictable logout during testing session.
And disable the **Add Secret Key in URLs** setting to open pages using direct URLs.

1. Follow **Stores \> Configuration \> Advanced \> {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} \> Security**.
2. Set **Admin Account Sharing** to **Yes**.
3. Set **Add Secret Key to URLs** to **No**.

## Set up the framework

Follow these steps to set up the MFTF on your system. 

### Step 1. Clone the magento2 source code repository

```bash
git clone https://github.com/magento/magento2.git
```

or

```bash
git clone git@github.com:magento/magento2.git
```

### Step 2. Install dependencies

```bash
cd magento2/dev/tests/acceptance
```
```bash
composer install
```

### Step 3. Build the project

In `magento2/dev/tests/acceptance`, run the following command:

```bash
vendor/bin/robo build:project
```

<div class="bs-callout bs-callout-tip" markdown="1">
To avoid typing `vendor/bin` every time, add to *PATH* your `<absolute path to acceptance dir>/vendor/bin` value.
When added, you should be able to run commands: `robo`, `codecept`, and `phpunit`.
</div>

### Step 4. Edit environment settings

In the `magento2/dev/tests/acceptance` directory, edit the `.env` file to match your system.

The following list describes parameters, required to launch tests.

* `MAGENTO_BASE_URL` must contain a domain name of the Magento instance that will be tested.
Example: `MAGENTO_BASE_URL=http://magento.test`

* `MAGENTO_BACKEND_NAME` must contain a relative pass of the Admin area.
Example: `MAGENTO_BACKEND_NAME=admin`

* `MAGENTO_ADMIN_USERNAME` must contain a user name required for authorization in the Admin area.
Example: `MAGENTO_ADMIN_USERNAME=admin`

* `MAGENTO_ADMIN_PASSWORD` must contain a user password required for authorization in the Admin area. 
Example: `MAGENTO_ADMIN_PASSWORD=123123q`

The following self-descriptive variables have default values (included).

```config
SELENIUM_HOST=127.0.0.1            
SELENIUM_PORT=4444
SELENIUM_PROTOCOL=http
SELENIUM_PATH=/wd/hub
```

<div class="bs-callout bs-callout-warning" markdown="1">
Only change or specify `SELENIUM_*` values if you are not running Selenium locally, or if you have changed your Selenium Server configuration.
</div>

They come together to form the path to where Selenium Server is running from like:

``` 
http://127.0.0.1:4444/wd/hub
```

### Step 5. Generate existing tests

In the `magento2/dev/tests/acceptance` directory, run the following command to generate tests as PHP classes from XML files:

```bash
vendor/bin/robo generate:tests
```

### Step 6. Run tests

To run one or more tests, you need running Selenium server and a [`codecept`] or [`robo`] with required parameters. 

#### Run the Selenium server {#selenium-server}

1. [Download the latest Selenium Server][selenium server].

2. [Download a Selenium web driver for your web browser][selenium web driver] into the same directory where the Selenium server is located.

3. Add the directory with the web driver to PATH.

4. Run the Selenium server in the terminal:

```bash
java -jar <path_to_selenium_directory>/selenium-server-standalone-<version>.jar
```

#### Run all tests

```bash
vendor/bin/codecept run 
```

See more commands in [`robo`] and [`codecept`].

### Step 7. Generate reports {#allure}

[Install Allure], a tool that generates testing reports in HTML.
Testing reports are generated in CLI during testing.

If you want to see the reports in GUI, run:

```bash
vendor/bin/robo allure2:report
```

[See more Allure commands][allure commands]

[Learn about report structure.][allure reports] 

<!-- LINKS -->

[`codecept`]: commands/codeception.html
[`robo`]: commands/robo.html
[allure commands]: commands/robo.html#allure-robo-commands

[php]: http://php.net/manual/en/install.php
[composer]: https://getcomposer.org/download/
[java]: https://www.java.com/en/download/

[selenium server]: http://www.seleniumhq.org/download/
[selenium web driver]: http://docs.seleniumhq.org/about/platforms.jsp
[Install Allure]: https://docs.qameta.io/allure/latest/
[allure reports]: https://docs.qameta.io/allure/latest/#_report_structure
[chromedriver]: https://sites.google.com/a/chromium.org/chromedriver/downloads

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework
