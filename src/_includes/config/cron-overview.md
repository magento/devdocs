Several Magento features require at least one cron job, which schedules activities to occur in the future. A partial list of these activities follows:

*  Catalog price rules
*  Newsletters
*  Generating Google sitemaps
*  Customer Alerts/Notifications (product price change, product back in stock)
*  Reindexing
*  Private sales ({{site.data.var.ee}} only)
*  Automatic updating of currency rates
*  All Magento e-mails (including order confirmation and transactional)

We recommend you run cron as the [Magento file system owner]({{ page.baseurl }}/config-guide/cli/config-cli.html#config-install-cli-first). Do *not* run cron as `root`; we also recommend against running cron as the web server user.

{:.bs-callout-warning}
You can no longer run `dev/tools/cron.sh` because the script has been removed.

 {:.bs-callout-info}
Magento depends on proper cron job configuration for many important system functions, including indexing. Failure to set it up properly means Magento won't function as expected.

UNIX systems schedule tasks to be performed by particular users using a *crontab*, which is a file that contains instructions to the cron daemon that tell the daemon in effect to "run this command at this time on this date". Each user has its own crontab, and commands in any given crontab are executed as the user who owns it.
