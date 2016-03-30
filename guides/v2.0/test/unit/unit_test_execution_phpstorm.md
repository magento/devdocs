---
layout: default
group: test-guide
subgroup: A_Running_Unit_Tests
title: Running Unit Tests in PHPStorm
menu_title: Running Unit Tests in PHPStorm
menu_node: parent
github_link: test/unit/unit_test_execution_phpstorm.md
redirect_from: /guides/v2.0/test/unit/unit_test_execution_phpstorm.html
---

## Running unit tests in PHPStorm

* TOC
{:toc}

### Overview

Running tests in PHPStorm requires a couple steps to setup the system.

1. Configuring the PHP interpreter
2. Configuring PHPUnit
3. Creating a run configuration

### Configuring the PHP interpreter

In the PHPStorm preferences, select the PHP interpreter PHPStorm should use to run tests with.  

<img src="{{ site.baseurl }}common/images/phpstorm_php_language_preferences.png" alt="PHPStorm PHP preference panel">

If you can not select a PHP interpreter because the dropdown is empty, you can add a one by clicking on the button with the three dots beside the dropdown.  

Then, click the `+` button in the top right to select the desired PHP binary on your file system.

<img src="{{ site.baseurl }}common/images/phpstorm_add_php_interpreter_dialogue.png" alt="Adding a PHP interpreter to PHPStorm">

Please refer to the PHPStorm documentation for further information on [how to configure a local PHP interpreter](https://www.jetbrains.com/help/phpstorm/2016.1/configuring-local-php-interpreters.html?origin=old_help).

It is also possible to [configure a remote PHP interpreter](https://www.jetbrains.com/help/phpstorm/2016.1/configuring-remote-php-interpreters.html?origin=old_help), which is a common setup when working with vagrant or docker based development environments.

Please be aware that the details on configuring the PHP interpreter might vary between PHPStorm versions.

### Configuring PHPUnit

After configuring the interpreter, the next step is to set up the PHPStorm preferences for how to execute PHPUnit.

<img src="{{ site.baseurl }}common/images/phpstorm_phpunit_preferences_dialogue.png" alt="PHPStorm PHPUnit preference panel">

* Check the "Use custom autoloader" radio button.
* Select the `vendor/autoload.php` file in your Magento 2 installation.
* Optionally select the `dev/tests/unit/phpunit.xml.dist` file as the "Default configuration file". Doing this step makes creating temporary run configurations more convenient.

Please refer to the PHPStorm documentation for further information on [enabling PHPUnit in PHPStorm](https://www.jetbrains.com/help/phpstorm/2016.1/enabling-phpunit-support.html#useAutoload).

### Creating a run configuration

The final step is to create a *run configuration* to execute the desired tests. 

There are many ways to create run configurations in PHPStorm. Here we just show one of the option.

All start by creating a new run configuration. To do so, follow these steps:

* Select the "Run > Edit Configurations" action from the top menu.
* Click the `+` symbol on the top right and select "PHPUnit"

Depending on what tests should be included in the run configuration, the next steps differ.  

#### Running all tests

* Give the run configuration a descriptive name, for example "All Unit Tests"
* Test Scope: select the "Defined in the configuration file" radio button
* Check the "Use alternative configuration file" checkbox
* Select the file `dev/tests/unit/phpunit.xml.dist`
* Click "OK"

<img src="{{ site.baseurl }}common/images/phpstorm_run_config_all_unit_tests.png" alt="All Unit Tests run configuration">

#### Running the tests of one module

* Give the run configuration a descriptive name, for example "Example_Module Unit Tests"
* Test Scope: select the "Directory" radio button
* Select the directory containing the modules unit tests. PHPUnit will run every file ending with "Test.php" in the selected directory branch.
* Click "OK"

<img src="{{ site.baseurl }}common/images/phpstorm_run_config_module_unit_tests.png" alt="Module Unit Tests run configuration">

#### Running the tests in a class

* Give the run configuration a descriptive name like the name of the test class (e.g. "FrontControllerPluginTest").
* Test Scope: select the "Class" radio button
* Class: enter the fully qualified class name (including the PHP namespace)
* File: select the file containing the test class
* Click "OK"

<img src="{{ site.baseurl }}common/images/phpstorm_run_config_class_unit_tests.png" alt="Test Class run configuration">

A more convenient way to create a run configuration for a test class is to open the class in PHPStorm, and then right-clicking into the class and selecting "Create 'TestClassName'" or "Run 'TestClassName'".  
Note that the test class has to inherit from `\PHPUnit_Framework_TestCase` for PHPStorm to display that option.

### Executing the run configuration

First select the run configuration to execute in the run configuration drop-down menu above the main editor window.  
Then click the "Play" icon beside it.  

By clicking the "Debug" icon (of a bug) next to the Play icon, it is possible to step-debug code during test execution, if the xdebug PHP extension is installed.


