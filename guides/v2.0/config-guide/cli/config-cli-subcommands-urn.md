---
group: configuration-guide
subgroup: 04_CLI
title: URN highlighter
menu_title: URN highlighter
menu_node:
menu_order: 215
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## Overview of URN highlighter

Magento code references all XSD schemas as [Uniform Resource Names (URNs)](https://www.ietf.org/rfc/rfc2141.txt){: target="_blank"}. If you're developing code and need to reference XSDs, this command configures your integrated developer environment (IDE) to recognize and highlight URNs. This makes development easier.

By default, an IDE like PHPStorm is not configured to recognize URNs and, as a result, they display in red text as follows:

![]({{ site.baseurl }}/common/images/config_urn_before.png){: width="750px"}

The `bin/magento dev:urn-catalog:generate` command enables your IDE (currently, only PHPStorm) to recognize and highlight URNs like the following:

![]({{ site.baseurl }}/common/images/config_urn_after.png){: width="750px"}

Specifically, this command creates the following PHPStorm configuration:

![]({{ site.baseurl }}/common/images/config_urn_settings.png){: width="750px"}

## Configure your IDE

Currently, only PHPStorm is supported.

Command syntax:

	bin/magento dev:urn-catalog:generate <path>

Where `<path>` is the path to your PHPStorm `misc.xml` file, which is located relative to your project root. Typically, `<path>` is `.idea/misc.xml`.

#### Related topics

-   [Manage the cache]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html)
-   [Manage the indexers]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html)
-   [Configure and run cron]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html)
-   [Code compiler]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-compiler.html)
-   [Set the Magento mode]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html)
-   [Dependency reports]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-depen.html)
-   [Translation dictionaries and language packages]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html)
-   [Deploy static view files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html)
-   [Create symlinks to LESS files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-less-sass.html)
-   [Run unit tests]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-test.html)
-   [Convert layout XML files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-layout-xml.html)
-   [Generate data for performance testing]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-perf-data.html)
