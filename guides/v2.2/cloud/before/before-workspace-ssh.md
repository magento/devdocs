---
group: cloud-guide
title: Enable SSH keys
redirect_from:
  - /guides/v2.2/cloud/before/before-setup-env-1_get-start.html
functional_areas:
  - Cloud
  - Setup
---

**Previous step:**
[Install Magento prerequisites]({{ page.baseurl }}/cloud/before/before-workspace-magento-prereqs.html)

The [SSH protocol](https://en.wikipedia.org/wiki/Secure_Shell) is designed to maintain a secure connection between two systems&mdash;in this case, your local working environment and your {{site.data.var.ece}} Git project.

When initially setting up your local environment, you need to add the SSH keys to the following specific environments:

* Starter: Add to Master (Production) and any environments you create by branching from Master
* Pro: Add to Master Integration environment. After your Staging and Production environments are provisioned, you can add the SSH keys to those environments through the Project Web Interface or via SSH and CLI commands.

{% include cloud/enable-ssh.md %}

**Next step:**
[Set up the Magento file system owner]({{ page.baseurl }}/cloud/before/before-workspace-file-sys-owner.html)
