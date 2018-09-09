---
group: cloud-guide
title: Docker development environment
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

{{site.data.var.ece}} provides a Docker environment option for those who use their local environment for development, test, or automation tasks. The {{site.data.var.ece}} Docker environment requires three, essential components: a {{site.data.var.ee}} v2 template, Docker Compose, and {{site.data.var.ece}} `{{site.data.var.ct}}` package.

## Container architecture

The [Magento Cloud Docker repository](https://github.com/magento/magento-cloud-docker) contains build information for the following Docker images:

![containers]

-  **FPM container**—[magento/magento-cloud-docker-php](https://hub.docker.com/r/magento/magento-cloud-docker-php/)  
    PHP-CLI: version 7 and later  
    PHP-FPM: version 7 and later  
-  **DB container**  
    {{site.data.var.ece}} uses MariaDB for the local database. The DB container, based on MariaDB v10, 
-  **Redis container**—[magento/magento-cloud-docker-redis](https://hub.docker.com/r/magento/magento-cloud-docker-redis/)  
    Based on the latest Redis version,
-  **Varnish container**—[magento/magento-cloud-docker-varnish](https://hub.docker.com/r/magento/magento-cloud-docker-varnish/)  
    Based on the lates Varnish version, it is used for front cache. It sends requests to web container and caches result.
-  **Web container**—[magento/magento-cloud-docker-nginx](https://hub.docker.com/r/magento/magento-cloud-docker-nginx/)  
    {{site.data.var.ece}} uses NGINX for the local web server. The web container, based on NGINX v1.9, mainly works with the [PHP-FPM](https://php-fpm.org) to serve PHP code and the DB container.

### CLI container

The Docker container architecture for the {{site.data.var.ece}} platform includes a **CLI** container, which is based on a 7.0-cli or 7.1-cli image, provides {{site.data.var.ece}} and `{{site.data.var.ct}}` commands and performs file system operations. The CLI container depends on the DB container and the Redis container.

-  `build`—extends the CLI container to perform ??
-  `cron`—extends the CLI container to include command call instructions  

    -  The `setup:cron:run` and `cron:update` commands are not available on Cloud and Docker for Cloud environment
    -  Cron only works with CLI container to run `./bin/magento cron:run` command.

-  `deploy`—extends the CLI container to use read-only file system

## Docker commands

Action | Command
:--- | :---
Build and start Docker environment | `docker-compose up -d`
Build environment | `docker-compose run build cloud-build`
Deploy environment | `docker-compose run deploy cloud-deploy`
Connect to CLI container | `docker-compose run cli bash`
Use `{{site.data.var.ct}}` command | `docker-compose run ece-command`
Use Magento command | `docker-compose run cli magento-command`
Stop and remove Docker environment | `docker-compose down -v`
{:style="table-layout:auto;"}

## Automate integration testing

Installing {{site.data.var.ece}} in a dedicated Docker environment presents an opportunity for you to customize the following features and capabilities to implement automated integration testing:

-  2-layer configuration for Docker build and Travis CI
-  Customizable Docker Compose file to support a wide range of environment sets
-  Flexible permissions
-  Easy local setup and implementation

[containers]: {{site.baseurl}}/common/images/cloud/docker-containers.png
 {: width="500px"}