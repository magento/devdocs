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

## Database Container

Container name |Docker base image | Ports exposed
-------- | -------- | ---------------
db | [mariadb](https://hub.docker.com/_/mariadb) | 3306 |

The Database container is based on the [mariadb][db-image] image and includes the following volumes:

-  Volumes:
   -  `magento-db: /var/lib/mysql`
   -  `.docker/mysql/docker-entrypoint-initdb.d:/docker-entrypoint-initdb.d`

When a database container is started for the first time, a new database with the specified name is created and initialized using the configuration variables specified in the docker-compose configuration. The initial start up process also executes all files with extensions .sh, .sql and .sql.gz that are found in the `/docker-entrypoint-initdb.d` directory. Files are executed in alphabetical order. See [mariadb Docker documentation](https://hub.docker.com/_/mariadb).

To prevent accidental data loss, the database is stored in a persistent **`magento-db`** volume after you stop and remove the Docker configuration. The next time you use the `docker-compose up` command, the Docker environment restores your database from the persistent volume. You must manually destroy the database volume using the `docker volume rm <volume_name>` command.

### Import a database dump

{:.bs-callout-warning}
Before you import a database from an existing Magento installation into a new {{ site.data.var.ece }} environment, you must add the encryption key from the remote environment to the new environment, and then deploy the changes. See [Add the Magento encryption key]({{ site.baseurl}}/cloud/setup/first-time-setup-import-import.html#encryption-key).

{:.procedure}
To import a database dump into the Docker environment:

1. Create a local copy of the remote database.

   ```bash
   magento-cloud db:dump
   ```

   {: .bs-callout-note }
   The `magento-cloud db:dump` command runs the [mysqldump](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html) command with the `--single-transaction` flag, which allows you to back up your database without locking the tables.

1. Place the resulting SQL file into the `.docker/mysql/docker-entrypoint-initdb.d` folder.

   The `{{site.data.var.ct}}` package imports and processes the SQL file the next time you build and start the Docker environment using the `docker-compose up` command.

{:.bs-callout-tip}
Although it is a more complex approach, you can use GZIP to import the database by _sharing_ the `.sql.gz` file using the `.docker/mnt` directory and import it inside the Docker container.

### Customize the database container

You can inject MySQL configuration into the database container at creation by adding the configuration to the `docker-compose-override.yml` file. Add the custom values using an included `my.cnf` file, or add the correct variables directly to the override file as shown in the following examples.

{:.procedure}
Add a custom `my.cnf` to the `docker-compose.override.yml` file:

```yaml
db:
  volumes:
    - path/to/custom.my.cnf:/etc/mysql/conf.d/custom.my.cnf
```

{:.procedure}
Add configuration values directly to the `docker-compose.override.yml` file:

```yaml
  db:
    environment:
      - innodb-buffer-pool-size=134217728
```

### Connect to the database

There are two ways to connect to the database. Before you begin, locate the database credentials in the `database` section of the `.docker/config.php` file. The examples use the following default credentials:

> Filename: `.docker/config.php`

```php?start_inline=1
return [
    'MAGENTO_CLOUD_RELATIONSHIPS' => base64_encode(json_encode([
        'database' => [
            [
                'host' => 'db',
                'path' => 'magento2',
                'password' => 'magento2',
                'username' => 'magento2',
                'port' => '3306'
            ],
        ],
```
{:.no-copy}

{:.procedure}
To connect to the database using Docker commands:

1. Connect to the CLI container.

   ```bash
   docker-compose run deploy bash
   ```

1. Connect to the database with a username and password.

   ```bash
   mysql --host=db --user=magento2 --password=magento2
   ```

1. Verify the version of the database service.

   ```mysql
   SELECT VERSION();
   +--------------------------+
   | VERSION()                |
   +--------------------------+
   | 10.0.38-MariaDB-1~xenial |
   +--------------------------+
   ```
   {:.no-copy}

{:.procedure}
To connect to the database port:

1. Find the port used by the database. The port can change each time you restart Docker.

   ```bash
   docker-compose ps
   ```

   Sample response:

   ```terminal
             Name                         Command               State               Ports
   --------------------------------------------------------------------------------------------------
   mc-master_db_1              docker-entrypoint.sh mysqld      Up       0.0.0.0:32769->3306/tcp
   ```
   {:.no-copy}

1. Connect to the database with port information from the previous step.

   ```bash
   mysql -h127.0.0.1 -p32769 -umagento2 -pmagento2
   ```

1. Verify the version of the database service.

   ```mysql
   SELECT VERSION();
   +--------------------------+
   | VERSION()                |
   +--------------------------+
   | 10.0.38-MariaDB-1~xenial |
   +--------------------------+
   ```
   {: .no-copy}

[db-image]: https://hub.docker.com/_/mariadb

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

Container name |Docker base image | Ports exposed
-------- | -------- | ---------------
rabbitmq | [rabbitmq] | 4369, 5671, 5672, 25672

The RabbitMQ container for {{site.data.var.mcd}} is a standard RabbitMQ container with no configuration or changes.

## Redis container

Container name |Docker base image | Ports exposed
-------- | -------- | ---------------
redis | [redis] | 6379

The RabbitMQ container for {{site.data.var.mcd}} is a standard Redis container with no customization, no persistence, and no additional configuration.

Connect to and run redis commands using the redis-cli inside the container:

```bash
docker-compose run redis redis-cli -h redis
```

## Selenium container

Container name |Docker base image | Ports exposed
-------- | -------- | ---------------
selenium |[selenium/standalone-chrome/](https://hub.docker.com/r/selenium/standalone-chrome) | 4444

The Selenium container, based on the [selenium/standalone-chrome/](https://hub.docker.com/r/selenium/standalone-chrome/h), enables the [Magento Functional Testing Framework (MFTF)](https://devdocs.magento.com/mftf/docs/introduction.html) for Magento application testing in the Cloud Dockr environment. See [Magento application testing]({{site.baseurl}}/cloud/docker/docker-mftf.html).

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
