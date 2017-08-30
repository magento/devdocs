---
layout: default
group: cloud
subgroup: 020_onboarding
title: Onboarding Portal management
menu_title: Onboarding Portal management
menu_order: 5
menu_node:
version: 2.0
github_link: cloud/onboarding/onboarding-portal.md
---

The Onboarding Portal gives business and technical users a central location to get started with a {{site.data.var.<ece>}} project and environments. If you are not sure who the Project Owner is, you can check the Project Owner page in the portal. If you need to change this user, contact Support with a ticket.

Through the portal, you can:

* View your initial environment site and Magento Admin
* Add a Technical Admin, a super user to help manage your project and branches
* Create a project schedule with dates and timelines
* Access your project environments, including a link to the Project Web Interface
* (Pro) Complete the provisioning form for Staging and Production
* Get started workflow for developers to set up their local and begin developing
* Complete a quick user acceptance test (UAT) checklist with links to further tests
* Complete a checklist and submit a ticket to go live

Browse through the portal to find helpful information and options to get started with your project code and release. For additional technical information, the portal includes links to {{site.data.var.<ece>}} documentation.

To open the portal and get started, [log in here](http://cloud.magento.com){:target="_blank"}.

The following sections detail important onboarding tasks to complete in the portal.

## About the portal {#overview}
The main page is Getting Started. It jumps you off into helpful pages in a suggested order from start to launch. The left side navigation includes the links from the Getting Started page. If you need to enter a support ticket or manage your account, use the top nagivation links.

The focus of this portal is for business users who may need a bit more planning and high level information to get started. For developers and the Technical Admin, deeper technical information and settings are available through the [Project Web Interface]({{page.baseurl}}cloud/before/before-project-owner.html).

## Set a Technical Admin {#tech-admin}
**Important: **This step is required for the Project Owner.

The Technical Admin is a user account in the Project Web Interface with super user permissions. This admin is your point of contact for all technical information and project management. Managing a project includes Git code branches, setting environment variables, and deploying software to environments.

The Technical Admin can be a Magento Solution Partner, a development consultant, or even yourself. In search of a development partner? Check our [Magento Solution Partner](https://magento.com/find-a-partner){:target="_blank"} network.

This user can help you create developer accounts with access to the Magento environments and code, configure technical aspects of the environments, and help with tickets with Support.

## Get developers prepared {#workspace}
The Development section provides the following checklists and information:

* **Development Workflow**: A high-level checklist for preparing your local, cloning code, creating branches, and developing your store. It provides a quick walk-through for the [First-time development setup]({{page.baseurl}}cloud/access-acct/first-time-setup.html) information.
* **Environments**: Provides links and information for your Pro and Starter account environments. Every active branch of code has a complete environment to fully test new features, extensions, and integrations. This page includes direct URL links, SSH link, CLI command access, and a link into the [Project Web Interface]({{page.baseurl}}cloud/before/before-project-owner.html).
* **Services**: Learn more about available and integrated services for your project. These services include Blackfire.io Profiler, New Relic APM, and Fastly. You can review and set credentials for these services through the [Project Web Interface]({{page.baseurl}}cloud/before/before-project-owner.html).
