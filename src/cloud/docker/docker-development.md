---
group: cloud-guide
title: Docker Development
functional_areas:
  - Cloud
  - Docker
  - Configuration
---

{{site.data.var.ece}} provides a Docker environment option for those who use their local environment for development, test, or automation tasks. The {{site.data.var.ece}} Docker environment requires three, essential components: a {{site.data.var.ee}} v2 template, Docker Compose, and the {{site.data.var.ece}} `{{site.data.var.ct}}` package. 

This docker environment can be used with any Magento Cloud site, the requirements for Cloud have already installed the components. It can also be used with any Magento 2 site, however you will have to include some other components. (detailslink)

Building the docker environment is easy once you have the configuration in place, for details see the instructions in [Launch Docker]({{ site.baseurl }}/cloud/docker/docker-config.html).

## Docker Container Architecture

The Magento Cloud Docker builds out docker-compose to the required specifications, using docker-compose you can instance the containers, build, deploy and then use the Magento 2 instance like usual.

The [Magento Cloud Docker repository](https://github.com/magento/magento-cloud-docker) contains build information for the following Docker containers.
  
### Index of containers

| Name       | Service   | Notes
| ------------- | ---------- | ------------------
| [build]({{site.baseurl}}/cloud/docker/docker-containers.html#build-container) | Build Container | PHP Container, runs build process
| [cron]({{site.baseurl}}/cloud/docker/docker-containers.html#cron-container) | Cron Jobs | PHP Container, runs cron tasks
| [deploy]({{site.baseurl}}/cloud/docker/docker-containers.html#deploy-container) | Deploy Container | PHP Container, runs the deploy process
| [db]({{site.baseurl}}/cloud/docker/docker-containers.html#database-container) | MariaDB     | Standard database container
| [elasticsearch]({{site.baseurl}}/cloud/docker/docker-containers.html#elasticsearch-container) | Elasticsearch | 
| [fpm]({{site.baseurl}}/cloud/docker/docker-containers.html#fpm-container) | PHP FPM | Used for all incoming requests
| [node]({{site.baseurl}}/cloud/docker/docker-containers.html#nodecontainer) | Node | Used gulp or other NPM based commands
| [rabbitmq]({{site.baseurl}}/cloud/docker/docker-containers.html#rabbitmq-container) | RabbitMQ | 
| [redis]({{site.baseurl}}/cloud/docker/docker-containers.html#redis-container) | Redis     |  Standard redis container
| [tls]({{site.baseurl}}/cloud/docker/docker-containers.html#tls-container) | SSL Endpoint | Terminates SSL, can be configured to pass to varnish or nginx
| [varnish]({{site.baseurl}}/cloud/docker/docker-containers.html#varnish-container) | Varnish |

* Click on the container name to see more about the container and it's usage and configuration.

## Request Flow

Web requests to https://magento2.docker/ are handled via the docker containers. They will go through the following flow:

1. TLS
2. Varnish *
3. Nginx
4. PHP-FPM

Note that varnish can be removed from the configuration, in which case the traffic will pass from TLS container to Nginx.

## Container Logs

All containers log using Dockers built in logging method. The easiest way to interface with this is to use the docker-compose command and view the logs.

The following example will follow the tls container log files, allowing you to see all requests that are passing through, or errors it has had.
```sh
docker-composer logs -f tls
```


## Host Operating Systems
The Cloud Docker environment supports Linux and Mac, and can be used on Windows as well. The containers should be able to run on any docker host, but some of the set up scripts require PHP and composer. 

## Sharing data between host machine and container

You can share files easily between your machine and a Docker container by placing the files in the `.docker/mnt` directory. You can find the files in the `/mnt` directory the next time you build and start the Docker environment using the `docker-compose up` command.

Additionally you can share data into the containers using Mutagen or Docker Sync. These tools are described in more detail on the Syncing Data page.

## Sendmail service

You can send emails from your Docker environment when you enable `sendmail` in the `docker-compose.yml` configuration file:

```yaml
ENABLE_SENDMAIL=true
```
