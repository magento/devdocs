---
layout: default
group: quickstart
subgroup: 01_Introduction
title: Glossary of common terms
menu_title: Glossary of common terms
menu_order: 5
menu_node: 
github_link: extension-dev-guide/quickstart/intro-composer-gloss.md
---

##{{page.menu_title}}

### Component
We refer to what you're coding as *components*. (Composer refers to them as <a href="https://getcomposer.org/doc/05-repositories.md#packages" target="_blank">*packages*</a>; the terms component and package are equivalent.) A Magento component can be classified into the following *types*:

*	Module (extend Magento capabilities)
*	Theme (change the look and feel of your storefront and Admin)
*	Language package (localize the storefront and Admin)

<div class="bs-callout bs-callout-info" id="info">
  <p>Magento Marketplace uses the blanket term <em>product</em> to refer to a component or a metapackage.</p>
</div>

You can *package* your components as follows:

*	Individually
*	As a <a href="https://getcomposer.org/doc/04-schema.md#type" target="_blank">metapackage</a>, which Magento Marketplace requires to deliver to merchants more than one component in a single package. A metapackage consists of *shared packages*. Examples: a metapackage that consists of a module and a theme, two modules, two themes, and so on. 

	More information about metapackages can be found in the next section.

### Metapackage
Magento Marketplace requires more than one component to be packaged as a *metapackage*, which consists of a `composer.json` that specifies individual components and their dependencies. (Magento Marketplace also refers to a metapackage as an *extension*.)

A metapackage specifies components that we refer to as *shared packages*. You can use a shared package in multiple metapackages if you wish. (If you use shared packages, Marketplace requires that *all* components in a metapackage are shared packages.)

For example, you might want to list two metapackages in the Magento Marketplace&mdash;a standard package and a premium package. All of the standard package components could be shared packages used by the premium package. Among other things, this enables merchants to easily upgrade from your standard package to your premium package using the <a href="#gloss-compman">Magento Component Manager</a>. 

Merchants do not need to understand that, under the covers, some packages are shared.

<div class="bs-callout bs-callout-warning">
    <p>You can upload to Magento Marketplace as many shared packages as you want but you must specifically give components access to them. Failure to do so means your components won't work properly after they're installed by merchants. For more information, see the <em>Magento Marketplace User Guide</em>.</p>
</div>

<a href="{{ site.gdeurl }}extension-dev-guide/package_module.html#package-metapackage">More information about metapackages</a>

To understand how to define component types `composer.json`, see <a href="{{ site.gdeurl }}extension-dev-guide/composer-integration.html">Composer integration</a>.

<h3 id="gloss-compman">Component Manager</h3>
Merchants use the <a href="{{ site.gdeurl }}comp-mgr/compman-start.html">Component Manager</a> (part of the Magento Admin) to do any of the following to their components:

*	Install, uninstall
*	Update
*	Enable, disable

If you package and upload your components as discussed in this guide and in the <em>Marketplace User Guide</em>, merchants can easily update your components after you publish them.

For details, see <a href="{{ site.gdeurl }}comp-mgr/compman-main-pg.html#compman-access-types">Supported actions for each component type</a>.