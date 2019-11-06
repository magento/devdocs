---
group: cloud-guide
title: Functional testing in Docker
functional_areas:
  - Cloud
  - Docker
  - Configuration
---

You can use the `{{site.data.var.ct}}` package to run functional tests in the Docker environment, which is helpful when testing code intended for `{{site.data.var.ct}}` contribution. Functional tests are in the `src/Test/Functional/Acceptance` folder. See an example in the [ece-tools repository].

For testing the Magento application, see the [Magento Functional Testing Framework (MFTF)][mftf] guide.

## Prerequisites

Before you run functional tests, you must prepare your environment with the following steps.

1. Clone the {{site.data.var.ct}} GitHub repository.

   ```bash
   git clone git@github.com:magento/ece-tools.git
   ```

1. Stop all services that use the following ports:

   -  `80`—varnish
   -  `443`—web, tls
   -  `3306`—apache, mysql

1. Update the hosts file.

   Before you begin, you must add the following hostname to your `/etc/hosts` file:

   ```
   127.0.0.1 web
   ```

   Alternatively, you can run the following command to add it to the file:

   ```bash
   echo "127.0.0.1 web" | sudo tee -a /etc/hosts
   ```

1. Switch to the preferred PHP version for running tests.

1. Update the project dependencies.

   ```bash
   composer update
   ```

1. Add credentials to the Docker environment.

   ```bash
   echo "COMPOSER_MAGENTO_USERNAME=your_public_key" >> ./.docker/composer.env
   ```

   ```bash
   echo "COMPOSER_MAGENTO_PASSWORD=your_private_key" >> ./.docker/composer.env
   ```

## Run tests

The `codeception.dist.yml` file in the `{{site.data.var.ct}}` root directory contains the global testing configuration. See the [`{{site.data.var.ct}}` repository][codeception].

By default, functional tests produce a short output. You can receive a more detailed output by editing the `codeception.dist.yml` file to set the `printOutput:` property to `true`.

```yaml
modules:
  config:
    Magento\MagentoCloud\Test\Functional\Codeception\Docker:
      ...
      printOutput: true
```
{:.no-copy}

### Run a specific test

Use the following command format to run a specific functional test:

```bash
./vendor/bin/codecept run Acceptance <TestName>Cest
```

For example, the following test verifies that the post-deploy task runs successfully.

```bash
./vendor/bin/codecept run Acceptance PostDeployCest
```

Sample response:

```terminal
Codeception PHP Testing Framework v2.5.6
Powered by PHPUnit 6.5.14 by Sebastian Bergmann and contributors.
Running with seed:
Acceptance Tests (1) -----------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------
PostDeployCest: Test post deploy | {"ADMIN_EMAIL":"admin@example.com"}
 [Magento\MagentoCloud\Test\Functional\Robo\Tasks\GenerateDockerCompose] Running ./bin/ece-tools docker:build
 --mode=functional --php=7.2
...
...
✔ PostDeployCest: Test post deploy | {"ADMIN_EMAIL":"admin@example.com"} (210.41s)
```
{: .no-copy}

### Run all tests

The following list provides the commands to run all available tests for each version of PHP.

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

[ece-tools repository]: https://github.com/magento/ece-tools/tree/develop/src/Test/Functional/Acceptance
[mftf]: {{site.baseurl}}/mftf/docs/commands/mftf.html
[codeception]: https://github.com/magento/ece-tools/blob/develop/codeception.dist.yml