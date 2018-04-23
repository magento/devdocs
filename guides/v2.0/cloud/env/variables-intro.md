---
layout: default
group: cloud
title: Manage variables
version: 2.0
github_link: cloud/env/variables-intro.md
redirect_from:
  - /guides/v2.1/cloud/live/config-reference-most.html
  - /guides/v2.2/cloud/live/config-reference-most.html
  - /guides/v2.3/cloud/live/config-reference-most.html
  - /guides/v2.1/cloud/live/config-reference-payment.html
  - /guides/v2.2/cloud/live/config-reference-payment.html
  - /guides/v2.3/cloud/live/config-reference-payment.html
  - /guides/v2.1/cloud/live/config-reference-sens.html
  - /guides/v2.2/cloud/live/config-reference-sens.html
  - /guides/v2.3/cloud/live/config-reference-sens.html
  - /guides/v2.0/cloud/env/environment-vars_over.html
functional_areas:
  - Cloud
  - Configuration
---

{{site.data.var.ece}} supports variables for environments, projects, and applications. These variables affect all aspects of build, deployment, and configuration settings.

* [Magento application environment variables]({{ page.baseurl}}/cloud/env/environment-vars_magento.html)
* [Magento Commerce (Cloud) environment variables]({{ page.baseurl}}/cloud/env/environment-vars_cloud.html)

You can create all variables using the Magento Cloud CLI in all Starter environments and Pro Integration environments. You can create environment variables through the Project Web Interface for all Starter and Pro environments (created after October 23, 2017 or [updated]({{ page.baseurl}}/cloud/trouble/pro-env-management.html)).

## Additional information {#magevar}
For additional information on Magento variables for v2.1.X and later, see the following:

* [Sensitive and system-specific](http://devdocs.magento.com/guides/v2.1/config-guide/prod/config-reference-sens.html)
* [Sensitive configuration paths reference](http://devdocs.magento.com/guides/v2.1/config-guide/prod/config-reference-payment.html)
* [Other configuration paths reference](http://devdocs.magento.com/guides/v2.1/config-guide/prod/config-reference-most.html)
* [System settings reference](http://devdocs.magento.com/guides/v2.1/config-guide/prod/config-reference-var-name.html)

To use a configuration path as a variable:

*	All text must be ALL CAPS.
*	Prefix the configuration path with the scope (the default scope, `CONFIG__DEFAULT`, or a specific scope).
*	Replace `/` characters in the configuration path with two underscore characters.

## Environment variables {#cloud-env-set-vars}
{{site.data.var.ece}} enables you to create environment variables that override configuration options. For example, we strongly recommend you *immediately* change your Magento Admin URI and administrative user's password to prevent someone guessing your login and changing settings without your knowledge.

We support the following types of variables:

*   Variables defined by {{site.data.var.ece}} itself
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

## CLI: List the current environment variables {#cloud-env-list}
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

## CLI: List environment variables for a project or branch {#env-project-branch}
To list environment variables using Magento Cloud CLI:

1. Login to the Magento Cloud CLI. Enter the command `magento-cloud login` and provide your credentials.
2. List all project variables with the command `magento-cloud project:variable:get` or `magento-cloud pvget`.
3. List all project variables with the command `magento-cloud variable:get` or `magento-cloud vget`.

## CLI: Add environment variables {#addvariables}

<div class="bs-callout bs-callout-warning" markdown="1">
Everytime you add or modify a variable using the Project Web Interface or the CLI, the branch will redeploy automatically.
</div>

To create a variable using the command line:

1. Login to the Magento Cloud CLI. Enter the command `magento-cloud login` and provide your credentials.
2. To set a variable for the project, use the command `magento-cloud project:variable:set <name> <value>`. The alias for this command is also `pvset`. For example, `magento-cloud pvset example 123` creates a variable example with a string value of 123 for the project.
3. After creating these variables, you can list all project variables with the command `magento-cloud project:variable:get` or `magento-cloud pvget`.
4. To set a variable for the branch, use the command `magento-cloud variable:set <name> <value>`. The alias for this command is also `vset`. For example, `magento-cloud vset example2 abc` creates a variable example2 with a string value of abc for the branch.
5. After creating these variables, you can list all project variables with the command `magento-cloud variable:get` or `magento-cloud vget`.

## Project Web Interface: Add environment variables {#projectweb}
You can add environment variables for active environments through the Project Web Interface. To create variables through the Project Web Interface, see [Set environment variables]({{page.baseurl}}/cloud/project/project-webint-basic.html#project-conf-env-var).

<div class="bs-callout bs-callout-warning" markdown="1">
Everytime you add or modify a variable using the Project Web Interface or the CLI, the branch will redeploy automatically.
</div>
