---
group: software-update-guide
subgroup: 50_trouble
title: Troubleshoot upgrade issues
menu_title: Troubleshoot upgrade issues
menu_node:
menu_order: 5
functional_areas:
  - Upgrade
---

## Troubleshoot upgrade issues

This section discusses upgrade issues to Magento version 2.0.4. Symptoms include any of the following errors during the upgrade process:

### `Strict Notice` exception
Error text follows:

	[Exception]                                                                                                                                                
	Strict Notice: Declaration of Magento\Store\Model\ResourceModel\Website\Interceptor::afterLoad() should be compatible with Magento\Framework\Model\ResourceModel\Db\AbstractDb::afterLoad(Magento\Framework\DataObject $object) in /var/www/html/magento2ce/var/generation/Magento/Store/Model/ResourceModel/Website/Interceptor.php on line 7   

### PHP fatal error

A snippet from this error follows:

	PHP Fatal error:  Cannot instantiate interface Magento\Framework\MessageQueue\ConfigInterface in /var/www/html/eddie/project-enterprise-edition/vendor/magento/framework/ObjectManager/Factory/Dynamic/Developer.php on line 73
	PHP Stack trace:
	PHP   1. {main}() /var/www/html/eddie/project-enterprise-edition/bin/magento:0
	PHP   2. Magento\Framework\Console\Cli->__construct() /var/www/html/eddie/project-enterprise-edition/bin/magento:26
	PHP   3. Symfony\Component\Console\Application->__construct() /var/www/html/eddie/project-enterprise-edition/vendor/magento/framework/Console/Cli.php:94
	... more ...

## Solution

To resolve these errors, perform the following tasks:

1.	Log in to your Magento server as, or switch to, the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/apache-user.html).

	If you don't have access to the Magento server file system, connect to it using an FTP application.
2.	Remove the following files so you can upgrade again:

		<magento_root>/var/.maintenance.flag
		<magento_root>/var/.update_in_progress.flag
		<magento_root>/var/cache/*
		<magento_root>/var/page_cache/*
		<magento_root>/var/generation/*

3.	Run your upgrade again, making sure to complete _all tasks_ discussed in [Run System Upgrade]({{ page.baseurl }}/comp-mgr/upgrader/upgrade-start.html).


### `var/session` permissions failure {#compman-upgr-perms}
If your Magento application is set to write session data to the `<magento_root>/var/session` directory, you must set permissions on that directory before you upgrade.

[How to find where Magento stores session files]({{ page.baseurl }}/config-guide/sessions.html).

To verify whether or not sessions are stored in `<magento_root>/var/session`, log in to your Magento server, or switch to, [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/apache-user.html) and enter the following command:

	ls <your Magento file install dir>/var/session

For example, if Magento is installed in `/var/www/magento2`, enter:

	ls /var/www/magento2/var/session

If there are files in that directory, you must set permissions; if there are no files in that directory, you can skip the remainder of this topic and continue with [Step 4. Upgrade]({{ page.baseurl }}/comp-mgr/upgrader/upgrade.html).

To set file system permissions before upgrade:

1.	Log in to your Magento server as, or switch to, the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/apache-user.html).
2.	Enter one of the following commands:

	*	One Magento user (typical of shared hosting):

			cd <magento_root>
			find var -type f -exec chmod u+w {} +
			find var -type d -exec chmod u+w {} +

		If you don't have access to a command line, use a file manager tool provided by your hosting provider to set permissions.

	*	Two Magento users:

			cd <magento_root>
			find var -type f -exec chmod g+w {} +
			find var -type d -exec chmod g+ws {} +
			chown -R :<web server group> .

		For example, on CentOS where the web server group is typically `apache`:

			cd /var/www/html/magento2
			find var -type f -exec chmod g+w {} +
			find var -type d -exec chmod g+ws {} +
			chown -R :apache .

For additional details about file ownership and permissions, see [Set pre-installation ownership and permissions]({{ page.baseurl }}/install-gde/prereq/file-system-perms.html).
