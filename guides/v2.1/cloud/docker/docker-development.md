---
group: cloud-guide
title: Docker container architecture
functional_areas:
  - Cloud
  - Docker
  - Configuration
---

{{site.data.var.ece}} provides a Docker environment option for those who use their local environment for development, test, or automation tasks. The {{site.data.var.ece}} Docker environment requires three, essential components: a {{site.data.var.ee}} v2 template, Docker Compose, and the {{site.data.var.ece}} `{{site.data.var.ct}}` package.

The [Magento Cloud Docker repository](https://github.com/magento/magento-cloud-docker) contains build information for the following Docker images:

Image               | Docker link
:------------------ | :-------------------------------------------
**DB**              | [mariadb:10.0](https://hub.docker.com/_/mariadb)
**FPM**<br>PHP-CLI: version 7<br>PHP-FPM: version 7 | [magento/magento-cloud-docker-php](https://hub.docker.com/r/magento/magento-cloud-docker-php)
**ElasticSearch**   | [magento/magento-cloud-docker-elasticsearch](https://hub.docker.com/r/magento/magento-cloud-docker-elasticsearch)
**NGINX**           |[magento/magento-cloud-docker-nginx](https://hub.docker.com/r/magento/magento-cloud-docker-nginx)
**Node**            | [official Node Docker image](https://hub.docker.com/_/node/)
**RabbitMQ**        | [rabbitmq](https://hub.docker.com/_/rabbitmq)
**Redis**           | [magento/magento-cloud-docker-redis](https://hub.docker.com/r/magento/magento-cloud-docker-redis)
**TLS**             | [magento/magento-cloud-docker-tls](https://hub.docker.com/r/magento/magento-cloud-docker-tls)
**Varnish**         | [magento/magento-cloud-docker-varnish](https://hub.docker.com/r/magento/magento-cloud-docker-varnish)

{:.bs-callout .bs-callout-info}
See the [service version values available]({{page.baseurl}}/cloud/docker/docker-config.html) for use when launching Docker.

## Web container

The web container works with the [PHP-FPM](https://php-fpm.org) to serve PHP code, the **DB** image for the local database, and the **Varnish** image to send requests and cache the results.

## CLI containers

The following CLI containers, which are based on a PHP-CLI image, provide `magento-cloud` and `{{site.data.var.ct}}` commands to perform file system operations:

-  `build`—extends the CLI container to perform operations with writable filesystem, similar to the build phase
-  `deploy`—extends the CLI container to use read-only file system, similar to the deploy phase
-  `cron`—extends the CLI container to run cron

    -  The `setup:cron:run` and `cron:update` commands are not available on Cloud and Docker for Cloud environment
    -  Cron only works with the CLI container to run the `./bin/magento cron:run` command

#### To run the `{{site.data.var.ct}}` ideal-state command:

```bash
docker-compose run deploy ece-command wizard:ideal-state
```

Sample response:

```terminal
...
 - Your application does not have the "post_deploy" hook enabled.
The configured state is not ideal
```
{: .no-copy}

## Cron container

The Cron container is based on PHP-CLI images, and executes operations in the background immediately after the Docker environment start. It uses the cron configuration defined in the [`crons` property of the `.magento.app.yaml` file]({{page.baseurl}}/cloud/project/project-conf-files_magento-app.html#crons).

#### To view the cron log:

```bash
docker-compose run deploy bash -c "cat /app/var/cron.log"
```

## Node Container

The Node container is based on the [official Node Docker image](https://hub.docker.com/_/node/). It can be used to install NPM dependencies or run any Node-based command line tools.

## Database container

The database container is based on the `mariadb:10` image.

#### To import a database dump:

Place the SQL file into the `docker/mysql/docker-entrypoint-initdb.d` folder.

The `{{site.data.var.ct}}` package imports and processes the SQL file the next time you build and start the Docker environment using the `docker-compose up` command.

Although it is a more complex approach, you can use GZIP by _sharing_ the `.sql.gz` file using the `docker/mnt` directory and importing it inside the Docker container.

## Varnish container

The Varnish container is based on the `magento-cloud-docker-varnish` image. Varnish works on port 80.

The TLS termination proxy container, based on the  [magento/magento-cloud-docker-tls](https://hub.docker.com/r/magento/magento-cloud-docker-tls) image, facilitates the Varnish SSL termination over HTTPS.

## Sharing data between host machine and container

You can share files easily between your machine and a Docker container by placing the files in the `docker/mnt` directory. You can find the files in the `/mnt` directory the next time you build and start the Docker environment using the `docker-compose up` command.

## Sendmail service

You can send emails from your Docker environment when you enable `sendmail` in the `docker-compose.yml` configuration file:

```yaml
ENABLE_SENDMAIL=true
```
