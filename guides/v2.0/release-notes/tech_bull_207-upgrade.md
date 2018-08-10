---
group: release-notes
subgroup: 05_techbull
title: Technical Bulletin
menu_title: Required patch for PHP 5.5.x and Setup Application environments (June 6, 2016)
menu_node: 
menu_order: 3
version: 2.0
---

This bulletin informs you of a known issue updating from Magento Commerce (formerly Enterprise Edition) and Open Source (formerly Community Edition)  environments that run the following:   

* {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} 5.5.x

	**and**

* Updater application version 10.0.1. This version is shipped by default with Magento 2.0.7. 

Patch `MDVA-449` supplies the fix for this potential upgrade issue. 

### Issue: Upgrade failure from Magento installations running PHP 5.5.x and Updater application 10.0.1

Magento Open Source  and Commerce upgrades fail if your server runs PHP 5.5.x and Setup application (also referred to as the <i>Updater application</i>) version 10.0.1 and you  try to upgrade to a later version of Magento.


Magento 2.0.7 by default ships with Setup application version 10.0.1.  If you have not changed the default Setup application version that shipped with 2.0.7 and are running PHP 5.5.x, you must follow this bulletin. Failure to install patch `MDVA-449` will complicate attempts to upgrade from this version of Magento to any future versions, including 2.1. Installations using PHP 5.6.x and 7.0.x do not need this patch.


Here is the issue you might encounter when running `update/cron.php`:
 
	PHP Parse error: syntax error, unexpected '.', expecting ')' in /home/user/public_html/update/app/code/Magento/Update/UpdateLoggerFactory.php on line 31 

The following table summarizes what you need to do.

<table>
	<tbody>
<tr> 
	<th>Upgrade path</th>
	<th>What to do</th>
</tr>

<tr>
	<td>PHP 5.5.x AND Magento 2.0.7</td>
<td> Download and install patch <code>MDVA-449</code> as detailed in this bulletin. Note: You must apply patch <code>MDVA-449</code>  whether you installed the Magento software using a <a href="{{ page.baseurl }}/install-gde/prereq/zip_install.html">compressed archive</a> or the <a href="{{ page.baseurl }}/install-gde/prereq/integrator_install.html">Composer metapackage</a>.</td>
</tr>

<tr>
	<td>PHP 5.5.x AND Updater 10.0.1</td>
	<td>Download and install patch <code>MDVA-449</code> as detailed in this bulletin. Note: You must apply patch <code>MDVA-449</code>  whether you installed the Magento software using a <a href="{{ page.baseurl }}/install-gde/prereq/zip_install.html">compressed archive</a> or the <a href="{{ page.baseurl }}/install-gde/prereq/integrator_install.html">Composer metapackage</a>.</td>
</tr>

<tr>
	<td>PHP 5.6.x with any Magento and Setup application version</td>
	<td>Ignore this bulletin</td>
</tr>

<tr>
	<td>PHP 7.0.x with any Magento and Setup application version</td>
	<td>Ignore this bulletin</td>
</tr>

</tbody>
</table>

#### How to determine which version of Updater application you are running

1. Log in to your Magento server as, or switch to, the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %}.

2. Open the following file in a text editor:

	<your Magento install dir>/update/composer.json

3. Look for the value of `"version"`. If the value of `"version"` is `"10.0.1"`, and you're using PHP 5.5.x, you must make the changes discussed in this bulletin. For example,

	"version": "10.0.1"

4. Exit the text editor without making changes.

#### Details

The Setup application  that is packaged with Magento version 2.0.7 (version 10.0.1) has a line of code that is not compatible with PHP version 5.5.x. To ensure the success of future upgrades, download and install patch `MDVA-449`. 

#### Download and install patch MDVA-449

If your Magento server runs PHP 5.5.x and Setup application  10.0.1,  apply patch `MDVA-449`.

To apply this patch:

1.	Download one of the following patch archives. Patches are available in the following formats: `.zip` and `.tar.gz`

	<table>
		
	<tbody>
	<tr> 
		<th>Magento edition</th>
		<th>Patch location</th>
	</tr>
	<tr> 
	<td>{{site.data.var.ce}}</td>
	<td><p><a href="http://www.magento.com/download" target="_blank">www.magento.com/download</a></p>
		<p>Follow the instructions on your screen to download patch <code>MDVA-449</code>.</p></td>
	</tr>
	<tr> 
		<td>Magento EE merchant portal</td>
		<td>Use the following steps:
		<ol><li>Go to <a href="http://www.magento.com" target="_blank">www.magento.com</a></li>
		<li>In the top horizontal navigation bar, click <strong>My Account</strong>.</li>
		<li>Log in with your Magento username and password.</li>
		<li>In the left navigation bar, click <strong>Downloads</strong>.</li>
		<li>Click <strong>Magento Commerce</strong> <strong>2.X</strong> > <strong>Magento Commerce 2.x Release</strong> > <strong>Support Patches</strong></li>
		<li>Follow the instructions on your screen to download patch <code>MDVA-449</code>.</li></ul>

	</li>
	<li>Transfer the patch to your development system.</li></ol></td>
	</tr>
	<tr>
		<td>Magento Commerce partner portal</td>
		<td>Use the following steps:
		<ol><li>Log in to <a href="https://partners.magento.com/English/?rdir=/files.aspx" target="_blank">partners.magento.com</a></li>
		<li>Click <strong>Magento Commerce</strong> > <strong>Magento Commerce 2.X</strong> > <strong>Magento Commerce 2.x Release</strong> > <strong>Support Patches</strong>.</li>
		<li>In the left navigation bar, click <strong>Downloads</strong>.</li>
		<li>Follow the instructions on your screen to download patch <code>MDVA-449</code>.</li>
	<li>Transfer the patch to your development system.</li></ol></td>
		</tr>
	</tbody>
	</table>

	<div class="bs-callout bs-callout-info" id="info">
  		<p>Use patch <code>MDVA-449</code> whether or not you installed optional sample data.</p>
	</div>

2.	Extract the patch in your Magento installation directory.

	Log in as or change to the <a href="{{ page.baseurl }}/install-gde/prereq/apache-user.html">Magento file system owner</a>. Use one of the following commands to extract the archive.

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
		
	</tbody>
	</table>

	After extraction, Magento creates the `magento2-updater-10.0.2` directory within the installation directory. 

3. Copy the contents of the `magento2-updater-10.0.2` directory to the  `update` directory by executing this command:

	`cp -R magento2-updater-10.0.2/*  update/`

	<div class="bs-callout bs-callout-tip">
		<p>If you're prompted to overwrite files repeatedly, cancel the operation and try the following command: <code>yes | cp -rf magento2-updater-10.0.2/* update/</code>. Also see <a href="http://magento.stackexchange.com/questions/119865/magento-2-patch-mdva-449-ssh-command" target="_blank">this article on stackexchange</a>.</p>
	</div>

4. After copying all  patch-related files to their appropriate locations,  remove any unwanted files and directories by executing these commands:

	`rm -rf magento2-updater-10.0.2/`

	`rm -f MDVA-449.*`







