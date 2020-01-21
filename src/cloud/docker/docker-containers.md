---
group: cloud-guide
title: Docker container architecture
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

The [Magento Cloud Docker repository][docker-repo] contains build information to create a Docker environment with the required specifications for Magento Cloud. You can customize the Docker containers available in the repository and add more as needed.

Magento Cloud Docker generates the `docker-compose.yml` file to the required specifications. Then, you use docker-compose to create the the container instances, build, and deploy the {{site.data.var.ee}} site.

## Service versions

Magento Cloud Docker references the `.magento.app.yaml` and `.magento/services.yaml` configuration files to determine the services you need. When you start the Docker configuration generator using the `docker:build` command, you can override a default service version with the following optional parameters:

| Name       | Service   | Key  | Available Versions | Notes
| ------------- | ---------- | ---------- | ------------------ |------------------
| [build] | Build Container |   |   | PHP Container, runs build process
| [cron]| Cron Jobs |   |   |  PHP Container, runs cron tasks
| [deploy] | Deploy Container |   |  |  PHP Container, runs the deploy process
| [db] | MariaDB     | `--db` | 10.0, 10.1, 10.2 |  Standard database container
| [elasticsearch] | Elasticsearch | `--es` | 1.7, 2.4, 5.2, 6.5 |
| [fpm][fpm-container] | PHP FPM | `--php` | 7.0, 7.1, 7.2, 7.3 |  Used for all incoming requests
| [node][node-container] | Node | `--node` | 6, 8, 10, 11 |  Used gulp or other NPM based commands
| [rabbitmq][rabbitmq-container]| RabbitMQ | `--rmq` | 3.5, 3.7, 3.8 |
| [redis][redis-container] | Redis     | `--redis` | 3.2, 4.0, 5.0 |   Standard redis container
| [selenium][selenium-container]| Selenium | `--with-selenium`<br>`--selenium-version`<br>`--selenium-image`| Any | Enables Magento application testing using the Magento Functional Testing Framework (MFTF)
| [tls][tls-container] | SSL Endpoint |  |   |  Terminates SSL, can be configured to pass to varnish or nginx
| [varnish][varnish-container] | Varnish | `--varnish` | 4, 6 |
| [web][web-container] | NGNIX | `--nginx` | 1.9, latest |

The `docker:build` command runs in interactive mode and verifies the configured service versions. To skip interactive mode, use the `-n, --no-interaction` option.

For example, the following command starts the Docker configuration generator in developer mode and specifies PHP version 7.2:

```bash
./vendor/bin/ece-tools docker:build --mode="developer" --php 7.2
```

## Request Flow

Web requests to https://magento2.docker/ are handled by the Docker containers using the following request flow:

1. TLS
1. Varnish *
1. Web (nginx)
1. PHP-FPM

Note that you can remove Varnish from the configuration, in which case the traffic passes directly from the TLS container to the Web container.

## Sharing data between host machine and container

You can share files easily between your machine and a Docker container by placing the files in the `.docker/mnt` directory. You can find the files in the `/mnt` directory the next time you build and start the Docker environment using the `docker-compose up` command.

## Sharing Magento Cloud project data

When you launch the {{site.data.var.ece}} project locally in a Docker environment, the default project configuration sets up the following volumes:

```text
magento-var
magento-app-etc
magento-pub-media
magento-pub-static
```

You can use these volumes to interact with the shared writeable mount directories for your Magento Cloud project which are configured by default in the `.magento.app.yaml` file.

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

Additionally, you can share data into the containers using file synchronization. See the [File synchronization] and [Developer Mode] documentation.

## Container Volumes

Docker volumes are used to maintain data throughout the lifecycle of the Docker containers.  These volumes can be defined in several ways:

-  in a `docker-compose.yml` or other docker-compose files
-  in the Dockerfile from the [Magento Cloud Docker repository](https://github.com/magento/magento-cloud-docker)
-  in the upstream Docker image

You do not interact with most of these volumes, which are used by the Docker containers and follow the docker-compose lifecycle. The only exception to this is the `magento-sync` directory which is an external volume used by the Mutagen application to transport data into the containers from the host operating system.

### Rebuild a clean environment

The `docker-compose down -v` command removes all components of your local Docker instance, including containers, networks, volumes, and images. However, this command does not affect [the persistent database volume][db] or the `magento-sync` volume used for file synchronization.

You can use the following command to remove _all_ data and rebuild a clean environment:

```bash
 bin/docker down
```

The `magento-sync` volume is an external volume that you must create or delete manually. If the `magento-sync` volume does not exist, the following error message displays:

```terminal
ERROR: Volume magento-sync declared as external, but could not be found. Please create the volume manually using `docker volume create --name=magento-sync` and try again.
```

## Container Logs

All containers use the Docker logging method. You can view the logs using the `docker-compose` command. The following example uses the `-f` option to _follow_ the log output of the TLS container:

```bash
docker-composer logs -f tls
```

Now you can see all requests that are passing through the TLS container and check for errors.

[build]: {{site.baseurl}}/cloud/docker/docker-containers-cli.html#build-container
[cron]: {{site.baseurl}}/cloud/docker/docker-containers-cli.html#cron-container
[deploy]: {{site.baseurl}}/cloud/docker/docker-containers-cli.html#deploy-container
[db]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#database-container
[elasticsearch]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#elasticsearch-container
[CLI containers]: {{site.baseurl}}/cloud/docker/docker-cli.html
[Web containers]: {{site.baseurl}}/cloud/docker/docker-php.html
[Developer Mode]: {{site.baseurl}}/cloud/docker/docker-mode-developer.html
[File Synchronization]: {{site.baseurl}}/cloud/docker/docker-syncing-data.html
[docker-repo]: https://github.com/magento/magento-cloud-docker
[nginx]: https://hub.docker.com/r/magento/magento-cloud-docker-nginx
[node-container]: {{site.baseurl}}/cloud/docker/docker-containers-cli.html#node-container
[rabbitmq-container]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#rabbitmq-container
[fpm-container]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#fpm-container
[redis-container]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#redis-container
[selenium-container]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#selenium-container
[tls-container]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#tls-container
[varnish-container]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#varnish-container
[web-container]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#web-container
[mount-configuration]: {{site.baseurl}}/cloud/project/project-conf-files_magento-app.html#mounts
