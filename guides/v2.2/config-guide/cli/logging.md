---
group: config-guide
title: Logging
version: 2.2
github_link: config-guide/cli/logging.md
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## Debug logging

To enable debug logging:

1. Use the `config:set` command to change the `dev/debug/debug_logging` database value to `1`.

    ```bash
    bin/magento config:set dev/debug/debug_logging 1
    ```

1. Flush the cache.

    ```bash
    bin/magento cache:flush
    ```

1. View logs at `var/log/debug.log` in your Magento application directory.

To disable debug logging:

1. Use the `config:set` command to change the `dev/debug/debug_logging` database value to `0`.

    ```bash
    bin/magento config:set dev/debug/debug_logging 0
    ```

1. Flush the cache.

    ```bash
    bin/magento cache:flush
    ```

## Database logging

Use the Magento CLI tool to log database activity.

To enable database logging:

1. Use the `dev:query-log` command to enable or disable database logging.

    ```bash
    bin/magento dev:query-log:enable
    ```
    ```bash
    bin/magento dev:query-log:disable
    ```

1. Flush the cache.

    ```bash
    bin/magento cache:flush
    ```
