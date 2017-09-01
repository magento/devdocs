---
layout: default
group: cloud
subgroup: 010_welcome
title: Develop and Deploy Workflow
menu_title: Develop and Deploy Workflow
menu_order: 30
menu_node:
version: 2.0
github_link: cloud/welcome/discover-workflow.md
---

Everything in Magento Commerce (Cloud) is Git-driven. Your [project]({{ page.baseurl }}cloud/project/projects.html) is a Master Git branch cloned from a Magento 2 repository. We provide an [Integration]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-int) infrastructure that supports up to eight fully active environments. Every active environment gives you the Magento and branch code installed and deployed, configurable services, and a database. You can access the store and Admin panel using provided URLs and [Magento Cloud command-line]({{ page.baseurl }}cloud/reference/cli-ref-topic.html).

You can test every feature in isolation in the [Integration]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-int) active environments, then deploy into [Staging]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-stage) and [Production]({{ page.baseurl }}cloud/reference/iscover-arch.html#cloud-arch-prod).

The following figure shows how it works at a high level:

![High-level view of Magento Commerce]({{ site.baseurl }}common/images/cloud_code-flow.png)

* Create a project that clones Magento code from our repository into a Git `master` branch
* Develop code and customizations in active branches to test in Integration environments
* Use the [Magento Cloud command line]({{ page.baseurl }}cloud/reference/cli-ref-topic.html) to configure your project and use an [automated deployment process]({{ page.baseurl }}cloud/reference/discover-deploy.html) to push code
* Test custom code, themes, 3rd party integrations, and extensions
* Deploy to the Staging environment to complete full near-production testing
* Deploy to Production and begin go live steps

## Use any methodology
You can use any methodology you already have or you can invent new ones for your development and branching strategies.

### Development
For your environments, we recommend deploying and testing following a Development -> Staging -> Production workflow. The Integration environment acts as your extensive testing area for custom code, extensions, and 3rd party integrations. Deploying and testing in Staging gives you near-Production features and additional services including Fastly. Integration and Staging environments are only accessible by user accounts with strict access via SSH and URLs. These enviornments are not public facing. Finally, Production is your live, public environment.

### Branches
For your branches, you can follow any methodology. One example follows an agile methodology such as scrum to create [branches for every sprint]({{page.baseurl}}cloud/env/environments.html#cloud-env-work).

From each sprint, you can have branches for every user story. All the stories become testable. You can continually merge to the sprint branch and validate that on a continuous basis. When the sprint ends, there is no testing bottleneck, and you can just merge to master and put the whole sprint into production.

## Continuous integration
Following your branching and development methodologies, you can easily develop new features, configure changes, and add extensions to continuously develop and deploy updates. Create multiple branches with future features and changes, constantly testing them in Integration then Staging, to deploy to Production as you need. This workflow supports releases multiple times a day or on a set schedule according to your business needs.

To best follow continuous integration, we recommend replicating your Production environment data into the Staging environment. Feel free to run scripts for sanitizing data to remove important data (such as customer information) in Staging. With Integration code and Production data in your Staging environment, you can fully test modifications with full services (Fastly, New Relic, Blackfire, and more) without affecting your live store and customers.

#### Related topics
*	[First-time development setup]({{page.baseurl}}cloud/access-acct/first-time-setup.html)
*	[Architecture]({{page.baseurl}}cloud/reference/discover-arch.html)
*	[Develop and Deploy Workflow]({{page.baseurl}}cloud/welcome/discover-workflow.html)
*	[Deployment process]({{page.baseurl}}cloud/reference/discover-deploy.html)
