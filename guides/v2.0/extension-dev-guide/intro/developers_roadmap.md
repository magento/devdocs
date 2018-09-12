---
group: php-developer-guide
subgroup: 01_Introduction
title: Developer roadmap
menu_title: Developer roadmap
menu_order: 2
redirect_from:
  - /guides/v1.0/extension-dev-guide/developers_roadmap.html
  - /guides/v2.0/extension-dev-guide/developers_roadmap.html
---

This topic introduces the high-level workflow for a developer who wants to create or customize the Magento application. Developers can also package and distribute their customizations to merchants.

Key points:

*	Minimum required elements:

	*	[Declare component dependencies]({{ page.baseurl }}/extension-dev-guide/build/composer-integration.html) in `composer.json`.
	*	[Register]({{ page.baseurl }}/extension-dev-guide/build/component-registration.html) the component using `registration.php`.
	*	Component-specific XML definition files:

		*	Modules: [`module.xml`]({{ page.baseurl }}/extension-dev-guide/build/create_component.html)
		*	Themes: [`theme.xml`]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html#fedg_create_theme_how-to_declare)
		*	Language packages: [`language.xml`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-pack-meta-xml)
*	Distribute your component:

	*	[Package your component]({{ page.baseurl }}/extension-dev-guide/package/package_module.html) in `.zip` format.

		Use our [validation tool](https://github.com/magento/marketplace-tools){:target="_blank"} to check your package before you distribute it.
	*	If you upload the component to Magento Marketplace, it should be less than 30MB in size.

