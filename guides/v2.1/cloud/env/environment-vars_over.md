---
layout: default
group: cloud
subgroup: 08_env
title: Overview of environment variables
menu_title: Overview of environment variables
menu_order: 71
menu_node: 
level3_menu_node: level3child
level3_subgroup: vars
github_link21: cloud/env/environment-vars_over.md
---

## Environment variables {#cloud-env-set-vars}
Magento Enterprise Cloud Edition enables you to create variables in your environment that override configuration options. For example, we strongly recommend you *immediately* change your Magento Admin URI and administrative user's password to prevent someone guessing your login and changing settings without your knowledge.

We support the following types of variables:

*   Variables defined by Magento Enterprise Cloud Edition itself
and that give you all the context you need about the environment (how to 
connect to your database, for example).
*   Custom environment variables you define.

Environment variable names must use the characters `a-z`, `A-Z`, `0-9`, and `.`, `_`, `:`, `-` only and can be up to 256 characters in length.

Platform variables that are expressed as base64-encoded JSON object can be up to 4KB in size.

Environment variables have an `env` namespace.

<div class="bs-callout bs-callout-info" id="info">
  <p>Variables are <em>hierarchical</em>, which means that if a variable is not overridden, it is inherited from the parent environment and is indicated as <code>inherited</code>.</p>
<p>This enables you to define your development variables only once, and use them on all the child environments.</p>
</div>

## List the current environment variables {#cloud-env-list}
To list current environment variables:

1.	Log in to your project using the CLI.
2.	List the projects:

		magento-cloud project:list
3.	List environments in the selected project:

		magento-cloud environment:list -p <project id>
4.	SSH to the environment:

		magento-cloud environment:ssh -p <project id> -e <environment name>
5.	After you're connected, enter `export`.

	Variables are base64-encoded JSON objects.

6.	To decode the value of a variable, enter

		<variable name> | base64 --decode

	For example,

		echo $MAGENTO_CLOUD_RELATIONSHIPS | base64 --decode

#### Related topics
*   [Magento Cloud environment variables]({{ site.gdeurl21 }}cloud/env/environment-vars_cloud.html)
*   [Magento application environment variables]({{ site.gdeurl21 }}cloud/env/environment-vars_magento.html)
*   [`.magento.app.yaml`]({{ site.gdeurl21 }}cloud/project/project-conf-files_magento-app.html)
*   [`services.yaml`]({{ site.gdeurl21 }}cloud/project/project-conf-files_services.html)
*	[`routes.yaml`]({{ site.gdeurl21 }}cloud/project/project-conf-files_routes.html)
