<div markdown="1">

## Overview of ownership and permissions {#umask-over}
Even in a development environment, you want your Magento installation to be secure. To help prevent issues related to unauthorized people or processes doing potentially harmful things to your system, we recommend some guidelines related to file system ownership and permissions.

<div class="bs-callout bs-callout-info" id="info">
  <p>In version 2.0.6 and later, Magento does not explicitly set file or directory permissions for you. We provide a convenient way you can configure them yourself.</p>
</div>

This topic provides some basic information about our ownership and permissions guidelines. For details, see [Set Magento file system ownership and permissions]({{ site.gdeurl }}install-gde/prereq/apache-user.html).

### File system ownership
We refer to the *Magento file system owner* as the user who runs command-line commands, the Magento Admin, and other utilities. This user can be either a local user on your Magento server or it can be a user provided to you by your shared hosting provider.

The Magento file system owner is any of the following:

*	*Shared hosting*: Typically, shared hosting providers enable you to log in to the server as one user. This user can log in, transfer files using FTP, and this user also runs the web server. 

*	*Other types of hosting or you have your own server*: Typically, you *cannot* log in to the server as, or switch to, the web server user. Instead, you have separate users:

	*	The web server user, which runs the Magento Admin (including Component Manager and System Upgrade). 

	*	A *command-line user*, which is a local user account you can use to log in to the server. This user runs Magento cron jobs and command-line utilities.

		Both the web server user and the command-line user need write permissions to the Magento file system. You give permissions to both users by way of a shared group to which they both belong.

### Choose file system permissions
The file system permissions you choose should enable you to run Magento and provide security against unwanted access. We provide suggestions and detailed examples in [Magento file system ownership and permissions]({{ site.gdeurl }}install-gde/prereq/apache-user.html).

<div class="bs-callout bs-callout-warning">
    <p>File system security is complex and extremely important. We strongly recommend you consult an experienced system administrator or network administrator before you decide what permissions to set. We provide a mechanism for you to use but a permissions strategy is up to you.</p>
</div>

To further restrict access, we enable you to create an optional file named `magento_umask` in your Magento root directory. A umask&mdash;also referred to as a *file system creation mask*&mdash;is a set of bits, each of which restricts how its corresponding permission is set for newly created files.

Magento uses a three-bit mask, by default `002`, that you subtract from the UNIX defaults of 666 for files and 777 for directories. 

Here's what that means:

*	For directories:

	*	777 (Linux default) is *world writable*; that is, full control by everyone (even potentially unknown users).
	*	775 means full control by the user, full control by the group, and enables everyone to traverse the directory. These permissions are typically required by shared hosting providers.

*	For files:

	*	666 (Linux default) means writable by the user, group, and everyone else (even potentially unknown users)
	*	664 means writable by the user, writable by the group, and read-only for everyone else

## Permissions, ownership, and Magento modes
We recommend different permissions and ownership for default mode, developer mode, and production mode.

We discuss these recommendations in [Magento file system ownership and permissions]({{ site.gdeurl }}install-gde/prereq/apache-user.html).