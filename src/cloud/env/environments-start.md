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

After you install the Magento Cloud CLI and set up SSH keys for remote access to your Cloud infrastructure, you can use Magento Cloud CLI commands to manage the environments for your {{site.data.var.ece}} projects. For information about the environment architecture, see [Starter architecture]({{ site.baseurl }}/cloud/architecture/starter-architecture.html) or [Pro architecture]({{ site.baseurl }}/cloud/architecture/pro-architecture.html).

To manage the branches and environments with the Project Web Interface, see [Manage branches with the Project Web Interface]({{ site.baseurl }}/cloud/project/project-webint-branch.html).

## Use Magento Cloud CLI commands {#env-start-comm}

Magento Cloud CLI commands are very similar to Git commands. You can use them to connect to your {{site.data.var.ece}} project and manage your {{site.data.var.ece}} environments. Although you can run the commands from any directory, we recommend that you run them from a project directory. When run from a project directory, you can omit the `-p <project-ID>` parameter. See the [Magento Cloud CLI reference]({{ site.baseurl }}/cloud/reference/cli-ref-topic.html).

## Get started creating branches {#getstarted}

To begin, create a new branch.

{% include cloud/cli-get-started.md %}

## Merge a branch {#merge}

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

## Delete an environment {#env-delete}

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

## Integration environment IP addresses {#ipaddress}

The following table lists incoming and outgoing IP addresses used by {{site.data.var.ece}} [Integration environments]({{ site.baseurl }}/cloud/architecture/pro-architecture.html#cloud-arch-int). These IP addresses are stable, but might change. We always notify customers before making any IP address changes.

If you have a corporate firewall that blocks outgoing SSH connections, you can add the inbound IP addresses to your allowlist.

### AWS regions

<table>
<tr>
<th align="left" colspan="7"><b>Incoming IP addresses</b></th>
</tr>
<tr>
<td align="right">US Region</td>
<td align="right">US-2 Region</td>
<td align="right">US-3 Region</td>
<td align="right">US-5 Region</td>
<td align="right">EU Region</td>
<td align="right">EU-3 Region</td>
<td align="right">AP-3 Region</td>
</tr>
<tr>
<td align="right">
<p>52.200.159.23</p>
<p>52.200.159.125</p>
<p>52.200.160.5</p>
</td>
<td align="right">
<p>34.197.214.148</p>
<p>34.197.144.144</p>
<p>34.196.44.47</p>
</td>
<td align="right">
<p>34.210.133.187</p>
<p>34.214.72.239</p>
<p>34.215.10.85</p>
</td>
<td align="right">
<p>50.112.160.58</p>
<p>`54.213.195.223`</p>
<p>`35.163.170.185`</p>
</td>
<td align="right">
<p>52.209.44.44</p>
<p>52.209.23.96</p>
<p>52.51.117.101</p>
</td>
<td align="right">
<p>34.240.75.192</p>
<p>34.251.110.37</p>
<p>52.19.113.35</p>
</td>
<td align="right">
<p>52.65.39.201</p>
<p>52.65.10.202</p>
<p>52.65.30.37</p>
</td>
</tr>
</table>

<table >
<tr>
<th align="left" colspan="7"><b>Outgoing IP addresses</b></th>
</tr>
<tr>
<td align="right">US Region</td>
<td align="right">US-2 Region</td>
<td align="right">US-3 Region</td>
<td align="right">US-5 Region</td>
<td align="right">EU Region</td>
<td align="right">EU-3 Region</td>
<td align="right">AP-3 Region</td>
</tr>
<tr>
<td align="right">
<p>52.200.155.111</p>
<p>52.200.149.44</p>
<p>50.17.163.75</p>
</td>
<td align="right">
<p>34.197.219.58</p>
<p>34.197.201.45</p>
<p>34.197.217.71</p>
</td>
<td align="right">
<p>34.210.166.180</p>
<p>34.215.83.92</p>
<p>34.213.20.158</p>
</td>
<td align="right">
<p>54.70.238.217</p>
<p>52.88.113.98</p>
<p>52.36.188.230</p>
</td>
<td align="right">
<p>52.51.163.159</p>
<p>52.209.44.60</p>
<p>52.208.156.247</p>
</td>
<td align="right">
<p>34.240.57.142</p>
<p>52.16.140.48</p>
<p>52.209.134.55</p>
</td>
<td align="right">
<p>52.65.143.178</p>
<p>13.54.80.197</p>
<p>52.62.224.4</p>
</td>
</tr>
</table>

### Azure region

<table>
<tr>
<th align="left"><b>Incoming IP addresses</b></th>
</tr>
<tr>
<td align="left">US-A1 Region</td>
</tr>
<tr>
<td>
<p>&nbsp;&nbsp;40.79.241.76</p>
<p>52.147.176.136</p>
<p>&nbsp;&nbsp;&nbsp;20.49.0.170</p>
</td>
</tr>
</table>

<table>
<tr>
<th align= "left"><b>Outgoing IP addresses</b></th>
</tr>
<tr>
<td align="left">US-A1 Region</td>
</tr>
<tr>
<td>
<p>&nbsp;&nbsp;40.79.241.76</p>
<p>52.147.176.136</p>
<p>&nbsp;&nbsp;&nbsp;20.49.0.170</p>
</td>
</tr>
</table>

### Get IP address of Cloud instance

Use `ping` command for retrieving IP address for particular Cloud instance.

Example of usage:

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

## Interact with environments via the Magento Cloud CLI {#commands}

After you [setup SSH keys]({{ site.baseurl }}/cloud/env/environments-ssh.html), you can connect from your local workspace to a remote environment and use Magento Cloud CLI commands to interact with your {{site.data.var.ece}} project services and modify settings.

{% include cloud/log-in-db.md %}

## SSH tunneling {#env-start-tunn}

{% include cloud/ssh-tunnel.md %}
