---
group: mftf
title: Getting started
version: 2.2
github_link: magento-functional-testing-framework/release-2/getting-started.md
functional_areas:
 - Testing
mftf-release: 2.0.2
---

_This topic was updated after {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

## Prepare environment

Make sure that you've installed and set up the following software:

* [PHP version supported by Magento instance under test]({{ page.baseurl }}/install-gde/system-requirements-tech.html#php)
* [Composer v1.3.x+](https://getcomposer.org/download/)
* [Java v1.8.x+](https://www.java.com/en/download/)
* [Selenium Server Standalone v3.6.0+](#selenium-server)
* [ChromeDriver v2.33+](https://sites.google.com/a/chromium.org/chromedriver/downloads)

### Recommendations

We recommend using [PHPStorm 2017](https://www.jetbrains.com/phpstorm/) for your integrated development environment (IDE).
They recently added support for [Codeception Test execution](https://blog.jetbrains.com/phpstorm/2017/03/codeception-support-comes-to-phpstorm-2017-1/), which is helpful when debugging.

## Prepare Magento

Configure the following settings in Magento as described below.

### WYSIWYG settings

A Selenium web driver cannot enter data to fields with {% glossarytooltip 98cf4fd5-59b6-4610-9c1f-b84c8c0abd97 %}WYSIWYG{% endglossarytooltip %}.

To disable the WYSIWYG and enable the web driver to process these fields as simple text areas:

1. Log in to the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} as an administrator.
2. Navigate to **Stores \> Configuration \> General \> Content Management**.
3. In the WYSIWYG Options section set the **Enable WYSIWYG Editor** option to **Disabled Completely**.
4. Click **Save Config**.

### Security settings

To enable the **Admin Account Sharing** setting, to avoid unpredictable logout during a testing session, and disable the **Add Secret Key in URLs** setting, to open pages using direct URLs:

1. Navigate to **Stores \> Configuration \> Advanced \> {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} \> Security**.
2. Set **Admin Account Sharing** to **Yes**.
3. Set **Add Secret Key to URLs** to **No**.
4. Click **Save Config**.

## Set up the framework

Follow these steps in a command line interface to set up the MFTF on your system.

### Step 1. Clone the `magento2` source code repository

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

In _magento2/dev/tests/acceptance_, run the following command:

```bash
vendor/bin/robo build:project
```

<div class="bs-callout bs-callout-tip" markdown="1">
To avoid typing `vendor/bin` every time, add your `<absolute path to acceptance dir>/vendor/bin` value to `PATH`.
When added, you should be able to run the `robo`, `codecept`, and `phpunit` commands.
</div>

### Step 4. Edit environment settings

In the _magento2/dev/tests/acceptance_ directory, edit the `.env` file to match your system. Use the following parameters, which are required to launch tests.

* `MAGENTO_BASE_URL` must contain a domain name of the Magento instance that will be tested.
Example: `MAGENTO_BASE_URL=http://magento.test`

* `MAGENTO_BACKEND_NAME` must contain a relative pass of the Admin area.
Example: `MAGENTO_BACKEND_NAME=admin`

* `MAGENTO_ADMIN_USERNAME` must contain the user name required for authorization in the Admin area.
Example: `MAGENTO_ADMIN_USERNAME=admin`

* `MAGENTO_ADMIN_PASSWORD` must contain the user password required for authorization in the Admin area.
Example: `MAGENTO_ADMIN_PASSWORD=123123q`

The following self-descriptive variables have included default values.

```config
SELENIUM_HOST=127.0.0.1
SELENIUM_PORT=4444
SELENIUM_PROTOCOL=http
SELENIUM_PATH=/wd/hub
```

<div class="bs-callout bs-callout-warning" markdown="1">
Only change or specify `SELENIUM_*` values if you are not running Selenium locally, or if you have changed your Selenium Server configuration.
</div>

Your environment settings form the path to your running Selenium Server.
Example:
```
http://127.0.0.1:4444/wd/hub
```

### Step 5. Make `command.php` visible in the Magento testing environment

In your Magento installation, navigate to the _magento2/dev/tests/acceptance_ directory and run the following command to allow MFTF to send Magento CLI commands to your Magento instance.

```bash
cp .htaccess.sample .htaccess
```

<div class="bs-callout bs-callout-warning" markdown="1">
If you do not have access to your Magento installation and cannot complete the above steps you will not be able to run tests using Magento CLI commands.
</div>

### Step 6. Generate existing tests

In the `magento2/dev/tests/acceptance` directory, run the following command to generate tests as PHP classes from XML files:

```bash
vendor/bin/robo generate:tests
```

### Step 7. Run tests

To run tests you need a running Selenium server and a [`codecept`](commands/codeception.html) or [`robo`](commands/robo.html) with required parameters.

#### Run the Selenium server {#selenium-server}

1. [Download the latest Selenium Server](http://www.seleniumhq.org/download/).

2. [Download a Selenium web driver for your web browser](http://docs.seleniumhq.org/about/platforms.jsp) into the same directory that contains the Selenium server.

3. Add the directory with the web driver to `PATH`.

4. Run the Selenium server in terminal (or other command line interface):

```bash
java -jar <path_to_selenium_directory>/selenium-server-standalone-<version>.jar
```

#### Run all tests

```bash
vendor/bin/codecept run
```

See more commands in [`robo`](commands/robo.html) and [`codecept`](commands/codeception.html).

### Step 8. Generate reports {#allure}

Install [Allure](https://docs.qameta.io/allure/latest/), a tool that generates testing reports in HTML.
Testing reports are generated in a CLI during testing.

If you want to see the reports in a GUI, run:

```bash
vendor/bin/robo allure2:report
```

See also [Allure `robo` commands](commands/robo.html#allure-robo-commands) and [Report structure](https://docs.qameta.io/allure/latest/#_report_structure).
