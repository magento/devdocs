---
group: cloud-guide
title: Application
functional_areas:
  - Cloud
  - Setup
---
The `.magento.app.yaml` file controls the way your application builds and deploys. Although {{site.data.var.ece}} supports multiple applications per project, typically, a project has a single application with the `.magento.app.yaml` file at the root of the repository.

The `.magento.app.yaml` has many default values, see [a sample `.magento.app.yaml` file](https://github.com/magento/magento-cloud/blob/master/.magento.app.yaml). Always review the `.magento.app.yaml` for your installed version. This file can differ across {{site.data.var.ece}} versions.

### File structure

Use the `.magento.app.yaml` file to define the following configuration values:

- [Properties]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app_properties.html)—Define property values for application instance.
- [Variables]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app_variables.html)—Review environment variables required for the application instance.
- [PHP Application]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app_php-application.html)—Configure runtime PHP options.

### Customizations

- [Customize `php.ini` settings]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app_php-ini.html)—Build a custom PHP configuration for your application instance.
- [Workers]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app_workers.html)—Create a worker instance and understand background tasks.

### [Variables]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app_variables.html)

### [PHP Application]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app_php-application.html)

### [Customize `php.ini` settings]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app_php-ini.html)

### [Workers]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app_workers.html)
