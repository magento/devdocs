---
layout: default
group: cloud
subgroup: 12_env
title: SSH into your environment
menu_title: SSH into your environment
menu_order: 3
menu_node: 
version: 2.0
github_link: cloud/env/environments-ssh.md
---

## Connect to the environment using SSH {#env-ssh}
Before you can use SSH to connect to an environment, you must add your [SSH public key]({{page.baseurl}}cloud/before/before-workspace.html#cloud-ssh-cli-ssh) 
to your account. For security reasons, in order to add your public key to a production or staging environment,
 you must create a support ticket requesting the key to be added.

You can then connect using SSH in any of the following ways:

## Integration environments

Following are methods to SSH into your integration environment.

###$# SSH using the magento-cloud tool

To SSH to an environment using the `magento-cloud` command line:

1.	Log in to the project:

		magento-cloud login
2.	List the project IDs:

		magento-cloud project:list
3.	List the environments in that project:

		magento-cloud environment:list -p <project ID>
3.	SSH to the environment:

		magento-cloud ssh -p <project ID> -e <environment ID>

###$# Find SSH connection details using the Web Interface
To SSH to an environment using the Web Interface:

1.	Log in to the Web Interface.
2.	Hover the mouse pointer over **Access Site** in the desired environment as the following figure shows.

	![Find the SSH URL using the Web Interface]({{ site.baseurl }}common/images/cloud_ssh-access.png){:width="500px"}

3.	Click the clipboard button to copy the full SSH command to the clipboard. Enter the command in a terminal window.

## Staging and Production environments

The `magento-cloud` tool is not used to SSH into staging and production environments. To SSH into staging and production 
environments, first create a support ticket requesting for your public key to be added to the environment. The user and 
URL will have been supplied when the environment was provisioned.

#### Related topics
*	[Manage your environments]({{page.baseurl}}cloud/env/environments.html)
*   [Adding keys to your environment]({{page.baseurl}}cloud/before/before-workspace.html#cloud-ssh-cli-ssh)