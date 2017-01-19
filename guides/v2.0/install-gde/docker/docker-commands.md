---
layout: default
group: install-dock
subgroup: 01_over
title: Common Docker commands
menu_title: Common Docker commands
menu_node: 
menu_order: 10
version: 2.0
github_link: install-gde/docker/docker-commands.md
---

This topic lists Docker commands you might find useful for day-to-day use or when troubleshooting issues. For more information, see the [Docker command reference](https://docs.docker.com/engine/reference/commandline){:target="_blank"}.

## Enable cron
By default, cron isn't running in your Magento DevBox because cron consumes resources on your machine. Enabling cron also causes delays if you're running tests.

Enabling cron is necessary, however, to demonstrate how Magento works and to perform certain tasks. For a discussion of how Magento uses cron, see [Configure and use cron]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-cron.html#config-cli-cron-overview).

### Enable cron on a running system
If DevBox is running, use the following command:

	docker-compose exec --user=magento2 web m2init magento:finalize --magento-warm-up-storefront=1 --magento-cron-run=1 --no-interaction

### Enable cron to run every time Magento starts
To enable cron to run every time:

1.	Stop all running containers.

		docker-compose stop
2.	Open `<project root dir>/docker-compose.yml` in a text editor.
3.	Set the values of the following parameters to `1`:

		MAGENTO_CRON_RUN=1
		MAGENTO_WARM_UP_STOREFRONT=1
4.	Save your changes to `docker-compose.yml` and exit the text editor.
5.	Start all containers.

		docker-compose start
		
## General purpose commands

| Description  | Command  | 
|--------------|--------------|
| List all Magento containers | `docker-compose ps ` |
| Start a container | `docker-compose start <service>` |
| Stop a container | `docker-compose stop <service>` |
| Restart a container | `docker-compose restart <service>` | 
| Restart all containers | `docker-compose restart` | 
| Start all Magento containers | `docker-compose start` |
| Stop all Magento containers | `docker-compose stop` |
| Remove all Magento containers | `docker-compose kill` | 
| Run a bash shell in a container | `docker-compose exec --user=magento2 <service> /bin/bash` |

FIND IN COMPOSE.YAML

