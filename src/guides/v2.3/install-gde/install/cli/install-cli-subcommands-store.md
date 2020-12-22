---
group: installation-guide
title: Configure the store
functional_areas:
  - Install
  - System
  - Setup
---

## First steps {#instgde-cli-before}
{% include install/first-steps-cli.md %}
In addition to the command arguments discussed here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common).

## Prerequisites {#instgde-cli-subcommands-store-prereq}

Before you run this command, you must do all of the following *or* you must [install the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-install.html):

*  [Create or update the deployment configuration]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html)
*  [Create the Magento database schema]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db.html)

{% include install/fully-secure.md %}

## Configure the store {#instgde-cli-storeconfig}

Command usage:

```bash
bin/magento setup:store-config:set [--<parameter_name>=<value>, ...]
```

where the following table defines parameters and values.

|Name|Value|Required?|
|--- |--- |--- |
|`--base-url`|Base URL to use to access your Magento Admin and storefront in any of the following formats:<br><br>- `http[s]://<host or ip>/<your Magento install dir>/`.<br><br>**Note:** The scheme (`http://` or `https://`) and a trailing slash are both required. `<your Magento install dir>` is the docroot-relative path in which to install the Magento software. Depending on how you set up your web server and virtual hosts, the path might be magento2 or it might be blank.<br><br>To access Magento on localhost, you can use `http://127.0.0.1/<your Magento install dir>/`.<br><br>- `{{base_url}}` which represents a base URL defined by a virtual host setting or by a virtualization environment like Docker. For example, if you set up a virtual host for Magento with the hostname magento.example.com, you can install the Magento software with `--base-url={{base_url}}` and access the Magento Admin with a URL like http://magento.example.com/admin.|No|
|`--language`|Language code to use in the Admin and storefront.<br><br>(If you have not done so already, you can view the list of language codes by entering `magento info:language:list` from the `bin` directory.)|No|
|`--currency`|Default currency to use in the storefront. <br><br>(If you have not done so already, you can view the list of currencies by entering `magento info:currency:list` from the `bin` directory.)|No|
|`--timezone`|Default time zone to use in the Admin and storefront. (If you have not done so already, you can view the list of time zones by entering `magento info:timezone:list` from the `bin` directory.)|No|
|`--use-rewrites`|`1` means you use web server rewrites for generated links in the storefront and Admin.<br><br>`0` disables the use of web server rewrites. This is the default.|No|
|`--use-secure`|`1` enables the use of Secure Sockets Layer (SSL) in storefront URLs. Make sure your web server supports SSL before you select this option.<br><br>`0` disables the use of SSL with Magento. In this case, all other secure URL options are assumed to also be 0. This is the default.|No|
|`--base-url-secure`|Secure base URL to use to access your Magento Admin and storefront in the following format: `http[s]://<host or ip>/<your Magento install dir>/`|No|
|`--use-secure-admin`|`1` means you use SSL to access the Magento Admin. Make sure your web server supports SSL before you select this option.<br><br>`0` means you do not use SSL with the Admin. This is the default.|No|
|`--admin-use-security-key`|`1` causes the Magento software to use a randomly generated key value to access pages in the Magento Admin and in forms. These key values help prevent cross-site script forgery attacks. This is the default.<br/><br/>`0` disables the use of the key.|No|
|`--magento-init-params`|Add to any command to customize Magento initialization parameters<br/><br/>For example: `MAGE_MODE=developer&MAGE_DIRS[base][path]=/var/www/example.com&MAGE_DIRS[cache][path]=/var/tmp/cache`|No|
