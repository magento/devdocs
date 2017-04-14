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
---

![This guide applies to Enterprise Cloud Edition only]({{ site.baseurl }}common/images/ee-only_large.png) 

## Welcome to Magento Enterprise Cloud Edition
Magento Enterprise Cloud Edition is a managed and automated high-availability hosting platform for
Magento.

You code, and we automatically put everything into production.

### No system administrator required
We deploy databases, web server, and caching servers with no sysadmin work.
It's fully automated and happens almost instantly. Magento Enterprise Cloud Edition cuts out the
middleman between your code and deployment.

### Details
* Every Magento Enterprise Cloud Edition plan includes eight _active_ environments for development and integration. An active environment is a branch in the Cloud Git repo you're using for development and integration. (Additional active environments are available at additional cost.)

	You can have an unlimited number of *inactive* environments. An inactive environment is a Git branch you either deleted from the Cloud Git repository or one that is not associated with the Cloud Git repository at all. For example, you might already have several Git branches with Magento code that you don't need to use for Magento Enterprise Cloud Edition. As long as you don't add those environments to the Cloud Git repo, they don't count against your total of eight active environments.

* You can add fully managed services like MySQL, Elasticsearch, Redis, RabbitMQ, and so on, without requiring external add-ons.
* We use a robust Composer build process.
* You can increase the amount of memory and CPU as needed.

#### Related topics
*	[Magento Enterprise Cloud Edition requirements]({{page.baseurl}}cloud/cloud-requirements.html)
*	[Common terms]({{page.baseurl}}cloud/before/terms.html)
*	[Architecture]({{page.baseurl}}cloud/discover-arch.html)
*	[Workflow]({{page.baseurl}}cloud/discover-workflow.html)

