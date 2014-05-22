# Installing and Configuring the Magento Test Framework (MTF)

This page discusses how to install the MTF.

## Contents

*	[Prerequisites](#prerequisites)
*	[Installation Procedure](#installation-procedure)
*	[Configuring the MTF](#configuring-the-mtf)
*	[Configuration File Reference](#configuration-file-reference)
*	[Next Steps](#next-steps)

## Prerequisites

You can use the MTF on Windows, Mac OS, Ubuntu, or CentOS.

Other prerequisites:

*	PHP: You must enable the `openssl` extension to download files using HTTPS.

*	Java shoujld be in your system PATH. We recommend using the latest update to Java 1.7.

	To see your current Java version, enter `java -version` at the command line. If Java is not recognized, make sure it's in your system PATH.
	
	For general information, see the <a href="http://www.java.com/en/download/help/index_installing.xml" target="_blank">installing Java help page</a>.
	
	Another resource is the <a href="http://www.java.com/en/download/help/java_update.xml" target="_blank">using Java help page</a>.

*	Magento 2 is installed and configured to not use the secret URL key. Log in to the Magento Admin as an administrator and click **Stores** > **Configuration** > **Advanced** > **Admin** > **Security**. Set **Add Secret Key to URLs** to **No**.

*	Git is installed
	
	Windows only: Add Git to your system PATH variable or run Composer from the Git bash shell.

*	If you use a web browser other than Firefox, you must get <a href="http://docs.seleniumhq.org/download/" target="_blank">web browser drivers</a> that are compatible with Selenium. 

## Installation Procedure

1.	Download the Composer as discussed in http://getcomposer.org/doc/00-intro.md#installation-nix and http://getcomposer.org/doc/00-intro.md#installation-windows. 

	If Composer hasn't been install globally, `composer.phar` should be put into the directory where `composer.json` is located (typically `[your Magento install dir]/dev/tests/functional`). 
	
	**Note**: `composer.json` is an integral part of every Magento installation. This file contains information and settings for PHPUnit, Selenium server, libraries, and so on required to start MTF. It also checks MTF out from separate repository.

2. Run Composer from magento2/dev/tests/functional directory using _either of_ the following commands:

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
	
## Configuring the MTF

This section discusses how to configure the MTF. 

### Non-Firefox Browser Prerequisite

If you run your tests in the Google Chrome web browser, the value of `browserName` to `chrome` in `[your Magento install dir]/dev/tests/functional/config/server.yml`. A sample follows:

```yml
selenium:
    browser: 'Mozilla Firefox'
    browserName: 'firefox'
    host: 'localhost'
    port: 4444
    seleniumServerRequestsTimeout: 90
    sessionStrategy: shared
    desiredCapabilities:
        platform: ANY
```


### Specifying Your Magento URLs

Specify your storefront and Magento Admin URLs in `phpunit.xml`:

	```
	<env name="app_frontend_url" value="http://localhost/magento2/index.php/"/>
	<env name="app_backend_url" value="http://localhost/magento2/index.php/backend/"/>
	```
	
## Configuration File Reference

This section provides information about MTF configuration files. All files discussed in this section are located in `[your Magento install dir]/dev/tests/functional/config` and `[your Magento install dir]/dev/tests/functional/utils/config`

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

Start running as discussed in [Running the Magento Test Framework (MTF)](running.md).