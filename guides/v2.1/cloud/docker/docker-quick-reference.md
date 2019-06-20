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

### Build options

| Option       | Key              | Available values
| ------------ | ---------------- | ------------------
| Mode         | `--mode`, `-m`   | production, developer

## bin/docker

Action | Command
:----- | :------
Pull latest images | pull
Destroy, re-create and start containers | up
Destroy containers | down
Build application | build
Deploy application | up
Re-build and re-deploy application | redeploy
Connect to bash | bash
Stop containers | stop
Start containers | start
Restart containers | restart
