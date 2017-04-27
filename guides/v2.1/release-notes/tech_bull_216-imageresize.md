---
layout: default 
group: release-notes
subgroup: 05_techbull
title: Technical Bulletin
menu_title: Image resize issue Magento version 2.1.6 (April 27,2016)
menu_node: 
menu_order: 4
version: 2.1
github_link: release-notes/tech_bull_216-imageresize.md
---

These instructions apply to anyone upgrading to Magento Community Edition (CE) or Magento Enterprise Edition (EE) version 2.1.6.

### Who needs this information?
You need to read this bulletin if you've upgraded to Magento 2.1.6 (CE or EE) and are experiencing any of the following issues: 

* all images on the product front end appear reduced in size, including the base image. 

* images are different sizes (occurs after you've run the CLI image resize command)

You cannot change the size of the base image size within the gallery using etc>view.xml. Instead, using this method increases image size as well as gallery size, which renders the image out of alignment.


### Background

Magento 2.1.6 introduced a change in how images are handled: By default, the value of  <frame></frame> is set to true. Previously, this value was not set to true by default. 

#### What does the <frame>/<frame> option do?

The <frame></frame> option adds white space around your image with the goal of imposing a specific width and height in `view.xml` while preserving the desired aspect ratio. 


If the image doesn't have a <frame> option,  Magento uses the `product_image_white_borders` option in Catalog module. This setting typically has a value of 1,  and but is overriden to 0 in Luma and Blank themes. If your theme doesn't include this option, then Magento will use the Catalog value  as the value for the `frame` option.


### Suggested workaround 

To prevent Magento from resizing images, you must include <frame>0</frame> within that image definition in `view.xml`. 



### More information

https://github.com/magento/magento2/issues/9385

https://github.com/magento/magento2/issues/9395











See one of the following sections for more information:

*	[Upgrade to Magento CE or EE version 2.1 *without* sample data](#tb-upgr-nosamp)
*	[Upgrade to Magento CE or EE version 2.1 with sample data](#tb-upgr-samp)
*	[Enterprise Edition only: Web Setup Wizard upgrade to Magento EE version 2.1 with sample data](#tb-upgr-samp-wiz)

### Upgrade to Magento CE or EE version 2.1 *without* sample data {#tb-upgr-nosamp}
Upgrades to version 2.1 without sample data can fail because of an issue with the Magento `composer-installer` component. It doesn't correctly detect code changes and therefore doesn't update the cache and compiled code directories properly. As a result, fatal errors display during the upgrade.

To address the issue, you must apply a patch.

#### Get the patch
Use the following instructions to get the patch named `MDVA-532.*`, then transfer it to your Magento server.

{% collapsible To get the patch: %}

{% include install/patch/get-patch.md %}

{% endcollapsible %}

#### Apply the patch
As the [Magento file system owner]({{page.baseurl}}install-gde/prereq/file-sys-perms-over.html), extract the patch in your Magento installation directory.

{% collapsible To apply the patch: %}

{% include install/patch/apply-patch.md %}

For example, to change to the `magento_user` and extract `MDVA-532.zip` into `/var/www/magento2`, enter:

	su magento_user && cd /var/www/magento2 && unzip -o MDVA-532.zip

{% endcollapsible %}

#### Complete your upgrade
After applying the patch, complete your upgrade as follows:

*	[Command-line upgrade]({{page.baseurl}}comp-mgr/cli/cli-upgrade.html)
*	[Start System Upgrade]({{page.baseurl}}comp-mgr/upgrader/upgrade-start.html)

### Command-line upgrade to Magento CE or EE version 2.1 with sample data {#tb-upgr-samp}

{%include install/sampledata/sample-data-rc1-cli.md %}

### Enterprise Edition only: Web Setup Wizard upgrade to Magento EE version 2.1 with sample data {#tb-upgr-samp-wiz}
Upgrades to Magento EE 2.1 with sample data can fail because of the following issues:

*	An issue with the Magento `composer-installer` component. It doesn't correctly detect code changes and therefore doesn't update the cache and compiled code directories properly. As a result, fatal errors display during the upgrade.

	We have a patch that resolves this issue.
*	Magento's `composer.lock` file specifies a non-existent component type; this issue prevents the upgrade with sample data from completing successfully.

	You can edit `composer.lock` to fix this issue.

#### Get the patch
Use the following instructions to get the patch named `MDVA-532.*`, then transfer it to your Magento server.

{% collapsible To get the patch: %}

{% include install/patch/get-patch-ee.md %}

{% endcollapsible %}

#### Apply the patch
As the [Magento file system owner]({{page.baseurl}}install-gde/prereq/file-sys-perms-over.html), extract the patch in your Magento installation directory.

{% collapsible To apply the patch: %}

{% include install/patch/apply-patch.md %}

For example, to change to the `magento_user` and extract `MDVA-532.zip` into `/var/www/magento2`, enter:

	su magento_user && cd /var/www/magento2 && unzip MDVA-532.zip

{% endcollapsible %}

#### Fix `composer.lock`

{% collapsible To fix composer.lock: %}

1.	As the Magento file system owner, open `<your Magento install dir>/composer.lock` in a text editor.
2.	Change the following entry.

	from:

		"type": "magento2-module-customer-balance",

	to:

		"type": "magento2-module",
3.	Save your changes to `composer.lock` and exit the text editor.

{% endcollapsible %}

#### Manually clear directories
Manually clear the `var/cache`, `var/page_cache`, and `var/generation` directories.

A sample command follows:

	rm -rf var/cache/* var/page_cache/* var/generation/*

#### Start the upgrade
Start your upgrade as discussed in [Start System Upgrade]({{page.baseurl}}comp-mgr/upgrader/upgrade-start.html).
