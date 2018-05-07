---
layout: default
group: extension-dev-guide
subgroup: 01_Introduction
title: Glossary of common terms
menu_title: Glossary of common terms
menu_order: 5
menu_node:
version: 2.1
github_link: extension-dev-guide/intro/intro-composer-gloss.md
redirect_from:
  - /guides/v2.0/mktpl-quickstart/intro-composer-gloss.html
  - /guides/v2.1/mktpl-quickstart/intro-composer-gloss.html
  - /guides/v2.2/mktpl-quickstart/intro-composer-gloss.html
---

### Component {#gloss-component}
We refer to what you're coding as *components*. (Composer refers to them as <a href="https://getcomposer.org/doc/05-repositories.md#packages" target="_blank">*packages*</a>; the terms component and package are equivalent.) A {% glossarytooltip 3425e9ae-5edf-4fc6-b645-06023e9e5e5b %}Magento component{% endglossarytooltip %} can be classified into the following *types*:

*	{% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}Module{% endglossarytooltip %} (extend Magento capabilities)
*	{% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}Theme{% endglossarytooltip %} (change the look and feel of your {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} and Admin)
*	{% glossarytooltip 9c4c7b9b-43f0-4454-8e8c-fb62ad40c35f %}Language package{% endglossarytooltip %} (localize the storefront and Admin)

You can *package* your components as follows:

*	Individually
*	As a <a href="https://getcomposer.org/doc/04-schema.md#type" target="_blank">metapackage</a>, which is a Magento Marketplace requirement if you're developing a product that has more than one component.

	A metapackage consists of *shared packages*. Examples: a metapackage that consists of a module and a theme, two modules, two themes, and so on.

	More information about metapackages can be found in the next section.

<div class="bs-callout bs-callout-info" id="info">
  <p>Magento Marketplace uses the blanket term <em>product</em> to refer to a component or a {% glossarytooltip 7490850a-0654-4ce1-83ff-d88c1d7d07fa %}metapackage{% endglossarytooltip %}.</p>
</div>

### Metapackage {#gloss-meta}
Magento Marketplace requires more than one component to be packaged as a *metapackage*, which consists of only a `composer.json` that specifies individual components and their dependencies. (Magento Marketplace also refers to a metapackage as an *extension*.)

A metapackage requires or suggests components that we refer to as *shared packages*. You can use a shared package in multiple metapackages if you wish. (If you use shared packages, Marketplace requires that *all* components in a metapackage be shared packages.)

For example, you might want to list two metapackages in the Magento Marketplace&mdash;a standard package and a premium package. All of the standard package components could be shared packages used by the premium package. Among other things, this enables merchants to easily upgrade from your standard package to your premium package using the <a href="#gloss-compman">Magento Component Manager</a>.

Merchants do not need to understand that, under the covers, some packages are shared.

<div class="bs-callout bs-callout-warning">
    <p>You can upload to Magento Marketplace as many shared packages as you want but you must specifically give components access to them. Failure to do so means your components won't work properly after they're installed by merchants. For more information, see the <a href="http://docs.magento.com/marketplace/user_guide/getting-started.html" target="_blank">Magento Marketplace User Guide</a>.</p>
</div>

#### For more information
*	<a href="{{page.baseurl}}/extension-dev-guide/package/package_module.html#package-metapackage">metapackages</a>
*	<a href="{{page.baseurl}}/extension-dev-guide/build/composer-integration.html">component types in <code>composer.json</code></a>.

### Component Manager {#gloss-compman}
Merchants use the [Component Manager]({{ page.baseurl}}/comp-mgr/module-man/compman-start.html) (part of the Magento Admin) to do any of the following:

*	Install, uninstall
*	Update
*	Enable, disable

If you package and upload your components as discussed in this guide and in the <em>Marketplace User Guide</em>, merchants can easily update your components after you publish them.

For details, see [Supported actions for each component type]({{ page.baseurl}}/comp-mgr/module-man/compman-main-pg.html#compman-access-types)