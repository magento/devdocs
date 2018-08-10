---
group: config-guide
subgroup: 03_Bootstrap
title: Enable profiling (MAGE_PROFILER)
menu_title: Enable profiling (MAGE_PROFILER)
menu_order: 7
menu_node:
version: 2.1
redirect_from: /guides/v1.0/config-guide/bootstrap/mage-profiler.html
functional_areas:
  - Configuration
  - System
  - Setup
---

Magento profiling enables you to:

-   Enable a built-in profiler.

	You can use a built-in profiler with Magento to perform tasks such as analyzing performance. The nature of profiling depends on the analytical tools you use. We support multiple formats, including HTML.

-   Display dependency graphs on a Magento page. A *dependency graph* is a list of object dependencies and all of their all their dependencies, and all the dependencies for those dependencies, and so on.

	You should be particularly interested in the list of *unused dependencies*, which are objects that were created because they were requested in some constructor, but were never used (that is, none of their methods were called). As a result, processor time and memory spent to create these dependencies are wasted.

Magento provides the base functionality in [Magento\\Framework\\Profiler]({{ site.mage2000url }}lib/internal/Magento/Framework/Profiler.php){:target="&#95;blank"}.

## Set MAGE_PROFILER {#variable}

`MAGE_PROFILER` supports the following values:

-   `1` to enable a specific profiler's output.

	You can also use one of the following values to enable a specific profiler:

    - `csvfile` which uses [Magento\\Framework\\Profiler\\Driver\\Standard\\Output\\Csvfile]({{ site.mage2000url }}lib/internal/Magento/Framework/Profiler/Driver/Standard/Output/Csvfile.php){:target="&#95;blank"}
    - Any other value (except `2`), including an empty value, which uses [Magento\\Framework\\Profiler\\Driver\\Standard\\Output\\Html]({{ site.mage2000url }}lib/internal/Magento/Framework/Profiler/Driver/Standard/Output/Html.php){:target="&#95;blank"}

-   `2` to enable dependency graphs.

	Dependency graphs typically display at the bottom of a page. The following figure shows portion of the output:

	![]({{ site.baseurl }}/common/images/config_depend-graphs.png)

You can set the value of `MAGE_PROFILER` in any of the ways discussed in [Set the value of bootstrap parameters]({{ page.baseurl }}/config-guide/bootstrap/magento-how-to-set.html).
