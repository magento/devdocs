---
group: cloud-guide
title: Manage branches with the CLI
redirect_from:
  - /cloud/before/integration-ip-addr.html
  - /cloud/howtos/environment-tutorial-env-merge.html
  - /cloud/howtos/how-to.html
functional_areas:
  - Cloud
redirect_to: https://experienceleague.adobe.com/docs/commerce-cloud-service/user-guide/develop/cli-branches.html
layout: migrated
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

## Regional IP addresses

The following tables list the incoming and outgoing IP addresses used by {{site.data.var.ece}} [Integration environments]({{ site.baseurl }}/cloud/architecture/pro-architecture.html#cloud-arch-int). These IP addresses are stable, but might change. We always notify customers before making any IP address changes.

You can use the `ping` command to retrieve the incoming IP address:

```bash
ping integration-abcd123-abcd78910.us-3.magentosite.cloud
```

Sample response:

```console
PING integration-abcd123-abcd78910.us-3.magentosite.cloud (34.210.133.187): 56 data bytes
Request timeout for icmp_seq 0
Request timeout for icmp_seq 1
Request timeout for icmp_seq 2
```

If you have a corporate firewall that blocks outgoing SSH connections, you can add the inbound IP addresses to your allowlist.

### AWS regions

|     |  United States  |     |     | Europe |     |     |     | Asia-Pacific |
| --- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :---|
|     | US   | US-3  | US-5  | EU   | EU-3  | EU-5  | EU-6  | AP-3  |
| Incoming | <!--US-->52.200.159.23<br><br>52.200.159.125<br><br>52.200.160.5 | <!--US-3-->34.210.133.187<br><br>34.214.72.239<br><br>34.215.10.85 | <!--US-5-->50.112.160.58<br><br>54.213.195.223<br><br>35.163.170.185 | <!--EU-->52.209.44.44<br><br>52.209.23.96<br><br>52.51.117.101 | <!--EU-3-->34.240.75.192<br><br>34.251.110.37<br><br>52.19.113.35 | <!--EU-5-->35.157.81.88<br><br>3.122.198.131<br><br>52.28.102.195 | <!--EU-6-->35.181.23.47<br><br>35.181.24.165<br><br>35.180.237.48 | <!--AP-3-->52.65.39.201<br><br>52.65.10.202<br><br>52.65.30.37 |
| Outgoing | <!--US-->52.200.155.111<br><br>52.200.149.44<br><br>50.17.163.75 | <!--US-3-->34.210.166.180<br><br>34.215.83.92<br><br>34.213.20.158 | <!--US-5-->54.70.238.217<br><br>52.88.113.98<br><br>52.36.188.230 | <!--EU-->52.51.163.159<br><br>52.209.44.60<br><br>52.208.156.247 | <!--EU-3-->34.240.57.142<br><br>52.16.140.48<br><br>52.209.134.55 | <!--EU-5-->3.121.163.221<br><br>3.121.79.229<br><br>18.197.3.230 | <!--EU-6-->52.47.155.26<br><br>35.181.0.157<br><br>35.181.12.15 | <!--AP-3-->52.65.143.178<br><br>13.54.80.197<br><br>52.62.224.4 |

### Azure regions

|          |  United States  | Europe          |
| -------- | :-------------- | :-------------- |
|          | US-A1           | AZ-WESTEUROPE-1 |
| Incoming | <!--US-A1--> 20.186.27.68<br><br>20.186.58.163<br><br>20.186.113.8 | <!--AZ-W-1-->50.112.160.58<br><br>54.213.195.223<br><br>35.163.170.185 |
| Outgoing | <!--US-A1-->20.186.58.163<br><br>20.186.27.68<br><br>20.186.113.8 | <!--AZ-W-1-->104.45.78.98<br><br>51.105.168.218<br><br>51.105.163.143 |
