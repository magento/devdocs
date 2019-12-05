### Create the Magento crontab

Starting with version 2.2, Magento creates a crontab for you. We add the Magento crontab to any configured crontab for the Magento file system owner. In other words, if you already set up crontabs for other extensions or applications, we add the Magento crontab to it.

The Magento crontab is inside `#~ MAGENTO START` and `#~ MAGENTO END` comments in your crontab.

To create the Magento crontab:

1. Log in as, or switch to, the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
1. Change to your Magento installation directory.
1. Enter the following command:

   ```bash
   bin/magento cron:install [--force]
   ```

Use `--force` to rewrite an existing Magento crontab.

 {:.bs-callout-info}

*  `magento cron:install` does not rewrite an existing crontab inside `#~ MAGENTO START` and `#~ MAGENTO END` comments in your crontab.
*  `magento cron:install --force` has no effect on any cron jobs outside the Magento comments.

To view the crontab, enter the following command as the Magento file system owner:

```bash
crontab -l
```

A sample follows:

```terminal
#~ MAGENTO START c5f9e5ed71cceaabc4d4fd9b3e827a2b
* * * * * /usr/bin/php /var/www/html/magento2/bin/magento cron:run 2>&1 | grep -v "Ran jobs by schedule" >> /var/www/html/magento2/var/log/magento.cron.log
* * * * * /usr/bin/php /var/www/html/magento2/update/cron.php >> /var/www/html/magento2/var/log/update.cron.log
* * * * * /usr/bin/php /var/www/html/magento2/bin/magento setup:cron:run >> /var/www/html/magento2/var/log/setup.cron.log
#~ MAGENTO END c5f9e5ed71cceaabc4d4fd9b3e827a2b
```

{%
include note.html
type='info'
content='The `update/cron.php` file exists in [Composer](https://glossary.magento.com/composer)- and [archive-based](https://magento.com/tech-resources/download) Magento installations. It does not exist if you installed Magento by cloning the [Magento 2 git repository](https://github.com/magento/magento2/).

In [Composer-based installations](https://glossary.magento.com/composer), Magento creates the `update/` directory when you run `composer create-project`. Running `composer install` does not create the `update/` directory (if it did not exist before). See [Recreate the Magento updater](https://devdocs.magento.com/guides/v2.3/comp-mgr/cli/cli-upgrade.html#recreate-magento-updater).'
%}
