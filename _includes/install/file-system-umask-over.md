<div markdown="1">

## Marketing announcement
Starting with version 2.0.6, Magento provides a more flexible way for you to set file ownership and permissions. Instead of setting permissions explicitly, we enable you to create a file named `mage_umask` in your Magento root directory. By default, the umask is `002`, which means that directories have 775 permissions and files have 664 permissions.

For more details, see <a href="http://devdocs.magento.com/prereq/apache-user.html">Magento file system ownership and permissions</a>.



In addition to these security updates, the release enables you to use <a href="http://devdocs.magento.com/guides/v2.0/config-guide/redis/config-redis.html">Redis for session storage</a> and fixed the file permission issue by providing a more flexible way for you to set file ownership and permissions. Instead of setting permissions explicitly, we enable you to create a file named `mage_umask` in your Magento root directory. By default, the umask is `002`, which means that directories have 775 permissions and files have 664 permissions.

For more details, see <a href="http://devdocs.magento.com/prereq/apache-user.html">Magento file system ownership and permissions</a>.
Full details on the functional enhancements will be included in the release notes for Enterprise Edition and Community Edition; more information on the security updates will be available on the Magento Security Center on Wednesday.....


## Overview of ownership and permissions {#umask-over}
Even in a development environment, you want your Magento installation to be secure. To help prevent issues related to unauthorized people or processes doing potentially harmful things to your system, we recommend some guidelines related to file system ownership and permissions:

*	Choose file system permissions that enable you to run Magento but that also provides security against unwanted access.

	We enable you to do this by creating a file named `mage_umask` in your Magento root directory. A umask&mdash;also referred to as a *file system creation mask*&mdash;is a set of bits, each of which restricts how its corresponding permission is set for newly created files.

	Magento uses a three-bit mask, by default `002`, that you subtract from the UNIX defaults of 777 for files and 666 for directories.

	Here's what that means:

	*	For files:

		*	777 is *world writable*; that is, full control by everyone (even potentially unknown users)
		*	775 means full control by the user, full control by the group, and read/write/execute for everyone else. These permissions are typically required by shared hosting providers

	*	For directories:

		*	666 means writable by the user, group, and everyone else (even potentially unknown users)
		*	664 means writable by the user, writable by the group, and read-only for everyone else

*	You can set up either one or two users to own the Magento file system. 

	One user is the web server, which runs the Magento Admin (including Component Manager and System Upgrade). You must always give the web server user write access to the Magento file system. 

	You can configure a second user to run cron jobs and command-line utilities. You give permissions to both users by way of a shared group to which they both belong.

*	We recommend different permissions and ownership for default mode, developer mode, and production mode.

	We discuss these recommendations [Magento file system ownership and permissions]({{ site.gdeurl }}install-gde/prereq/apache-user.html).