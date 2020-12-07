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
See [Service configuration options]({{site.baseurl}}/cloud/docker/docker-containers.html#service-containers) to customize container configuration when you build the Docker compose configuration file.

## Database container

**Container name**: db<br/>
**Docker base image**: [mariadb], MySQL<br/>
**Ports exposed**:  `3306`<br/>

You can configure the database container to use either MariaDB or MySQL for the database. The default configuration uses the [mariadb] image and includes the following volumes:

-  `magento-db: /var/lib/mysql`
-  `.docker/mysql/docker-entrypoint-initdb.d:/docker-entrypoint-initdb.d`

To use MySQL for the database, add the `--db image` option when you generate the Docker Compose configuration file. See [Service configuration options][].

When a database container initializes, it creates a new database with the specified name and uses the configuration variables specified in the docker-compose configuration. The initial start-up process also executes files with `.sh`, `.sql`, and `.sql.gz` extensions that are found in the `/docker-entrypoint-initdb.d` directory. Files are executed in alphabetical order. See [mariadb Docker documentation](https://hub.docker.com/_/mariadb).

To prevent accidental data loss, the database is stored in a persistent **`magento-db`** volume after you stop and remove the Docker configuration. The next time you use the `docker-compose up` command, the Docker environment restores your database from the persistent volume. You must manually destroy the database volume using the `docker volume rm <volume_name>` command.

You can inject a MySQL configuration into the database container at creation by adding the configuration to the `docker-compose-override.yml` file using any of the following methods:

-  Use a mount to add a custom `my.cnf` file to the `services` section in the  `docker-compose.override.yml` file:

   ```yaml
     db:
       volumes:
         - path/to/custom.my.cnf:/etc/mysql/conf.d/custom.my.cnf
   ```

-  Add a custom `custom.cnf` file to the `.docker/mysql/mariadb.conf.d` directory:

   ```bash
   cp custom.cnf .docker/mysql/mariadb.conf.d
   ```

-  Add configuration values directly to the `docker-compose.override.yml` file:

   ```yaml
   services:
     db:
       environment:
         - innodb-buffer-pool-size=134217728
   ```

See [Manage the database][] for details about using the database.

## Elasticsearch container

**Container name**: elasticsearch<br/>
**Docker base image**: [magento/magento-cloud-docker-elasticsearch](https://hub.docker.com/r/magento/magento-cloud-docker-elasticsearch)<br/>
**Ports exposed**: `9200`, `9300`<br/>

The Elasticsearch container for {{site.data.var.mcd-prod}} is a standard Elasticsearch container with required plugins and configurations for {{site.data.var.ee}}.

Use the `--es-env-var` option to customize the Elasticsearch container when you generate the Docker Compose configuration file. You can set Elasticsearch options and specify the environment variables to apply when the container starts, such as the heap size for JVM.

```bash
php vendor/bin/ece-docker build:compose --es-env-var=ES_JAVA_OPTS="-Xms512m -Xmx512m" --es-env-var=node.store.allow_mmapfs=false
```

See [Important Elasticsearch configuration] in the Elasticsearch documentation for details about available configuration options.

{:.bs-callout-info}
If your Cloud project uses Magento version 2.3.5 or earlier with MySQL search, add the `--no-es` option to skip the Elasticsearch container configuration when you generate the Docker Compose configuration file: `ece-docker build:compose --no-es`.

### Elasticsearch plugins

The `analysis-icu` and `analysis-phonetic` plugins are installed by default and can not be skipped.
If you use Elasticsearch 6.5 and later, the default Elasticsearch plugins are installed automatically along with any custom plugins added to the `services.yaml`file. When you generate the `docker-compose.yaml` file, you can add additional custom plugins to the Docker environment using the `ES_PLUGINS` environment configuration option.

The following example adds the `analysis-stempel` and `analysis-nori` plugins to the Docker environment.

```yaml
services:
    elasticsearch:
        environment:
          - 'ES_PLUGINS=analysis-stempel analysis-nori'
```

### Troubleshooting

On some Linux systems, when you launch the Docker environment, the Elasticsearch service fails to start and the following error displays:

```terminal
ERROR: [1] bootstrap checks failed
[1]: max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]
```

To fix the error, run the following `sysctl` command to increase the memory map area allocation.

```bash
sysctl -w vm.max_map_count=262144
```

{:.procedure}
To permanently update the system setting for `vm.max_map_count`:

1. Edit the sysctl configuration file (`etc/sysctl.conf`) and set the required value for the `vm.max_map_count` option.

1. Reboot your system.

1. Run the following command to verify the change.

   ```bash
   sysctl vm.max_map_count
   ```

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

### Customize PHP settings

You can customize PHP service settings for PHP-FPM and CLI containers by adding a `php.ini` file to the root directory of your Magento project.

The Cloud Docker deploy process copies the `php.ini` file to the Docker environment after applying the default Docker and Magento extension configurations and applies the settings to the FPM and CLI containers.

{:.bs-callout-warning}
If you use the `docker-sync` or `mutagen` file synchronization options, the `php.ini` file is available only after the file synchronization completes.

### Customize PHP extensions

You can add custom PHP extensions and manage their status from the `runtime` section of the `.magento.app.yaml` file. See [PHP extensions]. To test custom extensions without updating the {{site.data.var.ece}} environment configuration, you can add the custom configuration to the [`docker-compose.override.yml`][Docker override file]. Configuration settings in this file are applied only when you build and deploy to the Docker environment.

Optionally, you can add Xdebug to your Cloud Docker environment to debug your PHP code. See [Configure XDebug for Docker].

## MailHog container

**Container name**: mailhog<br/>
**Docker base image**: [mailhog]<br/>
**Ports**: SMTP:`1025`, HTTP:`8025`

The default Magento Cloud Docker configuration includes the MailHog service as a replacement for the Sendmail service. Sendmail can cause performance issues in the local Docker environment.

By default, MailHog listens on port 1025 for SMTP and port 8025 for the frontend dashboard and API (HTTP). You can change the default ports using the `--mailhog-http-port` and `--mailhog-smtp-port` options. When you build the Docker compose configuration, you can change the default ports:

```bash
./vendor/bin/ece-docker build:compose --mailhog-smtp-port=1026 --mailhog-http-port=8026
```

After updating the configuration and restarting the Docker environment, you can connect to the MailHog service from `http://magento2.docker:8026`, and use port 1026 for SMTP communication.

If needed, you can disable the MailHog service when you generate the Docker compose configuration:

```bash
./vendor/bin/ece-docker build:compose --no-mailhog
```

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
docker-compose run --rm redis redis-cli -h redis
```

## Selenium container

**Container name**: selenium<br/>
**Docker base image**: [selenium/standalone-chrome/](https://hub.docker.com/r/selenium/standalone-chrome), based on the [selenium/standalone-chrome/](https://hub.docker.com/r/selenium/standalone-chrome/h) Docker image<br/>
**Ports exposed**: `4444`<br/>

The Selenium container enables the [Magento Functional Testing Framework (MFTF)](https://devdocs.magento.com/mftf/docs/introduction.html) for Magento application testing in the Cloud Docker environment. See [Magento application testing]({{site.baseurl}}/cloud/docker/docker-test-app-mftf.html).

## Test container

**Container name**: test<br/>
**Docker base image**: [magento/magento-cloud-docker-php][php-cloud], based on the [magento/magento-cloud-docker-php][php-cloud] Docker image<br/>
**Ports exposed**: None<br/>

The Test container, based on the [magento/magento-cloud-docker-php][php-cloud] Docker image, has a writable file system and is used for Magento application testing in the Cloud Docker environment. See [Magento application testing]({{site.baseurl}}/cloud/docker/docker-test-app-mftf.html).

## TLS container

**Container name**: tls<br/>
**Docker base image**: [magento/magento-cloud-docker-nginx:1.19-1.2.0][tls]<br>
**Ports**: `443` (default), `8080:80` (Varnish bypass)<br/>

The TLS termination proxy container facilitates the Varnish SSL termination over HTTPS.

-  The default port for TLS communication is `443`.
-  If you have Varnish installed in the Docker environment, use port `8080:80` to bypass caching.
-  You can change the default port when you generate the Docker configuration file:

   ```bash
   ./vendor/bin/ece-docker build:compose --tls-port <port-number>
   ```

To increase the timeout on this container, add the following code to the  `docker-compose.override.yml` file:

```yaml
  tls:
    environment:
      - TIMEOUT=600
```

## Varnish container

**Container name**: varnish<br/>
**Docker base image**: [magento/magento-cloud-docker-varnish][varnish], based on the [centos] Docker image<br>

The Varnish container simulates Fastly and is useful for testing VCL snippets.

The **Varnish** service is installed by default. When deployment completes, Magento is configured to use Varnish for full page caching (FPC) for Magento version 2.2.0 or later. The configuration process preserves any custom FPC configuration settings that already exist.

In some cases, you might require a Docker environment without Varnish, for example to debug or run performance tests. You can generate the Docker Compose configuration without Varnish by adding the `--no-varnish` option to the `ece-docker build:compose` command.

```bash
./vendor/bin/ece-docker build:compose --mode="developer" --php <version> --no-varnish
```

You can specify `VARNISHD_PARAMS` and other environment variables using ENV to specify custom values for required parameters. This is usually done by adding the configuration to the `docker-compose.override.yml` file.

To clear the Varnish cache:

```bash
docker-compose exec varnish varnishadm ban req.url '~' '.'
```

## Web container

**Container name**: web<br/>
**Docker base image**: [magento/magento-cloud-docker-nginx][nginx], based on the [centos] Docker image<br/>
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

<!--Link definitions-->

[centos]: https://hub.docker.com/_/centos
[Configure Xdebug for Docker]: {{site.baseurl}}/cloud/docker/docker-development-debug.html
[Configure Xdebug for Docker]: {{site.baseurl}}/cloud/docker/docker-development-debug.html
[debian:jessie]: https://hub.docker.com/_/debian
[Docker override file]: https://docs.docker.com/compose/extends/
[FPM]: https://php-fpm.org
[Important Elasticsearch configuration]: https://www.elastic.co/guide/en/elasticsearch/reference/6.5/important-settings.html
[mailhog]: https://hub.docker.com/u/mailhog
[MailHog service]: https://github.com/mailhog/MailHog
[Manage the database]: {{site.baseurl}}/cloud/docker/docker-manage-database.html
[mariadb Docker documentation]: https://hub.docker.com/_/mariadb
[mariadb]: https://hub.docker.com/_/mariadb
[nginx config]: https://github.com/magento-dockerhub/magento-cloud-docker/blob/master/images/nginx/1.9/etc/vhost.conf
[nginx configs]: https://github.com/magento/magento-cloud-docker/tree/develop/images/nginx/1.9/etc
[nginx]: https://hub.docker.com/r/magento/magento-cloud-docker-nginx
[PHP extensions]: {{site.baseurl}}/cloud/project/magento-app-php-application.html#php-extensions
[php-cloud]: https://hub.docker.com/r/magento/magento-cloud-docker-php
[rabbitmq]: https://hub.docker.com/_/rabbitmq
[redis]: https://hub.docker.com/_/redis
[Service configuration options]: {{site.baseurl}}/cloud/docker/docker-containers.html#service-configuration-options
[tls]: https://hub.docker.com/r/magento/magento-cloud-docker-nginx
[varnish]: https://hub.docker.com/r/magento/magento-cloud-docker-varnish
[varnish]: https://hub.docker.com/r/magento/magento-cloud-docker-varnish
[web config]: https://github.com/magento/docker
