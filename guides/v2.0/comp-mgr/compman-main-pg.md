---
layout: default 
group: compman
subgroup: C_UseCompMan
title: Component management options
menu_title: Component management options
menu_node: 
menu_order: 2
github_link: comp-mgr/compman-main-pg.md
---


<h4>Contents</h4>   

*	TBD
*	TBD
*	TBD

<h2 id="compman-access">Component Management options</h2>
To choose wither to upgrade, enable, or disable components:

1.	Start with <a href="{{ site.gdeurl }}comp-mgr/compman-start.html">Access the Component Manager</a>.
	A page similar to the following displays:
	<img src="{{ site.baseurl }}common/images/cman_initial-page.png" alt="The Component Manager page enables you to synchronize with Magento Connect to see if updates are available">
2.	You have the following options:
	<table>
	<tbody>
	<tr>
		<th>Item</th>
		<th>Meaning</th>
	</tr>
	<tr>
		<td><p>Magento Connect Account section</p></td>
		<td><p>Shows when you last synchronized with your Magento Connect account. To get the latest information about available component versions, you must synchronize with Connect.</p>
			<p>Last Sync shows the last time you synchronized and Sync Status shows whether or not you're currently synchronized.</td>
	</tr>
	<tr>
		<td><p>Sync button</p></td>
		<td><p>Click <strong>Sync</strong> to compare the component versions you're currently using with those available on Connect.</p></td>
	</tr>
	<tr>
		<td><p>List of components</p></td>
		<td><p>For each component, one of the following status indicators displays in the left column:</p>
			<ul><li><img src="{{ site.baseurl }}common/images/cman_comp-status-green.png" alt="A green icon means that the component is enabled and is current as of the last sync">Green, which means the component is enabled and its status was current last time you synchronized with Connect.</li>
				<li><img src="{{ site.baseurl }}common/images/cman_comp-status-info.png" alt="An info icon means there is an update available">An update is available.</li>
				<li>TBD</li></ul>
				<p>Middle columns display information about the component we obtained from its Composer package.</p>
				<p>The right column displays available actions for each component. For more information, see TBD.</p></td>
	</tr>
	<tr>
		<td><p>Actions</p></td>
		<td><img src="{{ site.baseurl }}common/images/cman_actions.png" alt="You can enable, disable, or update components">
			<p>A component has one or more of the following actions available from the <strong>Actions</strong> list:</p>
			<ul><li>Enable</li>
				<li>Disable</li>
				<li>Update</li></ul>
	<tr>
		<td><p>Pagination</p></td>
		<td><p>Enables you to:</p>
			<p><img src="{{ site.baseurl }}common/images/cman_page_number.png" alt="Specify number of items to display on page">Specify the number of items to display on a page.</p>
			<p><img src="{{ site.baseurl }}common/images/cman_page_move.png" alt="Move back and forward or specify a page number">From left to right, move back one page, go to a specific page, or move forward one page.</p></td>
	</tr>
	</tbody>
	</table>

<h2 id="compman-access-sync">Update a component</h2>
To see if any of your components can be updated, click **Sync**.

<img src="{{ site.baseurl }}common/images/cman_comp-status-info.png" alt="An info icon means there is an update available"> displays in the left column of each component that you can update. 

The following figure shows an example.

<img src="{{ site.baseurl }}common/images/cman_component-needs-update.png" alt="Example showing components that need updating">

See <a href="{{ site.gdeurl }}comp-mgr/compman-readiness.html">Readiness check</a>.

<h2 id="compman-access-enable">Enable or disable a component</h2>
To enable a component, click **Enable** or **Disable** from the **Actions** list and see <a href="{{ site.gdeurl }}comp-mgr/compman-readiness.html">Readiness check</a>.




