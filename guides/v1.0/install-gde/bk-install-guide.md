---
layout: default
group: install-guide
title: Installation Guide
menu_title: Introduction
menu_order: 1
github_link: install-gde/bk-install-guide.md
---

This guide discusses how to install Magento and extensions using Composer.

<h2 id="instgde-overview-composer">Composer and Magento</h2>

We now use <a href="https://getcomposer.org/" target="_blank">Composer</a> to install the Magento 2 software. Composer enables us to manage Magento 2, extensions, and their dependencies.

Composer provides you with the following advantages:

*	Enables you to reuse third-party libraries without bundling them with source code
*	Component-based architecture with robust dependency management
*	Manages dependencies to reduce extension conflicts and compatibility issues
*	Versioned dependencies
*	<a href="https://getcomposer.org/doc/01-basic-usage.md#package-versions" target="_blank">Semantic versioning</a>
*	Supports PHP Framework Interoperability standard

We'll have more information soon on how developers can use Composer to package extensions to distribute to Magento merchants and to other developers.

<h2 id="instgde-overview-roadmap">High-level installation roadmap</h2>

Following is a brief overview of how to install the Magento 2 software.

<h3>Step 1: Verify your prerequisites</h3>

Use the following table to verify you have the correct prerequisites to install the Magento 2 software.

<table>
	<tbody>
		<tr>
			<th>What to do</th>
			<th>How to do it</th>
			<th>For more information</th>
		</tr>
	<tr>
		<td rowspan="3">Prerequisite check</td>
		<td>Apache 2.2 or later<br>
		<code>apache -v</code></td><td><a href="{{ site.gdeurl }}install-gde/prereq/apache.html" target="_blank">Apache</a></td>
	</tr>
	<tr><td>PHP 5.4.33 or later<br>
	<code>php -v</code></td><td><a href="{{ site.gdeurl }}install-gde/prereq/php.html" target="_blank">PHP</a></td></tr>
	<tr><td>MySQL 5.5 or later<br>
	<code>mysql -u [root user name] -p</code></td><td><a href="{{ site.gdeurl }}install-gde/prereq/mysql.html" target="_blank">MySQL</a></td></tr>
	</tr>
</tbody>
</table>

<h3>Step 2: Prepare to install</h3>

After verifying your prerequisites, perform the following tasks in order to prepare to install the Magento 2 software.

1.	<a href="{{ site.gdeurl }}install-gde/install/composer-clone.html#instgde-prereq-compose-install">Installing Composer</a>
2.	<a href="{{ site.gdeurl }}install-gde/install/composer-clone.html#instgde-prereq-compose-clone">Cloning the Magento 2 GitHub repository</a>

<h3>Step 3: Installing and verifying</h3>

1.	<a href="{{ site.gdeurl }}install-gde/install/install.html">Installing and reinstalling the Magento 2 software</a>
2.	<a href="{{ site.gdeurl }}install-gde/install/verify.html">Verifying the instalation</a>

<h2 id="instgde-toc">Table of contents</h2>

Following are the major topics in this guide:

*	<a href="{{ site.gdeurl }}install-gde/system-requirements.html">Magento 2 system requirements</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/prereq-overview.html">Prerequisites for installing Magento 2</a>

	*	<a href="{{ site.gdeurl }}install-gde/prereq/apache.html">Installing and configuring Apache</a>
	*	<a href="{{ site.gdeurl }}install-gde/prereq/php.html">Installing PHP 5.4 and required extensions</a>
	*	<a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">Installing and configuring MySQL</a>
	*	<a href="{{ site.gdeurl }}install-gde/prereq/security.html">Setting security options</a>
	*	<a href="{{ site.gdeurl }}install-gde/prereq/optional.html">Installing optional software</a>

*	<a href="{{ site.gdeurl }}install-gde/install/install-overview.html">Magento 2 installation options</a>

	*	<a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Installing Composer and cloning the Magento 2 GitHub repository</a>
	*	<a href="{{ site.gdeurl }}install-gde/install/install.html">Installing and reinstalling Magento 2</a>
	*	<a href="{{ site.gdeurl }}install-gde/install/schema.html">Setting up the database schema</a>
	*	<a href="{{ site.gdeurl }}install-gde/install/admin-users.html">Creating and updating users and administrators</a>
	*	<a href="{{ site.gdeurl }}install-gde/install/update.html">Updating Magento 2</a>

*	<a href="{{ site.gdeurl }}install-gde/install/verify.html">Verify your Magento 2 installation</a>
*	<a href="{{ site.gdeurl }}install-gde/install/tshoot.html">Troubleshoot your Magento 2 installation</a>

