---
group: cloud-guide
title: Application
functional_areas:
  - Cloud
  - Setup
---

The `.magento.app.yaml` file controls the way your application builds and deploys. Although {{site.data.var.ece}} supports multiple applications per project, typically, a project has a single application with the `.magento.app.yaml` file at the root of the repository.

The `.magento.app.yaml` has many default values, see [a sample `.magento.app.yaml` file](https://github.com/magento/magento-cloud/blob/master/.magento.app.yaml). Always review the `.magento.app.yaml` for your installed version. This file can differ across {{site.data.var.ece}} versions.

### [Properties]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app_properties.html) 

### [Variables]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app_variables.html)

### [PHP Application]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app_php-application.html)

### [Customize `php.ini` settings]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app_php-ini.html)

### [Workers]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app_workers.html)

