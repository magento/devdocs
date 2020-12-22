### About the Magento crontab

The Magento _crontab_ is the configuration used to run Magento cron jobs.

Magento uses cron for two sets of tasks, and for each, cron can run with a different configuration:

*  PHP command-line configuration: The general cron job that reindexes indexers, generates e-mails, generates the sitemap, and so on.

*  Web server PHP plug-in configuration: Two other cron jobs are used by the [Component Manager and System Upgrade utilities]({{ page.baseurl }}/comp-mgr/bk-compman-upgrade-guide.html).

{:.bs-callout-warning}

*  To avoid issues during installation and upgrade, we strongly recommend you apply the same PHP settings to both the PHP command-line configuration and to the PHP web server plug-in's configuration. For more information, see [Required PHP settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html).
*  In a multi-node system, crontab can run on only one node. This applies to you only if you set up more than one webnode for reasons related to performance or scalability.

#### Create the Magento crontab

Starting with version 2.2, Magento creates a crontab for you. We add the Magento crontab to any configured crontab for the Magento file system owner. In other words, if you already set up crontabs for other extensions or applications, we add the Magento crontab to it.

To create the Magento crontab, use the following command:

```bash
php bin/magento cron:install [--force]
```

Use `--force` to rewrite an existing Magento crontab. (Any existing crontab is not affected.)

To view the crontab, switch to the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html) and enter the following command:

```bash
crontab -l
```

A sample follows:

```terminal
#~ MAGENTO START
* * * * * /usr/bin/php /var/www/html/magento2/bin/magento cron:run 2>&1 | grep -v Ran jobs by schedule >> /var/www/html/magento2/var/log/magento.cron.log
* * * * * /usr/bin/php /var/www/html/magento2/update/cron.php >> /var/www/html/magento2/var/log/update.cron.log
* * * * * /usr/bin/php /var/www/html/magento2/bin/magento setup:cron:run >> /var/www/html/magento2/var/log/setup.cron.log
#~ MAGENTO END
```

#### Related topic

*  [Remove the Magento crontab]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html#config-cron-remove)
