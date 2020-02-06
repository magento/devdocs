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

By default, Magento Commerce sets the maximum expected execution to 400 seconds, but in some scenarios you might need more time to complete the static content deployment for a Cloud project.

```yaml
stage:
  build:
    SCD_MAX_EXECUTION_TIME: 3600
```

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

### `SKIP_SCD`

-  **Default**— _Not set_
-  **Version**—Magento 2.1.4 and later

Set to `true` to skip static content deployment during the build phase.

If you already deploy static content during the build phase with [Configuration Management]({{ site.baseurl }}/cloud/live/sens-data-over.html), you can skip static content deployment for a quick build test.

We do not recommend setting this option to `true` because running static content deployment during the deploy phase can significantly increase deployment times and downtime for your live site.

```yaml
stage:
  build:
    SKIP_SCD: true
```

### `VERBOSE_COMMANDS`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

 Enables or disables the [Symfony](https://symfony.com/doc/current/console/verbosity.html) debug verbosity level for your logs. Choose the level of detail provided in the logs: `-v`, `-vv`, or `-vvv`.

```yaml
stage:
  build:
    VERBOSE_COMMANDS: "-vv"
```
