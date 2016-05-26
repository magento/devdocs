---
layout: default
group: cloud
subgroup: 10_howto
title: How to upgrade the Magento system software
menu_title: How to upgrade the Magento system software
menu_order: 2
menu_node: 
github_link: cloud/howtos/upgrade-magento.md
---

## How to upgrade the Magento system software {#cloud-howto-upgrade}
This topic discusses how to upgrade the Magento system software (for example, from version 2.0.6 to version 2.0.8).

To get started:

{% include cloud/cli-get-started.md %}

To upgrade:

1.	If you have not done so already, check out the environment to upgrade.
2.	Enter the following commands at a terminal prompt:

		composer require magento/product-enterprise-edition <version> --no-update
		composer update
3.	Wait for dependencies to update.
4.	Commit and push the changes:

		git add -A
		git commit -m "Upgrade Magento"
		git push origin
3.	Wait for the project to deploy.
4.	Verify the version either by logging in to the Magento Admin (version displays toward the bottom of the page) or entering the following command:

		php <your Magento install dir>/bin/magento --version

#### Related topic
[Tutorial&mdash;Merge and delete an environment]({ site.gdeurl })cloud/howtos/environment-tutorial-env-merge.html)