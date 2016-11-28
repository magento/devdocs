---
layout: default
group: release-notes
subgroup: Technical Bulletin
title: Technical Bulletin
menu_title: Magento upgrade issues (Jan. 28, 2016)
menu_node: 
menu_order: 5
version: 2.0
github_link: release-notes/tech_bull_201-upgrade.md
redirect_from: 
  - /guides/v2.0/release-notes/tech_bull_jan_22_16.html
  - /guides/v2.1/release-notes/tech_bull_201-upgrade.html
---

This bulletin informs you of the following issues:

*	[Issue: Upgrade fails because of missing `.gitignore` files](#gitignore)
*	[Error during upgrade: "We're sorry, we can't take that action right now"](#sorry)

### Issue: Upgrade failures {#gitignore}
Magento Community Edition (CE) and Enterprise Edition (EE) upgrades failed in any of the following circumstances:

*	If you got the Magento software <a href="{{page.baseurl}}install-gde/prereq/zip_install.html">compressed archive</a> (`.tar.gz`, `.zip`, or `.bz2`).
*	If your server runs PHP 7 and you installed the Magento software using *either* a <a href="{{page.baseurl}}install-gde/prereq/zip_install.html">compressed archive</a> or the <a href="{{page.baseurl}}install-gde/prereq/integrator_install.html">Composer metapackage</a>.

We addressed the following issues:

*	Missing `.gitignore` files that resulted in exceptions
*	An error related to the updater application and PHP 7:

		PHP Warning: require_once(/public_html/magento2/update/vendor/autoload.php): failed to open stream: No such file or directory in /public_html/magento2/update/app/bootstrap.php

The following table summarizes what you need to do.

<table>
	<tbody>
<tr> 
	<th>Upgrade path</th>
	<th>What to do</th>
</tr>
<tr>
	<td>Magento CE or EE 2.0.2 installed <em>or</em> you haven't installed Magento yet.</td>
	<td><p>No action is required. Install version 2.0.2 if you haven't already.</p>
		<p>You can ignore this bulletin.</p></td>
</tr>
<tr>
	<td>Magento CE or EE 2.0.0 to 2.0.1</td>
	<td>Apply the fix</td>
</tr>
<tr>
	<td>Magento CE or EE 2.0.0 to 2.0.2</td>
	<td>Apply the fix</td>
</tr>
<tr>
	<td>Magento CE or EE 2.0.1 to 2.0.2</td>
	<td>Apply the fix</td>
</tr>
<tr>
	<td>Any of the preceding <em>and</em> your Magento server runs PHP 7</td>
	<td><p>Apply the patch <em>and</em> the fix</p>
		<p><strong>Note</strong>: You must apply the PHP 7 patch whether you installed the Magento software using a <a href="{{page.baseurl}}install-gde/prereq/zip_install.html">compressed archive</a> or the <a href="{{page.baseurl}}install-gde/prereq/integrator_install.html">Composer metapackage</a>.</p></td>
</tr>
</tbody>
</table>

#### Detail
Our compressed archives for CE and EE were missing `.gitignore` files and, as a result, exceptions prevented the upgrade from completing successfully. We updated the `magento/magento-composer-installer` component so it reports missing files instead of throwing an exception with no details about what was wrong.

At the same time, we fixed a separate issue that prevented upgrading if you use PHP 7. (The fix for this issue is a patch that you must apply separately from the `.gitignore` issue fix.)

Use the following resolutions:

*	[PHP 7 patch](#resolution4)
*	[Resolution 1 (if you're using version 2.0.0 or 2.0.1)](#resolution1)
*	[Resolution 2 (if your upgrade to 2.0.1 or 2.0.2 has failed)](#resolution2)
*	[Resolution 3 (does not require command line access)](#resolution3)

### PHP 7 patch {#resolution4}
If your Magento server runs PHP 7, you must apply a patch first.

To apply the patch:

1.	Download one of the following patch archives. Patches are available in the following formats: `.zip`, `.tar.bz2`, `.tar.gz`

	<table>
		<col width="30%">
		<col width="70%">
	<tbody>
	<tr> 
		<th>Magento edition</th>
		<th>Patch location</th>
	</tr>
	<tr> 
	<td>Magento CE</td>
	<td><p><a href="http://www.magento.com/download" target="_blank">www.magento.com/download</a></p>
		<p>Follow the instructions on your screen to download <code>MDVA-84.*</code></p></td>
	</tr>
	<tr> 
		<td>Magento EE merchant portal</td>
		<td>Use the following steps:
		<ol><li>Go to <a href="http://www.magento.com" target="_blank">www.magento.com</a></li>
		<li>In the top horizontal navigation bar, click <strong>My Account</strong>.</li>
		<li>Log in with your Magento user name and password.</li>
		<li>In the left navigation bar, click <strong>Downloads</strong>.</li>
		<li>Click <strong>Magento Enterprise Edition</strong> <strong>2.X</strong> > <strong>Magento Enterprise Edition 2.x Release</strong> > <strong>Support Patches</strong></li>
		<li>Follow the instructions on your screen to download <code>MDVA-84.*</code></li></ul>

	</li>
	<li>Transfer the patch to your development system.</li></ol></td>
	</tr>
	<tr>
		<td>Magento EE partner portal</td>
		<td>Use the following steps:
		<ol><li>Log in to <a href="https://partners.magento.com/English/?rdir=/files.aspx" target="_blank">partners.magento.com</a></li>
		<li>Click <strong>Magento Enterprise Edition</strong> > <strong>Magento Enterprise Edition 2.X</strong> > <strong>Magento Enterprise Edition 2.x Release</strong> > <strong>Support Patches</strong>.</li>
		<li>In the left navigation bar, click <strong>Downloads</strong>.</li>
		<li>Follow the instructions on your screen to download <code>MDVA-84.*</code></li>
	<li>Transfer the patch to your development system.</li></ol></td>
		</tr>
	</tbody>
	</table>

	<div class="bs-callout bs-callout-info" id="info">
  		<p>Use the same patch whether or not you installed optional sample data.</p>
	</div>

2.	Extract the patch in your Magento installation directory.

	Log in as or change to the <a href="{{page.baseurl}}install-gde/prereq/apache-user.html">Magento file system owner</a>. Use one of the following commands to extract the archive.

	<table>
	<tbody>
	<tr> 
		<th>File format</th>
		<th>Command to extract</th>
	</tr>
	<tr> 
		<td>.tar.gz</td>
		<td><code>tar zxf &lt;filename></code></td>
		</tr>
		<tr> 
			<td>.zip</td>
			<td><code>unzip &lt;filename></code></td>
		</tr>
		<tr> 
			<td>.tar.bz2</td>
			<td><code>tar jxf &lt;filename></code></td>
	</tr>
	</tbody>
	</table>
3.	We recommend you <a href="{{page.baseurl}}comp-mgr/upgrader/upgrade-start.html">upgrade</a> to version 2.0.2.

#### Resolution 1 (using version 2.0.0 or 2.0.1) {#resolution1}
To resolve the missing `.gitignore` files issue using this method, all of the following must be true:

*	You must have command-line access to your Magento server
*	Your server must be running Magento 2 CE or EE version 2.0.0

	To confirm the version, you can either look in the lower right corner of the Magento Admin or you can use the `php <your Magento install dir>/bin/magento --version` command.

To resolve the issue:

1.	Log in to your Magento server as the <a href="{{page.baseurl}}install-gde/prereq/apache-user.html">Magento file system owner</a>.
2.	Change to your Magento installation directory.
3.	Run the following command:

		composer update magento/magento-composer-installer

4.	If prompted, enter your <a href="{{page.baseurl}}install-gde/prereq/connect-auth.html">authentication keys</a>.
4.	Make sure `magento/magento-composer-installer` is version 0.1.6
5.	Run the following commands in the order shown:

		composer require magento/product-community-edition 2.0.2 --no-update
		composer update

	<div class="bs-callout bs-callout-info" id="info">
  		<p>You can upgrade to either <code>magento/product-community-edition 2.0.2</code> or <code>magento/product-community-edition 2.0.1</code>; we recommend 2.0.2.</p>
	</div>
6.	After the commands complete, enter the following command to update the database schema and data:

		php bin/magento setup:upgrade
6.	Verify your server is running version 2.0.1 or 2.0.2 in any of the ways discussed earlier in this resolution.
<!-- 7.	We recommend you <a href="{{page.baseurl}}comp-mgr/upgrader/upgrade-start.html">upgrade</a> to version 2.0.2. -->


#### Resolution 2 (upgrade to 2.0.1 or 2.0.2 has failed) {#resolution2}
To resolve the missing `.gitignore` files issue using this method, all of the following must be true:

*	You must have command-line access to your Magento server
*	You must have attempted to upgrade to either 2.0.1 or 2.0.2 and failed

You must run `composer update` twice to update components and then delete two files: one that recorded the failed upgrade and another that tells Magento your store is in maintenance mode.

To resolve the issue:

1.	Log in to your Magento server as the <a href="{{page.baseurl}}install-gde/prereq/apache-user.html">Magento file system owner</a>.
2.	Change to your Magento installation directory.
4.	If prompted, enter your <a href="{{page.baseurl}}install-gde/prereq/connect-auth.html">authentication keys</a>.
5.	Enter the following command:

		composer update
4.	Make sure `magento/magento-composer-installer` is version 0.1.6

	The following exception might display; it's expected:

		[ErrorException]
		Source /var/www/html/magento2/vendor/magento/magento2-base/dev/tests/integration/.gitignore does not exist
6.	After the command completes, enter the same command again:

		composer update
7.	Wait while the command completes.
6.	After the command completes, enter the following command to update the database schema and data:

		php bin/magento setup:upgrade
8.	Delete the following files from `<your Magento install dir>/var` directory:

	*	`.update_error.flag`
	*	`.maintenance.flag`
8.	Verify your Magento version is 2.0.1 or 2.0.2 in any of the following ways:

	*	Using the `php <your Magento install dir>/bin/magento --version` command
	*	Log in to the Magento Admin. The version displays in the lower right corner of the page.
7.	We recommend you <a href="{{page.baseurl}}comp-mgr/upgrader/upgrade-start.html">upgrade</a> to version 2.0.2.

#### Resolution 3 (does not require command line access) {#resolution3}
To resolve the missing `.gitignore` files issue if you have no command-line access to your Magento server, <a href="{{page.baseurl}}install-gde/bk-install-guide.html">install version 2.0.2</a> on a local machine and transfer the Magento codebase to your Magento server using FTP or a utility provided by your shared hosting service.

### Error during upgrade: "We're sorry, we can't take that action right now" {#sorry}
If this message displays during your upgrade, it can mean any of the following:

*	<a href="{{page.baseurl}}comp-mgr/trouble/cman/were-sorry.html#not-auth">You didn't authenticate</a> with the System Upgrade utility
*	<a href="{{page.baseurl}}comp-mgr/trouble/cman/were-sorry.html#updater">The updater application isn't initialized</a>
*	<a href="{{page.baseurl}}comp-mgr/trouble/cman/were-sorry.html#git-clone">You cloned the Magento GitHub repository</a>
