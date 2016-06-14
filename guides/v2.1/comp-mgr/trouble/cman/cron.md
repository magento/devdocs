---
layout: default
group: compman
subgroup: 50_trouble
title: Troubleshoot cron
menu_title: Troubleshoot cron
menu_node: 
menu_order: 7
version: 2.1
github_link21: comp-mgr/trouble/cman/cron.md
---

<h2 id="trouble-cron">Troubleshoot cron</h2>
Following are symptoms of cron issues:

*	Your update or upgrade never runs; it stays in a `pending` state
*	An error message about the PHP setting `$HTTP_RAW_POST_DATA` displays even though it's set properly
*	The cron readiness check fails

	Possible errors include non-writable paths and cron not set up. An example follows:

	<img src="{{ site.baseurl }}common/images/upgr-tshoot-no-cron2.png">
*	The PHP readiness check doesn't display the PHP version as the following figure shows.

	<img src="{{ site.baseurl }}common/images/upgr-tshoot-no-cron.png">
*	The following error displays in the Magento Admin:

	![cron isn't running]({{ site.baseurl }}common/images/compman-cron-not-running.png)

	To see the error, you might need to click **System Messages** at the top of the window as follows:

	![System Messages]({{ site.baseurl }}common/images/compman_sys-messages.png)

<h3 id="trouble-cron-check">Check your existing crontab</h3>
To verify whether or not your crontab is set up:

1.	Log in to your Magento server.
1.	As a user with `root` privileges, see if a crontab is already set up.

		crontab -u <Magento file system owner name> -l

	For example, on CentOS

		crontab -u magento_user -l

	If no crontab has been set up for the user, the following message displays:

		no crontab for magento_user

	See one of the following sections for a solution to your issue.

<h3 id="trouble-cron-none">Solution: crontab not set up</h3>
To verify your cron jobs are set up properly, see <a href="{{ site.gdeurl21 }}install-gde/install/post-install-config.html#post-install-cron">Set up cron jobs</a>.

### Solution: cron running from incorrect PHP binary
If your cron job uses a PHP binary different from the web server plug-in, PHP settings errors might display.

To verify which PHP binary to use:

1.	Create a [`phpinfo.php`]({{ site.gdeurl21 }}install-gde/prereq/optional.html#install-optional-phpinfo) page.

	(Sometimes you have a different `php.ini` for the PHP command line and the web server. The `php.ini` you must change displays as **Loaded Configuration File**)

2.	As a user with `root` privileges, open `php.ini` in a text editor.
3.	Make the required changes.

	For more information about PHP settings, see [PHP configuration options]({{ site.gdeurl21 }}install-gde/prereq/php-centos.html#instgde-prereq-timezone).

<h3 id="trouble-cron-errors">Solution: cron running with errors</h3>
Try running each command manually because the command might display helpful error messages.

See <a href="{{ site.gdeurl21 }}install-gde/install/post-install-config.html#post-install-cron">Set up cron</a>.

<div class="bs-callout bs-callout-info" id="info">
	<p>You must run cron at least <em>twice</em> for the job to execute.</p>
</div>

