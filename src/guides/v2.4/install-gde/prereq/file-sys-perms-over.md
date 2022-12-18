---
title: Overview of ownership and permissions
functional_areas:
  - Install
  - System
  - Setup
redirect_to: https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/prerequisites/file-system/overview.html
status: migrated
---

It is important to secure your Magento installation in a development environment to help prevent issues related to unauthorized people or processes accessing—and potentially harming—your system. Use the following file system ownership and permissions guidelines to protect your installation.

## File system owner

The file system owner is a user that owns and holds write permissions to files in the Magento file system.

There are two types of file system owners:

-  **Shared hosting with a single user**

   Shared hosting providers enable you to log in to the Magento server as one user. As a single user, you can log in, transfer files using FTP, and run the web server. You have the option of setting a [`umask`](#restrict) to further restrict access, particularly in a production environment.

-  **Private hosting with two users**

   Private hosting is useful if you manage a Magento server. Each user has a specific responsibility:

   -  The _web server user_ runs the Admin and storefront.

   -  The _command-line user_ runs the Magento cron jobs and command-line utilities.

   Both users require the same level of permissions to the Magento file system, so it is best to use a [shared group][] and set a [`umask`](#restrict).

### Restrict access with a umask {#restrict}

To tighten security, particularly in a production environment on a shared hosting system, you can use `umask` to restrict access. A `umask`—also referred to as a _file system creation mask_—is a set of bits that controls how the file permissions are set for newly created files.

{:.bs-callout-warning}
File system security is complex and extremely important. We strongly recommend that you consult an experienced system administrator or network administrator before you decide the level of permissions to set. We provide a mechanism for you to use, but creating a permissions strategy is your responsibility.

Magento uses a three-bit, default mask: `002`. Subtract the Magento default mask from the UNIX defaults of 666 for files and 777 for directories.

For example:

-  **775 for directories**—Full control by the user, full control by the group, and enables everyone to traverse the directory. These permissions are typically required by shared hosting providers.

-  **664 for files**—Writable by the user, writable by the group, and read-only for everyone else.

For more information about creating a `magento_umask` file, see [Optionally set a umask]({{ page.baseurl }}/install-gde/install/post-install-umask.html).

## Permissions, ownership, and Magento modes

We recommend different permissions and ownership when you use the different Magento modes: default mode, developer mode, and production mode. See [About Magento modes][modes] in the _Configuration guide_.

We further discuss permissions recommendations in [File systems access permissions][config-file-access] in the _Configuration guide_.

{:.bs-callout-tip}
Before you install the Magento software, review [Set pre-installation ownership and permissions]({{ page.baseurl }}/install-gde/prereq/file-system-perms.html).

<!-- link definitions -->

[config-file-access]: {{page.baseurl}}/config-guide/prod/prod_file-sys-perms.html
[modes]: {{page.baseurl}}/config-guide/bootstrap/magento-modes.html
[shared group]: {{page.baseurl}}/install-gde/prereq/file-system-perms.html#perms-private
