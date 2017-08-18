---
layout: default
group: cloud
subgroup: 010_welcome
title: Welcome to Magento Commerce (Cloud)
landing-page: Cloud
menu_title: Welcome to Magento Commerce (Cloud)
menu_order: 10
menu_node: parent
version: 2.0
github_link: cloud/bk-cloud.md
redirect_from:
  - /guides/v2.0/cloud/access-acct/resources.html
  - /guides/v2.1/cloud/access-acct/resources.html
  - /guides/v2.2/cloud/access-acct/resources.html
  - /guides/v2.0/cloud/welcome/get-help.html
  - /guides/v2.1/cloud/welcome/get-help.html
  - /guides/v2.2/cloud/welcome/get-help.html
  - /guides/v2.0/cloud/welcome/10000-ft-overview.html
  - /guides/v2.1/cloud/welcome/10000-ft-overview.html
  - /guides/v2.2/cloud/welcome/10000-ft-overview.html
---

{{site.data.var.<ece>}}, formerly Enterprise Cloud Edition, is a managed and automated high-availability hosting platform for Magento specifically created and hosted on the Cloud. This version combines {{site.data.var.<ee>}}, Cloud hosting, with a few differences and added features including Git integration and three key environments for development, staging, and live production.

Code, test, and deploy across development, staging, and finally production environment for continuous integration of your store.

## Direct access to your environments {#environments}
Fully access your Magento development and deployment through a UI console or CLI. Your servers are within reach from development to production in the Amazon Web Services (AWS) cloud.

We deploy databases, web server, and caching servers across three environments for end-to-end testing while supporting continuous integration:

* **Integration**: The ultimate developer environment providing eight testable environments with your active Git branch, database, environment variables, and configurations. Actively develop, deploy, and test up to eight Git branches in this interactive environment, one per active environment.
* **Staging**: As code and extensions pass your tests, deploy the master Git branch to Staging for near-Production testing. Consider pulling your Production database into this environment for the best testing opportunity. This environment includes a database, environment variables, configurations, and Fastly for the pushed master branch of code.
* **Production**: When code is ready, deploy the master Git branch into Production for your live store. The container includes a three node high-availability architecture for your data, caching, and store. This is your live, public store environment with environment variables, configurations, and Fastly.

### Details about the cloud {#details}
* Every {{site.data.var.<ece>}} plan includes eight _active_ environments for development and integration. Additional active environments are available at additional cost. Each active environment includes a database, environment variables, and configurations.
* You have an unlimited number of *inactive* Git branches.
* You can add fully managed services like MySQL, Elasticsearch, Redis, RabbitMQ, and so on, without requiring external add-ons.
* We use a robust {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} build process.
* You can increase the amount of memory and CPU as needed.

### Technologies
You should become familiar with the following technologies:

* [Git](https://git-scm.com/docs/user-manual.html){:target="_blank"}
*	[Composer](https://getcomposer.org/doc){:target="_blank"}
*	[Secure Shell]({{page.baseurl}}cloud/env/environments-ssh.html) (SSH)
* MySQL (including command-line interation)
* Basic linux shell usage

See [Magento Commerce requirements]({{page.baseurl}}cloud/requirements/cloud-requirements.html) for details.

## Where do I get started? {#getstarted}
If you have experience with {{site.data.var.<ee>}} 2, we recommend reviewing content in these DevDocs to understand the differences between EE and Enterprise Cloud Edition. If you are new to Magento and the Cloud, this guide introduces all aspects from getting started to going live and continuous integration deployments.

<div class="bs-callout bs-callout-warning" markdown="1">
If you are the account owner, you should complete these tasks to give your technical staff and solution experts access: [Account owner tasks]({{ site.baseurl }}cloud/before/before-project-owner.html).
</div>

We recommend the following starting points:

*	[Magento Commerce requirements]({{page.baseurl}}cloud/requirements/cloud-requirements.html)
*	[Cloud Architecture]({{page.baseurl}}cloud/reference/discover-arch.html)
*	[Develop and Deploy Workflow]({{page.baseurl}}cloud/welcome/discover-workflow.html)
*	[Deployment process]({{page.baseurl}}cloud/reference/discover-deploy.html)
* [Set up a project and dev workspace]({{page.baseurl}}cloud/before/before-workspace.html)

## Magento 2 resources {#magento2}
If you would like to learn more about Magento 2, see the following resources:

*	[Documentation home page](https://magento.com/help/documentation){:target="_blank"}
*	User guides (how to use options in the Magento Admin)

	*	[Magento 2.0.x](http://docs.magento.com/m2/2.0/ee/user_guide/getting-started.html?_ga=1.169393634.291740079.1474814112){:target="_blank"}
	*	[Magento 2.1.x](http://docs.magento.com/m2/ee/user_guide/getting-started.html?_ga=1.169393634.291740079.1474814112){:target="_blank"}
*	Developer documentation

	*	[Magento 2 Architecture guide]({{page.baseurl}}architecture/bk-architecture.html){:target="_blank"}
  *	[Front end development]({{page.baseurl}}frontend-dev-guide/bk-frontend-dev-guide.html){:target="_blank"}
	*	[Customizing the Magento software]({{page.baseurl}}extension-dev-guide/bk-extension-dev-guide.html){:target="_blank"}
	*	[Installation]({{page.baseurl}}install-gde/bk-install-guide.html), though we recommend following [Set up a project and dev workspace]({{page.baseurl}}cloud/before/before-workspace.html){:target="_blank"}
	*	[Configuration]({{page.baseurl}}config-guide/bk-config-guide.html){:target="_blank"}

## Helpful terms {#terms}

* **Active Environment**: An active environment is a fully accessible environment in the Integration enviornment. Each active environment provides a database, environment variables, routes, configurations, and one associated Git branch of code. You can access the Magento Admin and store to test as a merchant and customer for each of these environments, allowing you to develop custom code, add extensions, and integrate 3rd party systems in multiple environments for testing.
* **Inactive Environment**: An inactive environment is a Git branch you either deleted from the Cloud Git repository or one that is not associated with the Cloud Git repository at all. For example, you might already have several Git branches with Magento code that you don't need to use for {{site.data.var.<ee>}}. As long as you don't add those environments to the Cloud Git repo, they don't count against your total of eight active environments.
* **Branch**: {{site.data.var.<ee>}} is a Git driven code-base and environment. All code is written in branches, with a parent and child structure. These branches allow you to develop new features and modifications in multiple independant branches concurrently with other work, merging up into a parent branch.
* **Local**: Your local is a workspace for developing Magento code including added extensions and 3rd party integrations. The local is typically a Virtual Machine (VM) with an entire environment of software, packages, database, web server, and more prerequisites to support an installed Magento and cloned Git branches. We provide full details on how to [set up your local for Magento development]({{ page.baseurl }}cloud/before/before-workspace.html).
* **Project Web Interface**: The Web Interface is a [console for accessing your project](https://accounts.magento.cloud){:target="_blank"}, user accounts, and your Integration enviornment. You can modify environment settings, environment variables, routes, and manage environments. Links (store URL, SSH, Git) are provided for the eight active environments through the active Git branches.

## Technical support {#gethelp}
You can enter a support ticket through the Project Web Interface:

1.	Log in to your [Magento Cloud account](https://accounts.magento.cloud/){:target="_blank"}.
2.	Click **Support** > **Submit ticket** from the top menu.

	The following figure shows an example.

	![Enter a support ticket]({{ site.baseurl }}common/images/cloud_support-ticket.png){:width="600px"}
3.	Follow the prompts to open an issue with Support. Support will respond to your ticket in a timely manner.
