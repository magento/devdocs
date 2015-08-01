---
layout: default
group: compman
subgroup: ZZ_Troubleshooting
title: Troubleshoot cron
menu_title: Troubleshoot cron
menu_node: 
menu_order: 5
github_link: comp-mgr/trouble/cman/cron.md
---
<!-- This topic is referred to from Magento 2 code! Don't change the URL without informing engineering! -->
<!-- Referring file: TBD owned by Ogres -->

<h2 id="trouble-cron">Troubleshoot cron</h2>
If the cron readiness check fails, first determine whether a cron job is set up or not.

The following messages display in the Component Manager if no cron job is set up:

	Error from Setup Application Cron Script:
	Cron Job has not been configured yet
	PHP Version, PHP Settings and PHP Extensions Check will fail because they depend on this check

	Error from Updater Application Cron Script:
	Cron Job has not been configured yet

If one cron job has been set up but not the other, only one of the preceding messages displays.

<h3 id="trouble-cron-check">Check your existing crontab</h3>
To verify whether or not your crontab is set up:

1.	Log in to your Magento server.
1.	As a user with `root` privileges, see if a crontab is already set up.

		crontab -u <web server user name> -l

	For example, on CentOS

		crontab -u apache -l

	If no crontab has been set up for the user, the following message displays:

		no crontab for apache

	See one of the following sections for a solution to your issue.

<h3 id="trouble-cron-none">Solution: crontab not set up</h3>
If the web server user has no configured cron job, see TBD.

<h3 id="trouble-cron-errors">Solution: cron running with errors</h3>
Try running each command manually because the command might display ha elpful error messages.

**Run the setup application cron job**

TBD

**Run the updater cron job**

1.	Change to the `<your Magento install dir>/update` directory.
2.	Enter the following command:

		php cron.php

	Errors similar to the following indicate you have not yet run `composer install` to update dependencies for the updater application:

		PHP Warning:  require_once(/var/www/html/magento2/update/vendor/autoload.php): failed to open stream: No such file or directory in /var/www/html/magento2/update/app/bootstrap.php on line 13
		PHP Fatal error:  require_once(): Failed opening required '/var/www/html/magento2/update/vendor/autoload.php' (include_path='.:/usr/share/pear:/usr/share/php') in /var/www/html/magento2ce/update/app/bootstrap.php on line 13

	If that's the case, see <a href="{{ site.gdeurl }}comp-mgr/prereq/prereq_compman-updater.html">Set up cron jobs</a>.




