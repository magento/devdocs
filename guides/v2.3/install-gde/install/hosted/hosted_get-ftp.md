---
group: installation-guide
subgroup: 02_config-hosted
title: Transfer the Magento software to your hosted system
menu_title: Transfer the Magento software to your hosted system
menu_order: 5
menu_node:
functional_areas:
  - Install
  - System
  - Setup
---

## Magento installation overview {#newbie-ftp-overview}

1. Download the software to your computer.
1. Set up the File Transfer Protocol (FTP) to your hosted system.
1. Upload the archive to your system using FTP.
1. Extract the archive.

{% include install/archives-php-issue.md %}

{% include install/get-software_zip.md %}

## Set up FTP and transfer the Magento archive {#set-up-ftp}

FTP is a way to transfer files from your computer to your managed server. To transfer the Magento archive, you need an FTP account that has access to the managed server's `public_html` directory. You might already have an account. If not, consult your shared hosting provider's documentation or technical support for more information.

### Transfer the Magento archive to your hosted system

To transfer the Magento archive:

1. Start your FTP client software.
1. Create a connection to your managed server.

   Follow the prompts on your screen or consult the documentation provided with your FTP software for more information.

1. After you log in to your managed server, browse to locate the Magento archive on your local system.

   On the remote system, browse to locate the `public_html` directory.

   The following figure shows an example.

   ![]({{ site.baseurl }}/common/images/install-merch_ftp-transfer.png)

1. Transfer the archive from your local system to the `public_html` directory.

   On some FTP client software, you do this by dragging and dropping.

1. Wait while the transfer completes.

## Extract the archive {#extract-perms}

After transferring the Magento archive to your hosted system, you can use the cPanel to extract it, after which you can run the Magento Setup Wizard to install the software.

To extract the archive:

1. If necessary, log in to the cPanel.
1. In the Files section, click **File Manager**.

1. Click **Web Root**.

   ![]({{ site.baseurl }}/common/images/install-merch_file-manager-setup.png){:width="550px"}

1. Click **Go**.

   The File Manager displays in a separate browser window or tab page.

1. Right-click the Magento archive in the **public_html** directory.
1. From the pop-up menu, click **Extract** as the following figure shows.

   ![]({{ site.baseurl }}/common/images/install-merch_file-manager-window.png){:width="750px"}

1. Click **Extract Files**.
1. Wait while the archive extracts.

   The following figure shows an example of an extracted archive.

   ![]({{ site.baseurl }}/common/images/install-merch_file-manager-after.png){:width="750px"}

{:.ref-header}
Related topics

[Install the Magento software]({{page.baseurl }}/install-gde/install/hosted/hosted_install.html)
