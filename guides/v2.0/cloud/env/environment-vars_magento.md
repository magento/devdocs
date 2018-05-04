---
layout: default
group: cloud
title: Application variables
version: 2.0
github_link: cloud/env/environment-vars_magento.md
functional_areas:
  - Cloud
  - Configuration
---

These sections list the general Magento and [deployment](#deploy) environment variables. You can [add variables](#addvariables) using the Project Web Interface or CLI commands.

The following table lists variables that you can override using environment variables.

<table>
<thead><tr>
<th style="width: 165px;">Variable name</th>
<th>Description</th>
<th style="width: 150px;">Default value</th>
</tr></thead>
<tbody>
<tr>
<td><code>ADMIN_USERNAME</code></td>
<td>User name for a Magento administrative user. This user is an administrator and can create other users, including other administrative users.</td>
<td>admin</td>
</tr>
<tr><td><code>ADMIN_FIRSTNAME</code></td>
<td>Administrative user's first name.</td>
<td>John</td>
</tr>
<tr><td><code>ADMIN_LASTNAME</code></td>
<td>Administrative user's last name.</td>
<td>Doe</td>
</tr>
<tr><td><code>ADMIN_EMAIL</code></td>
<td>Administrative user's e-mail address. This value is required for upgrading and patching {{site.data.var.ece}} and is used to send password reset emails. See <a href="{{page.baseurl}}/cloud/project/project-webint-basic.html#project-conf-env-var">Set environment and project variables</a>.</td>
<td>Not set</td>
</tr>
<tr><td><code>ADMIN_PASSWORD</code></td>
<td>Administrative user's password. Initially, we generate a random password and provide an email directing the Project Owner to reset the password. You should immediately change this password.</td>
<td>Not set</td>
</tr>
<tr><td><code>ADMIN_URL</code></td>
<td>Enter the relative URL by which to access the Magento Admin. For security reasons, we recommend you choose a value other than <code>admin</code> or <code>backend</code> or another term that is easy to guess.</td>
<td>admin</td>
</tr>
<tr><td><code>ADMIN_LOCALE</code></td>
<td>Specifies the default locale used by the Magento Admin.</td>
<td>en_US</td>
</tr>
</tbody>
</table>

## Magento deploy variables {#deploy}
The following variables are available during the deploy process of build and deploy. To know what version the variable is available on, see the Magento Version in the table.

<table>
<thead>
<tr>
<th>Variable name</th>
<th>Description</th>
<th style="width: 200px;">Default value</th>
</tr></thead>
<tbody>
<tr><td><code>UPDATE_URLS</code></td>
<td><p>On deployment, replace Magento base URLs in the database with project URLs. This is useful for local development, where base URLs are set up for your local environment. When you deploy to a Cloud environment, we change the URLs so you can access your storefront and Magento Admin using project URLs.</p>
<p>You should set this variable to <code>disabled</code> <em>only</em> in Staging or Production environments, where the base URLs can't change. For Pro, we already set this to <code>disabled</code> for you.</p>
<p>This is available in versions 2.0.10 and later.</p></td>
<td>enabled</td>
</tr>
<tr>
<td><code>CLEAN_STATIC_FILES</code></td>
<td><p>The default value, <code>enabled</code>, cleans <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview">generated static view files</a> when you perform an action like enabling or disabling a component. We recommend the default value in development. The supported values are <code>enabled</code> and <code>disabled</code>.</p>
<p>Failure to clear static view files might result in issues if there are multiple files with the same name and you don't clear all of them. </p>
<p>Because of <a href="{{page.baseurl}}/howdoi/clean_static_cache.html">static file fallback</a> rules, if you do not clear static files and there is more than one file named <code>logo.gif</code> that are different, fallback might cause the wrong file to display.</p>
<p>This is available in all versions.</p></td>
<td>enabled</td>
</tr>
<tr>
<td><code>STATIC_CONTENT_EXCLUDE_THEMES</code></td>
<td>Themes can include numerous files. If you want to skip copying over theme files during deployment, you can set this environment variable. For example, the Luma theme is included with {{site.data.var.ece}}. You may not need to constantly deploy this theme with your code updates and deployments. To exclude, you would add the theme, for example: <code>Magento/luma</code>. This is available in all versions.</td>
<td>not set</td>
</tr>
<tr>
<td><code>ADMIN_LOCALE</code></td>
<td>Specifies the default locale used by the Magento Admin. This is available in all versions.</td>
<td>en_US</td>
</tr>
<tr>
<td><code>STATIC_CONTENT_THREADS</code></td>
<td><p>Sets the number of threads for processing and deploying static content files. The higher amount of threads increasing the amount of files processed during the deployment. The lower the number of threads, the slower static files are processed increasing deployment time.</p>
<p>For Starter plan environments and Pro Integration environments, the threads value is 1. This amount is fine for these environments. For Pro Staging and Production environments, the default threads is 3 to increase the speed of processing static content, especially for Production with three nodes and GlusterFS.</p>
<p>To further reduce deployment time, we recommend using <a href="http://devdocs.magento.com/guides/v2.1/cloud/live/sens-data-over.html">Configuration Management</a> with the <code>scd-dump</code> command to move static deployment into the build phase.</p>
<p>This is available in all versions.</p></td>
<td>1 for Starter environments and Pro Integration environments<br />
3 for Pro Staging and Production environments</td>
</tr>
<tr>
<td><code>DO_DEPLOY_STATIC_CONTENT</code></td>
<td>You can forcefully enable or disable the deployment of static content during the deploy phase with this variable. If you already completed static content deployment in the build phase, and this variable is enabled, it will be overridden to ensure static content deployment occurs only once. We strongly recommend always deploying static content during the build phase.  This is available in all versions.</td>
<td>disabled</td>
</tr>
<tr>
<td><code>MAGENTO_CLOUD_MODE</code></td>
<td>We manage the values and setting of this variable. It identifies the type of environment as part of Integration, Staging, or Production. For example, for Pro, this value may be <code>enterprise</code> indicating Staging and Production. For <code>enterprise</code>, it sets the <code>STATIC_CONTENT_THREADS</code> to 3, otherwise sets it to 1 for Integration. This is highly important for Pro plans Production, which has a three node high availability architecture with a very different technology stack. This is available in all versions.</td>
<td>enterprise</td>
</tr>
<tr>
<td><code>VERBOSE_COMMANDS</code></td>
<td>Enables or disables the <a href="https://symfony.com/doc/current/console/verbosity.html">Symfony</a> debug verbosity level for your logs. Be aware, if you enable this verbosity, the logs will be deeply detailed. This is available in all versions.</td>
<td>disabled</td>
</tr>
<tr>
<td><code>ADMIN_USERNAME</code></td>
<td>User name for a Magento administrative user. This user is an administrator and can create other users, including other administrative users. This is available in all versions.</td>
<td>admin</td>
</tr>
<tr><td><code>ADMIN_FIRSTNAME</code></td>
<td>Administrative user's first name. This is available in all versions.</td>
<td>Not set, example: John</td>
</tr>
<tr><td><code>ADMIN_LASTNAME</code></td>
<td>Administrative user's last name. This is available in all versions.</td>
<td>Not set, example: Doe</td>
</tr>
<tr><td><code>ADMIN_EMAIL</code></td>
<td>Administrative user's e-mail address. This value is required for upgrading and patching {{site.data.var.ece}} and is used to send password reset emails. See <a href="{{page.baseurl}}/cloud/project/project-webint-basic.html#project-conf-env-var">Set environment and project variables</a>.</td>
<td>Not set</td>
</tr>
<tr><td><code>ADMIN_PASSWORD</code></td>
<td>Administrative user's password. Initially, we generate a random password and provide an email directing the Project Owner to reset the password. You should immediately change this password.</td>
<td>Not set</td>
</tr>
<tr><td><code>ADMIN_URL</code></td>
<td>Enter the relative URL by which to access the Magento Admin. For security reasons, we recommend you choose a value other than <code>admin</code> or <code>backend</code> or another term that is easy to guess. If you set this value through a variable and the Admin Panel in Starter environments, the variable overrides the Admin Panel (or database value). For Pro, the Admin Panel (database value) overrides the variable. The values are also managed by <code>UPDATE_URLS</code>. This is available in all versions.</td>
<td>admin</td>
</tr>
<tr>
<td><code>STATIC_CONTENT_SYMLINK</code></td>
<td>Generates symlinks for static content. By default, symlinks are always generated unless you disable it using this environment variable. This setting is vital for Pro Production environment for the three node cluster. If disabled, every file will be copied during deployment without automated symlinks generated. If disabled, this will increase deployment time. This is available in all versions.</td>
<td>enabled</td>
</tr></tbody>
</table>

For information on the build and deploy process, see [Deployment process]({{page.baseurl}}/cloud/reference/discover-deploy.html).

## Add environment variables {#addvariables}
You can add environment variables for active environments through the Project Web Interface and through the Magento Cloud CLI. To create variables through the Project Web Interface, see [Set environment variables]({{page.baseurl}}/cloud/project/project-webint-basic.html#project-conf-env-var).

<div class="bs-callout bs-callout-warning" markdown="1">
Every time you add or modify a variable using the web interface or the CLI, the branch will redeploy automatically.
</div>

To create a variable using the command line:

1. Login to the Magento Cloud CLI. Enter the command `magento-cloud login` and provide your credentials.
2. To set a variable for the project, use the command `magento-cloud project:variable:set <name> <value>`. The alias for this command is also `pvset`. For example, `magento-cloud pvset example 123` creates a variable example with a string value of 123 for the project.
3. After creating these variables, you can list all project variables with the command `magento-cloud project:variable:get` or `magento-cloud pvget`.
4. To set a variable for the branch, use the command `magento-cloud variable:set <name> <value>`. The alias for this command is also `vset`. For example, `magento-cloud vset example2 abc` creates a variable example2 with a string value of abc for the branch.
5. After creating these variables, you can list all project variables with the command `magento-cloud variable:get` or `magento-cloud vget`.

## Troubleshooting {#cloud-env-vars-tshoot}
In the event something goes wrong and you can not access your environment after it deploys, try the following:

*   [SSH to the environment]({{page.baseurl}}/cloud/env/environments-start.html#env-start-tunn) and make sure [services]({{page.baseurl}}/cloud/env/environments-start.html#tunnel-services) are running.
*   Restore your snapshot:

        magento-cloud snapshot:list
        magento-cloud snapshot:restore <snapshot>

For more information on snapshots, see [Snapshots and backup management]({{page.baseurl}}/cloud/project/project-webint-snap.html).
