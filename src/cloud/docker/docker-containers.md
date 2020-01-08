---
group: cloud-guide
title: Docker Containers
functional_areas:
  - Cloud
  - Setup
  - Configuration
---


## Docker Container Architecture
The Magento Cloud Docker builds out docker-compose to the required specifications, using docker-compose you can instance the containers, build, deploy and then use the Magento 2 instance like usual.

All of the customized docker containers are kept in the [Magento Cloud Docker repository](https://github.com/magento/magento-cloud-docker). All of these are customizable and more containers can be added as needed. 

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
| [node]({{site.baseurl}}/cloud/docker/docker-containers-cli.html#nodecontainer) | Node | --node | 6, 8, 10, 11 |  Used gulp or other NPM based commands
| [rabbitmq]({{site.baseurl}}/cloud/docker/docker-containers-service.html#rabbitmq-container) | RabbitMQ | --rmq | 3.5, 3.7 |   
| [redis]({{site.baseurl}}/cloud/docker/docker-containers-service.html#redis-container) | Redis     | 	--redis | 3.2, 4.0, 5.0 |   Standard redis container
| [tls]({{site.baseurl}}/cloud/docker/docker-containers-service.html#tls-container) | SSL Endpoint |  |   |  Terminates SSL, can be configured to pass to varnish or nginx
| [varnish]({{site.baseurl}}/cloud/docker/docker-containers-service.html#varnish-container) | Varnish | --varnish | 4,6 | 
| [web]({{site.baseurl}}/cloud/docker/docker-containers-service.html#web-container) | Nginx | --nginx | 1.9, latest | 

The `docker:build` command runs in interactive mode and verifies the configured service versions. To skip the interactive mode, use the `-n, --no-interaction` option.

For example, the following command starts the Docker configuration generator for the developer mode and specifies the PHP version 7.2:

```bash
./vendor/bin/ece-tools docker:build --mode="developer" --php 7.2
```

## Request Flow

Web requests to https://magento2.docker/ are handled via the docker containers. They will go through the following flow:

1. TLS
2. Varnish *
3. Web (nginx)
4. PHP-FPM

Note that varnish can be removed from the configuration, in which case the traffic will pass from TLS container to Nginx. 

## Sharing data between host machine and container

You can share files easily between your machine and a Docker container by placing the files in the `.docker/mnt` directory. You can find the files in the `/mnt` directory the next time you build and start the Docker environment using the `docker-compose up` command.

Additionally you can share data into the containers using a file synchronization such as Mutagen. These tools are described in more detail in the [File Synchronization] and [Developer Mode] documentation. 

## Container Volumes

Docker volumes are used to maintain data throughout the lifecycle of the docker containers.  These volumes can be defined in several ways:

- in docker-compose.yml or other docker-compose files
- in the Dockerfile from the [Magento Cloud Docker repository](https://github.com/magento/magento-cloud-docker)
- The upstream docker image

Most of these volumes are not interacted with, they are just used by the containers and will follow the lifecycle of docker-compose. The only exception to this is the magento-sync directory which is used by Mutagen or Docker-Sync to transport data into the containers from the host OS.

You can remove all data, and "start fresh" by using:
```
 bin/docker down
 # this triggers a docker-compose command which removes volumes
 # docker-compose down -v
```
This will not remove the magento-sync volume. As mentioned above this is a special volume which requires creating/destroying on it's own.  

Without this volume created you will see the following error message.
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

Sendmail can slow down the instancing of containers, it is best to not use it on the cli containers if possible.

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
[node]: https://hub.docker.com/_/node/]
[rabbitmq]: https://hub.docker.com/_/rabbitmq
[php-image]: https://hub.docker.com/r/magento/magento-cloud-docker-php
[redis]: https://hub.docker.com/r/magento/magento-cloud-docker-redis
[tls]: https://hub.docker.com/r/magento/magento-cloud-docker-tls
[varnish]: https://hub.docker.com/r/magento/magento-cloud-docker-varnish









