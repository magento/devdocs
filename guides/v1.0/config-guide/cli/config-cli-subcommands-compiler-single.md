---
layout: default
group: config-guide
subgroup: CLI
title: Single-tenant compiler
menu_title: Single-tenant compiler
menu_node: 
menu_order: 11
github_link: config-guide/cli/config-cli-subcommands-compiler-single.md
---


#### Contents

*	<a href="#config-cli-before">First steps</a>
*	<a href="#config-cli-subcommands-single-overview">Overview of the single-tenant compiler</a>
*	<a href="#config-cli-subcommands-single-run">Run the single-tenant compiler</a>

<h2 id="config-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}

<h2 id="config-cli-subcommands-single-overview">Overview of the single-tenant compiler</h2>
Use this command if you have one website and store. If you have multiple websites and stores, use the <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-multi.html">multi-tenant compiler</a> instead.

{% include install/cli_tenant-compiler.html %}
  
<h2 id="config-cli-subcommands-single">Run the single-tenant compiler</h2>
Run the command as follows (there are no options):

	magento setup:di:compile

The following message displays to confirm success:

	Generated code and dependency injection configuration successfully.

#### Related topics

*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-multi.html">Multi-tenant compiler</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-log.html">Clean the logs</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-less-sass.html">Create LESS from CSS</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-test.html">Run tests</a>