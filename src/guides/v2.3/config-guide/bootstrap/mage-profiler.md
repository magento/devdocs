---
group: configuration-guide
title: Enable profiling (MAGE_PROFILER)
functional_areas:
  - Configuration
  - System
  - Setup
---

Magento profiling enables you to:

-  Enable a built-in profiler.

   You can use a built-in profiler with Magento to perform tasks such as analyzing performance. The nature of profiling depends on the analytical tools you use. We support multiple formats, including HTML. When you enable the profiler, a `var/profiler.flag` file generates indicating the profiler is enabled and configurations. When disabled, this file is deleted.

-  Display dependency graphs on a Magento page. A *dependency graph* is a list of object dependencies and all of their dependencies, and all the dependencies for those dependencies, and so on.

   You should be particularly interested in the list of *unused dependencies*, which are objects that were created because they were requested in some constructor, but were never used (that is, none of their methods were called). As a result, processor time and memory spent to create these dependencies are wasted.

Magento provides the base functionality in [Magento\\Framework\\Profiler]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Profiler.php).

You can enable and configure the profiler using a [MAGE_PROFILER](#variable) variable or the [command line](#cli).

## Set MAGE_PROFILER {#variable}

You can set the value of `MAGE_PROFILER` in any of the ways discussed in [Set the value of bootstrap parameters]({{ page.baseurl }}/config-guide/bootstrap/magento-how-to-set.html).

`MAGE_PROFILER` supports the following values:

-  `1` to enable a specific profiler's output.

   You can also use one of the following values to enable a specific profiler:

   -  `csvfile` which uses [Magento\\Framework\\Profiler\\Driver\\Standard\\Output\\Csvfile]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Profiler/Driver/Standard/Output/Csvfile.php)
   -  Any other value (except `2`), including an empty value, which uses [Magento\\Framework\\Profiler\\Driver\\Standard\\Output\\Html]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Profiler/Driver/Standard/Output/Html.php)

-  `2` to enable dependency graphs.

   Dependency graphs typically display at the bottom of a page. The following figure shows portion of the output:

   ![]({{ site.baseurl }}/common/images/config_depend-graphs.png)

## CLI commands {#cli}

You can enable or disable the profiler using CLI commands:

-  `dev:profiler:enable <type>` enables the profiler with `type` of `html` (default) or `csvfile`. When enabled, a flagfile `var/profiler.flag` is created.
-  `dev:profiler:disable` disables the profiler. When disabled, the flagfile `var/profiler.flag` is removed.

To enable dependency graphs, use the variable option.

To enable or disable the profiler:

1. Log in to your Magento server.
1. Change to your Magento installation directory.
1. As the Magento file system owner, enter the following command to configure the profiler:

   To enable the profiler using type `html` and create a flagfile:

   ```bash
   bin/magento dev:profiler:enable html
   ```

   To enable the profiler using type `csvfile` and create a flagfile:

   ```bash
   bin/magento dev:profiler:enable csvfile
   ```

   The output will be saved to `<project_root>/var/log/profiler.csv`. The `profiler.csv` will be overridden on each page refresh.

   To disable the profiler and remove the flagfile:

   ```bash
   bin/magento dev:profiler:disable
   ```
