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

We addressed the following issues in a patch:

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
	<td>Apply the patch</td>
</tr>
<tr>
	<td>Magento CE or EE 2.0.1</td>
	<td>Apply the patch</td>
</tr>
<tr>
	<td>Magento CE or EE 2.0.2</td>
	<td>No patch is required; you can ignore this bulletin.</td>
</tr>
</tbody>
</table>

<div class="bs-callout bs-callout-info" id="info">
  <p>If you installed the Magento software using either <code>git clone</code> or <code>composer create-project</code>, you are <em>not</em> affected by this issue. You can ignore this bulletin.</p>
</div>

#### Detail
Our compressed archives for CE and EE were missing `.gitignore` files and, as a result, exceptions prevented the upgrade from completing successfully. We updated the `magento/magento-composer-installer` component so it reports missing files instead of throwing an exception with no details about what was wrong.

At the same time, we fixed a separate issue that prevented upgrading to 2.0.1 if you use PHP 7.

#### Resolution
Use any of the following resolutions:

*	[Web-based solution](#gitignore-web-sln)
*	[Command-line solution](#gitignore-cli-sln)

#### Web-based solution {#gitignore-web-sln}
This solution is recommended for anyone who has no access to their Magento server's command line. 

Download a compressed archive that contains the missing `.gitignore` files and the PHP 7 fix as follows:

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
		<p>Follow the instructions on your screen to download <code>NAME.*</code></p></td>
	</tr>
	<tr> 
		<td>Magento EE</td>
		<td>Use the following steps:
		<ol><li>Go to <a href="http://www.magento.com" target="_blank">www.magento.com</a></li>
		<li>In the top horizontal navigation bar, click <strong>My Account</strong>.</li>
		<li>Log in with your Magento user name and password.</li>
		<li>In the left navigation bar, click <strong>Downloads</strong>.</li>
		<li>In the right pane, click <strong>Magento Enterprise Edition 2.X</strong> > <strong>Full Release</strong>.</li>
		<li>Follow the instructions on your screen to download <code>NAME.*</code></li></ul>

	</li>
	<li>Transfer the patch to your development system.</li></ol></td>
	</tr>
	</tbody>
	</table>

	<div class="bs-callout bs-callout-info" id="info">
  		<p>Use the same patch whether or not you installed optional sample data.</p>
	</div>

2.	Extract the patch in your Magento installation directory.

	*	**If you have your own server**, log in as or change to the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a>. Use one of the following commands to extract the archive.

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

	*	**If you use shared hosting**, you can typically use your hosting provider's tools to extract the archive.

3.	<a href="{{ site.gdeurl }}comp-mgr/upgrader/upgrade-start.html">Upgrade</a> to version 2.0.2.	

#### Command-line solution {#gitignore-cli-sln}
If you have access to your Magento server's command line, you can resolve the missing `.gitignore` files issue as follows:

1.	Log in to your Magento server as the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a>.
2.	Change to your Magento installation directory.
3.	Run the following commands in the order shown:

		composer update magento/magento-composer-installer
		composer update
4.	*PHP 7 only*. If your server runs PHP 7, you must also [apply the patch](#gitignore-web-sln).
5.	<a href="{{ site.gdeurl }}comp-mgr/upgrader/upgrade-start.html">Upgrade</a> to version 2.0.2.	

### Error during upgrade: "We're sorry, we can't take that action right now" {#sorry}
If this message displays during your upgrade, it can mean any of the following:

*	<a href="{{ site.gdeurl }}comp-mgr/trouble/cman/were-sorry.html#not-auth">You didn't authenticate</a> with the System Upgrade utility
*	<a href="{{ site.gdeurl }}comp-mgr/trouble/cman/were-sorry.html#updater">The updater application isn't initialized</a>

