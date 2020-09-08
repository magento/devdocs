---
group: php-developer-guide
title: Enable or disable your component
---

After you have built the component and are ready to enable it in your Magento environment, do the following:

1. Disable the [cache](https://glossary.magento.com/cache) under `System->Cache Management`.
1. Enter the following in the command line:

   ```bash
   bin/magento module:enable --clear-static-content Component_Name
   ```

   ```bash
   bin/magento setup:upgrade
   ```

   ```bash
   bin/magento cache:clean
   ```

   Where `Component_Name` is the name of the component you are enabling.

1. Check that the component is enabled:

   ```bash
   bin/magento module:status <extension-name>
   ```

   An extension name uses the format: <VendorName>_<ComponentName>.

   Sample response:

   ```terminal
   Module is enabled
   ```

## Order of operations

The general order of operations for `setup:upgrade` is:

1. **Schema install/upgrade.**
1. **Schema post-upgrade**— handles any additional updates. These recurring upgrades occur independently and regardless of any changes to the schema.
1. **Data install/upgrade** — installs the data. Taken from `setup/InstallData.php`.

## Disable a component

To disable a component, enter the following at the command line:

```bash
bin/magento module:disable --clear-static-content Component_Name
```

For more on enabling and disabling components, see [enable or disable modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-disable).
