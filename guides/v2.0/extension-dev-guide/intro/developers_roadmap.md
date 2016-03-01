---
layout: default
group: extension-dev-guide
subgroup: 01_Introduction
title: Developer roadmap
menu_title: Developer roadmap
menu_order: 2
github_link: extension-dev-guide/intro/developers_roadmap.md
redirect_from: 
  - /guides/v1.0/extension-dev-guide/developers_roadmap.html
  - /guides/v2.0/mktpl-quickstart/intro-moreinfo.html
  - /guides/v2.0/extension-dev-guide/developers_roadmap.html
---

##{{page.menu_title}}


This topic introduces the high-level workflow for a developer who wants to create or customize the Magento application. Developers can also package and distribute their customizations to merchants.

Key points:

*	Minimum required elements:

	*	<a href="{{ site.gdeurl }}extension-dev-guide/build/composer-integration.html">Declare component dependencies</a> in `composer.json`.
	*	<a href="{{ site.gdeurl }}extension-dev-guide/build/component-registration.html">Register</a> the component using `registration.php`.
	*	Component-specific XML definition files: 

		*	Modules: <a href="{{ site.gdeurl }}extension-dev-guide/build/create_component.html">`module.xml`</a>
		*	Themes: <a href="{{ site.gdeurl }}frontend-dev-guide/themes/theme-create.html#fedg_create_theme_how-to_declare">`theme.xml`</a>
		*	Language packages: <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-pack-meta-xml">`language.xml`</a>
*	Distribute your component:

	*	<a href="{{ site.gdeurl }}extension-dev-guide/package/package_module.html">Package your component</a> in `.zip` format.

		Use our [validation tool](http://alankent.me/2016/02/01/magento-2-marketplace-upload-validation-tool-quick-note){:target="_blank"} to check your package before you distribute it.
	*	If you upload the component to Magento Marketplace, it should be less than 30MB in size.

#### Related topics
*	<a href="{{ site.gdeurl }}extension-dev-guide/intro/intro-composer.html">Introduction to Composer</a>
*	<a href="{{ site.gdeurl }}extension-dev-guide/intro/intro-composer-gloss.html">Glossary of common terms</a>
*	<a href="https://github.com/magento/magento2-samples" target="_blank">Sample extensions</a> created by the Magento 2 Core team
*	<a href="http://magento.com/developers/magento2" target="_blank">Magento 2 Developers Hub</a>