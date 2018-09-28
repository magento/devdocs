---
group: configuration-guide
subgroup: 04_CLI
title: Run unit tests
menu_title: Run unit tests
menu_node:
menu_order: 400
redirect_from: /guides/v1.0/config-guide/cli/config-cli-subcommands-test.html
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

-   The `Magento_Developer` {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} must be enabled. You can enable it as follows:

        bin/magento module:enable [--force] Magento_Developer

    Use the `--force` option only if it's necessary.

-   Your system must be set up to run the desired tests.

For example, to run integration tests, you should copy `dev/tests/integration/etc/install-config-mysql.php.dist` to `dev/tests/integration/etc/install-config-mysql.php` and modify it to suit your environment.

## Running tests

Command usage:

	bin/magento dev:tests:run <test>

To list the available test types:

	bin/magento dev:tests:run --help

This gives you a list similar to the following:

    all, unit, integration, integration-all, static, static-all, integrity, legacy, default

For example, to run integration tests:

	bin/magento dev:tests:run integration

#### Related topics

-   [Manage the cache]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html)
-   [Manage the indexers]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html)
-   [Configure and run cron]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html)
-   [Code compiler]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-compiler.html)
-   [Set the Magento mode]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html)
-   [URN highlighter]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-urn.html)
-   [Dependency reports]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-depen.html)
-   [Translation dictionaries and language packages]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html)
-   [Deploy static view files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html)
-   [Create symlinks to LESS files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-less-sass.html)
-   [Convert layout XML files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-layout-xml.html)
-   [Generate data for performance testing]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-perf-data.html)
