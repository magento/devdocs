<div markdown="1">

### Root directory location
A component's root directory is the top-level directory for that component under which its folders and files are located. Depending on how your Magento development environment was installed, your component's root directory can be located in two places:

* `<Magento install directory>/app`: This is the *recommended* location for component development. You can easily set up this type of environment by [Cloning the Magento 2 GitHub repository]({{page.baseurl}}install-gde/prereq/dev_install.html).

  * For modules, use `app/code`.
  * For storefront themes, use `app/design/frontend`.
  * For Admin themes, use `app/design/adminhtml`.
  * For language packages, use `app/i18n`.

* `<Magento install directory>/vendor`: This location is found in the alternative setups where the [`composer create-project`]({{page.baseurl}}install-gde/prereq/integrator_install.html) command was used to get a Magento 2 metapackage (which downloads the CE or EE code), or a [compressed Magento 2 archive]({{page.baseurl}}install-gde/prereq/zip_install.html) was extracted in order to install Magento. *We do not recommend developing components using this setup*.

### Required files
The following files are required for all components:

*	`registration.php`: Among other things, this file specifies the directory in which the component is installed by vendors in production environments. By default, composer automatically installs components in the `<Magento root dir>/vendor` directory. For more information, see [Component registration]({{page.baseurl}}extension-dev-guide/component-registration.html).
*	`composer.json`: Specifies component dependencies and other metadata. For more information, see [Composer integration]({{page.baseurl}}extension-dev-guide/composer-integration.html).
