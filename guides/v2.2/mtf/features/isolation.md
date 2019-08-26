---
group: functional-testing-framework-guide
title: Isolation management
---

Isolation management feature enables you to isolate a test suite, a test case, or a test using custom logic coded in a script. You can use it to return your system to its initial state (drop a database, clean cache, reset filesystem) or perform any other procedures that you need.

In general, to manage isolation:

 - [Create an isolation script][step 1]

 - [Set isolation script][step 2]

    - For all functional tests (globally), set [isolation configuration]. For example, set isolation script globally to be run [after each test case][step 2a], [before each test][step 2b], [before and after a test suite][step 2c].
    - For certain test or test case, define an isolation strategy parameter in PHP Doc annotation of a test case or a test. For example, set isolation script locally to be run [after a test case][step 2d], [after each test of a test case][step 2e], [before test of a test case][step 2f], [before a test case and after a test][step 2g]; or excluded [for a test case][step 2h], [for a test][step 2i].

Isolation strategy parameter defines when the isolation script must be run relatively to a [test suite], a [test case], or a [test]: **before**, **after**, **both** (that is run both before and after), **none** (never run).

The following example demonstrates how you can use isolation management.

## Step 1: Create an isolation script {#step-1}

Assume that we want to return a database, dumped to `/var/www/magento/magento.dump.sql`, to its initial state. You can implement it using the following code:

```php
<?php
exec('mysql -umagento -pmagento -e"DROP DATABASE magento; CREATE DATABASE magento CHARACTER SET utf8;"');
exec('mysql -umagento -pmagento magento < /var/www/magento/magento.dump.sql');
```

By default, [isolation configuration] points to `dev/tests/functional/isolation.php`.

Add the code to `<magento root dir>/dev/tests/functional/isolation.php`.

It means that during test run the FTF would call `http://magento2ce.com/dev/tests/functional/isolation.php` (`<baseUrl>` is set to `http://magento2ce.com/`) according to selected isolation strategy.

{: .bs-callout .bs-callout-warning }
Isolation script is run in a web browser and must be accessible by a web server.

## Step 2: Set isolation script {#step-2}

You can set isolation script globally, in configuration file, or locally, directly in a test case. The following examples show different options.

{: .bs-callout .bs-callout-warning }
Isolation management for a certain test or test case has higher priority than global.

### Step 2(a): Globally set isolation script to be run after each test case {#step-2a}

- Open `<magento root dir>/dev/tests/functional/config.xml`.
- In `<isolation>`, set `<testCase>after</testCase>`, for example:

```xml
<isolation>
    <resetUrlPath>dev/tests/functional/isolation.php</resetUrlPath>
    <testSuite>none</testSuite>
    <testCase>after</testCase>
    <test>none</test>
</isolation>
```

### Step 2(b): Globally set isolation script to be run before each test {#step-2b}

- Open `<magento root dir>/dev/tests/functional/config.xml`.
- In `<isolation>`, set `<test>before</test>`, for example:

```xml
<isolation>
    <resetUrlPath>dev/tests/functional/isolation.php</resetUrlPath>
    <testSuite>none</testSuite>
    <testCase>none</testCase>
    <test>before</test>
</isolation>
```

### Step 2(c): Globally set isolation script to be run before and after a test suite {#step-2c}

- Open `<magento root dir>/dev/tests/functional/config.xml`.
- In `<isolation>`, set `<testSuite>both</testSuite>`, for example:

```xml
<isolation>
    <resetUrlPath>dev/tests/functional/isolation.php</resetUrlPath>
    <testSuite>both</testSuite>
    <testCase>none</testCase>
    <test>none</test>
</isolation>
```

### Step 2(d): Locally set isolation script to be run after a test case {#step-2d}

Example test case: `\Magento\Checkout\Test\TestCase\OnePageCheckoutTest`.

- Open `<magento root dir>/dev/tests/functional/tests/app/Magento/Checkout/Test/TestCase/OnePageCheckoutTest.php`.
- Add `* @isolation after` to the class annotation, for example:

```php
/**
 * ...
 * @isolation after
 */
class OnePageCheckoutTest extends Scenario
...
```

### Step 2(e): Locally set isolation script to be run after each test of a test case {#step-2e}

Example test case: `\Magento\Checkout\Test\TestCase\OnePageCheckoutTest`.

- Open `<magento root dir>/dev/tests/functional/tests/app/Magento/Checkout/Test/TestCase/OnePageCheckoutTest.php`.
- Add `* @isolation test after` to the class annotation, for example:

```php
/**
 * ...
 * @isolation test after
 */
class OnePageCheckoutTest extends Scenario
...
```

### Step 2(f): Locally set isolation script to be run before test of a test case {#step-2f}

Example test case: `\Magento\Checkout\Test\TestCase\OnePageCheckoutTest`.
Example test: `test()`.

- Open `<magento root dir>/dev/tests/functional/tests/app/Magento/Checkout/Test/TestCase/OnePageCheckoutTest.php`
- Add `* @isolation before` to the `test()` method annotation, for example:

```php

    /**
     * ...
     * @isolation before
     */
    public function test()
    ...
```

### Step 2(g): Locally set isolation script to be run before a test case and after a test {#step-2g}

Example test case: `\Magento\Checkout\Test\TestCase\OnePageCheckoutTest`.
Example test: `test()`.

- Open `<magento root dir>/dev/tests/functional/tests/app/Magento/Checkout/Test/TestCase/OnePageCheckoutTest.php`.
- Add `* @isolation before` to the class annotation and `* @isolation after` to the `test()` method annotation, for example:

```php
/**
 * ...
 * @isolation before
 */
class OnePageCheckoutTest extends Scenario
    {
    /**
     * ...
     * @isolation after
     */
    public function test()
    ...
    }
```

### Step 2(h): Locally set isolation script to be excluded for a test case {#step-2h}

Example test case: `\Magento\Checkout\Test\TestCase\OnePageCheckoutTest`.

- Open `<magento root dir>/dev/tests/functional/tests/app/Magento/Checkout/Test/TestCase/OnePageCheckoutTest.php`.
- Add `* @isolation none` to the class annotation, for example:

```php
/**
 * ...
 * @isolation none
 */
class OnePageCheckoutTest extends Scenario
...
```

### Step 2(i): Locally set isolation script to be excluded for a test {#step-2i}

Example test case: `\Magento\Checkout\Test\TestCase\OnePageCheckoutTest`.
Example test: `test()`.

- Open `<magento root dir>/dev/tests/functional/tests/app/Magento/Checkout/Test/TestCase/OnePageCheckoutTest.php`.
- Add `* @isolation none` to the `test()` method annotation, for example:

```php

    /**
     * ...
     * @isolation none
     */
    public function test()
    ...
```

<!-- LINK DEFINITIONS -->

[step 1]: #step-1
[step 2]: #step-2
[step 2a]: #step-2a
[step 2b]: #step-2b
[step 2c]: #step-2c
[step 2d]: #step-2d
[step 2e]: #step-2e
[step 2f]: #step-2f
[step 2g]: #step-2g
[step 2h]: #step-2h
[step 2i]: #step-2i

[isolation configuration]: {{ page.baseurl }}/mtf/configuration.html#isolation
[test]: {{ page.baseurl }}/mtf/mtf_entities/mtf_testcase.html#test-method
[test case]: {{ page.baseurl }}/mtf/mtf_entities/mtf_testcase.html
[test suite]: {{ page.baseurl }}/mtf/features/test_suite.html
