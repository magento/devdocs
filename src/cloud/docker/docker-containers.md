---
group: cloud-guide
title: Docker Containers
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

## Container Volumes
General container volume description.

magento-sync info

volumes table list


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
 - Volumes Exposed: none  

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
 - Volumes Exposed: none  

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
 - Volumes Exposed: none  

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
-  Volumes Exposed: none

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
-  Volumes Exposed:
   -  `/var/lib/mysql`  Used as the data volume for mysql. 
   -  `./docker/mysql/docker-entrypoint-initdb.d` Used at startup for populating database


#### Container Usage

To import a database dump, place the SQL file into the `.docker/mysql/docker-entrypoint-initdb.d` folder.

> When a container is started for the first time, a new database with the specified name will be created and initialized with the provided configuration variables. Furthermore, it will execute files with extensions .sh, .sql and .sql.gz that are found in /docker-entrypoint-initdb.d. Files will be executed in alphabetical order. 

From: [mariadb docker documentation](https://hub.docker.com/_/mariadb)

Although it is a more complex approach, you can use GZIP by _sharing_ the `.sql.gz` file using the `.docker/mnt` directory and importing it inside the Docker container.

MySQL configuration can be injected into the container at creation. The following two examples show how this is done, either via an included my.cnf file, or setting the variables correctly. 

Add a custom my.cnf via the docker-compose.override.yml file:
```
  db:
    volumes:       
      - path/to/custom.my.cnf:/etc/mysql/conf.d/custom.my.cnf
```

Alternatively config values can be set in the environment section of the docker-compose.override.yml:
```
  db:
    environment: 
      - innodb-buffer-pool-size=134217728
```

### Elasticsearch Container

#### Container Information
 - Name: elasticsearch
 - Base Image: [magento/magento-cloud-docker-elasticsearch](https://hub.docker.com/r/magento/magento-cloud-docker-elasticsearch)
   - Based On: [elasticsearch](https://hub.docker.com/_/elasticsearch)  
-  Ports Exposed: 9200,9300
-  Volumes Exposed: none

#### Container Usage

Standard Elasticsearch container with required plugins and configurations for Magento 2.


### FPM Container

#### Container Information
 - Name: fpm
 - Base Image: [magento/magento-cloud-docker-php](https://hub.docker.com/r/magento/magento-cloud-docker-php)
   - Based On: [php](https://hub.docker.com/_/php) 
-  Ports Exposed: 9000,9001
-  Volumes Exposed: 
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
-  Ports Exposed: 4369,5671,5672,25672
-  Volumes Exposed: none

#### Container Usage

TODO


### Redis Container

#### Container Information
 - Name: redis
 - Base Image: [redis](https://hub.docker.com/_/redis)
-  Ports Exposed: 6379
-  Volumes Exposed: none

#### Container Usage

TODO


### TLS Container

#### Container Information
- Name: tls
- Base Image: [magento/magento-cloud-docker-tls](https://hub.docker.com/r/magento/magento-cloud-docker-tls)
   - Based On: [debian:jessie](https://hub.docker.com/_/debian)
-  Ports Exposed: 443
-  Volumes Exposed: none

#### Container Usage

The TLS termination proxy container, based on the  [magento/magento-cloud-docker-tls](https://hub.docker.com/r/magento/magento-cloud-docker-tls) image, facilitates the Varnish SSL termination over HTTPS.



### Varnish Container

#### Container Information
 - Name: varnish
- Base Image: [magento/magento-cloud-docker-varnish](https://hub.docker.com/r/magento/magento-cloud-docker-varnish)
   - Based on: [centos](https://hub.docker.com/_/centos)
-  Ports Exposed: 80
-  Volumes Exposed: none

#### Container Usage
The Varnish container is based on the [magento/magento-cloud-docker-varnish](https://hub.docker.com/r/magento/magento-cloud-docker-varnish) image. Varnish works on port 80.

`VARNISHD_PARAMS` and other environment variables can be specified using ENV, changing required parameters. This is typically done in the docker-compose.override.yml.

```
  varnish:
    environment: 
      - VARNISHD_PARAMS="-p default_ttl=3600 -p default_grace=3600 -p feature=+esi_ignore_https -p feature=+esi_disable_xml_check"
```

You can clear/invalidate the Varnish cache using the following command

```bash
docker-compose exec varnish varnishadm ban req.url '~' '.'
```


### Web Container

#### Container Information
 - Name: web
- Base Image: [magento/magento-cloud-docker-varnish](https://hub.docker.com/r/magento/magento-cloud-docker-varnish)
   - Based on: [centos](https://hub.docker.com/_/centos)
-  Ports Exposed: none
-  Volumes Exposed: none

#### Container Usage
The Web container uses nginx to handle web requests after TLS and Varnish. It passes all requests to the fpm container.

The nginx config for this container is the standard Magento [nginx config](https://github.com/magento-dockerhub/magento-cloud-docker/blob/master/images/nginx/1.9/etc/vhost.conf). This can be changed by mounting a new config using a volume.

```
  web:
    volumes:       
      - path/to/custom.nginx.conf:/etc/nginx/conf.d/default.conf
``` 


