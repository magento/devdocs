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

-  **DB**  
    Database based on MariaDB version 10
-  **FPM**—[magento/magento-cloud-docker-php](https://hub.docker.com/r/magento/magento-cloud-docker-php)  
    PHP-CLI: version 7 and later  
    PHP-FPM: version 7 and later  
-  **NGINX**—[magento/magento-cloud-docker-nginx](https://hub.docker.com/r/magento/magento-cloud-docker-nginx)  
    Web server based on NGINX version 1.9
-  **Redis**—[magento/magento-cloud-docker-redis](https://hub.docker.com/r/magento/magento-cloud-docker-redis)  
    Based on version 3.2 and later
-  **Varnish**—[magento/magento-cloud-docker-varnish](https://hub.docker.com/r/magento/magento-cloud-docker-varnish)  
    Based on the latest Varnish version and used for caching
-  **RabbitMQ**—[rabbitmq](https://hub.docker.com/_/rabbitmq)  
    Based on version 3.5 and later
-  **ElasticSearch**—[magento/magento-cloud-docker-elasticsearch](https://hub.docker.com/r/magento/magento-cloud-docker-elasticsearch)  
    Based on version 1.7 and later
    
See the [service version values available]({{page.baseurl}}/cloud/docker/docker-config.html) for use when launching Docker.

### Web container

The web container works with the [PHP-FPM](https://php-fpm.org) to serve PHP code, the **DB** image for the local database, and the **Varnish** image to send requests and cache the results.

### CLI containers

There are few CLI containers based on a PHP-CLI image that provides `magento-cloud` and `{{site.data.var.ct}}` commands to perform file system operations.

-  `build`—extends the CLI container to perform operations with writable filesystem, similar to the build phase
-  `deploy`—extends the CLI container to use read-only file system, similar to the deploy phase
-  `cron`—extends the CLI container to run cron

    -  The `setup:cron:run` and `cron:update` commands are not available on Cloud and Docker for Cloud environment
    -  Cron only works with CLI container to run `./bin/magento cron:run` command

As an example, to run the `{{site.data.var.ct}}` ideal-state command:

```bash
docker-compose run deploy ece-command wizard:ideal-state
...
 - Your application does not have the "post_deploy" hook enabled.
The configured state is not ideal
```

### Cron container

The Cron container is based on PHP-CLI images, and executes operations in the background immediately after the Docker environment start.

#### View cron log

```bash
docker-compose run deploy bash -c "cat /var/www/magento/var/log/magento.cron.log"
```

### Database container

The database container is based on the `mariadb:10` image.

#### Importing a database dump

To import a database dump, place the SQL file into the `docker/mysql/docker-entrypoint-initdb.d` folder. The `{{site.data.var.ct}}` package imports and processes the SQL file the next time you build and start the Docker environment using the `docker-compose up` command.

Although it is a more complex approach, you can use GZIP by _sharing_ the `.sql.gz` file using the `docker/mnt` directory and importing it inside the Docker container.

## Sharing data between host machine and container

You can share files easily between your machine and a Docker container by placing the files in the `docker/mnt` directory. You can find the files in the `/mnt` directory the next time you build and start the Docker environment using the `docker-compose up` command. 

## Sendmail service

You can send emails from your Docker environment when you enable `sendmail` in the `docker/global.php` configuration file:

```terminal
ENABLE_SENDMAIL=true
```

After you update a configuration file, you must convert the file to a Docker ENV file to include your updates the next time you launch your Docker environment:

```bash
./vendor/bin/ece-tools docker:config:convert
```
