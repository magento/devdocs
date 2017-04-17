---
layout: default
group: cloud
subgroup: 080_setup
title: Step 7, Set file system permissions and ownership
menu_title: Step 7, Set file system permissions and ownership
menu_order: 167
level3_menu_node: level3child
level3_subgroup: setupenv
version: 2.0
github_link: cloud/before/before-setup-env-perms.md
---

{::options syntax_highlighter="rouge" /}

To set up file system permissions and ownership:

1.  Log in to your Magento server as, or switch to, the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html).
2.  Enter the following commands in the order shown:

		cd <your Magento install dir>
		find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} \;
		find var vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} \;
		chown -R :<web server group> .
		chmod u+x bin/magento

{% include install/file-system-perms-twouser_cmds-only.md %}

#### Next step
[Step 7, Install Magento]({{ page.baseurl }}cloud/before/before-setup-env-install.html)
