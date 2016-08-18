---
layout: default 
group: compman
subgroup: 06_UseExtMan
title: Start the Extension Manager
menu_title: Start the Extension Manager
menu_node: 
menu_order: 2
version: 2.2
github_link: comp-mgr/extens-man/extensman-main-pg.md
---

## Start the Extension Manager from the Magento Admin
To run the Extension Manager:

1.	If you haven't done so already, create or get your [authentication keys]({{page.baseurl}}install-gde/prereq/connect-auth.html).
2.	Log in to the Magento Admin as an administrator.
3.	Click **System** > **Web Setup Wizard**.
4.	Click **Extension Manager** as the following figure shows.

	![Click the Extension Manager]({{ site.baseurl }}common/images/extens_mgr_select.png){:width="550px"}

5.	If prompted, log in to the Extension Manager.

	The following page displays if a login is required.

	![Install or upgrade extensions]({{ site.baseurl }}common/images/extens_mgr_login.png){:width="400px"}

6.	Enter your authentication keys in the provided fields.
2.	Click **Submit**.

To upgrade Magento system software instead, see <a href="{{page.baseurl}}comp-mgr/upgrader/upgrade-start.html">Run System Upgrade</a>.

<div class="bs-callout bs-callout-warning">
   	<p>You must use the same authentication keys you used to install the Magento software. For example, you <em>cannot</em> use Magento CE authentication keys to update or upgrade Magento EE or vice versa. You also <em>cannot</em> use:</p>
   	<ul><li>Another user's authentication keys</li>
   	<li><a href="http://docs.magento.com/m2/ce/user_guide/magento/magento-account-share.html" target="_blank">Shared account</a> authentication keys</li></ul>   
</div>

See one of the following sections:

*	[Choose what to install, uninstall, or update](#extens-choose)
*	[Install packages](#extensman-install)
*	[Uninstall packages](#extensman-uninstall)
*	[Update packages](#extensman-update)

## Choose what to install, uninstall, or update {#extens-choose}
After you log in to the Extension Manager, a list displays as follows:

![Choose what to install, update, or uninstall]({{ site.baseurl }}common/images/extens_mgr_updates.png){:width="500px"}

*	**Updates Available** displays the number of packages you can update.
*	**Ready to Install** displays the number of packages you can install.
*	**Last Refresh** displays the last time you refreshed the list of packages on Magento Marketplace. 

	Click **Refresh** to update the information, such as after you purchase new extensions.

### Supported actions for each type {#extens-choose-pertype}

{% collapsible Supported actions for each type %}

We support different actions for each *type* of component. (*Component* is a general term that includes any type of code you can install in the Magento application&mdash;module, language package, theme, or metapackage. *Package* refers to anything you can install, uninstall, or update.)

The following figure shows how types display in the Extension Manager.

![Extension Manager columns]({{ site.baseurl }}common/images/extensman_columns-only.png)

Following is a definition of types:

*	`module` for a module (that is, PHP code that modifies Magento behavior)
*	`language` for a language package used to translate the Magento storefront and Admin
*	`theme` for a collection of styles that affect the look of the storefront or Admin
*	`library` for a library&mdash;such as a shared third-party library
*	`component` for any type of component that must be installed in the Magento root directory (this is a relatively uncommon type)

Actions are further divided between those available for *metapackages* (that is, an installable package that contains a group of different types) or *non-metapackages* (that is, a single type).

The following sections provide details:

*	[Actions available for non-metapackages](#extensman-access-types-non-meta)
*	[Actions available for metapackages](#extensman-access-types-meta)

#### Actions available for non-metapackages {#extensman-access-types-non-meta}
Most packages you get from Magento Marketplace or another source have only one type; for example, a module.

The following table shows which actions are supported for each non-metapackage.

<table>
	<!-- <col width="40%">
  	<col width="15%">
  	<col width="15%">
  	<col width="15%">
  	<col width="15%"> -->
		<tbody>
		<tr>
			<th>Type</th>
			<th>Update</th>
			<th>Uninstall</th>
		</tr>
		<tr>
			<td>module</td>
			<td>Yes</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>language package and theme</td>
			<td>Yes</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>library</td>
			<td>Yes</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>component</td>
			<td>Yes</td>
			<td>Yes</td>
		</tr>
		</tbody>
	</table>


#### Actions available for metapackages {#extensman-access-types-meta}
A metapackage is an installable package that includes more than one type. For example, we require a package that contains a module and a theme to be packaged as a metapackage.

The following table shows which actions are available for a metapackage.

<table>
	<!-- <col width="40%">
  	<col width="15%">
  	<col width="15%">
  	<col width="15%">
  	<col width="15%"> -->
	<tbody>
		<tr>
			<th>Type</th>
			<th>Update</th>
			<th>Uninstall</th>
		</tr>
		<tr>
			<td>module</td>
			<td>No</td>
			<td>No</td>
		</tr>
		<tr>
			<td>language package and theme</td>
			<td>Yes</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>library</td>
			<td>Yes</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>component</td>
			<td>Yes</td>
			<td>Yes</td>
		</tr>
		</tbody>
</table>

{% endcollapsible %}

## Install extensions {#extensman-install}

{% collapsible To install extensions: %}

Click **Review and Install** as the following figure shows.

![Review and install extensions]({{ site.baseurl }}common/images/extensman_review-purchases.png){:width="450px"}

The following sections discuss your options.

### Get more information
To get more information about an extension, click ![Get information about an extension]({{ site.baseurl }}common/images/extensman_icon_question.png).

### Install one extension
To install one extension, click the **Install** link at the end of its row and continue with [Step 1. Readiness check]({{ page.baseurl }}comp-mgr/extens-man/extensman-readiness.html).

### Install more than one extension
To install more than one extension:

1.	Select the check box next to each extension, or click **Select All** from the list as the following figure shows.

	![Choose extensions to install]({{ site.baseurl }}common/images/extensman_choose-to-install.png){:width="550px"}
2.	After you select what to install, click **Install** at the top of the page as the following figure shows.

	![Install your purchases]({{ site.baseurl }}common/images/extensman_ready-to-install.png){:width="550px"}
3.	Continue with [Step 1. Readiness check]({{ page.baseurl }}comp-mgr/extens-man/extensman-readiness.html).

{% endcollapsible %}

## Uninstall packages {#extensman-uninstall}

{% collapsible To uninstall packages: %}

1.	In the Installed Products section, click **Uninstall** from the **Actions** list as the following figure shows.

	![Uninstall packages]({{ site.baseurl }}common/images/extensman_uninstall.png){:width="600px"}

	If no **Uninstall** option is available, the vendor did not provide an uninstallation script. Contact the vendor for uninstallation instructions.
3.	Continue with [Step 1. Readiness check]({{ page.baseurl }}comp-mgr/extens-man/extensman-readiness.html).

{% endcollapsible %}

## Update extensions {#extensman-update}

{% collapsible To update extensions: %}

The New Updates page displays all extensions that can be updated.

![List of extensions that can be updated]({{ site.baseurl }}common/images/extensman_new-updates.png)

You have the following options:

*	To update one extension, click **Update** at the end of its row.
*	To update more than one extension, select its check box and click **Update**, as the following figure shows.

	![Update selected extensions]({{ site.baseurl }}common/images/extensman_update-selected.png){:width="500px"}
*	To update all extensions, click **Select All** from the list and click **Update**, as the following figure shows.

	![Update all extensions]({{ site.baseurl }}common/images/extensman_update-all.png)

Continue with [Step 1. Readiness check]({{ page.baseurl }}comp-mgr/extens-man/extensman-readiness.html).

{% endcollapsible %}
