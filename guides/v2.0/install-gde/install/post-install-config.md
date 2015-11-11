---
layout: default
group: install
subgroup: B_Verify
title: Configure the Magento application
menu_title: Configure the Magento application
menu_node: parent
menu_order: 1
github_link: install-gde/install/post-install-config.md
---

## Configure the Magento application
Now that you've finished installing the Magento application, you need to configure it. This topic provides some recommended configuration settings for Magento; the list is not complete so watch this space.

#### Contents
*	<a href="#post-install-cron">Set up cron</a>
*	<a href="#post-install-secy">Security settings</a>
*	<a href="#post-install-rewrites">Enable Apache server rewrites</a>
*	<a href="#post-install-server">Server settings</a>
*	<a href="#post-install-ee">Settings for Magento Enterprise Edition (EE) only</a>

<h3 id="post-install-cron">Set up cron</h3>
cron&mdash;the UNIX task scheduler&mdash;is critical to Magento's day-to-day operations. It schedules things like reindexing, newsletters, e-mails, sitemaps, and so on.

Immediately after finishing your Magento installation, set up a *crontab* for the Magento file system owner.

As a user with `root` privileges, enter the following command:

	crontab -u <magento file system owner> -e

For example,

	crontab -u magento_user -e

A text editor displays. Enter the following:

	*/1 * * * * php <your Magento install dir>/bin/magento cron:run &
	*/1 * * * * php <your Magento install dir>/update/cron.php &
	*/1 * * * * php <your Magento install dir>/bin/magento setup:cron:run &

The first line enables cron for general use (reindexing, e-mails, and so on). The other lines run cron for the <a href="{{ site.gdeurl }}comp-mgr/bk-compman-upgrade-guide.html">Component Manager and System Upgrade utilities</a>.

For example, if you installed Magento in `/var/www/html/magento2`, enter

	*/1 * * * * php /var/www/html/magento2/bin/magento cron:run &
	*/1 * * * * php /var/www/html/magento2/update/cron.php &
	*/1 * * * * php /var/www/html/magento2/bin/magento setup:cron:run &

<h3 id="post-install-secy">Security settings</h3>
After installation, we recommend the following:

*	Make sure your file ownership and permissions are set properly
*	We strongly recommend <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-adminurl.html">changing the default Admin URL</a> from `admin` to something else
*	Make sure the <a href="{{ site.gdeurl }}config-guide/secy/secy-xframe.html">`X-Frame-Option` HTTP header</a> is set properly.
*	Take precautions against cross-site scripting (XSS) by <a href="{{ site.gdeurl }}frontend-dev-guide/templates/template-security.html">securing your templates</a>
<!-- Set up roles and restricted users (Admin) -->

<h3 id="post-install-rewrites">Enable Apache server rewrites</h3>
If you use the Apache web server, you must enable server rewrites for pages to display properly. Otherwise, you'll see pages without styles and other issues.

<a href="{{ site.gdeurl }}install-gde/prereq/apache.html#apache-help-rewrite">Section on Apache server rewrites</a>

<h3 id="post-install-server">Server settings</h3>
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

<h3 id="post-install-ee">Settings for Magento Enterprise Edition (EE) only</h3>
<img src="{{ site.baseurl }}common/images/ee-only_large.png">

You can configure the following only if you use Magento EE:

*	<a href="{{ site.gdeurl }}config-guide/solr/solr-overview.html">Apache Solr search</a>
*	<a href="{{ site.gdeurl }}config-guide/multi-master/multi-master.html">Split databases for checkout, order management, and other Magento database tables</a>
*	<a href="{{ site.gdeurl }}config-guide/mq/rabbitmq-overview.html">Message queues</a>

