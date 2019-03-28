---
group: php-developer-guide
subgroup: 65_CLI
title: How to add CLI commands
menu_title: How to add CLI commands
menu_node: 
menu_order: 3
redirect_from: /guides/v2.0/extension-dev-guide/cli-howto.html
---

## Overview of adding CLI commands {#cli-add-over}

Magento enables your component to add commands to our Symfony-like command-line interface (CLI). 

### About the Magento CLI
{% include install/new-cli-intro.md %}

### Prerequisites

Before you begin, make sure you understand the following:

*	All Magento command-line interface (CLI) commands rely on the Magento application and must have access to its context, dependency injections, plug-ins, and so on.
*	All CLI commands should be implemented in the scope of your {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} and should depend on the module's status.
*	Your command can use the Object Manager and Magento dependency injection features; for example, it can use [constructor dependency injection]({{ page.baseurl }}/extension-dev-guide/depend-inj.html#constructor-injection).
*	You must register your commands as discussed in any of the following sections:

	*	[Add CLI commands using dependency injection](#cli-sample)
	*	[Add CLI commands using the Composer autoloader](#cli-autoload)

## Add CLI commands using dependency injection {#cli-sample}
The Magento 2 sample modules provide a demonstration of many programming techniques, including adding a CLI command using {% glossarytooltip 2be50595-c5c7-4b9d-911c-3bf2cd3f7beb %}dependency injection{% endglossarytooltip %}. Look at the [`sample-module-command`](https://github.com/magento/magento2-samples/tree/master/sample-module-command){:target="_blank"} for an example. The module's [README.md](https://github.com/magento/magento2-samples/blob/master/sample-module-command/README.md){:target="_blank"} discusses how to install it.

Following is a summary of the process:

1.	Create a Command class (the recommended location is `<your component root dir>/Console/Command`).

	See [`<Magento_Store_module_dir>/Console/Command/StoreListCommand.php`]({{ site.mage2300url }}app/code/Magento/Store/Console/Command/StoreListCommand.php) for example.
2.	Declare your Command class in `Magento\Framework\Console\CommandListInterface` using dependency injection (`<your component root dir>/etc/di.xml`):

``` xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
    ...
    <type name="Magento\Framework\Console\CommandList">
        <arguments>
            <argument name="commands" xsi:type="array">
                <item name="commandexample_somecommand" xsi:type="object">Magento\CommandExample\Console\Command\SomeCommand</item>
            </argument>
        </arguments>
    </type>
    ...
</config>
```

3.	Clean the {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} and compiled code directories:

		cd <your Magento install dir>/var
		rm -rf cache/* page_cache/* di/* generation/* 

## Add CLI commands using the Composer autoloader {#cli-autoload}

To be added at a later time.

#### Related topic

[Command naming guidelines]({{ page.baseurl }}/extension-dev-guide/cli-cmds/cli-naming-guidelines.html)

