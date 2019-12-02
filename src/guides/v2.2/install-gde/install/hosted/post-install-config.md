---
group:
subgroup: 02_config
title: Configure the Magento application
menu_title: Configure the Magento application
menu_node: parent
menu_order: 2
functional_areas:
  - Install
  - System
  - Setup
---

Now that you've finished installing the Magento application, you need to configure it. This topic provides some recommended configuration settings for Magento; the list is not complete so watch this space.

## Set up cron {#post-install-cron}

cron&mdash;the UNIX task scheduler&mdash;is critical to Magento's day-to-day operations. It schedules things like reindexing, newsletters, e-mails, sitemaps, and so on.

Immediately after finishing your Magento installation, set up a *crontab* for the [Magento file system owner](https://glossary.magento.com/magento-file-system-owner).

{% include config/setup-cron_2.2.md %}

## Security settings {#post-install-secy}

After installation, we recommend the following:

*  Make sure your file ownership and permissions are set properly
*  We strongly recommend [changing the default Admin URL]({{ page.baseurl }}/install-gde/install/cli/install-cli-adminurl.html) from `admin` to something else
*  Make sure the [`X-Frame-Option` HTTP header]({{ page.baseurl }}/config-guide/secy/secy-xframe.html) is set properly.
*  Take precautions against cross-site scripting (XSS) by [securing your templates]({{ page.baseurl }}/extension-dev-guide/xss-protection.html)

## Enable Apache server rewrites {#post-install-rewrites}

If you use the Apache web server, you must enable server rewrites for pages to display properly. Otherwise, you'll see pages without styles and other issues.

[Section on Apache server rewrites]({{ page.baseurl }}/install-gde/prereq/apache.html#apache-help-rewrite)

## Caching in a multi-webnode environment {#config-redis}

If you have multiple webnodes, you *cannot* use Magento's default file caching because there is no synchronization between webnodes. In other words, activity on one webnode is written to that webnode's file system only. Subsequent activity, if performed on another webnode, can result in unnecessary files being written or can result in errors.

Instead, use [Redis]({{ page.baseurl }}/config-guide/redis/config-redis.html) for both the default [cache](https://glossary.magento.com/cache) and the page cache.

## Server settings {#post-install-server}

This section briefly discusses settings we recommend you consider for the server on which Magento runs. Some of these settings are not directly related to Magento; these are provided as suggestions only.

### Log rotation

The UNIX `logrotate` utility enables you to administer systems that generate large numbers of log files.  It allows automatic rotation, compression, removal, and mailing of log files.  Each log file can be handled daily, weekly, monthly, or when the log file exceeds a specified size.

For more information, see one of the following:

*  [HowTo: The Ultimate Logrotate Command Tutorial with 10 Examples](https://www.thegeekstuff.com/2010/07/logrotate-examples)
*  [stackexchange](http://unix.stackexchange.com/questions/85662/how-to-properly-automatically-manually-rotate-log-files-for-production-rails-app)
*  [logrotate man page](http://linuxconfig.org/logrotate-8-manual-page)

### Set up iptables rules to enable various Magento services to communicate.

Whether you have one server or many, you must open ports in the firewall to enable Magento services to communicate. For example, if you use the Solr search engine with {{site.data.var.ee}}, you must enable it to communicate with the web server. If you have multiple web nodes, you must enable them to communicate with each other.

More information:

*  Ubuntu: [Ubuntu documentation page](https://help.ubuntu.com/community/IptablesHowTo).
*  CentOS: [CentOS reference page](http://wiki.centos.org/HowTos/Network/IPTables).

### Security Enhanced Linux (SELinux) rules

We don't recommend whether or not you use SELinux at all; however, if you use it, you must configure Magento services to communicate with each other similar to configuring iptables.

More information:

*  Ubuntu: [Debian handbook](https://debian-handbook.info/browse/stable/sect.selinux.html)
*  CentOS: [CentOS wiki](https://wiki.centos.org/HowTos/SELinux)

### Set up an e-mail server

Magento requires an e-mail server. We don't recommend a particular server but you can try any of the following:

*  Postfix for CentOS ([digitalocean tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-postfix-on-centos-6), [CentOS documentation](https://www.centos.org))
*  Postfix for Ubuntu ([digitalocean tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-and-setup-postfix-on-ubuntu-14-04), [Ubuntu documentation](https://help.ubuntu.com/community/MailServer))

## Settings for {{site.data.var.ee}} only {#post-install-ee}

You can configure the following only if you use {{site.data.var.ee}}:

*  [Elasticsearch]({{ page.baseurl }}/config-guide/elasticsearch/es-overview.html)
*  [Split databases for checkout, order management, and other Magento database tables]({{ page.baseurl }}/config-guide/multi-master/multi-master.html)
*  [Message queues]({{ page.baseurl }}/config-guide/mq/rabbitmq-overview.html)
