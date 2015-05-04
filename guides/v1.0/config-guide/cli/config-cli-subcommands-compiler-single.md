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

{% include install/cli_tenant-compiler.html %}

Command options:

	php magento setup:di:compile

The following message displays to confirm success:

	Generated code and dependency injection configuration successfully.

#### Related topics


