---
group: configuration-guide
title: Run unit tests
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## Overview of tests

This command runs a set of tests defined in the Magento 2 code base. You can either run all tests or tests you select. Whenever an unsupported type is specified, the program terminates and lists all available types. Following execution, a detailed report displays showing the test run and results.

### Prerequisites

Before you run this command, all of the following must be true:

-  The `Magento_Developer` [module](https://glossary.magento.com/module) must be enabled. You can enable it as follows:

   ```bash
   bin/magento module:enable [--force] Magento_Developer
   ```

   Use the `--force` option only if it's necessary.

-  Your system must be set up to run the desired tests.

For example, to run integration tests, you should copy `dev/tests/integration/etc/install-config-mysql.php.dist` to `dev/tests/integration/etc/install-config-mysql.php` and modify it to suit your environment.

## Running tests

Command usage:

```bash
bin/magento dev:tests:run <test>
```

To list the available test types:

```bash
bin/magento dev:tests:run --help
```

This gives you a list similar to the following:

```terminal
all, unit, integration, integration-all, static, static-all, integrity, legacy, default
```

For example, to run integration tests:

```bash
bin/magento dev:tests:run integration
```
