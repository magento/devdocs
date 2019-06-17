---
group: software-update-guide
subgroup: 05_UseCompMan
title: Manage your components
menu_title: Manage your components
menu_node:
menu_order: 3
functional_areas:
  - Upgrade
---

## Component Management options {#compman-access}

To choose whether to upgrade or uninstall components:

1.	After you [run the Component Manager]({{ page.baseurl }}/comp-mgr/module-man/compman-start.html), a page similar to the following displays:<br><br>
	![The Component Manager page enables you to synchronize with Magento Marketplace to see if updates are available]({{ site.baseurl }}/common/images/cman_initial-page.png)
2.	You have the following options:
	<table>
	<tbody>
	<tr>
		<th>Item</th>
		<th>Meaning</th>
	</tr>
	<tr>
		<td><p>Magento Marketplace Account section</p></td>
		<td><p>Shows when you last synchronized with your Magento Marketplace account. To get the latest information about available component versions, you must synchronize with Connect.</p>
			<p>Last Sync shows the last time you synchronized and Sync Status shows whether or not you're currently synchronized.</p>
			<p>New Updates and New Purchases displays the number of each to install; click <strong>Install</strong> to select updates or purchases to install and see <a href="#compman-access-new">Install new purchases</a>.</p>
			<p>Click <strong>Reset</strong> to log in with a different set of <a href="{{ page.baseurl }}/install-gde/prereq/connect-auth.html">Marketplace credentials</a>.</p>
		</td>
	</tr>
	<tr>
		<td><p>Sync button</p></td>
		<td><p>Click <strong>Sync</strong> to compare the component versions you're currently using with those available on Magento Marketplace.</p></td>
	</tr>
	<tr>
		<td><p>List of components</p></td>
		<td><p>For each component, one of the following status indicators displays in the left column:</p>
			<ul><li><img src="{{ site.baseurl }}/common/images/cman_comp-status-green.png" alt="A green icon means that the component is enabled and is current as of the last sync" />Green, which means the component is enabled and its status was current the last time you synchronized with Magento Marketplace.</li>
				<li><img src="{{ site.baseurl }}/common/images/cman_comp-status-info.png" alt="An info icon means there is an update available" />An update is available.</li>
				<li><img src="{{ site.baseurl }}/common/images/cman_comp-status-red.png" alt="A red icon means the component is disabled" />The component is disabled.</li> </ul>
				<p>Middle columns display information about the component we obtained from its Composer package.</p>
				<p>The right column displays available actions for each component. </p></td>
	</tr>
	<tr>
		<td><p>Actions</p></td>
		<td><p>Displays a list of actions available for that component type. <a href="#compman-access-types">Details about available actions</a>.</p>
			<p>The following figure shows an example.</p>
			<img src="{{ site.baseurl }}/common/images/cman_actions.png" alt="You can enable, disable, or update components" />
			
	<tr>
		<td><p>Pagination</p></td>
		<td><p>Enables you to:</p>
			<p><img src="{{ site.baseurl }}/common/images/cman_page_number.png" width="100px" alt="Specify number of items to display on page" />Specify the number of items to display on a page.</p>
			<p><img src="{{ site.baseurl }}/common/images/cman_page_move.png" width="100px" alt="Move back and forward or specify a page number" />From left to right, move back one page, go to a specific page, or move forward one page.</p></td>
	</tr>
	</tbody>
	</table>
</td></tr></tbody></table>

## Install new purchases {#compman-access-new}

A *new purchase* can be any of the following:

*	{{site.data.var.ce}} or {{site.data.var.ee}} sample data if it hasn't been installed yet.

	You don't need to go to Magento Marketplace and request sample data; you can install it at any time.

*	A free component you selected on Magento Marketplace
*	A component you paid for on Magento Marketplace

To install a new purchase:

1.	Click **Install** under the number of new purchases as the following figure shows.

	<img src="{{ site.baseurl }}/common/images/compman_new-purchases1.png" width="450px">

2.	On the next page, select the components to install.

	To install all of them, click **Select all** from the list.

	To install components individually, either select the checkbox next to the component or click **Install** in the Action column.

	The following figure shows an example of selecting all components.

	<img src="{{ site.baseurl }}/common/images/compman_new-purchases2.png" width="700px">
3.	Click **Install**.
4.	Continue with [Readiness check]({{ page.baseurl }}/comp-mgr/module-man/compman-readiness.html).

## Update a component {#compman-access-sync}

To see if any of your components can be updated, click **Sync**.

![An info icon means there is an update available]({{ site.baseurl }}/common/images/cman_comp-status-info.png) displays in the left column of each component that you can update. 

The following figure shows an example.

![Example showing components that need updating]({{ site.baseurl }}/common/images/cman_component-needs-update.png)

To update the component, click **Update** from the **Actions** list. A sample follows.

![Click Update from the Actions menu]({{ site.baseurl }}/common/images/cman_actions_update.png)

Continue with [Readiness check]({{ page.baseurl }}/comp-mgr/module-man/compman-readiness.html).

## Enable or disable a component {#compman-endis}

To enable or disable a component, click the appropriate choice from the **Actions** list.

The following figure shows an example of disabling a component.

![Click Disable from the Actions menu]({{ site.baseurl }}/common/images/cman_actions-disable.png)

Continue with [Readiness check]({{ page.baseurl }}/comp-mgr/module-man/compman-readiness.html).

## Uninstall a component {#compman-uninst}

To uninstall a component, click **Uninstall** from the **Actions** list as the following figure shows.

![Uninstall a component]({{ site.baseurl }}/common/images/cman_uninstall1.png)

Continue with [Readiness check]({{ page.baseurl }}/comp-mgr/module-man/compman-readiness.html).

## Supported actions for each component type {#compman-access-types}

We define the following *components*:

*	`module` for a [module](https://glossary.magento.com/module) or [extension](https://glossary.magento.com/extension) (that is, [PHP](https://glossary.magento.com/php) code that modifies Magento behavior)
*	`language` for a [language package](https://glossary.magento.com/language-package) used to translate the Magento [storefront](https://glossary.magento.com/storefront) and [Admin](https://glossary.magento.com/admin)
*	`theme` for a collection of styles that affect the look of the storefront or Admin
*	`library` for a library&mdash;such as a shared third-party [library](https://glossary.magento.com/library)
*	`component` for any type of component that must be installed in the Magento root directory (this is a relatively uncommon type)

We also use `metapackage` to group components; Magento Community Edition (CE) and Magento Enterprise Edition (EE) are examples of metapackages.

You can perform actions on components differently, depending on whether the component is part of a [metapackage](https://glossary.magento.com/metapackage) or not.

The following sections provide details:

*	[Actions available for metapackage components](#compman-access-types-meta)
*	[Actions available for non-metapackage components](#compman-access-types-non-meta)

### Actions available for metapackage components {#compman-access-types-meta}

Magento requires any component that has more than one type to be a metapackage. For example, we require a component that contains a module and a [theme](https://glossary.magento.com/theme) to be packaged as a metapackage.

{:.bs-callout .bs-callout-info}
We currently do not support uninstalling a metapackage.

The following table shows which actions are available for components that are part of a metapackage.

<table>
	<col width="40%" />
  	<col width="15%" />
  	<col width="15%" />
  	<col width="15%" />
  	<col width="15%" />
		<tbody>
		<tr>
			<th>Type</th>
			<th>Enable</th>
			<th>Disable</th>
			<th>Update</th>
			<th>Uninstall</th>
		</tr>
		<tr>
			<td>module</td>
			<td>Yes</td>
			<td>Yes</td>
			<td>No</td>
			<td>No</td>
		</tr>
		<tr>
			<td>language and theme</td>
			<td>No</td>
			<td>No</td>
			<td>Yes</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>library</td>
			<td>No</td>
			<td>No</td>
			<td>Yes</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>component</td>
			<td>No</td>
			<td>No</td>
			<td>Yes</td>
			<td>Yes</td>
		</tr>
		</tbody>
	</table>

{:.bs-callout .bs-callout-info}
**Update** displays as an action only if an update is available for that component.

### Actions available for non-metapackage components {#compman-access-types-non-meta}

Typically, a component that you download from Magento Marketplace is not part of a metapackage; in other words, a single module is probably not part of a metapackage.

The following table shows which actions are supported for each non-metapackage component.

<table>
	<col width="40%" />
  	<col width="15%" />
  	<col width="15%" />
  	<col width="15%" />
  	<col width="15%" />
		<tbody>
		<tr>
			<th>Type</th>
			<th>Enable</th>
			<th>Disable</th>
			<th>Update</th>
			<th>Uninstall</th>
		</tr>
		<tr>
			<td>module</td>
			<td>Yes</td>
			<td>Yes</td>
			<td>Yes</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>language and theme</td>
			<td>No</td>
			<td>No</td>
			<td>Yes</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>library</td>
			<td>No</td>
			<td>No</td>
			<td>Yes</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>component</td>
			<td>No</td>
			<td>No</td>
			<td>Yes</td>
			<td>Yes</td>
		</tr>
		</tbody>
	</table>

#### Next
[Step 1: Readiness check]({{ page.baseurl }}/comp-mgr/module-man/compman-readiness.html)