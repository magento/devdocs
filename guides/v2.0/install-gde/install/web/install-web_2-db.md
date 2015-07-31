---
layout: default 
group: install_wiz 
subgroup: Wizard
title: Step 2. Add a Database
menu_title: Step 2. Add a Database
menu_node: 
menu_order: 3
github_link: install-gde/install/web/install-web_2-db.md
---

## Before you begin
{% include install/before-you-begin-web.html %}

<h2 id="instgde-install-magento-web-step2">Step 2: Add a Database</h2>

1.	Enter the following information:

	<table>
	<tbody>
		<tr>
			<th>Item</th>
			<th>Description</th>
		</tr>
	<tr>
		<td>Database Server Host</td>
		<td>If the web server and database server are located on the same host, enter <tt>localhost</tt>. If the database server is located on a different host, enter its fully qualified host name or IP address.</td>
	</tr>
	<tr>
		<td>Database Server Username</td>
		<td>Enter the user name of the Magento database instance owner.</td>
	</tr>
	<tr>
		<td>Database Server Password</td>
		<td>Enter the Magento database user's password, if any. Leave this field blank if you did not configure a password.</td>
	</tr>
	<tr>
		<td>Database Name</td>
		<td>Enter the Magento database instance name.</td>
	</tr>
	<tr>
		<td>Table prefix</td>
		<td><p>Use only if you're installing the Magento database tables in a database instance that has Magento tables in it already.</p>
		<p>In that case, use a prefix to identify the Magento tables for this installation. Some customers have more than one Magento instance running on a server with all tables in the same database.</p>
		<p>This option enables those customers to share the database server with more than one Magento installation.</p></td>
	</tr>
	</tbody>
	</table>
	
3.	Click **Next**.

3.	Continue with <a href="{{ site.gdeurl }}install-gde/install/web/install-web_3-web-conf.html">Step 3. Web Configuration</a>.
