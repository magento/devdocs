---
layout: default
group: compman
subgroup: B_prereq
title: Prerequisites
menu_title: Prerequisites
menu_order: 1
menu_node: parent
github_link: comp-mgr/prereq/prereq_compman-updater.md
---

<h2 id="compman-prereq-overview">Prerequisites for the Component Manager and System Upgrade</h2>
Before you can use the Component Manager and System Upgrade, you must do all of the following:

*	*Contributing developers only*. Set up the Magento updater application

	This is required only if you are a contributing developer; that is, you cloned the Magento 2 GitHub repository. Contributing developers already cloned the updater repository as part of installation; to review, see <a href="{{ site.gdeurl }}install-gde/prereq/prereq_updater.html">Set up the updater</a>.

	The updater synchronizes with Magento Connect and gets the latest versions of all available components. The updater works for both the Component Manager and System Upgrade.
*	<a href="#compman-prereq-cron">Set up cron jobs</a>

	Cron scans for component and core module updates every minute.

<h2 id="compman-prereq-cron">Set up cron jobs</h2>
To enable the updater to work for both the Component Manager and System Upgrade, you must configure two cron jobs. Each cron job should run every minute.

Enable the cron jobs as <a href="http://ss64.com/bash/crontab.html" target="_blank">crontabs</a> for the web server user because that user runs the Component Manager and System Upgrade. In this topic, it's assumed that the web server user name is `apache` for CentOS and `www-data` for Ubuntu.

If you're not sure, enter `ps aux | egrep '(apache|httpd)'`

1.	As a user with `root` privileges, see if a crontab is already set up.

		crontab -u <web server user name> -l

	For example, on CentOS

		crontab -u apache -l

	If no crontab has been set up for the user, the following message displays:

		no crontab for apache

2.	If necessary, set up the crontabs as follows as a user with root privileges:

		crontab -u <web server user name> -e

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