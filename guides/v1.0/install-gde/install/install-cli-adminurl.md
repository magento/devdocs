---
layout: default
group: install 
subgroup: T_Command-line installation
title: Display or change the Admin URI
menu_title: Display or change the Admin URI
menu_node: 
menu_order: 5
github_link: install-gde/install/install-cli-adminurl.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-install-cli-first">First steps</a>
*	<a href="#instgde-cli-subcommands-store-prereq">Prerequisites</a>
*	<a href="#instgde-cli-displayurl">Display the Admin URL</a>
*	<a href="#instgde-cli-changeurl">Change the Admin URL</a>

<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="instgde-cli-subcommands-db-prereq">Prerequisites</h2>
Before you run this command, you must <a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-deployment.html">Create or update the deployment configuration</a>.

<h2 id="instgde-cli-displayurl">Display the Admin URI</h2>
This section discusses how to use the command line to display the Admin Uniform Resource Identifier (<a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.2" target="_blank">URI</a>).

Command options:

	magento info:adminuri

You can also view the the Admin URI in `<your Magento install dir>/app/etc/env.php`. A snippet follows:

{% highlight php %}
<? php
  'backend' =>
  array (
    'frontName' => 'admin_e57arp',
  ),
  <?
{% endhighlight %}

<h2 id="instgde-cli-changeurl">Change the Admin URL</h2>
To change the Admin URI, use the <a href="{{ site.gdeurl }}/install-gde/install/install-cli-subcommands-deployment.html">magento setup:config:set</a> command.