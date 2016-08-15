<div markdown="1">

### Prerequisites
Magento uses cron for two sets of tasks, and for each, cron can run with a different configuration:

*	PHP command-line configuration: The general cron job that reindexes indexers, generates e-mails, generates the sitemap, and so on.

	You can find the command-line configuration using the command `php --ini`. 
*	Web server PHP plug-in configuration: Two other cron jobs are used by the <a href="{{page.baseurl}}comp-mgr/bk-compman-upgrade-guide.html">Component Manager and System Upgrade utilities</a>. 

	You can find the web server plug-in configuration using <a href="{{ page.baseurl }}install-gde/prereq/optional.html#install-optional-phpinfo"><code>phpinfo.php</code>.

<div class="bs-callout bs-callout-warning">
    <p>To avoid issues during installation and upgrade, we strongly recommend you apply the same PHP settings to both the PHP command-line configuration and to the PHP web server plug-in's configuration. For more information, see the instructions in either the <a href="{{ page.baseurl }}install-gde/prereq/php-ubuntu.html#instgde-prereq-timezone">Ubuntu</a> or <a href="{{ page.baseurl }}install-gde/prereq/php-ubuntu.html#instgde-prereq-timezone">CentOS</a> PHP topics.</p>
</div>

If you're not experienced with running cron, you can run all commands with the web server's configuration; however, we leave the decision up to you.

#### Find the PHP binary and php.ini path
To display the path to your PHP binary, enter

	which php

A sample result follows:

	/usr/bin/php

#### Create the cron job

To create a cron job for the Magento file system owner, enter the following command as a user with `root` privileges:

	crontab -u <Magento file system owner user name> -e

For example,

	crontab -u magento_user -e

A text editor displays. (You might need to choose a text editor first.)

	* * * * * <path to php binary> <magento install dir>/bin/magento cron:run | grep -v "Ran jobs by schedule" >> <magento install dir>/var/log/magento.cron.log
	* * * * * <path to php binary> <magento install dir>/update/cron.php >> <magento install dir>/var/log/update.cron.log
	* * * * * <path to php binary> <magento install dir>/bin/magento setup:cron:run >> <magento install dir>/var/log/setup.cron.log

where 

*	`<path to php binary>` is the absolute file system path to your PHP binary
*	`<magento install dir>` is the directory in which you installed the Magento software; for example, `/var/www`
*	`| grep -v "Ran jobs by schedule"` filters this message from the log, making any errors easier to spot

The first command (`magento cron:run`) reindexes indexers, send automated e-mails, generates the sitemap, and so on. Usually it's associated with the PHP command line `.ini` file. The other two commands are used by the Component Manager and System Upgrade.

<div class="bs-callout bs-callout-info" id="info">
  <p>If you're a contributing developer (that is, you <a href="{{ page.baseurl }}install-gde/prereq/dev_install.html">cloned the Magento 2 GitHub repository</a>), only the first line applies to you. See the examples that follow for details.</p>
</div>

**Example 1:** Everyone except contributing developers

For example, if the PHP binary is located in `/usr/bin`, you installed Magento in `/var/www/html/magento2`, enter

Example:

	* * * * * /usr/bin/php /var/www/magento2/bin/magento cron:run | grep -v "Ran jobs by schedule" >> /var/www/magento2/var/log/magento.cron.log
	* * * * * /usr/bin/php /var/www/magento2/update/cron.php >> /var/www/magento2/var/log/update.cron.log
	* * * * * /usr/bin/php /var/www/magento2/bin/magento setup:cron:run >> /var/www/magento2/var/log/setup.cron.log

**Example 2:** Contributing developers only (that is, you cloned the Magento 2 GitHub repository):

	* * * * * /usr/bin/php /var/www/magento2/bin/magento cron:run | grep -v "Ran jobs by schedule" >> /var/www/magento2/var/log/magento.cron.log

Save your changes to the crontab and exit the editor.
