---
layout: default
group: config-guide
subgroup: 999_prod
title: Deployment general overview
menu_title: Deployment general overview
menu_node: 
level3_menu_node: level3child
level3_subgroup: deploy-over
menu_order: 11
version: 2.2
github_link: config-guide/prod/prod_deploy-over.md
---

In Magento version 2.2, we introduce a new way to deploy to production with minimal downtime. We refer to this as _split deployment_ because the deployment process occurs on different systems.

We also provide the ability to maintain consistent configurations for all split deployment systems. It's a simple but powerful model that enables you to separate ordinary configuration settings from either system-specific settings (like host and port) or sensitive settings (such as names and passwords).

## Reduced downtime deployment
Because you deploy static assets and compile code on a machine separate from your production system, you minimize downtime. Downtime on your production system is limited to the amount of time required to transfer static files and compiled code to the server.

## Deployment systems
We use the following terms to describe the systems involved with deployment.

Development system
:	Machine on which developers work to customize code; and install extensions, themes, and language packages from Magento Marketplace. In addition, you make all configuration changes on your development system. You can have many developer systems.

Build system
:	One system on which you deploy static assets and compile code for your production system. Because you build these assets on a system not in production, your production system's downtime is minimized.

Your build system does not have to have Magento installed on it. It needs only the Magento code but no database connection is required. Also, your build system doesn't need to be a physically separate server. 

Staging system
:	_Optional_. You can optionally set up a staging system to use for final testing of all integrated code, including User Acceptance Testing (UAT). Set up a staging system the same way you set up a production system. Except for the fact that staging is not your live store and doen't process orders from customers, it's identical to production.

Production system
:	Your live store. You should make minimal configuration changes here and no changes to websites, stores, store views, products, or the catalog. You should make all those types of changes in your development system.

## Other deployment methods
You can optionally use other deployment methods, including secure copying with SCP or rsync; or you can use a tool like [Capistrano](http://capistranorb.com/documentation/overview/what-is-capistrano){:target="_blank"}. 

## Manage the configuration
Modeling after [factor 3 in the 12-factor app design](https://12factor.net/config){:target="_blank"}, Magento now stores the configuration for each system in the system itself. We also provide a way to synchronize the configuration of your systems:

{% include config/split-deploy/config-mgmt-over1.md %}

For a complete list of configuration paths, see the following references:

*	[Sensitive and system-specific configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-sens.html)
*	[Payment configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-payment.html)
*	[Other configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-most.html)
*	[Magento Enterprise B2B Extension configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-b2b.html)

## Assumptions
To use split deployment, we assume you are:

*	An experienced system integrator with excellent knowledge of Magento configuration options.
*	Managing a large Magento site (thosands of stock-keeping units (SKUs)) and want to keep production site downtime to a miniumum.
*	Somewhat knowledgeable about PHP programming.
*	Experienced with source control methods.

	To use split deployment, we assume your Magento code is in a source control repository. In this guide, we assume you're using Git but the choice of repositories is up to you. 

#### Next step
[Deployment technical overview]({{ page.baseurl }}config-guide/prod/prod_deploy-over-tech.html)