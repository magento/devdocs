<div markdown="1">

### Create the Magento crontab
Starting with version 2.2, Magento creates a crontab for you. We add the Magento crontab to any configured crontab for the Magento file system owner. In other words, if you already set up crontabs for other extensions or applications, we add the Magento crontab to it.

The Magento crontab is inside `#~ MAGENTO START` and `#~ MAGENTO END` comments in your crontab.

To create the Magento crontab:

1.	Log in as, or switch to, the [Magento file system owner]({{ page.baseurl }}install-gde/prereq/file-sys-perms-over.html).
2.	Change to your Magento installation directory.
3.	Enter the following command:

		php bin/magento cron:install [--force]

Use `--force` to rewrite an existing Magento crontab. 

<div class="bs-callout bs-callout-info" id="info" markdown="1">
*	`magento cron:install` does not rewrite an existing crontab inside `#~ MAGENTO START` and `#~ MAGENTO END` comments in your crontab.
*	`magento cron:install --force` has no effect on any cron jobs outside the Magento comments.
</div>

To view the crontab, enter the following command as the Magento file system owner:

	crontab -l

A sample follows:

	#~ MAGENTO START
	* * * * * /usr/bin/php /var/www/html/magento2/bin/magento cron:run 2>&1 | grep -v Ran jobs by schedule >> /var/www/html/magento2/var/log/magento.cron.log
	* * * * * /usr/bin/php /var/www/html/magento2/update/cron.php >> /var/www/html/magento2/var/log/update.cron.log
	* * * * * /usr/bin/php /var/www/html/magento2/bin/magento setup:cron:run >> /var/www/html/magento2/var/log/setup.cron.log
	#~ MAGENTO END
