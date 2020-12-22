{:.procedure}
To create and transfer `config.local.php`:

1. On your local workstation, find the integration server SSH URL.

   ```bash
   magento-cloud environment:ssh --pipe
   ```

1. Create the `config.local.php` file on the integration server.

   ```bash
   ssh server@ssh.magentosite.cloud "php bin/magento magento-cloud:scd-dump"
   ```

1. Change to the project root directory.

1. Transfer the `config.local.php` file to your local workstation.

   ```bash
   rsync server@ssh.magentosite.cloud:app/etc/config.local.php ./app/etc/config.local.php
   ```

1. Test to ensure a successful transfer by importing the configuration file to your local environment.

   ```bash
   php bin/magento app:config:import
   ```
