---
group: cloud-guide
title: Build variables
functional_areas:
  - Cloud
  - Configuration
---

The following _build_ variables control actions in the build phase and can inherit and override values from the [Global variables]({{ site.baseurl }}/cloud/env/variables-global.html). Insert these variables in the `build` stage of the `.magento.env.yaml` file:

```yaml
stage:
  build:
    BUILD_VARIABLE_NAME: value
```

{% include cloud/customize-build-deploy.md %}

The following variables were removed in v2.2:

-  `skip_di_clearing`
-  `skip_di_compilation`

### `ERROR_REPORT_DIR_NESTING_LEVEL`

-  **Default**—`1`
-  **Version**—Magento 2.1.4 and later

Set the level of directory nesting for saving error report files to avoid filling the report directory with tens of thousands of files, which makes it difficult to manage and review the data. This setting defaults to `1`. Typically, you do not need to change the default value unless you have problems managing error report files in the `<magento_root>/var/report/` directory.

```yaml
stage:
  build:
    ERROR_REPORT_DIR_NESTING_LEVEL: 2
```

### `QUALITY_PATCHES`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

Specify a list of Magento quality patches to apply during deployment.

```yaml
stage:
  build:
    QUALITY_PATCHES: [ ]
```

The following example specifies three patches to apply during deployment.

```yaml
stage:
  build:
    QUALITY_PATCHES:
      - MC-31387
      - MDVA-4567
      - MC-456345
```

See [Apply patches]({{ site.baseurl }}/cloud/project/project-patch.html).

### `SCD_COMPRESSION_LEVEL`

-  **Default**—`6`
-  **Version**—Magento 2.1.4 and later

Specifies which [gzip](https://www.gnu.org/software/gzip) compression level (`0` to `9`) to use when compressing static content; `0` disables compression.

```yaml
stage:
  build:
    SCD_COMPRESSION_LEVEL: 4
```

### `SCD_COMPRESSION_TIMEOUT`

-  **Default**—`600`
-  **Version**—Magento 2.1.4 and later

When the time it takes to compress the static assets exceeds the compression timeout limit, it interrupts the deployment process. Set the maximum execution time, in seconds, for the static content compression command.

```yaml
stage:
  build:
    SCD_COMPRESSION_TIMEOUT: 800
```

### `SCD_MATRIX`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

You can configure multiple locales per theme. This customization helps speed up the build process by reducing the number of unnecessary theme files. For example, you can build the _magento/backend_ theme in English and a custom theme in other languages.

The following example builds the `magento/backend` theme with three locales:

```yaml
stage:
  build:
    SCD_MATRIX:
      "magento/backend":
        language:
          - en_US
          - fr_FR
          - af_ZA
```

Also, you can choose to _not_ deploy a theme:

```yaml
stage:
  build:
    SCD_MATRIX:
      "magento/backend": [ ]
```

### `SCD_MAX_EXECUTION_TIME`

-  **Default**—_Not set_
-  **Version**—Magento 2.2.0 and later

Allows you to increase the maximum expected execution time for static content deployment.

By default, Magento Commerce sets the maximum expected execution to 900 seconds, but in some scenarios you might need more time to complete the static content deployment for a Cloud project.

```yaml
stage:
  build:
    SCD_MAX_EXECUTION_TIME: 3600
```

{% include cloud/note-increase-scd-max-execution-time-variable.md%}

### `SCD_STRATEGY`

-  **Default**—`quick`
-  **Version**—Magento 2.2.0 and later

Customize the [deployment strategy]({{ site.baseurl }}/guides/v2.3/config-guide/cli/config-cli-subcommands-static-deploy-strategies.html) for static content. See [Deploy static view files]({{ site.baseurl }}/guides/v2.3/config-guide/cli/config-cli-subcommands-static-view.html).

Use these options _only_ if you have more than one locale:

-  `standard`—deploys all static view files for all packages.
-  `quick`—minimizes deployment time. This is the default command option, if not specified.
-  `compact`—conserves disk space on the server. In Magento version 2.2.4 and earlier, this setting overrides the value for `scd_threads` with a value of `1`.

```yaml
stage:
  build:
    SCD_STRATEGY: "compact"
```

### `SCD_THREADS`

-  **Default**—Automatic
-  **Version**—Magento 2.1.4 and later

Sets the number of threads for static content deployment. The default value is set based on the detected CPU thread count and does not exceed a value of 4. Increasing the number of threads speeds up static content deployment; decreasing the number of threads slows it down. You can set the thread value, for example:

```yaml
stage:
  build:
    SCD_THREADS: 2
```

To further reduce deployment time, we recommend using [Configuration Management]({{ site.baseurl }}/cloud/live/sens-data-over.html) with the `scd-dump` command to move static deployment into the build phase.

### `SCD_USE_BALER`

-  **Default**—_Not set_
-  **Version**—Magento 2.3.0 and later

[Baler](https://github.com/magento/baler) scans your generated JavaScript code and creates an optimized JavaScript bundle. Deploying the optimized bundle to your site can reduce the number of network requests when loading your site and improve page load times.

Set to `true` to run Baler after performing static content deployment.

```yaml
stage:
  build:
    SCD_USE_BALER: true
```

{:.bs-callout-info}
Because Baler is currently in alpha release, we do not recommend using it in Production environments.

### `SKIP_COMPOSER_DUMP_AUTOLOAD`

-  **Default**— _Not set_
-  **Version**—Magento 2.1.4 and later

Set to `true` to skip the `composer dump-autoload` command during a {{ site.data.var.mcd-prod }} installation. This variable is only relevant for {{ site.data.var.mcd-prod }} containers with writable file systems. In such cases, skipping the command prevents errors from other commands trying to access code from the deleted `generated` directory.

When Magento runs `composer dump-autoload`, it creates autoload files with links to generated classes in the `generated` folder. In production environments with read-only files systems, this is not a problem. However, for {{ site.data.var.mcd-prod }} installations with writable file systems (created only for testing and development using `./vendor/bin/ece-docker build:compose --with-test`), you can run the `bin/magento -n setup:upgrade` command without the `--keep-generated` option, which deletes the `generated` directory. If the directory is deleted, the `composer dump-autoload` command fails because the autoload contains links to files in the deleted directory.

```yaml
stage:
  build:
    SKIP_COMPOSER_DUMP_AUTOLOAD: true
```

### `SKIP_SCD`

-  **Default**— _Not set_
-  **Version**—Magento 2.1.4 and later

Set to `true` to skip static content deployment during the build phase.

If you already deploy static content during the build phase with [Configuration Management]({{ site.baseurl }}/cloud/live/sens-data-over.html), you can skip static content deployment for a quick build test.

On the build phase, we recommend setting `SKIP_SCD: false` so that the static content build occurs during the build phase where the process will not impact site deployment or cause unnecessary site downtime. See [Static content deployment]({{site.baseurl}}/cloud/deploy/static-content-deployment.html).

```yaml
stage:
  build:
    SKIP_SCD: false
```

### `VERBOSE_COMMANDS`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

Enable or disable the [Symfony](https://symfony.com/doc/current/console/verbosity.html) debug verbosity level for `bin/magento` CLI commands performed during the deployment phase.

{:.bs-callout}
To use VERBOSE_COMMANDS to control the detail in command output for both successful and failed `bin/magento` CLI commands, you must set [MIN_LOGGING_LEVEL]({{ site.baseurl }}/cloud/env/variables-global.html#min_logging_level) `debug`.

Choose the level of detail provided in the logs: `-v`, `-vv`, or `-vvv`.

```yaml
stage:
  build:
    VERBOSE_COMMANDS: "-vv"
```
