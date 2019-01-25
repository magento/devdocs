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

By default, Magento writes to the debug log (`<install_directory>/var/log/debug.log`) when it is in default or develop mode, but not when it is in production mode. 

The `bin/magento config:set` command allows you to enable or disable debug logging for current mode. As of Magento 2.3.1, the `dev/debug/debug_logging 0 | 1` parameter is no longer valid. Instead, you must specify the `--enable-debug-logging=true | false` parameter. 

#### To enable debug logging:

1. Use the `config:set` command to enable debug logging for the current mode.

    ```bash
    bin/magento config:set --enable-debug-logging=true
    ```

2. Flush the cache.

    ```bash
    bin/magento cache:flush
    ```

#### To disable debug logging:

1. Use the `config:set` command to disable debug logging for the current mode..

    ```bash
    bin/magento config:set --enable-debug-logging=false
    ```

1. Flush the cache.

    ```bash
    bin/magento cache:flush
    ```

## Database logging

By default, Magento writes database activity logs to the `var/debug/db.log` file inside the Magento application directory.

#### To enable database logging:

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

## Syslog logging

By default, Magento writes _syslog_ logs to the operating system `syslog` file.

#### To enable syslog logging:

1. Use the `config:set` command to change the `dev/syslog/syslog_logging` database value to `1`.

    ```bash
    bin/magento config:set dev/syslog/syslog_logging 1
    ```

1. Flush the cache.

    ```bash
    bin/magento cache:flush
    ```

#### To disable syslog logging:

1. Use the `config:set` command to change the `dev/syslog/syslog_logging` database value to `0`.

    ```bash
    bin/magento config:set dev/syslog/syslog_logging 0
    ```

1. Flush the cache.

    ```bash
    bin/magento cache:flush
    ```
