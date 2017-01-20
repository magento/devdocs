---
layout: default
group: install-dock
subgroup: 500_comm
title: Common Docker commands
menu_title: Common Docker commands
menu_node: parent
menu_order: 500
version: 2.0
github_link: install-gde/docker/docker-commands.md
---

This topic lists Docker commands you might find useful for day-to-day use or when troubleshooting issues. For more information, see the [Docker command reference](https://docs.docker.com/engine/reference/commandline){:target="_blank"}.

## Run cron, populate the cache and the storefront

Populating the cache and storefront causes the storefront, products, and images to load faster. Use this option after you make changes to the product catalog to pre-deploy static assets and put objects in the cache so the storefront loads faster.

You can also start the [Magento cron job]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-cron.html#config-cli-cron-overview).

However, enabling these options consumes resources and might drain your battery.

{% collapsibleh3 Populate the storefront and cache and run cron (running system) %}

This section discusses how to populate the cache and storefront, and run cron, on a running DevBox system.

#### Start the Magento cron job and populate the cache
Use the following command to both start the [Magento cron job]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-cron.html#config-cli-cron-overview) and populate the cache and storefront:

	docker-compose exec --user=magento2 web m2init magento:finalize --magento-warm-up-storefront=1 --magento-cron-run=1 --no-interaction

#### Start the Magento cron job only
Use the following command on a running system to only start the Magento cron job. This command might save resources and battery life on your laptop.

	docker-compose exec --user=magento2 web m2init magento:finalize --magento-cron-run=1 --no-interaction

#### Populate the storefront and cache only
Use the following command on a running system to only populate the storefront and cache but _not_ run the Magento cron job.

	docker-compose exec --user=magento2 web m2init magento:finalize --magento-warm-up-storefront=1 --no-interaction

{% endcollapsibleh3 %}

{% collapsibleh3 Configure DevBox to always populate the storefront and cache and run cron %}

To populate the storefront and cache, and run cron to run every time Magento starts:

1.	Stop all running containers.

		docker-compose stop
2.	Open `<project root dir>/docker-compose.yml` in a text editor.
3.	You have the following options:

	*	To enable cron to run only, set the value of the following parameter to `1`:

			MAGENTO_CRON_RUN=1
	*	To only populate the storefront and cache but _not_ run the Magento cron job, set the value of the following parameter to `1`:

			MAGENTO_WARM_UP_STOREFRONT=1
	*	To both enable the Magento cron job and to always populate the storefront and cache, set the values of both of the following parameters to `1`:

			MAGENTO_CRON_RUN=1
			MAGENTO_WARM_UP_STOREFRONT=1

4.	Save your changes to `docker-compose.yml` and exit the text editor.
5.	Start all containers.

		docker-compose start

{% endcollapsibleh3 %}

{% collapsibleh2 General purpose commands %}
		
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

{% endcollapsibleh2 %}


