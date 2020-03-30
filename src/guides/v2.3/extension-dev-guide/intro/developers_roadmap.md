---
group: php-developer-guide
subgroup: 01_Introduction
title: Developer roadmap
menu_title: Developer roadmap
menu_order: 2
---

This topic introduces the high-level workflow for a developer who wants to create or customize the Magento application. Developers can also package and distribute their customizations to merchants.

To satisfy the minimum required elements for creating or customizing your Magento application:

*  [Declare component dependencies]({{ page.baseurl }}/extension-dev-guide/build/composer-integration.html) in `composer.json`.

   {:.bs-callout-tip}
   While you can manage dependencies on your own, it is a recommended and strongly encouraged best practice to use the `composer.json` file.

*  [Register]({{ page.baseurl }}/extension-dev-guide/build/component-registration.html) the component using the `registration.php` file.
*  Use these component-specific XML definition files:
   *  Modules: [`module.xml`]({{ page.baseurl }}/extension-dev-guide/build/create_component.html)
   *  Themes: [`theme.xml`]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html#fedg_create_theme_how-to_declare)
   *  Language packages: [`language.xml`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-pack-meta-xml)

*  Distribute your component:
   *  [Package your component]({{ page.baseurl }}/extension-dev-guide/package/package_module.html) in `.zip` format.
   *  If you upload the component to Magento Marketplace, it should be less than 30MB in size.
