---
layout: default
group: cloud
subgroup: 120_env
title: SSH into your environment
menu_title: SSH into your environment
menu_order: 4
menu_node:
version: 2.0
github_link: cloud/env/environments-ssh.md
---

Before you can use SSH to connect to an [integration]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-int) environment, you must add your [SSH public key]({{page.baseurl}}cloud/before/before-workspace-ssh.html) to your account.

For security reasons, to add your public key to a [production]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-prod) or [staging]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-stage) system, you must create a [support ticket]({{ page.baseurl }}cloud/bk-cloud.html#gethelp).

You can then connect using SSH in any of the following ways:

## Integration systems {#cloud-ssh-int}

Following are methods to SSH into your integration system.

To SSH to an environment using the `magento-cloud` command line:

1.	Log in to the project:

		magento-cloud login
2.	List the project IDs:

		magento-cloud project:list
3.	List the environments in that project:

		magento-cloud environment:list -p <project ID>
3.	SSH to the environment:

		magento-cloud ssh -p <project ID> -e <environment ID>

To SSH to an environment using the Web Interface:

1.	Log in to the Web Interface.
2.	Hover the mouse pointer over **Access Site** in the desired environment as the following figure shows.

	![Find the SSH URL using the Web Interface]({{ site.baseurl }}common/images/cloud_ssh-access.png){:width="400px"}

3.	Click the clipboard button to copy the full SSH command to the clipboard. Enter the command in a terminal window.


## Staging and production systems {#cloud-ssh-stage}
You can't use the `magento-cloud` command line to SSH into staging and production systems. To SSH into staging and production systems, first create a [support ticket]({{ page.baseurl }}cloud/bk-cloud.html#gethelp) requesting for your public key to be added to the system. The user and  {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} will have been supplied when the system was provisioned.

With your SSH keys added to those servers, you can use a terminal application, the SSH command, and the URL to access the server.

The URL format follows:

*	Staging: `http[s]://staging.<your domain>.c.<project ID>.ent.magento.cloud`
*	Production:

	*	Load balancer URL: `http[s]://<your domain>.c.<project ID>.ent.magento.cloud`
	*	Direct access to one of the three redundant servers: `http[s]://<your domain>.{1|2|3}.<project ID>.ent.magento.cloud`

If you don't know your staging or production URLs, locate the Onboarding Spreadsheet in your Magento Enterprise Cloud Edition OneDrive account. Tab 3 (DNSSSLCDN) has access information for your staging and production systems. Use the values in the CNAME/Alias (No CDN) cell.

#### Related topics
*	[Manage your environments]({{page.baseurl}}cloud/env/environments.html)
* [Adding keys to your environment]({{page.baseurl}}cloud/before/before-workspace-ssh.html)
