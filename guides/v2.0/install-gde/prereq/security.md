---
layout: default
group: install
subgroup: Prerequisites
title: Security-related prerequisites
menu_title: Security-related prerequisites
menu_order: 10
github_link: install-gde/prereq/security.md
redirect_from: /guides/v1.0/install-gde/prereq/security.html
---

<h2 id="install-prereq-selinux">SELinux Prerequisite</h2>
<a href="http://selinuxproject.org/page/Main_Page" target="_blank">Security Enhanced Linux (SELinux)</a> enables CentOS and Ubuntu administrators greater access control over their servers. If you're using SELinux <em>and</em> Apache must initiate a connection to another host, you must run the commands discussed in this section.

If Apache and the database server are on the same host, you can skip this section and continue with <a href="#install-iptables">Opening Ports In Your Firewall</a>.

To enable Apache to initiate a connection to another host with SELinux enabled:

1.	To determine if SELinux is enabled, use the following command:

	<pre>getenforce</pre>

	<code>Enforcing</code> displays to confirm that SELinux is running.

2.	Enter one of the following commands:

	CentOS: `setsebool -P httpd_can_network_connect=1`

	Ubuntu: `setsebool -P apache2_can_network_connect=1`

<h2 id="install-iptables">Opening Ports In Your Firewall</h2>
Depending on your security requirements, you might find it necessary to open port 80 and other ports in your firewall. Because of the sensitive nature of networking security, Magento strongly recommends you consult with your IT department before proceeding. Following are some suggested references:

*	Ubuntu: <a href="https://help.ubuntu.com/community/IptablesHowTo" target="_blank">Ubuntu documentation page</a>.
*	CentOS: <a href="http://wiki.centos.org/HowTos/Network/IPTables" target="_blank">CentOS how-to</a> and <a href="http://www.centos.org/docs/4/4.5/Security_Guide/s1-firewall-ipt-basic.html" target="_blank">CentOS reference page</a>.

#### Related topics:

*	<a href="{{ site.gdeurl }}install-gde/prereq/apache.html">Apache</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">PHP 5.5 or 5.6&mdash;Ubuntu</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/php-centos.html">PHP 5.5 or 5.4&mdash;CentOS</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">MySQL</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/optional.html">Installing optional software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Install Composer and Clone the Magento repository</a>
*	<a href="{{ site.gdeurl }}install-gde/install/prepare-install.html">Update installation dependencies</a>