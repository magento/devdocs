---
layout: default 
group: install 
subgroup: R_Installation
title: Install the Magento software using the Setup Wizard
menu_title: Install the Magento software using the Setup Wizard
menu_node:
menu_order: 8
github_link: install-gde/install/install-web.md
---

<h4>Contents</h4> 

See one of the following sections:

*	<a href="#instgde-install-prereq">Before you start your installation</a>
*	<a href="#instgde-install-magento-web">Running the Setup Wizard</a>

This section discusses how to install the Magento software using a web-based wizard interface. To install Magento from the command line, see <a href="{{ site.gdeurl }}install-gde/install/install-cli.html">Install Magento software using the command line</a>.

<h2 id="instgde-install-prereq">Before you start your installation</h2>

Before you begin, make sure that:

1.	Your system meets the requirements discussed in <a href="{{ site.gdeurl }}install-gde/system-requirements.html">Magento System Requirements</a>.
2.	You completed all prerequisite tasks discussed in <a href="{{ site.gdeurl }}install-gde/prereq/prereq-overview.html">Prerequisites</a>.
3.	You installed Composer and cloned the Magento GitHub repository as discussed in <a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Install Composer and clone the Magento GitHub repository</a>.
4.	After you log in to the Magento server, switch to the web server user as discussed in <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">Switching to the Apache user</a>.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>You must install Magento from its <code>setup</code> subdirectory.</p></span>
</div>

<h2 id="instgde-install-magento-web">Running the Setup Wizard</h2>

The Setup Wizard is a multi-page wizard that enables you to go back and forward one page at a time. You *cannot* skip pages, and you must enter all required information on every page before you can proceed to the next page.

In the event of errors, you can run the installer again or you can return to a previous page to fix errors on that page.

See one of the following sections for more information:

*	<a href="#instgde-install-magento-web-step0">Getting started</a>
*	<a href="#instgde-install-magento-web-step1">Step 1: Readiness Check</a>
*	<a href="#instgde-install-magento-web-step2">Step 2: Add a Database</a>
*	<a href="#instgde-install-magento-web-step4">Step 4: Customize Your Store</a>
*	<a href="#instgde-install-magento-web-step5">Step 5: Create Admin Account</a>
*	<a href="#instgde-install-magento-web-step6">Step 6: Install</a>
*	<a href="#instgde-install-magento-web-step5last">Installation Success</a>
*	<a href="#instgde-install-magento-web-log">Viewing the installation log</a>

<h3 id="instgde-install-magento-web-step0">Getting started</h3>

To install the Magento software using the Setup Wizard:

1.	Start a web browser.

2.	Enter the following URL in the browser's address or location bar:

	<pre>http://[Magento host or IP]/[path to Magento root]/setup</pre>
	
	For example, if the Magento server's IP address is 192.0.2.10 and you installed Magento 2 in the <tt>magento2</tt> directory relative to the web server's docroot, and you did not configure a Virtual Host, enter:
	
	<pre>http://192.0.2.10/magento2/setup</pre>
	
3.	On the initial page, click **Agree and Set Up Magento**.

4.	Continue with the following sections in the order presented to complete the installation.

<h3 id="instgde-install-magento-web-step1">Step 1: Readiness Check</h3>

1.	Click **Start Readiness Check**.

	If any errors display, you must resolve them before you continue.

	Click **More detail** if available to see more information about each check.
	
2.	Click **Next**.

<h3 id="instgde-install-magento-web-step2">Step 2: Add a Database</h3>

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

<h3 id="instgde-install-magento-web-step3">Step 3: Web Configuration</h3>

1.	Enter the following information:

	<table>
	<tbody>
		<tr>
			<th>Item</th>
			<th>Description</th>
		</tr>
	<tr>
		<td>Your Store Address </td>
		<td><p>Enter the URL, <em>including scheme and trailing slash</em>, by which users access your storefront.</p>
		<p>For example, if your storefront host name is <tt>http://www.example.com</tt>, enter <tt>http://www.example.com/</tt></p></td>
	</tr>
	<tr>
		<td>Magento Admin Address </td>
		<td>Enter the relative URL by which to access the Magento Admin.</td>
	</tr>
	</tbody>
	</table>
	
2.	Optionally click **Advanced Options** and enter the following information:

	<table>
	<tbody>
	<tr>
			<th>Item</th>
			<th>Description</th>
		</tr>
	<tr>
		<td>HTTPS Options</td>
		<td>Select the check box to enable the use of Secure Sockets Layer (SSL) in the indicated URL. Make sure your web server supports SSL before you select either check box.</td>
	</tr>
	<tr>
		<td>Apache Rewrites</td>
		<td>Select this check box to use Apache rewrites. We support this option only if you enabled server rewrites when you installed <a href="{{ site.gdeurl}}install-gde/prereq/apache.html">Apache</a>.</td>
	</tr>
	<tr>
		<td>Encryption Key</td>
		<td><p>Magento uses an encryption key to encrypt passwords and personally identifiable customer information in the database.</p>
		<p>Click <strong>I want to use a Magento generated key</strong> to have Magento generate an encryption key for you.</p>
		<p>Click <strong>I want to use my own encryption key</strong> if you already have an encryption key.</p></td>
	</tr>
	</tbody>
	</table>
	
12.	Click **Next**.

<h3 id="instgde-install-magento-web-step4">Step 4: Customize Your Store</h3>

1.	To install optional sample data, select the **Use Sample Data** check box.

	<div class="bs-callout bs-callout-info" id="info">
  	<p>If the <strong>Use Sample Data</strong> check box is not available, see <a href="{{ site.gdeurl }}install-gde/install/sample-data.html">Enable optional Magento sample data</a>.</p>
	</div>

1.	From the **Store Default Time Zone** list, click the name of your store's time zone.

2.	From the **Store Default Currency** list, click the default currency to use in your store.

3.	From the **Store Default Language** list, click the default language to use in your store.

4.	Click **Next**.

<h3 id="instgde-install-magento-web-step5">Step 5: Create Admin Account</h3>

1.	Enter the following information:

	<table>
	<tbody>
	<tr>
			<th>Item</th>
			<th>Description</th>
		</tr>
	<tr>
		<td>New Username</td>
		<td>Enter a user name with which to log in to the Magento Admin. This user is an administrator and can create other users, including other administrative users.</td>
	</tr>
	<tr>
		<td>New E-Mail</td>
		<td>Enter the Magento administrator's e-mail address.</td>
	</tr>
	<tr>
		<td>New Password</td>
		<td>Enter the administrator's password.</td>
	</tr>
	<tr>
		<td>Confirm Password</td>
		<td>Enter the password again for verification.</td>
	</tr>
	</tbody>
	</table>

2.	Click **Next**.

<h3 id="instgde-install-magento-web-step6">Step 6: Install</h3>

Click **Install Now**.

You have the following options:

*	To see installation progress or error details, click **Console Log**.
*	In the event of problems, click **Previous** to go back and fix incorrect entries.
*	To try the installation again in the event of failure, click **Try Again**.

<h3 id="instgde-install-magento-web-step5last">Installation Success</h3>

The message `Success` displays to indicate a successful installation.

If the installation failed, click **Previous** to review the information you entered, make sure the Magento server and database host are still reachable, or see <a href="{{ site.gdeurl }}install-gde/trouble/tshoot.html">Troubleshooting</a>.

You can also run the installer again.

<h3 id="instgde-install-magento-web-log">Viewing the installation log</h3>
The Setup Wizard creates a log file, named `install.log`, that you might find useful in debugging issues or in verifying the actions performed by the wizard.

The Setup Wizard uses the <a href="http://php.net/manual/en/function.sys-get-temp-dir.php" target="_blank">sys_get_temp_dir ( void )</a> PHP call to determine where to write the installation log. To locate the log:

1.	Open `php.ini` in a text editor.

	If you don't know where `php.ini` is located:

	1.	Log in as or switch to the <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">web server user</a>.
	2.	Create <a href="{{ site.gdeurl }}install-gde/prereq/optional.html#install-optional-phpinfo">phpinfo.php</a> in the web server's docroot.
	3.	Access `phpinfo.php` in a web browser.

		The location of `php.ini` is typically specified as **Loaded Configuration File** in the displayed results.

2.	Search for `sys_temp_dir`.

The value of `sys_temp_dir` determines where `install.log` is located. If the value is commented out, PHP uses that value as its default. 

A typical default value is `/tmp`. If that's the case, the log is `/tmp/install.log`.

#### Next step

<a href="{{ site.gdeurl }}install-gde/install/verify.html">Verify the installation</a>.
