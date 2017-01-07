---
layout: default
group: cloud
subgroup: 40_live
title: Overview of deployment performance and sensitive data 
menu_title: Overview of deployment performance and sensitive data  
menu_order: 11
menu_node: 
level3_menu_node: level3child
level3_subgroup: sens-data
version: 2.1
github_link: cloud/live/sens-data-over.md
---

## Deployment and security in a nutshell
In version 2.1.4, the Magento Enterprise Cloud Edition enables you to dramatically reduce deployment time to a staging or production system and to securely manage sensitive data (such as payment gateway passwords).

Together, these changes make your system faster _and_ more secure.

### Performance improvements
We achieve performance improvements by moving static view file generation from the Magento Cloud Enterprise Edition deployment phase to the _build_ phase. The build phase doesn't affect downtime; the time required to create CSS files, images, and so on, happens before the site deploys.

Deploying static content in the build phase is dramatically faster because the build phase doesn't result in any downtime in your staging or production system.

### Protect sensitive data
Storing data like your payment processor password in `config.php` on the file system isn't secure. Even if it's in source control, there's a risk sensitive data can be exposed to the world.

We help you protect sensitive data _and_ make it easy to manage environment-specific data as follows:

*	In your staging and production environments, you manage sensitive data using environment variables. 

	These sensitive values are not stored in `config.php`, anywhere in source control, or in the database. 

*	Environment-specific values like whether or not minification is enabled are stored in a new configuration file, `app/etc/config.local.php`, which is managed in source control.

	Managing `config.local.php` in source control means your settings for staging and production are always consistent. For example, you can enable minification in your integration environment but disable it in both staging and production.

	In addition, you can optionally manage `config.local.php` usign scripting or automatition tools. Discussion of those tools is beyond the scope of this guide.

## Improve performance
Magento Enterprise Cloud Edition's built-in build and deploy process is all you need to improve deployment performance. You don't need to do anything else.

For details about how it works, see TBD.

## Manage your configuration and protect sensitive data
TBD