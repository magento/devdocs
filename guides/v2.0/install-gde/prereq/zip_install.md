---
layout: default
group: install_pre
subgroup: R_General
title: (Easy) Install the Magento archive on your server
menu_title: (Easy) Install the Magento archive on your server
menu_order: 1
menu_node: parent
github_link: install-gde/prereq/zip_install.md
---


#### Contents 

*	<a href="#integrator-aud">Intended audience</a>
*	<a href="#zip-prereq">Prerequisites</a>
*	<a href="#zip-perms">Set file system ownership and permissions</a>

<h2 id="integrator-aud">Intended audience</h2>
The audience for this topic is anyone who downloaded a compressed Magento software archive (`.zip` or `.tar`). If you'd rather use Composer, go back and <a href="{{ site.gdeurl }}install-gde/continue.html">choose another starting point</a>.

<h2 id="zip-prereq">Prerequisites</h2>
Before you continue, make sure you've done all of the following:

*	Set up a server that meets our <a href="{{ site.gdeurl }}install-gde/system-requirements.html">system requirements</a>
*	Created the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a>	
*	Downloaded the <a href="{{ site.gdeurl }}install-gde/install/get-software.html">Magento software archive</a>

<h2 id="zip-transfer">Transfer the Magento archive to your server</h2>
To transfer the Magento software archive to your server:

1.	Install and configure a file transfer protocol (FTP) or secure copy protocol (SCP) client to transfer the Magento software from your computer to your server.

	There are many ways to configure FTP and SCP. Following are a few packages you can use. Magento does not recommend particular software.

	*	Windows: <a href="https://winscp.net/eng/download.php" target="_blank">WinSCP</a> or <a href="https://filezilla-project.org/download.php" target="_blank">Filezilla</a>
	*	Mac OS: <a href="https://cyberduck.io/?l=en" target="_blank">CyberDuck</a> or <a href="https://filezilla-project.org/download.php" target="_blank">Filezilla</a>

2.	Create a connection to your Magento server.

	Follow the prompts on your screen or consult the documentation provided with your FTP software for more information.

3.	After you log in to your server, browse to locate `magento2-ce.zip` or `magento2-ee.zip` on your local system.

	On the remote system, browse to locate the web server docroot directory.

	The following figure shows an example.

	<img src="{{ site.baseurl }}common/images/install-merch_ftp-transfer.png">

4.	Transfer the archive from your local system to the web server docroot directory.

	On some FTP client software, you do this by dragging and dropping.
5.	Wait while the transfer completes.

<h2 id="zip-extract">Extract the software on your server</h2>
Log in to your Magento server as, or switch to, the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a> and extract the software package in the web server docroot. 

The Magento software extracts to a `magento2-ce` or `magento2-ee` subdirectory, which you can rename if you wish. Make sure the directory name matches your virtual host configuration, if any.

<h2 id="zip-perms">Set file system ownership and permissions</h2>
The following sections discuss how to set file system ownership and permissions:

*	<a href="#install-perms-import">Why we recommend you set file system permissions</a>
*	<a href="#install-perms-set">File system permissions and ownership</a>

<h3 id="install-perms-import">Why we recommend you set file system permissions</h3>
{% include install/file-system-perms1-why.html %}

<h3 id="install-perms-set">File system permissions and ownership</h3>
{% include install/file-system-perms2-how.html %}

#### Next step
Install the Magento software:

*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli.html">Command line</a>
*	<a href="{{ site.gdeurl }}install-gde/install/web/install-web.html">Setup Wizard</a>