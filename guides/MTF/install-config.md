# Installing and Configuring the Magento Test Framework (MTF)

This page discusses how to install the MTF.

## Contents

*	[Prerequisites](#prerequisites)
*	[Installation Procedure](#installation-procedure)
*	[Configuring the MTF](#configuring-the-mtf)
*	[Configuration File Reference](#configuration-file-reference)
*	[Next Steps](#next-steps)

## Prerequisites

This section discusses prerequisites for using the MTF.

### Supported Operating Systems

You can use the MTF on Windows, Mac OS, Ubuntu, or CentOS.

### Required Software

*	PHP: You must enable the `openssl` extension to download files using HTTPS.

*	<a href="https://code.google.com/p/selenium/source/browse/README.md#112" target="_blank">Java version 1.6 or later</a> is required; we recommend the latest update to Java 1.7.

	Also, the `java` and `jar` executables must be in your system PATH. 

	To see your current Java version, enter `java -version` at the command line. If Java is not recognized, make sure it's in your system PATH.
	
	For general information, see the <a href="http://www.java.com/en/download/help/index_installing.xml" target="_blank">installing Java help page</a>.
	
	Another resource is the <a href="http://www.java.com/en/download/help/java_update.xml" target="_blank">using Java help page</a>.
	
### Magento 2 Configuration

<a href="https://github.com/magento/magento2" target="_blank">Magento 2</a> must be installed and configured to not use the secret URL key. 

1.	Log in to the Magento Admin as an administrator.

2.	Click **Stores** > **Configuration** > **Advanced** > **Admin** > **Security**. 

3.	Set **Add Secret Key to URLs** to **No**.

### Git

Git must be installed.
	
For Windows only: Add Git to your system PATH variable or run Composer from the Git bash shell.

### Web Browser

If you use a web browser other than Firefox, you must get <a href="http://docs.seleniumhq.org/download/" target="_blank">web browser drivers</a> that are compatible with Selenium. 

For more information about web browser support, see <a href="http://docs.seleniumhq.org/docs/01_introducing_selenium.jsp#supported-browsers-and-platforms" target="_blank">the Selenium documentation</a>.

## Installation Procedure

1.	Download Composer for <a href="http://getcomposer.org/doc/00-intro.md#installation-nix" target="_blank">UNIX</a> or <a href="http://getcomposer.org/doc/00-intro.md#installation-windows" target="_blank">Windows</a>. 

2.	Follow the instructions on that page to install Composer.

2.	Run Composer from the `[your Magento install dir]/dev/tests/functional` directory as follows:

	```
	composer install
	```
	
	If you cannot run `composer` from the command line, do the following:
	
	a.	Copy `composer.phar` into the directory where `composer.json` is located (typically `[your Magento install dir]/dev/tests/functional`). 
	
	**Note**: `composer.json` contains dependency information and settings for PHPUnit, Selenium server, libraries, and so on required to start MTF. It also checks MTF out from a separate repository.
	
	b.	Run Composer as follows:
	
	```
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
	php utils/generate/factory.php
	```
	
	**Note**: The generator tool creates factories for fixtures, handlers, repositories, page objects, and block objects. After the MTF is initialized, the factories are pre-generated to facilitate creating and running the tests.
	
	The generator creates generated directories containing factories for pages, blocks, handlers, fixtures and repositories.
	
## Configuring the MTF

This section discusses how to configure the MTF. 

### Non-Firefox Browser Prerequisite

If you run your tests using a web browser _other than_ Firefox, change the value of `browserName` in `[your Magento install dir]/dev/tests/functional/config/server.yml`. A sample follows:

```yml
selenium:
    browser: 'Google Chrome'
    browserName: 'chrome'
    host: 'localhost'
    port: 4444
    seleniumServerRequestsTimeout: 90
    sessionStrategy: shared
    desiredCapabilities:
        platform: ANY
```

For more information about web browser support, see <a href="http://docs.seleniumhq.org/docs/01_introducing_selenium.jsp#supported-browsers-and-platforms" target="_blank">the Selenium documentation</a>.

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

Sample:

```yml
reopen_browser_on: testCase # test|testCase
backend_user_credentials:
    login: 'admin'
    password: '123123q'
backend_login_url: admin/auth/login
```

*	`reopen_browser_on` defines whether a browser should be reopened before every test or before every test case. Default behavior is for browser to open before every test case.
*	`backend_user_credentials` defines the Magento Admin administrator user name and password.
*	`backend_login_url` defines the Magento Admin login URL.

#### handler.yml 

Responsible for specifying additional settings for different types of handlers. 

Sample:

```yml
ui:
curl:
direct:
```

#### isolation.yml

Responsible for specifying the isolation strategies for tests, cases, and suites. 

Sample:

```yml
reset_url_path: dev/tests/mtf/isolation.php
testSuite: none
testCase: none
test: none
```

Your _isolation strategy_ determines when a system should return to its initial state. Isolation strategy can apply to any scope; that is, to a test, case, or suite. There are four isolation strategies available in the MTF:

*	`none`: Default strategy; implies that the isolation script should not be run either before or after any test, case, or suite.
*	`before`: Implies that the isolation script should be run before a test, case, or suite.
*	`after`: Implies that the isolation script should be run after a test, case, or suite.
*	`both`: Implies that the isolation script should be run both before and after a test, case, or suite.

#### server.yml

Specify the Selenium web browser (if not Firefox) and other options. For a list of valid `browserName` values, see:

*	<a href="http://selenium.googlecode.com/svn/trunk/docs/api/py/_modules/selenium/webdriver/common/desired_capabilities.html" target="_blank">Selenium source code</a> 
*	<a href="http://stackoverflow.com/questions/2569977/list-of-selenium-rc-browser-launchers" target="_blank">This article on stackoverflow</a>

Sample:

```yml
selenium:
    browser: 'Google Chrome'
    browserName: 'chrome'
    host: 'localhost'
    port: 4444
    seleniumServerRequestsTimeout: 90
    sessionStrategy: shared
    desiredCapabilities:
        platform: ANY
```

#### generator_config.yml

Allows changing Selenium server configurations. 

Sample:

```yml
# Generator running options, in case "generate_specified_modules" is set to "yes" then specified file is used
generate_specified_modules: no
specified_modules: dev\tests\mtf\utils\config\ee_modules.yml
 
# Fallback path configurations
tests_fallback:
    1:
        path: tests/design
        namespace: Magento\Plushe
    2:
        path: tests/app
 
# Handler priority configuration
handler_fallback:
    1: Curl
    2: Ui
```

*	Set `generate_specified_modules` to `yes` or `no` to create the fabrics for the tests from the specified modules. Disabled (set to `no`) by default which means the fabrics will be created for all modules of tests. Setting to `yes` means that only modules specified by `specified_modules` will be analyzed and have the fabrics created for them. The rest of tests will most likely fail due to absence of fabrics for them.

*	Set `specified_modules` to define a file containing the list of test modules. Default value is `dev\tests\mtf\utils\config\ee_modules.yml`

*	Set `tests_fallback` to specify themes priorities; in other words, what theme displays on the storefront. Default value is `Plushe`

*	Set `handler_fallback` to define the priority of using the handlers.

#### ee_modules.yml

Specifies the groups of tests for which fabrics should be created. Create this file only if `generate_specified_modules` parameter is set to `yes` in `[your Magento install dir]/dev/tests/functional/utils/config/generator_config.yml`. By default, the file is empty. 

Sample:

```yml
- Magento_Backend
- Magento_Catalog
- Magento_Customer
```

## Next Steps

You can do either of the following:

*	Start running as discussed in [Running the Magento Test Framework (MTF)](running.md).
*	Create your own MTF tests as discussed in [Writing Magento Test Framework (MTF) Tests](writing.md). This is an advanced topic that isn't necessary for many developers.