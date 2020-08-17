---
group: cloud-guide
title: Docker development quick reference
functional_areas:
  - Cloud
  - Configuration
---

{%include cloud/note-docker-config-reference-link.md%}

## Docker Compose

Action | Command
:----- | :------
Build and start Docker environment | `docker-compose up -d`
Build environment | `docker-compose run --rm build cloud-build`
Deploy environment | `docker-compose run --rm deploy cloud-deploy`
Run post-deploy hooks | `docker-compose run --rm deploy cloud-post-deploy`
Connect to CLI container | `docker-compose run --rm deploy bash`
Use `{{site.data.var.ct}}` command | `docker-compose run --rm deploy ece-command <command>`
Use Magento command | `docker-compose run --rm deploy magento-command <command>`
Stop and remove Docker environment (removes volumes) | `docker-compose down -v`
Stop Docker environment without destroying containers | `docker-compose stop`
Resume Docker environment | `docker-compose start`
List images | `docker-compose images`
List containers and ports | `docker-compose ps` or `docker ps`

{:.bs-callout-info}
The `--rm` option automatically removes containers when they stop. This setting overrides any restart policy specified in the service configuration and prevents orphaned containers from consuming excess disk space. See [`docker-compose run`][] in the _Docker command-line reference_.

### Override configuration

Because the `ece-docker build:compose` command overwrites the base configuration, we recommend saving your customizations in an override configuration file. You can use this method to merge multiple custom configurations. See [Docker Docs: Multiple Compose files][].

The `docker-compose up` command considers the base `docker-compose.yml` configuration by default. If the `docker-compose.override.yml` file is present, then the override configuration merges with the base configuration.

Use the `-f` argument to specify an alternate configuration file. The following example uses the default configuration and merges each custom configuration sequentially:

```bash
docker-compose -f docker-compose.yml -f docker-compose-custom.yml [-f more-custom-docker-compose.yml] up
```

### Docker Compose configuration generator

{%include cloud/cloud-docker-config-generator-cmds.md%}

### Additional build options

| Option       | Key              | Available values
| ------------ | ---------------- | ------------------
| [Mode][]         | `--mode`, `-m`   | production, developer
| [File synchronization engine][] | `--sync-engine` | native (default), docker-sync, mutagen
| Specify a custom URL for Magento | `--host`<br>`--port`

{:.bs-callout-info}
See [Service versions] for a list of service configuration options you can add to the `ece-docker build:compose` command to customize the Cloud Docker environment configuration.

## Magento Cloud Docker CLI

The `bin/magento-docker` commands simplify running docker-compose tasks. For example, instead of running a separate docker-compose command for the build, deploy, and post-deploy steps, you can _redeploy_ Magento in a Docker environment using the following command:

```bash
./bin/magento-docker ece-redeploy
```

The following example shows the `./bin/magento-docker` command and output when connecting to the bash shell:

```bash
./bin/magento-docker bash
```

```terminal
Starting project_redis_1 ... done
Starting project_db_1    ... done
Starting project_elasticsearch_1 ... done
[ ok ] Starting enhanced syslogd: rsyslogd.
root@deploy:/app#
```
{:.no-copy}

Action | Command
:----- | :------
Connect to bash shell | `./bin/magento-docker bash`
Pull the latest images | `./bin/magento-docker pull`
Build application | `./bin/magento-docker ece-build`
Deploy application | `./bin/magento-docker ece-deploy`
Run post-deploy hooks | `./bin/magento-docker ece-post-deploy`
Re-build and re-deploy application | `./bin/magento-docker ece-redeploy`
Stop containers | `./bin/magento-docker stop`
Start containers | `./bin/magento-docker start`
Restart containers | `./bin/magento-docker restart`
Destroy containers | `./bin/magento-docker down`
Destroy, re-create, and start containers | `./bin/magento-docker up`

<!--Link definitions-->

[Configure Docker]: {{ site.baseurl }}/cloud/docker/docker-config.html
[Docker Docs: Multiple Compose files]: https://docs.docker.com/compose/extends/#multiple-compose-files
[`docker-compose run`]: https://docs.docker.com/compose/reference/run/
[File synchronization engine]: {{ site.baseurl }}/cloud/docker/docker-syncing-data.html
[Mode]: {{site.baseurl}}/cloud/docker/docker-usage.html#set-the-launch-mode
[Service versions]: {{ site.baseurl }}/cloud/docker/docker-containers.html#service-containers
