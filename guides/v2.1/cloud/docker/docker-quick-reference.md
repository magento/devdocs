---
group: cloud-guide
title: Docker development quick reference
functional_areas:
  - Cloud
  - Docker
---

## docker-compose

Action | Command
:----- | :------
Build and start Docker environment | `docker-compose up -d`
Build environment | `docker-compose run build cloud-build`
Deploy environment | `docker-compose run deploy cloud-deploy`
Connect to CLI container | `docker-compose run deploy bash`
Use `{{site.data.var.ct}}` command | `docker-compose run deploy ece-command <command>`
Use Magento command | `docker-compose run deploy magento-command <command>`
Stop and remove Docker environment (removes volumes) | `docker-compose down -v`
Stop Docker environment without destroying containers | `docker-compose stop`
Resume Docker environment | `docker-compose start`
List images | `docker-compose images`
List containers and ports | `docker-compose ps`, or `docker ps`

## ece-tools

Action | Command
:----- | :------
Builds the docker environment in [production mode]({{page.baseurl}}/cloud/docker/docker-config.html#launch-modes) by default and verifies configured service versions. | `docker:build`
Builds the docker environment in [developer mode]({{page.baseurl}}/cloud/docker/docker-config.html#launch-modes). | `docker:build --mode="developer"`
Convert PHP configuration files to Docker ENV files. | `docker:config:convert`

The following example lists the `{{site.data.var.ct}}` Docker commands:

```bash
php ./vendor/bin/ece-tools list | grep docker
```

```terminal
 docker
  docker:build              Build docker configuration
  docker:build:integration  Build test docker configuration
  docker:config:convert     Convert raw config to .env files configuration
```
{: .no-copy}

### Build options

| Option       | Key              | Available values
| ------------ | ---------------- | ------------------
| Mode         | `--mode`, `-m`   | production, developer

