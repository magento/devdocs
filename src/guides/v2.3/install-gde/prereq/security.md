---
group: installation-guide
subgroup: Prerequisites
title: SELinux and iptables
menu_title: SELinux and iptables
menu_order: 200
functional_areas:
  - Install
  - System
  - Setup
---

## SELinux {#install-prereq-selinux}

[Security Enhanced Linux (SELinux)](http://selinuxproject.org/page/Main_Page) enables CentOS and Ubuntu administrators greater access control over their servers. If you are using SELinux *and* Apache must initiate a connection to another host, you must run the commands discussed in this section.

{:.bs-callout-info}
Magento has no recommendation about using SELinux; you can use it for enhanced security if you wish. If you use SELinux, you must configure it properly or the Magento application will function unpredictably. If you choose to use SELinux, consult a resource like [the CentOS wiki](http://wiki.centos.org/HowTos/SELinux) to set up rules to enable communication.

### Suggestion for installing the Magento software with Apache

If you choose to enable SELinux, you might have issues running the installer unless you change the *security context* of some directories as follows:

```bash
chcon -R --type httpd_sys_rw_content_t <magento_root>/app/etc
```

```bash
chcon -R --type httpd_sys_rw_content_t <magento_root>/var
```

```bash
chcon -R --type httpd_sys_rw_content_t <magento_root>/pub/media
```

```bash
chcon -R --type httpd_sys_rw_content_t <magento_root>/pub/static
```

```bash
chcon -R --type httpd_sys_rw_content_t <magento_root>/generated
```

The preceding commands work only with the Apache web server. Because of the variety of configurations and security requirements, we do not guarantee these commands work in all situations. For more information, see:

*  [man page](http://linux.die.net/man/8/httpd_selinux)
*  [serverlab](http://www.serverlab.ca/tutorials/linux/web-servers-linux/configuring-selinux-policies-for-apache-web-servers/)

### Enable inter-server communication

If Apache and the database server are on the same host, use the following command if you plan to use integrations that use `curl` (ex. Paypal and USPS).
To enable Apache to initiate a connection to another host with SELinux enabled:

1. To determine if SELinux is enabled, use the following command:

   ```bash
   getenforce
   ```

   `Enforcing` displays to confirm that SELinux is running.

   *  CentOS: `setsebool -P httpd_can_network_connect=1`
   *  Ubuntu: `setsebool -P apache2_can_network_connect=1`

## Opening Ports In Your Firewall {#install-iptables}

Depending on your security requirements, you might find it necessary to open port 80 and other ports in your firewall. Because of the sensitive nature of networking security, Magento strongly recommends you consult with your IT department before proceeding. Following are some suggested references:

*  Ubuntu: [Ubuntu documentation page](https://help.ubuntu.com/community/IptablesHowTo)
*  CentOS: [CentOS how-to](http://wiki.centos.org/HowTos/Network/IPTables).

{:.ref-header}
Related topics

*  [Apache]({{ page.baseurl }}/install-gde/prereq/apache.html)
*  [PHP]({{page.baseurl}}/install-gde/prereq/php-settings.html)
*  [MySQL]({{ page.baseurl }}/install-gde/prereq/mysql.html)
*  [Installing optional software]({{ page.baseurl }}/install-gde/prereq/optional.html)
*  [How to get the Magento software]({{ page.baseurl }}/install-gde/bk-install-guide.html)
