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
List containers and ports | `docker-compose ps` or `docker ps`

Any `docker-compose` command will auto pick up the `docker-compose.override.yml` override configuration by default and merge it into the `docker-compose.yml` base configuration. As the `docker:build` command in the `{{site.data.var.ct}}` package will overwrite the base configuration, save your customizations in the override configuration and not in the base configuration itself. Alternatively, if you wish to merge multiple custom configurations, specify each configuration using the `-f` argument for the `docker-compose` command, including and starting with the base configuration. For more detailed information regarding multiple Docker Compose configurations, refer to the official [Docker Docs: Multiple Compose files](https://docs.docker.com/compose/extends/#multiple-compose-files).

{: .bs-callout-info }
Note that, when specifying the configurations manually using the `-f` argument, the override configuration is not auto picked up and must also be specified using the `-f`, if necessary.

#### Examples

-  `docker-compose up` command will consider the base configuration by default, and also auto pick up the override configuration and merge it into the base configuration, if present.
-  `docker-compose -f docker-compose.yml -f docker-compose-custom.yml [-f more-custom-docker-compose.yml] up` command will consider the `docker-compose.yml` first, and sequentially merge every custom configuration specified, into the base configuration. This does not merge the override configuration automatically.
-  `docker-compose -f docker-compose.yml -f docker-compose.override.yml [-f more-custom-docker-compose.yml] up` command will consider the `docker-compose.yml` first, followed by the override configuration, and then sequentially merge every custom configuration specified, into the base configuration. This merges the override configuration manually.

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
{: .no-copy}

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
