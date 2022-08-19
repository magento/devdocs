---
group: cloud-guide
title: Manage branches with the CLI
redirect_from:
  - /cloud/before/integration-ip-addr.html
  - /cloud/howtos/environment-tutorial-env-merge.html
  - /cloud/howtos/how-to.html
functional_areas:
  - Cloud
---

To install the `magento-cloud` CLI, see the [Magento Cloud CLI reference]({{ site.baseurl }}/cloud/reference/cli-ref-topic.html). After you install the `magento-cloud` CLI and set up SSH keys for remote access to your cloud infrastructure, you can use `magento-cloud` CLI commands to manage the environments for your {{site.data.var.ece}} projects. For information about the environment architecture, see [Starter architecture]({{ site.baseurl }}/cloud/architecture/starter-architecture.html) or [Pro architecture]({{ site.baseurl }}/cloud/architecture/pro-architecture.html).

To manage the branches and environments with the Project Web Interface, see [Manage branches with the Project Web Interface]({{ site.baseurl }}/cloud/project/project-webint-branch.html).

## Use magento-cloud CLI commands

The `magento-cloud` CLI commands are similar to Git commands. You can use them to connect to your {{site.data.var.ece}} project and manage your {{site.data.var.ece}} environments. Although you can run the commands from any directory, we recommend that you run them from a project directory. When run from a project directory, you can omit the `-p <project-ID>` parameter. See the [Magento Cloud CLI reference]({{ site.baseurl }}/cloud/reference/cli-ref-topic.html).

### Get started creating branches

To begin, create a branch.

{% include cloud/cli-get-started.md %}

### Merge a branch

After completing development, you can merge this branch to the parent:

1. Complete code in your local branch.

1. Add, commit, and push changes to the environment.

   ```bash
   git add -A && git commit -m "Commit message" && git push origin <branch-name>
   ```

1. Merge with the parent environment:

   ```bash
   magento-cloud environment:merge <environment-ID>
   ```

### Delete an environment

Only delete an environment if you are certain that you no longer need it. You cannot recover an environment after you delete it.

{:.bs-callout-warning}
You cannot delete the `master` environment of any project.

You must be a project administrator, environment administrator, or Account Owner to perform this task. See [Manage user access to Cloud projects]({{ site.baseurl }}/cloud/project/user-admin.html).

When you delete an environment, the environment is set to _inactive_. The code is still available in the Git branch, but no longer contains the services or the database. To delete the environment completely, you must also delete the corresponding remote Git branch.

{:.procedure}
To delete an environment:

1. Open a terminal and navigate to your project.

1. Fetch updates from the remote server.

   ```bash
   git fetch
   ```

1. Delete the environment branch.

   ```bash
   magento-cloud environment:delete <environment-ID>
   ```

   Optionally, you can delete more than one environment at a time by adding multiple environment IDs to the delete command.

   ```bash
   magento-cloud environment:delete <environment-1-ID> <environment-2-ID>
   ```

1. Respond to the prompts to delete the local environment and the corresponding remote environment.

   ```terminal
   The environment <environment-ID> is currently active: deleting it will delete all associated data.
   Are you sure you want to delete the environment <environment-ID>? [Y/n]
   ```
   {:.no-copy}

   Deleting the environment places it in an _inactive_ state.

   ```terminal
   Delete the remote Git branch too? [Y/n]
   ```

   Deleting the remote Git branch removes the environment from the project.

1. Wait for the environment to delete.

   ```terminal
   Deleting environment <environment-ID>
   Waiting for the activity...
     Deleting environment <project-id>-<environment-ID>-xxxxxx

     [============================]  1 min (complete)
   Activity ID succeeded
   Deleted remote Git branch <environment-ID>
   Run git fetch --prune to remove deleted branches from your local cache.
   ```
   {:.no-copy}

{:.bs-callout-info}
To activate an inactive environment, use the `magento-cloud environment:activate` command.

## Interact with remote environments

After you [set up SSH keys]({{ site.baseurl }}/cloud/env/environments-ssh.html), you can connect from your local workspace to a remote environment and use `magento-cloud` CLI commands to interact with your {{site.data.var.ece}} project services and modify settings.

{% include cloud/log-in-db.md %}

### SSH tunneling

{% include cloud/ssh-tunnel.md %}

{% include cloud/regional-ip.md %}
