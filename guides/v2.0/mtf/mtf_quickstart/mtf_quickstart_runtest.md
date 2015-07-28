---
layout: default
group: mtf-guide
subgroup: Quick Start
title: Quick start with the Magento Testing Framework
menu_title: Test run
menu_order: 3
github_link: mtf/mtf_quickstart/mtf_quickstart_testrun.md
redirect_from: /guides/v1.0/mtf/mtf_quickstart/mtf_quickstart_testrun.html
---
<h2 id="mtf_quickstart_testrun">Test run</h2>
All tests classified by categories in corresponding directories in <code>&lt;magento_root&gt;/dev/tests/functional/tests/app/Magento</code>.

For running tests MTF uses PHPUnit. It is located in <code>&lt;magento_root&gt;/dev/tests/functional/vendor/bin</code> directory.

Be sure that your system is ready for test run.

- <a href="{{site.gdeurl}}/mtf/mtf_installation/mtf_preinstall.html">Magento is ready for tests</a>
- <a href="{{site.gdeurl}}/mtf/mtf_installation/mtf_install.html">The Magento Testing Framework is installed</a>
- <a href="{{site.gdeurl}}/mtf/mtf_installation/mtf_quickstart_config.html">The Magento Testing Framework is configured</a>
- <a href="{{site.gdeurl}}/mtf/mtf_installation/mtf_quickstart_environmemt.html">Environment is ready to test run</a>

<h3 id="mtf_quickstart_testrun_all">Run all tests</h3>

1.    Open terminal.
1.    Enter <code>phpunit</code>.

<h3 id="mtf_quickstart_testrun_one">Run particular test</h3>

1.    Open terminal.
1.    Enter <code>phpunit --filter &lt;name of test&gt;</code>.

Name of test is the name of PHP file with test.

Example: <code>phpunit --filter CreateCategoryEntityTest</code> runs <code>CreateCategoryEntityTest.php</code> from <code>&lt;magento_root&gt;/dev/tests/functional/tests/app/Magento/Catalog/Test/TestCase/Category</code>. Test checks creating of new category.
