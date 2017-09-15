---
layout: default
group: cloud
subgroup: 020_tech
title: SSH
menu_title: SSH
menu_order: 35
menu_node:
version: 2.0
github_link: cloud/env/environments-ssh.md
---

SSH, or Secure Shell, is a protocol used to securely log into remote servers and systems. You will typically use SSH to access your environments directly to enter [CLI commands]({{page.baseurl}}cloud/reference/cli-ref-topic.html) for managing your branching, creating variables, and much more.

To use SSH, you need to:

* Generate your SSH public and private keys
* Add your SSH public key to your remote server either through CLI commands or the Project Web Interface
* Use the `ssh <remote server>` command to directly access the environment

(Add info on SSH)

## Create SSH keys {#create}
(INFO on creating SSH keys)

## Add the public SSH key via CLI {#cli}
Before you can use SSH to connect to an environment, you must add your [SSH public key]({{page.baseurl}}cloud/before/before-workspace-ssh.html) to your account and every environment.

For security reasons, to add your public key to your environments.

You can then connect using SSH in any of the following ways:

* Git commands
* Magento Cloud CLI

## Magento Cloud CLI {#magento-cli}
Magento CLoud CLI commands can only be used in environments with the software installed. These environments include:

* Starter environments
* Pro Integration environments

To SSH to an environment using the Magento Cloud command line:

1.	Log in to the project:

		magento-cloud login
2.	List the project IDs:

		magento-cloud project:list
3.	List the environments in that project:

		magento-cloud environment:list -p <project ID>
3.	SSH to the environment:

		magento-cloud ssh -p <project ID> -e <environment ID>

## SSH via Project Web Interface {#web-interface}
To SSH to an environment using the Web Interface:

1.	Log in to the Project Web Interface.
2.	Hover the mouse pointer over **Access Site** in the desired environment as the following figure shows.

	![Find the SSH URL using the Web Interface]({{ site.baseurl }}common/images/cloud_ssh-access.png){:width="400px"}

3.	Click the clipboard button to copy the full SSH command to the clipboard. Enter the command in a terminal window.

### Git CLI commands {#git}
You can't use the Magento Cloud CLI to SSH into Pro plan Staging and Production systems. You can SSH into those environments and use Git CLI commands for managing your branches and Linux/Unix commands for managing the system.

With your SSH keys added to those servers, you can use a terminal application, the SSH command, and the URL to access the server.

You can locate the SSH command for accessing the system through the Project Web Interface.

(INSTRUCTIONS for SSH)

The URL format for these SSH commands for Pro are:

*	Staging: `http[s]://staging.<your domain>.c.<project ID>.ent.magento.cloud`
*	Production:

	*	Load balancer URL: `http[s]://<your domain>.c.<project ID>.ent.magento.cloud`
	*	Direct access to one of the three redundant servers: `http[s]://<your domain>.{1|2|3}.<project ID>.ent.magento.cloud`

#### Related topics
*	[Manage your environments]({{page.baseurl}}cloud/env/environments.html)
* [Adding keys to your environment]({{page.baseurl}}cloud/before/before-workspace-ssh.html)
