---
layout: default
group: extension-dev-guide
subgroup: 65_CLI
title: How to add CLI commands
menu_title: How to add CLI commands
menu_node: 
menu_order: 3
github_link: extension-dev-guide/cli-howto.md
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

*	All Magento command-line interface (CLI) commands rely on the Magento application and must have access to its context, dependency injections, plugins, and so on.
*	All CLI commands should be implemented in the scope of your module and should depend on the module's status.
*	Your command can use the Object Manager and Magento dependency injection features; for example, it can use <a href="{{ site.gdeurl }}extension-dev-guide/depend-inj.html#dep-inj-preview-cons">constructor dependency injection</a>.
*	You must register your command as discussed in TBD.

<h2 id="cli-sample">Add CLI commands using dependency injection</h2>
TBD

<h2 id="cli-autoload">Add CLI commands using the Composer autoloader</h2>
TBD

#### Related topic
<a href="{{ site.gdeurl }}extension-dev-guide/cli-naming-guidelines.html">Command naming guidelines</a>

