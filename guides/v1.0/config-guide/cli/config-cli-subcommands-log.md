---
layout: default
group: config-guide
subgroup: CLI
title: Clear the logs
menu_title: Clear the logs
menu_node: 
menu_order: 12
github_link: config-guide/cli/config-cli-subcommands-log.md
---


#### Contents

*	<a href="#config-cli-before">First steps</a>
*	<a href="#config-cli-subcommands-log-status">View log status</a>

<h2 id="config-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}

<h2 id="config-cli-subcommands-log-status">View log status</h2>
Command options:

	php magento log:status

	-----------------------------------+------------+------------+------------+
	Table Name                         | Rows       | Data Size  | Index Size |
	-----------------------------------+------------+------------+------------+
	log_customer                       | 0          | 16.00Kb    | 16.00Kb    |
	log_visitor                        | 0          | 16.00Kb    | 0 b        |
	log_visitor_info                   | 0          | 16.00Kb    | 0 b        |
	catalog_compare_item               | 0          | 16.00Kb    | 64.00Kb    |
	-----------------------------------+------------+------------+------------+
	Total                              | 0          | 64.00Kb    | 80.00Kb    |
	-----------------------------------+------------+------------+------------+

<h2 id="config-cli-subcommands-log-clean">Clean the logs</h2>
Command options:

	php magento log:clean [--days=<clean logs older than>]

where `days` is the number of days to keep. The default is `1`; in other words, logs older than one day are cleaned.




#### Related topics


