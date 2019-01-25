---
group: configuration-guide
title: Logging
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## Debug logging

By default, Magento writes to the debug log (`<install_directory>/var/log/debug.log`) when it is in default or develop mode, but not when it is in production mode. Use the `bin/magento setup:config:set --enable-debug-logging=true | false` command to change the default value.

{:.bs-callout .bs-callout-info}
As of Magento 2.2.8, you can no longer use the `bin/magento config:set dev/debug/debug_logging 0 | 1` command to enable or disable debug logging for current mode.

#### To enable debug logging:

1. Use the `setup:config:set` command to enable debug logging for the current mode.

    ```bash
    bin/magento setup:config:set --enable-debug-logging=true
    ```

2. Flush the cache.

    ```bash
    bin/magento cache:flush
    ```

#### To disable debug logging:

1. Use the `setup:config:set` command to disable debug logging for the current mode.

    ```bash
    bin/magento setup:config:set --enable-debug-logging=false
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

2. Flush the cache.

    ```bash
    bin/magento cache:flush
    ```
