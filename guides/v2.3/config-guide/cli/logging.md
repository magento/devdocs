---
group: configuration-guide
title: Logging
redirect_from: /guides/v2.3/logging.html

functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## Cron logging

By default, Magento writes to the debug log (`<install_directory>/var/log/debug.log`) when it is in default or develop mode, but not when it is in production mode. Use the `bin/magento setup:config:set --enable-debug-logging=true | false` command to change the default value.

{:.bs-callout .bs-callout-info}
As of Magento 2.3.1, you can no longer use the `bin/magento config:set dev/debug/debug_logging 0 | 1` command to enable or disable debug logging for current mode.

By default, Magento writes `cron` info to `/var/log/cron.log`.

1. Use the `setup:config:set` command to enable debug logging for the current mode.

    ```bash
    bin/magento setup:config:set --enable-debug-logging=true
    ```

2. Flush the cache.

    ```bash
    bin/magento cache:flush
    ```

## Debug logging

1. Use the `setup:config:set` command to disable debug logging for the current mode.

    ```bash
    bin/magento setup:config:set --enable-debug-logging=false
    ```

1. Flush the cache.

    ```bash
    bin/magento cache:flush
    ```

### To disable debug logging:

1. Use the `config:set` command to change the `dev/debug/debug_logging` database value to `0`.

    ```bash
    bin/magento config:set dev/debug/debug_logging 0
    ```

1. Flush the cache.

    ```bash
    bin/magento cache:flush
    ```

## Syslog logging

By default, Magento writes _syslog_ logs to the operating system `syslog` file.

### To enable syslog logging:

1. Use the `config:set` command to change the `dev/syslog/syslog_logging` database value to `1`.

    ```bash
    bin/magento config:set dev/syslog/syslog_logging 1
    ```

1. Flush the cache.

    ```bash
    bin/magento cache:flush
    ```

### To disable syslog logging:

1. Use the `config:set` command to change the `dev/syslog/syslog_logging` database value to `0`.

    ```bash
    bin/magento config:set dev/syslog/syslog_logging 0
    ```

1. Flush the cache.

    ```bash
    bin/magento cache:flush
    ```
