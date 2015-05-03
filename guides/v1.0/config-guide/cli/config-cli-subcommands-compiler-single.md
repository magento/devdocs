---
layout: default
group: config-guide
subgroup: CLI
title: Single-store compiler
menu_title: Single-store compiler
menu_node: 
menu_order: 11
github_link: config-guide/cli/config-cli-subcommands-compiler-single.md
---


#### Contents

*	<a href="#config-cli-before">First steps</a>
*	<a href="#config-cli-subcommands-configphp-prereq">Prerequisites</a>
*	<a href="#config-cli-subcommands-single">Run the single-store compiler</a>

<h2 id="config-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
  
<h2 id="config-cli-subcommands-single">Run the single-store compiler</h2>
Use this command if you have one website and store. If you have multiple websites and stores, use the <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-multi.html">multi-store compiler</a> instead.

This command generates non-existent classes such as factories and interceptors for plug-ins. It also generates the <a href="{{ site.gdeurl }}extension-dev-guide/depend-inj.html">dependency injection</a> configuration for the object manager. Generated code and the dependency injection configuration is written to the `<your Magento install dir>/var/generation` and `<your Magento install dir>/var/di` directories, respectively. 

If `<your Magento install dir>/var/di/definitions.php` exists, it is used by <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/ObjectManager/Definition/Compiled.php" target="_blank">Magento\Framework\ObjectManager\Definition\Compiled</a>; otherwise, the much slower <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/ObjectManager/Definition/Runtime.php" target="_blank">Magento\Framework\ObjectManager\Definition\Runtime</a> is used. (This class uses reflection based the definition builder.) 

Runtime definition compilation is fine in a development environment but you should use the compiler in a production environment.

Command options:

	php magento setup:di:compile

	Generated code and dependency injection configuration successfully.

#### Related topics


