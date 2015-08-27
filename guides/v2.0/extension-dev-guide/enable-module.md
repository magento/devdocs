---
layout: default
group: extension-dev-guide
subgroup: 3_Build
title: PHP developer guide
menu_title: Enable a module
menu_order: 8
github_link: extension-dev-guide/enable-module.md

---
##{{page.menu_title}}


After you have built the module and are ready to enable it in your Magento environment, enter the following at the command line:

    bin/magento module:enable --clear-static-content Module_Name
    bin/magento setup:upgrade

where `Module_Name` is the name of the module you are enabling.

The general order of operation for the `setup:upgrade` operation is:

42. __Schema install/upgrade__.
42. __Schema post-upgrade__ &#8212; handles any additional updates. These recurring upgrades occur independently and regardless of any changes to the schema.
42. __Data install/upgrade__ &#8212; installs the data. Taken from `setup/InstallData.php`.



##Disable a module

To disable a module, enter the following at the command line:

    bin/magento module:disable --clear-static-content Module_Name


For more on enabling and disabling modules, see [enable or disable modules]({{ site.gdeurl}}install-gde/install/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-disable).


