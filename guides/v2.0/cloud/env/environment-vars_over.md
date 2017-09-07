---
layout: default
group: cloud
subgroup: 120_env
title: Overview of environment variables
menu_title: Overview of environment variables
menu_order: 71
menu_node:
level3_menu_node: level3child
level3_subgroup: vars
version: 2.0
github_link: cloud/env/environment-vars_over.md
---

## Environment variables {#cloud-env-set-vars}
Magento Enterprise Cloud Edition enables you to create variables in your environment that override configuration options. For example, we strongly recommend you *immediately* change your {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} URI and administrative user's password to prevent someone guessing your login and changing settings without your knowledge.

We support the following types of variables:

*   Variables defined by Magento Enterprise Cloud Edition itself
and that give you all the context you need about the environment (how to
connect to your database, for example).
*   Custom environment variables you define.

Environment variable names must use the characters `a-z`, `A-Z`, `0-9`, and `.`, `_`, `:`, `-` only and can be up to 256 characters in length.

Platform variables that are expressed as base64-encoded JSON object can be up to 4KB in size.

Environment variables have an `env` {% glossarytooltip 621ef86b-7314-4fbc-a80d-ab7fa45a27cb %}namespace{% endglossarytooltip %}.

<div class="bs-callout bs-callout-info" id="info">
  <p>Variables are <em>hierarchical</em>, which means that if a variable is not overridden, it is inherited from the parent environment and is indicated as <code>inherited</code>.</p>
<p>This enables you to define your development variables only once, and use them on all the child environments.</p>
</div>

## List the current environment variables {#cloud-env-list}
To list current environment variables using SSH:

1.	Log in to your project using the CLI. Enter the command `magento-cloud login` and provide your credentials.
2.	List the projects:

		magento-cloud project:list
3.	List environments in the selected project:

		magento-cloud environment:list -p <project id>
4.	SSH to the environment:

		magento-cloud environment:ssh -p <project id> -e <environment name>
5.	After you're connected, enter `export`.

	Variables are base64-encoded JSON objects.

6.	To decode the value of a variable, enter

		echo $<variable name> | base64 --decode

	For example,

		echo $MAGENTO_CLOUD_RELATIONSHIPS | base64 --decode

## List environment variables for a project or branch {#env-project-branch}
To list environment variables using Magento Cloud CLI:

1. Login to the Magento Cloud CLI. Enter the command `magento-cloud login` and provide your credentials.
2. List all project variables with the command `magento-cloud project:variable:get` or `magento-cloud pvget`.
3. List all project variables with the command `magento-cloud variable:get` or `magento-cloud vget`.

#### Related topics
*   [Magento Cloud environment variables]({{page.baseurl}}cloud/env/environment-vars_cloud.html)
*   [Magento application environment variables]({{page.baseurl}}cloud/env/environment-vars_magento.html)
*   [`.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html)
*   [`services.yaml`]({{page.baseurl}}cloud/project/project-conf-files_services.html)
*	[`routes.yaml`]({{page.baseurl}}cloud/project/project-conf-files_routes.html)
