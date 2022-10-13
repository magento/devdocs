### Required files

The following files are required for all components:

*  `registration.php`: Among other things, this file specifies the directory in which the component is installed by vendors in production environments. By default, Composer automatically installs components in the `<Magento root dir>/vendor` directory. For more information, see [Component registration]({{ page.baseurl }}/extension-dev-guide/build/component-registration.html).
*  `composer.json`: Specifies component dependencies and other metadata. For more information, see [Composer integration]({{ page.baseurl }}/extension-dev-guide/build/composer-integration.html).

Each component has an additional component-specific required file:

| Component Type | Required file | Description |
| --- | --- | --- |
| `magento2-module` | [module.xml]({{page.baseurl}}/architecture/archi_perspectives/components/modules/mod_depend.html#managing-module-dependencies) | This file defines basic information about the component, such as component dependencies and version number. Magento uses the version number to determine which schema and data to update when executing `bin/magento setup:upgrade`. |
| `magento2-theme` | [theme.xml]({{page.baseurl}}/frontend-dev-guide/themes/theme-create.html#fedg_create_theme_how-to_declare) | Describes the Magento theme. File specifies a theme name in the `title` node, a parent theme (optional), and a theme preview image (optional) in the `media/preview_image` node. |
| `magento2-language` | [language.xml]({{page.baseurl}}/config-guide/cli/config-cli-subcommands-i18n.html#m2devgde-xlate-files) | Declares a language translation package. |
