
### Check your existing crontab

This section discusses how to see if cron is currently running and to verify whether it's set up properly.

To verify whether or not your crontab is set up:

1. Log in to your Magento server as, or switch to, the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
1. See if the following file exists:

   ```bash
   ls -al <magento_root>/var/.setup_cronjob_status
   ```

   If the file exists, cron has run successfully in the past. If the file _does not_ exist, either you haven't yet installed Magento or cron isn't running. In either case, continue with the next step.

1. Get more detail about cron.

   As a user with `root` privileges, enter the following command:

   ```bash
   crontab -u <Magento file system owner name> -l
   ```

   For example, on CentOS

   ```bash
   crontab -u magento_user -l
   ```

   If no crontab has been set up for the user, the following message displays:

   ```terminal
   no crontab for magento_user
   ```

   Your crontab tells you the following:

   *  What PHP binary you're using (in some cases, you have more than one)
   *  What Magento cron scripts you're running (in particular, the paths to those scripts)
   *  Where your cron logs are located

   See one of the following sections for a solution to your issue.

### Solution: crontab not set up

To verify your cron jobs are set up properly, see [Set up cron jobs]({{ page.baseurl }}/install-gde/install/post-install-config.html#post-install-cron).

### Solution: cron running from incorrect PHP binary

If your cron job uses a PHP binary different from the web server plug-in, PHP settings errors might display. To resolve the issue, set identical PHP settings for both the PHP command line and the PHP web server plug-in.

For more information about PHP settings, see [Required PHP settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html).

### Solution: cron running with errors

Try running each command manually because the command might display helpful error messages. See [Set up cron jobs]({{ page.baseurl }}/install-gde/install/post-install-config.html#post-install-cron).

{:.bs-callout-info}
You must run cron at least *twice* for the job to execute; the first time to queue jobs, the second time to execute the jobs.
