---
layout: default
group: cloud
subgroup: 120_env
title: SSH into your environment
menu_title: SSH into your environment
menu_order: 3
menu_node: 
version: 2.0
github_link: cloud/env/environments-ssh.md
---

Before you can use SSH to connect to an [integration]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-int) environment, you must add your [SSH public key]({{page.baseurl}}cloud/before/before-workspace-ssh.html) to your account. 

For security reasons, to add your public key to a [production]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-prod) or [staging]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-stage) system, you must create a [support ticket]({{ page.baseurl }}cloud/welcome/get-help.html).

You can then connect using SSH in any of the following ways:

## Integration systems {#cloud-ssh-int}
Following are methods to SSH into your integration system.

{% collapsibleh3 SSH using the command line %}

To SSH to an environment using the `magento-cloud` command line:

1.	Log in to the project:

		magento-cloud login
2.	List the project IDs:

		magento-cloud project:list
3.	List the environments in that project:

		magento-cloud environment:list -p <project ID>
3.	SSH to the environment:

		magento-cloud ssh -p <project ID> -e <environment ID>

{% endcollapsibleh3 %}

{% collapsibleh3 Find SSH connection details using the Web Interface %}

To SSH to an environment using the Web Interface:

1.	Log in to the Web Interface.
2.	Hover the mouse pointer over **Access Site** in the desired environment as the following figure shows.

	![Find the SSH URL using the Web Interface]({{ site.baseurl }}common/images/cloud_ssh-access.png){:width="400px"}

3.	Click the clipboard button to copy the full SSH command to the clipboard. Enter the command in a terminal window.

{% endcollapsibleh3 %}

## Staging and production systems {#cloud-ssh-stage}
You can't use the `magento-cloud` command line to SSH into staging and production systems. To SSH into staging and production systems, first create a [support ticket]({{ page.baseurl }}cloud/welcome/get-help.html) requesting for your public key to be added to the system. The user and  URL will have been supplied when the system was provisioned.

#### Related topics
*	[Manage your environments]({{page.baseurl}}cloud/env/environments.html)
*   [Adding keys to your environment]({{page.baseurl}}cloud/before/before-workspace.html#cloud-ssh-cli-ssh)
