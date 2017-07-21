---
layout: default
group: cloud
subgroup: 080_setup
title: Step 7, Set file system permissions and ownership
menu_title: Step 7, Set file system permissions and ownership
menu_order: 168
level3_menu_node: level3child
level3_subgroup: setupenv
version: 2.0
github_link: cloud/before/before-setup-env-perms.md
---

#### Previous step:
[Branch an environment]({{ page.baseurl }}cloud/before/before-setup-env-env.html)

After you have installed Magento, you need to set the file file system permissions and ownership.

1.  Log in to your Magento server as, or switch to, the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html).
2.  Enter the following commands in the order shown:

		cd <your Magento install dir>
		find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} \;
		find var vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} \;
		chown -R :<web server group> .
		chmod u+x bin/magento

{% include install/file-system-perms-twouser_cmds-only.md %}

ADD CONTENT TO VERIFY THE MAGENTO

With these steps completed, you should have:
* Magento ECE account and initial project setup
* A local workspace configured with installations of required software, Magento ECE CLI, and Magento
* SSH keys set up
* The Magento file system owner configured
* A branch for your code
* Magento authentication keys set up

Begin developing and testing in your branch.

#### Related topics
links
