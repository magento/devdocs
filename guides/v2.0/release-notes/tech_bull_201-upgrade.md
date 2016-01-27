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
	<td>Apply the fix</td>
</tr>
<tr>
	<td>Magento CE or EE 2.0.1</td>
	<td>Apply the fix</td>
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

At the same time, we fixed a separate issue that prevented upgrading to 2.0.1 if you use PHP 7.

#### Resolution
This resolution requires you to have access to your Magento server's command line. Resolve the missing `.gitignore` files issue as follows:

1.	Log in to your Magento server as the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a>.
2.	Change to your Magento installation directory.
3.	Run the following commands in the order shown:

		composer update magento/magento-composer-installer
		composer update
5.	<a href="{{ site.gdeurl }}comp-mgr/upgrader/upgrade-start.html">Upgrade</a> to version 2.0.2.	

### Error during upgrade: "We're sorry, we can't take that action right now" {#sorry}
If this message displays during your upgrade, it can mean any of the following:

*	<a href="{{ site.gdeurl }}comp-mgr/trouble/cman/were-sorry.html#not-auth">You didn't authenticate</a> with the System Upgrade utility
*	<a href="{{ site.gdeurl }}comp-mgr/trouble/cman/were-sorry.html#updater">The updater application isn't initialized</a>

