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

By default, Magento writes debug logs to the `var/log/debug.log` file inside the Magento application directory.

To enable debug logging:

1. Use the `config:set` command to change the `dev/debug/debug_logging` database value to `1`.

    ```bash
    bin/magento config:set dev/debug/debug_logging 1
    ```

1. Flush the cache.

    ```bash
    bin/magento cache:flush
    ```

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

By default, Magento writes database activity logs to the `var/debug/db.log` file inside the Magento application directory.

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
