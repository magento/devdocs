---
group: cloud-guide
title: Docker development quick reference
functional_areas:
  - Cloud
  - Setup
---

## ece-tools

The following `{{site.data.var.ct}}` commands relate to establishing your local [Docker development environment]({{page.baseurl}}/cloud/docker/docker-config.html).

```bash
php ./vendor/bin/ece-tools list | grep docker
```

```terminal
 docker
  docker:build             Build docker configuration
  docker:config:convert    Convert raw config to .env files configuration
```
{: .no-copy}

## docker-compose

Action | Command
:--- | :---
Build and start Docker environment | `docker-compose up -d`
Build environment | `docker-compose run build cloud-build`
Deploy environment | `docker-compose run deploy cloud-deploy`
Connect to CLI container | `docker-compose run cli bash`
Use `{{site.data.var.ct}}` command | `docker-compose run cli ece-command <command>`
Use Magento CLI command | `docker-compose run cli magento-command <command>`
Stop and remove Docker environment (removes volumes) | `docker-compose down -v`
Stop Docker environment without destroying containers | `docker-compose stop`
Resume Docker environment | `docker-compose start`
{:style="table-layout:auto;"}

## ece-command

In the Docker environment, you can invoke the `{{site.data.var.ct}}` package from the CLI container.

```bash
docker-compose run cli ece-command list
```

## magento-command

In the Docker environment, you can invoke the `magento-cloud` commands from the CLI container.

```bash
docker-compose run cli magento-command list
```