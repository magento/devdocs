---
group: cloud-guide
title: Docker services containers
functional_areas:
  - Cloud
  - Docker
  - Configuration
---


The following containers provide the services required to build, deploy and run {{site.data.var.ee}} sites.

{:.bs-callout-info}
See the [service version values available]({{site.baseurl}}/cloud/docker/docker-containers.html#service-containers) for use when launching Docker.

## Database container

**Container name**: db<br/>
**Docker base image**: [mariadb]<br/>
**Ports exposed**:  `3306`<br/>

The Database container is based on the [mariadb] image and includes the following volumes:

-  `magento-db: /var/lib/mysql`
-  `.docker/mysql/docker-entrypoint-initdb.d:/docker-entrypoint-initdb.d`

When a database container initializes, it creates a new database with the specified name and uses the configuration variables specified in the docker-compose configuration. The initial start-up process also executes files with `.sh`, `.sql`, and `.sql.gz` extensions that are found in the `/docker-entrypoint-initdb.d` directory. Files are executed in alphabetical order. See [mariadb Docker documentation](https://hub.docker.com/_/mariadb).

To prevent accidental data loss, the database is stored in a persistent **`magento-db`** volume after you stop and remove the Docker configuration. The next time you use the `docker-compose up` command, the Docker environment restores your database from the persistent volume. You must manually destroy the database volume using the `docker volume rm <volume_name>` command.

You can inject a MySQL configuration into the database container at creation by adding the configuration to the `docker-compose-override.yml` file. Add the custom values using an included `my.cnf` file, or add the correct variables directly to the override file as shown in the following examples.

Add a custom `my.cnf` file to the `services` section in the  `docker-compose.override.yml` file:

```yaml
  db:
    volumes:
      - path/to/custom.my.cnf:/etc/mysql/conf.d/custom.my.cnf
```

Add configuration values to the `docker-compose.override.yml` file:

```yaml
  db:
    environment:
      - innodb-buffer-pool-size=134217728
```

See [Manage the database] for details about using the database.

## Elasticsearch container

**Container name**: elasticsearch<br/>
**Docker base image**: [magento/magento-cloud-docker-elasticsearch](https://hub.docker.com/r/magento/magento-cloud-docker-elasticsearch)<br/>
**Ports exposed**: `9200`, `9300`<br/>

The Elasticsearch container for {{site.data.var.mcd-prod}} is a standard Elasticsearch container with required plugins and configurations for {{site.data.var.ee}}.

## FPM container

**Container name**: fpm<br/>
**Docker base image**: [magento/magento-cloud-docker-php][php-cloud], which is based on the [php](https://hub.docker.com/_/php) Docker image<br/>
**Ports exposed**: `9000`, `9001`<br/>

The FPM container includes the following volumes:

-  Read-only volumes:
   -  `/app`
   -  `/app/vendor`
   -  `/app/generated`
   -  `/app/setup`

-  Read/Write volumes:
   -  `/app/var`
   -  `/app/app/etc`
   -  `/app/pub/static`
   -  `/app/pub/media`

{:.bs-callout-tip}
You can add custom PHP extensions and manage their status from the `runtime` section of the `.magento.app.yaml` file. See [PHP extensions]. To test custom extensions without updating the {{site.data.var.ece}} environment configuration, you can add the custom configuration to the [`docker-compose.override.yml`][Docker override file]. Configuration settings in this file are applied only when you build and deploy to the Docker environment.

For additional information about configuring the php environment, see the [XDebug for Docker] documentation.

## RabbitMQ container

**Container name**: rabbitmq<br/>
**Docker base image**: [rabbitmq]<br/>
**Ports exposed**: `4369`, `5671`, `5672`, `25672`<br/>

The RabbitMQ container for {{site.data.var.mcd-prod}} is a standard RabbitMQ container with no configuration or changes.

## Redis container

**Container name**: redis<br/>
**Docker base image**: [redis]<br/>
**Ports exposed**: `6379`<br/>

The Redis container for {{site.data.var.mcd-prod}} is a standard container with no customization, no persistence, and no additional configuration.

Connect to and run Redis commands using the redis-cli inside the container:

```bash
docker-compose run redis redis-cli -h redis
```

## Selenium container

**Container name**: selenium<br/>
**Docker base image**: [selenium/standalone-chrome/](https://hub.docker.com/r/selenium/standalone-chrome)<br/>
**Ports exposed**: `4444`<br/>

The Selenium container, based on the [selenium/standalone-chrome/](https://hub.docker.com/r/selenium/standalone-chrome/h), enables the [Magento Functional Testing Framework (MFTF)](https://devdocs.magento.com/mftf/docs/introduction.html) for Magento application testing in the Cloud Docker environment. See [Magento application testing]({{site.baseurl}}/cloud/docker/docker-mftf.html).

## TLS container

**Container name**: tls<br/>
**Docker base image**: [magento/magento-cloud-docker-tls][tls], which is based on the [debian:jessie](https://hub.docker.com/_/debian) Docker image<br/>
**Ports exposed**: `443`</br>

The TLS termination proxy container facilitates the Varnish SSL termination over HTTPS.

To increase the timeout on this container, add the following code to the  `docker-compose.override.yml` file:

```yaml
  tls:
    environment:
      - TIMEOUT=600
```

## Varnish container

**Container name**: varnish<br/>
**Docker base image**: [magento/magento-cloud-docker-varnish][varnish], which is based on the [centos]<br/>
**Ports exposed**: `80`<br/>

The Varnish container simulates Fastly and is useful for testing VCL snippets.

You can specify `VARNISHD_PARAMS` and other environment variables using ENV to specify custom values for required parameters. This is usually done by adding the configuration to the `docker-compose.override.yml` file.

```yaml
varnish:
  environment:
    - VARNISHD_PARAMS="-p default_ttl=3600 -p default_grace=3600 -p feature=+esi_ignore_https -p feature=+esi_disable_xml_check"
```

To clear the Varnish cache:

```bash
docker-compose exec varnish varnishadm ban req.url '~' '.'
```

## Web container

**Container name**: web<br/>
**Docker base image**: [magento/magento-cloud-docker-nginx][nginx], which is based on the [centos] Docker image<br/>
**Ports exposed**: None<br/>

The Web container uses NGINX to handle web requests after TLS and Varnish. This container passes all requests to the FPM container to serve the PHP code. See [Request flow]({{site.baseurl}}/cloud/docker/docker-containers.html#request-flow).

The NGINX configuration for this container is the standard Magento [nginx config], which includes the configuration to auto-generate NGINX certificates for the container. You can customize the NGINX configuration by mounting a new configuration file using a volume.

{:.procedure}
To mount the custom NGINX configuration file using volumes:

1. On your local host, create a `./.docker/nginx/etc/` directory.

1. Copy the `nginx.conf` and `vhost.conf` [configuration files][nginx configs] to the new directory.

1. In the `vhost.conf` file, customize the values for variables like `!UPLOAD_MAX_FILESIZE!;` as needed.

1. To mount the custom NGINX configuration to the Web container, add the volume configuration to the `docker-compose.override.yml` file.

```yaml
  services:
    web:
      volumes:
        - ./.docker/nginx/etc/nginx.conf:/etc/nginx/nginx.conf
        - ./.docker/nginx/etc/vhost.conf:/etc/nginx/conf.d/default.conf
   ```

{:.procedure}
To mount the custom index.php file using volumes:

1. To mount the custom index.php file to the Web container, add the volume configuration to the `docker-compose.override.yml` file.

```yaml
  services:
    web:
      volumes:
        - ./pub/index.php:/app/pub/index.php:ro
```

[mariadb]: https://hub.docker.com/_/mariadb
[mariadb Docker documentation]: https://hub.docker.com/_/mariadb
[Manage the database]: {{site.baseurl}}/cloud/docker/docker-containers-service.html
[php-cloud]: https://hub.docker.com/r/magento/magento-cloud-docker-php
[XDebug for Docker]: {{site.baseurl}}/cloud/docker/docker-development-debug.html
[redis]: https://hub.docker.com/_/redis
[rabbitmq]: https://hub.docker.com/_/rabbitmq
[FPM]: https://php-fpm.org
[varnish]: https://hub.docker.com/r/magento/magento-cloud-docker-varnish
[tls]: https://hub.docker.com/r/magento/magento-cloud-docker-tls
[debian:jessie]: https://hub.docker.com/_/debian
[nginx]: https://hub.docker.com/r/magento/magento-cloud-docker-nginx
[centos]: https://hub.docker.com/_/centos
[nginx configs]: https://github.com/magento/magento-cloud-docker/tree/develop/images/nginx/1.9/etc
[nginx config]: https://github.com/magento-dockerhub/magento-cloud-docker/blob/master/images/nginx/1.9/etc/vhost.conf
[web config]: https://github.com/magento/docker
[varnish]: https://hub.docker.com/r/magento/magento-cloud-docker-varnish
[PHP extensions]: {{site.baseurl}}/cloud/project/project-conf-files_magento-app.html#php-extensions
[Docker override file]: https://docs.docker.com/compose/extends/
