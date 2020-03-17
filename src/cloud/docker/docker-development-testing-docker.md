---
group: cloud-guide
title: Magento Cloud Docker testing
functional_areas:
  - Cloud
  - Docker
  - Configuration
---

You can use the `magento-cloud-docker` package to run functional tests in the Docker environment, which is helpful when testing code intended for `magento-cloud-docker` contribution. Functional tests are in the `src/Test/Functional/Acceptance` folder of the [magento-cloud-docker repository].

For testing the Magento application, see the [Magento Functional Testing Framework (MFTF)][mftf] guide.

## Prerequisites

Before you run functional tests, you must prepare your environment with the following steps.

1. Clone the magento-cloud-docker GitHub repository.

   ```bash
   git clone git@github.com:magento/magento-cloud-docker.git
   ```

1. Stop all services that use the following ports:

   -  `80`—varnish
   -  `443`—web, tls
   -  `3306`—apache, mysql

1. Update the hosts file.

   Before you begin, you must add the following hostname to your `/etc/hosts` file:

   ```bash
   127.0.0.1 magento2.docker
   ```

   Alternatively, you can run the following command to add it to the file:

   ```bash
   echo "127.0.0.1 magento2.docker" | sudo tee -a /etc/hosts
   ```

1. Switch to the preferred PHP version for running tests.

1. Update the project dependencies.

   ```bash
   composer update
   ```

1. Add credentials

   1. Add credentials to environment variables.

   ```bash
   export REPO_USERNAME=your_public_key
   ```

   ```bash
   export REPO_PASSWORD=your_private_key
   ```
   
   If you want to install some packages from GitHub, add GitHub token
   
   ```bash
   export GITHUB_TOKEN=your_github_token
   ```
   
   1. Add credentials to the ./.env file.
   
   Edit the `codeception.dist.yml` file:
   
   ```yaml
   params:
     - tests/functional/configuration.dist.yml
     - env
     - .env
   ```
   
   Require `vlucas/phpdotenv`:
   
   ```bash
   composer require "vlucas/phpdotenv": "^3.0"
   ```

## Run tests

The `codeception.dist.yml` file in the `{{site.data.var.ct}}` root directory contains the global testing configuration. See the [`{{site.data.var.ct}}` repository][codeception].

By default, functional tests produce a short output. You can receive a more detailed output by editing the `codeception.dist.yml` file to set the `printOutput:` property to `true`.

```yaml
modules:
  config:
    Magento\CloudDocker\Test\Functional\Codeception\TestInfrastructure:
      ...
      printOutput: true
      ...
    Magento\CloudDocker\Test\Functional\Codeception\Docker:
      ...
      printOutput: true
      ...
```

### Run a specific test

Use the following command format to run a specific functional test:

```bash
./vendor/bin/codecept run Acceptance <TestName>Cest
```

For example, the following test verifies that the post-deploy task runs successfully.

```bash
./vendor/bin/codecept run Acceptance AcceptanceCest
```

Sample response:

```terminal
Codeception PHP Testing Framework v2.5.6
Powered by PHPUnit 6.5.14 by Sebastian Bergmann and contributors.
Running with seed:
Acceptance Tests (3) -----------------------------------------------------------
AcceptanceCest: Test production mode
Signature: Magento\CloudDocker\Test\Functional\Acceptance\AcceptanceCest:testProductionMode
Test: src/Test/Functional/Acceptance/AcceptanceCest.php:testProductionMode
Scenario --
 I cleanup work dir 
...
...
✔ AcceptanceCest: Test acceptance | {} (210.41s)
```
{:.no-copy}

### Run all tests

Use the following commands to run all available tests for each PHP version.

-  **PHP 7.1**

   ```bash
   ./vendor/bin/codecept run -g php71 --steps
   ```

-  **PHP 7.2**

   ```bash
      ./vendor/bin/codecept run -g php72 --steps
   ```
   
-  **PHP 7.3**

   ```bash
      ./vendor/bin/codecept run -g php73 --steps
   ```

[magento-cloud-docker repository]: https://github.com/magento/magento-cloud-docker/tree/develop/src/Test/Functional/Acceptance
[codeception]: https://github.com/magento/magento-cloud-docker/blob/develop/codeception.dist.yml
