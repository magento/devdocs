<div markdown="1">

Several Magento features require at least one cron job, which schedules activities to occur in the future. A partial list of these activities follows:

*	Catalog price rules
*	Newsletters
*	Generating Google sitemaps
*	Customer Alerts/Notifications (product price change, product back in stock)
*	Reindexing
*	Private sales (Magento EE only)
*	Automatic updating of currency rates
*	All Magento e-mails (including order confirmation and transactional)

We recommend you run cron as the [Magento file system owner]({{page.baseurl}}install-gde/prereq/file-sys-perms-over.html). Do *not* run cron as `root`; we also recommend against running cron as the web server user.

<div class="bs-callout bs-callout-warning">
    <p>You can no longer run <code>dev/tools/cron.sh</code> because the script has been removed.</p>
</div>

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Magento depends on proper cron job configuration for many important system functions, including indexing. Failure to set it up properly means Magento won't function as expected.
</div>

UNIX systems schedule tasks to be performed by particular users using a *crontab*, which is a file that contains instructions to the cron daemon that tell the daemon in effect to "run this command at this time on this date". Each user has its own crontab, and commands in any given crontab are executed as the user who owns it.