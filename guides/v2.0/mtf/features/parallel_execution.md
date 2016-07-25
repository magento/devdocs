---
layout: default
group: mtf-guide
subgroup: 45_Features
title: Parallel execution flow with the Functional Testing Framework
menu_title: Parallel execution flow
version: 2.0
github_link: mtf/mtf_features/parallel_execution.md
---

<h2>Contents</h2>

* TOC
{:toc}

## Overview

The parallel execution is applicable for [test suites][test suite] only. It decreases the time of testing due to distribution of test cases into multiple threads. A test case is an atom object for a thread and cannot be split between different threads. Parallel execution can use one or more Magento instances.

A general mechanism is:

1. The FTF creates the list of all tests in a test suite.
2. The FTF creates the required quantity of sessions corresponding to the quantity of threads defined in `<magento2>/dev/tests/functional/phpunit.xml`.
3. The FTF distributes tests between sessions. When a sessions is free, a new test from the queue runs.

Comparatively to the common testing flow

![Common flow image]({{site.baseurl}}common/images/mtf_features_common_dia.png){:width="150px"}

you can run a test suite using the parallel execution flow with one Magento instance

![Parallel execution flow with one instance image]({{site.baseurl}}common/images/mtf_features_parallel_one_dia.png){:width="400px"}

or run a test suite using the parallel execution flow with multiple Magento instances (RECOMMENDED)

![Common flow and Parallel execution flow image]({{site.baseurl}}common/images/mtf_features_parallel_multi_dia.png){:width="400px"}

## Setup the parallel execution

To setup a parallel execution flow, add Magento instances to `<magento2>/dev/tests/functional/phpunit.xml` in the following format:

{%highlight xml%}

<php>
    ...
    <env name="app_instances" value="<quantity of the Magento instances>" />
    <env name="app_frontend_url_<index number of the Magento instance>" value="<frontend URL of the Magento instance>" />
    <env name="app_backend_url_<index number of Magento instance>" value="<backend URL of the Magento instance>" />
    ...
</php>

{%endhighlight xml%}

<div class="bs-callout bs-callout-warning">
    <p>The default elements <code>"app_frontend_url"</code> and <code>"app_backend_url"</code> must be added obligatory. Otherwise FTF returns an error. The default instances are ignored if <code>"app_instances"</code> element is present.</p>
</div>

### Parallel execution flow with one Magento instance

<div class="bs-callout bs-callout-warning">
    <p>A test can affect execution of other tests.</p>
</div>

The following example shows a setup configuration of the flow with one Magento instance.

{% highlight xml %}

<php>
    ...
    <env name="app_frontend_url" value="http://example.com/magento2/index.php/" />            // The default frontend instance. Ignored by the FTF.
    <env name="app_backend_url" value="http://example.com/magento2/index.php/backend/" />     // The default backend instance. Ignored by the FTF.

    <env name="app_instances" value="3" />
    <env name="app_frontend_url_0" value="http://example.com/magento2/index.php/" />
    <env name="app_frontend_url_1" value="http://example.com/magento2/index.php/" />
    <env name="app_frontend_url_2" value="http://example.com/magento2/index.php/" />
    <env name="app_backend_url_0" value="http://example.com/magento2/index.php/backend/" />
    <env name="app_backend_url_1" value="http://example.com/magento2/index.php/backend/" />
    <env name="app_backend_url_2" value="http://example.com/magento2/index.php/backend/" />
    ...
</php>

{% endhighlight %}

### Parallel execution flow with multiple Magento instances (RECOMMENDED)

The following example shows the setup configuration of the flow with three Magento instances.

{% highlight xml %}

<php>
    ...
    <env name="app_frontend_url" value="http://example.com/magento2/index.php/" />            // The default frontend instance. Ignored by the FTF.
    <env name="app_backend_url" value="http://example.com/magento2/index.php/backend/" />     // The default backend instance. Ignored by the FTF.

    <env name="app_instances" value="3" />
    <env name="app_frontend_url_0" value="http://example_1.com/magento2/index.php/" />
    <env name="app_frontend_url_1" value="http://example_2.com/magento2/index.php/" />
    <env name="app_frontend_url_2" value="http://example_3.com/magento2/index.php/" />
    <env name="app_backend_url_0" value="http://example_1.com/magento2/index.php/backend/" />
    <env name="app_backend_url_1" value="http://example_2.com/magento2/index.php/backend/" />
    <env name="app_backend_url_2" value="http://example_3.com/magento2/index.php/backend/" />
    ...
</php>

{% endhighlight %}


<!-- LINK DEFINITIONS -->

[test suite]: {{page.baseurl}}mtf/mtf_features/test_suite.html
