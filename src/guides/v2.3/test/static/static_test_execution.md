---
group: testing
title: Running Static Tests
functional_areas:
  - Testing
  - test
---

Executing Magento 2 static tests is straightforward. They can be executed in several ways.

### Running static tests on all files

To run static tests on all files, navigate to the Magento base directory and execute the following command:

```bash
bin/magento dev:test:run static
```

### Running PHP static tests on a subset of files

To run the static tests on a subset of files, create a new testsuite for phpunit:

1. From the Magento base directory navigate to `dev/tests/static/testsuite/Magento/Test`

1. Create a copy of the `Php` folder on the same directory and rename it to `Local`

1. Navigate to `dev/tests/static/testsuite/Magento/Test/Local/_files/whitelist` and open `common.txt`

1. Replace the contents with the folder of the files that you want to test. For example:

   ```text
   # Format: <componentType=module|library|theme|language|*> <componentName> <globPattern> or simply <globPattern>
   app/code/Magento/CatalogSearch/Model/Search
   ```

1. Create a copy of the `dev/tests/static/phpunit.xml.dist` file and call it `phpunit.xml`:

1. Add a new testsuite to the `dev/tests/static/phpunit.xml` file inside the `<testsuites>` node:

   ```xml
    <testsuites>
        ...
        <testsuite name="Local Test Suite">
            <file>testsuite/Magento/Test/Local/LiveCodeTest.php</file>
        </testsuite>
    </testsuites>
   ```

1. Navigate to the Magento base directory and run:

   ```bash
   ./vendor/bin/phpunit --testsuite="Local Test Suite" -c dev/tests/static/phpunit.xml.dist
   ```

As a result of this process, you can run PHP static tests on a subset of files. It is also possible to run other types of static tests by following the same process with other testsuites.
