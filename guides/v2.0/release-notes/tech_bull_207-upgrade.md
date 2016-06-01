---
layout: default
group: release-notes
subgroup: Technical Bulletin
title: Technical Bulletin
menu_title: Required patch for PHP 5.5.x and Updater 10.0.1 environments (June 1, 2016)
menu_node: 
menu_order: 
github_link: release-notes/tech_bull_207-upgrade.md
redirect_from: /guides/v2.0/release-notes/tech_bull_jan_16.html
---

<h2>Required patch for PHP 5.5.x and Updater 10.0.1 environments (June 1, 2016)</h2>
This bulletin informs you of a known issue updating from Magento EE and CE environments that run the following:   

* PHP 5.5.x

	**and**

* updater application version 10.00.1. This version is shipped by default with Magento 2.0.7. 

Patch MDVA-449 supplies the fix for this potential upgrade issue. 

<div class="bs-callout bs-callout-warning">
    <p>Magento 2.0.7 by default ships with Updater application version 10.1.0. If you have not changed the default Updater application version that shipped with 2.0.7 and are running PHP5.5.x, you must follow this bulletin. Failure to install this patch (MDVA-449) will complicate attempts to upgrade from this version of Magento. Installations using PHP 5.6.x and 7.0.x do not need this patch.</p>
</div>


<h3>Issue: Upgrade failure from Magento installations running PHP 5.5.x and Updater application v10.0.1</h3>

Magento Community Edition (CE) and Enterprise Edition (EE) upgrades fail if your server runs PHP 5.5.x and Updater application version 10.0.1 and you  try to upgrade to a later version of Magento.

Here is the issue you might encounter when running `update/cron.php`:

 
`PHP Parse error: syntax error, unexpected '.', expecting ')' in /home/user/public_html/update/app/code/Magento/Update/UpdateLoggerFactory.php on line 31 `

The following table summarizes what you need to do.

<table>
	<tbody>
<tr> 
	<th>Upgrade path</th>
	<th>What to do</th>
</tr>

<tr>
	<td>PHP 5.5.x AND Magento 2.0.7</td>

	<td>Download and install this patch as detailed in this bulletin.<p><strong>Note</strong>: You must apply the Updater patch for PHP 5.5.x Magento 2.0.7 patch whether you installed the Magento software using a <a href="{{ site.gdeurl }}install-gde/prereq/zip_install.html">compressed archive</a> or the <a href="{{ site.gdeurl }}install-gde/prereq/integrator_install.html">Composer metapackage</a>.</p></td>
</tr>
<tr>
	<td>PHP 5.5.x AND Updater 10.0.1</td>
	<td>Download and install this patch.</td>
</tr>
<tr>
	<td>PHP 5.6.x with any Magento and Updater version/td>
	<td>Ignore this bulletin</td>
</tr>
<tr>
	<td>PHP 7.0.x with any Magento and Updater version</td>
	<td>Ignore this bulletin</td>
</tr>

</tbody>
</table>

<h4>Details</h4>
The Updater application packaged with Magento version 2.0.7 (version 10.0.1) has a line of code that is not compatible with PHP version 5.5.x. 


Use the following resolutions to ensure the success of future upgrades:

*	Download and install patch 
*	Use Composer to install new Updater code

<h4>Download and install patch</h4> 
If your Magento server runs PHP 5.5.x and Updater application v10.0.1,  apply this patch.

To apply this patch:

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
		<p>Follow the instructions on your screen to download <code>Patch MDVA-449.*</code></p></td>
	</tr>
	<tr> 
		<td>Magento EE merchant portal</td>
		<td>Use the following steps:
		<ol><li>Go to <a href="http://www.magento.com" target="_blank">www.magento.com</a></li>
		<li>In the top horizontal navigation bar, click <strong>My Account</strong>.</li>
		<li>Log in with your Magento user name and password.</li>
		<li>In the left navigation bar, click <strong>Downloads</strong>.</li>
		<li>Click <strong>Magento Enterprise Edition</strong> <strong>2.X</strong> > <strong>Magento Enterprise Edition 2.x Release</strong> > <strong>Support Patches</strong></li>
		<li>Follow the instructions on your screen to download <code>Patch MDVA-449*</code></li></ul>

	</li>
	<li>Transfer the patch to your development system.</li></ol></td>
	</tr>
	<tr>
		<td>Magento EE partner portal</td>
		<td>Use the following steps:
		<ol><li>Log in to <a href="https://partners.magento.com/English/?rdir=/files.aspx" target="_blank">partners.magento.com</a></li>
		<li>Click <strong>Magento Enterprise Edition</strong> > <strong>Magento Enterprise Edition 2.X</strong> > <strong>Magento Enterprise Edition 2.x Release</strong> > <strong>Support Patches</strong>.</li>
		<li>In the left navigation bar, click <strong>Downloads</strong>.</li>
		<li>Follow the instructions on your screen to download <code>Patch MDVA-449.*</code></li>
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




<h4>Use Composer to install new Updater code</h4> 


To resolve this issue using Composer, see <a href="{{ site.gdeurl }}comp-mgr/updater/update-updater.html">Update the Updater application</a>.







