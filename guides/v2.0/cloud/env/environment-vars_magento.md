---
layout: default
group: cloud
subgroup: 120_env
title: Magento application environment variables
menu_title: Magento application environment variables
menu_order: 92
menu_node:
level3_menu_node: level3child
level3_subgroup: vars
version: 2.0
github_link: cloud/env/environment-vars_magento.md
---

<!-- The Magento application enables you to customize the values of many settings, including payment processors, shipping methods, and so on.
 -->
These sections list the environment variables for general Magento, build, and deployment. You can [add variables](#addvariables) using the Project Web Interface or CLI commands.

## Magento application variables {#application}

The following table lists variables that you can override using environment variables.

<table>
<tbody>
<tr>
<th style="width: 300px;">Variable name</th>
<th>Description</th>
<th>Default value</th>
</tr>
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
<td>Administrative user's e-mail address.</td>
<td>john@example.com</td>
</tr>
<tr><td><code>ADMIN_PASSWORD</code></td>
<td>Administrative user's password.</td>
<td>Not set. This value is hard-coded as admin12.</td>
</tr>
<tr><td><code>ADMIN_URL</code></td>
<td>Enter the relative URL by which to access the Magento Admin. For security reasons, we recommend you choose a value other than <code>admin</code> or <code>backend</code> or another term that is easy to guess.</td>
<td>admin</td>
</tr>
<tr><td><code>ADMIN_LOCALE</code></td>
<td>Specifies the default locale used by the Magento Admin.</td>
<td>en_US</td>
</tr>
<tr><td><code>APPLICATION_MODE</code></td>
<td><p>Determines whether or not Magento operates in <a href="{{page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-developer">developer mode</a> or in <a href="{{page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-production">production mode</a>. During deployment, we recommend the <a href="{{page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-default">default mode</a>.</p>
<p>The variable supports the following values: <code>production</code> and <code>developer</code>. You cannot set this value to <code>default</code> mode. After you have changed the mode with an environment variable, it can only be set to <code>production</code> or <code>developer</code>.</p>
<p>To execute build and deploy scripts in a specific mode, set an environment variable for APPLICATION_MODE. If you execute these scripts in <code>default</code> mode without APPLICATION_MODE set as an environment variable, the mode will be set to <code>production</code>.</p></td>
<td>production</td>
</tr>
<tr><td><code>CLEAN_STATIC_FILES</code></td>
<td><p>The default value, <code>enable</code>, cleans <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview">generated static view files</a> when you perform an action like enabling or disabling a component. We recommend the default value in development. The supported values are <code>enable</code> and <code>disable</code>.</p>
<p>Failure to clear static view files might result in issues if there are multiple files with the same name and you don't clear all of them. </p>
<p>Because of <a href="{{page.baseurl}}architecture/view/static-process.html">static file fallback</a> rules, if you do not clear static files and there is more than one file named <code>logo.gif</code> that are different, fallback might cause the wrong file to display.</p></td>
<td>enable</td>
</tr>
<tr><td><code>UPDATE_URLS</code></td>
<td><p>On deployment, replace Magento base URLs in the database with project URLs. This is useful for local development, where base URLs are set up for your local environment. When you deploy to a Cloud environment, we change the URLs so you can access your storefront and Magento Admin using project URLs.</p>
<p>You should set this variable to <code>disabled</code> <em>only</em> in staging or production, where the base URLs can't change.</p>
<p>Available in {{site.data.var.ece}} 2.0.10 and later, and 2.1.2 and later.</td>
<td>enabled</td>
</tr>
</tbody>
</table>

<!-- <tr><td>RECOMPILE_DI</td>
    <td>The default value, <code>true</code>, enables <a href="{{ page.baseurl }}config-guide/cli/config-cli-subcommands-compiler.html">code compilation</a>. We recommend the default value in development.</td>
    <td>true</td>
    </tr> -->
## Magento build variables {#build}
The following variables are options available during the build process of build and deploy. The variables help prepare the codebase before it is moved to the server and then built.

<table>
<tbody>
<tr>
<th style="width: 400px;">Variable name</th>
<th>Description</th>
<th>Default value</th>
<th>Version</th>
</tr>
<tr>
<td><code>BUILD_OPT_SKIP_DI_COMPILATION</code></td>
<td>skips di-compilation</td>
<td>value</td>
<th>all versions</th>
</tr>
<tr>
<td><code>BUILD_OPT_SKIP_DI_CLEARING</code></td>
<td>skips di-clearing</td>
<td>value</td>
<th>all versions</th>
</tr>
<tr>
<td><code>BUILD_OPT_SCD_EXCLUDE_THEMES</code></td>
<td>When enabled, this option does not deploy theme files during the build process. This is extremely helpful when static content deployment occurs during the build phase. For example, the Luma theme is included with {{site.data.var.ece}}. You may not need to constantly deploy this theme with your code updates and deployments. </td>
<td>value</td>
<th>all versions</th>
</tr>
<tr>
<td><code>BUILD_OPT_SCD_THREADS</code></td>
<td><p>Sets the number of threads for processing and deploying static content files. These threads are used The higher amount of threads increasing the amount of files processed during the deployment of static content during the build phase. The lower the number of threads, the slower static files are processed increasing deployment time.</p>
<p>For Starter plan environments and Pro Integration environments, the threads value is 1. This amount is fine for these environments. For Pro Staging and Production environments, the default threads is 3 to increase the speed of processing static content, especially for Production with three nodes and GlusterFS.</p></td>
<td><p>1 for Starter environments and Pro Integration environments</p>
<p>To further reduce deployment time, we recommend using <a href="{{page.baseurl}}config-guide/live/sens-data-over.html">Configuration Management</a> with the <code>scd-dump</code> command to move static deployment into the build phase.
<p>3 for Pro Staging and Production environments</p></td>
<th>all versions</th>
</tr>
<tr>
<td><code>BUILD_OPT_SKIP_SCD</code></td>
<td>skip the scd processes</td>
<td>value</td>
<th>all versions</th>
</tr>
</tbody>
</table>

## Magento deploy variables {#deploy}
The following variables are available during the deploy process of build and deploy. To know what version the variable is available on, see the Magento Version in the table.

<table>
<tbody>
<tr>
<th style="width: 400px;">Variable name</th>
<th>Description</th>
<th>Default value</th>
<th>Version</th>
</tr>
<tr><td><code>UPDATE_URLS</code></td>
<td><p>On deployment, replace Magento base URLs in the database with project URLs. This is useful for local development, where base URLs are set up for your local environment. When you deploy to a Cloud environment, we change the URLs so you can access your storefront and Magento Admin using project URLs.</p>
<p>You should set this variable to <code>disabled</code> <em>only</em> in staging or production, where the base URLs can't change.</p></td>
<td>enabled</td>
<td>2.0.10, 2.1.2</td>
</tr>
<tr>
<td><code>CLEAN_STATIC_FILES</code></td>
<td><p>The default value, <code>enable</code>, cleans <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview">generated static view files</a> when you perform an action like enabling or disabling a component. We recommend the default value in development. The supported values are <code>enable</code> and <code>disable</code>.</p>
<p>Failure to clear static view files might result in issues if there are multiple files with the same name and you don't clear all of them. </p>
<p>Because of <a href="{{page.baseurl}}architecture/view/static-process.html">static file fallback</a> rules, if you do not clear static files and there is more than one file named <code>logo.gif</code> that are different, fallback might cause the wrong file to display.</p></td>
<td>enable</td>
<td>all versions</td>
</tr>
<tr>
<td>STATIC_CONTENT_EXCLUDE_THEMES</code></td>
<td>Themes can include numerous files. If you want to skip copying over theme files during deployment, you can set this environment variable. For example, the Luma theme is included with {{site.data.var.ece}}. You may not need to constantly deploy this theme with your code updates and deployments. </td>
<td>admin</td>
<td>all versions</td>
</tr>
<tr>
<td><code>ADMIN_LOCALE</code></td>
<td>Specifies the default locale used by the Magento Admin.</td>
<td><code>en_US</code></td>
<td>all versions</td>
</tr>
<tr>
<td><code>STATIC_CONTENT_THREADS</code></td>
<td><p>Sets the number of threads for processing and deploying static content files. The higher amount of threads increasing the amount of files processed during the deployment. The lower the number of threads, the slower static files are processed increasing deployment time.</p>
<p>For Starter plan environments and Pro Integration environments, the threads value is 1. This amount is fine for these environments. For Pro Staging and Production environments, the default threads is 3 to increase the speed of processing static content, especially for Production with three nodes and GlusterFS.</p></td>
<td><p>1 for Starter environments and Pro Integration environments</p>
<p>To further reduce deployment time, we recommend using <a href="{{page.baseurl}}config-guide/live/sens-data-over.html">Configuration Management</a> with the <code>scd-dump</code> command to move static deployment into the build phase.
<p>3 for Pro Staging and Production environments</p></td>
<td>all versions</td>
</tr>
<tr>
<td><code>MAGENTO_CLOUD_MODE</code></td>
<td>This mode is equivalent to the <a href="{{page.baseurl}}config-guide/bootstrap/magento-modes.html"><code>APPLICATION_MODE</code></code>.</td>
<td>production</td>
<td>all versions</td>
</tr>
<tr>
<td><code>VERBOSE_COMMANDS</code></td>
<td>Enables or disables the <a href="https://symfony.com/doc/current/console/verbosity.html">Symfony</a> debug verbosity level for your logs. Be aware, if you enable this verbosity, the logs will be deeply detailed.</td>
<td>disabled</td>
<td>all versions</td>
</tr>
<tr>
<td><code>ADMIN_USERNAME</code></td>
<td>User name for a Magento administrative user. This user is an administrator and can create other users, including other administrative users.</td>
<td>admin</td>
<td>all versions</td>
</tr>
<tr><td><code>ADMIN_FIRSTNAME</code></td>
<td>Administrative user's first name.</td>
<td>John</td>
<td>all versions</td>
</tr>
<tr><td><code>ADMIN_LASTNAME</code></td>
<td>Administrative user's last name.</td>
<td>Doe</td>
<td>all versions</td>
</tr>
<tr><td><code>ADMIN_EMAIL</code></td>
<td>Administrative user's e-mail address.</td>
<td>john@example.com</td>
<td>all versions</td>
</tr>
<tr><td><code>ADMIN_PASSWORD</code></td>
<td>Administrative user's password.</td>
<td>Not set. This value is hard-coded as admin12.</td>
<td>all versions</td>
</tr>
<tr><td><code>ADMIN_URL</code></td>
<td>Enter the relative URL by which to access the Magento Admin. For security reasons, we recommend you choose a value other than <code>admin</code> or <code>backend</code> or another term that is easy to guess.</td>
<td>admin</td>
<td>all versions</td>
</tr>
<tr>
<td><code>STATIC_CONTENT_SYMLINK</code></td>
<td><p>Generates symlinks for static content. By default, symlinks are always generated unless you disable it using this environment variable.</p>
<p>This setting is vital for Pro Production environment for the three node cluster. If disabled, every file will be copied during deployment without automated symlinks generated. If disabled, this will increase deployment time.</p></td>
<td>enabled</td>
<td>all versions</td>
</tr>
</tbody>
</table>

## Add environment variables {#addvariables}
You can add environment variables for active environments through the Project Web Interface and through the Magento Cloud CLI. To create variables through the Project Web Interface, see [Set environment variables]({{page.baseurl}}cloud/project/project-webint-basic.html#project-conf-env-var).

<div class="bs-callout bs-callout-warning" markdown="1">
Everytime you add or modify a variable using the web interface or the CLI, the branch will redeploy automatically.
</div>

To create a variable using the command line:

1. Login to the Magento Cloud CLI. Enter the command `magento-cloud login` and provide your credentials.
2. To set a variable for the project, use the command `magento-cloud project:variable:set <name> <value>`. The alias for this command is also `pvset`. For example, `magento-cloud pvset example 123` creates a variable example with a string value of 123 for the project.
3. After creating these variables, you can list all project variables with the command `magento-cloud project:variable:get` or `magento-cloud pvget`.
4. To set a variable for the branch, use the command `magento-cloud variable:set <name> <value>`. The alias for this command is also `vset`. For example, `magento-cloud vset example2 abc` creates a variable example2 with a string value of abc for the branch.
5. After creating these variables, you can list all project variables with the command `magento-cloud variable:get` or `magento-cloud vget`.

## Troubleshooting {#cloud-env-vars-tshoot}
In the {% glossarytooltip c57aef7c-97b4-4b2b-a999-8001accef1fe %}event{% endglossarytooltip %} something goes wrong and you can't access your environment after it deploys, try the following:

*   [SSH to the environment]({{page.baseurl}}cloud/env/environments-start.html#env-start-tunn) and make sure [services]({{page.baseurl}}cloud/env/environments-start.html#cloud-ssh-tunnel-service) are running.
*   Restore your snapshot:

        magento-cloud snapshot:list
        magento-cloud snapshot:restore <snapshot>

#### Related topics
*   [Tutorial&mdash;Set Magento environment variables]({{page.baseurl}}cloud/howtos/environment-tutorial-set-mage-vars.html)
*   [Magento Cloud environment variables]({{page.baseurl}}cloud/env/environment-vars_cloud.html)
*   [`.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html)
*   [`services.yaml`]({{page.baseurl}}cloud/project/project-conf-files_services.html)
*   [`routes.yaml`]({{page.baseurl}}cloud/project/project-conf-files_routes.html)
