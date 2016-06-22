---
layout: default
group: 
subgroup: Installation and configuration
title: Magento mode switch
menu_title: Magento mode switch
menu_node: parent
menu_order: 1
version: 2.0
github_link: howdoi/install/mode-switch.md
---

The Magento application has three *modes* of operation that make it convenient for you to deploy it in a development or production environment.

The two modes you hear the most about are <a href="{{page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-introduction">*developer mode*</a> and <a href="{{page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-introduction">*production mode*</a>. Aptly named, these modes are intended for development and production use, respectively.

Not only do these modes enable you to change Magento application behavior, switching between them using the <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-mode.html">`magento deploy:mode:set`</a> command also sets file system permissions automatically.

To switch modes:

1.	Log in as, or switch to, the <a href="{{page.baseurl}}install-gde/prereq/apache-user.html">Magento file system owner</a>.
2.	Change to the `<your Magento install dir>/bin` directory.
2.	Use the `magento deploy:mode:set` command as summarized in the following table.

	<table>
	<tbody>
		<tr>
			<th>Mode</th>
			<th>Command</th>
			<th>File system permissions</th>
		</tr>
		<tr>
		<td>developer</td>
		<td><code>magento deploy:mode:set developer</code></td>
		<td><p>Directories: 770 (owner and group have full control, all others have no access)</p>
			<p>Files: 660 (owner and group have write access, all others have no access)</td>
	</tr>
	<tr>
		<td>production</td>
		<td><code>magento deploy:mode:set production [--keep-generated]</code></td>
		<td><p>Directories: 750 (owner has full control, group has read and execute access, all others have no access)</p>
			<p>Files: 640 (owner has write access, group has read-only access, all others have no access)</td>
	</tr>
	
	</tbody>
	</table>
