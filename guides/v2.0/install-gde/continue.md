---
layout: default
group: install2
subgroup: Z_continue
title: Next&mdash;Choose how to get the Magento software
menu_title: Next&mdash;Choose how to get the Magento software
menu_node: parent
menu_order: 1
version: 2.0
github_link: install-gde/continue.md
redirect_from: 
  - /guides/v1.0/install-gde/continue.html
  - /guides/v2.0/install-gde/install/continue.html
---

## Let's get started!
This Installation Guide helps you install the Magento software on a server that doesn't have Magento installed already. (Not sure? <a href="{{page.baseurl}}install-gde/basics/basics_magento-installed.html">See if the Magento software is installed already</a> first.)

<h2 id="install-overview-audience">Choose how to get the Magento software</h2>
Want an easy installation with a compressed software archive? Would you rather use <a href="https://getcomposer.org/doc/00-intro.md" target="_blank">Composer</a> to download a metapackage? Or are you a developer who wants to contribute code to the Magento 2 CE codebase? We provide the means for everyone to get and install the Magento software.

Consult the following table for how to get started.

<table>
	<!-- <col width="25%">
	<col width="65%">
	<col width="10%"> -->
	<tbody>
		<tr>
			<th>User needs</th>
			<th>Description</th>
			<th>High-level installation steps</th>
			<th>Get started link</th>
		</tr>
	<tr>
		<td><p>Easy installation, command line, have your own server</p></td>
		<td><p>Some technical expertise, command line access to the Magento server.</p></td>
		<td><ol><li>Downloads a compressed file that contains the Magento software.</li>
			<li>Extracts it on the Magento server or asks a network administrator to do so.</li>
			<li>Installs the Magento software using the Setup Wizard or command line.</li></ol>
		</td>
		<td><p><a href="{{page.baseurl}}install-gde/prereq/zip_install.html">Easy installation (own server)</a></p></td>
	</tr>
	<tr>
		<td><p>Integrator, packager</p></td>
		<td><p>Wants full control over all components installed, has access to the Magento server, highly technical, might repackage Magento CE with other components.</p></td>
		<td><ol><li>Creates a Composer <em>project</em> that contains the list of components to use.</li>
			<li>Uses Composer to update package dependencies; uses <code>composer create-project</code> to get the Magento metapackage.</li>
			<li>Installs the Magento software using either a command line or the Setup Wizard.</li></ol>
		<td><p><a href="{{page.baseurl}}install-gde/prereq/integrator_install.html">Get the metapackage</a></p></td>
	</td>

	</tr>
	<tr>
		<td><p>Contributing developer</p></td>
		<td><p>Contributes to the Magento codebase, highly technical, has their own Magento development server, understands Composer and GitHub.</p></td>
		<td><ol><li>Clones the Magento 2 GitHub repository.</li>
			<li>Uses Composer to update package dependencies.</li>
			<li>Installs the Magento software using either a command line or the Setup Wizard.</li></ol>
		<td><p><a href="{{page.baseurl}}install-gde/prereq/dev_install.html">Clone the Magento repository</a></p></td>
	</td>
	</tr>
		<tr>
		<td><p>Shared hosting, easy installation, no command line access</p></td>
		<td><p>Uses a hosting provider, has very little technical expertise, limited if any access to the Magento server.</p></td>
		<td><ol><li>Downloads a compressed file that contains the Magento software.</li>
			<li>Extracts it on the Magento server.</li>
			<li>Installs the Magento software using the Setup Wizard.</li></ol>
		</td>
		<td><p><a href="{{page.baseurl}}install-gde/install/hosted/hosted_start.html">Easy installation (shared hosting)</a></p></td>
	</tr>
	
	</tbody>
</table>
