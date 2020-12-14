---
group: cloud-guide
title: Docker container architecture
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

The [`{{site.data.var.mcd-package}}` repository][docker-repo] contains build information to create a Docker environment with the required specifications for Magento Cloud. The build configuration creates a Docker instance with CLI and service containers required to run Magento Cloud in a local Docker environment. You can customize the Docker containers available in the repository and add more as needed.

{{site.data.var.mcd-prod}} generates the `docker-compose.yml` file to the required specifications. Then, you use docker-compose to create the container instances and to build and deploy the {{site.data.var.ee}} site.

## CLI Containers

The following CLI containers, most of which are based on a PHP-CLI version 7 Docker image, provide `magento-cloud` and `ece-tools` commands to perform file system operations and interact with the application:

{: .docker-cli-container-table}
| Name       | Service   | Key & options | Available Versions | Notes
| ------------- | ---------- | ---------- | ------------------ |------------------
| [build] | Build Container | none  | none  | PHP Container, runs build process
| [deploy] | Deploy Container | none   | none |  PHP Container, runs the deploy process
| [cron]| Cron Jobs | `--with-cron`  | none |  Optional PHP Container runs cron tasks
| [node][node-container] | Node | `--node` | 6, 8, 10, 11 |  Optional Node container used for gulp or other NPM-based commands

See [Docker CLI containers] for details.

## Service containers

{{site.data.var.mcd-prod}} references the `.magento.app.yaml` and `.magento/services.yaml` configuration files to determine the services you need. When you start the Docker configuration generator using the `ece-docker build:compose` command, use the optional build parameters to override a default service version or specify custom configuration.

For example, the following command starts the Docker configuration generator in developer mode and specifies PHP version 7.2:

```bash
./vendor/bin/ece-docker build:compose --mode="developer" --php 7.2
```

### Service configuration options

The following table shows the options to customize service container configuration when you generate the Docker Compose configuration file.

{: .docker-service-versions-table}

| Name       | Service   | Key & options  | Available Versions | Notes
| ------------- | ---------- | ---------- | ------------------ |------------------
| [db] | MariaDB or MySQL<br>     | `--db`, `--db-image` (MySQL)<br>`--expose-db-port`<br>`--db-increment`<br>`--db-offset`<br>`--with-entrypoint`<br>`--with-mariadb-config`|10.0, 10.1, 10.2<br>5.6, 5.7 | Use the increment and offset options to customize the [auto-increment settings][Using AUTO_INCREMENT] for replication.<br><br>Use the `--with-entrypoint` and `--with-mariadb-config` options to automatically configure database directories in the Docker environment<br><br>*Example build commands:*<br>`ece-docker build:compose --db <mariadb-version>`<br>`ece-docker build:compose --db <mysql-version> --db-image`
| [elasticsearch] | Elasticsearch | `--es`<br>`--es-env-var`<br>`--no-es` | 1.7, 2.4, 5.2, 6.5, 6.8, 7.5, 7.6, 7.7 | Use the options to specify the Elasticsearch version,  customize Elasticsearch configuration options, or to build a Docker environment without Elasticsearch.
| [fpm][fpm-container] | PHP FPM | `--php`<br>`--with-xdebug` | 7.0, 7.1, 7.2, 7.3, 7.4 |  Used for all incoming requests. Optionally, install a specific php version or add Xdebug to debug PHP code in the Docker environment.
| [fpm_xdebug][fpm_xdebug-container] | Xdebug | `--set-docker-host` | latest | Optional container for PHP debugging<br>On Linux systems, `--set-docker-host` sets the `.host.docker.internal` value in the container `/etc/hosts` file.
| [mailhog][mailhog-container] | MailHog |  `--no-mailhog`<br>`--mailhog-http-port`<br>`--mailhog-smtp-port` | latest | Email service to replace Sendmail service, which can cause issues in Docker environment
| [node][node-container] | Node | `--node` | 6, 8, 10, 11 |  Node container to run gulp or other NPM based commands in the Docker environment. Use the `--node` option to install a specific node version.
| [rabbitmq][rabbitmq-container]| RabbitMQ | `--rmq` | 3.5, 3.7, 3.8 | Use the `--rmq` option to install a specific RabbitMQ version.
| [redis][redis-container] | Redis     | `--redis` | 3.2, 4.0, 5.0 |   Standard redis container
| [selenium][selenium-container]| Selenium | `--with-selenium`<br>`--selenium-version`<br>`--selenium-image`| Any | Enables Magento application testing using the Magento Functional Testing Framework (MFTF)
| [test][test-container]| PHP CLI | `--with-test`| Any | Optional container with a writable file system for running tests
| [tls][tls-container] | SSL Endpoint | `--tls-port` | nginx 1.19-1.2.0, latest  |  Terminates SSL, can be configured to pass to varnish or nginx. Use the `--tls-port` option to change the default port (443).
| [varnish][varnish-container] | Varnish | `--no-varnish` | 4, 6.2 | Varnish is provisioned by default. Use the `--no-varnish` option to skip Varnish service installation.
| [web][web-container] | NGINX | `--nginx` | 1.19-1.2.0, latest | Use the `--nginx` option to install a specific nginx version.

Use the following command to view all available options for the `ece-docker build:compose` command:

```bash
./vendor/bin/ece-docker build:compose --help
```

## Request Flow

Web requests to `https://magento2.docker/` are handled by the Docker containers using the following request flow:

1. TLS
1. *Varnish*
1. Web (nginx)
1. FPM

{:.bs-callout-info}
You can remove Varnish from the configuration, in which case the traffic passes directly from the TLS container to the Web container.

## Sharing data between host machine and container

You can share files easily between your machine and a Docker container by placing the files in the `.docker/mnt` directory. You can find the files in the `/mnt` directory the next time you build and start the Docker environment using the `docker-compose up` command.

## Sharing Magento Cloud project data

When you launch the {{site.data.var.ece}} project in a local Docker environment, the default project configuration creates the following volumes:

```text
magento-var
magento-app-etc
magento-pub-media
magento-pub-static
```

You can use these volumes to interact with the shared writeable mount directories for your Magento Cloud project, which are configured by default in the `.magento.app.yaml` file.

```yaml
 # The mounts that will be performed when the package is deployed.
mounts:
    "var": "shared:files/var"
    "app/etc": "shared:files/etc"
    "pub/media": "shared:files/media"
    "pub/static": "shared:files/static"
```

You can customize this configuration by updating the [`mounts`][mount-configuration] section in the `magento.app.yaml` file.

### File synchronization

Additionally, you can share data into the containers using file synchronization. See the [File synchronization] and [Developer mode] documentation.

## Container Volumes

{{site.data.var.mcd-prod}} uses Docker volumes to maintain data throughout the lifecycle of the Docker containers.  These volumes can be defined in several ways:

-  in a `docker-compose.yml` or other docker-compose files
-  in the Dockerfile from the [{{site.data.var.mcd-prod}} repository](https://github.com/magento/magento-cloud-docker)
-  in the upstream Docker image

You do not interact with most of these volumes, which are used by the Docker containers and follow the docker-compose lifecycle. The only exception to this is the `magento-sync` directory that is an external volume used by the Mutagen application to transport data into the containers from the host operating system.

### Rebuild a clean environment

The `docker-compose down` command removes all components of your local Docker instance, including containers, networks, volumes, and images. However, this command does not affect [the persistent database volume][db] or the `magento-sync` volume used for file synchronization.

To remove _all_ data and rebuild a clean environment:

```bash
 bin/magento-docker down -v
```

The `magento-sync` volume is an external volume that you must create or delete manually. If the `magento-sync` volume does not exist, the following error message displays:

```terminal
ERROR: Volume magento-sync declared as external, but could not be found. Please create the volume manually using `docker volume create --name=magento-sync` and try again.
```

## Container Logs

All containers use the Docker logging method. You can view the logs using the `docker-compose` command. The following example uses the `-f` option to _follow_ the log output of the TLS container:

```bash
docker-compose logs -f tls
```

Now you can see all requests that are passing through the TLS container and check for errors.

[build]: {{site.baseurl}}/cloud/docker/docker-containers-cli.html#build-container
[cron]: {{site.baseurl}}/cloud/docker/docker-containers-cli.html#cron-container
[deploy]: {{site.baseurl}}/cloud/docker/docker-containers-cli.html#deploy-container
[db]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#database-container
[elasticsearch]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#elasticsearch-container
[Docker CLI containers]: {{site.baseurl}}/cloud/docker/docker-containers-cli.html
[Docker service containers]: {{site.baseurl}}/cloud/docker/docker-containers-service.html
[Using AUTO_INCREMENT]: https://dev.mysql.com/doc/refman/8.0/en/example-auto-increment.html
[Web containers]: {{site.baseurl}}/cloud/docker/docker-php.html
[Developer Mode]: {{site.baseurl}}/cloud/docker/docker-mode-developer.html
[File Synchronization]: {{site.baseurl}}/cloud/docker/docker-syncing-data.html
[docker-repo]: https://github.com/magento/magento-cloud-docker
[nginx]: https://hub.docker.com/r/magento/magento-cloud-docker-nginx
[mailhog-container]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#mailhog-container
[node-container]: {{site.baseurl}}/cloud/docker/docker-containers-cli.html#node-container
[rabbitmq-container]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#rabbitmq-container
[fpm-container]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#fpm-container
[fpm_xdebug-container]: {{site.baseurl}}/cloud/docker/docker-development-debug.html
[redis-container]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#redis-container
[selenium-container]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#selenium-container
[test-container]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#test-container
[tls-container]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#tls-container
[varnish-container]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#varnish-container
[web-container]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#web-container
[mount-configuration]: {{site.baseurl}}/cloud/project/magento-app-properties.html#mounts

<!--Custom css-->

<!--
  This is a style declaration so that first column does not wrap
-->

<style>
table.docker-service-versions-table td:nth-child(3) {
  width: 200px;
}
table.docker-cli-container-table td:nth-child(3) {
  width: 200px;
}
