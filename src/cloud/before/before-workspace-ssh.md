---
group: cloud-guide
title: Enable SSH keys
redirect_from:
  - /cloud/before/before-setup-env-1_get-start.html
functional_areas:
  - Cloud
  - Setup
  - Security
  - Config
---

{:.ref-header}
Previous step

[Install Magento prerequisites]({{ site.baseurl }}/cloud/before/before-workspace-magento-prereqs.html)

The [SSH protocol](https://en.wikipedia.org/wiki/Secure_Shell) is designed to maintain a secure connection between two systems---in this case, your local working environment and your {{site.data.var.ece}} Git project.

When initially setting up your local environment, you need to add the SSH keys to the following specific environments:

*  Starter: Add to Master (Production) and any environments you create by branching from Master
*  Pro: Add to Master Integration environment. After your Staging and Production environments are provisioned, you can add the SSH keys to those environments through the Project Web Interface or via SSH and CLI commands.

{% include cloud/enable-ssh.md %}

### Unable to access projects without MFA

If you authenticate to a project with multi-factor authentication (MFA) enabled, you might receive the following error when connecting to other projects that do not require MFA:

   ```bash
   ssh abcdef7uyxabce-master-7rqtabc--mymagento@ssh.us-3.magento.cloud
   abcdef7uyxabce-master-7rqtabc--mymagento@ssh.us-3.magento.cloud: Permission denied (publickey).
   ```

During the SSH certificate generation, the Magento Cloud CLI adds an additional SSH key to your local environment. That key will be used by default if your local SSH configuration does not include the SSH key for project access.

{:.procedure}
To add your SSH key to the local configuration:

1. Create the `config` file if it does not exists.

    ```bash
    touch ~/.ssh/config
    ```

1. Add an `IdentityFile` configuration.

    ```yaml
   Host *
     IdentityFile ~/.ssh/id_rsa
    ```

   {:.bs-callout-info}
   You can specify multiple SSH keys by adding multiple `IdentityFile` entries to your configuration.

1. Reload your SSH configuration to apply the changes.

    ```bash
    source ~/.ssh/config
    ```

{:.ref-header}
Next step

[Set up the Magento file system owner]({{ site.baseurl }}/cloud/before/before-workspace-file-sys-owner.html)
