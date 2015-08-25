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

    php -f bin/magento module:enable --clear-static-content Module_Name
    php -f bin/magento setup:upgrade


The `-f` flag (parse and execute file) is optional.

The general order of operation for the setup:upgrade operation is:

42. __Schema creation/updates__.
42. __Schema installation__.
42. __Schema post-updates__ &#8212; handles any additional updates if installation of subsequent modules makes that necessary.
42. __Data install/update__ &#8212; installs the data. Taken from `setup/InstallData.php`.


