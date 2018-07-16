---
group: cloud
title: Build variables
version: 2.2
github_link: cloud/env/variables-build.md
functional_areas:
  - Cloud
  - Configuration
---

The following _build_ variables control actions in the build phase and can inherit and override values from the [Global stage]({{ page.baseurl }}/cloud/env/variables-intro.html#global-variables). Insert these variables in the `build` stage of the `.magento.env.yaml` file:

```yaml
stage:
  build:
    BUILD_VARIABLE_NAME: value
```
 
For more information about customizing the build and deploy process:

-  [Manage build and deploy actions]({{ page.baseurl }}/cloud/project/magento-env-yaml.html)
-  [Deployment process]({{ page.baseurl }}/cloud/reference/discover-deploy.html)

{% include note.html type="info" content="You can still use the `build_options.ini` file, but we recommend using the `.magento.env.yaml` file instead because it centralizes the management of build and deploy actions across all of your environments—including Pro Staging and Production—without requiring a support ticket." %}

The following variables were removed in v2.2:

-   `skip_di_clearing`
-   `skip_di_compilation`

### `SCD_COMPRESSION_LEVEL`

-  **Default**—`6`
-  **Version**—Magento 2.1.4 and later

Specifies which [gzip](https://www.gnu.org/software/gzip){:target="\_blank"} compression level (`0` to `9`) to use when compressing static content; `0` disables compression.

```yaml
stage:
  build:
    SCD_COMPRESSION_LEVEL: 4
```

### `SCD_EXCLUDE_THEMES`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

Themes include numerous files. Set this variable to `true` if you want to skip copying over theme files during build. This is helpful when static content deployment occurs during the build phase. Use commas to separate multiple theme locations. For example, the Luma theme is included with {{site.data.var.ece}}. You may not need to constantly deploy this theme with your code updates and deployments. To exclude the `magento/luma` theme:

```yaml
stage:
  build:
    SCD_EXCLUDE_THEMES: "magento/luma, magento/my-theme" 
```

### `SCD_STRATEGY`

-  **Default**—`quick`
-  **Version**—Magento 2.2.0 and later

Customize the [deployment strategy](http://devdocs.magento.com/guides/v2.2/config-guide/cli/config-cli-subcommands-static-deploy-strategies.html) for static content. See [Deploy static view files](http://devdocs.magento.com/guides/v2.2/config-guide/cli/config-cli-subcommands-static-view.html).

Use these options _only_ if you have more than one locale:

-  `standard`—deploys all static view files for all packages.
-  `quick`—minimizes deployment time. This is the default command option, if not specified.
-  `compact`—conserves disk space on the server and overrides the value for `scd_threads` with a value of `1`. This strategy does not work with multi-threads.

```yaml
stage:
  build:
    SCD_STRATEGY: "compact"
```

### `SCD_THREADS`

-  **Default**: 
    -  `1`—Starter environments and Pro Integration environments
    -  `3`—Pro Staging and Production environments
-  **Version**—Magento 2.1.4 and later

Sets the number of threads for static content deployment. Increasing the number of threads speeds up static content deployment; decreasing the number of threads slows it down.

```yaml
stage:
  build:
    SCD_THREADS: 2
```

To further reduce deployment time, we recommend using [Configuration Management]({{ page.baseurl }}/cloud/live/sens-data-over.html) with the `scd-dump` command to move static deployment into the build phase.

### `SKIP_SCD`

-  **Default**— _Not set_
-  **Version**—Magento 2.1.4 and later

Set to `true` to skip static content deployment during the build phase.

If you are already deploying static content during the build phase with [Configuration Management]({{ page.baseurl }}/cloud/live/sens-data-over.html), you may want to turn it off for a quick build test.

We do not recommend using this option, because running static content deployment during the deployment phase can greatly increase deployment times and downtime for your live site.

```yaml
stage:
  build:
    SKIP_SCD: true
```

### `VERBOSE_COMMANDS`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

 Enables or disables the [Symfony](https://symfony.com/doc/current/console/verbosity.html){:target="\_blank"} debug verbosity level for your logs. Choose the level of detail provided in the logs: `-v`, `-vv`, or `-vvv`.
 
```yaml
stage:
  build:
    VERBOSE_COMMANDS: "-vv"
```