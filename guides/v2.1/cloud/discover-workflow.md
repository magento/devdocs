---
layout: default
group: cloud
subgroup: 01_welcome
title: Workflow
menu_title: Workflow
menu_order: 3
menu_node: 
version: 2.1
github_link21: cloud/discover-workflow.md
---

## Workflow
Everything in Magento Enterprise Cloud Edition is Git-driven. Not only the code, but also the
infrastructure. A project contains multiple *environments*, which are Git branches.

Every branch enables you to develop features, test, or fix bugs, just like you normally do in development. Not only that, every pull request to a branch is a separate staging system you can view in a browser and test using command-line or other automated test tools.

You can test every feature in isolation and put it into production with a 
single click, or a single command on the command-line.

### Use any methodology
You can use any methodology you already have or you can invent new ones. For example, you can use a Development -> Staging -> Production workflow.

As another example, if you are using an agile methodology such as scrum you can create [branches for every sprint]({{ site.gdeurl21 }}cloud/env/environments.html#cloud-env-work).

From each sprint, you can have branches for every user story. All the stories
become testable. You can continually merge to the sprint branch and validate
that on a continuous basis. When the sprint ends, there is no testing
bottleneck, and you can just merge to master and put the whole sprint into
production.

#### Related topics
*	[First-time setup]({{ site.gdeurl21 }}cloud/access-acct/first-time-setup.html)
*	[Get started with a project]({{ site.gdeurl21 }}cloud/project/project-start.html)
*	[Get started with an environment]({{ site.gdeurl21 }}cloud/env/environments-start.html)
