---
group: mtf-guide
title: Quick start. Test run
version: 2.0
github_link: mtf/mtf_quickstart/mtf_quickstart_runtest.md
---

All tests classified by categories in corresponding directories in `<magento2_root_dir>/dev/tests/functional/tests/app/Magento`.

FTF uses PHPUnit, which is located in `<magento2_root_dir>/dev/tests/functional/vendor/bin` directory.

Be sure that your system is ready for test run.

- <a href="{{ page.baseurl }}/mtf/mtf_installation.html#mtf_install_pre">Magento is ready for tests</a>
- <a href="{{ page.baseurl }}/mtf/mtf_installation.html#mtf_install_check">The Functional Testing Framework is installed</a>
- <a href="{{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_config.html">The Functional Testing Framework is configured</a>
- <a href="{{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_environment.html">Environment is ready to test run</a>

### Run all tests {#mtf_quickstart_testrun_all}

Enter in terminal:
    
    cd <magento2_root_dir>/dev/tests/functional
    vendor/bin/phpunit

This command will run all tests from `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/`.

### Run particular test {#mtf_quickstart_testrun_one}

Enter in terminal:

    cd <magento2_root_dir>/dev/tests/functional
    vendor/bin/phpunit --filter <name of test>

Name of test is the name of {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} file with test.

Example:

Let's check creating of new category. For this we should run `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/Catalog/Test/TestCase/Category/CreateCategoryEntityTest.php`. To run this test enter the following script in your terminal:

    cd <magento2_root_dir>/dev/tests/functional
    vendor/bin/phpunit --filter CreateCategoryEntityTest

<h2 id="mtf_install_pre">Next Steps</h2>

[&lt;&lt; Prepare environment for test]({{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_environment.html) | [See logs for failed tests &gt;&gt;]({{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_logs.html)
