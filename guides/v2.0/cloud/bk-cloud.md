---
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
functional_areas:
  - Cloud
---

{{site.data.var.ece}}, formerly Enterprise Cloud Edition, is a managed and automated hosting platform for Magento specifically created for Cloud infrastructures. This version combines {{site.data.var.ee}}, Cloud infrastructure hosting, with a few differences and added features including Git integration and key environments for development, staging, and live production.

Code, test, and deploy across Integration, Staging, and finally Production environment for continuous integration of your store.

For full release notes, see [Release Information]({{ page.baseurl }}/release-notes/bk-release-notes.html) and [Magento Commerce (Cloud) third-party licenses]({{ page.baseurl }}/release-notes/thirdparty-mccloud.html).

## {{site.data.var.ece}} plans and subscriptions {#plans}
{{site.data.var.ece}} provides plan options based on the size of your business. Each plan includes {{site.data.var.ece}}, support, and Cloud-based hosting and infrastructure on a subscription basis. Want to sign up? We encourage starting with a free 30-day trial to begin working with Magento.

For a list of our plans and breakdown of features, see [Subscriptions and plans]({{ page.baseurl }}/cloud/basic-information/cloud-plans.html).

To start your free 30-day trial, see our [Plan Comparison](https://magento.com/trial/plans-comparison){:target="_blank"}. You can select a plan that fits your business and start a trial with a newly provisioned project and code-base with the latest version of {{site.data.var.ece}}.

### Details about the cloud {#details}
* Each plan includes Integration environment for development, testing, and integrating services. Additional active environments are available at additional cost.
* All environments run with active Git branches of code.
* You have an unlimited number of *inactive* Git branches.
* You can add fully managed services like MySQL, Elasticsearch, Redis, RabbitMQ, and so on, without requiring external add-ons.
* We use a robust {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} build process.
* You can increase the amount of memory and CPU as needed.

### Technologies and requirements {#requirements}
You should become familiar with the following technologies:

* [Git](https://git-scm.com/docs/user-manual.html){:target="_blank"}
*	[Composer](https://getcomposer.org/doc){:target="_blank"}
*	[Secure Shell]({{ page.baseurl }}/cloud/env/environments-ssh.html) (SSH)
* MySQL (including command-line interaction)
* Basic linux shell usage

See [Technologies and requirements]({{ page.baseurl }}/cloud/requirements/cloud-requirements.html), [Pro architecture]({{ page.baseurl }}/cloud/architecture/pro-architecture.html), and [Starter architecture]({{ page.baseurl }}/cloud/basic-information/starter-architecture.html) for details and additional technologies.

## Where do I get started? {#getstarted}
If you have experience with {{site.data.var.ee}} 2 or our cloud implementation, we recommend reviewing content in these DevDocs to understand the differences between {{site.data.var.ee}} and {{site.data.var.ece}}. If you are new to Magento and the Cloud, this guide introduces all aspects from building a project, setting up your local, continuous deployment across environments, and going live.

If you create your account with the 30-day trial, we set you up quickly to get started. When you sign-up for the trial, we auto-provision your project with the latest version of {{site.data.var.ee}} as a base template.

To get started, see:

* [Onboarding tasks]({{ page.baseurl }}/cloud/onboarding/onboarding-tasks.html) of first things to do right after signing up.
* Sign up for [status updates]({{ page.baseurl }}/cloud/onboarding/onboarding-tasks.html#status) for components and services.

To better understand {{site.data.var.ee}}, your plan, architecture, and workflows, see the following starting points:

*	[Technologies and requirements]({{ page.baseurl }}/cloud/requirements/cloud-requirements.html)
*	Starter information:

	* [Starter architecture]({{ page.baseurl }}/cloud/basic-information/starter-architecture.html)
	*	[Starter develop and deploy workflow]({{ page.baseurl }}/cloud/basic-information/starter-develop-deploy-workflow.html)
*	Pro information:

	* [Pro architecture]({{ page.baseurl }}/cloud/architecture/pro-architecture.html)
	*	[Pro develop and deploy workflow]({{ page.baseurl }}/cloud/architecture/pro-develop-deploy-workflow.html)
*	[Deployment process]({{ page.baseurl }}/cloud/reference/discover-deploy.html)
* [Local environment setup]({{ page.baseurl }}/cloud/access-acct/first-time-setup.html)

## Learn more about Magento 2 {#magento2}
If you would like to learn more about Magento 2, see the following resources:

*	[All documentation home page](https://magento.com/help/documentation){:target="_blank"}
*	User guides (how to use options in the Magento Admin)

	*	[Magento 2.0.x](http://docs.magento.com/m2/2.0/ee/user_guide/getting-started.html){:target="_blank"}
	*	[Magento 2.1.x](http://docs.magento.com/m2/2.1/ee/user_guide/getting-started.html){:target="_blank"}
  *	[Magento 2.2.x](http://docs.magento.com/m2/ee/user_guide/getting-started.html){:target="_blank"}
*	Developer documentation

	*	[Magento 2 Architecture guide]({{ page.baseurl }}/architecture/bk-architecture.html){:target="_blank"}
  *	[Front end development]({{ page.baseurl }}/frontend-dev-guide/bk-frontend-dev-guide.html){:target="_blank"}
	*	[Customizing the Magento software]({{ page.baseurl }}/extension-dev-guide/bk-extension-dev-guide.html){:target="_blank"}
	*	[Installation]({{ page.baseurl }}/install-gde/bk-install-guide.html), though we recommend following [Prepare for local environment setup]({{ page.baseurl }}/cloud/before/before-workspace.html){:target="_blank"}
	*	[Configuration]({{ page.baseurl }}/config-guide/bk-config-guide.html){:target="_blank"}
  *	[B2B user guide](http://docs.magento.com/m2/b2b/user_guide/getting-started.html){:target="_blank"}

## Helpful terms {#terms}

* **Project**: The project contains all of your code branches, environments from development to Production, and allows you to manage access and configurations. Initially only the Project Owner has access to the project. To gain access to the project, you must receive a user account, with permissions, and a Magento authentication key from the Project Owner.
* **Project Owner**: Typically a "business user" in your business or finance organization, they are the point of contact with Magento regarding the account overall. They purchased the subscription plan, create the project, and add users to develop and deploy stores and sites.
* **Active Environment**: An active environment is a fully accessible environment in the Integration enviornment. Each active environment provides a database, environment variables, routes, configurations, and one associated Git branch of code. You can access the Magento Admin and store to test as a merchant and customer for each of these environments, allowing you to develop custom code, add extensions, and integrate 3rd party systems in multiple environments for testing.
* **Inactive Environment**: An inactive environment is a Git branch you either deleted from the Cloud Git repository or one that is not associated with the Cloud Git repository at all. For example, you might already have several Git branches with Magento code that you don't need to use for {{site.data.var.ee}}. As long as you don't add those environments to the Cloud Git repo, they don't count against your total of eight active environments.
* **Branch**: {{site.data.var.ee}} is a Git-driven code base and environment. All code is written in branches, with a parent and child structure. These branches allow you to develop new features and modifications in multiple independant branches concurrently with other work, merging up into a parent branch.
* **Local**: Your local is a workspace for developing Magento code including added extensions and 3rd party integrations. The local is typically a Virtual Machine (VM) with an entire environment of software, packages, database, web server, and more prerequisites to support an installed Magento and cloned Git branches. We provide full details on how to [set up your local for Magento development]({{ page.baseurl }}/cloud/before/before-workspace.html).
* **Module or Extension**: Modules and extensions enhance Magento's core functionality through custom code. Develop your own modules and extensions or purchase them directly from developers on the [Magento Marketplace](https://marketplace.magento.com/){:target="_blank"}. We recommend [developing custom code as a module]({{ page.baseurl }}/mrg/intro.html) to extend Magento functionality.
* **Project Web Interface**: The Web Interface is a [console for accessing your project](https://accounts.magento.cloud){:target="_blank"}, user accounts, and your project environments. You can modify environment settings, environment variables, routes, and manage environments. Access links (store URL, SSH, Git) are provided for active environments through the active Git branches. You use this interface for [managing your project]({{ page.baseurl }}/cloud/project/projects.html). The following environments are available through this interface:

  * Starter: Master and all environments branched from it
  * Pro: Integration and all environments branched from it. You may also have Staging and Production. For existing Pro merchants, you may need to have your [interface updated]({{ page.baseurl }}/cloud/trouble/pro-env-management.html) to manage all environments.

    <div class="bs-callout bs-callout-info" id="info" markdown="1">
    **New projects provisioned starting October 23, 2017** will already have Staging and Production in their Project Web Interface. Any existing projects created before this date will need to enter a ticket to be converted.
    </div>