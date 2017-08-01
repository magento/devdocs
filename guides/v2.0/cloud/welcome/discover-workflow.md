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

Everything in Magento Enterprise Cloud Edition is Git-driven. Not only the code, but also the
infrastructure. A project contains multiple Git branches, up to eight active *environments* and an unlimited amount of inactive branches. When a branch is active, it has a fully accessible environment for testing.

Every branch enables you to develop features, test, or fix bugs, just like you normally do in development. Not only that, every pull request to a branch is a separate staging system you can view in a browser and test using command-line or other automated test tools.

You can test every feature in isolation and deploy into Staging and Production with a
single click, or a single command on the command-line.

The following figure shows how it works at a high level.

![High-level view of Magento Enterprise Cloud Edition]({{ site.baseurl }}common/images/cloud_code-flow.png)

You get Magento code from our repository, create a [_project_]({{ page.baseurl }}cloud/project/projects.html) which is based in Git, then do your customization in an [Integration environment]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-int). You can use the [Magento Cloud command line]({{ page.baseurl }}cloud/reference/cli-ref-topic.html) to configure your project and use an [automated deployment process]({{ page.baseurl }}cloud/reference/discover-deploy.html) to push code from integration to [Staging]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-stage) and finally to [Production]({{ page.baseurl }}cloud/reference/iscover-arch.html#cloud-arch-prod).

## Use any methodology
You can use any methodology you already have or you can invent new ones for your development and branching strategies.

For your environments, we recommend deploying and testing following a Development -> Staging -> Production workflow. The Integration environment acts as your testing area for custom code, extensions, and 3rd party integrations. Deploying and testing in Staging gives you near-Production features and additional services including Fastly. Integration and Staging environments are only accessible by user accounts with strict access via SSH and URLs. These enviornments are not public facing. Finally, Production is your live, public environment.

For your branches, you can follow any methodology. One example follows an agile methodology such as scrum to create [branches for every sprint]({{page.baseurl}}cloud/env/environments.html#cloud-env-work).

From each sprint, you can have branches for every user story. All the stories
become testable. You can continually merge to the sprint branch and validate
that on a continuous basis. When the sprint ends, there is no testing
bottleneck, and you can just merge to master and put the whole sprint into
production.

#### Related topics
*	[First-time development setup]({{page.baseurl}}cloud/access-acct/first-time-setup.html)
*	[Architecture]({{page.baseurl}}cloud/reference/discover-arch.html)
*	[Develop and Deploy Workflow]({{page.baseurl}}cloud/welcome/discover-workflow.html)
*	[Deployment process]({{page.baseurl}}cloud/reference/discover-deploy.html)
