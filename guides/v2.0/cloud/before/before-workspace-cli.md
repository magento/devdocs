---
layout: default
group: cloud
subgroup: 08_setup
title: Step 3, Install the CLI
menu_title: Step 3, Install the CLI
menu_order: 12
menu_node: 
level3_menu_node: level3child
level3_subgroup: workspace
version: 2.0
github_link: cloud/before/before-workspace-cli.md
---

## Install the command-line interface (CLI) {#cloud-ssh-cli-cli-install}
The Magento Enterprise Cloud Edition command-line interface (CLI) helps you manage your projects on Magento Enterprise Cloud Edition. 

To install the Magento Enterprise Cloud Edition CLI:

1.	Log in to your local development machine, or switch to, the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html).
2.	Change to a directory to which the Magento file system owner has write access (for example, the web server docroot).
1.	Enter the following command:

		curl -sS https://accounts.magento.cloud/cli/installer | php
2.	After the CLI downloads, an operating system-specific command displays.

	For example, on Ubuntu and CentOS, the command is similar to:

		 source /home/magento_user/.bashrc

	For more information about the user shell profile, see [.bash_profile vs .bashrc](http://www.joshstaiger.org/archives/2005/07/bash_profile_vs.html){:target="_blank"}

3.	Enter the operating system-specific command to add the CLI to your system `$PATH`.
	
	For example, on Ubuntu it might be in the following way:
	
		export PATH=$PATH:/home/magento_user/.magento-cloud/bin
		
4.	Verify the `magento-cloud` command is in your path by entering the following command:

		magento-cloud list

#### Next step
[Enable Secure Shell (SSH)]({{ page.baseurl }}cloud/before/before-workspace-ssh.html)
