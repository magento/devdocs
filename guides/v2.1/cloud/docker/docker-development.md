---
group: cloud-guide
title: Docker development environment
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

{{site.data.var.ece}} provides a Docker environment option for those who use their local environment for development, test, or automation tasks. The {{site.data.var.ece}} Docker environment requires three, essential components: a Magento 2 template, Docker Compose, and {{site.data.var.ece}} `{{site.data.var.ct}}` package.

The [Magento Cloud Docker repository](https://github.com/magento/magento-cloud-docker) contains build information for the following [Docker hub images:

- PHP: [magento/magento-cloud-docker-php](https://hub.docker.com/r/magento/magento-cloud-docker-php/)
    -  PHP-CLI - version 7 and later
    -  PHP-FPM - version 7 and later
- NGINX: [magento/magento-cloud-docker-nginx](https://hub.docker.com/r/magento/magento-cloud-docker-nginx/)
- Varnish: [magento/magento-cloud-docker-varnish](https://hub.docker.com/r/magento/magento-cloud-docker-varnish/)
- Redis: [magento/magento-cloud-docker-redis](https://hub.docker.com/r/magento/magento-cloud-docker-redis/)

## Automate integration testing

Installing {{site.data.var.ece}} in a dedicated Docker environment presents an opportunity for you to customize the following features and capabilities to implement automated integration testing:

-  2-layer configuration for Docker build and Travis CI
-  Customizable Docker Compose file to support a wide range of environment sets
-  Flexible permissions
-  Easy local setup and implementation
