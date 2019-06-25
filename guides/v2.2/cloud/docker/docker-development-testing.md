---
group: cloud-guide
title: Functional testing in Docker
functional_areas:
  - Cloud
  - Docker
  - Configuration
---

You can use the `{{site.data.var.ct}}` package to run functional tests in the Docker environment. Functional tests are in the `src/Test/Functional/Acceptance` folder. See an example in the [ece-tools repository](https://github.com/magento/ece-tools/tree/develop/src/Test/Functional/Acceptance).

## Prerequisites

Before you run functional tests, you must prepare your environment with the following steps.

1.  Stop all services that use the following ports:

    -  `80`—varnish
    -  `443`—web, tls
    -  `3306`—apache, mysql

1.  Switch to the preferred PHP version for running tests.

1.  Update the project dependencies.

    ```bash
    composer update
    ```

1.  Add credentials to the Docker environment.

    ```bash
    echo "COMPOSER_MAGENTO_USERNAME=your_public_key" >> ./.docker/composer.env
    ```

    ```bash
    echo "COMPOSER_MAGENTO_PASSWORD=your_private_key" >> ./.docker/composer.env
    ```

## Run tests

By default, tests produce a short output. If you need a more detailed output, you can edit the `codeception.dist.yml` file and set the `printOutput:` property to `true`. !!! need location and example of `codeception.dist.yml`

### Run a specific test

Use the following format to run a specific functional test:

```bash
./vendor/bin/codecept run Acceptance <TestName>Cest
```

For example, the following runs a test on the post deploy...explain more here...

```bash
./vendor/bin/codecept run Acceptance PostDeployCest
```

Sample response:

```terminal
Need sample output here.
```
{: .no-copy}

### Run all tests

The following lists the scripts to run all tests for each version of PHP.

-  **PHP 7.0**

    ```bash
    ./vendor/bin/codecept run -g php70 --steps
    ```

-  **PHP 7.1**

    ```bash
    ./vendor/bin/codecept run -g php71 --steps
    ```

-  **PHP 7.2**

    ```bash
    ./tests/travis/prepare_functional_parallel.sh
    ```

    ```bash
    ./vendor/bin/codecept run -g php72parallel_1 --steps
    ```

    ```bash
    ./vendor/bin/codecept run -g php72parallel_2 --steps
    ```

    ```bash
    ./vendor/bin/codecept run -g php72parallel_3 --steps
    ```
