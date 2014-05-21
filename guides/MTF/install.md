# Installing and Configuring the Magento Test Framework (MTF)

This page discusses how to install the MTF.

## Contents

*	[Introduction](#introduction)
*	[Prerequisites](#prerequisites)
*	[Installation Procedure](#installation-procedure)
*	[Google Chrome Prerequisite](#google-chrome-prerequisite)
*	[Quick Configuration for localhost](#quick-configuration-for-localhost)
*	[Configuration Details](#configuration-details)
*	[Configuration Reference](#configuration-reference)
*	[Next Steps](#next-steps)

## Introduction

The Magento Test Framework (MTF) enables you to run thorough and accurate tests of your Magento installation. This guide discusses how to install and configure MTF. [Using the Magento Test Framework (MTF)](using.md) discusses how to set up and run tests.

## Prerequisites

You can use the MTF on Windows, Mac OS, Ubuntu, or CentOS.

Other prerequisites:

*	PHP: You must enable the openssl extension to download files via https.

*	Magento 2 is installed and configured to not use the secret URL key. Click **Stores** > **Configuration** > **Advanced** > **Admin** > **Security**. Set **Add Secret Key to URLs** to **No**.

*	If you install Magento 2 using publication tool, use a command like the following: 

	```
	php -f dev/build/publication/../extruder.php -- -v -w "./" -l dev/build/publication/extruder/common.txt -l dev/build/publication/extruder/dev_build_ee.txt
	```
	
*	Git is installed,
	
	Windows only: Add Git to your system PATH variable or run composer from Git bash.

*	Web drivers are downloaded for your browser, unless you use Firefox browser, which does not require additional drivers.

## Installation Procedure

1.  Get the MTF code from <a href="https://github.com/magento/mtf" target="_blank">https://github.com/magento/mtf</a>.

1.	Download the composer as discussed in http://getcomposer.org/doc/00-intro.md#installation-nix and http://getcomposer.org/doc/00-intro.md#installation-windows. 

	If composer hasn't been install globally, `composer.phar` should be put into the directory where `composer.json` is located (typically `[your Magento install dir]/dev/tests/functional`). 
	
	**Note**: `composer.json` is an integral part of every Magento installation. This file contains information and settings for PHPUnit, Selenium server, libraries, and so on required to start MTF. It also checks MTF out from separate repository.

2. Run composer from magento2/dev/tests/functional directory using _either of_ the following commands:

	```
	composer install
	php composer.phar install
	```
	
	A new directory named `vendor` is created with the checked-out MTF. The `vendor` directory contains:

    <ul><li>An MTF framework directory (<tt>magento/mtf</tt>)</li>
   <li><tt>bin </tt></li>
   <li><tt>composer</tt></li>
   <li><tt>netwing</tt> </li>
   <li><tt>phpunit</tt></li>
   <li><tt>symfony</tt> </li>
   <li><tt>autoload.php</tt> (file)</li></ul>
	
3.	Run the generator from `[your Magento install dir]/dev/tests/functional/utils/generate/factory.php` or `[your Magento install dir]/dev/tests/functional/utils/generate.php`

	```
	php utils/generate/factory.php (for Magento 2)
	php utils/generate.php (for Magento 1)
	```
	
	**Note**: The generator tool is used to create factories for fixtures, handlers, repositories, page objects, and block objects. After the MTF is initialized, the factories are pre-generated to facilitate creating and running the tests.
	
	The generator creates generated directories containing factories for pages, blocks, handlers, fixtures and repositories.
	
## Google Chrome Prerequisite

If you run your tests in the Google Chrome web browser, the value of `browserName` to `chrome` in `[your Magento install dir]/dev/tests/functional/config/server.yml`.

## Quick Configuration for localhost

To run the MTF tests on localhost:

1. Specify your storefront and Magento Admin URLs in `phpunit.xml`:

	```
	<env name="app_frontend_url" value="http://localhost/magento2/index.php/"/>
	<env name="app_backend_url" value="http://localhost/magento2/index.php/backend/"/>
	```
	
2. Run the Selenium server from `vendor/netwing/selenium-server-standalone`:

	<ul>
	<li>Chrome browser: <tt>java -jar [path to your Selenium dir]/selenium-server.jar -Dwebdriver.chrome.driver=[path to your Chrome driver]/chromedriver.exe</tt></li>
	<li>All other browsers: <tt>java -jar [path to your Selenium dir]/selenium-server.jar</tt></li></ul>
	
3.  Run PHPUnit tests from `[your Magento install dir]/dev/tests/functional/vendor/bin`

## Configuration Details

This section discusses how to:

*	Specify the test context using fixtures
*	Apply the test context using handlers
*	Set the constraints and their sequence for your tests
*	Isolate the tests
*	Run UI-specific tests using page and block objects

MTF has several features to assist you with the preceding tasks:

*	Global configuration files (`Module\Test\etc\global`), which help to configure and generate various testing entities for a module, namely:
	*	`fixture.xml` to create fixture structure, repositories, and handlers
	*	`constraint.xml` to create constraints
	*	`page.xml` to create page objects
*	Generators (`utils\generate`), which generate fixtures, handlers, page objects, repositories, and constraints.
*	Data sets (`methodName.csv`), which help to avoid using nested data sets in fixtures as well as link the test data and behavior to constraints.


## Configuration Reference

This section provides a detailed reference for all MTF configuration options. All files discussed in this section are located in `[your Magento install dir]/dev/tests/functional/config` and `[your Magento install dir]/dev/tests/functional/utils/config`

For more information, see:

*	[application.yml](#applicationyml)
*	[handler.yml](#handleryml)
*	[isolation.yml](#isolationyml)
*	[server.yml](#serveryml)
*	[generator_config.yml](#generator_configyml)
*	[ee_modules.yml](#ee_modulesyml)

#### application.yml

<a href="https://gist.github.com/xcomSteveJohnson/0b21ada7c68230d5a872" target="_blank">Sample</a>.


*	`reopen_browser_on` defines whether a browser should be reopened before every test or before every test case. Default behavior is for browser to open before every test case.
*	`backend_user_credentials` defines the Magento Admin administrator user name and password.
*	`backend_login_url` defines the Magento Admin login URL.

#### handler.yml

Responsible for specifying additional settings for different types of handlers. <a href="https://gist.github.com/xcomSteveJohnson/3808faba2cb24281d035" target="_blank">Sample</a>.

#### isolation.yml

Responsible for specifying the isolation strategies for tests, cases, and suites. <a href="https://gist.github.com/xcomSteveJohnson/6b7207ba3f55da33a01b" target="_blank">Sample</a>.

Your _isolation strategy_ determines when a system should return to its initial state. Isolation strategy can apply to any scope; that is, to a test, case, or suite. There are four isolation strategies available in the MTF:

*	`none`: Default strategy; implies that the isolation script should not be run either before or after any test, case, or suite.
*	`before`: Implies that the isolation script should be run before a test, case, or suite.
*	`after`: Implies that the isolation script should be run after a test, case, or suite.
*	`both`: Implies that the isolation script should be run both before and after a test, case, or suite.

#### server.yml

Allows changing Selenium server configurations. <a href="https://gist.github.com/xcomSteveJohnson/302b66ddf9b29cf85a8d" target="_blank">Sample</a>.

#### generator_config.yml

Allows changing Selenium server configurations. <a href="https://gist.github.com/xcomSteveJohnson/132a24ec3fffe44b7fcc" target="_blank">Sample</a>.

*	Set `generate_specified_modules` to `yes` or `no` to create the fabrics for the tests from the specified modules. Disabled (set to `no`) by default which means the fabrics will be created for all modules of tests. Setting to `yes` means that only modules specified by `specified_modules` will be analyzed and have the fabrics created for them. The rest of tests will most likely fail due to absence of fabrics for them.

*	Set `specified_modules` to define a file containing the list of test modules. Default value is `dev\tests\mtf\utils\config\ee_modules.yml`

*	Set `tests_fallback` to specify themes priorities; in other words, what theme displays on the storefront. Default value is `Plushe`

*	Set `handler_fallback` to define the priority of using the handlers.

#### ee_modules.yml

Specifies the groups of tests for which fabrics should be created. Create this file only if `generate_specified_modules` parameter is set to `yes` in `[your Magento install dir]/dev/tests/functional/utils/config/generator_config.yml`. By default, the file is empty. 

<a href="https://gist.github.com/xcomSteveJohnson/f7a527b7e454f01ab06f" target="_blank">Sample</a>.

## Next Steps

Start using the MTF as discussed in [Using the Magento Test Framework (MTF)](using.md).