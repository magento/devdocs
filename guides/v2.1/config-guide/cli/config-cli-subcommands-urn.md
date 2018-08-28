---
group: config-guide
title: URN highlighter
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## Overview of URN highlighter

Magento code references all XSD schemas as [Uniform Resource Names (URNs)](https://www.ietf.org/rfc/rfc2141.txt). If you're developing code and need to reference XSDs, this command configures your integrated developer environment (IDE) to recognize and highlight URNs. This makes development easier.

By default, an IDE like PHPStorm is not configured to recognize URNs and, as a result, they display in red text as follows:

![]({{ site.baseurl }}/common/images/config_urn_before.png){:width="750px"}

The `bin/magento dev:urn-catalog:generate` command enables your IDE (currently, only PHPStorm) to recognize and highlight URNs like the following:

![]({{ site.baseurl }}/common/images/config_urn_after.png){:width="750px"}

Specifically, this command creates the following PHPStorm configuration:

![]({{ site.baseurl }}/common/images/config_urn_settings.png){:width="750px"}

## Configure your IDE

Currently, only PHPStorm is supported.

Command syntax:

	bin/magento dev:urn-catalog:generate <path>

Where `<path>` is the path to your PHPStorm `misc.xml` file, which is located relative to your project root. Typically, `<path>` is `.idea/misc.xml`.
