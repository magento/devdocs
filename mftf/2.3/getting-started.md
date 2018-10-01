---
mftf-release: 2.3.6
redirect_from: /guides/v2.3/magento-functional-testing-framework/2.3/getting-started.html
---

# Getting started

_This topic was updated after {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

{% include_relative include/note-2.2-docs.md %}

## Prepare environment  {#prepare-environment}

Make sure that you have the following software installed and configured on your development environment:

* [PHP version supported by the Magento instance under test][php]
* [Composer 1.3 or later][composer]
* [Java 1.8 or later][java]
* [Selenium Server Standalone 3.6 or later][selenium server] and [ChromeDriver 2.33 or later][chrome driver] or other webdriver in the same directory

{:.bs-callout .bs-callout-tip}
[PhpStorm] supports [Codeception test execution][], which is helpful when debugging.

## Prepare Magento  {#prepare-magento}

Configure the following settings in Magento as described below.

### WYSIWYG settings    {#wysiwyg-settings}

A Selenium web driver cannot enter data to fields with {% glossarytooltip 98cf4fd5-59b6-4610-9c1f-b84c8c0abd97 %}WYSIWYG{% endglossarytooltip %}.

To disable the WYSIWYG and enable the web driver to process these fields as simple text areas:

1. Log in to the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} as an administrator.
2. Navigate to **Stores \> Configuration \> General \> Content Management**.
3. In the WYSIWYG Options section set the **Enable WYSIWYG Editor** option to **Disabled Completely**.
4. Click **Save Config**.

{: .bs-callout .bs-callout-tip }
When you want to test the WYSIWYG functionality, reenable WYSIWYG in your test [suite][].

### Security settings   {#security-settings}

To enable the **Admin Account Sharing** setting, to avoid unpredictable logout during a testing session, and disable the **Add Secret Key in URLs** setting, to open pages using direct URLs:

1. Navigate to **Stores \> Configuration \> Advanced \> {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} \> Security**.
2. Set **Admin Account Sharing** to **Yes**.
3. Set **Add Secret Key to URLs** to **No**.
4. Click **Save Config**.

## Set up the framework {#setup-framework}

Follow these steps in a command line interface to set up the MFTF on your system.

### Step 1. Clone the `magento2` source code repository {#clone-magento}

```bash
git clone https://github.com/magento/magento2.git
```

or

```bash
git clone git@github.com:magento/magento2.git
```

### Step 2. Install dependencies {#install-dependencies}

1. Checkout to the Magento version that you are going to test.

   ```bash
   cd magento2/
   ```
   ```bash
   git checkout 2.3-develop
   ```

2. Install the Magento application.

   ```bash
   composer install
   ```

3. Install the MFTF.

   ```bash
   composer install -d dev/tests/acceptance/
   ```

### Step 3. Build the project   {#build-project}

In the Magento project root, run:

```bash
vendor/bin/mftf build:project
```

{% include note.html
type='tip'
content='If you use PhpStorm, generate a URN catalog:
```bash
vendor/bin/mftf generate:urn-catalog .idea/
```

If the file does not exist, add the `--force` option to create it:

```bash
vendor/bin/mftf generate:urn-catalog --force .idea/
```

See [`generate:urn-catalog`][] for more details.'
%}

{:.bs-callout .bs-callout-tip}
You can simplify command entry by adding the  absolute  path to the `vendor/bin` directory path to your PATH environment variable.
After adding the path, you can run `mftf` without having to include `vendor/bin`.

### Step 4. Edit environmental settings   {#environment-settings}

In the `magento2/dev/tests/acceptance/` directory, edit the `.env` file to match your system.

```bash
vim dev/tests/acceptance/.env
```

Specify the following parameters, which are required to launch tests:

* `MAGENTO_BASE_URL` must contain a domain name of the Magento instance that will be tested.
Example: `MAGENTO_BASE_URL=http://magento.test`

* `MAGENTO_BACKEND_NAME` must contain a relative pass of the Admin area.
Example: `MAGENTO_BACKEND_NAME=admin`

* `MAGENTO_ADMIN_USERNAME` must contain the username required for authorization in the Admin area.
Example: `MAGENTO_ADMIN_USERNAME=admin`

* `MAGENTO_ADMIN_PASSWORD` must contain the user password required for authorization in the Admin area.
Example: `MAGENTO_ADMIN_PASSWORD=123123q`

{: .bs-callout .bs-callout-info }
If the `MAGENTO_BASE_URL` contains a subdirectory like `http://magento.test/magento2ce`, specify `MAGENTO_CLI_COMMAND_PATH`.

### Step 5. Enable the Magento CLI commands

In the `magento2/dev/tests/acceptance` directory, run the following command to enable the MFTF to send Magento CLI commands to your Magento instance.

 ```bash
cp dev/tests/acceptance/.htaccess.sample dev/tests/acceptance/.htaccess
```

#### (Optional) Copy `command.php` into Magento installation {#add-cli-commands}

If you are installing the MFTF from the other location than your Magento installation, point to the `command.php` file in the MFTF source code:

`magento2-functional-testing-framework/etc/config/command.php`

And copy it into your Magento installation: 

`magento2/dev/tests/acceptance/utils/`

If you are installing the MFTF from inside your Magento installation, this is automatically done when you [build the project][].

{:.bs-callout .bs-callout-warning}
If you do not have access to your Magento installation and cannot complete the step you will not be able to use the Magento CLI commands.

### Step 7. Generate and run tests   {#run-tests}

To run tests, you need a running Selenium server and [`mftf`][] with required parameters.

#### Run the Selenium server    {#selenium-server}

Run the Selenium server in terminal.
For example, the following commands run the Selenium server for Google Chrome:

```bash
cd <path_to_directory_with_selenium_server_and_webdriver>/
```
```bash
java -Dwebdriver.chrome.driver=chromedriver -jar selenium-server-standalone-3.14.0.jar
```

#### Generate and run all tests {#run-all-tests}

```bash
vendor/bin/mftf generate:tests
```
```bash
cd dev/tests/acceptance
```
```bash
vendor/bin/codecept run functional
```

See more commands in [`codecept`][].

#### Run a simple test {#run-test}

To clean up the previously generated tests, and then generate and run a single test `AdminLoginTest`, run:

```bash
vendor/bin/mftf run:test AdminLoginTest --remove
```

See more commands in [`mftf`][].

### Step 9. Generate reports    {#reports}

During testing, the MFTF generates test reports in CLI.
You can generate visual representations of the report data using [Allure Framework][].
To view the reports in GUI:

-  [install Allure][]
-  run the tool to serve the artifacts in `dev/tests/acceptance/tests/_output/allure-results/`:

```bash
allure serve dev/tests/acceptance/tests/_output/allure-results/
```

Learn more about Allure in the [official documentation][allure docs].

<!-- Link definitions -->

[Allure Framework]: http://allure.qatools.ru/
[chrome driver]: https://sites.google.com/a/chromium.org/chromedriver/downloads
[Codeception Test execution]: https://blog.jetbrains.com/phpstorm/2017/03/codeception-support-comes-to-phpstorm-2017-1/
[composer]: https://getcomposer.org/download/
[java]: http://www.oracle.com/technetwork/java/javase/downloads/index.html
[php]: {{ site.gdeurl23 }}/install-gde/system-requirements-tech.html#php
[PHPStorm]: https://www.jetbrains.com/phpstorm/
[selenium server]: https://www.seleniumhq.org/download/
[`codecept`]: commands/codeception.html
[`generate:urn-catalog`]: commands/mftf.html#generateurn-catalog
[`mftf`]: commands/mftf.html
[allure docs]: https://docs.qameta.io/allure/
[build the project]: #build-project
[install Allure]: https://github.com/allure-framework/allure2#download
[test suite]: suite.html
