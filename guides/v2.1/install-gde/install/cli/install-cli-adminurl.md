---
layout: default
group: install_cli
title: Display or change the Admin URI
version: 2.1
github_link: install-gde/install/cli/install-cli-adminurl.md
redirect_from:
  - /guides/v1.0/install-gde/install/install-cli-adminurl.html
  - /guides/v2.0/install-gde/install/install-cli-adminurl.html
functional_areas:
  - Install
  - System
  - Setup
---

<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{page.baseurl}}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="instgde-cli-subcommands-db-prereq">Prerequisites</h2>
Before you run this command, you must <a href="{{page.baseurl}}/install-gde/install/cli/install-cli-subcommands-deployment.html">Create or update the deployment configuration</a>.

<h2 id="instgde-cli-displayurl">Display the Admin URI</h2>
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

<h2 id="instgde-cli-changeurl">Change the Admin URL</h2>
To change the Admin URI, use the <a href="{{page.baseurl}}/install-gde/install/cli/install-cli-subcommands-deployment.html">magento setup:config:set</a> command.