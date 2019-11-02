---
group: functional-testing-framework-guide
title: Quick start. Test run
---

All tests classified by categories in corresponding directories in `<magento2_root_dir>/dev/tests/functional/tests/app/Magento`.

FTF uses PHPUnit, which is located in `<magento2_root_dir>/dev/tests/functional/vendor/bin` directory.

Be sure that your system is ready for test run.

-  [Magento is ready for tests]({{ page.baseurl }}/mtf/mtf_installation.html#mtf_install_pre)
-  [The Functional Testing Framework is installed]({{ page.baseurl }}/mtf/mtf_installation.html#mtf_install_check)
-  [The Functional Testing Framework is configured]({{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_config.html)
-  [Environment is ready to test run]({{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_environment.html)

### Run all tests {#mtf_quickstart_testrun_all}

Enter in terminal:

```bash
cd <magento2_root_dir>/dev/tests/functional
```

```bash
vendor/bin/phpunit
```

This command will run all tests from `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/`.

### Run particular test {#mtf_quickstart_testrun_one}

Enter in terminal:
```bash
cd <magento2_root_dir>/dev/tests/functional
```

```bash
vendor/bin/phpunit --filter <name of test>
```

Name of test is the name of [PHP](https://glossary.magento.com/php) file with test.

Example:

Let's check creating of new category. For this we should run `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/Catalog/Test/TestCase/Category/CreateCategoryEntityTest.php`. To run this test enter the following script in your terminal:

```bash
cd <magento2_root_dir>/dev/tests/functional
```
```bash
vendor/bin/phpunit --filter CreateCategoryEntityTest
```

## Next Steps {#mtf_install_pre}

[&lt;&lt; Prepare environment for test]({{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_environment.html) | [See logs for failed tests &gt;&gt;]({{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_logs.html)
