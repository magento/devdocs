---
group: configuration-guide
title: Convert layout XML files
redirect_from: /guides/v1.0/config-guide/cli/config-cli-subcommands-layout-xml.html
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## Overview of layout XML conversion

Use this command to update your {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} files if you update the corresponding Extensible Stylesheet Language Transformations (XSLT) stylesheet.

For more information about layout XML files, see:

-   [Layout instructions]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html)
-   [Layout file types]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-types.html)

## Convert layout XML files

Command options:

	bin/magento dev:xml:convert [-o|--overwrite] {xml file} {xslt stylesheet}

here:

-   **`{xml file}`** is the full path and file name of a layout XML file to convert (required)
-   **`{xslt stylesheet}`** is the full path and file name of an XSLT stylesheet file to use for {% glossarytooltip 38c73ce4-8f01-4f74-ab30-1134cec5664f %}conversion{% endglossarytooltip %} (required)
-   **`-o|--overwrite`** include this option to overwrite the existing XML file
