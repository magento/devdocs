---
layout: default
group: config-guide
subgroup: 999_prod
title: Deployment overview
menu_title: Deployment overview
menu_node: 
menu_order: 11
version: 2.2
github_link: config-guide/prod/prod_deploy-over.md
---

In Magento version 2.2, we introduce a new way to deploy to production with minimal downtime. In addition, deployment includes the ability to maintain consistent configurations for all deployment systems.

We refer to this as _split deployment_ because the deployment process occurs on different systems.

Development system {#deploy-split-dev}
:	Machine on which developers work to customize code; and install extensions, themes, and language packages from Magento Marketplace. In addition, you make all configuration changes on your development system. You can have many developer systems.

Build system {#deploy-split-build}
:	One system on which you deploy static assets and compile code for your production system. Because you build these assets on a system not in production, your production system's downtime is minimized.

	Your build system does not have to have Magento installed on it. It needs only the Magento code but no database connection is required.

Staging system {#deploy-split-stage}
:	_Optional_. You can optionally set up a staging system to use for final testing of all integrated code, including User Acceptance Testing (UAT). Set up a staging system the same way you set up a production system. Except for the fact that staging is not your live store and doen't process orders from customers, it's identical to production.

Production system {#deploy-split-prod}
:	Your live store. You should make minimal configuration changes here and no changes to websites, stores, store views, products, or the catalog. You should make all those types of changes in your development system.

## Use source control
To use split deployment, we assume your Magento code is in a source control repository. In this guide, we assume you're using Git but the choice of repositories is up to you.



