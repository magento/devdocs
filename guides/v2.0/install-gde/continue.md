---
layout: default
group: install2
subgroup: Z_continue
title: Choose how to install the Magento software
menu_title: Choose how to install the Magento software
menu_node: parent
menu_order: 1
github_link: install-gde/continue.md
redirect_from: 
  - /guides/v1.0/install-gde/continue.html
  - /guides/v2.0/install-gde/install/pre-install.html
---

## Let's get started!
This Installation Guide helps you install the Magento software on a server that doesn't have Magento installed already. (Not sure? Go <a href="{{ site.gdeurl }}install-gde/basics/basics_magento-installed.html">here</a> first.)

<h2 id="install-overview-audience">Choose how to install the Magento software</h2>
Know what <a href="https://getcomposer.org/doc/00-intro.md" target="_blank">Composer</a> is and how to use it? That one question helps determine how you install the Magento software.

If you're a novice or if don't want to know anything about Composer, you're what we refer to as a *newbie* and you should start with the first row in the following table.

Anybody who does know how to use Composer has other options. Consult the following table for more information.

<table>
	<!-- <col width="25%">
	<col width="65%">
	<col width="10%"> -->
	<tbody>
		<tr>
			<th>User type</th>
			<th>Description</th>
			<th>Composer?</th>
			<th>High-level installation steps</th>
			<th>Get started link</th>
		</tr>
		
	<tr>
		<td><p>Newbie</p></td>
		<td><p>Very little technical expertise, limited if any access to the Magento server.</p></td>
		<td>Non-Composer</td>
		<td><ol><li>Downloads a compressed file that contains the Magento software.</li>
			<li>Extracts it on the Magento server or asks a network administrator or hosting provider to do so.</li>
			<li>Installs the Magento software using the Setup Wizard.</li></ol>
		</td>
		<td><p><a href="{{ site.gdeurl }}install-gde/install/newbie/newbie_start.html">Newbies start here</a></p></td>
	</tr>
	<tr>
		<td><p>System integrator</p></td>
		<td><p>Wants full control over all components installed, has access to the Magento server, highly technical.</p></td>
		<td>Composer</td>
		<td><ol><li>Creates a Composer <em>project</em> that contains the list of components to use.</li>
			<li>Uses Composer to update package dependencies.</li>
			<li>Installs the Magento software using either a command line or the Setup Wizard.</li></ol>
		<td><p><a href="{{ site.gdeurl }}install-gde/prereq/integrator_install.html">System integrators start here</a></p></td>
	</td>

	</tr>
	<tr>
		<td><p>Contributing developer</p></td>
		<td><p>Contributes to the Magento codebase, highly technical, has their own Magento development server, understands Composer and GitHub.</p></td>
		<td>Composer</td>
		<td><ol><li>Clones the Magento 2 GitHub repository.</li>
			<li>Uses Composer to update package dependencies.</li>
			<li>Installs the Magento software using either a command line or the Setup Wizard.</li></ol>
		<td><p><a href="{{ site.gdeurl }}install-gde/prereq/dev_install.html">Developers start here</a></p></td>
	</td>
	</tr>
	
	
	</tbody>
</table>
