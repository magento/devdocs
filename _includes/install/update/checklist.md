<div markdown="1">

Before you continue, to avoid errors during your installation or update, make sure you verify *all* of the following:

*	You set up a [Magento file system owner](#magento-owner-group) and shared that owner's group with the web server user group
*	Your [cron jobs](#magento-cron) are set up and running
*	[File system permissions and ownership](#perms) are set properly

<div class="bs-callout bs-callout-warning">
    <p>Do not continue your new installation or update without performing these checks. Failure to do so could result in errors.</p>
</div>

### Magento file system owner and group {#magento-owner-group}
For security reasons, Magento requires two users to run properly:

*	The web server user
*	A local user on the Magento server

In addition, these users must either be a member of each other's group or the local user must be a member of the web server user's group.

To check group ownership, use the following command:

	groups <username>

Typical web server user names follow:

*	Ubuntu: `www-data` or `nginx`
*	CentOS: `apache` or `nginx`

For example, enter:

	groups magento_user

Any of the following is a valid result on CentOS:

	magento_user : apache

or

	magento_user : magento_user apache

For details, see [Create the Magento file system owner]({{ site.gdeurl }}install-gde/prereq/apache-user.html).

### Cron jobs are running {#magento-cron}
Magento requires three cron jobs, all running as the [Magento file system owner]({{ site.gdeurl }}install-gde/prereq/apache-user.html).

To verify your cron jobs are set up properly, enter the following command as a user with `root` privileges:

	crontab -u <magento file system owner> -l

For example, if your Magento file system owner is named `magento_user`, enter:

	crontab -u magento_user -l

Results similar to the following should display:

	*/1 * * * * /usr/bin/php -c /etc /var/www/html/magento2/bin/magento cron:run >> /var/www/html/magento2/var/log/magento-cron.log&
	*/1 * * * * /usr/bin/php -c /etc /var/www/html/magento2/update/cron.php >> /var/www/html/magento2/var/log/updater.log&
	*/1 * * * * /usr/bin/php -c /etc /var/www/html/magento2/bin/magento setup:cron:run >> /var/www/html/magento2/var/log/setup.log&

For details, see [Set up cron]({{ site.gdeurl }}install-gde/install/post-install-config.html#post-install-cron).

### File system permissions and ownership {#perms}
TBD