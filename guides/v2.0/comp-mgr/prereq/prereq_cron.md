---
layout: default
group: compman
subgroup: B_prereq
title: Set up cron for Component Manager and System Upgrade
menu_title: Set up cron for Component Manager and System Upgrade
menu_order: 3
menu_node: 
github_link: comp-mgr/prereq/prereq_cron.md
redirect_from: /guides/v2.0/comp-mgr/prereq/prereq_compman-updater.html
---

<h2 id="compman-prereq-cron">Set up cron jobs</h2>
To enable the updater to work for both the Component Manager and System Upgrade, you must configure two cron jobs. Each cron job should run every minute.

Enable the cron jobs as <a href="http://ss64.com/bash/crontab.html" target="_blank">crontabs</a> for the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a> because that user runs the updater application for the Component Manager and System Upgrade. 

1.	As a user with `root` privileges, see if a crontab is already set up.

		crontab -u <Magento file system owner user name> -l

	For example, on CentOS

		crontab -u magento_user -l

	If no crontab has been set up for the user, the following message displays:

		no crontab for magento_user

2.	If necessary, set up the crontabs as follows as a user with root privileges:

		crontab -u <Magento file system owner user name> -e

	An editor displays. In the editor, enter the following:

		*/1 * * * * php <your Magento install dir>/update/cron.php &
		*/1 * * * * php <your Magento install dir>/bin/magento setup:cron:run &

	For example,

		*/1 * * * * php /var/www/html/magento2/update/cron.php &
		*/1 * * * * php /var/www/html/magento2/bin/magento setup:cron:run &	

3.	Save your changes to cron and exit the editor.

#### Next step

*	<a href="{{ site.gdeurl }}comp-mgr/compman-start.html">Run the Component Manager</a>
*	<a href="{{ site.gdeurl }}comp-mgr/upgrader/upgrade-start.html">Run System Upgrade</a>