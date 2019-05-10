---
group: php-developer-guide
subgroup: 03_Build
title: Enable or disable your component
menu_title: Enable or disable your component
menu_order: 8000
redirect_from: /guides/v2.0/extension-dev-guide/enable-module.html
---

After you have built the component and are ready to enable it in your Magento environment, do the following:

1. Disable the {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} under `System->Cache Management`.
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

1. Check under **System** > **Tools** > **Web Setup Wizard** > **Module Manager** that the component is present.

## Order of operations

The general order of operations for `setup:upgrade` is:

1.  **Schema install/upgrade.**
2.  **Schema post-upgrade**— handles any additional updates. These recurring upgrades occur independently and regardless of any changes to the schema.
3.  **Data install/upgrade** — installs the data. Taken from `setup/InstallData.php`.

## Disable a component

To disable a component, enter the following at the command line:

```bash
bin/magento module:disable --clear-static-content Component_Name
```

For more on enabling and disabling components, see [enable or disable modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-disable).
