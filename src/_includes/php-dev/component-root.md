### Root directory location

A component's root directory is the top-level directory for that component under which its folders and files are located. Depending on how your Magento development environment was installed, your component's root directory can be located in two places:

*  `<Magento install directory>/app`: This is the *recommended* location for component development. You can easily set up this type of environment by [Cloning the Magento 2 GitHub repository]({{ page.baseurl }}/install-gde/prereq/dev_install.html).

   *  For modules, use `app/code`.
   *  For storefront themes, use `app/design/frontend`.
   *  For Admin themes, use `app/design/adminhtml`.
   *  For language packages, use `app/i18n`.

*  `<Magento install directory>/vendor`: This location is found in the alternative setups where the {% if page.guide_version == "2.0" %} [`composer create-project`]({{page.baseurl}}/install-gde/prereq/integrator_install.html) {% else %} [`composer create-project`]({{page.baseurl}}/install-gde/composer.html). {% endif %} command was used to get a Magento 2 metapackage (which downloads the CE or EE code), or a [compressed Magento 2 archive]({{ page.baseurl }}/install-gde/prereq/zip_install.html) was extracted in order to install Magento.

   Any third-party components (and the Magento application itself) are downloaded and stored under the `<Magento install directory>/vendor` directory. If you are using [Git](https://git-scm.com/docs) to manage your project, this directory is typically added to the `<Magento install directory>/.gitignore` file. Therefore, we recommend you do your customization work in `<Magento install directory>/app/code`, not `<Magento install directory>/vendor`.
