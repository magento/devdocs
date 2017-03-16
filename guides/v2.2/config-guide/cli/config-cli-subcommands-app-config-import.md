---
layout: default
group: config-guide 
subgroup: 04_CLI
title: Import data from configuration files to the database
menu_title: Import data from configuration files to the database
menu_node: 
menu_order: 251
version: 2.2
github_link: config-guide/cli/config-cli-subcommands-app-config-import.md
---

This topic discusses a command you can use to import configuration information for websites, stores, store views, and their associated themes. The configuration is stored in the shared configuration, `config.php`.

After importing, you can create product attributes and apply them to websites, stores, and store views. 

If the database and `config.php` are not in synchronization, errors display in the Magento Admin with suggested corrective actions.

For more information about this process, see TBD.

## First steps {#first}
{% include install/first-steps-cli.html %}

## Import configuration data
Run the following command to import data from deployment configuration files to the database:

    bin/magento app:config:import

This command has no options or arguments.
    
If deployment configuration files contain some data to import, a message similar to the following is displayed:

    Start import:
    Some information about importing
    
If deployment configuration files do not contain any data to import, a message similar to the following is displayed:

    Start import:
    Nothing to import