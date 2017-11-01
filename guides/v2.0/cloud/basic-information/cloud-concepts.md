---
layout: default
group: cloud
subgroup: 010_welcome
title: Learn about Cloud
menu_title: Learn about Cloud
menu_order: 10
menu_node:
version: 2.0
github_link: cloud/basic-information/cloud-concepts.md
functional_areas:
  - Cloud
---

{{site.data.var.ece}} is a package of {{site.data.var.ee}} software with an Amazon Web Services (AWS) infrastructure with all required services. With these plans, you can create small, medium, and enterprise level stores with custom themes, 

* **Project**: The project contains all of your code branches, environments from development to Production, and allows you to manage access and configurations. Initially only the Project Owner has access to the project. To gain access to the project, you must receive a user account, with permissions, and a Magento authentication key from the Project Owner.
* **Project Owner**: Typically a "business user" in your business or finance organization, they are the point of contact with Magento regarding the account overall. They purchased the subscription plan, create the project, and add users to develop and deploy stores and sites.
* **Active Environment**: An active environment is a fully accessible environment in the Integration enviornment. Each active environment provides a database, environment variables, routes, configurations, and one associated Git branch of code. You can access the Magento Admin and store to test as a merchant and customer for each of these environments, allowing you to develop custom code, add extensions, and integrate 3rd party systems in multiple environments for testing.
* **Inactive Environment**: An inactive environment is a Git branch you either deleted from the Cloud Git repository or one that is not associated with the Cloud Git repository at all. For example, you might already have several Git branches with Magento code that you don't need to use for {{site.data.var.ee}}. As long as you don't add those environments to the Cloud Git repo, they don't count against your total of eight active environments.
* **Branch**: {{site.data.var.ee}} is a Git driven code-base and environment. All code is written in branches, with a parent and child structure. These branches allow you to develop new features and modifications in multiple independant branches concurrently with other work, merging up into a parent branch.
* **Local**: Your local is a workspace for developing Magento code including added extensions and 3rd party integrations. The local is typically a Virtual Machine (VM) with an entire environment of software, packages, database, web server, and more prerequisites to support an installed Magento and cloned Git branches. We provide full details on how to [set up your local for Magento development]({{ page.baseurl }}cloud/before/before-workspace.html).
* **Onboarding Portal**: A [web interface]({{page.baseurl}}cloud/onboarding/onboarding-portal.html) for the Project Owner to get started with a free-30 day trial Starter or Pro account.
* **Project Web Interface**: The Web Interface is a [console for accessing your project](https://accounts.magento.cloud){:target="_blank"}, user accounts, and your project enviornments. You can modify environment settings, environment variables, routes, and manage environments. Access links (store URL, SSH, Git) are provided for active environments through the active Git branches. You use this interface for [managing your project]({{ page.baseurl }}cloud/project/projects.html). The following environments are available through this interface:

  * Starter: Master and all environments branched from it
  * Pro: Integration and all environments branched from it. You may also have Staging and Production. For existing Pro merchants, you may need to have your [interface updated]({{ page.baseurl }}cloud/trouble/pro-env-management.html) to manage all environments.

    <div class="bs-callout bs-callout-info" id="info" markdown="1">
    **New projects provisioned starting October 23, 2017** will already have Staging and Production in their Project Web Interface. Any existing projects created before this date will need to enter a ticket to be converted.
    </div>
