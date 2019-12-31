---
group: cloud-guide
title: Docker Containers
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

## CLI Containers

The CLI containers provide `magento-cloud` and `{{site.data.var.ct}}` commands to perform file system operations and to interact with the application.

The following CLI containers, most of which are based on a [PHP-CLI version 7 image](https://hub.docker.com/r/magento/magento-cloud-docker-php), provide `magento-cloud` and `{{site.data.var.ct}}` commands to perform file system operations:

-  `build`—extends the CLI container to perform operations with writable filesystem, similar to the build phase
-  `deploy`—extends the CLI container to use read-only file system, similar to the deploy phase
-  `cron`—extends the CLI container to run cron
-  `node`—based on node image, used for NPM activities


For example, you can check the state of the your project using the _ideal-state_ wizard:

Run the `{{site.data.var.ct}}` ideal-state command.

```bash
docker-compose run deploy ece-command wizard:ideal-state
```

Sample response:

```terminal
 - Your application does not have the "post_deploy" hook enabled.
The configured state is not ideal
```
{:.no-copy}


### Build Container

#### Container Information
 - Name: build
 - Base Image: [magento/magento-cloud-docker-php](https://hub.docker.com/r/magento/magento-cloud-docker-php)
   - Based On: [php](https://hub.docker.com/_/php)  
 - Ports Exposed: none
 - Volumes: none  

This container is used for the build process. This mimics Magento Cloud behaviour so testing of the build and deploy process is as close to production as possible.

This mounts the filesystem with write permissions.

#### Container Usage

This container is used by the cloud cli tool in the following ways.
todo

You can also use this container as follows:
todo

### Cron Container

#### Container Information
 - Name: cron
 - Base Image: [magento/magento-cloud-docker-php](https://hub.docker.com/r/magento/magento-cloud-docker-php)
   - Based On: [php](https://hub.docker.com/_/php)  
 - Ports Exposed: none
 - Volumes: none  

This container is used for the cronjob, it runs the scheduled cronjobs and can also be used to do one off cron runs.

#### Container Usage

The Cron container is based on PHP-CLI images, and executes operations in the background immediately after the Docker environment start. It uses the cron configuration defined in the [`crons` property of the `.magento.app.yaml` file]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app.html#crons). To view the cron log:

```bash
docker-compose run deploy bash -c "cat /app/var/cron.log"
```

-  The `setup:cron:run` and `cron:update` commands are not available on Cloud and Docker for Cloud environment
-  Cron only works with the CLI container to run the `./bin/magento cron:run` command

This container has no extra configuration, however if performance problems from cron runs are present you can use the following snippet in your docker-compose.override.yml

```
  cron:
    entrypoint: "bash -c"
```
This disables the cron container from running automatically. 

You can then run the cron manually using the following command.

```bash
docker-compose run cron /usr/local/bin/php bin/magento cron:run
```

### Deploy Container

#### Container Information
 - Name: deploy
 - Base Image: [magento/magento-cloud-docker-php](https://hub.docker.com/r/magento/magento-cloud-docker-php)
   - Based On: [php](https://hub.docker.com/_/php)  
 - Ports Exposed: none
 - Volumes: none  

This container is used for the deploy process. This mimics Magento Cloud behaviour so testing of the build and deploy process is as close to production as possible.

This mounts the filesystem with read-only permissions.

#### Container Usage

This container is used by the cloud cli tool in the following ways.
todo

You can also use this container as follows:
todo

### Node Container

#### Container Information
 - Name: node
 - Base Image: [node](https://hub.docker.com/_/node)
-  Ports Exposed: none
-  Volumes:
   -  TODO

#### Container Usage
The Node container is based on the [official Node Docker image](https://hub.docker.com/_/node/). It can be used to install NPM dependencies, such as Gulp, or run any Node-based command line tools.



## Service Containers

The following containers provide the services required to build, deploy and run Magento 2 sites.


{:.bs-callout-info}
See the [service version values available]({{ site.baseurl }}/cloud/docker/docker-config.html) for use when launching Docker.

### Database Container

#### Container Information
 - Name: db
 - Base Image: [mariadb](https://hub.docker.com/_/mariadb)
-  Ports Exposed 3306
-  Volumes:
   -  `/var/lib/mysql`
   -  `./docker/mysql`

#### Container Usage

To import a database dump, place the SQL file into the `.docker/mysql/docker-entrypoint-initdb.d` folder.

The `{{site.data.var.ct}}` package imports and processes the SQL file the next time you build and start the Docker environment using the `docker-compose up` command.
TODO Above is also wrong, as it pulls in during the instancing of the containers.

Although it is a more complex approach, you can use GZIP by _sharing_ the `.sql.gz` file using the `.docker/mnt` directory and importing it inside the Docker container.


### Elasticsearch Container

#### Container Information
 - Name: elasticsearch
 - Base Image: [magento/magento-cloud-docker-elasticsearch](https://hub.docker.com/r/magento/magento-cloud-docker-elasticsearch)
   - Based On: [elasticsearch](https://hub.docker.com/_/elasticsearch)  
-  Ports Exposed: none
-  Volumes: none

#### Container Usage

TODO


### FPM Container

#### Container Information
 - Name: fpm
 - Base Image: [magento/magento-cloud-docker-php](https://hub.docker.com/r/magento/magento-cloud-docker-php)
   - Based On: [php](https://hub.docker.com/_/php) 
-  Ports Exposed: 9000,9001
-  Volumes:
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

#### Container Usage

TODO


### Rabbitmq Container

#### Container Information
 - Name: rabbitmq
 - Base Image: [rabbitmq](https://hub.docker.com/_/rabbitmq)
-  Ports Exposed: none
-  Volumes: none

#### Container Usage

TODO


### Redis Container

#### Container Information
 - Name: redis
 - Base Image: [redis](https://hub.docker.com/_/redis)
-  Ports Exposed: 6379
-  Volumes:
   -  TODO

#### Container Usage

TODO


### TLS Container

#### Container Information
- Name: tls
- Base Image: [magento/magento-cloud-docker-tls](https://hub.docker.com/r/magento/magento-cloud-docker-tls)
   - Based On: [debian:jessie](https://hub.docker.com/_/debian)
-  Ports Exposed: 443
-  Volumes: none

#### Container Usage

The TLS termination proxy container, based on the  [magento/magento-cloud-docker-tls](https://hub.docker.com/r/magento/magento-cloud-docker-tls) image, facilitates the Varnish SSL termination over HTTPS.



### Varnish Container

#### Container Information
 - Name: varnish
- Base Image: [magento/magento-cloud-docker-varnish](https://hub.docker.com/r/magento/magento-cloud-docker-varnish)
   - Based on: [centos](https://hub.docker.com/_/centos)
-  Ports Exposed: 80
-  Volumes: none

#### Container Usage
The Varnish container is based on the [magento/magento-cloud-docker-varnish](https://hub.docker.com/r/magento/magento-cloud-docker-varnish) image. Varnish works on port 80.






