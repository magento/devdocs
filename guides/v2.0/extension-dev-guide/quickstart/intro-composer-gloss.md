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
We refer to what you're coding as *components*. A Magento component can be classified into the following *types*:

*	Module (extend Magento capabilities)
*	Theme (change the look and feel of your storefront and Admin)
*	Language package (localize the storefront and Admin)
*	Library (common code)

To understand how to define component types `composer.json`, see <a href="{{ site.gdeurl }}extension-dev-guide/composer-integration.html">Composer integration</a>.

### Metapackage, shared package
We require more than one component to be packaged as a <a href="https://getcomposer.org/doc/04-schema.md#type" target-"_blank">*metapackage*</a>, which consists of a `composer.json` that specifies individual components and their dependencies.

In addition, your components can rely on *shared packages*, which are analogous to libraries. One shared package can be used by many metapackages.

<div class="bs-callout bs-callout-warning">
    <p>You can upload as many shared packages as you want but you must specifically give components access to them. Failure to do so means your components won't work properly after they're installed by merchants. For more information, see the <em>Magento Marketplace User Guide</em>.</p>
</div>

### Component Manager
Merchants use the <a href="{{ site.gdeurl }}comp-mgr/compman-start.html">Component Manager</a> (part of the Magento Admin) to do any of the following to their components:

*	Install, uninstall
*	Update
*	Enable, disable

If you package and upload your components as discussed in this guide and in the <em>Marketplace User Guide</em>, merchants can easily update your components after you publish them.

For details, see <a href="{{ site.gdeurl }}comp-mgr/compman-main-pg.html#compman-access-types">Supported actions for each component type</a>.



