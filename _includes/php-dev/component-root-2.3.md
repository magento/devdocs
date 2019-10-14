### Root directory location

A component's root directory matches the component's name and contains all its subdirectories and files. Based on how you installed Magento, you can put your component's root directory in one of two places:

*  `<Magento install directory>/app`: This is the *recommended* location for component development. You can set up this environment by [Cloning the Magento 2 GitHub repository]({{page.baseurl}}/install-gde/prereq/dev_install.html).

   *  For modules, use `app/code`.
   *  For storefront themes, use `app/design/frontend`.
   *  For Admin themes, use `app/design/adminhtml`.
   *  For language packages, use `app/i18n`.

*  `<Magento install directory>/vendor`: You will find this location for installations that use the [`composer create-project`]({{page.baseurl}}/install-gde/composer.html) to install the Magento 2 metapackage (which downloads the CE or EE code). You will also find this location if you install Magento by extracting the [compressed Magento 2 archive]({{page.baseurl}}/install-gde/prereq/zip_install.html).

Magento installs third-party components in the `vendor` directory. But we recommend adding your components to the `app/code` directory. If you put your component in the `vendor` directory, Git will ignore it because Magento adds the `vendor` directory to the `.gitignore` file.

### Required files

All components require these three files:

*  `registration.php`: This file registers your component with Magento. It uses the component's root directory name as the component name. By default, the composer installs components in the `<Magento root dir>/vendor` directory. For more information, see [Component registration]({{page.baseurl}}/extension-dev-guide/build/component-registration.html).
*  `etc/module.xml`: This file defines basic information about the component, such as component dependencies and version number. Magento uses the version number to determine which schema and data to update when executing `bin/magento setup:upgrade`.
*  `composer.json`: This file defines the dependencies that the component needs at runtime. For more information, see [Composer integration]({{page.baseurl}}/extension-dev-guide/build/composer-integration.html).
