---
layout: default
group: config-guide 
subgroup: 04_CLI
title: Export the configuration
menu_title: Export the configuration
menu_node: 
menu_order: 251
version: 2.2
github_link: config-guide/cli/config-cli-subcommands-config-export.md
---

The configuration required to deploy static view files can be exported from the database of the production Magento instance. To do it, run the following command for the production instance:

    magento app:config:dump

As a result of the command execution, the `config.php` file in the `app/etc/` directory will be extended with new data. In order to generate the static content using the other Magento codebase, you must copy this file and paste it to the `app/etc` directory of the Magento codebase you will use.

The `config.php` file contains the following sections:

- `system`: all system configurations required for successful {% glossarytooltip a3e37235-4e8b-464f-a19d-4a120560206a %}static content{% endglossarytooltip %} deployment
- `scopes`: the list of stores, store groups and websites with related information
- `i18n`:  all inline translations. This section is used for generating `js-translation.json`
- `modules`: the list of enabled/disabled modules
- `themes`: the configuration of installed themes

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
<p>While the exported configuration files reside in the <code>app/etc</code> directory, you cannot change the value of the corresponding configuration fields under <b>Store</b> -> <b>Configuration</b> in the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} Panel. The fields are displayed, but disabled. You need to remove the `system` configuration section from <code>app/etc</code> files, to make the settings available.</p></span>
</div>

## Interactively set sensitive configuration values

To interactively set the value of sensitive settings, enter the followign command:

    magento config:sensitive:set -i

To provide the value of a specific sensitive variable:

    magento config:sensitive:set {configuration path} {value}
