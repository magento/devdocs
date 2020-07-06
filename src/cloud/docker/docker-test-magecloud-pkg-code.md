---
group: cloud-guide
title: Magento Cloud code testing
functional_areas:
  - Cloud
  - Docker
  - Configuration
redirect from:
  - /cloud/docker/docker-development-testing.html
---

In a {{site.data.var.mcd-prod}} development environment, you can use the integrated test suite in each [{{site.data.var.csuite}}] package for Magento code testing. The test suites, which use the [Codeception testing framework for PHP], provide acceptance tests to validate code intended for contribution to Magento Cloud package repositories.

Before you run tests, you must prepare your Docker environment and update the test configuration file. (See [Prepare the test environment](#prepare-the-docker-environment-for-testing).)

## Test resources

Use the following table to review the test configuration files and available tests for each package.

| Package                          | Test configuration                                                 | Test folder <br>(`src/Test/Functional/Acceptance`)                                                |
|----------------------------------|--------------------------------------------------------------------|------------------------------------------------------------|
| {{site.data.var.ct-repo}}               | [codeception.dist.yml][{{site.data.var.ct-repo}} codeception.dist.yml]  | [Acceptance tests][{{site.data.var.ct-repo}} Acceptance tests]  |
| {{site.data.var.mcc-package}} | [codeception.dist.yml][{{site.data.var.mcc-package}} codeception.dist.yml] | [Acceptance tests][{{site.data.var.mcc-package}} Acceptance tests] |
| {{site.data.var.mcd-package}}    | [codeception.dist.yml][{{site.data.var.mcd-package}} codeception.dist.yml] | [Acceptance tests][{{site.data.var.mcd-package}} Acceptance tests] |
| {{site.data.var.mcc-package}}   | [codeception.dist.yml][{{site.data.var.mcp-package}} codeception.dist.yml] | [Acceptance tests][{{site.data.var.mcp-package}} Acceptance tests] |

{:.bs-callout-info}
For Magento application testing, use the Magento Application Testing (MFTF) framework to run functional tests. See [Magento application testing].

## Prepare the Docker environment for testing

{:.procedure}
To set up and configure the test environment:

1. Clone the GitHub repository for the package to test.

   ```bash
   git clone git@github.com:magento/<cloud-suite-package-repository>.git
   ```

   For example:

   ```bash
   git clone git@github.com:magento/ece-tools.git
   ```

1. Stop all services that use the following ports:

   -  `80`—varnish
   -  `443`—web, tls
   -  `3306`—apache, mysql

1. Add the following hostname to your `/etc/hosts` file.

   ```conf
   127.0.0.1 magento2.docker
   ```

   Alternatively, you can run the following command to add it to the file:

   ```bash
   echo "127.0.0.1 magento2.docker" | sudo tee -a /etc/hosts
   ```

1. Add required project dependencies if you are testing the following packages.

   -  For the `{{site.data.var.mcp-package}}` package:

      ```bash
      composer require "magento/magento-cloud-docker:^1.0.0" --no-update
      ```

   -  For the `{{site.data.var.mcc-package}}` package:

      ```bash
      composer require "magento/magento-cloud-docker:^1.0.0" --no-update
      composer require "magento/framework:*" --no-update
      composer require "magento/module-store:*" --no-update
      composer require "magento/module-url-rewrite:*" --no-update
      ```

1. Switch to the preferred PHP version for running tests.

1. Update the project dependencies.

   ```bash
   composer update
   ```

### Add credentials

Add credentials to your Docker environment using any of the following methods:

-  Use environment variables
-  Load credentials from the environment configuration file
-  Add variables directly to the test configuration file

{:.procedure}
To add credentials using environment variables:

1. Create environment variables for your GitHub authentication keys.

   ```bash
   export REPO_USERNAME=your_public_key
   ```

   ```bash
   export REPO_PASSWORD=your_private_key
   ```

1. Some packages require a GitHub authentication during installation. Create an environment variable with your GitHub token that can be used to install these packages.

   ```bash
   `export GITHUB_TOKEN=your_github_token
   ````

{:.procedure}
To load credentials from the environment configuration file:

1. Run the following commands to write credentials to the ./.env file.

   ```bash
   echo "REPO_USERNAME=your_public_key" >> ./.env
   ```

   ```bash
   echo "REPO_PASSWORD=your_private_key" >> ./.env
   ```

1. Edit the `codeception.dist.yml` file.

   ```yaml
   params:
       - tests/functional/configuration.dist.yml
       - env
       - .env
   ```

1. Add a dependency for the [vlucas/phpdotenv] package required to load the environment variables.

   ```bash
   composer require "vlucas/phpdotenv": "^3.0"
   ```

{:.procedure}
To add credentials directly to the test configuration file:

1. Open the `codeception.dist.yml` file in an editor.

1. Replace the `%REPO_USERNAME%`, `%REPO_PASSWORD%`, and `%GITHUB_TOKEN%` placeholder values with your credentials:

   ```yaml
   modules:
     config:
       Magento\CloudDocker\Test\Functional\Codeception\TestInfrastructure:
       ...
       composer_magento_username: "%REPO_USERNAME%"
       composer_magento_password: "%REPO_PASSWORD%"
       composer_github_token: "%GITHUB_TOKEN%"
         ...
   ```

## Run tests

By default, functional tests produce a short output. You can receive more detailed output by editing the `codeception.dist.yml` test configuration file to set the `printOutput:` property to `true`.

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

{:.bs-callout-info}
You can locate the test configuration file in the root directory for each package. (See [Test resources](#test-resources)).

### Run a specific test

Use the following command format to run a specific functional test:

```bash
./vendor/bin/codecept run Acceptance <TestName>Cest
```

For example, the following test for `{{site.data.var.ct-repo}}` code verifies that the post-deploy task runs successfully.

```bash
./vendor/bin/codecept run Acceptance PostDeployCest
```

**Sample response:**

```terminal
Codeception PHP Testing Framework v2.5.6
Powered by PHPUnit 6.5.14 by Sebastian Bergmann and contributors.
Running with seed:
Acceptance Tests (1) -----------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------
PostDeployCest: Test post deploy | {"ADMIN_EMAIL":"admin@example.com"}
 [Magento\MagentoCloud\Test\Functional\Robo\Tasks\GenerateDockerCompose] Running ./bin/ece-docker build:compose
 --mode=functional --php=7.2
...
...
✔ PostDeployCest: Test post deploy | {"ADMIN_EMAIL":"admin@example.com"} (210.41s)
```
{:.no-copy}

{:.bs-callout-info}
You can see the available tests for each package in the package source files. See [Test resources](#test-resources).

### Run all tests

Use the following commands to run all available tests for each PHP versions:

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

   If you are testing `{{site.data.var.ct-repo}}` code, use the following command:

   ```bash
   ./vendor/bin/codecept run -x php71 -x php72 --steps
   ```

{:.bs-callout-tip}
 For help with Codeception command options, use the `.vendor/bin/codecept run --help` command, or see the [Codeception CLI documentation] for the installed version.

<!--Link definitions-->

[{{site.data.var.csuite}}]: {{site.baseurl}}/cloud/release-notes/cloud-tools.html
[Magento application testing]: {{site.baseurl}}/cloud/docker/docker-test-app-mftf.html
[Codeception testing framework for PHP]: https://github.com/codeception/codeception
[{{site.data.var.ct-repo}} codeception.dist.yml]: https://github.com/magento/ece-tools/blob/{{site.data.var.ct-release}}/codeception.dist.yml
[{{site.data.var.mcc-package}} codeception.dist.yml]: https://github.com/magento/magento-cloud-components/blob/{{site.data.var.mcc-release}}/codeception.dist.yml
[{{site.data.var.mcp-package}} codeception.dist.yml]: https://github.com/magento/magento-cloud-patches/blob/{{site.data.var.mcp-release}}/codeception.dist.yml
[{{site.data.var.mcd-package}} codeception.dist.yml]: https://github.com/magento/magento-cloud-docker/blob/develop/codeception.dist.yml
[{{site.data.var.ct-repo}} Acceptance tests]: https://github.com/magento/ece-tools/tree/{{site.data.var.ct-release}}/src/Test/Functional/Acceptance
[{{site.data.var.mcc-package}} Acceptance tests]: https://github.com/magento/magento-cloud-components/tree/{{site.data.var.mcc-release}}/Test/Functional/Acceptance
[{{site.data.var.mcd-package}} Acceptance tests]: https://github.com/magento/magento-cloud-docker/tree/{{site.data.var.mcd-release}}/Test/Functional/Acceptance
[{{site.data.var.mcp-package}} Acceptance tests]: https://github.com/magento/magento-cloud-patches/tree/{{site.data.var.mcp-release}}/src/Test/Functional/Acceptance
[vlucas/phpdotenv]: https://github.com/vlucas/phpdotenv
[Codeception CLI documentation]: https://github.com/Codeception/Codeception/blob/2.5/src/Codeception/Command/Run.php
