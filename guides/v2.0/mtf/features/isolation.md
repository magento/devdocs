---
layout: default
group: mtf-guide
subgroup: 45_Features
title: Isolation management
menu_title: Isolation management
version: 2.0
github_link: mtf/features/isolation.md
---

Isolation management feature enables you to isolate a test suite, a test case, or a test using custom logic coded in a script. You can use it to return your system to initial state (drop a database, clean cache, reset filesystem) or perform any other procedures that you need.

In general, to manage isolation you should:

 - Create an isolation script.
 
 <div class="bs-callout bs-callout-warning" markdown="1">
 Isolation script is run in a web browser and must have corresponding permissions on your web server.
 </div>
 
 - For global use, set [isolation configuration].
 - For certain test or test case, define isolation strategy in PHP Doc annotation of a test case or a test.
 
<div class="bs-callout bs-callout-warning" markdown="1">
Isolation management for a certain test or test case has higher priority than global.
</div>
 
Isolation strategy defines when isolation script must be run relatively to a [test suite], a [test case], or a [test]: **before**, **after**, **both** (that is run both before and after), **none** (never run).

The following example demonstrates how you can use isolation management.

## Step 1: Create an isolation script

Assume that we want to return a database (previously dumped to `/var/www/magento/magento.dump.sql`) to the initial state. It can be implemented using the following code:

{% highlight php %}
<?php
exec('mysql -umagento -pmagento -e"DROP DATABASE magento; CREATE DATABASE magento CHARACTER SET utf8;"');
exec('mysql -umagento -pmagento magento < /var/www/magento/magento.dump.sql');
{% endhighlight %}

By default, [isolation configuration] points to `dev/tests/functional/isolation.php` that's why we can simply add our code to `<magento root dir>/dev/tests/functional/isolation.php`. It means that during test run the FTF would call an URL `http://magento2ce.com/dev/tests/functional/isolation.php` (`<baseUrl>` is set to `http://magento2ce.com/`) according to selected isolation strategy.

## Step 2(a): Globaly set isolation script to be run after each test case

- Open `<magento root dir>/dev/tests/functional/config.xml`.
- In `<isolation>`, set `<testCase>after</testCase>`, for example:

{%highlight xml%}
<isolation>
    <resetUrlPath>dev/tests/functional/isolation.php</resetUrlPath>
    <testSuite>none</testSuite>
    <testCase>after</testCase>
    <test>none</test>
</isolation>
{%endhighlight%}

## Step 2(b): Globaly set isolation script to be run before each test

- Open `<magento root dir>/dev/tests/functional/config.xml`.
- In `<isolation>`, set `<test>before</test>`, for example:

{%highlight xml%}
<isolation>
    <resetUrlPath>dev/tests/functional/isolation.php</resetUrlPath>
    <testSuite>none</testSuite>
    <testCase>none</testCase>
    <test>before</test>
</isolation>
{%endhighlight%}

## Step 2(c): Globaly set isolation script to be run before and after a test suite

- Open `<magento root dir>/dev/tests/functional/config.xml`.
- In `<isolation>`, set `<testSuite>both</testSuite>`, for example:

{%highlight xml%}
<isolation>
    <resetUrlPath>dev/tests/functional/isolation.php</resetUrlPath>
    <testSuite>both</testSuite>
    <testCase>none</testCase>
    <test>none</test>
</isolation>
{%endhighlight%}

## Step 2(d): Localy set isolation script to be run after a test case

Example test case: `\Magento\Checkout\Test\TestCase\OnePageCheckoutTest`.

- Open `<magento root dir>/dev/tests/functional/tests/app/Magento/Checkout/Test/TestCase/OnePageCheckoutTest.php`.
- Add `* @isolation after` to the class annotation, for example:

{% highlight php startinline=1 %}
/**
 * ...
 * @isolation after
 */
class OnePageCheckoutTest extends Scenario
...
{%endhighlight%}

## Step 2(e): Localy set isolation script to be run after each test of a test case

Example test case: `\Magento\Checkout\Test\TestCase\OnePageCheckoutTest`.

- Open `<magento root dir>/dev/tests/functional/tests/app/Magento/Checkout/Test/TestCase/OnePageCheckoutTest.php`.
- Add `* @isolation test after` to the class annotation, for example:

{% highlight php startinline=1 %}
/**
 * ...
 * @isolation test after
 */
class OnePageCheckoutTest extends Scenario
...
{% endhighlight %}

## Step 2(f): Localy set isolation script to be run before test of a test case

Example test case: `\Magento\Checkout\Test\TestCase\OnePageCheckoutTest`.
Example test: `test()`.

- Open `<magento root dir>/dev/tests/functional/tests/app/Magento/Checkout/Test/TestCase/OnePageCheckoutTest.php`
- Add `* @isolation before` to the `test()` method annotation, for example:

{% highlight php startinline=1 %}

    /**
     * ...
     * @isolation before
     */
    public function test()
    ...
{% endhighlight %}

## Step 2(g): Localy set isolation script to be run before a test case and after a test

Example test case: `\Magento\Checkout\Test\TestCase\OnePageCheckoutTest`.
Example test: `test()`.

- Open `<magento root dir>/dev/tests/functional/tests/app/Magento/Checkout/Test/TestCase/OnePageCheckoutTest.php`.
- Add `* @isolation before` to the class annotation and `* @isolation after` to the `test()` method annotation, for example:

{% highlight php startinline=1 %}
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
{% endhighlight %}

## Step 2(h): Localy set isolation script to be excluded for a test case

Example test case: `\Magento\Checkout\Test\TestCase\OnePageCheckoutTest`.

- Open `<magento root dir>/dev/tests/functional/tests/app/Magento/Checkout/Test/TestCase/OnePageCheckoutTest.php`.
- Add `* @isolation none` to the class annotation.

Example:

{% highlight php startinline=1 %}
/**
 * ...
 * @isolation none
 */
class OnePageCheckoutTest extends Scenario
...
{% endhighlight %}

## Step 2(i): Localy set isolation script to be excluded for a test

Example test case: `\Magento\Checkout\Test\TestCase\OnePageCheckoutTest`.
Example test: `test()`.

- Open `<magento root dir>/dev/tests/functional/tests/app/Magento/Checkout/Test/TestCase/OnePageCheckoutTest.php`.
- Add `* @isolation none` to the `test()` method annotation

Example:

{% highlight php startinline=1 %}

    /**
     * ...
     * @isolation none
     */
    public function test()
    ...
{% endhighlight %}


<!-- LINK DEFINITIONS -->

[isolation configuration]: {{page.baseurl}}mtf/configuration.html#isolation
[test]: {{page.baseurl}}mtf/mtf_entities/mtf_testcase.html#test-method
[test case]: {{page.baseurl}}mtf/mtf_entities/mtf_testcase.html
[test suite]: {{page.baseurl}}mtf/features/test_suite.html
