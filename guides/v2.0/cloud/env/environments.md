---
layout: default
group: cloud
subgroup: 08_env
title: Manage your environments
menu_title: Manage your environments
menu_order: 1
menu_node: parent
version: 2.0
github_link: cloud/env/environments.md
---

## Overview of environments {#cloud-env-over}
A Magento Enterprise Cloud *environment* consists of a running Magento instance. It includes your Magento application (codebase and files) and the services required to run it (*Services* include the web server, database, search engine, caching server, and so on).

Each environment is a branch of the `master` environment (which is your live environment). Every Cloud project has at least one environment, the `master`, which cannot be removed or renamed. You can create up to 6 additional environments. Typically, these environments are used for development and testing.

If you use GitHub or Bitbucket, every pull request or branch can be deployed into its own environment on Magento Enterprise Cloud.

## Master environment
Every Magento Enterprise Cloud Edition project starts with a `master` environment that corresponds to the `master` branch in Git. The master environment is your live, production environment.

<div class="bs-callout bs-callout-info" id="info">
  <p>Your project must have a <code>master</code> branch; it won't function properly without one.</p>
</div>


## Inactive environments {#cloud-env-inactive}
An *inactive* environment is an environment which doesn't run any service. You can have any number of inactive environments.

By default, when you push a new branch via Git, Magento Enterprise Cloud automatically creates an inactive environment. It's referred to as *inactive* because it isn't a working environment. 

You can use the following command to create an active environment from a parent environment:

	magento-cloud environment:branch

You can use the following command to create an active environment from an inactive one:

	magento-cloud environment:activate

<div class="bs-callout bs-callout-info" id="info">
  <p>This command will deploy the web server and the services from the parent environment.</p>
</div>

## Environment hierarchy {#cloud-env-hier}
The `master` environment is ultimately the parent of all other environments. Every time you branch it or any other environment, you create a parent-child relationship between them.

Each child environment can sync code, data, or both from its parent. Syncing data to an environment results in a byte-for-byte copy of all services and media files.

Likewise, a child can merge code with its parent, which ends up redeploying the parent environment with the code changes of the child environment.

Child environments are typically used for development, staging, and testing.

## Workflows {#cloud-env-work}
Magento Enterprise Cloud Edition imposes no rules on how you use branches and environments. You can use whatever workflow makes sense to you, consistent with the workflow you already use.

For example, suppose your Agile development team needs a branch (that is, environment) for every story in a sprint and at the end of the sprint, those branches merge to another branch for testing.

Following is one way to set up the environments:

	Master
		Sprint-X
		   Story1
		   Story2
		   Story3
		   QA

In this example, the following can happen:

1.	To start, a project administrator either:

	*	Creates the Sprint-X environments and grants contributor privileges to developers to create the story environments.
	*	Creates all the environments and grants contributor privileges to developers.

2.	When the sprint is finished (or when the story is closed), the administrator can review the work by accessing the website of the feature environment. The new feature is then merged back to the Sprint-X environment.
3.	The administrator synchronizes Sprint-X with QA so all features can be tested.
3.	The administrator backs up the live site, then merges the Sprint-X environment into the `master` environment, making it live.
4.	The administrator synchronizes the next sprint's environment with data from the `master` environment to repeat and continue the development process.

### Commands used in the example
The following table lists the commands used in the preceding example.

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
*	[Overview of environment variables]({{page.baseurl}}cloud/env/environment-vars_over.html)
