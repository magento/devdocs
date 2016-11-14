<div markdown="1">

### Check your existing crontab
To verify whether or not your crontab is set up:

1.	Log in to your Magento server as, or switch to, the [Magento file system owner]({{ page.baseurl }}install-gde/prereq/file-sys-perms-over.html).
2.	See if the following file exists:

		ls -al <your Magento install dir>/var/.setup_cronjob_status
	If the file exists, cron is set up. 
3.	


1.	As a user with `root` privileges, see if a crontab is already set up.

		crontab -u <Magento file system owner name> -l

	For example, on CentOS

		crontab -u magento_user -l

	If no crontab has been set up for the user, the following message displays:

		no crontab for magento_user

	See one of the following sections for a solution to your issue.

### Solution: crontab not set up
To verify your cron jobs are set up properly, see [Set up cron jobs]({{page.baseurl}}install-gde/install/post-install-config.html#post-install-cron").

### Solution: cron running from incorrect PHP binary
If your cron job uses a PHP binary different from the web server plug-in, PHP settings errors might display. To resolve the issue, set identical PHP settings for both the PHP command line and the PHP web server plug-in.

For more information about PHP settings, see [PHP configuration options]({{page.baseurl}}install-gde/prereq/php-centos.html#instgde-prereq-timezone).

### Solution: cron running with errors
Try running each command manually because the command might display helpful error messages. See [Set up cron jobs]({{page.baseurl}}install-gde/install/post-install-config.html#post-install-cron").

See <a href="{{page.baseurl}}install-gde/install/post-install-config.html#post-install-cron">Set up cron</a>.

<div class="bs-callout bs-callout-info" id="info">
	<p>You must run cron at least <em>twice</em> for the job to execute.</p>
</div>
