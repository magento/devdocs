---
group: cloud-guide
title: Docker container architecture
functional_areas:
  - Cloud
  - Docker
  - Configuration
---

{{site.data.var.ece}} provides a Docker environment option for those who use their local environment for development, test, or automation tasks. The {{site.data.var.ece}} Docker environment requires three, essential components: a {{site.data.var.ee}} v2 template, Docker Compose, and the {{site.data.var.ece}} `{{site.data.var.ct}}` package. See the instructions in [Launch Docker]({{page.baseurl}}/cloud/docker/docker-config.html).

The [Magento Cloud Docker repository](https://github.com/magento/magento-cloud-docker) contains build information for the following Docker containers.

## Database container

The database container is based on the [mariadb](https://hub.docker.com/_/mariadb) image.

-  Port: 3306
-  Volumes:
    - `/var/lib/mysql`
    - `./docker/mysql`

#### To import a database dump:

Place the SQL file into the `.docker/mysql/docker-entrypoint-initdb.d` folder.

The `{{site.data.var.ct}}` package imports and processes the SQL file the next time you build and start the Docker environment using the `docker-compose up` command.

Although it is a more complex approach, you can use GZIP by _sharing_ the `.sql.gz` file using the `.docker/mnt` directory and importing it inside the Docker container.

## CLI containers

The following CLI containers, which are based on a [PHP-CLI version 7 image](https://hub.docker.com/r/magento/magento-cloud-docker-php), provide `magento-cloud` and `{{site.data.var.ct}}` commands to perform file system operations:

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

### Cron container

The Cron container is based on PHP-CLI images, and executes operations in the background immediately after the Docker environment start. It uses the cron configuration defined in the [`crons` property of the `.magento.app.yaml` file]({{page.baseurl}}/cloud/project/project-conf-files_magento-app.html#crons).

#### To view the cron log:

```bash
docker-compose run deploy bash -c "cat /app/var/cron.log"
```

### Node container

The Node container is based on the [official Node Docker image](https://hub.docker.com/_/node/). It can be used to install NPM dependencies, such as Gulp, or run any Node-based command line tools.

## PHP-FPM container

The PHP-FPM container is based on the [magento/magento-cloud-docker-php](https://hub.docker.com/r/magento/magento-cloud-docker-php) image.

-  Port: 9000
-  Read-only volumes:
    - `/app`
    - `/app/vendor`
    - `/app/generated`
    - `/app/setup`
-  Read/Write volumes:
    - `/app/var`
    - `/app/app/etc`
    - `/app/pub/static`
    - `/app/pub/media`

### Web container

The web container works with the [PHP-FPM](https://php-fpm.org) to serve PHP code, the [**DB** image](#database-container) for the local database, and the **Varnish** image to send requests and cache the results.

### Varnish container

The Varnish container is based on the [magento/magento-cloud-docker-varnish](https://hub.docker.com/r/magento/magento-cloud-docker-varnish) image. Varnish works on port 80.

### TLS container

The TLS termination proxy container, based on the  [magento/magento-cloud-docker-tls](https://hub.docker.com/r/magento/magento-cloud-docker-tls) image, facilitates the Varnish SSL termination over HTTPS.

## Service containers

Service | Image
------- | -----
**ElasticSearch** | [magento/magento-cloud-docker-elasticsearch](https://hub.docker.com/r/magento/magento-cloud-docker-elasticsearch)
**NGINX**         | [magento/magento-cloud-docker-nginx](https://hub.docker.com/r/magento/magento-cloud-docker-nginx)
**RabbitMQ**      | [rabbitmq](https://hub.docker.com/_/rabbitmq)
**Redis**         | [magento/magento-cloud-docker-redis](https://hub.docker.com/r/magento/magento-cloud-docker-redis)

{:.bs-callout .bs-callout-info}
See the [service version values available]({{page.baseurl}}/cloud/docker/docker-config.html) for use when launching Docker.

## Sharing data between host machine and container

You can share files easily between your machine and a Docker container by placing the files in the `.docker/mnt` directory. You can find the files in the `/mnt` directory the next time you build and start the Docker environment using the `docker-compose up` command.

## Sendmail service

You can send emails from your Docker environment when you enable `sendmail` in the `docker-compose.yml` configuration file:

```yaml
ENABLE_SENDMAIL=true
```
