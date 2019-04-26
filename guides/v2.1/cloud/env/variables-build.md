---
group: cloud-guide
title: Build variables
functional_areas:
  - Cloud
  - Configuration
---

The following _build_ variables control actions in the build phase and can inherit and override values from the [Global variables]({{ page.baseurl }}/cloud/env/variables-global.html). Insert these variables in the `build` stage of the `.magento.env.yaml` file:

```yaml
stage:
  build:
    BUILD_VARIABLE_NAME: value
```

{% include cloud/customize-build-deploy.md %}

{: .bs-callout .bs-callout-info}
You can still use the `build_options.ini` file, but we recommend using the `.magento.env.yaml` file instead because it centralizes the management of build and deploy actions across all of your environments—including Pro Staging and Production—without requiring a support ticket.

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

### `SCD_EXCLUDE_THEMES`

{: .bs-callout .bs-callout-warning }
The `SCD_EXCLUDE_THEMES` environment variable is deprecated in [ece-tools version 2002.0.16]({{ page.baseurl }}/cloud/release-notes/cloud-tools.html#v2002016). Use the [SCD_MATRIX variable](#scd_matrix) to control theme configuration.

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

Themes include numerous files. Set this variable to `true` if you want to skip copying over theme files during build. This is helpful when static content deployment occurs during the build phase. Use commas to separate multiple theme locations. For example, the Luma theme is included with {{site.data.var.ece}}. You may not need to constantly build this theme with your code updates and deployments. To exclude the `magento/luma` theme:

```yaml
stage:
  build:
    SCD_EXCLUDE_THEMES: "magento/luma, magento/my-theme" 
```

### `SCD_MATRIX`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

You can configure multiple locales per theme as long as the theme is not excluded using the `SCD_EXCLUDE_THEMES` variable during build. This is ideal if you want to speed up the build process by reducing the amount of unnecessary theme files. For example, you can build the _magento/backend_ theme in English and a custom theme in other languages.

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

### `SCD_THREADS`

-  **Default**—Automatic
-  **Version**—Magento 2.1.4 and later

Sets the number of threads for static content deployment. The default value is set based on the detected CPU thread count and does not exceed a value of 4. Increasing the number of threads speeds up static content deployment; decreasing the number of threads slows it down. You can set the thread value, for example:

```yaml
stage:
  build:
    SCD_THREADS: 2
```

For Magento version 2.1.11 and earlier, the default value is 1.

To further reduce deployment time, we recommend using [Configuration Management]({{ page.baseurl }}/cloud/live/sens-data-over.html) with the `scd-dump` command to move static deployment into the build phase.

### `SKIP_DI_CLEARING`

-  **Default**—`disabled`
-  **Version**—Magento 2.1.2 and later

Before di_generation runs, the build process clears the existing build to rebuild before deploying. If you are simply redeploying without needing to fully rebuild, you can use this option to skip the deletion of the existing built files. The deploy phase will reuse the existing build files.

### `SKIP_DI_COMPILATION`

-  **Default**—`disabled`
-  **Version**— Magento 2.1.2 and later

If you need to quickly debug code, use this variable to skip compilation before a build. Compilation can take additional time to properly manage, compile, and then build your code. We only recommend this option for quick debug testing. You should always run di_compilation.

### `SKIP_SCD`

-  **Default**— _Not set_
-  **Version**—Magento 2.1.4 and later

Set to `true` to skip static content deployment during the build phase.

If you already deploy static content during the build phase with [Configuration Management]({{ page.baseurl }}/cloud/live/sens-data-over.html), you can skip generating static content for a quick build test.

We do not recommend setting this option to `true` because generating static content deployment during the deploy phase can significantly increase deployment times and downtime for your live site.

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
