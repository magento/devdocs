---
group: cloud
subgroup: 120_env
title: Manage branches with the CLI
menu_title: Manage branches with the CLI
menu_order: 2
menu_node:
version: 2.1
github_link: cloud/env/environments-start.md
redirect_from:
  - /guides/v2.0/cloud/before/integration-ip-addr.html
  - /guides/v2.1/cloud/before/integration-ip-addr.html
  - /guides/v2.2/cloud/before/integration-ip-addr.html
  - /guides/v2.0/cloud/env/environment-tutorial-env-merge.html
  - /guides/v2.1/cloud/env/environment-tutorial-env-merge.html
  - /guides/v2.2/cloud/env/environment-tutorial-env-merge.html
functional_areas:
  - Cloud
---

When managing with your environment, you will tend to use the Magento CLI and SSH into the system. You should have the Magento CLI installed and SSH keys set up. For detailed information on the environment architecture, see [Starter]({{ page.baseurl }}/cloud/basic-information/starter-architecture.html) or [Pro]({{ page.baseurl }}/cloud/architecture/pro-architecture.html) architecture information.

To manage the branches and environments with the Project Web Interface, see [Manage branches with the Project Web Interface]({{ page.baseurl }}/cloud/project/project-webint-branch.html).

## Common Magento CLI commands {#env-start-comm}
The following Magento CLI commands can be run from any directory and run best from a project directory. When run from a project directory, you can omit the `-p <project ID>` parameter. These commands are meant to be used to manage integration environments. You may notice these commands are similar to Git commands. The `magento-cloud` versions directly connect with Magento Git, the Magento ECE project, and provide Git features.

All commands are shown with required options only. Get help for any `magento-cloud` command by appending `--help`.

`git commit --allow-empty -m "redeploy" && git push <branch name>`
:  Push an empty commit to force a redeployment. Some actions, like adding a user for example, don't result in deployment.

`magento-cloud login`
:	Log in to the project.

`magento-cloud project:get <project ID> <directory> -e <environment ID>`
:	Clone a project to a directory. To clone the `master` environment, omit `-e <environment ID>`.

`magento-cloud environment:list -p <project ID>`
:	List the environments in the current project (that is, the project that corresponds to the directory in which you run the command).

`magento-cloud environment:branch <name> <parent branch>`
:	Create a new branch with a name and an ID. This information corresponds to the environment.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The environment _name_ is different from the environment _ID_ only if you use spaces or capital letters in the environment name. An environment ID consists of all lowercase letters, numbers, and allowed symbols. Capital letters in an environment name are converted to lowercase in the ID; spaces in an environment name are converted to dashes.

An environment name _cannot_ include characters reserved for your Linux shell or for regular expressions. Forbidden characters include curly braces (`{ }`), parentheses, asterisk (`*`), angle brackets (`< >`), ampersand (`&`), percent (`%`), and other characters.
</div>

`magento-cloud environment:checkout <environment ID>`
:	Check out an existing environment.

`magento-cloud environment:merge -p <project ID> -e <environment ID>`
:	Merge changes in this environment with its parent.

`magento-cloud environment:synchronize -p <project ID> -e <environment ID> {code|data}`
:	Synchronize (that is, `git pull`) code and/or data from the parent to this environment.

`magento-cloud variable:list`
:	List variables in this environment.

`magento-cloud variable:set <name> <value>`
:	Set a value for an environment variable in this environment.

For a full list of Magento cloud CLI commands, see the Magento cloud [Magento Cloud CLI reference]({{ page.baseurl }}/cloud/reference/cli-ref-topic.html)

## Get started creating branches {#getstarted}
To begin, you'll need a branch to work in.

{% include cloud/cli-get-started.md %}

## Merge a branch {#merge}
After completing development, you can merge this branch to the parent. The following instructions provide an example.

1.	Complete code in your local branch.
2.	Add, commit, and push your change to the environment:

		git add -A
		git commit -m "<commit message>"
		git push origin <branch name>

	Where `<branch name>` is the Git name of the environment (that is, the environment ID).

3.	Merge with the parent environment:

		magento-cloud environment:merge <environment ID>

	For example,

		magento-cloud environment:merge master

## Optionally delete the environment {#env-delete}
Before you delete an environment, make sure you don't need it anymore. You cannot recover a deleted environment later.

<div class="bs-callout bs-callout-info" id="info">
  <p>You cannot delete the <code>master</code> environment of any project.</p>
</div>

You must be a [project administrator]({{ page.baseurl }}/cloud/project/user-admin.html#cloud-role-project), [environment administrator]({{ page.baseurl }}/cloud/project/user-admin.html#cloud-role-env), or [Project Owner]({{ page.baseurl }}/cloud/project/user-admin.html#cloud-role-acct-owner) to perform this task.

This section discusses how to optionally delete an environment in the following ways:

*	Make the environment *inactive* but let it remain in the project
*	Delete the environment entirely and remove it from the project

To delete a environment:

1.	Log in to your project if you haven't already done so.
2.	Fetch branches from the origin server.

		git fetch origin
3.	To delete the branch entirely (removing it from the project), check out the branch.

		magento-cloud environment:checkout <environment ID>
4.	Delete the environment:

		magento-cloud environment:delete <environment ID>

	For example, to delete the `deleteme` environment:

		magento-cloud environment:delete deleteme

	To delete more than one environment:

		magento-cloud environment:delete <environment ID> <environmentID>

	For additional options, see the command-line help:

		magento-cloud environment:delete --help

5. Answer the prompt:

		Are you sure you want to delete the remote Git branch deleteme? [Y/n]

	A `Y` answer makes the branch inactive but leaves it in the project.
6.	Answer the prompt:

		Delete the remote Git branch too? [Y/n]

	A `Y` answer completely removes the branch from the project.

Wait for the environment to delete.

<div class="bs-callout bs-callout-info" id="info">
  <p>To activate the environment later, use the <code>magento-cloud environment:activate</code> command.</p>
</div>

## Integration environment IP addresses {#ipaddress}
The following table lists incoming and outgoing IP addresses used by {{site.data.var.ece}} [Integration environments]({{ page.baseurl }}/cloud/architecture/pro-architecture.html#cloud-arch-int).These IP addresses are stable, but might change in the future. Prior to any future change, all affected customers will receive ample warning.

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

## Interact with environments via CLI {#commands}
After setting up your [set up SSH]({{ page.baseurl }}/cloud/env/environments-ssh.html), you can interact with services and modify settings through your local to a remote environment.

The following steps provide an example of accessing a database:

{% include cloud/log-in-db.md %}

## SSH tunneling {#env-start-tunn}

{% include cloud/ssh-tunnel.md %}
