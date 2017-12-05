---
layout: default
group: mftf
title: Getting started with the Magento Functional Testing Framework
version: 2.3
github_link: magento-functional-testing-framework/getting-started.md
---

<div class="bs-callout bs-callout-info" markdown="1">
A dependency for the framework is located in the `magento2ee` repository.<br/>
This solution is temporary.
</div>

## Prepare environment

Make sure that you've set up the following software: 

* [git]
* [PHP v7.1.x+][php]
* [Composer v1.3.x+][composer]
* [Allure CLI v2.3.x+](#allure)
* [Java v1.8.x+][java]
* [Selenium Server Standalone v3.6.0+](#selenium-server)

### Selenium Server

1. [Download the latest Selenium Server][selenium server].

2. [Download a Selenium web driver for your web browser][selenium web driver] into the same directory where the Selenium server is located.

3. Add the directory with the web driver to PATH.

### Allure

[Install Allure], a tool that generates testing reports in HTML.

<div class="bs-callout bs-callout-tip" markdown="1">
**For Windows users**: use *Manual installation* to be able to run Allure using non-PowerShell terminals.
</div>

## Prepare Magento

Make sure that the following settings in Magento are set as described.

### WYSIWYG settings

A Selenium web driver cannot enter data to fields with {% glossarytooltip 98cf4fd5-59b6-4610-9c1f-b84c8c0abd97 %}WYSIWYG{% endglossarytooltip %}.
This option disables the WYSIWYG and enables the web driver to process these fields as simple text areas.

1. Log in to the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} as an administrator.
2. Click **Stores &gt; Configuration &gt; General &gt; Content Management &gt; WYSIWYG Options**.
3. Set **Enable WYSIWYG Editor** to **Disabled Completely**.
4. Click **Save Config**.

### Security settings

Enable the **Admin Account Sharing** setting to avoid unpredictable logout during testing session.
And disable the **Add Secret Key in URLs** setting to open pages using direct URLs.

1. Follow **Stores &gt; Configuration &gt; Advanced &gt; {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} &gt; Security**.
2. Set **Admin Account Sharing** to **Yes**.
3. Set **Add Secret Key to URLs** to **No**.

## Setup the framework

Follow these steps to set up the MFTF on your system. 

### Step 1. Clone the magento2 source code repositories into one directory

```bash
$ mkdir mftf
$ cd mftf
$ git clone git@github.com:magento/magento2ce.git
$ git clone git@github.com:magento/magento2ee.git
```

### Step 2. Link the repositories to make `magento2ee` work properly

```bash
$ cd magento2ee
$ php -f dev/tools/build-ee.php -- --command=link --exclude=true
$ cd ..
```

### Step 3. Setup your authorization file in the `magento2ce` repository

This step enables you to configure [HTTP basic authentication] for Composer.

Create the `auth.json` file:

```bash
$ touch magento2ce/dev/tests/acceptance/auth.json
```

In the `auth.json`, add the `github-oauth` entry:

```json
{  "github-oauth": {
      "github.com": "<personal access token>"
   }
}
```

Replace `<personal access token>` with your [personal access token]. The token must have a scope `repo`.

### Step 4. Install dependencies

```bash
$ cd magento2ce/dev/tests/acceptance
$ composer install
```

<div class="bs-callout bs-callout-tip" markdown="1">
If you see an error like `404 Not Found`, [update your Composer] and try again.<br/>
`$ composer selfupdate`
</div>

### Step 5. Install Robo

In `magento2ce/dev/tests/acceptance`, run the following command:

```bash
$ vendor/bin/robo build:project
```

[Learn more about Robo][robo]

<div class="bs-callout bs-callout-tip" markdown="1">
To avoid typing evey time `vendor/bin`, add to *PATH* your `<absolute path to acceptance dir>/vendor/bin` value. When added, you should be able to run commands: `robo`, `codecept`, and `phpunit`. 
</div>

### Step 6. Edit environment settings

In the `magento2ce/dev/tests/acceptance` directory, create a configuration file `.env` from `.env.example`:

```bash
$ cp .env.example .env
```

Open `.env` and add values that correspond to your system.
The following list describes parameters, required to launch tests.

* `MAGENTO_BASE_URL` must contain a domain name of the Magento instance that will be tested.
Example: `MAGENTO_BASE_URL=http://magento.test`

* `MAGENTO_BACKEND_NAME` must contain a relative pass of the Admin area.
Example: `MAGENTO_BACKEND_NAME=admin`

* `MAGENTO_ADMIN_USERNAME` must contain a user name required for authorization in the Admin area.
Example: `MAGENTO_ADMIN_USERNAME=admin`

* `MAGENTO_ADMIN_PASSWORD` must contain a user password required for authorization in the Admin area. 
Example: `MAGENTO_ADMIN_PASSWORD=123123q`

* `TESTS_BP` must contain a base path to a directory that contains this configuration file. 
Example: `TESTS_BP=/Users/dshevtsov/mftf/magento2ce/dev/tests/acceptance`

* `FW_BP` must contain a base path to a directory with the MFTF framework. 
Example: `FW_BP=/Users/dshevtsov/mftf/magento2ce/dev/tests/acceptance/vendor/magento/magento2-functional-testing-framework`

* `TESTS_MODULE_PATH` must contain a base path to functional tests. 
Example: `TESTS_MODULE_PATH=/Users/dshevtsov/mftf/magento2ce/dev/tests/acceptance/tests/functional/Magento/FunctionalTest`

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

### Step 7. Generate existing tests

In the `magento2ce/dev/tests/acceptance` directory, run the following command to generate tests as PHP classes from XML files:

```bash
$ vendor/bin/robo generate:tests
```

## Run tests

To run one or more tests, you need running Selenium server and a [`codecept`] or [`robo`] with required parameters. 

### Run the Selenium server

Run the Selenium server in the terminal:

```bash
$ java -jar <path_to_selenium_directory>/selenium-server-standalone-<version>.jar
```

### Run all tests

```bash
$ vendor/bin/codecept run 
```

## Generate reports

Testing reports are generated in CLI during testing.
If you want to see the reports in GUI, run:

```bash
$ vendor/bin/robo allure2:report
```
[See more Allure commands][allure commands]

[Learn about report structure.][allure reports] 

<!-- LINKS -->

[`codecept`]: commands/codeception.html
[`robo`]: commands/robo.html
[allure commands]: commands/robo.html#allure-robo-commands

[git]: https://git-scm.com/downloads
[php]: http://php.net/manual/en/install.php
[composer]: https://getcomposer.org/download/
[java]: https://www.java.com/en/download/

[HTTP basic authentication]: https://getcomposer.org/doc/articles/http-basic-authentication.md#http-basic-authentication
[magento-pangolin]: https://github.com/magento-pangolin/
[personal access token]: https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/#creating-a-token
[robo]: http://robo.li/
[update your Composer]: https://getcomposer.org/doc/03-cli.md#self-update-selfupdate-
[selenium server]: http://www.seleniumhq.org/download/
[selenium web driver]: http://docs.seleniumhq.org/about/platforms.jsp
[Install Allure]: https://docs.qameta.io/allure/latest/
[allure reports]: https://docs.qameta.io/allure/latest/#_report_structure

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework
