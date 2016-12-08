---
layout: default
group: install-dock
subgroup: 01_over
title: Magento DevBox Installation reference
menu_title: Magento DevBox Installation reference
menu_node: 
menu_order: 2
version: 2.0
github_link: install-gde/docker/docker-install.md
---

## System requirements
To use the Magento DevBox, you must have a system with the following:

*	64-bit Windows 10 Pro, Enterprise and Education (1511 November update, Build 10586 or later)
*	Mac OS 10.10.3 "Yosemite" or later

The Magento DevBox is packaged with the following:

*	Debian GNU/Linux 8 (jessie)
*	Apache 2.4.10
*	PHP 7.0.10
*	MySQL 14.14 Distrib 5.5.52

## Prerequisites
This section discusses prerequisites you must complete before you install the Magento DevBox.

### Docker prerequisites
Before you continue, make sure you install and configure the following:

*	Mac OS and Windows: Install the [Docker software](https://www.docker.com/products/docker-toolbox){:target="_blank"}
*	Windows 10 only: 

    *   You must enable Hyper-V
	
        After Docker starts, it requests you to enable Hyper-V. A reboot is required. 
	
        You cannot work with Docker, VirtualBox, or Vagrant simultaneously on Windows 10! 
    *   Shared Drivers in Docker Settings should be enabled
    *   You must use PowerShell

       PowerShell should already be installed on Windows 10. If you've never used it, click the search button in the Windows taskbar and enter `PowerShell`, right click on PowerShell icon and choose "Run as administrator" to start it. Give permission to run scripts with command in the PowerShell console: `Set-ExecutionPolicy Unrestricted`

{% collapsibleh3 Magento authentication prerequisites %}

{% include install/auth-tokens-get.md %}

{% endcollapsibleh3 %}

## How DevBox works
Magento's DevBox installation is a step-by-step wizard that enables you to download a personalized script that sets up Magento DevBox on your machine. The script either installs the Magento software in a Docker container or creates a shared file system between existing Magento code and a Docker container.

### Common options
This section discusses options common to using a new Docker container or linking existing Magento code with a Docker container.

#### New container or existing code
The first question the wizard asks is whether or not you want to:

*	Install the Magento software in a new Docker container

	Choose this option if you haven't yet downloaded the Magento software.

*	Use an existing Magento installation

	Choose this option if you have already downloaded the Magento software but haven't installed it yet.

#### Project directory
When we build your Docker installation scripts, we need to know the path to your Magento installation relative to the directory in which your scripts are located. Because you must extract the scripts from a compressed archive, it might not be easy to specify a relative path.

The simplest option is to specify the absolute file system path to an existing Magento root directory, if any. If you haven't downloaded the Magento software yet, you can specify any value.

{% collapsibleh3 New container options %}
This section discusses options available to you if you install the Magento software in a new Docker container.

#### Choose your Magento edition
For new installations, you have the option to install Magento Community Edition (CE) or Enterprise Edition (EE). Both editions require authentication; to get Magento EE authentication credentials, you must be a licensed customer.

#### Optional sample data
Magento sample data provides a storefront based on the Luma theme outfitted with products, categories, customer registration, and so on. It functions just like a Magento storefront and you can manipulate prices, inventory, and promotional pricing rules using the Magento Admin.

#### Advanced options
To provide you more control over your Magento installation, we provide the following advanced options:

<table>
    <tbody>
        <tr>
            <th>Option</th>
            <th>Description</th>
        </tr>
    <tr>
        <td>Admin user name and password</td>
        <td>Enter the administrator user name and password to log in to the Magento Admin, the management application for your stores</td>
    </tr>
    <tr>
        <td>Composer directory</td>
        <td><p>Directory used to store your Magento authentication keys. You can choose either of the following:</p> <ul><li>Use existing: If your authentication keys are already located in a directory on your laptop, specify its location relative to your home directory.</li><li>Create new: DevBox stores the keys in a new directory.</li></ul></td>
    </tr>
    <tr>
        <td>Environment configuration</td>
        <td><p>Choose which of the following software to install:</p> <ul><li><a href="{{ page.baseurl }}config-guide/mq/rabbitmq-overview.html">RabbitMQ</a> (required for Magento EE, can be installed optionally for Magento CE)</li><li><a href="{{ page.baseurl }}http://devdocs.magento.com/guides/v2.1/config-guide/redis/config-redis.html#config-redis-overhtml">Redis</a> for full-page cache</li><li>Redis for the default Magento cache</li><li>Redis for session cache</li><li><a href="{{ page.baseurl }}config-guide/varnish/config-varnish.html#config-varnish-over.html">Varnish</a> for HTTP acceleration</li><li><a href="{{ site.gdeurl21 }}config-guide/elasticsearch/es-overview.html#overview">Elasticsearch</a> (used by Magento EE 2.1 and later only, can be installed optionally for Magento CE)</li></ul></td>
    </tr>
</tbody>
</table>

{% endcollapsibleh3 %}


{% collapsibleh3 Existing code options %}

TBD

{% endcollapsibleh3 %}