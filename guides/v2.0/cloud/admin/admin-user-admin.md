---
layout: default
group: cloud
subgroup: 30_admin
title: Manage users
menu_title: Manage users
menu_order: 2
menu_node: 
version: 2.0
github_link: cloud/admin/admin-user-admin.md
---

## Overview of Magento Enterprise Cloud Edition user management {#cloud-user-over}
Magento Enterprise Cloud Edition enables you to administer users by assigning them one or more roles. A *role* provides access and
improves security in your project. Different roles are authorized to do different things with your applications, environments, and users. 

### Account owner role {#cloud-role-acct-owner}
The account owner (that is, the person who registered the Magento Enterprise Cloud Edition account) is the only user with the Account Owner role. This user can perform any task in any project or environment, including delete it.

### Project-level roles {#cloud-role-project}
You can assign users to the following roles per project:

-   Project administrator (also referred to as *super user*) can change settings and execute actions on any environment, including creating and restoring snapshots.
-   Project reader can view all environments in a project but cannot execute any actions on them.

### Environment-level roles {#cloud-role-env}
A project reader can have one of the following roles per environment:

-   Environment administrator can
    change settings and execute actions on this environment, including merging with the parent environment.
-   Environment contributor can push
    code to this environment. This role can also branch the environment.
-   Environment reader can view this environment only.

<div class="bs-callout bs-callout-info" id="info">
  <p>We recommend you limit the environment administrator role to as few users as possible.</p>
</div>

### Role management best practices
When a development team works on a project, the team leader can be the
project administrator and decide which roles to give his team members.
One team member can contribute to one environment, another member can
administer a different environment, and the customer can be a reader of
the `master` environment.

For your users to be able to see everything but only
commit to a specific branch, change their permission level on that
environment to "Contributor".


<div class="bs-callout bs-callout-warning">
    <p>An environment contributor can push code to the environment, but that user role does not have SSH access to the environment. By default, only environment administrators have SSH access. You can change the behavior in <code>.magento.app.yaml</code> by specifying <code>ssh: contributor</code>.</p>
</div>


### Rebuild the environment
After a new user is added to an environment, the environment must be rebuilt. Rebuilds
are triggered when you push a new commit to an environment.
To be able to rebuild without new code changes, use the command
`git commit --allow-empty -m "redeploy" && git push <branch name>`
to create an empty commit and "force" rebuilding the environment.

When the environment rebuild is complete, allow a short time for the routes to 
update fully and for the new user to be able to use SSH access.

### Manage users with the CLI {#cloud-user-mg-cli}
You can user the Magento Enterprise Cloud Edition command line client to fully manage your users
and integrate this with any other automated system.

Available commands:

* `magento-cloud user:add`
  * Add a user to the project
* `magento-cloud user:delete`
  * Delete a user
* `magento-cloud user:list [users]`
  * List project users
* `magento-cloud user:role`
  * View or change a user's role

For example, the following command adds the project administrator (`admin`) role to `alice@example.com` and gives her `contributor` privileges to the `development` environment:

The following prompts display:

	magento-cloud user:add

	Email address: alice@example.com
	The user's project role can be 'viewer' ('v') or 'admin' ('a').
	Project role [V/a]: a
	The user's environment-level roles can be 'viewer', 'contributor', or 'admin'.
	development environment role [V/c/a]: c
	Summary:
	    Email address: alice@example.com
	    Project role: contributor
	Adding users can result in additional charges.
	Are you sure you want to add this user? [Y/n]
	User alice@example.com created

After this has been done, the user will receive an e-mail asking her to confirm
her details and register an account name and a password.

To change Alice's role on the environment `development` to `admin`, use the following command:

	magento-cloud user:role alice@example.com --level environment --environment development --role admin

Use `magento-cloud list` to get the full list of commands.
