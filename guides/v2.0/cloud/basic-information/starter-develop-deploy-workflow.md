---
layout: default
group: cloud
subgroup: 010_welcome
title: Starter Develop and Deploy Workflow
menu_title: Starter Develop and Deploy Workflow
menu_order: 25
menu_node:
version: 2.0
github_link: cloud/basic-information/starter-develop-deploy-workflow.md
---

Everything in Magento Commerce (Cloud) is Git-driven. Your [project]({{ page.baseurl }}cloud/project/projects.html) is a Master Git branch cloned from a Magento 2 repository. Every active Git branch has an associated full environment. Depending on your {{site.data.var.<ece>}} plan subscription, your deployment workflow may differ.

The general workflow for all development and deployment requires pushing code to the remote Git branch. A series of build and deploy processes run with the environments updated with code, services, and configurations. The following sections provide high-level walk-throughs for development, branching, and deployments.

If you have the Starter plan, you have access to four active environments, including a `master` environment for your Production server. You have the option to use the remaining three active branches any way you want. We recommend creating a Staging branch for fully testing your code, extensions, integrations, and data as a near-production environment. This branch includes all services and features of your Production environment. The remaining branches you can create and use for all development.

Every active environment gives you the Magento and branch code installed and deployed, configurable services, and a database. Only the Production and Staging environments have full services including Fastly and New Relic.

The following diagram details the branch and environment relationships:

![High-level view of Starter project]({{ site.baseurl }}common/images/cloud_arch-starter.png)

You can manage all of your environments including Production and Staging directly through the [Project Web Interface]({{ page.baseurl }}cloud/project/project-webint-basic.html), through the store and Admin panel using provided URLs, and using SSH and the [Magento Cloud command-line]({{ page.baseurl }}cloud/reference/cli-ref-topic.html).

## Starter environments and branches {#env-branches}
For your environments, we recommend deploying and testing following a Development > Staging > Production workflow.

* Production environment is your `master` Git branch with an associated full environment with all services
* Staging environment is a Git branch you create called `staging`
* Develop environments include two active branches

For your branches, you can follow any methodology. One example follows an agile methodology such as scrum to create [branches for every sprint]({{page.baseurl}}cloud/env/environments.html#cloud-env-work).

From each sprint, you can have branches for every user story. All the stories become testable. You can continually merge to the sprint branch and validate that on a continuous basis. When the sprint ends, there is no testing bottleneck, and you can just merge to master and put the whole sprint into production.

For detailed information, see [Starter architecture]({{page.baseurl}}cloud/basic-information/starter-architecture.html).

## Development workflow {#development}
discuss full process here

### Clone and branch {#clone-branch}
Clone, branch

### Develop code {#dev-code}
Write code

### Configure store {#configure-store}
configure store settings, configuration, etc.

### Generate configuration management files {#config-management}
scd-dump
env.php/env variables

### Push code and test {#push-code}
push code to Git remote and test
push to staging and test

### Push to production and go live {#go-live}
push to `master`, test, go live. provide links

## Continuous integration {#continuous-integration}
Following your branching and development methodologies, you can easily develop new features, configure changes, and add extensions to continuously develop and deploy updates.

Both Starter and Pro plan environments support continous integration for constant updates. This workflow supports releases multiple times a day or on a set schedule according to your business needs.

* Create development branches with future features and changes
* Test the code in your development environments
* Deploy and test in Staging
* Deploy to Production

To follow continuous integration best practices, we recommend replicating your Production environment data into the Staging environment. Feel free to run scripts for sanitizing data to remove important data (such as customer information) in Staging. With Integration code and Production data in your Staging environment, you can [fully test]({{page.baseurl}}cloud/live/stage-prod-test.html) modifications with full services (Fastly, New Relic, Blackfire, and more) without affecting your live store and customers.

#### Related topics
*	[First-time development setup]({{page.baseurl}}cloud/access-acct/first-time-setup.html)
*	[Starter architecture]({{page.baseurl}}cloud/basic-information/starter-architecture.html)
*	[Deployment process]({{page.baseurl}}cloud/reference/discover-deploy.html)
