---
title: Restore an environment
group: cloud-guide
---

If you encounter issues in your environment and do not have a [valid snapshot]({{ site.baseurl }}/cloud/project/project-webint-snap.html), you can try restoring your environment in one of the following ways:

-  SSH
-  Git

## SSH

If you have not created a snapshot, but you can access the environment using SSH, follow these steps to restore your environment:

1. Disable configuration management
1. Uninstall Magento
1. Reset the git branch

Performing these steps:

-  Returns your Magento installation to its original state by restoring the database, removing the deployment configuration, and clearing `var/` subdirectories.
-  Resets your git branch to a stable state in the past.

### Disable configuration management

You must disable [configuration management]({{ site.baseurl }}/cloud/live/sens-data-over.html) so that it does not automatically apply the previous configuration settings during deployment.

To disable configuration management, make sure that your `app/etc/` directory does not contain the `config.php` file.

{:.procedure}
To remove the configuration file:

1. [SSH to your environment]({{ site.baseurl }}/cloud/env/environments-ssh.html#ssh).
1. Remove the configuration file:
   -  For Magento 2.2:

      ```bash
      rm app/etc/config.php
      ```

   -  For Magento 2.1:

      ```bash
      rm app/etc/config.local.php
      ```

### Uninstall Magento

Uninstalling the Magento software drops and restores the database, removes the deployment configuration, and clears `var/` subdirectories.

{:.procedure}
To uninstall the Magento software:

1. [SSH to your environment]({{ site.baseurl }}/cloud/env/environments-ssh.html#ssh).
1. Uninstall the Magento application.

   ```bash
   php bin/magento setup:uninstall
   ```

1. Confirm that Magento was successfully uninstalled.

   The following message displays to confirm a successful uninstallation:

   ```terminal
   [SUCCESS]: Magento uninstallation complete.
   ```

### Reset the git branch

Resetting your branch reverts the code to a stable state in the past.

{:.procedure}
To reset your branch:

1. Clone the project to your local development environment. You can find the command in your Project Web Interface:

   ![Click to copy the git clone command]({{ site.baseurl }}/common/images/cloud/cloud-copy-git-clone.png)

1. Review the git history. Use `--reverse` to display history in reverse chronological order:

   ```bash
   git log --reverse
   ```

1. Choose a commit hash that represents the last known stable state of your code.

   To reset your branch to its original initialized state, find the very first commit that created your branch.

   ![Select a commit hash in the git console]({{ site.baseurl }}/common/images/select-commit-hash.png)

1. Use the hard reset option to reset your branch.

   ```bash
   git reset --h <commit_hash>
   ```

1. Push your changes to trigger a redeploy, which reinstalls Magento.

   ```bash
   git push --force <origin> <branch>
   ```

## Git

If you have not created a snapshot, cannot access your environment using SSH, and your deployment keeps failing, you must complete the steps in the [previous section](#ssh), and then force a redeployment.

### Force a redeployment

Make a commit (this might be an empty commit, although we do not recommend it) and push it to the server to trigger redeploy:

```bash
git commit --allow-empty -m "<message>" && git push <origin> <branch>
```

## Uninstall failed

If executing the `setup:uninstall` command fails and cannot be completed, you might need to manually reset the database:

1. [SSH to your environment]({{ site.baseurl }}/cloud/env/environments-ssh.html#ssh).
1. Connect to the database.

   ```bash
   mysql -h database.internal
   ```

1. Drop the `main` database.

   ```shell
   drop database main;
   ```

1. Create an empty `main` database.

   ```shell
   create database main;
   ```

1. Delete the following configuration files.

   -  `config.php`
   -  `config.php.bak`
   -  `env.php`
   -  `env.php.bak`

After resetting the database, [push your changes to trigger a redeploy]({{ site.baseurl }}/cloud/reference/cli-ref-topic.html#git-commands) and install Magento using the new database. Or [run the redeploy command]({{ site.baseurl }}/cloud/reference/cli-ref-topic.html#environment-commands).
