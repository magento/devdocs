### About the Magento crontab

The Magento _crontab_ is the configuration used to run Magento cron jobs.

Magento uses cron for two sets of tasks, and for each, cron can run with a different configuration:

*  PHP command-line configuration: The general cron job that reindexes indexers, generates e-mails, generates the sitemap, and so on.

*  Web server PHP plug-in configuration: Two other cron jobs are used by the [Component Manager and System Upgrade utilities]({{ page.baseurl }}/comp-mgr/bk-compman-upgrade-guide.html).

{:.bs-callout-warning}

*  To avoid issues during installation and upgrade, we strongly recommend you apply the same PHP settings to both the PHP command-line configuration and to the PHP web server plug-in's configuration. For more information, see [Required PHP settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html).
*  In a multi-node system, crontab can run on only one node. This applies to you only if you set up more than one webnode for reasons related to performance or scalability.
