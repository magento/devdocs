---
group: cloud-guide
title: Prepare Commerce for Docker
functional_areas:
  - Cloud
  - Configuration
---

{{site.data.var.mcd-prod}} is one of the {{site.data.var.csuite}} packages designed to deploy and manage local {{site.data.var.ee}} Docker environments for both cloud and on-premises projects.

If you are using {{ site.data.var.ee }} on Cloud, you most likely have the `{{ site.data.var.mcd-package }}` package installed together with the `{{site.data.var.ct-repo}}` package.

An on-premises installation requires the stand-alone `{{ site.data.var.mcd-package }}` package available in the [Magento Cloud Docker GitHub repository](https://github.com/magento/magento-cloud-docker).

## Initialize the Commerce project

{{ site.data.var.mcd-prod }} supports the {{site.data.var.ee}} installation for both cloud and on-premises projects. The initialization steps are different for each project type.

### Cloud projects

{:.procedure}
To install a {{ site.data.var.ece }} project:

1. Download an application template from the [Magento Cloud repository][cloud-repo]. Be careful to select the branch that corresponds with the Commerce version.

1. Optionally, you can clone the latest template.

   ```bash
   git clone https://github.com/magento/magento-cloud.git <install-directory-name>
   ```

1. Change to the new project directory.

1. Add your [access credentials][magento-creds] to the `auth.json` file.

### On-premises projects

When you initialize a {{site.data.var.ee}} project for Docker development, you must create a [.magento.docker.yml][unified configuration] configuration source file to create the Docker containers for the local environment.

{:.procedure}
To install an {{site.data.var.ee}} on-premises project:

1. Create a project using [Composer]({{site.baseurl}}/guides/v2.4/install-gde/composer.html).

   ```bash
    composer create-project --repository-url=https://repo.magento.com/ magento/project-enterprise-edition <install-directory-name>
   ```

   This command installs the latest release. To install a specific version, specify the version number, for example `magento/project-enterprise-edition=2.3.5`.

1. Change to the project directory.

1. Add the {{ site.data.var.ct }} and {{ site.data.var.mcd-prod }} packages.

   ```bash
   composer require --no-update --dev magento/ece-tools magento/magento-cloud-docker
   ```

1. Create the default configuration source file, [.magento.docker.yml][unified configuration]  to build the Docker containers for the local environment.

   ```yaml
   name: magento
   system:
       mode: 'production'
   services:
       php:
           version: '7.3'
           extensions:
               enabled:
                   - xsl
                   - json
                   - redis
       mysql:
           version: '10.3'
           image: 'mariadb'
       redis:
           version: '5.0'
           image: 'redis'
       elasticsearch:
           version: '7.5'
           image: 'magento/magento-cloud-docker-elasticsearch'
   hooks:
       build: |
           set -e
           php ./vendor/bin/ece-tools run scenario/build/generate.xml
           php ./vendor/bin/ece-tools run scenario/build/transfer.xml
       deploy: 'php ./vendor/bin/ece-tools run scenario/deploy.xml'
       post_deploy: 'php ./vendor/bin/ece-tools run scenario/post-deploy.xml'
   mounts:
       var:
           path: 'var'
       app-etc:
           path: 'app/etc'
       pub-media:
           path: 'pub/media'
       pub-static:
           path: 'pub/static'
   ```

   {:.bs-callout-info}
   This default configuration file provides the minimum configuration for the Docker environment. For more detailed configuration information, see [Configure and manage your project and environment].

## Update the hosts file and install dependencies

Before you use {{site.data.var.mcd-prod}}, you must update the `etc/hosts` file and install required dependencies. You can do this manually, or using an installation script.

{:.procedure}
To update and install manually:

1. Add the default `magento2.docker` host to the hosts file to make Cloud Docker recognizable on the local machine.

   ```bash
   echo "127.0.0.1 magento2.docker" | sudo tee -a /etc/hosts
   ```

1. Update the project dependencies.

   ```bash
   composer update
   ```

{:.procedure}
To update and install using the installation script:

1. Install the template dependencies and add the default hostname to your `/etc/hosts` file.

   ```bash
   curl -sL https://github.com/magento/magento-cloud-docker/releases/download/1.2.0/init-docker.sh | bash -s -- --php 7.4
   ```

   If required, you can add options to the `init-docker.sh` initialization script to customize your Docker environment. Run the following command to see the available options:

   ```bash
   curl -sL https://github.com/magento/magento-cloud-docker/releases/download/1.1.1/init-docker.sh | bash -s -- --help
   ```

After you complete the installation, you can begin using the Docker environment.

<!--Link definitions-->

[cloud-repo]: https://github.com/magento/magento-cloud
[Configure and manage your project and environment]: {{site.baseurl}}/cloud/docker/docker-config.html
[magento-creds]: {{site.baseurl}}/guides/v2.3/install-gde/prereq/connect-auth.html
[unified configuration]: {{site.baseurl}}/cloud/docker/docker-config-sources.html#unified-configuration
