---
layout: default
group: 
subgroup:
title: Set file system permissions and ownership
menu_title: Set file system permissions and ownership
menu_order:
version: 2.0
github_link: cloud/before/before-setup-env-perms.md
---

#### Previous step:
[Install Magento]({{ page.baseurl }}cloud/before/before-setup-env-install.html)

After you have installed Magento, you need to set the file file system permissions and ownership.

1.  Log in to your Magento server as, or switch to, the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html).
2.  Enter the following commands in the order shown:

		cd <your Magento install dir>
		find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} \;
		find var vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} \;
		chown -R :<web server group> .
		chmod u+x bin/magento

{% include install/file-system-perms-twouser_cmds-only.md %}
