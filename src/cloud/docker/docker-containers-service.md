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
See the [service version values available]({{ site.baseurl }}/cloud/docker/docker-containers.html#service-versions) for use when launching Docker.

## Database container

Container name |Docker base image | Ports exposed
-------- | -------- | ---------------
db | [mariadb](https://hub.docker.com/_/mariadb) | 3306 |

When a database container is started for the first time, a new database with the specified name is created and initialized using the configuration variables specified in the docker-compose configuration. The initial start up process also executes all files with extensions .sh, .sql and .sql.gz that are found in the `/docker-entrypoint-initdb.d` directory. Files are executed in alphabetical order. See [mariadb Docker documentation](https://hub.docker.com/_/mariadb)<br>
<br>To import a database dump into the Database container, place the SQL file into the `.docker/mysql/docker-entrypoint-initdb.d` directory.<br>

Although it is a more complex approach, you can use GZIP to import a database dump by _sharing_ the `.sql.gz` file using the `.docker/mnt` directory and importing the file inside the Docker container.

MySQL configuration can be injected into the container at creation by adding the configuration to the `docker-compose-override.yml` file. You can add the custom configuration using an included `my.cnf` file, or by adding the correct variables directly to the override file as shown in the following examples.

Add a custom `my.cnf` to the `docker-compose.override.yml` file:

```yaml
db:
  volumes:
    - path/to/custom.my.cnf:/etc/mysql/conf.d/custom.my.cnf
```

Alternatively, you can set configuration values in the environment section of the `docker-compose.override.yml` file:

```yaml
  db:
    environment:
      - innodb-buffer-pool-size=134217728
```

### Elasticsearch container

Container name |Docker base image | Ports exposed
-------- | -------- | ---------------
elasticsearch | [magento/magento-cloud-docker-elasticsearch](https://hub.docker.com/r/magento/magento-cloud-docker-elasticsearch) | [elasticsearch](https://hub.docker.com/_/elasticsearch) | 9200, 9300

The Elasticsearch container for {{site.data.var.mcd}} is a standard Elasticsearch container with required plugins and configurations for {{site.data.var.ee}}.

### FPM container

Container name |Docker base image | Ports exposed
-------- | -------- | ---------------
fpm | [magento/magento-cloud-docker-php](https://hub.docker.com/r/magento/magento-cloud-docker-php), which is based on the [php](https://hub.docker.com/_/php) Docker image | 9000, 9001

You can load custom extensions in the FPM configuration by adding the configuration to the `docker-compose.override.yml` file. This configuration is applied when you build and deploy.

```bash
  generic:
    environment:
     - 'PHP_EXTENSIONS=bcmath bz2 calendar exif gd gettext intl mysqli pcntl pdo_mysql soap sockets sysvmsg sysvsem sysvshm opcache zip redis xsl xdebug'
```

For additional information about configuring the php environment, see the [XDebug for Docker]({{site.baseurl}}/cloud/docker/docker-development-debug.html) documentation.

### Rabbitmq container

Container name |Docker base image | Ports exposed
-------- | -------- | ---------------
rabbitmq | [rabbitmq](https://hub.docker.com/_/rabbitmq) | 4369, 5671, 5672, 25672

The RabbitMQ container for {{site.data.var.mcd}} is a standard RabbitMQ container with no configuration or changes.

### Redis container

Container name |Docker base image | Ports exposed
-------- | -------- | ---------------
redis | [redis](https://hub.docker.com/_/redis) | 6379

The RabbitMQ container for {{site.data.var.mcd}} is a standard Redis container with no customization, no persistence, and no additional configuration.

Connect to and run redis commands using the redis-cli inside the container:

```bash
docker-compose run redis redis-cli -h redis
```

## Selenium container

Container name |Docker base image | Ports exposed
-------- | -------- | ---------------
selenium |[selenium/standalone-chrome/](https://hub.docker.com/r/selenium/standalone-chrome/h) | 4444

The Selenium container, based on the [selenium/standalone-chrome/](https://hub.docker.com/r/selenium/standalone-chrome/h), enables the [Magento Functional Testing Framework (MFTF)](https://devdocs.magento.com/mftf/docs/introduction.html) for Magento application testing in the {{site.data.var.mcd}} environment. See [Magento application testing]({{site.baseurl}}/cloud/docker-mftf.html).

## TLS container

Container name |Docker base image | Ports exposed
-------- | -------- | ---------------
tls | [magento/magento-cloud-docker-tls](https://hub.docker.com/r/magento/magento-cloud-docker-tls), which is based on the [debian:jessie](https://hub.docker.com/_/debian) Docker image | 443

The TLS termination proxy container, based on the  [magento/magento-cloud-docker-tls](https://hub.docker.com/r/magento/magento-cloud-docker-tls) image, facilitates the Varnish SSL termination over HTTPS.

To increase the timeout on this container, add the following code to the  `docker-compose.override.yml` file:

```yaml
  tls:
    environment:
      - TIMEOUT=600
```

## Varnish container

Container name |Docker base image | Ports exposed
-------- | -------- | ---------------
varnish | [magento/magento-cloud-docker-varnish](https://hub.docker.com/r/magento/magento-cloud-docker-varnish), which is based on the [centos](https://hub.docker.com/_/centos) Docker image | 80

The Varnish container is based on the [magento/magento-cloud-docker-varnish](https://hub.docker.com/r/magento/magento-cloud-docker-varnish) image. Varnish works on port 80.

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
web | [magento/magento-cloud-docker-nginx](https://hub.docker.com/r/magento/magento-cloud-docker-nginx), which is based on the [centos](https://hub.docker.com/_/centos) Docker image | none

The Web container uses nginx to handle web requests after TLS and Varnish. This container passes all requests to the FPM container.

The nginx configuration for this container is the standard Magento [nginx config](https://github.com/magento-dockerhub/magento-cloud-docker/blob/master/images/nginx/1.9/etc/vhost.conf). This can be changed by mounting a new config using a volume.

```yaml
  web:
    volumes:
      - path/to/custom.nginx.conf:/etc/nginx/conf.d/default.conf
```
