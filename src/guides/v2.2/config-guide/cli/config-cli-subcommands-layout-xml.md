---
group: configuration-guide
title: Convert layout XML files
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## Overview of layout XML conversion

Use this command to update your [layout](https://glossary.magento.com/layout) [XML](https://glossary.magento.com/xml) files if you update the corresponding Extensible Stylesheet Language Transformations (XSLT) stylesheet.

For more information about layout XML files, see:

-  [Layout instructions]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html)
-  [Layout file types]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-types.html)

## Convert layout XML files

Command options:

```bash
bin/magento dev:xml:convert [-o|--overwrite] {xml file} {xslt stylesheet}
```

here:

-  **`{xml file}`** is the full path and file name of a layout XML file to convert (required)
-  **`{xslt stylesheet}`** is the full path and file name of an XSLT stylesheet file to use for [conversion](https://glossary.magento.com/conversion) (required)
-  **`-o|--overwrite`** include this option to overwrite the existing XML file
