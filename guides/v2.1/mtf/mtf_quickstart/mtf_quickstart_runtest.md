---
group: mtf-guide
title: Quick start. Test run
---

All tests classified by categories in corresponding directories in `<magento2_root_dir>/dev/tests/functional/tests/app/Magento`.

FTF uses PHPUnit, which is located in `<magento2_root_dir>/dev/tests/functional/vendor/bin` directory.

Be sure that your system is ready for test run.

- [Magento is ready fortests]({{ page.baseurl }}/mtf/mtf_installation.html#mtf_install_pre)
- [The Functional Testing Framework isinstalled]({{ page.baseurl }}/mtf/mtf_installation.html#mtf_install_check)
- [The Functional Testing Framework isconfigured]({{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_config.html)
- [Environment is ready to testrun]({{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_environment.html)

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

## Next Steps {#mtf_install_pre}

[&lt;&lt; Prepare environment for test]({{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_environment.html) | [See logs for failed tests &gt;&gt;]({{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_logs.html)
