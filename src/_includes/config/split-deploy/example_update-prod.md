To update the production system:

1. Log in to your production system as, or switch to, the [Magento file system owner](https://glossary.magento.com/magento-file-system-owner).
1. Start maintenance mode:

   ```bash
   cd <Magento root dir>
   ```

   ```bash
   php bin/magento maintenance:enable
   ```

   For additional options, such as the ability to set an IP address whitelist, see [`magento maintenance:enable`]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-maint.html).

1. If you use {{site.data.var.ee}}, stop queue workers. TBD

1. Pull code from source control.

   The Git command follows:

   ```bash
   git pull mconfig m2.2_deploy
   ```

1. Update the configuration:

   ```bash
   php bin/magento app:config:import
   ```

1. Clean the cache:

   ```bash
   php bin/magento cache:clean
   ```

1. End maintenance mode:

   ```bash
   php bin/magento maintenance:disable
   ```
