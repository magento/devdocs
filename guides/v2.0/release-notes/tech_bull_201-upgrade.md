---
layout: default
group: release-notes
subgroup: Technical Bulletin
title: Technical Bulletin
menu_title: Issues upgrading to 2.0.1 (Jan. 28, 2016)
menu_node: 
menu_order: 1
github_link: release-notes/tech_bull_201-upgrade.md
---

## Issues upgrading to 2.0.1 (Jan. 28, 2016)
This bulletin informs you of the following issues:

*	[Issue: Upgrade fails because of missing `.gitignore` files](#gitignore)
*	[Error during upgrade: "We're sorry, we can't take that action right now"](#sorry)

### Issue: Upgrade failures {#gitignore}
Upgrades to Magento Community Edition (CE) and Enterprise Edition (EE) 2.0.1 failed if you got the Magento software <a href="{{ site.gdeurl }}install-gde/prereq/zip_install.html">compressed archive</a> (`.tar.gz`, `.zip`, and `.bz2`).

We addressed the following issues:

*	Missing `.gitignore` files that resulted in exceptions
*	An error related to the updater application and PHP 7:

		PHP Warning: require_once(/public_html/magento2/update/vendor/autoload.php): failed to open stream: No such file or directory in /public_html/magento2/update/app/bootstrap.php

The following table summarizes what you need to do.

<table>
	<tbody>
	<tr> 
		<th>Magento version</th>
		<th>What to do</th>
	</tr>
	<tr>
	<td>Magento CE or EE 2.0.0</td>
	<td>Apply the fix</td>
</tr>
<tr>
	<td>Magento CE or EE 2.0.1</td>
	<td>Apply the fix</td>
</tr>
<tr>
	<td>Magento CE or EE 2.0.0 or 2.0.1 <em>and</em> your Magento server runs PHP 7.0.2</td>
	<td>Apply the fix <em>and</em> the patch</td>
</tr>
<tr>
	<td>Magento CE or EE 2.0.2 installed <em>or</em> you haven't installed Magento yet.</td>
	<td><p>No action is required. Install version 2.0.2 if you haven't already.</p>
		<p>You can ignore this bulletin.</p></td>
</tr>
</tbody>
</table>

<div class="bs-callout bs-callout-info" id="info">
  <p>If you installed the Magento software using either <code>git clone</code> or <code>composer create-project</code>, you are <em>not</em> affected by this issue. You can ignore this bulletin.</p>
</div>

#### Detail
Our compressed archives for CE and EE were missing `.gitignore` files and, as a result, exceptions prevented the upgrade from completing successfully. We updated the `magento/magento-composer-installer` component so it reports missing files instead of throwing an exception with no details about what was wrong.

At the same time, we fixed a separate issue that prevented upgrading to 2.0.1 if you use PHP 7. (The fix for this issue is a patch that you must apply separately from the `.gitignore` issue fix.)

Use any of the following resolutions:

*	[Resolution 1 (if you're using version 2.0.0)](#resolution1)
*	[Resolution 2 (if your upgrade to 2.0.1 has failed)](#resolution2)
*	[Resolution 3 (does not require command line access)](#resolution3)
*	[PHP 7 patch](#resolution4)

#### Resolution 1 (using version 2.0.0) {#resolution1}
To resolve the missing `.gitignore` files issue using this method, all of the following must be true:

*	You must have command-line access to your Magento server
*	Your server must be running Magento 2 CE or EE version 2.0.0

	To confirm the version, you can either look in the lower right corner of the Magento Admin or you can use the `php <your Magento install dir>/bin/magento --version` command.

To resolve the issue:

1.	Log in to your Magento server as the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a>.
2.	Change to your Magento installation directory.
3.	Run the following command:

		composer update magento/magento-composer-installer

4.	If prompted, enter your <a href="{{ site.gdeurl }}install-gde/prereq/connect-auth.html">authentication keys</a>.
4.	Make sure `magento/magento-composer-installer` is version 0.1.6
5.	Run the following commands in the order shown:

		composer require magento/product-community-edition 2.0.1 --no-update
		composer update
6.	Verify your server is running version 2.0.1 in any of the ways discussed earlier in this resolution.
9.	If your Magento server runs PHP 7, you must also [apply a patch](#resolution4).
7.	Optionally <a href="{{ site.gdeurl }}guides/v2.0/comp-mgr/upgrader/upgrade-start.html">upgrade</a> to version 2.0.2.

#### Resolution 2 (upgrade to 2.0.1 has failed) {#resolution2}
To resolve the missing `.gitignore` files issue using this method, all of the following must be true:

*	You must have command-line access to your Magento server
*	You must have attempted to upgrade to 2.0.1 and failed

You must run `composer update` twice to update components and then delete two files: one that recorded the failed upgrade and another that tells Magento your store is in maintenance mode.

To resolve the issue:

1.	Log in to your Magento server as the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a>.
2.	Change to your Magento installation directory.
3.	Run the following command:

		composer update magento/magento-composer-installer

4.	If prompted, enter your <a href="{{ site.gdeurl }}install-gde/prereq/connect-auth.html">authentication keys</a>.
5.	Enter the following command:

		composer update
4.	Make sure `magento/magento-composer-installer` is version 0.1.6

	The following exception might display; it's expected:

		[ErrorException]
		Source /var/www/html/magento2/vendor/magento/magento2-base/dev/tests/integration/.gitignore does not exist
6.	After the command completes, enter the same command again:

		composer update
7.	Wait while the command completes.
8.	Delete the following files from `<your Magento install dir>/var`:

	*	`.update_error.flag`
	*	`.maintenance.flag`
8.	Verify your Magento version is 2.0.1 in any of the following ways:

	*	Using the `php <your Magento install dir>/bin/magento --version` command
	*	Log in to the Magento Admin. The version displays in the lower right corner of the page.
9.	If your Magento server runs PHP 7, you must also [apply a patch](#resolution4).
7.	Optionally <a href="{{ site.gdeurl }}guides/v2.0/comp-mgr/upgrader/upgrade-start.html">upgrade</a> to version 2.0.2.

#### Resolution 3 (does not require command line access) {#resolution3}
To resolve the missing `.gitignore` files issue if you have no command-line access to your Magento server, <a href="{{ site.gdeurl }}install-gde/bk-install-guide.html">install version 2.0.2</a> on a local machine and transfer the Magento codebase to your Magento server using FTP or a utility provided by your shared hosting service.

### PHP 7 patch {#resolution4}
If your Magento server runs PHP 7.0.1, you must apply a patch before you can upgrade.

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

Log in as or change to the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a>. Use one of the following commands to extract the archive.

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


### Error during upgrade: "We're sorry, we can't take that action right now" {#sorry}
If this message displays during your upgrade, it can mean any of the following:

*	<a href="{{ site.gdeurl }}comp-mgr/trouble/cman/were-sorry.html#not-auth">You didn't authenticate</a> with the System Upgrade utility
*	<a href="{{ site.gdeurl }}comp-mgr/trouble/cman/were-sorry.html#updater">The updater application isn't initialized</a>

