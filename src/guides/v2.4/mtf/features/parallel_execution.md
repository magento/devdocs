---
group: functional-testing-framework-guide
title: Parallel execution flow with the Functional Testing Framework
---

## Overview

Parallel execution is applicable for [test suites] only. It decreases the time of testing due to distribution of test cases into multiple threads. A test case cannot be split between different threads. Parallel execution can use one or more copies of the Magento application under test (Magento instances).

A general mechanism is:

1. The FTF creates the list of all test cases in a test suite.
1. The FTF creates the required quantity of sessions corresponding to the quantity of threads defined in `<magento2_root_dir>/dev/tests/functional/phpunit.xml`.
1. The FTF distributes test cases between sessions. When a sessions is free, a new test case from the queue runs.

Comparatively to the common testing flow

![Common flow image]({{ site.baseurl }}/common/images/ftf/mtf_features_common_dia.png)

you can run a test suite using parallel execution flow with one Magento instance

![Parallel execution flow with one instance image]({{ site.baseurl }}/common/images/ftf/mtf_features_parallel_one_dia.png)

or run a test suite using parallel execution flow with multiple Magento instances.

![Common flow and Parallel execution flow image]({{ site.baseurl }}/common/images/ftf/mtf_features_parallel_multi_dia.png)

## Set up parallel execution

To set up a parallel execution flow, add Magento instances to `<magento2_root_dir>/dev/tests/functional/phpunit.xml` in the following format:

```xml
<php>
    ...
    <env name="app_instances" value="<quantity of the Magento instances>" />
    <env name="app_frontend_url_<index number of the Magento instance>" value="<frontend URL of the Magento instance>" />
    <env name="app_backend_url_<index number of Magento instance>" value="<backend URL of the Magento instance>" />
    ...
</php>
```

{:.bs-callout-warning}
The default elements `"app_frontend_url"` and `"app_backend_url"` must be added obligatory. Otherwise FTF returns an error. The default instances are ignored if `"app_instances"` element is present.

### Parallel execution flow with one Magento instance

Parallel execution flow with one Magento instance should be used with a caution. In this mode, test cases are executed simultaneously and can conflict with each other (for example, when different tests set the same parameter in different states).

{:.bs-callout-warning}
Parallel execution flow with one Magento instance can cause conflict between tests running at the same time.

The following example shows a setup configuration of the flow with one Magento instance.

```xml
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
```

### Parallel execution flow with multiple Magento instances

The following example shows a setup configuration of the flow with three Magento instances.

```xml
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
```

## Run parallel execution flow

To run parallel execution flow, you must configure and run a test suite and corresponding Magento instances.

Run the test suite:

```bash
cd <magento2_root_dir>/dev/tests/functional
```

```bash
vendor/bin/phpunit testsuites/Magento/Mtf/TestSuite/InjectableTests.php
```

<!-- LINK DEFINITIONS -->

[test suites]: {{ page.baseurl }}/mtf/features/test_suite.html
