---
layout: default
group: cloud
subgroup: 010_welcome
title: Welcome to Magento Enterprise Cloud Edition
landing-page: Cloud
menu_title: Welcome to Magento Enterprise Cloud Edition
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
---

![This guide applies to Enterprise Cloud Edition only]({{ site.baseurl }}common/images/ee-only_large.png)

Magento Enterprise Cloud Edition (ECE) is a managed and automated high-availability hosting platform for
Magento. ECE combines Magento Enterprise and the Cloud with a few differences and added features, including Git integration and three key environments for development and live production.

You code, and we automatically put everything into production.

## Direct access to your environments {#environments}
Fully access your Magento development and deployment through a UI console or CLI. Your servers are within reach from development to production in the Amazon Web Services (AWS) cloud.

We deploy databases, web server, and caching servers across three environments for end-to-end testing while supporting continuous integration:

* **Integration**: The ultimate developer environment providing up to eight active developer environments for an associated active Git branch. Actively develop, deploy, and test up to eight Git branches in this interactive environment. This environment is only accessible by your user accounts and is not public.
* **Staging**: As code and extensions pass your tests, deploy the master Git branch to Staging for near-Production testing. Consider pulling your Production database into this environment for the best testing opportunity. This environment is only accessible by your user accounts and is not public.
* **Production**: When code is ready, deploy the master Git branch into Production for your live store. The container includes a three node high-availability structure for your data, caching, and store. This is your live, public store environment.

### Details about the cloud {#details}
* Every Magento Enterprise Cloud Edition plan includes eight _active_ environments for development and integration. Additional active environments are available at additional cost.
* You have an unlimited number of *inactive* Git branches.
* You can add fully managed services like MySQL, Elasticsearch, Redis, RabbitMQ, and so on, without requiring external add-ons.
* We use a robust {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} build process.
* You can increase the amount of memory and CPU as needed.

## Helpful terms {#terms}
* **Active Environment**: An active environment is a fully accessible Git branch with a live development environment. You can access the Magento Admin and store to test as a merchant and customer.
* **Inactive Environment**: An inactive environment is a Git branch you either deleted from the Cloud Git repository or one that is not associated with the Cloud Git repository at all. For example, you might already have several Git branches with Magento code that you don't need to use for Magento Enterprise Cloud Edition. As long as you don't add those environments to the Cloud Git repo, they don't count against your total of eight active environments.

## Where do I get started? {#getstarted}
If you have experience with Magento 2 Enterprise Edition, we recommend reviewing content in these DevDocs to understand the differences between EE and ECE. If you are new to Magento and the Cloud, this guide introduces all aspects from getting started to going live and continuous deployments.

We recommend the following starting points:

*	[Magento Enterprise Cloud Edition requirements]({{page.baseurl}}cloud/requirements/cloud-requirements.html)
*	[Architecture]({{page.baseurl}}cloud/reference/discover-arch.html)
*	[Develop and Deploy Workflow]({{page.baseurl}}cloud/welcome/discover-workflow.html)
*	[Deployment process]({{page.baseurl}}cloud/reference/discover-deploy.html)
* [Set up a project and dev workspace]({{ page.baseurl }}cloud/before/before-workspace.html) (dev local, branch code, and install Magento)

If you are the account owner, you should complete these tasks to give your technical staff and solution experts access: [Account owner tasks]({{ site.baseurl }}cloud/before/before-project-owner.html).

## Magento 2 resources
If you would like to learn more about Magento 2, see the following resources:

*	[Documentation home page](https://magento.com/help/documentation){:target="_blank"}
*	User guides (how to use options in the Magento Admin)

	*	[Magento 2.0.x](http://docs.magento.com/m2/2.0/ee/user_guide/getting-started.html?_ga=1.169393634.291740079.1474814112){:target="_blank"}
	*	[Magento 2.1.x](http://docs.magento.com/m2/ee/user_guide/getting-started.html?_ga=1.169393634.291740079.1474814112){:target="_blank"}
*	Developer documentation

	*	[Front end development]({{ page.baseurl}}frontend-dev-guide/bk-frontend-dev-guide.html)
	*	[Customizing the Magento software]({{ page.baseurl}}extension-dev-guide/bk-extension-dev-guide.html)
	*	[Installation]({{ page.baseurl}}install-gde/bk-install-guide.html), though we recommend following [Set up a project and dev workspace]({{ page.baseurl }}cloud/before/before-workspace.html)
	*	[Configuration]({{ page.baseurl}}config-guide/bk-config-guide.html)

## Technical support
You can enter a support ticket through the Project console:

1.	Log in to your [Magento Cloud account](https://accounts.magento.cloud/){:target="_blank"}.
2.	Click **Support** > **Submit ticket** from the top menu.

	The following figure shows an example.

	![]({{ site.baseurl }}common/images/cloud_support-ticket.png){:width="600px"}
3.	Follow the prompts to open an issue with Support.
