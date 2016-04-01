---
layout: default 
group: compman
subgroup: 15_UseUpgrade
title: Step 4. Upgrade
menu_title: Step 4. Upgrade
menu_node: 
menu_order: 20
github_link: comp-mgr/upgrader/upgrade.md
---

## Set file system permissions {#compman-upgr-perms}
If your Magento application is set to write session data to the `<your Magento install dir>/var/session` directory, you must set permissions on that directory before you upgrade.

[How to find where Magento stores session files]({{ site.gdeurl }}config-guide/sessions.html).

To verify whether or not sessions are stored in `<your Magento install dir>/var/session`, log in to your Magento server, or switch to, [Magento file system owner]({{ site.gdeurl }}install-gde/prereq/apache-user.html) and enter the following command:

	ls <your Magento file install dir>/var/session

For example, if Magento is installed in `/var/www/magento2`, enter:

	ls /var/www/magento2/var/session

If there are files in that directory, you must set permissions; if there are no files in that directory, you can skip the remainder of this section and continue with [Complete the upgrade](#upgrade-finish).

To set file system permissions before upgrade:

1.	Log in to your Magento server as, or switch to, the [Magento file system owner]({{ site.gdeurl }}install-gde/prereq/apache-user.html).
2.	Enter the following command:

		chmod -R 770 <your Magento install dir>/var/session

	For example,

		chmod -R 770 /var/www/magento2/var/session
3.	Continue with the next section.

## Remove contents from the code generation and dependency injection directories {#upgrade-dirs}
Before you continue, you must remove the contents of the following directories, either using the command line or an FTP application:

	<your Magento install dir>/var/generation
	<your Magento install dir>/var/di

Continue with the next section.    

## Complete the upgrade {#upgrade-finish}
The components you're upgrading display. The following figure shows an example.

<img src="{{ site.baseurl }}common/images/upgr_upgrade.png" width="550px" alt="Click upgrade to complete the task">


To complete the upgrade, click **Upgrade**. If the upgrade is successful, a page similar to the following displays.

<img src="{{ site.baseurl }}common/images/upgr_success.png" width="350px" alt="Your upgrade was successful">

Messages similar to the following display in the Console Log:

<img src="{{ site.baseurl }}common/images/upgrade-success-consolelog.png" width="650px">

## Enable cache types {#upgrade-cache}
After your upgrade successfully completes, you can enable the Magento cache as follows:

1.	Log in to the Magento Admin as an administrator.
2.	Click **System** > Tools > **Cache Management**.
3.	At the top of the page, from the **Mass actions** list, click **Select all**.
4.	From the list above, click **Enable**.
5.	Click **Submit**.

	The following figure shows all cache types enabled.

	![All cache types are enabled]({{ site.baseurl }}common/images/upgr_all-cache-enabled.png){:width="700px"}


