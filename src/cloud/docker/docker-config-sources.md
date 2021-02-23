---
group: cloud-guide
title: Configuration sources
functional_areas:
  - Cloud
  - Setup
  - Configuration
redirect_from:
  - /cloud/reference/docker-config.html
---

You can create the Docker Compose configuration to build and deploy the Docker containers for your Magento project from the following sources:

-  [{{site.data.var.ece}} project configuration files](#magento-commerce-cloud-configuration) for Cloud projects
-  [Unified configuration](#unified-configuration) (`.magento.docker.yml`) for on-premises projects
-  [CLI configuration](#cli-configuration) using `ece-docker build:compose` command options
-  [Custom Docker Compose configuration file](#build-a-custom-docker-compose-configuration) supports Magento installation for both Cloud and on-premises projects

{:.bs-callout-info}
When you build the Docker Compose configuration file, the `ece-docker build:compose` command overwrites the existing `docker-compose.yml` configuration file. You can save customizations for the Docker Compose configuration in a `docker-compose.override.yml` file.  If the `docker-compose.override.yml` file is present, then the override configuration merges with the base configuration. See [Override configuration].

## Magento Commerce Cloud configuration

You need the following {{site.data.var.ece}} project configuration files to emulate a Cloud project in the Docker environment.

-  [.magento.app.yaml]
-  [.magento/services.yaml][services.yaml]

Typically, these files supply the configuration settings in the generated `docker-compose.yml` file when you build and deploy a Cloud Docker environment from a {{site.data.var.ece}} project directory.

## Unified configuration

If you do not have or want to use the {{site.data.var.ece}} configuration files, {{site.data.var.mcd-prod}} supports a unified configuration file, `.magento.docker.yml`. For example, use this configuration source to create a Docker development environment for on-premises projects.

The universal configuration file, `.magento.docker.yml` includes the following sections:

```conf
services: [] # List of services
variables: [] # List of environment variables
hooks: [] # List of available hooks
mounts: [] #l List of available mounts
```

### Services

The `services` section specifies the services configuration for the Docker environment with `version` and `enabled` fields.

```yaml
services:
  php:
    version: "7.3"
    enabled: true|false
```

-  Available services: php, mysql, redis, elasticsearch, rabbitmq, and so on
-  `version` specifies a [supported service version]. The version must be compatible with the Magento version you deploy.
-  `enabled` defaults to `true` if not set

### PHP service

The PHP service has additional properties: `extensions.enabled` and `extensions.disabled`

```yaml
services:
  php:
    version: "7.2"
    extensions:
      enabled:
        - xsl
      disabled:
        - opcache
```

If `extensions.enabled` is not provided, the PHP service is installed with the default extensions.

#### Cron service

To enable cron, add the `cron` service.

```yaml
services:
  cron:
    jobs:
      run:
        schedule: "* * * * *"
        command: "php bin/magento cron:run"
```

### Hooks

The [hooks] section specifies the hook name and command list:

```yaml
hooks:
  build: |
    set -e
    php ./vendor/bin/ece-tools run scenario/build/generate.xml
    php ./vendor/bin/ece-tools run scenario/build/transfer.xml
  deploy: |
    php ./vendor/bin/ece-tools run scenario/deploy.xml
  post_deploy: |
    php ./vendor/bin/ece-tools run scenario/post-deploy.xml
```

### Variables

The `variables` section specifies configuration value to pass into into the environment in the following format:

```yaml
variables:
  DUMMY_VARIABLE: "some value"
  DUMMY_ARRAY_VARIABLE:
    TEST_VALUE: "value"
    TEST_VALUE2: 2
```

Array variables must be encoded with base64 encoding for JSON.

### Mounts

The [mounts] section Mounts section consists of name: parameters named mounts:
```yaml
# The mounts that will be performed when the package is deployed.
mounts:
  var:
    path: "var"
  app-etc:
    path: "app/etc"
  pub-media:
    path: "pub/media"
  pub-static:
    path: "pub/static
```

The `path` is a required parameter to define a mounted volume. The value is a relative path in the container.

## CLI configuration

If you want to change a few settings when you build and deploy the Docker environment, you can add options to the `ece-docker build:compose` command. This method is the quickest way to change the configuration.

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
See [Service configuration options] for additional information about the service configuration options for the `ece-docker build:compose` command.

## Build a custom Docker Compose configuration

Instead of building the `docker-compose.yaml` file using the {{site.data.var.ece }} project configuration. You can use the `ece-docker build:custom:compose` CLI command to build a custom `docker-compose.yaml` file with the configuration you supply. The CLI configuration is the quickest way to change some settings in a desired environment.

You provide the configuration as a JSON array as shown in [Example 1](#example-1).

For {{site.data.var.mcd-prod}} 1.2 and later, you have an additional option to specify custom images and image versions using the `ece-docker build:custom:compose` command as shown in [Example 2](#example-2).

### Example 1

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

### Example 2

> Generate a custom `docker-compose.yaml` file with custom images and image versions

```bash
./vendor/bin/ece-docker build:custom:compose '{"name":"magento","system":{"mode":"production","host":"magento2.test","port":"8080","db":{"increment_increment":3,"increment_offset":2},"mailhog":{"smtp_port":"1026","http_port":"8026"}},"services":{"php":{"image":"php-v1","version":"7.4","enabled":true},"php-cli":{"image-pattern":"%s:%s-cli"},"php-fpm":{"image-pattern":"%s:%s-fpm"},"mysql":{"image":"mariadb-v1","version":"10.3","image-pattern":"%s:%s","enabled":true},"redis":{"image":"redis-v1","enabled":"true","version":"5"},"elasticsearch":{"image":"elasticsearch-v1","image-pattern":"%s:%s","enabled":true,"version":"7.6"},"varnish":{"image":"varnish-v1","image-pattern":"%s:%s","enabled":true,"version":"6.2"},"nginx":{"image":"nginx-v1","version":"1.19","image-pattern":"%s:%s","enabled":"true"},"test":{"enabled":true}},"mounts":{"var":{"path":"var"},"app-etc":{"path":"app\/etc"},"pub-media":{"path":"pub\/media"},"pub-static":{"path":"pub\/static"}}}'
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

<!--Link definitions-->

[hooks]: https://devdocs.magento.com/cloud/project/magento-app-properties.html#hooks
[.magento.app.yaml]: {{site.baseurl}}/cloud/project/magento-app.html
[services.yaml]: {{site.baseurl}}/cloud/project/services.html
[mounts]: https://devdocs.magento.com/cloud/project/magento-app-properties.html#mounts
[available services]: {{site.baseurl}}/cloud/project/services.html#service-versions
[Override configuration]: {{site.baseurl}}/cloud/docker/docker-quick-reference.html#override-configuration
[Service configuration options]: {{site.baseurl}}/cloud/docker/docker-containers.html#service-configuration-options
