---
group: install_pre
subgroup: Prerequisites
title: SELinux and iptables
menu_title: SELinux and iptables
menu_order: 200
version: 2.0
redirect_from: /guides/v1.0/install-gde/prereq/security.html
functional_areas:
  - Install
  - System
  - Setup
---

## SELinux   {#install-prereq-selinux}

<a href="http://selinuxproject.org/page/Main_Page" target="_blank">Security Enhanced Linux (SELinux)</a> enables CentOS and Ubuntu administrators greater access control over their servers. If you're using SELinux *and* Apache must initiate a connection to another host, you must run the commands discussed in this section.

<div class="bs-callout bs-callout-info" id="info">
  <p>Magento has no recommendation about using SELinux; you can use it for enhanced security if you wish. If you use SELinux, you must configure it properly or the Magento application will function unpredictably. If you choose to use SELinux, consult a resource like <a href="http://wiki.centos.org/HowTos/SELinux" target="_blank">the CentOS wiki</a> to set up rules to enable communication.</p>
</div>

### Suggestion for installing the Magento software with Apache

If you choose to enable SELinux, you might have issues running the installer unless you change the *security context* of some directories as follows:

	chcon -R --type httpd_sys_rw_content_t <your Magento install dir>/app/etc
	chcon -R --type httpd_sys_rw_content_t <your Magento install dir>/var
	chcon -R --type httpd_sys_rw_content_t <your Magento install dir>/pub/media
	chcon -R --type httpd_sys_rw_content_t <your Magento install dir>/pub/static

The preceding commands work only with the Apache web server. Because of the variety of configurations and security requirements, we don't guarantee these commands work in all situations. For more information, see:

*	<a href="http://linux.die.net/man/8/httpd_selinux" target="_blank">man page</a>
*	<a href="http://www.serverlab.ca/tutorials/linux/web-servers-linux/configuring-selinux-policies-for-apache-web-servers/" target="_blank">serverlab</a>

### Enable inter-server communication

If Apache and the database server are on the same host, you can skip this section and continue with <a href="#install-iptables">Opening Ports In Your Firewall</a>.

To enable Apache to initiate a connection to another host with SELinux enabled:

1.	To determine if SELinux is enabled, use the following command:

		getenforce

	`Enforcing` displays to confirm that SELinux is running.

2.	Enter one of the following commands:

	CentOS: `setsebool -P httpd_can_network_connect=1`

	Ubuntu: `setsebool -P apache2_can_network_connect=1`

## Opening Ports In Your Firewall   {#install-iptables}

Depending on your security requirements, you might find it necessary to open port 80 and other ports in your firewall. Because of the sensitive nature of networking security, Magento strongly recommends you consult with your IT department before proceeding. Following are some suggested references:

*	Ubuntu: <a href="https://help.ubuntu.com/community/IptablesHowTo" target="_blank">Ubuntu documentation page</a>.
*	CentOS: <a href="http://wiki.centos.org/HowTos/Network/IPTables" target="_blank">CentOS how-to</a> and <a href="http://www.centos.org/docs/4/4.5/Security_Guide/s1-firewall-ipt-basic.html" target="_blank">CentOS reference page</a>.

#### Related topics:

*	<a href="{{ page.baseurl }}/install-gde/prereq/apache.html">Apache</a>
*	<a href="{{ page.baseurl }}/install-gde/prereq/php-ubuntu.html">PHP 5.5, 5.6, or 7.0&mdash;Ubuntu</a>
*	<a href="{{ page.baseurl }}/install-gde/prereq/php-centos.html">PHP 5.5, 5.6, or 7.0&mdash;CentOS</a>
*	<a href="{{ page.baseurl }}/install-gde/prereq/mysql.html">MySQL</a>
*	<a href="{{ page.baseurl }}/install-gde/prereq/optional.html">Installing optional software</a>
*	[How to get the Magento software]({{ page.baseurl }}/install-gde/bk-install-guide.html)
