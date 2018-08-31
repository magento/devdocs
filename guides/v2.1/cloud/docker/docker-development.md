---
group: cloud
title: Docker development environment
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

{{site.data.var.ece}} provides a Docker environment option for those who use their local environment for development, test, or automation tasks. The {{site.data.var.ece}} Docker environment requires three, essential components: a Magento 2 template, Docker Compose, and {{site.data.var.ece}} `{{site.data.var.ct}}` package.

The [Magento Cloud Docker repository](https://github.com/magento/magento-cloud-docker){:target="_blank"} contains build information for the following [Docker hub](https://hub.docker.com/r/magento/){:target="_blank"} images:

- PHP: magento/magento-cloud-docker-php
    -  PHP-CLI - version 7 and later
    -  PHP-FPM - version 7 and later
- NGINX: magento/magento-cloud-docker-nginx
- Varnish: magento/magento-cloud-docker-varnish

The `ece-tools` package provides a `docker:build` command to generate the Docker Compose configuration. Also, you can specify a version using one of the following options:

- PHP: `--php`
- NGINX: `--nginx`
- MariaDB: `--db`

## Automate integration testing

Installing {{site.data.var.ece}} in a dedicated Docker environment presents an opportunity for you to customize the following features and capabilities to implement automated integration testing:

-  2-layer configuration for Docker build and Travis CI
-  Customizable Docker Compose file to support a wide range of environment sets
-  Flexible permissions
-  Easy local setup and implementation
