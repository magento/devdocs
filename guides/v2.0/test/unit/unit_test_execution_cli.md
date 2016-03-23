---
layout: default
group: test-guide
subgroup: A_Running_Unit_Tests
title: Running Unit Tests on the CLI
menu_title: Running Unit Tests on the CLI
menu_node: parent
github_link: test/unit/unit_test_execution_cli.md
redirect_from: /guides/v2.0/test/unit/unit_test_execution_cli.html
---

##Running unit tests on the CLI

* TOC
{:toc}

### Running all unit tests

To run all tests, navigate to the Magento base directory and execute the following command:

{%highlight bash%}
$ ./vendor/bin/phpunit -c dev/tests/unit/phpunit.xml.dist
{%endhighlight%}

### Running only a subset of the unit tests

To run only tests within a specific directory branch, all you have to do is to specify the directory branch after the command.

The following example tells PHPUnit to look for any file ending with `Test.php` within the directory branch `app/code/Example/Module/Test/Unit` and try to execute it.

{%highlight bash%}
$ ./vendor/bin/phpunit -c dev/tests/unit/phpunit.xml.dist app/code/Example/Module/Test/Unit
{%endhighlight%}

#### Explanation

The `phpunit` executable is installed by `composer` and linked into the directory `vendor/bin`.  

The option `-c dev/tests/unit/phpunit.xml.dist` specifies the configuration file for PHPUnit.  

If custom configuration settings are required (more on that later), the file `dev/tests/unit/phpunit.xml.dist` can be copied to `dev/tests/unit/phpunit.xml` and adjusted as needed. In that case modify the `-c` flag accordingly.  

PHPUnit has many additional command line options. Please refer to the [PHPUnit documentation](https://phpunit.de/manual/4.1/en/textui.html#textui.clioptions) for more information (currently Magento 2 uses PHPUnit version 4.1.0).

### Solutions to common problems

#### Permission Denied

If you encounter the `permission denied: vendor/bin/phpunit` error you will have to prefix the command with the PHP interpreter, so your system knows what to use.  

{%highlight bash%}
$ php -f vendor/bin/phpunit -- -c dev/tests/unit/phpunit.xml.dist
{%endhighlight%}

#### Using the right PHP interpreter

If running the tests results in errors about missing PHP extensions, you might be using a wrong PHP interpreter.  
On many development systems more then one PHP version is installed.

Examples of common PHP locations on OS X:

* System: `/usr/bin/php`
* Homebrew: `/usr/local/Cellar/php56/5.6.19/bin/php`
* MAMP: `/Applications/MAMP/bin/php/php5.6.19/bin/php`

Be sure to use the same version of PHP to run the unit tests that is also used to run Magento.

#### Memory Limit

If you encounter an error similar to `Fatal error: Allowed memory size of 67108864 bytes exhausted`, follow these steps to resolve it.

1. Copy the PHPUnit configuration file `dev/tests/unit/phpunit.xml.dist` to `dev/tests/unit/phpunit.xml`
2. Find the section
   {%highlight xml%}
<php>
    <ini name="date.timezone" value="America/Los_Angeles"/>
    <ini name="xdebug.max_nesting_level" value="200"/>
</php>
    {%endhighlight%}
3. Add the following line within the `<php>` block to disable the PHP memory limit during test execution.
   {%highlight xml%}
    <ini name="memory_limit" value="-1"/>
    {%endhighlight%}
