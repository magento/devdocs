---
layout: default
group: extension-dev-guide
subgroup: 1_Introduction
title: Developer roadmap
menu_title: Developer roadmap (updated)
menu_order: 2
github_link: extension-dev-guide/developers_roadmap.md
redirect_from: /guides/v1.0/extension-dev-guide/developers_roadmap.html
---

##{{page.menu_title}}


This section helps you understand how to develop, package, and distribute your component. 

Key points:

*	Minimum required elements:

	*	<a href="{{ site.gdeurl }}extension-dev-guide/composer-integration.html" target="_blank">`composer.json`</a> 
	*	<a href="{{ site.gdeurl }}extension-dev-guide/component-registration.html" target="_blank">`registration.php`</a> 
	*	Modules: <a href="{{ site.gdeurl }}extension-dev-guide/create_component.html">`module.xml`</a>
	*	Themes: <a href="{{ site.gdeurl }}frontend-dev-guide/themes/theme-create.html#fedg_create_theme_how-to_declare">`theme.xml`</a>
	*	Language packages: <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-pack-meta-xml">`language.xml`</a>
*	<a href="{{ site.gdeurl }}extension-dev-guide/package_module.html" target="_blank">`.zip` your extension</a>.
*	*(For distribution on Magento Marketplace only)*: The package you upload to Magento Marketplace should not be more than 30MB in size.

#### Helpful links
*	<a href="{{ site.gdeurl }}mktpl-quickstart/intro-composer.html">Introduction to Composer</a>
*	<a href="{{ site.gdeurl }}mktpl-quickstart/intro-composer-gloss.html">Glossary of common terms</a>
*	<a href="{{ site.gdeurl }}mktpl-quickstart/intro-moreinfo.html">For more information</a>
*	<a href="https://github.com/magento/magento2-samples">Sample extensions</a> created by the Magento 2 Core team.
*	Magento 2 Developers Hub, at <a href="http://magento.com/developers/magento2">magento.com/developers/magento2</a>.