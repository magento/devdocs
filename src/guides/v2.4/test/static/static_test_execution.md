---
group: testing
title: Running Static Tests
functional_areas:
  - Testing
  - test
---

Executing the Magento 2 static tests is straight forward. They can be executed in different ways.

### Running static tests on all files

To run static tests on all files, navigate to the Magento base directory and execute the following command

```bash
./bin/magento dev:test:run static
```

### Running PHP static tests on a subset of files

To run the static tests on a subset of files, you will have to create a new testsuite for phpunit:

**Step 1.** Navigate to the Magento base directory and then to `dev/tests/static/testsuite/Magento/Test`

**Step 2.** Create a copy of the `Php` folder on the same directory and name it `Local`

**Step 3.** Navigate to `dev/tests/static/testsuite/Magento/Test/Local/_files/whitelist` and edit the `common.txt` file

**Step 4.** Replace the content on this file with the folder of the files that you want to test, for example:

```text
# Format: <componentType=module|library|theme|language|*> <componentName> <globPattern> or simply <globPattern>
app/code/Magento/CatalogSearch/Model/Search
```

**Step 5.** Create a copy of `dev/tests/static/phpunit.xml.dist` file and call it `phpunit.xml`:

**Step 6.** Add a new testsuite to the `dev/tests/static/phpunit.xml` file inside the `<testsuites>` node:
:

```xml
    <testsuites>
        ...
        <testsuite name="Local Test Suite">
            <file>testsuite/Magento/Test/Local/LiveCodeTest.php</file>
        </testsuite>
    </testsuites>
```

**Step 7.** Navigate to the Magento base directory and run this command:

```bash
./vendor/bin/phpunit --testsuite="Local Test Suite" -c dev/tests/static/phpunit.xml.dist 
```

As a result of this process you will be able to run PHP static tests on a subset of files, it is also possible to run other types of static tests by following the same process but using other testsuites.