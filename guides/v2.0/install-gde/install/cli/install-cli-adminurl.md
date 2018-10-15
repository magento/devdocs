---
group: installation-guide
subgroup: 05_Command-line installation
title: Display or change the Admin URI
menu_title: Display or change the Admin URI
menu_node:
menu_order: 6
redirect_from:
  - /guides/v1.0/install-gde/install/install-cli-adminurl.html
  - /guides/v2.0/install-gde/install/install-cli-adminurl.html
functional_areas:
  - Install
  - System
  - Setup
---

## First steps   {#instgde-cli-before}

{% include install/first-steps-cli.md %}
In addition to the command arguments discussed here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common).

## Prerequisites   {#instgde-cli-subcommands-db-prereq}

Before you run this command, you must [Create or update the deployment configuration]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html).

## Display the Admin URI   {#instgde-cli-displayurl}

This section discusses how to use the command line to display the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} Uniform Resource Identifier ([URI](http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.2){: target="_blank"}).

Command options:

	magento info:adminuri

A sample result follows:

	Admin Panel URI: /admin_1wgrah

You can also view the Admin URI in `<your Magento install dir>/app/etc/env.php`. A snippet follows:

{% highlight php startinline=true %}
  'backend' =>
  array (
    'frontName' => 'admin_1wgrah',
  ),
{% endhighlight %}

## Change the Admin URL   {#instgde-cli-changeurl}

To change the Admin URI, use the [magento setup:config:set]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html) command.

#### Related topics

*	[Installing the Magento software using the command line]({{ page.baseurl }}/install-gde/install/cli/install-cli-install.html)
*	[Remove sample data modules or update sample data]({{ page.baseurl }}/install-gde/install/cli/install-cli-sample-data-other.html)
*	[Display or change the Admin URI]({{ page.baseurl }}/install-gde/install/cli/install-cli-adminurl.html)
*	[Enable or disable modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html)
*	[Uninstall modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-mods.html)
*	[Create or update the deployment configuration]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html)
*	[Enable or disable maintenance mode]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-maint.html)
*	[Create the Magento database schema]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db.html)
*	[Update the Magento database schema and data]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db-upgr.html)
*	[Configure the store]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-store.html)
*	[Create a Magento administrator]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-admin.html)
*	[Back up and roll back the file system, media, and database]({{ page.baseurl }}/install-gde/install/cli/install-cli-backup.html)
*	[Uninstall themes]({{ page.baseurl }}/install-gde/install/cli/install-cli-theme-uninstall.html)
*	[Uninstall language packages]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-langpk.html)
*	[Uninstall the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall)
*	[Update the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update)
*	[Reinstall the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-reinstall)
