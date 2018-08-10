---
group: install_cli
subgroup: 05_Command-line installation
title: Display or change the Admin URI
menu_title: Display or change the Admin URI
menu_node:
menu_order: 6
version: 2.0
redirect_from:
  - /guides/v1.0/install-gde/install/install-cli-adminurl.html
  - /guides/v2.0/install-gde/install/install-cli-adminurl.html
functional_areas:
  - Install
  - System
  - Setup
---

## First steps   {#instgde-cli-before}

{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

## Prerequisites   {#instgde-cli-subcommands-db-prereq}

Before you run this command, you must <a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html">Create or update the deployment configuration</a>.

## Display the Admin URI   {#instgde-cli-displayurl}

This section discusses how to use the command line to display the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} Uniform Resource Identifier (<a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.2" target="_blank">URI</a>).

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

To change the Admin URI, use the <a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html">magento setup:config:set</a> command.

#### Related topics

*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-install.html">Installing the Magento software using the command line</a>
*	[Remove sample data modules or update sample data]({{ page.baseurl }}/install-gde/install/cli/install-cli-sample-data-other.html)
*	[Display or change the Admin URI]({{ page.baseurl }}/install-gde/install/cli/install-cli-adminurl.html)
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html">Enable or disable modules</a>
*	[Uninstall modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-mods.html)
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html">Create or update the deployment configuration</a>
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-maint.html">Enable or disable maintenance mode</a>
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db.html">Create the Magento database schema</a>
*	[Update the Magento database schema and data]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db-upgr.html)
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-store.html">Configure the store</a>
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-admin.html">Create a Magento administrator</a>
*	[Back up and roll back the file system, media, and database]({{ page.baseurl }}/install-gde/install/cli/install-cli-backup.html)
*	[Uninstall themes]({{ page.baseurl }}/install-gde/install/cli/install-cli-theme-uninstall.html)
*	[Uninstall language packages]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-langpk.html)
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall">Uninstall the Magento software</a>
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update">Update the Magento software</a>
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-reinstall">Reinstall the Magento software</a>
