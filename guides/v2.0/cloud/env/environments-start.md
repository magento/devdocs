---
layout: default
group: cloud
subgroup: 120_env
title: Get started with an environment
menu_title: Get started with an environment
menu_order: 2
menu_node:
version: 2.0
github_link: cloud/env/environments-start.md
redirect from:
  -  /guides/v2.0/cloud/before/integration-ip-addr.html
  -  /guides/v2.1/cloud/before/integration-ip-addr.html
  -  /guides/v2.1/cloud/before/integration-ip-addr.html
---

When managing with your environment, you will tend to use the Magento CLI and SSH into the system. You should have the Magento CLI installed and SSH keys set up. For detailed information on the environment architecture, see [Cloud Architecture]

## Common Magento CLI commands {#env-start-comm}
The following Magento CLI commands can be run from any directory and run best from a project directory. When run from a project directory, you can omit the `-p <project ID>` parameter. These commands are meant to be used to manage integration environments. You may notice these commands are similar to Git commands. The `magento-cloud` versions directly connect with Magento Git, the Magento ECE project, and provide Git features.

All commands are shown with required options only. Get help for any `magento-cloud` command by appending `--help`.

`git commit --allow-empty -m "redeploy" && git push <branch name>`
:  Push an empty commit to force a redeployment. Some actions, like adding a user for example, don't result in deployment.

`magento-cloud login`
:	Log in to the project

`magento-cloud project:get <project ID> <directory> -e <environment ID>`
:	Clone a project to a directory. To clone the `master` environment, omit `-e <environment ID>`.

`magento-cloud environment:list -p <project ID>`
:	List the environments in the current project (that is, the project that corresponds to the directory in which you run the command).

`magento-cloud environment:branch <name> <parent branch>`
:	Create a new branch (that is, environment); the environment has both a name and an ID

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The environment _name_ is different from the environment _ID_ only if you use spaces or capital letters in the environment name. An environment ID consists of all lowercase letters, numbers, and allowed symbols. Capital letters in an environment name are converted to lowercase in the ID; spaces in an environment name are converted to dashes.

An environment name _cannot_ include characters reserved for your Linux shell or for regular expressions. Forbidden characters include curly braces (`{ }`), parentheses, asterisk (`*`), angle brackets (`< >`), ampersand (`&`), percent (`%`), and other characters.
</div>

`magento-cloud environment:checkout <environment ID>`
:	Check out an existing environment

`magento-cloud environment:merge -p <project ID> -e <environment ID>`
:	Merge changes in this environment with its parent.

`magento-cloud environment:synchronize -p <project ID> -e <environment ID> {code|data}`
:	Synchronize (that is, `git pull`) code and/or data from the parent to this environment

`magento-cloud variable:list`
:	List variables in this environment

`magento-cloud variable:set <name> <value>`
:	Set a value for an environment variable in this environment

For a full list of Magento cloud CLI commands, see the Magento cloud [Magento Cloud CLI reference]({{page.baseurl}}cloud/reference/cli-ref-topic.html)

## SSH to an environment and run commands {#env-start-ssh}
This section discusses how to SSH to an environment so you can run commands as if you were logged in to the environment itself.

### Step 1: Get started

{% include cloud/cli-get-started.md %}

### Step 2: SSH to the environment
To SSH to the environment, see [SSH into your environment]({{ page.baseurl }}cloud/env/environments-ssh.html).

### Step 3: Enter commands
Now you can connect to services as if they were running locally.

{% include cloud/log-in-db.md %}

## Integration environment IP addresses
The following table lists incoming and outgoing IP addresses used by Magento Enterprise Cloud Edition [Integration environments]({{page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-int).These IP addresses are stable, but might change in the future. Prior to any future change, all affected customers will receive ample warning.

If you have a corporate firewall that blocks outgoing SSH connections, you can add the inbound IP addresses to your whitelist.

<table>
<tr>
<th colspan="2"><b>Outbound IP addresses</b></th>
<th colspan="2"><b>Inbound IP addresses</b></th>
</tr>
<tr>
<td>US Region</td>
<td>EU Region</td>
<td>US Region</td>
<td>EU Region</td>
</tr>
<tr>
<td>
<p>52.200.155.111</p>
<p>52.200.149.44</p>
<p>50.17.163.75</p>
</td>
<td>
<p>52.51.163.159</p>
<p>52.209.44.60</p>
<p>52.208.156.247</p>
</td>
<td>
<p>52.200.159.23</p>
<p>52.200.159.125</p>
<p>52.200.160.5</p>
</td>
<td>
<p>52.209.44.44</p>
<p>52.209.23.96</p>
<p>52.51.117.101</p>
</td>
</tr>
</table>



#### Related topics
*	[Manage your environments]({{page.baseurl}}cloud/env/environments.html)
*	[CLI reference]({{page.baseurl}}cloud/reference/cli-ref-topic.html)
*	[Overview of environment variables]({{page.baseurl}}cloud/env/environment-vars_over.html)
*	[Set Magento environment variables]({{page.baseurl}}cloud/howtos/environment-tutorial-set-mage-vars.html)
