---
layout: default
group: cloud
subgroup: 10_howto
title: Upgrade the Magento system software
menu_title: Upgrade the Magento system software
menu_order: 3
level3_menu_node: level3child
level3_subgroup: upgrade-update
menu_node: 
version: 2.0
github_link: cloud/howtos/upgrade-magento.md
---

## How to upgrade the Magento system software {#cloud-howto-upgrade}
This topic discusses how to upgrade the Magento system software (for example, from version 2.0.6 to version 2.0.8).

### Get started
To get started:

{% collapsible Click to expand/collapse content %}

To get started:

{% include cloud/cli-get-started.md %}

{% endcollapsible %}

### Upgrade the software

{% collapsible Click to expand/collapse content %}

To upgrade:

1.	If you have not done so already, check out the environment to upgrade.
2.	Enter the following commands at a terminal prompt:

		composer require magento/product-enterprise-edition <version> --no-update
		composer update

	For example,

		composer require magento/product-enterprise-edition 2.0.8 --no-update
		composer update
3.	Wait for dependencies to update.
4.	Commit and push the changes:

		git add -A
		git commit -m "Upgrade Magento"
		git push origin
3.	Wait for the project to deploy.
4.	Verify the version either by logging in to the Magento Admin (version displays toward the bottom of the page) or by entering the following command:

		php <your environment root dir>/bin/magento --version

{% endcollapsible %}

#### Related topics
*	[Install components]({{page.baseurl}}cloud/howtos/install-components.html)
*	[Update components]({{page.baseurl}}cloud/howtos/update-components.html)
*	[Install optional sample data]({{page.baseurl}}cloud/howtos/sample-data.html)
*	[Merge and delete an environment]({{page.baseurl}}cloud/howtos/environment-tutorial-env-merge.html)
