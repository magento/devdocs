---
layout: default
group: extension-dev-guide
subgroup: 03_Build
title: The composer.json file
menu_title: The composer.json file
menu_order: 2
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
Magento's `bin/magento` script uses composer from the `vendor/composer` directory in your Magento 2 installation, not your globally installed Composer. Keep this in mind while customizing or updating composer or troubleshooting Composer issues while working with Magento 2.

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

This file represents the Magento Community Edition project. The package only includes the `composer.json`, which declares the dependencies on the magento product as well as the class autoloader. This can be used by Magento system integrators to deploy Magento using Composer.

----

### CE product
**Location:** `composer.json`

**Name:** `magento/product-community-edition`

**Type:** `metapackage`

This file represents Magento Community Edition product. The package only includes composer.json that declares the dependencies on magento components (modules, themes, and so on) and third-party components. This can be used by Magento system integrators to deploy Magento using Composer.

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

The fully qualified module name, broken down into vendor, with the rest of the words as suffixes. The "module" prefix is mandatory to disambiguate from other types (for example, Magento_Backend module versus Magento/backend theme).

----

### Theme
**Locations:**

* `app/design/frontend/<vendor-name>/<theme-name>/composer.json`
* `app/design/adminhtml/<vendor-name>/<theme-name>/composer.json`

**Name:** `<vendor-name>/<package-name>`

**Type:** `magento2-theme`

Themes belong to areas, so the area name has to be the first suffix

----

### Language Package
**Location:**
`app/i18n/<vendor-name>/<language-code>/composer.json`

**Name:** `<vendor-name>/<package-name>`

**Type:** `magento2-language`

We recommend using the correct [ISO code](http://www.iso.org/iso/home/standards/language_codes.htm){:target="_blank"} for the language code.

---

## Magento-specific package types
Each Magento component can be categorized into one of the types previously listed. If any component does not fit into a specific category, it can be generalized to `magento2-component`.

Having an identifier type for each component allows the system to marshall the directories and files of each component to the correct locations, based on the Magento 2 directory structure.

## Naming conventions
The namespace of Composer packages is global within a package repository (such as [packagist.org](http://packagist.org)). The Composer specification requires that a package name use the format:

{% highlight XML %}
<vendor-name>/<package-name>
{% endhighlight %}

As a result, vendors of different packages are distinguished, and there is a low risk of overlapping (unless different vendors names themselves exactly the same). All letters in the name must be lowercase. Therefore, the format for package names released by Magento Inc is:

{% highlight XML %}
magento/*
{% endhighlight %}

The package name is up to the vendor (as long as it is lowercase). If this name is meant to consist of multiple words, the Composer specification recommends separating them with dash. The convention for Magento package names is this:

{% highlight XML %}
magento/<type-prefix>-<suffix>[-<suffix>]...
{% endhighlight %}

Where:

: `type-prefix` is a type of component in a Magento-specific domain.
: `suffix` is anything that allows distinguishing/disambiguating the component within that type.

## Versioning {#component-version}
{% include php-dev/component-versioning.md %}

---

**Next:**
[Define your configuration files]({{ site.gdeurl }}extension-dev-guide/build/required-configuration-files.html)
