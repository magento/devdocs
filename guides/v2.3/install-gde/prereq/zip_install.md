---
group: installation-guide
title: (Easy) Install the Magento archive on your server
functional_areas:
  - Install
  - System
  - Setup
---

## Intended audience {#integrator-aud}

The audience for this topic is anyone who downloaded a compressed Magento software archive (`.zip` or `.tar`). If you'd rather use Composer, go back and [choose another starting point]({{ page.baseurl }}/install-gde/bk-install-guide.html).

## Prerequisites

{% include install/prereq.md %}

## Get the Magento software

{% include install/get-software_zip.md %}

## Transfer the Magento archive to your server {#zip-transfer}

To transfer the Magento software archive to your server:

1. Install and configure a file transfer protocol (FTP) or secure copy protocol (SCP) client to transfer the Magento software from your computer to your server.

   There are many ways to configure FTP and SCP. Following are a few packages you can use. Magento does not recommend particular software.

   *  Windows: [WinSCP](https://winscp.net/eng/download.php) or [Filezilla](https://filezilla-project.org/download.php)
   *  Mac OS: [CyberDuck](https://cyberduck.io/?l=en) or [Filezilla](https://filezilla-project.org/download.php)

1. Create a connection to your Magento server.

   Follow the prompts on your screen or consult the documentation provided with your FTP software for more information.

1. After you log in to your server, browse to locate the {{site.data.var.ce}} or {{site.data.var.ee}} archive on your local system.

   On the remote system, browse to locate the web server docroot directory.

   The following figure shows an example.

   ![]({{ site.baseurl }}/common/images/install-merch_ftp-transfer.png)

1. Transfer the archive from your local system to the web server docroot directory.

   On some FTP client software, you do this by dragging and dropping.

1. Wait while the transfer completes.
1. Log in to your Magento server, or switch to, the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html)
1. Change to the web server docroot or the virtual host directory.
1. Create a subdirectory for the Magento software.

   If you set up a virtual host, the subdirectory name must match the name in your virtual host.

   For example,

   ```bash
   mkdir magento2ce
   ```

   ```bash
   mkdir magento2ee
   ```

   You can also use a generic directory name

   ```bash
   mkdir magento2
   ```

1. Copy the Magento archive to that directory.

   For example,

   ```bash
   cp /var/www/Magento-CE-2.0.0+Samples.tar.bz2 magento2
   ```

1. Continue with the next section.

## Extract the software on your server {#zip-extract}

Log in to your Magento server as, or switch to, the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html) and extract the software package in the web server docroot using one of the following commands:

| File format | Command to extract    |
| ----------- | --------------------- |
| `.tar.gz`   | `tar zxf <filename>`  |
| `.zip`      | `unzip <filename>`    |
| `.tar.bz2` | `tar jxf <filename>` |

The Magento software extracts to the directory you created. After the file has extracted, either delete the Magento archive or move it to another directory.

{% include install/file-system-perms-before_22.md %}

{:.ref-header}
Related topics

Install the Magento software:

*  [Command line]({{ page.baseurl }}/install-gde/install/cli/install-cli.html)
*  [Setup Wizard]({{ page.baseurl }}/install-gde/install/web/install-web.html)
