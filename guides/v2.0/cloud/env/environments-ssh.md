---
layout: default
group: cloud
subgroup: 020_tech
title: SSH and SFTP
menu_title: SSH and SFTP
menu_order: 35
menu_node:
version: 2.0
github_link: cloud/env/environments-ssh.md
---

SSH, or Secure Shell, is a common protocol used to securely log into remote servers and systems. You will typically use SSH to access your environments directly to enter [CLI commands]({{page.baseurl}}cloud/reference/cli-ref-topic.html) for managing your branching, creating variables, and much more. We also support [sFTP](#sftp) (Secure FTP) using your SSH public key.

To use SSH, you need to:

* Generate your SSH public and private keys
* Add your SSH public key to your remote server either through CLI commands or the Project Web Interface
* Use Magento Cloud CLI or Git commands to [SSH](#ssh) to an environment

You create an SSH key pair including a public and private key:

* The _public key_ is safe to provide for accessing a site, [SSH](#ssh), and [sFTP](#sftp).
* The _private key_ should remain private on your workspace that you use for remote accessing environments. **Never share your private key.** Don't add it to a ticket, copy it to a chat, or attach it to emails.

## How SSH keys work {#work}
When you enter an SSH command to connect your client to the remote host, the SSH key authentication requests access to the server indicating the public key to use. The server checks for authorized keys for the public key, generates a message, and encrypts it with the public key. Your system receives the message, decrypts it using the private key, and merges the message with a session ID. A generated MD5 has of the value is sent back to the server. This passes the connection test and completes full SSH access to the host.

{% include cloud/enable-ssh.md %}

## SSH to an environment {#ssh}
You can connect using SSH in any of the following ways:

* [SSH using Magento Cloud CLI](#magento-cli)
* [Locate the SSH command in the Project Web Interface](#web-interface)
* [Git SSH commands for Pro Staging and Production](#pro)

### SSH using Magento Cloud CLI {#magento-cli}
Magento Cloud CLI commands can only be used in environments with the software installed. These environments include:

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

### Locate the SSH command in the Project Web Interface {#web-interface}
You can locate the SSH command for all Starter and Pro Integration environments through the Project Web Interface.

To copy the SSH command:

1.	Log in to the Project Web Interface.
2.	Select an environment or branch to access.
3.	Click **Access Site**.

	![Find the SSH URL using the Web Interface]({{ site.baseurl }}common/images/cloud_ssh-access.png){:width="400px"}

4.	Click the clipboard button to copy the full SSH command to the clipboard.
5.	Enter the command in a terminal window to SSH.

Example SSH command:

	ssh abcdefg123abc-smith-a12b34c--mymagento@ssh.us-2.magento.cloud

### Git SSH commands for Pro Staging and Production {#pro}
You can't use the Magento Cloud CLI to SSH into Pro plan Staging and Production systems. You can SSH into those environments and use Git CLI commands for managing your branches and Linux/Unix commands for managing the system.

With your SSH keys added to those servers, you can use a terminal application, the SSH command, and the URL to access the server.

For the URLs, see the following:

*	Staging: `http[s]://staging.<your domain>.c.<project ID>.ent.magento.cloud`
*	Production:

	*	Load balancer URL: `http[s]://<your domain>.c.<project ID>.ent.magento.cloud`
	*	Direct access to one of the three redundant servers: `http[s]://<your domain>.{1|2|3}.<project ID>.ent.magento.cloud`

## sFTP to environments {#sftp}
Typically, you want to use SSH for secure access to your environments. We also support accessing your environments using sFTP (secure FTP). You will use your SSH public key to access via sFTP.

When configuring sFTP with the command line or application of your choice, use your SSH public key and the following information for access:

* Username: All content before the `@` in your public SSH key.
* Password: You do not need a password for sFTP. sFTP access uses the SSH key based authentication.
, so you would need to use the same ssh key for sFTP that you use to connect via SSH to an environment.
* Host: All content after the `@` in your public SSH key.
* Port: 22, which is the default SSH port.

#### Related topics
*	[Project structure]({{page.baseurl}}cloud/project/project-start.html)
