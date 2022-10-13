### About the Magento crontab

The Magento _crontab_ is the configuration used to run Magento cron jobs.

Magento uses cron tasks that can run with different configurations. The PHP command-line configuration controls the general cron job that reindexes indexers, generates e-mails, generates the sitemap, and so on.

{:.bs-callout-warning}

*  To avoid issues during installation and upgrade, we strongly recommend you apply the same PHP settings to both the PHP command-line configuration and to the PHP web server plug-in's configuration. For more information, see [Required PHP settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html).
*  In a multi-node system, crontab can run on only one node. This applies to you only if you set up more than one webnode for reasons related to performance or scalability.
