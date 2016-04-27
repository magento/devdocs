<div markdown="1">

### Prerequisites
Magento uses cron for two sets of tasks, and for each, cron can be run with a different configuration:

*	The general cron job that reindexes indexers, generates e-mails, generates the sitemap, and so on, typically runs as the PHP command-line user's `php.ini`
*	Two other cron jobs are used by the <a href="{{ site.gdeurl }}comp-mgr/bk-compman-upgrade-guide.html">Component Manager and System Upgrade utilities</a>. Those commands must use the web server's `php.ini`.

If you're not experienced with running cron, you can run all commands with the web server's configuration; however, we leave the decision up to you.

#### Find the web server configuration

To find the web server configuration, run a <a href="{{ site.gdeurl }}install-gde/prereq/optional.html#install-optional-phpinfo">`phpinfo.php` file</a> in your web browser and look for the Loaded Configuration File as follows:

<img src="{{ site.baseurl }}common/images/config_phpini-webserver.png" width="700px">

#### Find the PHP binary and php.ini path
To display the path to your PHP binary, enter

	which php

A sample result follows:

	/usr/bin/php

#### Create the cron job

To create a cron job as the Magento file system owner, enter the following command as a user with `root` privileges:

	crontab -u <Magento file system owner user name> -e

For example,

	crontab -u magento_user -e

A text editor displays. (You might need to choose a text editor first.)

	* * * * * <path_to_binary> -c <ini_file_path> <magento_dir>/bin/magento cron:run | grep -v "Ran jobs by schedule" >> <magento_dir>/var/log/magento.cron.log
	* * * * * <path_to_binary> -c <ini_file_path> <magento_dir>/update/cron.php >> <magento_dir>/var/log/update.cron.log
	* * * * * <path_to_binary> -c <ini_file_path> <magento_dir>/bin/magento setup:cron:run >> <magento_dir>/var/log/setup.cron.log

where 

*	`<path_to_binary>` is the absolute file system path to your PHP binary
*	`<ini_file_path>` is the path to a `php.ini` file to use for the cron job
*	`| grep -v "Ran jobs by schedule"` filters this message from the log, making any errors easier to spot

The first command (`magento cron:run`) reindexes indexers, send automated e-mails, generates the sitemap, and so on. Usually it's associated with the PHP command line `.ini` file. The other two commands are used by the Component Manager and System Upgrade.

For example, if the PHP binary is located in `/usr/bin`, you installed Magento in `/var/www/html/magento2`, and all commands use the web server's `/etc/php5/apache2/php.ini`, enter

Example:

	* * * * * /usr/bin/php -c /etc/php5/apache2/php.ini /var/www/magento2/bin/magento cron:run | grep -v "Ran jobs by schedule" >> /var/www/magento2/var/log/magento.cron.log
	* * * * * /usr/bin/php -c /etc/php5/apache2/php.ini /var/www/magento2/update/cron.php >> /var/www/magento2/var/log/update.cron.log
	* * * * * /usr/bin/php -c /etc/php5/apache2/php.ini /var/www/magento2/bin/magento setup:cron:run >> /var/www/magento2/var/log/setup.cron.log

Save your changes to the crontab and exit the editor.
