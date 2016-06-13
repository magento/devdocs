---
layout: default
group: extension-dev-guide
subgroup: 03_Build
title: The composer.json file
menu_title: The composer.json file
menu_order: 2
version: 2.0
github_link: extension-dev-guide/build/composer-integration.md
redirect_from:
  - /guides/v1.0/extension-dev-guide/composer-integration.html
  - /guides/v2.0/extension-dev-guide/composer-integration.html
---

##{{page.menu_title}}
{:.no_toc}

* This line is a placeholder to generate the table of contents
{:toc}

##Overview
[Composer](https://getcomposer.org/){:target="_blank"} is a dependency manager for PHP. Magento 2 uses Composer to package components and product editions.

Some third-party components that the Magento system uses might not be present in the code base. Instead, they are listed as dependencies in the root `composer.json` file. In addition, the [Component Manager]({{ site.gdeurl }}comp-mgr/compman-start.html) looks for a `composer.json` in a component's root directory and can perform actions on the component and its dependencies.

In particular:

*	If a component has `composer.json` *and* the component was installed using Composer (including from [Packagist](https://packagist.org/){:target="_blank"}, the Magento Marketplace, or other source), the Component Manager can update, uninstall, enable, or disable the component.
*	If the component has `composer.json` but was *not* installed using Composer (for example, custom code a developer wrote), Component Manager can still enable or disable the component.
*	We strongly recommend you include `composer.json` in your component's root directory whether or not you intend to distribute it to other merchants using Magento.

<div class="bs-callout bs-callout-info" id="info">
  <p>Magento does not currently support the <a href="https://getcomposer.org/doc/05-repositories.md#path" target="_blank"><code>path</code></a> repository.</p>
</div>

## Composer binary location {#composer-binary}
Magento's `bin/magento` script uses composer from `<Magento root>/vendor/composer` in your Magento 2 installation, not your globally installed composer. Keep this in mind while customizing or updating composer or troubleshooting composer issues while working with Magento 2.

## Descriptions of different composer.json files {#composerjson-overview}
Certain Magento components and product editions are represented with `composer.json` files.

### Root
**Location:** `composer.json`

**Name:** `magento/magento2ce`

**Type:** `project`

This is the main `composer.json` file. Magento uses this file to declare dependencies on third-party components. This file is used as a template for any other root `composer.json` files.

----

### CE project
**Location:** `composer.json`

**Name:** `magento/project-community-edition`

**Type:** `project`

This file represents the Magento Community Edition project. The package includes the `composer.json` file, which declares the dependencies on the Magento product as well as the class autoloader. This can be used by Magento system integrators to deploy Magento using Composer.

----

### CE product
**Location:** `composer.json`

**Name:** `magento/product-community-edition`

**Type:** `metapackage`

This file represents Magento Community Edition product. The package includes the `composer.json` file that declares the dependencies on Magento components (modules, themes, and so on) and third-party components. This can be used by Magento system integrators to deploy Magento using Composer.

----

### Magento Framework
**Location:** `lib/internal/Magento/Framework/composer.json`

**Name:** `magento/framework`

**Type:** `magento2-library`

This file is used only by the framework.

----

### Module
**Locations:**

* `app/code/<vendor-name>/<module-name>/composer.json`
* `vendor/<vendor-name>/<module-name>/composer.json`

**Name:** `<vendor-name>/<package-name>`

**Type:** `magento2-module`

The `composer.json` file for a module extension declares external dependencies that the module needs in order to function.

----

### Theme
**Locations:**

* `app/design/frontend/<vendor-name>/<theme-name>/composer.json`
* `app/design/adminhtml/<vendor-name>/<theme-name>/composer.json`

**Name:** `<vendor-name>/<package-name>`

**Type:** `magento2-theme`

The `composer.json` file for a theme component contains parent theme dependencies the extension needs to inherit.

----

### Language Package
**Location:**
`app/i18n/<vendor-name>/<language-code>/composer.json`

**Name:** `<vendor-name>/<package-name>`

**Type:** `magento2-language`

For language packages, you must use the correct [ISO code](http://www.iso.org/iso/home/standards/language_codes.htm){:target="_blank"} for the language code in the `composer.json` file.

---

## Magento-specific package types
Each Magento component can be categorized as a module, theme, or language package. If any component does not fit into a specific category, its type can be generalized as `magento2-component`.

Having an identifier type for each component allows the system to marshall the directories and files of each component to the correct locations, based on the Magento 2 directory structure.

## Naming conventions
The namespace of Composer packages is global within a package repository (such as [packagist.org](http://packagist.org)). The Composer specification requires that a package name use the format:

`<vendor-name>/<package-name>`


### vendor-name
Using Composer specifications ensures that vendors of different packages are distinguished, and there is a low risk of overlapping (unless two vendors have the same name). All letters in the name must be lowercase. For example, the format for the vendor name for extensions released by Magento Inc is:

`magento/*`

#### Magento Marketplace Extensions
{:.no_toc}
If you are planning to submit your extension to the Magento Marketplace, you *must* use the unique Vendor Name created or assigned to you when you created your marketplace account. The Vendor Name specified in your profile is what goes in your `composer.json` file as the `vendor-name` part of the extension name.

When you submit your extension to the Magento Marketplace, the vendor-name will be extracted and compared to your assigned Vendor Name to make sure it matches.

Please see the [Marketplace Documentation](http://docs.magento.com/marketplace/user_guide/account/profile-company.html){:target="_blank"} for more information about your unique vendor name.

### package-name
The package name is up to the vendor (as long as it is lowercase). If this name is meant to consist of multiple words, the Composer specification recommends separating them with dash. The convention for Magento package names is this:

`magento/<type-prefix>-<suffix>[-<suffix>]...`

Where:

: `type-prefix` is a type of component in a Magento-specific domain.
: `suffix` is anything that allows distinguishing/disambiguating the component within that type.

## Versioning {#component-version}
{% include php-dev/component-versioning.md %}

---

**Next:**
[Define your configuration files]({{ site.gdeurl }}extension-dev-guide/build/required-configuration-files.html)
