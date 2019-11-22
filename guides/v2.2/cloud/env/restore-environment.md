---
title: Restore an environment
group: cloud-guide
---

This article shows different scenarios of rolling back an environment on Magento Commerce Cloud.

Choose the most appropriate for your case:

-  If you have a valid snapshot - [Scenario 1: Restore a snapshot (easiest and recommended)](#scen1){: target="_self"}.
-  If you have a stable build, but no valid snapshot - [Scenario 2: No snapshot, build stable (SSH connection available)](scen2){: target="_self"}.
-  If the build is broken and you have no valid snapshot - [Scenario 3: No snapshot; build broken (no SSH connection)](scen3){: target="_self"}.

## Scenario 1: Restore a snapshot (easiest and recommended) {#scen1}

Read the DevDocs article: [Restore a snapshot on Cloud][1].

Creating a snapshot must be our very first step after accessing the Magento Commerce (Cloud) account and before applying major changes. It is a best practice and highly recommended.

Read the DevDocs article: [Create a snapshot][2].

## Scenario 2: No snapshot, build stable (SSH connection available) {#scen2}

This section shows how to reset an environment when you have not created a snapshot but can access the environment via SSH.

The steps are:

-  Disable Configuration Management.  
-  Uninstall the Magento software.  
-  Reset the git branch.

After performing these steps:

-  Your Magento installation returns to its Vanilla state (database restored; deployment configuration removed; directories under \`var\` cleared)
-  Your git branch is reset to the desired state in the past

Read the detailed steps below.

### (Prerequisite) Remove config.php to disable Configuration Management {#disable_config_management}

We need to disable Configuration Management so that it does not automatically apply the previous configuration settings during deployment.

To disable Configuration Management, make sure that your `/app/etc/` directory does not contain the `config.php` (for Magento 2.2.x) or `config.local.php` (for Magento 2.1.x) files.

To remove the configuration file, follow these steps:

1. [SSH to your environment][3].
1. Remove the configuration file:
   -  For Magento 2.2:

      ```bash
      rm app/etc/config.php
      ```

   -  For Magento 2.1:

      ```bash
      rm app/etc/config.local.php
      ```

Read more about Configuration Management:

-  [Knowledge Base][4]
-  [DevDocs][5]

### Uninstall the Magento software with setup:uninstall command {#setup-uninstall}

{:.bs-callout-info}
Uninstalling the Magento software drops and restores the database, removes the deployment configuration, and clears directories under `var/`.

See [Uninstall the Magento software][6].

To uninstall the Magento software, follow these steps:

1. [SSH to your environment][3].
1. Execute `setup:uninstall`\:

   ```bash
   php bin/magento setup:uninstall
   ```

1. Confirm uninstall.

   The following message displays to confirm a successful uninstallation:

   ```terminal
   [SUCCESS]: Magento uninstallation complete.
   ```

   This means we have reverted our Magento installation (including DB) to its authentic (Vanilla) state.

### Reset the git branch {#reset-git-branch}

With git reset, we revert the code to the desired state in the past.

1. Clone the environment to your local development environment. You may copy the command in your Project Web Interface:  

   ![Click to copy the git clone command]({{ site.baseurl }}/common/images/copy-git-clone.png)

1. Access the commits history. Use `--reverse` to display history in reverse order for more convenience:

   ```bash
   git log --reverse
   ```

1. Select the commit hash on which you\'ve been good. To reset code to its authentic state (Vanilla), find the very first commit that created your branch (environment).  

   ![Select a commit hash in the git console]({{ site.baseurl }}/common/images/select-commit-hash.png)

1. Apply hard git reset:

   ```bash
   git reset --h <commit_hash>
   ```

1. Push changes to server:

   ```bash
   git push --force <origin> <branch>
   ```

After performing these steps, our git branch gets reset and the entire git changelog is clear. The last git push triggers the redeploy to apply all changes and re-install Magento.

## Scenario 3: No snapshot; build broken (no SSH connection) {#scen3}

This section shows how to reset an environment when it is in a critical state: the deployment procedure cannot succeed in building a working application, thus making the SSH connection unavailable.

In this scenario, you must first restore the working state of your Magento application using git reset, then uninstall the Magento software (to drop and restore the database, remove the deployment configuration, etc.). The scenario involves the same steps as in Scenario 2, but the order of steps is different and there is an additional step — force redeploy. The steps are:

[1. Reset the git branch.][7]  
[2. Disable Configuration Management.][8]  
[3. Uninstall the Magento software.][9]  
4. Force redeploy.

After performing these steps, you will have the same results as in Scenario 2.

### Step 4: Force redeploy

Make a commit (this might be an empty commit, although we do not recommend it) and push it to the server to trigger redeploy:

```bash
git commit --allow-empty -m "<message>" && git push <origin> <branch>
```

## If setup:uninstall fails, reset database manually

If executing the `setup:uninstall` command fails with an error and cannot be completed, we may clear the DB manually with these steps:

1. [SSH to your environment][3].
1. Connect to the MySQL DB:

   ```bash
   mysql -h database.internal
   ```

1. Drop the \`main\` DB :

   ```shell
   drop database main;
   ```

1. Create an empty \`main\` DB:

   ```shell
   create database main;
   ```

1. Delete the following configuration files: `config.php`, `config.php`.bak, `env.php`, `env.php.bak`.

After resetting the DB, [make a git push to the environment to trigger redeploy][10]{: target="_self"} and install Magento to a newly created DB. Or [run the redeploy command][11]{: target="_self"}.

<!-- Link definitions -->

[1]: http://devdocs.magento.com/guides/v2.2/cloud/project/project-webint-snap.html#restore-snapshot
[2]: http://devdocs.magento.com/guides/v2.2/cloud/project/project-webint-snap.html#create-snapshot
[3]: http://devdocs.magento.com/guides/v2.2/cloud/env/environments-ssh.html#ssh
[4]: reduce-deployment-downtime-on-magento-cloud-with-configuration-management.md
[5]: http://devdocs.magento.com/guides/v2.2/cloud/live/sens-data-over.html
[6]: http://devdocs.magento.com/guides/v2.2/install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall
[7]: reduce-deployment-downtime-on-magento-cloud-with-configuration-management.md#reset-git-branch
[8]: reduce-deployment-downtime-on-magento-cloud-with-configuration-management.md#disable_config_management
[9]: reduce-deployment-downtime-on-magento-cloud-with-configuration-management.md#setup-uninstall
[10]: https://devdocs.magento.com/guides/v2.3/cloud/reference/cli-ref-topic.html#git-commands
[11]: https://devdocs.magento.com/guides/v2.3/cloud/reference/cli-ref-topic.html#environment-commands