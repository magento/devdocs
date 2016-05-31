---
layout: default
group: release-notes
subgroup: Technical Bulletin
title: Technical Bulletin
menu_title: Updater patch for PHP 5.5 Magento 2.0.7 (June 1, 2016)
menu_node: 
menu_order: 
github_link: release-notes/tech_bull_207-upgrade.md
redirect_from: /guides/v2.0/release-notes/tech_bull_jan_16.html
---

## Updater Patch for PHP 5.5 Magento 2.0.7 (June 1, 2016)
This bulletin informs you of a known issue updating Magento 2.0.7. This bulletin applies if you are running:  

* Magento CE or EE 2.0.7 

	**and**

* PHP 5.5 


Note: If you are using Magento version 2.0.7 **and** have PHP version 5.5.x installed, you must follow this bulletin and apply the patch. PHP 5.6- and 7.0- based installations are fine.

For an introduction to the updater application, see <a href="{{ site.gdeurl }}comp-mgr/updater/update-updater.html">Update the updater application</a>.

### Issue: Upgrade failures

Magento Community Edition (CE) and Enterprise Edition (EE) upgrades fail if your server runs PHP 5.5.x and you are trying to upgrade from 2.0.7 to a later version of Magento.

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
	<td>Magento CE or EE 2.0.1 - 2.0.7 running PHP 5.5.x</td>
	<td>Apply the fix detailed in this bulletin.<p><strong>Note</strong>: You must apply the PHP 7 patch whether you installed the Magento software using a <a href="{{ site.gdeurl }}install-gde/prereq/zip_install.html">compressed archive</a> or the <a href="{{ site.gdeurl }}install-gde/prereq/integrator_install.html">Composer metapackage</a>.</p></td>
</tr>

<tr>
	<td>Magento CE or EE 2.0.1 to 2.0.7 running PHP 5.6 or 7.x</td>
	<td>Ignore this bulletin</td>
</tr>

</tbody>
</table>

#### Detail
The Updater application packaged with Magento version 2.0.7 has a line of code that is not compatible with PHP version 5.5. 


Use the following resolutions to ensure the success of future upgrades:

*	[Download and install Updater patch for PHP 5.5 Magento 2.0.7](#resolution1)
*	[Use Composer](#resolution2)

##### Download and install patch {#resolution1}
If your Magento server runs PHP 5.5.x and you want to upgrade your installation of 2.0.7 to a later version, you must apply the Updater patch for PHP 5.5 Magento 2.0.7  patch first.

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
		<p>Follow the instructions on your screen to download <code>Updater patch for PHP 5.5 Magento 2.0.7.*</code></p></td>
	</tr>
	<tr> 
		<td>Magento EE merchant portal</td>
		<td>Use the following steps:
		<ol><li>Go to <a href="http://www.magento.com" target="_blank">www.magento.com</a></li>
		<li>In the top horizontal navigation bar, click <strong>My Account</strong>.</li>
		<li>Log in with your Magento user name and password.</li>
		<li>In the left navigation bar, click <strong>Downloads</strong>.</li>
		<li>Click <strong>Magento Enterprise Edition</strong> <strong>2.X</strong> > <strong>Magento Enterprise Edition 2.x Release</strong> > <strong>Support Patches</strong></li>
		<li>Follow the instructions on your screen to download <code>Updater patch for PHP 5.5 Magento 2.0.7.*</code></li></ul>

	</li>
	<li>Transfer the patch to your development system.</li></ol></td>
	</tr>
	<tr>
		<td>Magento EE partner portal</td>
		<td>Use the following steps:
		<ol><li>Log in to <a href="https://partners.magento.com/English/?rdir=/files.aspx" target="_blank">partners.magento.com</a></li>
		<li>Click <strong>Magento Enterprise Edition</strong> > <strong>Magento Enterprise Edition 2.X</strong> > <strong>Magento Enterprise Edition 2.x Release</strong> > <strong>Support Patches</strong>.</li>
		<li>In the left navigation bar, click <strong>Downloads</strong>.</li>
		<li>Follow the instructions on your screen to download <code>Updater patch for PHP 5.5 Magento 2.0.7.*</code></li>
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





##### Use Composer to install new updater code {#resolution2}


To resolve this issue using Composer:


1.	Log in to your Magento server as the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a>.

2.	Change to your Magento installation directory.

3.	If prompted, enter your <a href="{{ site.gdeurl }}install-gde/prereq/connect-auth.html">authentication keys</a>.

4. Back up your existing “update/“ directory by entering 

		`mv  update/ update-org/`

5. Clear composer cache by executing

		`composer clear-cache`

6.	Enter this command to get the new updater application code:

		`composer create-project --repository-url=https://repo.magento.com magento/updater=10.0.2 update`




