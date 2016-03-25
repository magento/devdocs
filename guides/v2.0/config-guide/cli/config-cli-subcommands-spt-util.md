---
layout: default
group: config-guide 
subgroup: CLI
title: Run the support utilities
menu_title: Run the support utilities (Enterprise Edition only)
menu_node: 
menu_order: 900
github_link: config-guide/cli/config-cli-subcommands-spt-util.md
---

<img src="{{ site.baseurl }}common/images/ee-only_large.png" alt="This topic applies to Enterprise Edition only">

#### Contents
*	[Overview of the support utilities](#config-cli-spt-utils-over)
*	[Create a code backup](#config-cli-spt-utils-code)
*	[Create a database backup](#config-cli-spt-utils-db)
*	[Troubleshooting: display utilities and paths](#config-cli-spt-utils-trouble)

## Overview of the support utilities {#config-cli-spt-utils-over}
The Magento support utilities (also referred to as the [*Data Collector*](http://docs.magento.com/m2/ee/user_guide/system/support-data-collector.html){:target="_blank"}) enable Enterprise Edition (EE) users to gather troubleshooting information about your system that can be used by our Support team. The utilities take several minutes to complete.

## First steps {#first}
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands.html#config-cli-subcommands-common">Common arguments</a>.

## Create a code backup {#config-cli-spt-utils-code}
This command backs up code and compresses it in `tar.gz` format.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>This is <em>not</em> the same code backup performed by the [<code>magento setup:backup</code>]({{ site.gdeurl }}install-gde/install/cli/install-cli-backup.html) command. This command is intended to be used to back up code for examination by Magento Support.</p></span>
</div>

Command options:

	magento support:backup:code [--name=<file name>] [-o|--output=<path>] [-l|--logs]

where 

*	`--name` specifies the dump file name (optional). If you omit this parameter, the dump file is time and date-stamped.
*	`-o|--output=<path>` is the absolute file system path to store the backup (required).
*	`-l|--logs` includes log files (optional).

For example, to create a code backup named `/var/www/html/magento2/var/log/mycodebackup.tar.gz`, enter:

	magento magento support:backup:code --name mycodebackup -o /var/www/html/magento2/var/log

After the command completes, send the code backup to Magento Support.

## Create a database backup {#config-cli-spt-utils-db}
This command backs up the Magento database and compresses it in `tar.gz` format.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>This is <em>not</em> the same database backup performed by the [<code>magento setup:backup</code>]({{ site.gdeurl }}install-gde/install/cli/install-cli-backup.html) command. This command is intended to be used to back up code for examination by Magento Support.</p></span>
</div>

Command options:

	magento support:backup:db [--name=<name>] [-o|--output=<path>] [-l|--logs] [-i|--ignore-sanitize]

where 

*	`--name` specifies the dump file name (optional). If you omit this parameter, the dump file is time and date-stamped.
*	`-o|--output=<path>` is the absolute file system path to store the backup (required).
*	`-l|--logs` includes log files (optional).
*	`-i|--ignore-sanitize` means that data is preserved; omit the flag to hash [sensitive data](#sens-data) stored in the database when creating the backup (optional).

After the command completes, send the database backup to Magento Support.

{% include install/sens-data.md %}

## Troubleshooting: display utilities and paths {#config-cli-spt-utils-trouble}
We provide commands that display paths to utilities required by the Data Collector and the command line. You can use these commands, for example, if errors like the following display in the Admin or on the command line:

	Utility lsof not found

Run the following commands in the order shown to display the paths to the applications used by the support utilities and Data Collector:

1.	`magento support:utility:paths` creates `<your Magento install dir>/var/support/Paths.php`, which lists the paths to all application used by the utility. 
2.	`magento support:utility:check -u` displays the file system paths.

A sample follows:

	gzip => /bin/gzip
	lsof => /usr/sbin/lsof
	mysqldump => /usr/bin/mysqldump
	nice => /bin/nice
	php => /usr/bin/php
	tar => /bin/tar
	sed => /bin/sed
	bash => /bin/bash
	mysql => /usr/bin/mysql

To resolve issues with running the tools, make sure these applications are installed and are in the web server user's `PATH`.


#### Related topics

*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cron.html">Configure and run cron</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler.html">Code compiler</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-urn.html">URN highlighter</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-depen.html">Dependency reports</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-less-sass.html">Create symlinks to LESS files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-test.html">Run unit tests</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-layout-xml.html">Convert layout XML files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-perf-data.html">Generate data for performance testing</a>
