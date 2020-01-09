## Overview of ownership and permissions {#umask-over}

Even in a development environment, you want your Magento installation to be secure. To help prevent issues related to unauthorized people or processes doing potentially harmful things to your system, we recommend some guidelines related to file system ownership and permissions.

{:.bs-callout-info}
If you're using an Magento version 2.0.5 or earlier, see [Appendix---Magento file system ownership and appendix (legacy)]({{ page.baseurl }}/install-gde/install/legacy-file-system-perms.html) instead of this topic. In version 2.0.6 and later, Magento does not explicitly set file or directory permissions.

This topic provides some basic information about our ownership and permissions guidelines. For additional information, see:

*  [Set pre-installation ownership and permissions]({{ page.baseurl }}/install-gde/prereq/file-system-perms.html)
*  [Magento ownership and permissions in development and production]({{ page.baseurl }}/config-guide/prod/prod_file-sys-perms.html)

### Magento file system owner

We refer to the *Magento file system owner* as a user who owns and can write to files in the Magento file system.

{:.bs-callout-info}
The Magento file system owner is sometimes referred to as the *command-line user*.

The Magento file system owner is any of the following:

*  A single user, which is typical of shared hosting.

   Shared hosting providers enable you to log in to the Magento server as one user. This user can log in, transfer files using FTP, and this user also runs the web server.

   If you use one Magento user, you have the option of setting a [umask](#restrict) to further restrict access, particularly in production.

*  Users that belong to a shared group, which is typical of private hosting or having your own Magento server.

   In this situation, you typically *cannot* log in to the server as, or switch to, the web server user. Instead, you have separate users:

   *  The web server user, which runs the Magento Admin and storefront.

   *  A *command-line user*, which is a local user account you can use to log in to the server. This user runs Magento cron jobs and command-line utilities.

   The web server user and the command-line user might need write permissions to the Magento file system. (The users require write access in [developer mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html) but not in production mode.) You give permissions to both users by way of a shared group to which they both belong.

   For private hosting, we recommend you use the default `002` [umask](#restrict); otherwise, the group won't be able to write to the Magento file system.

Before you install the Magento software, see [Set pre-installation ownership and permissions]({{ page.baseurl }}/install-gde/prereq/file-system-perms.html).

### Restrict access with a umask {#restrict}

To tighten security, particularly in production on a shared hosting system, we provide a flexible to means to restrict access using a umask. A umask---also referred to as a *file system creation mask*---is a set of bits, each of which restricts how its corresponding permission is set for newly created files.

{:.bs-callout-warning}
File system security is complex and extremely important. We strongly recommend you consult an experienced system administrator or network administrator before you decide what permissions to set. We provide a mechanism for you to use but a permissions strategy is up to you.

Magento uses a three-bit mask, by default `002`, that you subtract from the UNIX defaults of 666 for files and 777 for directories.

Here's what that means:

*  775 for directories, which means full control by the user, full control by the group, and enables everyone to traverse the directory. These permissions are typically required by shared hosting providers.

*  664 for files, which means writable by the user, writable by the group, and read-only for everyone else.

For more information about `magento_umask`, see [Optionally set a umask]({{ page.baseurl }}/install-gde/install/post-install-umask.html).

## Permissions, ownership, and Magento modes

We recommend different permissions and ownership for default mode, developer mode, and production mode.

We discuss these recommendations in [Magento ownership and permissions in development and production]({{ page.baseurl }}/config-guide/prod/prod_file-sys-perms.html).
