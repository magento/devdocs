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
See the [service version values available]({{site.baseurl}}/cloud/docker/docker-containers.html#service-versions) for use when launching Docker.

## Database container

Container name |Docker base image | Ports exposed
-------- | -------- | ---------------
db | [mariadb](https://hub.docker.com/_/mariadb) | 3306 |

The Database container is based on the [mariadb][db-image] image and includes the following volumes:

-  `magento-db: /var/lib/mysql`
-  `.docker/mysql/docker-entrypoint-initdb.d:/docker-entrypoint-initdb.d`

When a database container initializes, it creates a new database with the specified name and uses the configuration variables specified in the docker-compose configuration. The initial start-up process also executes files with `.sh`, `.sql` and `.sql.gz` extensions that are found in the `/docker-entrypoint-initdb.d` directory. Files are executed in alphabetical order. See [mariadb Docker documentation](https://hub.docker.com/_/mariadb).

To prevent accidental data loss, the database is stored in a persistent **`magento-db`** volume after you stop and remove the Docker configuration. The next time you use the `docker-compose up` command, the Docker environment restores your database from the persistent volume. You must manually destroy the database volume using the `docker volume rm <volume_name>` command.

You can inject a MySQL configuration into the database container at creation by adding the configuration to the `docker-compose-override.yml` file. Add the custom values using an included `my.cnf` file, or add the correct variables directly to the override file as shown in the following examples.

*Add a custom `my.cnf` file to the `docker-compose.override.yml` file:*

```yaml
db:
  volumes:
    - path/to/custom.my.cnf:/etc/mysql/conf.d/custom.my.cnf
```

*Add configuration values to the `docker-compose.override.yml` file:*

```yaml
  db:
    environment:
      - innodb-buffer-pool-size=134217728
```

See [Manage the database] for details about using the database.

## Elasticsearch container

Container name |Docker base image | Ports exposed
-------- | -------- | ---------------
elasticsearch | [magento/magento-cloud-docker-elasticsearch](https://hub.docker.com/r/magento/magento-cloud-docker-elasticsearch) | [elasticsearch](https://hub.docker.com/_/elasticsearch) | 9200, 9300

The Elasticsearch container for {{site.data.var.mcd}} is a standard Elasticsearch container with required plugins and configurations for {{site.data.var.ee}}.

## FPM container

Container name |Docker base image | Ports exposed
-------- | -------- | ---------------
fpm | [magento/magento-cloud-docker-php][php-cloud], which is based on the [php](https://hub.docker.com/_/php) Docker image | 9000, 9001

The FPM container is based on the [magento/magento-cloud-docker-php][php] image and includes the following volumes:

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

You can load custom extensions in the FPM configuration by adding the configuration to the `docker-compose.override.yml` file. This configuration is applied when you build and deploy.

```bash
  generic:
    environment:
     - 'PHP_EXTENSIONS=bcmath bz2 calendar exif gd gettext intl mysqli pcntl pdo_mysql soap sockets sysvmsg sysvsem sysvshm opcache zip redis xsl xdebug'
```

For additional information about configuring the php environment, see the [XDebug for Docker documentation.

## RabbitMQ container

Container name | Docker base image | Ports exposed
-------- | -------- | ---------------
rabbitmq | [rabbitmq] | 4369, 5671, 5672, 25672

The RabbitMQ container for {{site.data.var.mcd}} is a standard RabbitMQ container with no configuration or changes.

## Redis container

Container name | Docker base image | Ports exposed
-------- | -------- | ---------------
redis | [redis] | 6379

The Redis container for {{site.data.var.mcd}} is a standard container with no customization, no persistence, and no additional configuration.

Connect to and run redis commands using the redis-cli inside the container:

```bash
docker-compose run redis redis-cli -h redis
```

## Selenium container

Container name |Docker base image | Ports exposed
-------- | -------- | ---------------
selenium | [selenium/standalone-chrome/](https://hub.docker.com/r/selenium/standalone-chrome) | 4444

The Selenium container, based on the [selenium/standalone-chrome/](https://hub.docker.com/r/selenium/standalone-chrome/h), enables the [Magento Functional Testing Framework (MFTF)](https://devdocs.magento.com/mftf/docs/introduction.html) for Magento application testing in the Cloud Docker environment. See [Magento application testing]({{site.baseurl}}/cloud/docker/docker-mftf.html).

## TLS container

Container name |Docker base image | Ports exposed
-------- | -------- | ---------------
tls | [magento/magento-cloud-docker-tls][tls], which is based on the [debian:jessie](https://hub.docker.com/_/debian) Docker image | 443

The TLS termination proxy container, based on the  [magento/magento-cloud-docker-tls][tls] image, facilitates the Varnish SSL termination over HTTPS.

To increase the timeout on this container, add the following code to the  `docker-compose.override.yml` file:

```yaml
  tls:
    environment:
      - TIMEOUT=600
```

## Varnish container

Container name |Docker base image | Ports exposed
-------- | -------- | ---------------
varnish | [magento/magento-cloud-docker-varnish][varnish], which is based on the [centos] Docker image | 80

The Varnish container, based on the [magento/magento-cloud-docker-varnish][varnish] image, simulates Fastly and is useful for testing VCL snippets. Varnish works on port 80.

You can specify `VARNISHD_PARAMS` and other environment variables using ENV, changing required parameters. This is usually done by adding the configuration to the `docker-compose.override.yml` file.

```yaml
varnish:
  environment:
    - VARNISHD_PARAMS="-p default_ttl=3600 -p default_grace=3600 -p feature=+esi_ignore_https -p feature=+esi_disable_xml_check"
```

Use the following command to clear the Varnish cache:

```bash
docker-compose exec varnish varnishadm ban req.url '~' '.'
```

## Web container

Container name |Docker base image | Ports exposed
-------- | -------- | ---------------
web | [magento/magento-cloud-docker-nginx][nginx], which is based on the [centos] Docker image | none

The Web container uses nginx to handle web requests after TLS and Varnish. This container passes all requests to the FPM container to serve the PHP code. See [Request flow]({{site.baseurl}}/cloud/docker/docker-containers.html#request-flow).

The nginx configuration for this container is the standard Magento [nginx config]. This can be changed by mounting a new config using a volume.

```yaml
  web:
    volumes:
      - path/to/custom.nginx.conf:/etc/nginx/conf.d/default.conf
```

[mariadb]: https://hub.docker.com/_/mariadb
[mariadb Docker documentation]: https://hub.docker.com/_/mariadb
[Manage the database]: {{site.baseurl}}/cloud/docker/docker-containers-service.html
[php-cloud]: https://hub.docker.com/r/magento/magento-cloud-docker-php
[XDebug for Docker]: {{site.baseurl}}/cloud/docker/docker-development-debug.html
[redis]: https://hub.docker.com/_/redis
[rabbitmq]: https://hub.docker.com/_/rabbitmq
[PHP-FPM]: https://php-fpm.org
[varnish]: https://hub.docker.com/r/magento/magento-cloud-docker-varnish
[tls]: https://hub.docker.com/r/magento/magento-cloud-docker-tls
[debian:jessie]: https://hub.docker.com/_/debian
[nginx]: https://hub.docker.com/r/magento/magento-cloud-docker-nginx
[centos]: https://hub.docker.com/_/centos
[nginx config]: https://github.com/magento-dockerhub/magento-cloud-docker/blob/master/images/nginx/1.9/etc/vhost.conf
[varnish]: https://hub.docker.com/r/magento/magento-cloud-docker-varnish
