---
group: unit-testing
title: Running Unit Tests in PHPStorm
contributor_name: Vinai Kopp
contributor_link: http://vinaikopp.com/
version: 2.0
functional_areas:
  - Testing
  - test
---

Running tests in PHPStorm requires following steps to setup the system.

1. Configuring the {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} interpreter
2. Configuring PHPUnit
3. Creating a run configuration

### Configuring the PHP interpreter

In the PHPStorm preferences, select the PHP interpreter PHPStorm should use to run tests with.  

<img src="{{ site.baseurl }}/common/images/phpstorm_php_language_preferences.png" alt="PHPStorm PHP preference panel">{:width="600px"}

If you can not select a PHP interpreter because the dropdown is empty, you can add a one by clicking on the button with the three dots beside the dropdown.  

Then, click the **+** (add) button in the top right to select the desired PHP binary on your file system.

<img src="{{ site.baseurl }}/common/images/phpstorm_add_php_interpreter_dialogue.png" alt="Adding a PHP interpreter to PHPStorm">{:width="600px"}

Please refer to the PHPStorm documentation for further information on [how to configure a local PHP interpreter](https://www.jetbrains.com/help/phpstorm/2016.1/configuring-local-php-interpreters.html?origin=old_help).

It is also possible to [configure a remote PHP interpreter](https://www.jetbrains.com/help/phpstorm/2016.1/configuring-remote-php-interpreters.html?origin=old_help), which is a common setup when working with Vagrant or {% glossarytooltip 57f1b0dc-1341-466d-a685-e0dbf5a3b713 %}Docker{% endglossarytooltip %} based development environments.

Please be aware that the details on configuring the PHP interpreter might vary between PHPStorm versions.

### Configuring PHPUnit

After configuring the interpreter, the next step is to set up the PHPStorm preferences for how to execute PHPUnit.

<img src="{{ site.baseurl }}/common/images/phpstorm_phpunit_preferences_dialogue.png" alt="PHPStorm PHPUnit preference panel">{:width="600px"}

1.	Click the **Use custom autoloader** option.
2.	Select the `vendor/autoload.php` file in your Magento 2 installation.
3.	Optionally select the `dev/tests/unit/phpunit.xml.dist` file as the **Default configuration file**. Doing this step makes creating temporary run configurations more convenient.

Please refer to the PHPStorm documentation for further information on [enabling PHPUnit in PHPStorm](https://www.jetbrains.com/help/phpstorm/2016.1/enabling-phpunit-support.html#useAutoload).

### Creating a run configuration

The final step is to create a *run configuration* to execute the desired tests. 

There are many ways to create run configurations in PHPStorm. Here we just show one of the option.

All start by creating a new run configuration. To do so, follow these steps:

1.	Select the **Run > Edit Configurations** action from the top menu.
2.	Click the **+** symbol on the top right and select **PHPUnit**.

Depending on what tests should be included in the run configuration, the next steps differ.  

#### Running all tests

1.	Give the run configuration a descriptive name; for example **All Unit Tests**
2.	Test Scope: select the **Defined in the configuration file** radio button
3.	Check the **Use alternative configuration file** checkbox
4.	Select the file `dev/tests/unit/phpunit.xml.dist`
5.	Click **OK**.

<img src="{{ site.baseurl }}/common/images/phpstorm_run_config_all_unit_tests.png" alt="All Unit Tests run configuration">{:width="600px"}

#### Running the tests of one module

1.	Give the run configuration a descriptive name; for example, **Example_Module Unit Tests**
2.	Test Scope: select the **Directory** option
3.	Select the directory containing the modules unit tests. PHPUnit will run every file ending with `Test.php` in the selected directory branch.
3.	Click **OK**.

<img src="{{ site.baseurl }}/common/images/phpstorm_run_config_module_unit_tests.png" alt="Module Unit Tests run configuration">{:width="600px"}

#### Running the tests in a class

1.	Give the run configuration a descriptive name like the name of the test class; for example, **FrontControllerPluginTest**.
2.	Test Scope: select the **Class** option.
3.	Class: enter the fully qualified class name (including the PHP namespace).
4.	File: select the file containing the test class.
5.	Click **OK**.

<img src="{{ site.baseurl }}/common/images/phpstorm_run_config_class_unit_tests.png" alt="Test Class run configuration">{:width="600px"}

A more convenient way to create a run configuration for a test class is to open the class in PHPStorm, and then right-clicking into the class and selecting **Create 'TestClassName'** or **Run 'TestClassName'**.  

Note that the test class has to inherit from `\PHPUnit_Framework_TestCase` for PHPStorm to display that option.

### Executing the run configuration

First select the run configuration to execute in the run configuration drop-down menu above the main editor window, then click the **Play** icon beside it.  

By clicking the **Debug** icon (of a bug) next to the **Play** icon, it is possible to step-debug code during test execution, if the xdebug PHP {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} is installed.


