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

### Database Container

#### Container Information

-  Name: db
-  Docker Base Image: [mariadb](https://hub.docker.com/_/mariadb)
-  Ports Exposed 3306

#### Container Usage

To import a database dump, place the SQL file into the `.docker/mysql/docker-entrypoint-initdb.d` directory.

When a database container is started for the first time, a new database with the specified name is created and initialized using the configuration variables specified in the docker-compose configuration. The initial start up process also executes all files with extensions .sh, .sql and .sql.gz that are found in the `/docker-entrypoint-initdb.d` directory. Files are executed in alphabetical order.

From: [mariadb docker documentation](https://hub.docker.com/_/mariadb)

Although it is a more complex approach, you can use GZIP by _sharing_ the `.sql.gz` file using the `.docker/mnt` directory and importing it inside the Docker container.

MySQL configuration can be injected into the container at creation. The following two examples show how this is done, either using an included `my.cnf` file, or setting the variables correctly.

Add a custom `my.cnf` via the `docker-compose.override.yml` file:
```yaml
  db:
    volumes:
      - path/to/custom.my.cnf:/etc/mysql/conf.d/custom.my.cnf
```

Alternatively, you can set configuration values in the environment section of the` docker-compose.override.yml` file:
```yaml
  db:
    environment:
      - innodb-buffer-pool-size=134217728
```

### Elasticsearch Container

#### Container Information

-  Name: elasticsearch
-  Docker Base Image: [magento/magento-cloud-docker-elasticsearch](https://hub.docker.com/r/magento/magento-cloud-docker-elasticsearch)
-  Docker Image Based On: [elasticsearch](https://hub.docker.com/_/elasticsearch)
-  Ports Exposed: 9200,9300

#### Container Usage

Standard Elasticsearch container with required plugins and configurations for {{site.data.var.ee}}.

### FPM Container

#### Container Information

-  Name: fpm
-  Docker Base Image: [magento/magento-cloud-docker-php](https://hub.docker.com/r/magento/magento-cloud-docker-php)
-  Docker Image Based On: [php](https://hub.docker.com/_/php)
-  Ports Exposed: 9000,9001

#### Container Usage

You can  load custom extensions in the FPM configuration by adding the configuration to the `docker-compose.override.yml` file. This configuration is applied when you build and deploy.
```bash
  generic:
    environment:
     - 'PHP_EXTENSIONS=bcmath bz2 calendar exif gd gettext intl mysqli pcntl pdo_mysql soap sockets sysvmsg sysvsem sysvshm opcache zip redis xsl xdebug'
```

For additional information about configuring the php environment, see the [XDebug for Docker]({{site.baseurl}}/cloud/docker/docker-development-debug.html) documentation.

### Rabbitmq Container

#### Container Information

-  Name: rabbitmq
-  Docker Base Image: [rabbitmq](https://hub.docker.com/_/rabbitmq)
-  Ports Exposed: 4369,5671,5672,25672

#### Container Usage

Standard RabbitMQ Container, with no configuration or changes from Magento Cloud Docker.

### Redis Container

#### Container Information

-  Name: redis
-  Docker Base Image: [redis](https://hub.docker.com/_/redis)
-  Ports Exposed: 6379

#### Container Usage
A standard Redis container with no customizations, no persistence or configuration is used.

Connect to and run redis commands via the redis-cli inside the container:
```bash
docker-compose run redis redis-cli -h redis
```

### TLS Container

#### Container Information

-  Name: tls
-  Docker Base Image: [magento/magento-cloud-docker-tls](https://hub.docker.com/r/magento/magento-cloud-docker-tls)
-  Docker Image Based On: [debian:jessie](https://hub.docker.com/_/debian)
-  Ports Exposed: 443

#### Container Usage

The TLS termination proxy container, based on the  [magento/magento-cloud-docker-tls](https://hub.docker.com/r/magento/magento-cloud-docker-tls) image, facilitates the Varnish SSL termination over HTTPS.

To increase the timeout on this container use the following in docker-compose.override.yml:
```yaml
  tls:
    environment:
      - TIMEOUT=600
```

### Varnish Container

#### Container Information

-  Name: varnish
-  Docker Base Image: [magento/magento-cloud-docker-varnish](https://hub.docker.com/r/magento/magento-cloud-docker-varnish)
-  Docker Image Based On: [centos](https://hub.docker.com/_/centos)
-  Ports Exposed: 80

#### Container Usage
The Varnish container is based on the [magento/magento-cloud-docker-varnish](https://hub.docker.com/r/magento/magento-cloud-docker-varnish) image. Varnish works on port 80.

`VARNISHD_PARAMS` and other environment variables can be specified using ENV, changing required parameters. This is typically done in the docker-compose.override.yml.

```yaml
  varnish:
    environment:
      - VARNISHD_PARAMS="-p default_ttl=3600 -p default_grace=3600 -p feature=+esi_ignore_https -p feature=+esi_disable_xml_check"
```

You can clear/invalidate the Varnish cache using the following command

```bash
docker-compose exec varnish varnishadm ban req.url '~' '.'
```

### Web Container

#### Container Information

-  Name: web
-  Docker Base Image: [magento/magento-cloud-docker-nginx](https://hub.docker.com/r/magento/magento-cloud-docker-nginx)
-  Docker Image Based On: [centos](https://hub.docker.com/_/centos)
-  Ports Exposed: none

#### Container Usage
The Web container uses nginx to handle web requests after TLS and Varnish. It passes all requests to the fpm container.

The nginx config for this container is the standard Magento [nginx config](https://github.com/magento-dockerhub/magento-cloud-docker/blob/master/images/nginx/1.9/etc/vhost.conf). This can be changed by mounting a new config using a volume.

```yaml
  web:
    volumes:
      - path/to/custom.nginx.conf:/etc/nginx/conf.d/default.conf
```
