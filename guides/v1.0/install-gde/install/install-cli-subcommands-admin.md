---
layout: default
group: install 
subgroup: T_Command-line installation
title: Create a Magento administrator
menu_title: Create a Magento administrator
menu_node: 
menu_order: 19
github_link: install-gde/install/install-cli-subcommands-admin.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-install-cli-first">First steps</a>
*	<a href="#instgde-cli-storeconfig">Set store configuration options</a>
*	<a href="#instgde-cli-maint-exempt">Maintain the list of exempt IP addresses</a>


<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}

<h2 id="instgde-cli-storeconfig">Set store configuration options</h2>


Command usage:

	magento setup:store-config:set [--<parameter_name>=<value>, ...]

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Before you can run this command, you must have already created the deployment configuration file, <a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-deployment.html">config.php</a>. </p></span>
</div>


where the following table defines parameters and values.

<table>
	<tbody>
		<tr>
			<th>Name</th>
			<th>Value</th>
			<th>Required?</th>
		</tr>
		<tr>
		<td><p>base_url</p></td>
		<td><p>Base URL to use to access your Magento Admin and storefront in the format <code>http[s]://&lt;host or ip>/&lt;your Magento install dir>/</code>.</p>
		<p><strong>Note</strong>: The scheme (<code>http://</code> or <code>https://</code>) and a trailing slash are <em>both</em> required.</p>
		<p><code>&lt;your Magento install dir></code> is the docroot-relative path in which to install the Magento software. Depending on how you set up your web server and virtual hosts, the path might be <code>magento2</code> or it might be blank.</p>
		<p>To access Magento on localhost, you can use either <code>http://localhost/&lt;your Magento install dir>/</code> or <code>http://localhost/&lt;your Magento install dir>/</code>.</p>
		</td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>language</p></td>
		<td><p>Language code to use in the Admin and storefront. (If you have not done so already, you can view the list of language codes by entering <code>php magento info:language:list</code> from the <code>bin</code> directory.)</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>currency</p></td>
		<td><p>Default currency to use in the storefront. (If you have not done so already, you can view the list of currencies by entering <code>php magento info:currency:list</code> from the <code>bin</code> directory.)</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>timezone</p></td>
		<td><p>Default time zone to use in the Admin and storefront. (If you have not done so already, you can view the list of time zones by entering <code>php magento info:timezone:list</code> from the <code>bin</code> directory.)</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>use_secure</p></td>
		<td><p><code>1</code> enables the use of Secure Sockets Layer (SSL) in all URLs (both Admin and storefront). Make sure your web server supports SSL before you select this option.</p>
		<p><code>0</code> disables the use of SSL with Magento. In this case, all other secure URL options are assumed to also be <code>0</code>.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>base_url_secure</p></td>
		<td><p><code>1</code> means SSL is preferred in Magento URLs designed to use it (for example, the checkout page). Make sure your web server supports SSL before you select this option.</p>
		<p><code>0</code> means SSL is not used.</p></td>
		<td><p>No</p></td>
	</tr>

	<tr>
		<td><p>use_secure_admin</p></td>
		<td><p><code>1</code> means you use SSL to access the Magento Admin. Make sure your web server supports SSL before you select this option.</p>
		<p><code>0</code> means you do not use SSL with the Admin.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>admin_use_security_key</p></td>
		<td><p><code>1</code> causes the Magento software to use a randomly generated key value to access pages in the Magento Admin and in forms. These key values help prevent <a href="https://www.owasp.org/index.php/Cross-Site_Request_Forgery_%28CSRF%29" target="_blank">cross-site script forgery attacks</a>.</p>
		<p><code>0</code> disables the use of the key.</p></td>
		<td><p>No</p></td>
	</tr>
	<!-- <tr> 
		<td>enable_modules=&lt;list>}</td>
		<td><p>Enable modules that are installed but disabled where <code>&lt;list></code> is a comma-separated list of modules (no spaces allowed). Use <code>php index.php help module-list</code> to list enabled and disabled modules.</p>
		<p>To enable and disable modules after installing Magento, see <a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable and disable modules</a>.</p>
		<p>For important information about module dependencies, see <a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-modules">About enabling and disabling modules</a>.</p></td>  
		<td>No</td>
	</tr>
	<tr>
		<td>disable_modules=&lt;list>}</td>
		<td><p>Disable modules that are installed and enabled where <code>&lt;list></code> is a comma-separated list of modules (no spaces allowed). Use <code>php index.php help module-list</code> to list enabled and disabled modules.</p>
		<p>To enable and disable modules after installing Magento, see <a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable and disable modules</a>.</p>
		<p>For important information about module dependencies, see <a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-modules">About enabling and disabling modules</a>.</p></td>
		<td>No</td>
	</tr> -->
	<tr>
		<td><p>session_save</p></td>
		<td><p>Use any of the following:</p>
		<ul><li><code>files</code> to store session data in the file system. File-based session storage is appropriate unless the Magento file system access is slow or you have a clustered database.</li>
		<li><code>db</code> to store session data in the database. Choose database storage if you have a clustered database; otherwise, there might not be much benefit over file-based storage.</li></ul></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>key</p></td>
		<td>If you have one, specify a key to encrypt personally identifiable data in the Magento database. If you don't have one, Magento generates one for you.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>use_sample_data</p></td>
		<td><p>Use this parameter to install optional Magento sample data. Magento sample data uses the Luma theme to provide you with a sample storefront, complete with products, customers, products, CMS pages, and so on. You can use it to get the feel of a Magento storefront.</p>
		<p>Sample data installs only if you already enabled the package as discussed in <a href="{{ site.gdeurl }}install-gde/install/sample-data.html">Enable optional Magento sample data</a></p>.</td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>cleanup_database</p></td>
		<td><p>To drop database tables before installing the Magento software, specify this parameter without a value. Otherwise, the Magento database is left intact.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>db_init_statements</p></td>
		<td><p>Advanced MySQL configuration parameter. Uses database initialization statements to run when connecting to the MySQL database. Consult a reference similar to <a href="http://dev.mysql.com/doc/refman/5.6/en/server-options.html" target="_blank">this one</a> before you set any values.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>sales_order_increment_prefix</p></td>
		<td><p>Specify a string value to use as a prefix for sales orders. Typically, this is used to guarantee unique order numbers for payment processors.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>definition_format</p></td>
		<td><p>Type of definitions used by the Object Manager. Possible values are <a href="https://github.com/phadej/igbinary" target="_blank"><code>igbinary</code></a> or <code>serialized</code>.</p></td>
		<td><p>No</p></td>
	</tr>

	</tbody>
</table>

<h2 id="instgde-cli-maint-exempt">Maintain the list of exempt IP addresses</h2>
To maintain the list of exempt commands, you can either use the `[--ip=<ip list>]` option in the preceding commands or you can use the following:

	magento maintenance:allow-ips [--ip=<ip list>] [--none]

where 

`--ip=<ip list>` is an optional comma-delimited list of IP addresses to exempt. 

`--none` clears the list.


#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html">Install the Magento software using the command line</a>

<!-- *	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable and disable modules</a>
 -->
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-deployment.html">Create the deployment configuration, config.php</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli.html">Command line installation</a>