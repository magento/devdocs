---
group: cloud
subgroup: How To
title: Optional - Install sample data
menu_title: Optional - Install sample data
menu_order: 70
menu_node:
version: 2.1
functional_areas:
  - Cloud
  - Setup
---

If you need some example data when developing your store, you can install our sample data. This data simulates an active Magento store including customers, products, and other data. This sample data works best with a new "blank site" {{site.data.var.ece}} template installation when creating your project in your Integration environment.

We recommend installing sample data in your local Integration branches and environments. If you use this data in Staging or Production, make sure to clear out the information and products before going live.

## Get started in a branch {#branch}

We recommend working in a branch to add the sample data. The following information details how to set up a branch.

{% include cloud/cli-get-started.md %}

## Install sample data {#data}

To install sample data:

1.	If you have not done so already, check out the environment in which to install sample data.
2.	In a terminal, enter the following commands:

		<Magento root dir>/bin/magento sampledata:deploy
3.	Wait for components to update.
4.	Commit and push the changes:

		git add -A && git commit -m "Install sample data"
		git push origin <branch name>
5.	Wait for the project to deploy.
6.	Verify the installation was successful by going to your storefront main page in the Integration environment. You can locate the URL link to the storefront through the Project Web Interface.
7.	Take a snapshot of your environment:

		magento-cloud snapshot:create -e <environment ID>

You can start testing your development with live data!
