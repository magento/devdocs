---
group: cloud-guide
title: Docker container architecture
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

{{ site.data.var.mcd }} builds out the docker-compose.yml file to the required specifications. Then, you use docker-compose to create the the container instances, build, deploy and then use the {{site.data.var.ee}} instance like usual.

All customized Docker containers are stored in the [Magento Cloud Docker repository](https://github.com/magento/magento-cloud-docker). You can customize these containers and add more containers as needed.

### Service versions

{{site.data.var.ece}} references the `.magento.app.yaml` and `.magento/services.yaml` configuration files to determine the services you need. When you start the Docker configuration generator (the `docker:build` command), you can override a default service version with the following optional parameters:

| Name       | Service   | Key  | Available Versions | Notes
| ------------- | ---------- | ---------- | ------------------ |------------------
| [build]({{site.baseurl}}/cloud/docker/docker-containers-cli.html#build-container) | Build Container |   |   | PHP Container, runs build process
| [cron]({{site.baseurl}}/cloud/docker/docker-containers-cli.html#cron-container) | Cron Jobs |   |   |  PHP Container, runs cron tasks
| [deploy]({{site.baseurl}}/cloud/docker/docker-containers-cli.html#deploy-container) | Deploy Container |   |  |  PHP Container, runs the deploy process
| [db]({{site.baseurl}}/cloud/docker/docker-containers-service.html#database-container) | MariaDB     | --db | 10.0, 10.1, 10.2 |  Standard database container
| [elasticsearch]({{site.baseurl}}/cloud/docker/docker-containers-service.html#elasticsearch-container) | Elasticsearch | --es | 1.7, 2.4, 5.2, 6.5 |
| [fpm]({{site.baseurl}}/cloud/docker/docker-containers-service.html#fpm-container) | PHP FPM | --php | 7.0, 7.1, 7.2 |  Used for all incoming requests
| [node]({{site.baseurl}}/cloud/docker/docker-containers-cli.html#node-container) | Node | --node | 6, 8, 10, 11 |  Used gulp or other NPM based commands
| [rabbitmq]({{site.baseurl}}/cloud/docker/docker-containers-service.html#rabbitmq-container) | RabbitMQ | --rmq | 3.5, 3.7, 3.8 |
| [redis]({{site.baseurl}}/cloud/docker/docker-containers-service.html#redis-container) | Redis     | --redis | 3.2, 4.0, 5.0 |   Standard redis container
| [tls]({{site.baseurl}}/cloud/docker/docker-containers-service.html#tls-container) | SSL Endpoint |  |   |  Terminates SSL, can be configured to pass to varnish or nginx
| [varnish]({{site.baseurl}}/cloud/docker/docker-containers-service.html#varnish-container) | Varnish | --varnish | 4,6 |
| [web]({{site.baseurl}}/cloud/docker/docker-containers-service.html#web-container) | Nginx | --nginx | 1.9, latest |

The `docker:build` command runs in interactive mode and verifies the configured service versions. To skip interactive mode, use the `-n, --no-interaction` option.

For example, the following command starts the Docker configuration generator for the developer mode and specifies PHP version 7.2:

```bash
./vendor/bin/ece-tools docker:build --mode="developer" --php 7.2
```

## Request Flow

Web requests to https://magento2.docker/ are handled by the Docker containers using the following request flow:

1. TLS
1. Varnish *
1. Web (nginx)
1. PHP-FPM

Note that Varnish can be removed from the configuration, in which case the traffic passes from the TLS container to Nginx.

## Sharing data between host machine and container

You can share files easily between your machine and a Docker container by placing the files in the `.docker/mnt` directory. You can find the files in the `/mnt` directory the next time you build and start the Docker environment using the `docker-compose up` command.

Additionally, you can share data into the containers using file synchronization. See the [File Synchronization] and [Developer Mode] documentation.

## Container Volumes

Docker volumes are used to maintain data throughout the lifecycle of the Docker containers.  These volumes can be defined in several ways:

-  in a `docker-compose.yml` or other docker-compose files
-  in the Dockerfile from the [Magento Cloud Docker repository](https://github.com/magento/magento-cloud-docker)
-  in the upstream Docker image

You do not interact with most of these volumes, which are used by the Docker containers and follow the docker-compose lifecycle. The only exception to this is the `magento-sync` directory which is an external volume used by the Mutagen application to transport data into the containers from the host operating system.

You can remove all data, and rebuild a clean environment using the following command:
```
 bin/docker down
 # this triggers a docker-compose command which removes volumes
 # docker-compose down -v
```
If you are using Mutagen for file synchronization, this command does not remove the `magento-sync` volume, which is an external volume that you have to create or delete manually.

If the `magento-sync` volume does not exist, the following error message displays:
```
ERROR: Volume magento-sync declared as external, but could not be found. Please create the volume manually using `docker volume create --name=magento-sync` and try again.
```

## Container Logs

All containers log using Dockers built in logging method. The easiest way to interface with this is to use the docker-compose command and view the logs.

The following example will follow the tls container log files, allowing you to see all requests that are passing through, or errors it has had.
```sh
docker-composer logs -f tls
```

## Sendmail service

You can send emails from your Docker environment when you enable `sendmail` in the `docker-compose.yml` configuration file:

{:.bs-callout-warning}
We do not recommend using Sendmail on CLI containers because the service can slow down the instancing of containers.

```yaml
ENABLE_SENDMAIL=true
```

[Docker architecture]: {{ site.baseurl }}/common/images/cloud/docker-topology.png
[Database container]: {{site.baseurl}}/cloud/docker/docker-database.html
[CLI containers]: {{site.baseurl}}/cloud/docker/docker-cli.html
[Web containers]: {{site.baseurl}}/cloud/docker/docker-php.html
[Developer Mode]: {{site.baseurl}}/cloud/docker/docker-mode-developer.html
[File Synchronization]: {{site.baseurl}}/cloud/docker/docker-syncing-data.html
[docker-repo]: https://github.com/magento/magento-cloud-docker
[elastic]: https://hub.docker.com/r/magento/magento-cloud-docker-elasticsearch
[mariadb]: https://hub.docker.com/_/mariadb
[nginx]: https://hub.docker.com/r/magento/magento-cloud-docker-nginx
[node]: https://hub.docker.com/_/node/
[rabbitmq]: https://hub.docker.com/_/rabbitmq
[php-image]: https://hub.docker.com/r/magento/magento-cloud-docker-php
[redis]: https://hub.docker.com/_/redis
[tls]: https://hub.docker.com/r/magento/magento-cloud-docker-tls
[varnish]: https://hub.docker.com/r/magento/magento-cloud-docker-varnish
