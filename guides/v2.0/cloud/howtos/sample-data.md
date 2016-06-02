---
layout: default
group: cloud
subgroup: 10_howto
title: Install optional sample data
menu_title: Install optional sample data
menu_order: 8
menu_node: 
github_link: cloud/howtos/sample-data.md
---

## How to install optional sample data {#cloud-howto-samp}
This topic discusses how to install optional Magento sample data. Sample data simulates an active Magento store, including customers, products, and other data.

### Get started
To get started:

{% include cloud/cli-get-started.md %}

### Install sample data
To upgrade:

1.	If you have not done so already, check out the environment to upgrade.
2.	Enter the following commands at a terminal prompt:

		<Magento root dir>/bin/magento sampledata:deploy
3.	Wait for components to update.
4.	Commit and push the changes:

		git add -A
		git commit -m "Install sample data"
		git push origin
3.	Wait for the project to deploy.
4.	Verify the installation was successful by going to your storefront main page.

	The URL displays on the command line under the heading `Environment routes:`.

#### Related topics
*	[Install components]({{ site.gdeurl }}cloud/howtos/install-components.html)
*	[Update components]({{ site.gdeurl }}cloud/howtos/update-components.html)
*	[Merge and delete an environment]({{ site.gdeurl }}cloud/howtos/environment-tutorial-env-merge.html)