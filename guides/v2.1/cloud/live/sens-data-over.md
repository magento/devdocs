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
In version 2.1.4, Magento Enterprise Cloud Edition decreased deployment downtime and improved how you manage your configuration:

*	Dramatically reduced downtime during deployment to a staging or production system.
*	Manage sensitive data (such as payment gateway passwords) without storing them on the file system, database, or source control.
*	Store environment-specific configuration data (such as store locale settings and minification settings) in a new configuration file, `app/etc/config.local.php`, which is managed in source control.

### Performance improvements
We achieve performance improvements by moving static view file generation from the deployment phase to the _build_ phase. The build phase doesn't affect your site's downtime; the time required to create CSS files, images, and so on, happens before the site deploys.

### Configuration improvements
Storing data such as your payment processor password in `config.php` on the file system and in the database isn't secure. Even if `config.php` is in source control, there's a risk sensitive data can be exposed to the world.

We help you protect sensitive data _and_ make it easy to manage environment-specific data as follows:

*	In your [staging]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-stage) and [production]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-prod) systems, you manage sensitive data using environment variables. 

	These sensitive values are not stored in `config.php`, anywhere in source control, or in the database. 

*	Environment-specific values like whether or not minification is enabled are stored in a new configuration file, `app/etc/config.local.php`, which is managed in source control.

	Managing `config.local.php` in source control means your settings for staging and production are always consistent. For example, you can enable minification in your [integration]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-int) system but disable it in both staging and production. After initially setting up the configuration, you don't need to touch it again because it's in source control.

	In addition, you can optionally manage `config.local.php` usign scripting or automatition tools. However, discussion of those tools is beyond the scope of this guide.

## Deployment downtime
Magento Enterprise Cloud Edition's built-in build and deploy process is all you need to improve deployment performance. You don't need to do anything else.

For details, see TBD.

## Manage your configuration and protect sensitive data {#cloud-config-manage-sens-over}
Magento's store configuration is usually located in the database, and some values are stored in `app/etc/config.php`. This can make the configuration of multiple systems (such as staging and prodution) difficult and it also potentially exposes sensitive values.

Starting with version 2.1.4, we provide the following options:

*	System-specific store configuration values are specified in a new configuration file, `app/etc/config.local.php`, which is in source control.

	Using `config.local.php`, you can, for example, enable minification in your integration system (where you are developing and testing) and disable minification in staging and production. Enabling minification has an adverse affect on performance so you should disable it in staging and production.

	Settings in `config.local.php` cannot be changed in the Magento Admin. The next section provides an overview of how to change these settings.

	Because the configuration is in source control, you don't have to remember to change these settings when you deploy code from staging to production. Staging's settings are stored in its `config.local.php`, which is different from production's. You use source control to track and version these settings.
*	Sensitive values, such as TBD, are specified in environment variables which are  available only to people who have access to your Magento Enterprise Cloud Edition project.

The following sections provide more detail.

### Manage system-specific settings {#cloud-config-specific-over}
System-specific settings refer to the configuration in the Magento Admin in **Stores** > Settings > **Configuration**. A list of settings can be found in [List of system-specific configuration settings](#cloud-config-specific-list).

#### Recommended procedure

![]({{ site.baseurl }}common/images/cloud_vars_simple.png){:width="500px"}

We recommend you use the following high-level roadmap to manage these settings:

Step 1. Push `config.local.php` to your integration server's `master` branch.

First, configure stores and settings in the `master` branch of your local system.

Then:

a.	Push those settings to your integration server's `master` branch.
b.	Generate `config.local.php` on your integration server.
c.	Transfer `config.local.php` to your local system so the two systems remain in synchronization with each other.
d.	Add `config.local.php` to Git (again, in the `master` branch).
e.	Push `config.local.php` to your integration server.

Step 2. Magento Enterprise Cloud Edition automatically deploys the settings to your integration server.

Step 3. To change settings:

a.	Make a configuration change in the Admin.
b.	Delete `config.local.php` on your integration server.
c.	Repeat Step 1.

After you've configured the integration server, Magento assists you in pushing the configuration to your staging or production servers.

All settings in `config.local.php` are unavailable in the Magento Admin; that is, you cannot change them in the Admin.

<div class="bs-callout bs-callout-warning" markdown="1">
We assume system-specific settings are the same in staging and production. Only sensitive configuration values should change in those systems and you manage them using environment variables.

To use different system-specific settings in staging and production, you can manually edit `config.local.php` but that is beyond the scope of this guide.
</div>

#### How configuration settings work
The following diagram shows how we determine values for configuration settings.

![How configuration variable values are determined]({{ site.baseurl }}common/images/cloud_vars_flow-diagram.png){:width="550px"}

As the diagram shows, 


#### List of system-specific configuration settings {#cloud-config-specific-list}
TBD: We don't currently have a reference list of configuration settings

### Manage sensitive settings
The Web Interface enables you to specify values of sensitive configuration settings for staging and production systems.

TBD, cannot show this now because the Web Interface doesn't support it yet