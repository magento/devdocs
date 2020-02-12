---
group: cloud-guide
title: Docker development quick reference
functional_areas:
  - Cloud
  - Docker
---

{%include cloud/note-docker-config-reference-link.md%}

## docker-compose

Action | Command
:----- | :------
Build and start Docker environment | `docker-compose up -d`
Build environment | `docker-compose run build cloud-build`
Deploy environment | `docker-compose run deploy cloud-deploy`
Run post-deploy hooks | `docker-compose run deploy cloud-post-deploy`
Connect to CLI container | `docker-compose run deploy bash`
Use `{{site.data.var.ct}}` command | `docker-compose run deploy ece-command <command>`
Use Magento command | `docker-compose run deploy magento-command <command>`
Stop and remove Docker environment (removes volumes) | `docker-compose down -v`
Stop Docker environment without destroying containers | `docker-compose stop`
Resume Docker environment | `docker-compose start`
List images | `docker-compose images`
List containers and ports | `docker-compose ps` or `docker ps`

### Override configuration

Because the `ece-docker build:compose` command in the `{{site.data.var.ct}}` package overwrites the base configuration, we recommend saving your customizations in an override configuration file. You can use this method to merge multiple custom configurations. See [Docker Docs: Multiple Compose files](https://docs.docker.com/compose/extends/#multiple-compose-files).

The `docker-compose up` command considers the base `docker-compose.yml` configuration by default. If the `docker-compose.override.yml` file is present, then the override configuration merges with the base configuration.

Use the `-f` argument to specify an alternate configuration file. The following example uses the default configuration and merges each custom configuration sequentially:

```bash
docker-compose -f docker-compose.yml -f docker-compose-custom.yml [-f more-custom-docker-compose.yml] up
```

### Build options

| Option       | Key              | Available values
| ------------ | ---------------- | ------------------
| [Mode]({{site.baseurl}}/cloud/docker/docker-config.html#set-the-launch-mode)         | `--mode`, `-m`   | production, developer
| [File synchronization engine]({{site.baseurl}}/cloud/docker/docker-syncing-data.html) | `--sync-engine` | native (default), docker-sync, mutagen

{:.bs-callout-info}
See [Service versions] for a list of the options to configure the software service version when building your {{site.data.var.mcd-prod}} environment.

## bin/magento-docker

Run `bin/magento-docker` commands using the following format:

```bash
./bin/magento-docker <command>
```

For example, to connect to the bash shell:

```terminal
$ ./bin/magento-docker bash
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
Run post-deploy hooks | `ece-post-deploy`
Re-build and re-deploy application | `ece-redeploy`
Stop containers | `stop`
Start containers | `start`
Restart containers | restart
Destroy containers | `down`
Destroy, re-create, and start containers | `up`

[Service versions]: {{site.baseurl}}/cloud/docker/docker-containers.html#service-containers
[Configure Docker]: {{site.baseurl}}/cloud/docker/docker-config.html
