### Root directory location

A component's root directory matches the component's name and contains all its subdirectories and files. Based on how you installed Magento, you can put your component's root directory in one of two places:

*  `<Magento install directory>/app`: This is the *recommended* location for component development. You can set up this environment by [Cloning the Magento 2 GitHub repository]({{page.baseurl}}/install-gde/prereq/dev_install.html).

   *  For modules, use `app/code`.
   *  For storefront themes, use `app/design/frontend`.
   *  For Admin themes, use `app/design/adminhtml`.
   *  For language packages, use `app/i18n`.

*  `<Magento install directory>/vendor`: You will find this location for installations that use the [`composer create-project`]({{page.baseurl}}/install-gde/composer.html) to install the Magento 2 metapackage (which downloads the CE or EE code). You will also find this location if you install Magento by extracting the [compressed Magento 2 archive]({{page.baseurl}}/install-gde/prereq/zip_install.html).

   Magento installs third-party components in the `<Magento install directory>/vendor` directory. But we recommend adding your components to the `<Magento install directory>/app/code` directory. If you add your component to the `<Magento install directory>/vendor` directory, [Git](https://git-scm.com/docs) will ignore it because Magento adds the `vendor` directory to the `<Magento install directory>/.gitignore` file.
