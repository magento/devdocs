---
layout: default
group: extension-dev-guide
subgroup: 65_CLI
title: How to add CLI commands
menu_title: How to add CLI commands
menu_node:
menu_order: 3
version: 2.1
github_link21: extension-dev-guide/cli-cmds/cli-howto.md
---

#### Contents
*	<a href="#cli-add-over">Overview of adding CLI commands</a>
*	<a href="#cli-sample">Add CLI commands using dependency injection</a>
*	<a href="#cli-autoload">Add CLI commands using the Composer autoloader</a>

<h2 id="cli-add-over">Overview of adding CLI commands</h2>
Magento enables your component to add commands to our Symfony-like command-line interface (CLI).

### About the Magento CLI
{% include install/new-cli-intro.html %}

### Prerequisites
Before you begin, make sure you understand the following:

*	All Magento command-line interface (CLI) commands rely on the Magento application and must have access to its context, dependency injections, plug-ins, and so on.
*	All CLI commands should be implemented in the scope of your module and should depend on the module's status.
*	Your command can use the Object Manager and Magento dependency injection features; for example, it can use <a href="{{ site.gdeurl21 }}extension-dev-guide/depend-inj.html#dep-inj-preview-cons">constructor dependency injection</a>.
*	You must register your commands as discussed in any of the following sections:

	*	<a href="#cli-sample">Add CLI commands using dependency injection</a>
	*	<a href="#cli-autoload">Add CLI commands using the Composer autoloader</a>

<h2 id="cli-sample">Add CLI commands using dependency injection</h2>
The Magento 2 sample modules provide a demonstration of many programming techniques, including adding a CLI command using dependency injection. Look at the <a href="https://github.com/magento/magento2-samples/tree/master/sample-module-command" target="_blank">`sample-module-command`</a> for an example. The module's <a href="https://github.com/magento/magento2-samples/blob/master/sample-module-command/README.md" target="_blank">README.md</a> discusses how to install it.

Following is a summary of the process:

1.	Create a Command class (the recommended location is `<your component root dir>/Console/Command`).

	See `app/code/Magento/CommandExample/Console/Command` for examples.
2.	Declare your Command class in `Magento\Framework\Console\CommandList` using dependency injection (`<your component root dir>/etc/di.xml`).
3.	Clean the cache and compiled code directories:

		cd <your Magento install dir>/var
		rm -rf cache/* page_cache/* di/* generation/*

<h2 id="cli-autoload">Add CLI commands using the Composer autoloader</h2>
To be added at a later time.

#### Related topic
<a href="{{ site.gdeurl21 }}extension-dev-guide/cli-cmds/cli-naming-guidelines.html">Command naming guidelines</a>
