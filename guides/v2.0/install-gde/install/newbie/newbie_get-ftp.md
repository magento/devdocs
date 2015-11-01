---
layout: default
group: install_newbie
subgroup: 02_config-hosted
title: Transfer the Magento software to your hosted system
menu_title: Transfer the Magento software to your hosted system
menu_order: 5
menu_node: 
github_link: install-gde/install/newbie/newbie_get-ftp.md
---

#### Contents
*	<a href="#newbie-ftp-overview">Magento installation overview</a>
*	<a href="#set-up-ftp">Set up FTP and transfer the Magento archive</a>
*	<a href="#extract-perms">Extract the archive</a>

<h2 id="newbie-ftp-overview">Magento installation overview</h2>
1.	Download the software to your computer.
2.	Set up the File Transfer Protocol (FTP) to your hosted system.
3.	Upload the package to your system using FTP.
4.	Extract the software.
4.	Set permissions (?? TBD)

{% include install/get-software.md %}

<h2 id="set-up-ftp">Set up FTP and transfer the Magento archive</h2>
FTP is a way to transfer files from your computer to your managed server. This section discusses how to transfer the Magento archive to your hosted system using the WinSCP client. You can use the same instructions with any FTP software.

### Set up an FTP account
To transfer the Magento archive, you need an FTP account that has access to the managed server's <a href="https://blog.sucuri.net/create-an-ftp-user-with-public_html-access-in-cpanel" target="_blank">`public_html`</a> directory. You might already have one but if not, use the following steps to create one.

<div class="bs-callout bs-callout-info" id="info">
  <p>This section shows how to use an existing FTP account. To set up a new account, consult the GoDaddy documentation or a tutorial like <a href="https://blog.sucuri.net/create-an-ftp-user-with-public_html-access-in-cpanel" target="_blank">this one</a> for more information. </p>
</div>

To use an existing FTP account:

1.	If necessary, log in to the cPanel.
2.	In the Files section, click **FTP Accounts**.

	<img src="{{ site.baseurl }}common/images/install-merch_ftp-accts.png">

3.	In the Special FTP Accounts section at the bottom of the page, click **Configure FTP Account** next to the account of the user you set up.

	Write down the information that displays. The following figure shows an example.

	<img src="{{ site.baseurl }}common/images/install-merch_ftp-accts-conf.png">

### Transfer the Magento archive to your hosted system
To transfer the Magento archive:

1.	Start your FTP client software (this example uses WinSCP but you can also use the software listed on the FTP Accounts page).
6.	In the WinSCP Login dialog box, click **New Site**.
7.	Enter the information displayed in the cPanel.

	The following figure shows an example. (For other FTP clients, consult the documentation provided with your software for specific information.)

	<img src="{{ site.baseurl }}common/images/install-merch_ftp-winscp.png">

8.	Click **Save** to save the connection information for later use.

	When prompted, choose whether or not to store the password with the connection information.

9.	Click **Login**.

	If an error displays saying that the login failed because the host name couldn't be resolved, click **OK**. Click **Edit** and enter your managed server's IP address in the **Host Name** field.

	The IP address displays on the cPanel home page; click **Home** to go to that page.

10.	After you log in to your managed server, in the left pane of the WinSCP window, browse to locate `magento2-ce.zip`. 

	In the right pane, browse to locate the `public_html` directory.

	The following figure shows an example.

	<img src="{{ site.baseurl }}common/images/install-merch_ftp-transfer.png">

11.	Drag the Magento archive from the left pane to the right pane.
12.	Wait while the transfer completes.

<h2 id="extract-perms">Extract the archive</h2>
After transferring the Magento archive to your hosted system, you can use the cPanel to extract it, after which you can run the Magento Setup Wizard to install the software.

To extract the archive:

1.	If necessary, log in to the cPanel.
2.	In the Files section, click **File Manager**.

	<img src="{{ site.baseurl }}common/images/install-merch_file-manager.png">

	The File Manager displays in a separate browser window or tab page.

3.	Right-click the Magento archive in the **public_html** directory.
4.	From the pop-up menu, click **Extract** as the following figure shows.

	<img src="{{ site.baseurl }}common/images/install-merch_file-manager-window.png">

5.	Wait while the archive extracts to either a `magento2-ce` or `magento2-ee` subdirectory, depending on which Magento edition you have.


