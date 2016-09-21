---
layout: default
group: install_hosted
subgroup: 02_config-hosted
title: Transfer the Magento software to your hosted system
menu_title: Transfer the Magento software to your hosted system
menu_order: 5
menu_node: 
version: 2.0
github_link: install-gde/install/hosted/hosted_get-ftp.md
---

#### Contents
*	<a href="#newbie-ftp-overview">Magento installation overview</a>
*	<a href="#get-archive">Get the Magento software packages</a>
*	<a href="#set-up-ftp">Set up FTP and transfer the Magento archive</a>
*	<a href="#extract-perms">Extract the archive</a>

<h2 id="newbie-ftp-overview">Magento installation overview</h2>
1.	Download the software to your computer.
2.	Set up the File Transfer Protocol (FTP) to your hosted system.
3.	Upload the archive to your system using FTP.
4.	Extract the archive.

{% include install/get-software_zip.md %}

<h2 id="set-up-ftp">Set up FTP and transfer the Magento archive</h2>
FTP is a way to transfer files from your computer to your managed server. To transfer the Magento archive, you need an FTP account that has access to the managed server's `public_html` directory. You might already have an account. If not, consult your shared hosting provider's documentation or technical support for more information. You can also use a tutorial like this one from <a href="https://blog.sucuri.net/create-an-ftp-user-with-public_html-access-in-cpanel" target="_blank">sucuri</a>.

### Transfer the Magento archive to your hosted system
To transfer the Magento archive:

1.	Start your FTP client software.
2.	Create a connection to your managed server.

	Follow the prompts on your screen or consult the documentation provided with your FTP software for more information.

3.	After you log in to your managed server, browse to locate the Magento archive on your local system.

	On the remote system, browse to locate the `public_html` directory.

	The following figure shows an example.

	<img src="{{ site.baseurl }}common/images/install-merch_ftp-transfer.png">

4.	Transfer the archive from your local system to the `public_html` directory.

	On some FTP client software, you do this by dragging and dropping.
5.	Wait while the transfer completes.

<h2 id="extract-perms">Extract the archive</h2>
After transferring the Magento archive to your hosted system, you can use the cPanel to extract it, after which you can run the Magento Setup Wizard to install the software.

To extract the archive:

1.	If necessary, log in to the cPanel.
2.	In the Files section, click **File Manager**.


3.	Click **Web Root**.

	<img src="{{ site.baseurl }}common/images/install-merch_file-manager-setup.png" width="550px">

4.	Click **Go**.

	The File Manager displays in a separate browser window or tab page.

3.	Right-click the Magento archive in the **public_html** directory.
4.	From the pop-up menu, click **Extract** as the following figure shows.

	<img src="{{ site.baseurl }}common/images/install-merch_file-manager-window.png" width="750px">
5.	Click **Extract Files**.
5.	Wait while the archive extracts.

	The following figure shows an example of an extracted archive.

	<img src="{{ site.baseurl }}common/images/install-merch_file-manager-after.png" width="750px">

#### Next step
<a href="{{page.baseurl}}install-gde/install/hosted/hosted_install.html">Install the Magento software</a>
