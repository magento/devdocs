To update the production system:

1. Log in to your production system as, or switch to, the [file system owner](https://glossary.magento.com/magento-file-system-owner).
1. Start maintenance mode:

   ```bash
   cd <Magento root dir>
   ```

   ```bash
   bin/magento maintenance:enable
   ```

   For additional options, such as the ability to set an IP address whitelist, see [`magento maintenance:enable`]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-maint.html).

1. Stop any running queue workers by setting `cron_run` to `false` in `app/etc/env.php` as follows:

   ```php?start_inline=1
   'cron_consumers_runner' => [
           'cron_run' => false
       ]
   ```

1. Update the configuration:

   ```bash
   bin/magento app:config:import
   ```

1. Finally, `kill` any active consumer processes.

   ```bash
   kill <PID>
   ```

    where `PID` is the process ID to be killed. For example:

   ```bash
   kill 1234
   ```

1. Pull code from source control.

   The Git command follows:

   ```bash
   git pull mconfig m2.2_deploy
   ```

1. Update the configuration:

   ```bash
   bin/magento app:config:import
   ```

1. Clean the cache:

   ```bash
   bin/magento cache:clean
   ```

1. End maintenance mode:

   ```bash
   bin/magento maintenance:disable
   ```
