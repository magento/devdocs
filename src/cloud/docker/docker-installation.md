---
group: cloud-guide
title: Installation
functional_areas:
  - Cloud
  - Docker
  - Configuration
---

## Overview

Magento Cloud Docker is a part of Magento Cloud Tools stack. If you're using Magento Cloud, you mot likely will have it installaed together with ECE-Tools package.

The standalone package can be installed separately.
The source code can be found on [https://github.com/magento/magento-cloud-docker](https://github.com/magento/magento-cloud-docker)

## Initialize project

Magento Cloud Docker supports both Magento Cloud and stand-alone Magento installation.
The initialization steps are slightly different.

### Cloud Customers

{:.procedure}

1. Download a Magento application template from the [Magento Cloud repository][cloud-repo]. Be careful to select the branch that corresponds with the Magento version.

1. You can also run next command to clone the latest template:

   ```bash
   git clone https://github.com/magento/magento-cloud.git <install-directory-name>
   ```

1. Navigate to the directory with just created project.

1. Add your [Magento access credentials][magento-creds] to the `auth.json` file.

### On-Prem Customers

{:.procedure}

1. Create project via [Composer]({{site.baseurl}}/guides/v2.4/install-gde/composer.html)

   ```bash
    composer create-project --repository-url=https://repo.magento.com/ magento/project-enterprise-edition <install-directory-name>
   ```

1. Navigate to the directory with just created project.

1. Add ECE-Tools and Magento Cloud Docker packages

   ```bash
   composer require --no-update --dev magento/ece-tools magento/magento-cloud-docker
   ```

1. Create a default configuration file.

   Magento Cloud Docker requires a configuration source to bea ble to create a specific Docker containers.
   Create a `.magento.docker.yml` configuration with next content:

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
           image: 'elasticsearch'
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

## Adjust /etc/hosts and install dependencies

### Manually

{:.procedure}

1. To make Cloud Docker recognizable on the local machine add the default `magento2.docker` host to hosts file:

   ```bash
   echo "127.0.0.1 magento2.docker" | sudo tee -a /etc/hosts
   ```

1. Update Composer dependencies:

   ```bash
   composer update
   ```

### With OOTB script

{:.procedure}

1. Install the template dependencies, and add the default hostname to your `/etc/hosts` file.

   ```bash
   curl -sL https://github.com/magento/magento-cloud-docker/releases/download/1.1.1/init-docker.sh | bash -s -- --php 7.4
   ```

   If required, you can add options to the `init-docker.sh` initialization script to customize your Docker environment. Run the following command to see the available options:

   ```bash
   curl -sL https://github.com/magento/magento-cloud-docker/releases/download/1.1.1/init-docker.sh | bash -s -- --help
   ```

[cloud-repo]: https://github.com/magento/magento-cloud
[magento-creds]: {{site.baseurl}}/guides/v2.3/install-gde/prereq/connect-auth.html
