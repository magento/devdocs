---
layout: default
group: cloud
subgroup: 120_env
title: Manage your environments
menu_title: Manage your environments
menu_order: 1
menu_node: parent
version: 2.0
github_link: cloud/env/environments.md
---

Environments in {{site.data.var.ece}} include containers with applications, services, a database, and much more to provide a complete system for your Magento application (codebase and files). For Integration, you have a number of active environments for associated active Git branches of code. The number of environments differs between Starter and Pro plans.

## Environments and branches {#env-branches}
Every {{site.data.var.ece}} project starts with a `master` environment that corresponds to the `master` branch in Git. Each environment has an associated active Git branch of code.

* For [Pro]({{page.baseurl}}cloud/welcome/discover-workflow.html), we recommend branching from Integration `master`.
* For [Starter]({{page.baseurl}}cloud/basic-information/starter-develop-deploy-workflow.html), we recommend creating a `staging` branch, then creating additional code branches from `staging`.

We recommend using GitHub for maintaining your code branches.

<div class="bs-callout bs-callout-info" id="info">
  <p>Your project must have a <code>master</code> branch; it won't function properly without one.</p>
</div>

You can create branches using the Project Web Interface or Git CLI commands. For this information, examples use Git or [Magento Cloud CLI]({{page.baseurl}}cloud/reference/cli-ref-topic.html) commands.


## Active and inactive branches {#active-inactive}
You have access to a limited number of _active_ Git branches per plan. When you push this branch, an active environment is provisioned as a container, updating when you push per the configurations of .magento.app.yaml, services.yaml, and routes.yaml.

You begin by creating active branches and pushing code. You can use the following command to create an active branch from a parent branch:

	magento-cloud environment:branch

You have unlimited inactive Git branches. These branches do not receive an environment until it is made active. You can use the following command to activate an inactive branch:

	magento-cloud environment:activate

When you activate an inactive branch, or create a new active branch, the command deploys a new active environment with a web server and services.

## Branch hierarchy {#hierarchy}
For Starter and Pro plans, the `master` environment is ultimately the source or parent for all code in {{site.data.var.ece}}.

* For Starter, `master` is your Production environment and branch. You create branches from `master` as your Integration environment.
* For Pro, you have a `master` branch in Integration for creating your code branches. You deploy this branch to a matching `master` branch in Staging and Production environments.

In your Integration, you have a number of branches and environments available to you per plan. When you branch from `master`, you create a child relationship to this parent. Every branching creates a parent-child relationship. Each child environment can sync code, data, or both from its parent. Syncing data to an environment results in a byte-for-byte copy of all services and media files.

When you merge code from a child branch to its parent, the parent environment is redeployed with the code changes of the child environment. Child environments are typically used for development, staging, and testing.

## Branches and development workflows {#workflow}
{{site.data.var.ece}} imposes no rules on how you use branches and environments. You can use any branching methodology or development workflow you like for Starter and Pro plans. We do recommend specific formats

For **Starter plan**, the following diagram details the branch and environment relationships:

![High-level view of Starter project]({{ site.baseurl }}common/images/cloud_arch-starter.png)

For **Pro plan**, the following diagram details the branch and environment relationships:

![High-level view of Pro architecture flow]({{ site.baseurl }}common/images/cloud_pro-branch-architecture.png)

### Example development process {#example}
For example, your Agile development team creates three branches to work on three stories in a sprint. At the end of the sprint, they merge into a single branch for testing.

1.	To start, a Project Admin helps create the branches or gives priviledges to developers:

	*	Create the Sprint-X environments and grants contributor privileges to developers to create the story environments.
	*	Create all the environments and grants contributor privileges to developers.
2.	When the sprint is finished (or when the story is closed), the Project Admin and developers can review the code and test the work directly in an active environment. When accepted, all branches are merged for testing together.
3.	Complete testing of all features and code merged into a single environment.
4.	Depending on your plan and environment set up, deploy to Staging for pre-production testing.
5.	Deploy to production when complete to go live.

When the code is live, make the branches used to work on the sprint in Integration as inactive. This frees up active environments and branch slots for the next sprint of work.

## Helpful CLI commands {#commands}
The following table lists the commands used in the preceding example. For a full list of all CLI commands, see [Magento Cloud CLI reference]({{page.baseurl}}cloud/reference/cli-ref-topic.html).

<table>
	<tbody>
		<tr>
			<th>Task</th>
			<th>Command</th>
		</tr>
	<tr>
		<td>Create environment</td>
		<td><code>magento-cloud environment:branch Sprint-X</code></td>
	</tr>
	<tr>
		<td>Grant the contributor role to an environment</td>
		<td><code>magento-cloud user:role &lt;user e-mail> --level environment --environment test --role contributor</code></td>
	</tr>
	<tr><td>Merge an environment</td>
	<td><code>magento-cloud environment:merge Sprint-X</code></td>
	</tr>
	<tr><td>Sync QA with Sprint-X</td>
	<td><code>magento-cloud environment:synchronize code data</code></td>
	</tr>
	<tr><td>Merge Sprint-X with the master branch</td>
	<td><code>magento-cloud environment:merge Sprint-X</code></td>
	</tr>
</tbody>
</table>

#### Related topics
*	[Get started with an environment]({{page.baseurl}}cloud/env/environments-start.html)
*	[Magento Cloud CLI reference]({{page.baseurl}}cloud/reference/cli-ref-topic.html)
*	[SSH into environment]({{page.baseurl}}cloud/reference/cli-ref-topic.html)
*	[Overview of environment variables]({{page.baseurl}}cloud/env/environment-vars_over.html)
*	[Magento Commerce (Cloud) environment variables]({{page.baseurl}}cloud/env/environment-vars_cloud.html)
*	[Magento application environment variables]({{page.baseurl}}cloud/env/environment-vars_magento.html)
*	[Example setting variables]({{page.baseurl}}cloud/env/set-variables.html)
