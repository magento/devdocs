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

In Magento version 2.2, we introduce a new way to deploy to production with minimal downtime. In addition, we provide the ability to maintain consistent configurations for all deployment systems.

We refer to this as _split deployment_ because the deployment process occurs on different systems.

Development system
:	Machine on which developers work to customize code; and install extensions, themes, and language packages from Magento Marketplace. In addition, you make all configuration changes on your development system. You can have many developer systems.

Build system
:	One system on which you deploy static assets and compile code for your production system. Because you build these assets on a system not in production, your production system's downtime is minimized.

Your build system does not have to have Magento installed on it. It needs only the Magento code but no database connection is required. Also, your build system doesn't need to be a physically separate server. 

Staging system
:	_Optional_. You can optionally set up a staging system to use for final testing of all integrated code, including User Acceptance Testing (UAT). Set up a staging system the same way you set up a production system. Except for the fact that staging is not your live store and doen't process orders from customers, it's identical to production.

Production system
:	Your live store. You should make minimal configuration changes here and no changes to websites, stores, store views, products, or the catalog. You should make all those types of changes in your development system.

## Reduced downtime deployment
Because you deploy static assets and compile code on a machine separate from your production system, you minimize downtime. Downtime on your production system is limited to the amount of time required to transfer static files and compiled code to the server.

### Use source control
To use split deployment, we assume your Magento code is in a source control repository. In this guide, we assume you're using Git but the choice of repositories is up to you. 

### Other deployment methods
You can optionally use other deployment methods, including secure copying with SCP or rsync; or you can use a tool like [Capistrano](http://capistranorb.com/documentation/overview/what-is-capistrano){:target="_blank"}. 

## Manage the configuration
Modeling after [factor 3 in the 12-factor app design](https://12factor.net/config){:target="_blank"}, we now store the configuration for each system in the system itself. We also provide a way to synchronize the configuration of your systems:

{% include config/split-deploy/config-mgmt-over1.md %}

For a complete list of configuration paths, see the following references:

*	[Other configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-most.html)
*	[Payment configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-payment.html)
*	[Sensitive and system-specific configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-sens.html)