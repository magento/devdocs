---
layout: default
group: install_pre
subgroup: Prerequisites
title: About Magento file system ownership and permissions (MAGE_UMASK)
menu_title: About Magento file system ownership and permissions (MAGE_UMASK)
menu_node:
menu_order: 16
level3_menu_node: level3child
level3_subgroup: umask
github_link: install-gde/prereq/apache-user-over.md
---

{% include install/file-system-umask-over.md %}

## Magento file system ownership: one owner or two?
You can set up ownership of the Magento file system in any of the following ways:

*	For development systems, particularly using shared hosting, one user owns all Magento files and directories.

	This is usually the web server user, which is typically `www-data` on Ubuntu, `apache` on CentOS, or `nobody` on shared hosting. 

	For more information on setting this up, see TBD.

*	For better security, two users own Magento files and directories, sharing ownership using a common group:

	*	The web server user, which runs the Magento Admin (including Component Manager and System Upgrade).
	*	The command-line and cron user, which runs Magento CLI commands and cron.

	We recommend two users because it's very unlikely that an intruder could control two user accounts at the same time.

	For more information on setting this up, see TBD.
