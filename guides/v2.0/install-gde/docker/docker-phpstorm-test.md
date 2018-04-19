---
layout: default
group: install-dock
subgroup: 05_PhpStorm
title: Run PHPUnit
menu_title: Run PHPUnit
menu_node:
menu_order: 10
version: 2.0
github_link: install-gde/docker/docker-phpstorm-test.md
functional_areas:
  - Install
  - System
  - Setup
---

{% include install/docker/deprecated-note.html %}

This topic discusses how to run PHPUnit tests from the command line or from PhpStorm.
For demonstration purposes, this topic discusses how to test Magento modules.
Typically, you'll test your own modules; replace the paths shown in the examples with the paths to your test files.

{% include install/docker/docker-phpstorm.md %}

## Prerequisites
Before you begin, make sure you have completed all of the following tasks:

*	[PhpStorm prerequisites]({{ page.baseurl}}/install-gde/docker/docker-phpstorm-prereq.html)
*	[Set up your PhpStorm project]({{ page.baseurl}}/install-gde/docker/docker-phpstorm-project.html)

<div class="bs-callout bs-callout-info" markdown="1">
The instructions in this topic are based on PhpStorm version 2016.3.2.
If you use a different version, some steps might be different.
Consult your PhpStorm documentation for details.
</div>

## Run unit tests from the command line
To run PHPUnit unit tests from the command line:

1.	Enter the following command to run a Bash shell in the web container.

		docker-compose exec --user=magento2 web /bin/bash
2.	In the Bash shell, change to the directory containing the objects to test.

	For example, to run tests for the Admin notification module, change to the following directory:

		cd /var/www/magento2/vendor/magento/module-admin-notification/Test/Unit
3.	Run PHPUnit as follows:

		<path to phpunit> -c <path to phpunit.xml> .

	For example,

		/var/www/magento2/vendor/bin/phpunit -c /var/www/magento2/dev/tests/unit/phpunit.xml .

	Notes:

	*	To run a single test, replace `.` with the name of the PHP file that defines the tests to run.
	*	If there is no `phpunit.xml`, use `phpunit.xml.dist` instead.
  *	Use `Ctrl`+`p`+`Ctrl`+`q` to exit or detach from a container and leave it running.

## Run integration tests from the command line
To run PHPUnit integration tests from the command line:

1.	Enter the following command to run a Bash shell in the web container.

		docker-compose exec --user=magento2 web /bin/bash
2.	In the Bash shell, change to the following directory:

		cd /var/www/magento2/dev/tests/integration 
3.	Following is a sample command to run a test suite:

		/var/www/magento2/vendor/bin/phpunit /var/www/magento2/dev/tests/integration/testsuite/Magento/Integration/Model/Config/Integration

## Run PHPUnit tests from PhpStorm
This section discusses one way to run PHPUnit tests in PhpStorm.
For more information about defining tests, consult the PhpStorm documentation.

### Set up and run a test
To run PHPUnit tests from PhpStorm:

1.	Open your DevBox PhpStorm project.
2.	Expand the files in the left pane until you locate a test to run.

	Tests are located in `<DevBox root folder>/vendor/<module vendor>/<module name>/Test/Unit`
3.	Right-click the name of the test.
4.	From the pop-up menu, click **Run &lt;test name>**.

	For example, the following figure shows how to run the SearchDataTest.

	![Run a sample unit test]({{ site.baseurl}}/common/images/install_docker_php-storm_unit-searchdata.png)

Test results are displayed in the right pane.
If errors display, see the next section.

### Troubleshoot unit tests
If your remote CLI interpreter or Xdebug options aren't set up properly, the following messages are displayed:

	ssh://magento2@127.0.0.1:32795/usr/local/bin/php -dxdebug.remote_host=127.0.0.1 /home/magento2/.PhpStorm_helpers/phpunit.php --no-configuration Magento\\AdvancedSearch\\Test\\Unit\\Block\\SearchDataTest /var/www/magento2/vendor/magento/module-advanced-search/Test/Unit/Block/SearchDataTest.php
	Testing started at 6:13 PM ...

	Process finished with exit code 1
	Cannot find PHPUnit in include path (.:/usr/local/lib/php)

To resolve this issue, make sure you set up your remote CLI interpreter as discussed in [Set up PHPUnit]({{ page.baseurl}}/install-gde/docker/docker-phpstorm-project.html#devbox-phpunit-setup).

Also make sure Xdebug configuration options are set properly as discussed in [Create the Xdebug remote host]({{ page.baseurl}}/install-gde/docker/docker-phpstorm-project.html#devbox-xdebug-remote).

#### Next step

[Debug in PhpStorm and browser]({{ page.baseurl}}/install-gde/docker/docker-phpstorm-debug.html)
