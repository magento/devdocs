---
layout: default
group: mtf-guide
subgroup: C_Quickstart
title: Quick start with the Magento Testing Framework
menu_title: Test run
menu_order: 3
github_link: mtf/mtf_quickstart/mtf_quickstart_runtest.md
redirect_from: /guides/v1.0/mtf/mtf_quickstart/mtf_quickstart_runtest.html
---
<h2 id="mtf_quickstart_testrun">Test run</h2>
All tests classified by categories in corresponding directories in `magento2ce/dev/tests/functional/tests/app/Magento`.

MTF uses PHPUnit, which is located in `magento2ce/dev/tests/functional/vendor/bin` directory.

Be sure that your system is ready for test run.

- <a href="{{site.gdeurl}}mtf/mtf_installation.html#mtf_install_pre">Magento is ready for tests</a>
- <a href="{{site.gdeurl}}mtf/mtf_installation.html#mtf_install_check">The Magento Testing Framework is installed</a>
- <a href="{{site.gdeurl}}mtf/mtf_quickstart/mtf_quickstart_config.html">The Magento Testing Framework is configured</a>
- <a href="{{site.gdeurl}}mtf/mtf_quickstart/mtf_quickstart_environmemt.html">Environment is ready to test run</a>

<h3 id="mtf_quickstart_testrun_all">Run all tests</h3>

Enter in terminal:

    phpunit

This command will run all tests from `magento2ce/dev/tests/functional/tests/app/Magento/`.

<h3 id="mtf_quickstart_testrun_one">Run particular test</h3>

Enter in terminal

    phpunit --filter <name of test>

Name of test is the name of PHP file with test.

Example:

Let's check creating of new category. For this we should run `magento2ce/dev/tests/functional/tests/app/Magento/Catalog/Test/TestCase/Category/CreateCategoryEntityTest.php`. To run this test enter the following script in your terminal:

    phpunit --filter CreateCategoryEntityTest

<h2 id="mtf_install_pre">Next Steps</h2>
<a href="{{ site.gdeurl }}mtf/mtf_quickstart/mtf_quickstart_environmemt.html">&lt;&lt; Prepare environment for test </a> | <a href="{{ site.gdeurl }}mtf/mtf_quickstart/mtf_quickstart_logs.html"> See logs for failed tests &gt;&gt;</a>
