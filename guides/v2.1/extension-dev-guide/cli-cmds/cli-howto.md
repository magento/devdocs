---
group: extension-dev-guide
subgroup: 65_CLI
title: How to add CLI commands
menu_title: How to add CLI commands
menu_node: 
menu_order: 3
version: 2.1
redirect_from: /guides/v2.0/extension-dev-guide/cli-howto.html
---

## Overview of adding CLI commands {#cli-add-over}

Magento enables your component to add commands to our Symfony-like command-line interface (CLI). 

### About the Magento CLI
{% include install/new-cli-intro.html %}

### Prerequisites

Before you begin, make sure you understand the following:

*	All Magento command-line interface (CLI) commands rely on the Magento application and must have access to its context, dependency injections, plug-ins, and so on.
*	All CLI commands should be implemented in the scope of your {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} and should depend on the module's status.
*	Your command can use the Object Manager and Magento dependency injection features; for example, it can use <a href="{{ page.baseurl }}/extension-dev-guide/depend-inj.html#dep-inj-preview-cons">constructor dependency injection</a>.
*	You must register your commands as discussed in any of the following sections:

	*	<a href="#cli-sample">Add CLI commands using dependency injection</a>
	*	<a href="#cli-autoload">Add CLI commands using the Composer autoloader</a>

## Add CLI commands using dependency injection {#cli-sample}

The Magento 2 sample modules provide a demonstration of many programming techniques, including adding a CLI command using {% glossarytooltip 2be50595-c5c7-4b9d-911c-3bf2cd3f7beb %}dependency injection{% endglossarytooltip %}. Look at the <a href="https://github.com/magento/magento2-samples/tree/master/sample-module-command" target="_blank">`sample-module-command`</a> for an example. The module's <a href="https://github.com/magento/magento2-samples/blob/master/sample-module-command/README.md" target="_blank">README.md</a> discusses how to install it.

Following is a summary of the process:

1.	Create a Command class (the recommended location is `<your component root dir>/Console/Command`).

	See `app/code/Magento/CommandExample/Console/Command` for examples.
2.	Declare your Command class in `Magento\Framework\Console\CommandListInterface` using dependency injection (`<your component root dir>/etc/di.xml`).
3.	Clean the {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} and compiled code directories:

		cd <your Magento install dir>/var
		rm -rf cache/* page_cache/* di/* generation/* 

## Add CLI commands using the Composer autoloader {#cli-autoload}

To be added at a later time.

#### Related topic

<a href="{{ page.baseurl }}/extension-dev-guide/cli-cmds/cli-naming-guidelines.html">Command naming guidelines</a>

