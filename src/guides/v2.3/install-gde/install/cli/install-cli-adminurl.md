---
group: installation-guide
title: Display or change the Admin URI
functional_areas:
  - Install
  - System
  - Setup
---

## First steps {#instgde-cli-before}
{% include install/first-steps-cli.md %}
In addition to the command arguments discussed here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common).

## Prerequisites {#instgde-cli-subcommands-db-prereq}

Before you run this command, you must [Create or update the deployment configuration]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html).

## Display the Admin URI {#instgde-cli-displayurl}
This section discusses how to use the command line to display the [Admin](https://glossary.magento.com/admin) Uniform Resource Identifier ([URI](http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.2){:target="_blank"}).

Command options:

```bash
bin/magento info:adminuri
```

A sample result follows:

```terminal
Admin Panel URI: /admin_1wgrah
```

You can also view the Admin URI in `<magento_root>/app/etc/env.php`. A snippet follows:

```php?startinline=1
  'backend' =>
  array (
    'frontName' => 'admin_1wgrah',
  ),
```

## Change the Admin URL {#instgde-cli-changeurl}

To change the Admin URI, use the [magento setup:config:set]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html) command.