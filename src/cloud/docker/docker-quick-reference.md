---
group: cloud-guide
title: Docker development quick reference
functional_areas:
  - Cloud
  - Docker
---

{%include cloud/note-docker-config-reference-link.md%}

## Docker Compose

Docker Compose is a tool for defining and running multi-container Docker applications. The following table lists the Docker Compose commands for building, deploying, and operating {{site.data.var.mcd-prod}}. You can also use [Magento Cloud Docker CLI](#magento-cloud-docker-cli) commands to complete Docker Compose tasks.

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
