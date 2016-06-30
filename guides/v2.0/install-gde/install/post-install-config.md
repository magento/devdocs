---
layout: default
group: install
subgroup: 02_config
title: Configure the Magento application
menu_title: Configure the Magento application
menu_node: parent
menu_order: 2
version: 2.0
github_link: install-gde/install/post-install-config.md
---

## Configure the Magento application
Now that you've finished installing the Magento application, you need to configure it. This topic provides some recommended configuration settings for Magento; the list is not complete so watch this space.

#### Contents
*	<a href="#post-install-cron">Set up cron</a>
*	<a href="#post-install-secy">Security settings</a>
*	<a href="#post-install-rewrites">Enable Apache server rewrites</a>
*	[Caching in a multi-webnode environment](#config-redis)
*	<a href="#post-install-server">Server settings</a>
*	<a href="#post-install-ee">Settings for Magento Enterprise Edition (EE) only</a>

<h2 id="post-install-cron">Set up cron</h2>
cron&mdash;the UNIX task scheduler&mdash;is critical to Magento's day-to-day operations. It schedules things like reindexing, newsletters, e-mails, sitemaps, and so on.

Immediately after finishing your Magento installation, set up a *crontab* for the Magento file system owner.

{% include config/setup-cron.md %}

<h2 id="post-install-secy">Security settings</h2>
After installation, we recommend the following:

*	Make sure your file ownership and permissions are set properly
*	We strongly recommend <a href="{{page.baseurl}}install-gde/install/cli/install-cli-adminurl.html">changing the default Admin URL</a> from `admin` to something else
*	Make sure the <a href="{{page.baseurl}}config-guide/secy/secy-xframe.html">`X-Frame-Option` HTTP header</a> is set properly.
*	Take precautions against cross-site scripting (XSS) by <a href="{{page.baseurl}}frontend-dev-guide/templates/template-security.html">securing your templates</a>
<!-- Set up roles and restricted users (Admin) -->

<h2 id="post-install-rewrites">Enable Apache server rewrites</h2>
If you use the Apache web server, you must enable server rewrites for pages to display properly. Otherwise, you'll see pages without styles and other issues.

<a href="{{page.baseurl}}install-gde/prereq/apache.html#apache-help-rewrite">Section on Apache server rewrites</a>

## Caching in a multi-webnode environment {#config-redis}
If you have multiple webnodes, you *cannot* use Magento's default file caching because there is no synchronization between webnodes. In other words, activity on one webnode is written to that webnode's file system only. Subsequent activity, if performed on another webnode, can result in unnecessary files being written or can result in errors.

Instead, use [Redis]({{page.baseurl}}config-guide/redis/config-redis.html) for both the default cache and the page cache.

<h2 id="post-install-server">Server settings</h2>
This section briefly discusses settings we recommend you consider for the server on which Magento runs. Some of these settings are not directly related to Magento; these are provided as suggestions only.

#### Log rotation

The UNIX `logrotate` utility enables you to administer systems that generate large numbers of log files.  It allows automatic rotation, compression, removal, and mailing of log files.  Each log file can be handled daily, weekly, monthly, or when the log file exceeds a specified size.

For more information, see the <a href="http://linuxconfig.org/logrotate-8-manual-page" target="_blank">logrotate man page</a> or a tutorial like this one on <a href="http://www.thegeekstuff.com/2010/07/logrotate-examples" target="_blank">geekstuff</a>.

#### Set up iptables rules to enable various Magento services to communicate.

Whether you have one server or many, you must open ports in the firewall to enable Magento services to communicate. For example, if you use the Solr search engine with Magento Enterprise Edition (EE), you must enable it to communicate with the web server. If you have multiple web nodes, you must enable them to communicate with each other.

More information:

*	Ubuntu: <a href="https://help.ubuntu.com/community/IptablesHowTo" target="_blank">Ubuntu documentation page</a>.
*	CentOS: <a href="http://wiki.centos.org/HowTos/Network/IPTables" target="_blank">CentOS how-to</a> and <a href="http://www.centos.org/docs/4/4.5/Security_Guide/s1-firewall-ipt-basic.html" target="_blank">CentOS reference page</a>.

#### Security Enhanced Linux (SELinux) rules

We don't recommend whether or not you use SELinux at all; however, if you use it, you must configure Magento services to communicate with each other similar to configuring iptables.

More information:

*	Ubuntu: <a href="https://debian-handbook.info/browse/stable/sect.selinux.html" target="_blank">Debian handbook</a>
*	CentOS: <a href="https://wiki.centos.org/HowTos/SELinux" target="_blank">CentOS wiki</a>

#### Set up an e-mail server

Magento requires an e-mail server. We don't recommend a particular server but you can try any of the following:

*	Postfix for CentOS (<a href="https://www.digitalocean.com/community/tutorials/how-to-install-postfix-on-centos-6" target="_blank">digitalocean tutorial</a>, <a href="https://www.centos.org/docs/5/html/Deployment_Guide-en-US/ch-email.html" target="_blank">CentOS documentation</a>)	
*	Postfix for Ubuntu (<a href="https://www.digitalocean.com/community/tutorials/how-to-install-and-setup-postfix-on-ubuntu-14-04" target="_blank">digitalocean tutorial</a>, <a href="https://help.ubuntu.com/community/MailServer" target="_blank">Ubuntu documentation</a>)

<h2 id="post-install-ee">Settings for Magento Enterprise Edition (EE) only</h2>
<img src="{{ site.baseurl }}common/images/ee-only_large.png">

You can configure the following only if you use Magento EE:

*	<a href="{{page.baseurl}}config-guide/solr/solr-overview.html">Apache Solr search</a>
*	<a href="{{page.baseurl}}config-guide/multi-master/multi-master.html">Split databases for checkout, order management, and other Magento database tables</a>
*	<a href="{{page.baseurl}}config-guide/mq/rabbitmq-overview.html">Message queues</a>

