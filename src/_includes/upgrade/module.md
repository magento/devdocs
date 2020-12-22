To update or upgrade a module or extension:

1. Download the updated file from Marketplace or another extension developer. Take note of the module-name and version.

1. Export the contents to your Magento root.

1. If a Composer package exists for the module, run one of the following.

   Update per module name:

   ```bash
   composer update vendor/module-name
   ```

   Update per version:

   ```bash
   composer require vendor/module-name ^x.x.x
   ```

1. Run the following commands to upgrade, deploy, and clean the cache.

   ```bash
   bin/magento setup:upgrade --keep-generated
   bin/magento setup:static-content:deploy
   bin/magento cache:clean
   ```
