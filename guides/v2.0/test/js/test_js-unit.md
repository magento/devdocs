---
layout: default
group: jstf
subgroup: JsTestDriver
title: JavaScript testing with JsTestDriver
menu_title: JsTestDriver
menu_node: parent
menu_order:
version: 2.0
github_link: test/js/test_js-unit.md
redirect_from: /guides/v1.0/extension-dev-guide/test/test_js-unit.html

---

## Preface

Magento JavaScript unit tests use the external [JsTestDriver test library]. The tests are implemented using the external [JsTestDriver API] and have their own [jsunit.requirejsUtil framework].

After you run the PHP interpreter once to run unit tests, you can [run the JavaScript unit tests from the PhpStorm IDE][PhpStorm].

## Overview {#unit-test-overview}

To run the automated JavaScript unit tests, you run the [`run_js_tests.php` script] inside the PHP interpreter from the command line. When you run the PHP script, it reads [configuration files] in the `<magento2_root_dir>/dev/tests/js` directory. It also generates a `jsTestDriver.conf` YAML configuration file in the `<magento2_root_dir>/dev/tests/js` directory. The JsTestDriver reads this generated file to run the tests. After the PHP interpreter runs for the first time, you can run the unit tests from the [PhpStorm IDE].

### JsTestDriver test library {#test-library}

Magento JavaScript unit tests use the external [JsTestDriver] library, which follows JUnit principles. The PHPUnit library also follows these principles.

### JsTestDriver API {#jstestdriver-api}

The unit tests are implemented through the JsTestDriver API. Web developers should be familiar with this API and test structure.

### jsunit.requirejsUtil framework {#framework}

The unit tests also have their own framework. The `framework/requirejs-util.js` file declares the `jsunit.requirejsUtil` framework object, which supports testing of `RequireJS` (AMD) modules.

These modules actively call the global `define()` function just upon loading rather than passively declaring their classes or functions. `RequireJS` modules usually do not expose anything to the global state. Instead, the modules pass all declarations to the `define()` function.

This organization enables testing of `RequireJS` modules without any additional Magento test framework (MTF) support. `jsunit.requirejsUtil` intercepts all `define()` calls and can pass `RequireJS` modules to their corresponding tests.

For example, `<magento2_root_dir>/dev/tests/js/testsuite/mage/requirejs/plugin/id-normalizer-test.js`:

{% highlight JavaScript %}
var IdNormalizerTest = TestCase('IdNormalizerTest');

IdNormalizerTest.prototype.setUp = function() {
    var defineArgs = jsunit.requirejsUtil.getDefineArgsInScript('lib/web/mage/requirejs/plugin/id-normalizer.js');

    assertNotUndefined('There expected to be a define() call', defineArgs);
    assertEquals('Wrong number of arguments in the define() call', 1, defineArgs.length);

    this.normalizer = defineArgs[0]; // Now we have object to be tested
};
{% endhighlight %}

## Configuration files {#config-files}

The `run_js_tests.php` script processes the [`jsTestDriver.php.dist`] and [`jsTestDriverOrder.php`] configuration files.

Both files reside in the `<magento2_root_dir>/dev/tests/js` directory.

### `jsTestDriver.php.dist` file {#jstestdrivephp}

`<magento2_root_dir>/dev/tests/js/jsTestDriver.php.dist` specifies the contents of the YAML configuration file used by JsTestDriver. It contains the following PHP code:

{% highlight php startinline=true %}
return array(
    'server' => 'http://localhost:9876',
    'proxy' => array(array('matcher' => '/lib/web/*', 'server' => '%s/test/%s/lib/web/')),
    'load' => array(
        '/lib/web/globalize',
        '/lib/web/jquery/ui',
        '/lib/web/mage/localization',
        '/lib/web/mage/validation',
        '/lib/web/mage/components'),
    'test' => array('/dev/tests/js/testsuite'),
    'serve' => array('/lib/web/mage/calendar')
);
{% endhighlight %}

For a description of these configuration parameters, see [Configuration file for test runner].

Parameters are the following:

* **server**. The default location of the JsTestDriver server in the form: `http://<hostname>:<port>`
* **proxy**. Sets the JsTestDriver to behave as a proxy. The proxy parameter is an array of arrays that enables you to specify multiple matcher and server proxies.
* **load**. Defines the list of files to load in the browser before any tests run.
* **test**. Defines the list of test sources to run.
* **serve**. Defines the list of static files to load by using the same domain as the JsTestDriver.

### `jsTestDriverOrder.php` file {#jstestdriverorderphp}

`<magento2_root_dir>/dev/tests/js/jsTestDriverOrder.php` specifies the order in which the JsTestDriver loads certain JavaScript files. It contains the following PHP code:

{% highlight php startinline=true %}
return array(
    '/lib/web/globalize/globalize.js',
    '/lib/web/jquery/jquery.js',
    '/lib/web/jquery/ui/jquery-ui.js',
    ...
);
{% endhighlight %}

The array applies load ordering to the files specified by the `load` parameter in the `jsTestDriver.php` or `jsTestDriver.php.dist` file.

## `run_js_tests.php` script {#process-overview}

To run the automated unit tests, you run the [`run_js_tests.php` script] inside the PHP interpreter from the command line.

To complete the unit tests, the PHP script completes this processing:

1. The script looks for the `JsTestDriver` parameter value in a `jsTestDriver` configuration file in the `<magento2_root_dir>/dev/tests/js` directory.

   If found, the script uses the custom `jsTestDriver.php` configuration file.

   Otherwise, the script uses the default `jsTestDriver.php.dist` configuration file.

2. The script looks for the `Browser` parameter value in the `jsTestDriver` configuration file that it found.
   If the parameter is not set in the configuration file, the script uses to the default browser location, as follows:
   * **64-bit Windows**. The location is `C:\Program Files (x86)\Mozilla Firefox\firefox.exe`.
   * **Linux**. The script runs the `which firefox` command to determine the location of the Firefox executable in your PATH.
3. If the script finds the browser executable and the `JsTestDriver.jar` file, it proceeds with the next step. Otherwise, the script fails.
4. The script determines the order in which the JsTestDriver loads certain JavaScript files through the `jsTestDriverOrder.php` configuration file in the `<magento2_root_dir>/dev/tests/js` directory.


## Step 1. Before you begin {#test-prereqs}

On the system where you plan to run the unit tests, install the following prerequisite software:

* **PHP**
* **The Firefox browser**

  On 64-bit Windows machines, the default installation directory is `C:\Program Files (x86)\Mozilla Firefox\firefox.exe`.

  On Linux machines, locate the browser executable in your PATH.

* **`JsTestDriver.jar`**

## Step 2. Configure unit tests {#main-api}

Configuration files are located in the `<magento2_root_dir>/dev/tests/js` directory.

In a custom `jsTestDriver.php` configuration file or the default `jsTestDriver.php.dist` file, set these configuration parameters:

Browser
: Defines the file path to the executable for the browser.

  If you do not set this value, the script uses to the default browser location, as follows:
  * **64-bit Windows**. The location is `C:\Program Files (x86)\Mozilla Firefox\firefox.exe`.
  * **Linux**. The script runs the `which firefox` command to determine the location of the Firefox executable in your PATH.

JsTestDriver
: Required. Defines the file path to the `JsTestDriver.jar` file.

## Step 3. Run unit tests {#run-js-unit-tests}

To run the automated JavaScript tests, run the `run_js_tests.php` script inside the PHP interpreter from the command line:

    php <magento2_root_dir>/dev/tests/js/run_js_tests.php

Find the test results in individual `.xml` files in the `<magento2_root_dir>/dev/tests/js/test-output` directory.

The output of the PHP command resembles this output:

**JsTestDriver output:**

    $ php <magento2_root_dir>dev/tests/js/run_js_tests.php
    java -jar C:\Users\mchiocca\lib\JsTestDriver.jar --config C:\git\magento2\dev\tests\js/jsTestDriver.conf --port 9876 --browser "C:\Program Files (x86)\Mozilla Firefox\firefox.exe" --tests all --testOutput C:\git\magento2\dev\tests\js/test-output
    setting runnermode QUIET
    ....................................
    Total 36 tests (Passed: 36; Fails: 0; Errors: 0) (138.00 ms)
      Firefox 15.0 Windows: Run 36 tests (Passed: 36; Fails: 0; Errors 0) (138.00 ms)

On Linux, the X Server might generate one or more warning messages in the output:

**X Server warning messages on Linux:**

    FreeFontPath: FPE "unix/:7100" refcount is 2, should be 1; fixing.

An X Server bug causes these benign messages, which you can ignore.

When you run the PHP script, it reads two configuration files. It also generates a `jsTestDriver.conf` YAML configuration file in the `<magento2_root_dir>/dev/tests/js` directory. The JsTestDriver reads this generated file to run the tests.

The contents of `jsTestDriver.conf` resembles this:

**Generated jsTestDriver.conf file:**

{% highlight yaml %}
server: http://localhost:9876
proxy:
  - {matcher: "/lib/web/*", server: "http://localhost:9876/test/C:/git/magento2/lib/web/"}
  ...
load:
  - ../../../lib/web/globalize/globalize.js
  ...
test:
  - ../../../dev/tests/js/testsuite/mage/calendar/calendar-test.js
  ...
serve:
  - ../../../lib/web/mage/calendar/calendar.js
  ...
{% endhighlight %}

## Step 4. Use PhpStorm to run unit tests

After the PHP interpreter runs for the first time, you can [run the JavaScript unit tests from the PhpStorm IDE][PhpStorm].

Complete these steps to use PhpStorm to run unit tests:

1. [Install the JsTestDriver plugin]
2. [Start the JsTestDriver server]
3. [Create a run configuration]
4. [Capture a browser]

### Install the JsTestDriver plugin {#install-plugin}

1. In PhpStorm, open **Settings** and select **Plugins**.
2. Click **Browse Repositories...**.
3. Right click **JSTestDriver Plugin** and select **Download and Install**.
4. Restart PhpStorm.

### Start the JsTestDriver server {#start-jstestdriver-server}

1. At the bottom of the IDE, click **JsTestDriver Server**.
2. In the **JsTestDriver Server** panel, click the green right arrow to start the server.

   The bar changes to yellow and reads `There are no captured browsers`.

### Create a run configuration {#run-configuration}

1. Enter a name for the run configuration.
2. Select **Configuration File** and provide the location of the `jsTestDriver.conf` file generated by PHP.
3. Select **Running in IDE**.
4. Click **Test Connection**.
   The `Connection to http://localhost:9876 is OK, no captured browsers` message appears.

### Capture a browser {#capture-browser}

1. In the **JsTestDriver Server** panel, click a browser icon.

   The selected browser opens. In the browser, a green header shows the `Server: Waiting...` message.

   The colored bar in the **JsTestDriver Server** panel turns green.

   The `Ready to run tests` message appears.

2. To run the unit tests, select **Run Configuration** and click the **Run** icon.

   A panel at the bottom of the IDE shows the test results.

3. Depending on whether you have changed one or more configuration files, complete the appropriate step to run the tests:
   * **No changed configuration files**
     Use PhpStorm to run the tests.
     Before you can run the tests, click the red square icon in the **JsTestDriver Server** panel to stop the JsTestDriver server that runs in PhpStorm. You must also close the captured browser.
   * **One or more changed configuration files**
     Use the PHP interpreter at the command line to regenerate the `jsTestDriver.conf` file and run the tests.


<!-- LINK DEFINITIONS -->

<!-- Web links -->
[Configuration file for test runner]: https://code.google.com/p/js-test-driver/wiki/ConfigurationFile
[JsTestDriver]: https://code.google.com/archive/p/js-test-driver/wikis/GettingStarted.wiki

<!-- Topic links -->
[Capture a browser]: #capture-browser
[configuration files]: #config-files
[Create a run configuration]: #run-configuration
[`jsTestDriver.php.dist`]: #jstestdrivephp
[`jsTestDriverOrder.php`]: #jstestdriverorderphp
[JsTestDriver API]: #jstestdriver-api
[JsTestDriver test library]: #test-library
[jsunit.requirejsUtil framework]: #framework
[Install the JsTestDriver plugin]: #install-plugin
[`run_js_tests.php` script]: #process-overview
[PhpStorm]: #phpstorm
[Start the JsTestDriver server]: #start-jstestdriver-server
