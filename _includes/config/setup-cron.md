<div markdown="1">

### Prerequisites
Magento uses cron for two sets of tasks, and for each, cron can be run with a different configuration:

*	The general cron job that reindexes indexers, generates e-mails, generates the sitemap, and so on, typically runs as the PHP command-line user's `php.ini`
*	Two other cron jobs are used by the <a href="{{ site.gdeurl }}comp-mgr/bk-compman-upgrade-guide.html">Component Manager and System Upgrade utilities</a>. Those commands must use the web server's `php.ini`.

If you're not experienced with running cron, you can run all commands with the web server's configuration; however, we leave the decision up to you.

#### Find the web server configuration

To find the web server configuration, run a <a href="{{ site.gdeurl }}install-gde/prereq/optional.html#install-optional-phpinfo">`phpinfo.php` file</a> in your web browser and look for the Loaded Configuration File as follows:

<img src="{{ site.baseurl }}common/images/config_phpini-webserver.png" width="700px">

#### Find the PHP binary
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

	*/1 * * * * <path-to-binary>/php -c <ini-file-path> <your Magento install dir>/bin/magento cron:run 
	*/1 * * * * <path-to-binary>/php -c <ini-file-path> <your Magento install dir>/update/cron.php 
	*/1 * * * * <path-to-binary>/php -c <ini-file-path> <your Magento install dir>/bin/magento setup:cron:run 

where 

*	`<path-to-binary>` is the absolute file system path to your PHP binary
*	`<ini-file-path>` is the path to a `php.ini` file to use for the cron job

The first command (`magento cron:run`) reindexes indexers, send automated e-mails, generates the sitemap, and so on. Usually it's associated with the PHP command line `.ini` file. The other two commands are used by the Component Manager and System Upgrade.

For example, if the PHP binary is located in `/usr/bin`, you installed Magento in `/var/www/html/magento2`, and all commands use the web server's `php.ini`, enter

Example:

	*/1 * * * * /usr/bin/php -c /etc/php5/apache2/php.ini /var/www/magento2/bin/magento cron:run 
	*/1 * * * * /usr/bin/php -c /etc/php5/apache2/php.ini /var/www/magento2/update/cron.php 
	*/1 * * * * /usr/bin/php -c /etc/php5/apache2/php.ini /var/www/magento2/bin/magento setup:cron:run 

*Optional*. To keep a running log of cron activity (especially if you're debugging an issue), append output to a file; for example:

Example:

	*/1 * * * * /usr/bin/php -c /etc/php5/apache2/php.ini /var/www/magento2/bin/magento cron:run > /tmp/cron.log&
	*/1 * * * * /usr/bin/php -c /etc/php5/apache2/php.ini /var/www/magento2/update/cron.php > /tmp/cron.log&
	*/1 * * * * /usr/bin/php -c /etc/php5/apache2/php.ini /var/www/magento2/bin/magento setup:cron:run > /tmp/cron.log&

Save your changes to the crontab and exit the editor.