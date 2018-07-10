---
group: cloud
title: Build variables
version: 2.1
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

-  [Manage build and deploy actions](http://devdocs.magento.com/guides/v2.1/cloud/project/magento-env-yaml.html)
-  [Deployment process]({{ page.baseurl }}/cloud/reference/discover-deploy.html)

{% include note.html type="info" content="You can still use the `build_options.ini` file, but we recommend using the `.magento.env.yaml` file instead because it centralizes the management of build and deploy actions across all of your environments—including Pro Staging and Production—without requiring a support ticket." %}

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