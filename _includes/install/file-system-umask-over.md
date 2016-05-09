<div markdown="1">

## Overview of ownership and permissions {#umask-over}
Even in a development environment, you want your Magento installation to be secure. To help prevent issues related to unauthorized people or processes doing potentially harmful things to your system, we recommend some guidelines related to file system ownership and security:

*	Choose file system permissions that enable you to run Magento but that also provides security against unwanted access.

	We enable you to do this by creating a file named `mage_umask` in your Magento root directory. A umask&mdash;also referred to as a *file system creation mask*&mdash;is a set of bits, each of which restricts how its corresponding permission is set for newly created files.

	Magento uses a three-bit mask, by default `002`, that you subtract from the UNIX defaults of 777 for files and 666 for directories.

	(777 means *world writable*; that is, full control by everyone. 666 means read/write for everyone.)

	With the default `mage_umask` of `002`, files and directories created by Magento have 775 permissions (full control by the user; full control by the group; write and execute for anyone else). We recommend you set more restrictive permissions; we'll go into that in more detail in [Magento file system ownership and permissions]({{ site.gdeurl }}install-gde/prereq/apache-user.html).

*	You can set up either one or two users to own the Magento file system. 

	One user is the web server, which runs the Magento Admin (including Component Manager and System Upgrade). You must always give the web server user write access to the Magento file system. 

	You can configure a second user to run cron jobs and command-line utilities. You give permissions to both users by way of a shared group to which they both belong.

*	We recommend different permissions and ownership for default mode, developer mode, and production mode.

	We discuss these recommendations [Magento file system ownership and permissions]({{ site.gdeurl }}install-gde/prereq/apache-user.html).