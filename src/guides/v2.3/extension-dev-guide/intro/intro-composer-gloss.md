---
group: php-developer-guide
title: Glossary of common terms
---

### Component {#gloss-component}

We refer to what you're coding as *components*. (Composer refers to them as <a href="https://getcomposer.org/doc/05-repositories.md#packages" target="_blank">*packages*</a>; the terms component and package are equivalent.) A [Magento component](https://glossary.magento.com/magento-component) can be classified into the following *types*:

*  [Module](https://glossary.magento.com/module) (extend Magento capabilities)
*  [Theme](https://glossary.magento.com/theme) (change the look and feel of your [storefront](https://glossary.magento.com/storefront) and Admin)
*  [Language package](https://glossary.magento.com/language-package) (localize the storefront and Admin)

You can *package* your components as follows:

*  Individually
*  As a [metapackage](https://getcomposer.org/doc/04-schema.md#type), which is a Magento Marketplace requirement if you're developing a product that has more than one component.

   A metapackage consists of *shared packages*. Examples: a metapackage that consists of a module and a theme, two modules, two themes, and so on.

   More information about metapackages can be found in the next section.

 {:.bs-callout-info}
Magento Marketplace uses the blanket term *product* to refer to a component or a [metapackage](https://glossary.magento.com/metapackage).

### Metapackage {#gloss-meta}

Magento Marketplace requires more than one component to be packaged as a *metapackage*, which consists of only a `composer.json` that specifies individual components and their dependencies. (Magento Marketplace also refers to a metapackage as an *extension*.)

A metapackage requires or suggests components that we refer to as *shared packages*. You can use a shared package in multiple metapackages if you wish. (If you use shared packages, Marketplace requires that *all* components in a metapackage be shared packages.)

For example, you might want to list two metapackages in the Magento Marketplace---a standard package and a premium package. All of the standard package components could be shared packages used by the premium package.

Merchants do not need to understand that, under the covers, some packages are shared.

{:.bs-callout-warning}
You can upload to Magento Marketplace as many shared packages as you want but you must specifically give components access to them. Failure to do so means your components won't work properly after they're installed by merchants. For more information, see the [Magento Marketplace User Guide](http://docs.magento.com/marketplace/user_guide/getting-started.html){:target="_blank"}.

{:.ref-header}
Related topics

*  [metapackages]({{ page.baseurl }}/extension-dev-guide/package/package_module.html#package-metapackage)
*  [component types in `composer.json`]({{ page.baseurl }}/extension-dev-guide/build/composer-integration.html).
