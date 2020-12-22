---
group: php-developer-guide
title: The composer.json file
---

## Overview

Magento 2 uses [Composer][0]{:target="_blank"}, a [PHP](https://glossary.magento.com/php) dependency manager, to package components and product editions.

Composer reads a `composer.json` file in Magento's root directory to download third-party dependencies listed in the file.

We recommend you include `composer.json` in your component's root directory even if you do not intend to distribute it to other merchants using Magento.

 {:.bs-callout-info}
Magento does not support the [`path`][3] repository.

## composer.json

Here is the example of composer.json file.

{% collapsible File content for composer.json %}
 ```json
  {
    "name": "mycompany/sample-module-minimal",
    "description": "A module that creates a page in the Magento admin area",
    "type": "magento2-module",
    "version": "1.0.0",
    "license": [
      "OSL-3.0",
      "AFL-3.0"
    ],
    "require": {
      "php": "~7.3.0||~7.4.0"
    },
    "autoload": {
      "files": [ "registration.php" ],
      "psr-4": {
        "MyCompany\\ExampleAdminNewPage\\": ""
      }
    }
  }
 ```
{% endcollapsible %}

## Composer binary location {#composer-binary}

Magento uses the composer binary in the `<Magento root>/vendor/composer` directory instead of a globally installed [composer](https://glossary.magento.com/composer).

Keep this in mind while customizing, updating, or troubleshooting composer while working with Magento 2.

## Project vs product

In Composer, a "project" package is a template used by the [`composer create-project`][9]{:target="_blank"} to set up the project structure.
The [installation instructions for system integrators][10] use the {{site.data.var.ce}} and {{site.data.var.ee}} project packages to set up the Magento directory structure.

A "product" package is the actual application pointed to by the `composer.json` file after you download and install the project package using `composer create-project`.

## Descriptions of different composer.json files {#composerjson-overview}

The following Magento components and product editions use a `composer.json` file.

### Magento Root

**Location:** `composer.json`

**Name:** `magento/magento2ce`

**Type:** `project`

This is Magento's main `composer.json` file which declares dependencies and third-party components.

Other root `composer.json` files use this file as a template.

---

### {{site.data.var.ce}} project
**Location:** `composer.json`

**Name:** `magento/project-community-edition`

**Type:** `project`

Magento system integrators use this `composer.json` file to deploy the {{site.data.var.ce}} product and its dependencies.

---

### {{site.data.var.ee}} project
**Location:** `composer.json`

**Name:** `magento/product-enterprise-edition`

**Type:** `metapackage`

Magento system integrators use this `composer.json` file to deploy the {{site.data.var.ee}} product and its dependencies.

---

### Magento Framework

**Location:** `lib/internal/Magento/Framework/composer.json`

**Name:** `magento/framework`

**Type:** `magento2-library`

The Magento application uses this `composer.json` file for its framework packages.

---

### Module

**Locations:**

*  `app/code/<vendor-name>/<module-name>/composer.json`
*  `vendor/<vendor-name>/<module-name>/composer.json`

**Name:** `<vendor-name>/<package-name>`

**Type:** `magento2-module`

The `composer.json` file for a [module](https://glossary.magento.com/module) extension declares external dependencies that it needs to function.

---

### Theme

**Locations:**

*  `app/design/frontend/<vendor-name>/<theme-name>/composer.json`
*  `app/design/adminhtml/<vendor-name>/<theme-name>/composer.json`

**Name:** `<vendor-name>/<package-name>`

**Type:** `magento2-theme`

The `composer.json` file for a [theme](https://glossary.magento.com/theme) component contains parent theme dependencies the extension needs to inherit.

---

### Language Package

**Location:**
`app/i18n/<vendor-name>/<language-code>/composer.json`

**Name:** `<vendor-name>/<package-name>`

**Type:** `magento2-language`

For language packages, you must use the correct [ISO code][4]{:target="_blank"} for the language code in the `composer.json` file.

---

## Magento-specific package types

Magento extensions can be any of the following types:

*  `magento2-module` for modules
*  `magento2-theme` for themes
*  `magento2-language` for language packages
*  `magento2-component` for general extensions that do not fit any of the other types

The extension type tells the system where to install the directories and files of each extension in the Magento directory structure.

## Naming conventions

Since the namespace of a Composer package is global within a package repository, e.g. [packagist.org][2], use the following format when naming your package:

`<vendor-name>/<package-name>`

Using the Composer naming convention helps distinguish packages from different vendors with a low risk of overlapping.

### vendor-name

All letters in the vendor name must be in lowercase.
For example, the vendor name format for extensions released by Magento Inc is `magento`.

#### Magento Marketplace Extensions

Magento Marketplace uses `vendor-name` to match an extension to a vendor during the extension submission process.
If you plan to submit your extension to the [Magento Marketplace][7]{:target="_blank"}, you *must* use the unique Vendor Name created or assigned to you when you created your marketplace account.

In the `composer.json` file, use the value of 'Vendor Name' in your profile for the `vendor-name` part of the extension name.

Please see the [Marketplace Documentation][5]{:target="_blank"} for more information about your unique vendor name.

### package-name

All letters in the `package-name` must be in lowercase.

If the name contains more than one word, the Composer specification recommends separating them with dashes.

The convention for Magento package names is the following

`magento/<type-prefix>-<suffix>[-<suffix>]...`

Where:

:`type-prefix` is any of the Magento extension types:

*  `module-` for module extensions
*  `theme-` for theme extensions
*  `language-` for language extensions
*  `product-` for [metapackages][8] such as {{site.data.var.ce}} or {{site.data.var.ee}}

: `suffix` is a unique identifier for extensions of that type.

## Versioning {#component-version}
{% include php-dev/component-versioning.md %}

---

**Next:**
[Define your configuration files]({{ page.baseurl }}/extension-dev-guide/build/required-configuration-files.html)

[0]: https://getcomposer.org/
[2]: https://packagist.org/
[3]: https://getcomposer.org/doc/05-repositories.md#path
[4]: https://www.iso.org/iso-639-language-codes.html
[5]: https://devdocs.magento.com/marketplace/sellers/profile-company.html
[6]: https://marketplace.magento.com/
[7]: https://marketplace.magento.com
[8]: {{ page.baseurl }}/extension-dev-guide/package/package_module.html#package-metapackage
[9]: https://getcomposer.org/doc/03-cli.md#create-project
[10]: {{ page.baseurl }}/install-gde/composer.html
