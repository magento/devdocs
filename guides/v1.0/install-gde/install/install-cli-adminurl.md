---
layout: default
group: install 
subgroup: T_Command-line installation
title: Display or change the Admin URL
menu_title: Display or change the Admin URL 
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

<h2 id="instgde-cli-displayurl">Display the Admin URL</h2>
This section discusses how to use the command line to display the Admin URL.

Command options:

	magento TBD

<h2 id="instgde-cli-changeurl">Change the Admin URL</h2>
To change the Admin URL, edit its value in `<your Magento install dir>/app/etc/env.php`. A snippet follows:

{% highlight php %}
<? php
  'backend' =>
  array (
    'frontName' => 'admin_e57arp',
  ),
  <?
{% endhighlight %}

The Admin URL can contain alphanumeric values, the underscore character (`_`), and the dash character (`-`) only.