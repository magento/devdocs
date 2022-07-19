### Create the Commerce crontab

Starting with version 2.2, Commerce creates a crontab for you. We add the Commerce crontab to any configured crontab for the Commerce file system owner. In other words, if you already set up crontabs for other extensions or applications, we add the Commerce crontab to it.

The Commerce crontab is inside `#~ MAGENTO START` and `#~ MAGENTO END` comments in your crontab.

To create the Commerce crontab:

1. Log in as, or switch to, the [file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
1. Change to your Magento installation directory.
1. Enter the following command:

   ```bash
   bin/magento cron:install [--force]
   ```

Use `--force` to rewrite an existing Magento crontab.

 {:.bs-callout-info}

*  `magento cron:install` does not rewrite an existing crontab inside `#~ MAGENTO START` and `#~ MAGENTO END` comments in your crontab.
*  `magento cron:install --force` has no effect on any cron jobs outside the Magento comments.

To view the crontab, enter the following command as the file system owner:

```bash
crontab -l
```

A sample follows:

```terminal
#~ MAGENTO START c5f9e5ed71cceaabc4d4fd9b3e827a2b
* * * * * /usr/bin/php /var/www/html/magento2/bin/magento cron:run 2>&1 | grep -v "Ran jobs by schedule" >> /var/www/html/magento2/var/log/magento.cron.log
#~ MAGENTO END c5f9e5ed71cceaabc4d4fd9b3e827a2b
```

{%
include note.html
type='info'
content='The `update/cron.php` file has been removed in Magento 2.4.0, if this file exists on your installation, it can be safely removed.

Any reference to `update/cron.php` and `bin/magento setup:cron:run` should also be removed from the crontab'
%}
