---
layout: default
group: cloud
subgroup: 15_howto
title: Install optional sample data
menu_title: Install optional sample data
menu_order: 70
menu_node: 
version: 2.0
github_link: cloud/howtos/sample-data.md
---

## How to install optional sample data {#cloud-howto-samp}
This topic discusses how to install optional Magento sample data. Sample data simulates an active Magento store, including customers, products, and other data.

### Get started

{% collapsible To get started: %}

{% include cloud/cli-get-started.md %}

{% endcollapsible %}

### Install sample data
To install sample data:

1.	If you have not done so already, check out the environment in which to install sample data.
2.	Enter the following commands at a terminal prompt:

		<Magento root dir>/bin/magento sampledata:deploy
3.	Wait for components to update.
4.	Upgrade the database and schema:

		<Magento root dir>/bin/magento setup:upgrade
4.	Commit and push the changes:

		git add -A && git commit -m "Install sample data"
		git push origin <branch name>
3.	Wait for the project to deploy.
4.	Verify the installation was successful by going to your storefront main page.

	The URL displays on the command line under the heading `Environment routes:` after the project deploys.
5.	Take a snapshot of your environment:

		magento-cloud snapshot:create -e <environment ID>

#### Related topics
*	[Install components]({{page.baseurl}}cloud/howtos/install-components.html)
*	[Update components]({{page.baseurl}}cloud/howtos/update-components.html)
*	[Merge and delete an environment]({{page.baseurl}}cloud/howtos/environment-tutorial-env-merge.html)
