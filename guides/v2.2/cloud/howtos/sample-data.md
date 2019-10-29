---
group: cloud-guide
subgroup: How To
title: Optional - Install sample data
menu_title: Optional - Install sample data
menu_order: 70
menu_node:
functional_areas:
  - Cloud
  - Setup
---

If you need some example data when developing your store, you can install our sample data. This data simulates an active Magento store including customers, products, and other data. This sample data works best with a new "blank site" {{site.data.var.ece}} template installation when creating your project in your Integration environment.

We recommend installing sample data in your local Integration branches and environments. If you use this data in Staging or Production, you need to remove the information and products before going live.

## Get started in a branch {#branch}

We recommend working in a branch to add the sample data. The following information details how to set up a branch.

{% include cloud/cli-get-started.md %}

## Install sample data {#data}

To install sample data:

1. If you have not done so already, check out the environment in which to install sample data.
1. In a terminal, enter the following commands:

   ```bash
   <magento_root>/bin/magento sampledata:deploy
   ```

1. Wait for components to update.
1. Commit and push the changes:

   ```bash
   git add -A && git commit -m "Install sample data"
   ```

   ```bash
   git push origin <branch name>
   ```

1. Wait for the project to deploy.
1. Verify the installation was successful by going to your storefront main page in the Integration environment. You can locate the URL link to the storefront through the Project Web Interface.
1. Take a snapshot of your environment:

   ```bash
   magento-cloud snapshot:create -e <environment ID>
   ```

You can start testing your development with live data!
