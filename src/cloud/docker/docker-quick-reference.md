---
group: cloud-guide
title: Docker development quick reference
functional_areas:
  - Cloud
  - Docker
---

{%include cloud/note-docker-config-reference-link.md%}

## Docker Compose

Docker Compose is a tool for defining and running multi-container Docker applications. The following table lists the `docker-compose` commands for building, deploying, and operating {{site.data.var.mcd-prod}}. You can also use [Magento Cloud Docker CLI](#magento-cloud-docker-cli) commands to complete Docker Compose tasks.

Action | Command
:----- | :------
Build and start Docker environment | `docker-compose up -d`
Build environment | `docker-compose run --rm build cloud-build`
Deploy environment | `docker-compose run --rm deploy cloud-deploy`
Run post-deploy hooks | `docker-compose run --rm deploy cloud-post-deploy`
Connect to CLI container | `docker-compose run --rm deploy bash`
Use `{{site.data.var.ct}}` command | `docker-compose run --rm deploy ece-command <command>`
Use Magento command | `docker-compose run --rm deploy magento-command <command>`
Stop and remove Docker environment (removes volumes) | `docker-compose down -v`
Stop Docker environment without destroying containers | `docker-compose stop`
Resume Docker environment | `docker-compose start`
List images | `docker-compose images`
List containers and ports | `docker-compose ps` or `docker ps`

{:.bs-callout-info}
The `--rm` option automatically removes containers when they stop. This setting overrides any restart policy specified in the service configuration and prevents orphaned containers from consuming excess disk space. See [`docker-compose run`][] in the _Docker command-line reference_.

### Override configuration

Because the `ece-docker build:compose` command overwrites the base configuration, we recommend saving your customizations in an override configuration file. You can use this method to merge multiple custom configurations. See [Docker Docs: Multiple Compose files][].

The `docker-compose up` command considers the base `docker-compose.yml` configuration by default. If the `docker-compose.override.yml` file is present, then the override configuration merges with the base configuration.

Use the `-f` argument to specify an alternate configuration file. The following example uses the default configuration and merges each custom configuration sequentially:

```bash
docker-compose -f docker-compose.yml -f docker-compose-custom.yml [-f more-custom-docker-compose.yml] up
```

### Docker Compose configuration generator

{%include cloud/cloud-docker-config-generator-cmds.md%}

### Additional build options

View the available options for the `ece-docker build:compose` command:

```bash
php ./vendor/bin/ece-docker build:compose -h
```

```terminal
Description:
  Build docker configuration

Usage:
  build:compose [options]

Options:
      --php=PHP                                        PHP version
      --nginx=NGINX                                    Nginx version
      --db=DB                                          DB version
      --db-image=DB-IMAGE                              DB image
      --expose-db-port=EXPOSE-DB-PORT                  Expose DB port
      --expose-db-quote-port=EXPOSE-DB-QUOTE-PORT      Expose port for DB sales
      --expose-db-sales-port=EXPOSE-DB-SALES-PORT      Expose port for DB quote
      --with-entrypoint                                Add DB entrypoint volume
      --with-mariadb-conf                              Add MariaDb config volume
      --redis=REDIS                                    Redis version
      --es=ES                                          Elasticsearch version
      --rmq=RMQ                                        RabbitMQ version
      --node=NODE                                      Node.js version
      --selenium-version=SELENIUM-VERSION              Selenium version
      --selenium-image=SELENIUM-IMAGE                  Selenium image
      --no-es                                          Disable Elasticsearch
      --no-mailhog                                     Disable MailHog
      --mailhog-http-port                              Custom HTTP port for MailHog
      --mailhog-smtp-port                              Custom SMTP port for MailHog
      --set-docker-host                                Sets host.docker.internal for fpm_xdebug container to
                                                       resolve debug issue for LINUX system
  -m, --mode=MODE                                      Mode of environment (developer, production)
      --sync-engine=SYNC-ENGINE                        File sync engine. Works only with developer mode. Available: (docker-sync, mutagen, native)
      --with-cron                                      Add cron container
      --no-varnish                                     Remove Varnish container
      --with-selenium                                  Add Selenium latest version
      --with-test                                      Add container for running tests
      --no-tmp-mounts                                  Remove /tmp mounted volume
      --with-xdebug                                    Enables XDebug
      --env-vars[=ENV-VARS]                            Cloud environment variables
      --installation-type[=INSTALLATION-TYPE]          Sets magento installation type [default: "composer"]
      --host[=HOST]                                    Host name
      --port[=PORT]                                    Port
      --tls-port                                       TLS port
      --es-env-var=ES-ENV-VAR                          Environment variable for elasticsearch service (multiple values allowed)
      --db-increment-increment=DB-INCREMENT-INCREMENT  "auto_increment_increment" database variable
      --db-increment-offset=DB-INCREMENT-OFFSET        "auto_increment_offset" database variable
  -h, --help                                           Display this help message
  -q, --quiet                                          Do not output any message
  -V, --version                                        Display this application version
      --ansi                                           Force ANSI output
      --no-ansi                                        Disable ANSI output
  -n, --no-interaction                                 Do not ask any interactive question
  -v|vv|vvv, --verbose                                 Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
  ```

{:.bs-callout-info}
See [Service versions] for additional information about the service configuration options for the `ece-docker build:compose` command.

### Build a custom Docker Compose configuration

Instead of building the `docker-compose.yaml` file using the {{site.data.var.ece }} project configuration. You can use the `build:custom:compose` command to build a custom `docker-compose.yaml` file with the configuration you supply. You provide the configuration as a JSON array as shown in [Example 1](#example-1).

For {{site.data.var.mcd-prod}} 1.2 and later, you have an additional option to specify custom images and image versions using the `ece-docker build:custom:compose` command as shown in [Example 2](#example-2).

#### Example 1

> Generate a custom `docker-compose.yaml` file

```bash
./vendor/bin/ece-docker build:custom:compose '{"name":"magento","system":{"mode":"production","host":"magento2.test","port":"8080","db":{"increment_increment":3,"increment_offset":2},"mailhog":{"smtp_port":"1026","http_port":"8026"}},"services":{"php":{"version":"7.3","enabled":true,"extensions":{"enabled":["xsl"]}},"mysql":{"version":"10.2","image":"mariadb","enabled":true}, "mailhog": {"enabled":true}}}'
```

This command generates the following `docker-compose.yaml` file:

```terminal
version: '2.1'
services:
  db:
    hostname: db.magento2.test
    image: 'mariadb:10.2'
    environment:
      - MYSQL_ROOT_PASSWORD=magento2
      - MYSQL_DATABASE=magento2
      - MYSQL_USER=magento2
      - MYSQL_PASSWORD=magento2
    ports:
      - '3306'
    volumes:
      - '.docker/mnt:/mnt:rw,delegated'
      - 'magento-magento-db:/var/lib/mysql'
    healthcheck:
      test: 'mysqladmin ping -h localhost -pmagento2'
      interval: 30s
      timeout: 30s
      retries: 3
    command: '--auto_increment_increment=3 --auto_increment_offset=2'
    networks:
      magento:
        aliases:
          - db.magento2.test
  fpm:
    hostname: fpm.magento2.test
    image: 'magento/magento-cloud-docker-php:7.3-fpm-1.2.0'
    extends: generic
    volumes:
      - '.:/app:ro,delegated'
      - 'magento-vendor:/app/vendor:ro,delegated'
      - 'magento-generated:/app/generated:ro,delegated'
      - '.docker/mnt:/mnt:rw,delegated'
    networks:
      magento:
        aliases:
          - fpm.magento2.test
    depends_on:
      db:
        condition: service_healthy
  web:
    hostname: web.magento2.test
    image: 'magento/magento-cloud-docker-nginx:1.19-1.2.0'
    extends: generic
    volumes:
      - '.:/app:ro,delegated'
      - 'magento-vendor:/app/vendor:ro,delegated'
      - 'magento-generated:/app/generated:ro,delegated'
      - '.docker/mnt:/mnt:rw,delegated'
    environment:
      - WITH_XDEBUG=0
    networks:
      magento:
        aliases:
          - web.magento2.test
    depends_on:
      fpm:
        condition: service_started
  varnish:
    hostname: varnish.magento2.test
    image: 'magento/magento-cloud-docker-varnish:6.2-1.2.0'
    networks:
      magento:
        aliases:
          - varnish.magento2.test
    depends_on:
      web:
        condition: service_started
  tls:
    hostname: tls.magento2.test
    image: 'magento/magento-cloud-docker-nginx:1.19-1.2.0'
    extends: generic
    networks:
      magento:
        aliases:
          - magento2.test
    environment:
      UPSTREAM_HOST: varnish
    ports:
      - '8080:80'
      - '443:443'
    depends_on:
      varnish:
        condition: service_started
  generic:
    hostname: generic.magento2.test
    image: 'magento/magento-cloud-docker-php:7.3-cli-1.2.0'
    env_file: ./.docker/config.env
    environment:
      - 'PHP_EXTENSIONS=bcmath bz2 calendar exif gd gettext intl mysqli pcntl pdo_mysql soap sockets sysvmsg sysvsem sysvshm opcache zip xsl'
  build:
    hostname: build.magento2.test
    image: 'magento/magento-cloud-docker-php:7.3-cli-1.2.0'
    extends: generic
    volumes:
      - '.:/app:rw,delegated'
      - 'magento-vendor:/app/vendor:rw,delegated'
      - 'magento-generated:/app/generated:rw,delegated'
      - '~/.composer/cache:/root/.composer/cache:rw,delegated'
    networks:
      magento-build:
        aliases:
          - build.magento2.test
    depends_on:
      db:
        condition: service_healthy
  deploy:
    hostname: deploy.magento2.test
    image: 'magento/magento-cloud-docker-php:7.3-cli-1.2.0'
    extends: generic
    volumes:
      - '.:/app:ro,delegated'
      - 'magento-vendor:/app/vendor:ro,delegated'
      - 'magento-generated:/app/generated:ro,delegated'
      - '.docker/mnt:/mnt:rw,delegated'
    networks:
      magento:
        aliases:
          - deploy.magento2.test
    depends_on:
      db:
        condition: service_healthy
  mailhog:
    hostname: mailhog.magento2.test
    image: 'mailhog/mailhog:latest'
    ports:
      - '1026:1025'
      - '8026:8025'
    networks:
      magento:
        aliases:
          - mailhog.magento2.test
volumes:
  magento-vendor: {  }
  magento-generated: {  }
  magento-magento-db: {  }
networks:
  magento:
    driver: bridge
  magento-build:
    driver: bridge

```

#### Example 2

> Generate a custom `docker-compose.yaml` file with custom images and image versions

```bash
./vendor/bin/ece-docker build:custom:compose '{"name":"magento","system":{"mode":"production","host":"magento2.test","port":"8080","db":{"increment_increment":3,"increment_offset":2},"mailhog":{"smtp_port":"1026","http_port":"8026"}},"services":{"php":{"image":"php-v1","version":"7.4","enabled":true,"extensions":{"enabled":["xsl"]}},"php-cli":{"image-pattern":"%s:%s-cli"},"php-fpm":{"image-pattern":"%s:%s-fpm"},"mysql":{"image":"mariadb-v1","version":"10.3","image-pattern":"%s:%s","enabled":true},"redis":{"image":"redis-v1","enabled":"true","version":"5"},"elasticsearch":{"image":"elasticsearch-v1","image-pattern":"%s:%s","enabled":true,"version":"7.6"},"varnish":{"image":"varnish-v1","image-pattern":"%s:%s","enabled":true,"version":"6.2"},"nginx":{"image":"nginx-v1","version":"1.19","image-pattern":"%s:%s","enabled":"true"},"test":{"enabled":true}},"mounts":{"var":{"path":"var"},"app-etc":{"path":"app\/etc"},"pub-media":{"path":"pub\/media"},"pub-static":{"path":"pub\/static"}}}'
```

This command generates the following images in the Docker environment:

```conf
services:
  db:
    image: 'mariadb-v1:10.3'
  redis:
    image: 'redis-v1:5'
  fpm:
    image: 'php-v1:7.4-fpm'
  web:
    image: 'nginx-v1:1.19'
  varnish:
    image: 'varnish-v1:6.2'
  tls:
    image: 'nginx-v1:1.19'
  test:
    image: 'php-v1:7.4-cli'
  generic:
    image: 'php-v1:7.4-cli'
  build:
    image: 'php-v1:7.4-cli'
  deploy:
    image: 'php-v1:7.4-cli'
```

## Magento Cloud Docker CLI

The `bin/magento-docker` commands simplify running docker-compose tasks. For example, instead of running a separate docker-compose command for the build, deploy, and post-deploy steps, you can _redeploy_ Magento in a Docker environment using the following command:

```bash
./bin/magento-docker ece-redeploy
```

The following example shows the `./bin/magento-docker` command and output when connecting to the bash shell:

```bash
./bin/magento-docker bash
```

```terminal
Starting project_redis_1 ... done
Starting project_db_1    ... done
Starting project_elasticsearch_1 ... done
[ ok ] Starting enhanced syslogd: rsyslogd.
root@deploy:/app#
```
{:.no-copy}

Action | Command
:----- | :------
Connect to bash shell | `./bin/magento-docker bash`
Pull the latest images | `./bin/magento-docker pull`
Build application | `./bin/magento-docker ece-build`
Deploy application | `./bin/magento-docker ece-deploy`
Run post-deploy hooks | `./bin/magento-docker ece-post-deploy`
Re-build and re-deploy application | `./bin/magento-docker ece-redeploy`
Stop containers | `./bin/magento-docker stop`
Start containers | `./bin/magento-docker start`
Restart containers | `./bin/magento-docker restart`
Destroy containers | `./bin/magento-docker down`
Destroy, re-create, and start containers | `./bin/magento-docker up`
Clears Redis cache | `./bin/magento-docker flush-redis`
Clears Varnish cache | `./bin/magento-docker flush-varnish`
Access database | `./bin/magento-docker ece-db`
Run a command in a PHP container<br>Supports the following values for the PHP version: 7.1, 7.2, 7.3, 7.4| `./bin/magento-docker php <version>`

Use the following command to view the magento-docker CLI command help:

```bash
./bin/magento-docker -h
```

<!--Link definitions-->

[Configure Docker]: {{ site.baseurl }}/cloud/docker/docker-config.html
[Docker Docs: Multiple Compose files]: https://docs.docker.com/compose/extends/#multiple-compose-files
[`docker-compose run`]: https://docs.docker.com/compose/reference/run/
[File synchronization engine]: {{ site.baseurl }}/cloud/docker/docker-syncing-data.html
[Mode]: {{site.baseurl}}/cloud/docker/docker-config.html#set-the-launch-mode
[Service versions]: {{ site.baseurl }}/cloud/docker/docker-containers.html#service-containers
