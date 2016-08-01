---
layout: default
group: cloud
subgroup: 10_howto
title: Upgrade the Magento software
menu_title: Upgrade the Magento software
menu_order: 7
level3_menu_node: level3child
level3_subgroup: upgrade-update
menu_node: 
version: 2.0
github_link: cloud/howtos/upgrade-magento.md
---

## How upgrade the Magento software {#cloud-howto-upgrade}
This topic discusses how to update components you previously installed from Magento Marketplace or from another source.

### Get started

{% collapsible To get started: %}

{% include cloud/cli-get-started.md %}

{% endcollapsible %}

## Upgrade Magento {#cloud-howto-upgrade-how}

{% collapsible To upgrade Magento: %}

1.	Open `composer.json` in a text editor. (It is located in your Cloud project root directory.)
2.	Change `require` section as follows:

	*	Replace `"magento/product-enterprise-edition": "<current version>",` with `"magento/magento-cloud-metapackage": "<upgrade version>",`
	*	Remove `"magento/magento-cloud-configuration": "1.0.*",`

	Example after editing to upgrade to Magento Enterprise Cloud Edition 2.1.0:

		"require": {
			"magento/magento-cloud-metapackage": "2.1.0",
			"composer/composer": "@alpha",
			"colinmollenhour/credis": "1.6",
			"colinmollenhour/php-redis-session-abstract": "1.1"
		},
3.	Save your changes to `composer.json` and exit the text editor.
4.	Update project dependencies and commit them to your local Git repository:

		composer update; git add -A; git commit -m "Upgrade"
5.	Push changes to the envrionment:

		git push origin <branch name>
6.	Wait for deployment to complete.

	Messages similar to the following display at the end of deployment:

		Re-deploying environment ouhzm2ssvgqwg-upgrade.
		  Environment configuration:
			mymagento (type: php:7.0, size: S, disk: 2048)
			mysql (type: mysql:10.0, size: S, disk: 2048)
			redis (type: redis:3.0, size: S)
			solr (type: solr:4.10, size: S, disk: 1024)

		Environment routes:
		   http://upgrade-ouh5gIssvgqwg.us.magentosite.cloud/ is served by application `mymagento`
		   https://upgrade-ouh5gIssvgqwg.us.magentosite.cloud/ is served by application `mymagento`
7.	SSH to the environment:

	Display the SSH URL:

		magento-cloud environment:ssh --pipe -e <environment ID>

	SSH to the environment using the URL:

		ssh <ssh url>

	Messages similar to to the following display:

		 __  __                   _          ___ _             _
		|  \/  |__ _ __ _ ___ _ _| |_ ___   / __| |___ _  _ __| |
		| |\/| / _` / _` / -_) ' \  _/ _ \ | (__| / _ \ || / _` |
		|_|  |_\__,_\__, \___|_||_\__\___/  \___|_\___/\_,_\__,_|
           			 |___/

		Welcome to Magento Cloud.

		This is environment upgrade
		of project ouh5gIssvgqwg.

8.	Enter the following command:

		/usr/bin/php /app/bin/magento setup:upgrade --keep-generated
9.	After the command completes, access your project.












{% endcollapsible %}


#### Related topic
*	[Install components]({{page.baseurl}}cloud/howtos/install-components.html)
*	[Install optional sample data]({{page.baseurl}}cloud/howtos/sample-data.html)
*	[Merge and delete an environment]({{page.baseurl}}cloud/howtos/environment-tutorial-env-merge.html)
