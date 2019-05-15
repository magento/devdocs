---
group: php-developer-guide
subgroup: 02_Prepare
title: Component types
menu_title: Component types
menu_order: 2
menu_node:
redirect_from:
  - /guides/v2.0/mktpl-quickstart/dev-modtypes.html
  - /guides/v2.0/extension-dev-guide/dev-modtypes.html
  - /guides/v2.1/mktpl-quickstart/dev-modtypes.html
  - /guides/v2.2/mktpl-quickstart/dev-modtypes.html
---

Each component type has a different [directory structure][directory-structure] and different contents for [`composer.json`][composer].

The following table discusses the component types that Magento Marketplace supports. The composer `type` column in the following table specifies the value of the `type` field you must add to `composer.json` for that type of component.

|Friendly name|composer.json type|Description|
|--- |--- |--- |
|Metapackage|metapackage|Technically, a Composer package type, not a Magento component type. A metapackage consists of only a `composer.json` file that specifies a list of components and their dependencies. For example, both {{site.data.var.ce}} and {{site.data.var.ee}} are metapackages.|
|Module|magento2-module|Code that modifies Magento application behavior. You can upload a single module to the Magento Marketplace or your module can be dependent on some parent package.|
|Theme|magento2-theme|Code that modifies the look and feel of the storefront or Magento Admin.|
|Language package|magento2-language|Translations for the storefront or Admin.|
|Setup|magento2-setup|Setup component.|

#### Next
[About component file structure][component-file-structure]

[directory-structure]: {{ page.baseurl }}/extension-dev-guide/build/module-file-structure.html
[composer]: {{ page.baseurl }}/extension-dev-guide/build/composer-integration.html
[component-file-structure]: {{ page.baseurl }}/extension-dev-guide/prepare/prepare_file-str.html
