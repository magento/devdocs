---
layout: default
group: cloud
subgroup: 020_onboarding
title: Onboarding tasks
menu_title: Onboarding task
menu_order: 1
menu_node: parent
version: 2.0
github_link: cloud/onboarding/onboarding.md
---

TBD - add info on how to onboard, what's expected, all the automated tasks we plan on providing.

## Set up your project {#project-setup}
When you sign up for a trial Pro or Starter subscription plan, we provision your initial environment with a template {{site.data.var.<ece>}} repository. This repo is called `master` with a full environment in a Platform-as-a-Servie (PaaS) environment. Each active environment including an active Git branch of code, web server, database, and services to fully test your Magento deployments.

For details on these environments, see [Starter]({{page.baseurl}}cloud/basic-information/starter-architecture.html) and [Pro]({{page.baseurl}}cloud/reference/discover-arch.html) architecture information.

To fully set up your project, the Account Owner needs to:
* Access to the {{site.data.var.<ece>}} project through added user accounts
* Generate Magento authentication keys
* Create the project
* Add a project admin account

For detailed instructions, see [Set up your project]()

## New onboarding portal {#portal}
To better walk you through the process for setting up your project and completing account owner tasks, we will provide a new onboarding portal as a web interface. Depending on your subscription plan, you can:

* Add a technical lead, or project admin
* Complete a provisioning form for Staging and Production
* Review checklists for workflows including development, UAT testing, and launching live
* Create a high-level project schedule
* Access the [Project Web Interface](https://accounts.magento.cloud){:target="_blank"} for your environments
* Kick off going live
* Enter support tickets

![Manage your project through the portal]({{ site.baseurl }}common/images/cloud_onboard-portal.png)
