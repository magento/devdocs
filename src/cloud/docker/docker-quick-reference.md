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

Run `bin/docker` commands using the following format:

```bash
./bin/docker <command>
```

For example, to connect to the bash shell:

```terminal
$ ./bin/docker bash
Starting project_redis_1 ... done
Starting project_db_1    ... done
Starting project_elasticsearch_1 ... done
[ ok ] Starting enhanced syslogd: rsyslogd.
root@deploy:/app#
```
{:.no-copy}

Action | Command
:----- | :------
Connect to bash shell | `bash`
Pull the latest images | `pull`
Build application | `ece-build`
Deploy application | `ece-deploy`
Re-build and re-deploy application | `ece-redeploy`
Stop containers | `stop`
Start containers | `start`
Restart containers | restart
Destroy containers | `down`
Destroy, re-create, and start containers | `up`