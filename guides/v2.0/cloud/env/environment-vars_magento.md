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
These sections list the environment variables for [general Magento](#application), [build](#build), and [deployment](#deploy). You can [add variables](#addvariables) using the Project Web Interface or CLI commands.

## Magento application variables {#application}

The following table lists variables that you can override using environment variables.

<table>
<tbody>
<tr>
<th>Variable name</th>
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
<td>Administrative user's password. Initially, we have hardcoded this value to admin12. You should immediately change this password. </td>
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
<tr>
<td><code>UPDATE_URLS</code></td>
<td><p>On deployment, replace Magento base URLs in the database with project URLs. This is useful for local development, where base URLs are set up for your local environment. When you deploy to a Cloud environment, we change the URLs so you can access your storefront and Magento Admin using project URLs.</p>
<p>You should set this variable to <code>disabled</code> <em>only</em> in staging or production, where the base URLs can't change.</p>
<p>Available in {{site.data.var.ece}} 2.0.10 and later, and 2.1.2 and later.</p></td>
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

You can use these options as part of a `build_options.ini` file for customizing the build process. This file is located in the Magento root directory.

<table>
<tbody>
<tr>
<th>Variable name</th>
<th>Description</th>
<th>Default value</th>
</tr>
<tr>
<td><code>BUILD_OPT_SKIP_DI_COMPILATION</code></td>
<td>If you are needing to quickly debug a set of code in developer mode, you can enable this option to skip compilation and before a build immediately. Compilation can take additional time to properly manage, compile, and then build your code. We only recommend this option for quick debug testing in developer mode. You should always run di_compilation. Available in versions 2.1.X, 2.2.X.</td>
<td><code>skip_di_compilation = disabled</code></td>
</tr>
<tr>
<td><code>BUILD_OPT_SKIP_DI_CLEARING</code></td>
<td>Before di_generation runs, the build process clears the existing build to rebuild before deploying. If you are simply redeploying without needing to fully rebuild, you can use this option to skip the deletion of the existing built files. The deploy phase will reuse the existing build files. Available in versions 2.1.X, 2.2.X.</td>
<td><code>skip_di_clearing = disabled</code></td>
</tr>
<tr>
<td><code>BUILD_OPT_SCD_EXCLUDE_THEMES</code></td>
<td>When enabled, this option does not generate static content for an entered theme location. This is extremely helpful when static content deployment occurs during the build phase. For example, the Luma theme is included with all {{site.data.var.ece}} projects. You may not need to constantly generate static content for this theme, which adds time to your build. Available in versions 2.1.X, 2.2.X. </td>
<td><code>exclude_themes = Magento/luma</code></td>
</tr>
<tr>
<td><code>BUILD_OPT_SCD_THREADS</code></td>
<td><p>Sets the number of threads for processing and deploying static content files. These threads are used The higher amount of threads increasing the amount of files processed during the deployment of static content during the build phase. The lower the number of threads, the slower static files are processed increasing deployment time.</p>
<p>For Starter plan environments and Pro Integration environments, the threads value is 1. This amount is fine for these environments. For Pro Staging and Production environments, the default threads is 3 to increase the speed of processing static content, especially for Production with three nodes and GlusterFS.</p>
<p>To further reduce deployment time, we recommend using <a href="{{page.baseurl}}config-guide/live/sens-data-over.html">Configuration Management</a> with the <code>scd-dump</code> command to move static deployment into the build phase.</p>
<p>Available in versions 2.1.X, 2.2.X.</p></td>
<td><p><code>scd_threads = 1</code> for all Starter and Pro Integration environments</p>
<p><code>scd_threads = 3</code> for Pro Staging and Production environments</p></td>
</tr>
<tr>
<td><code>BUILD_OPT_SKIP_SCD</code></td>
<td>Skips static content deployment during the build phase. If you are already deploying static content during the build phase with Configuration Management, you may want to turn it off for a quick build test. We do not recommend using this option as running static deployment during the deployment phase can greatly increase deployment times and downtime for your live site. Available in versions 2.1.X, 2.2.X.</td>
<td><code>skip_scd = disabled</code></td>
</tr>
</tbody>
</table>

For information on the build and deploy process, see [Deployment process]({{page.baseurl}}cloud/reference/discover-deploy.html).
<!-- <tr>
<td><code>SCD_STRATEGY</code></td>
<td><p>The variable allows you to set a deployment strategy for static content deployment. For details on these options and features, see [Deploy static view files](http://devdocs.magento.com/guides/v2.2/config-guide/cli/config-cli-subcommands-static-view.html).</p>
<p>Use these options only if you have more than one locale.</p>
<ul>
<li>Use the standard strategy to deploy all static view files for all packages.</li>
<li>Use the quick strategy to minimize deployment time. This is the default command option if not specified.</li>
<li>Use the compact strategy to conserve disk space on the server.</li>
</ul>
</td>
<td><code>scd_strategy = standard</code>, <code>scd_strategy = quick</code>, <code>scd_strategy = compact</code></td>
<td>2.2.X</td>
</tr> -->

## Magento deploy variables {#deploy}
The following variables are available during the deploy process of build and deploy. To know what version the variable is available on, see the Magento Version in the table.

<table>
<tbody>
<tr>
<th>Variable name</th>
<th>Description</th>
<th>Default value</th>
</tr>
<tr><td><code>UPDATE_URLS</code></td>
<td><p>On deployment, replace Magento base URLs in the database with project URLs. This is useful for local development, where base URLs are set up for your local environment. When you deploy to a Cloud environment, we change the URLs so you can access your storefront and Magento Admin using project URLs.</p>
<p>You should set this variable to <code>disabled</code> <em>only</em> in Staging or Production environments, where the base URLs can't change. For Pro, we already set this to <code>disabled</code> for you.</p>
<p>This is available in versions 2.0.10 and later, 2.1.2 and later, and 2.2 and later.</td>
<td>enabled</td>
</tr>
<tr>
<td><code>CLEAN_STATIC_FILES</code></td>
<td><p>The default value, <code>enable</code>, cleans <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview">generated static view files</a> when you perform an action like enabling or disabling a component. We recommend the default value in development. The supported values are <code>enable</code> and <code>disable</code>.</p>
<p>Failure to clear static view files might result in issues if there are multiple files with the same name and you don't clear all of them. </p>
<p>Because of <a href="{{page.baseurl}}architecture/view/static-process.html">static file fallback</a> rules, if you do not clear static files and there is more than one file named <code>logo.gif</code> that are different, fallback might cause the wrong file to display.</p>
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
<p>To further reduce deployment time, we recommend using <a href="{{page.baseurl}}config-guide/live/sens-data-over.html">Configuration Management</a> with the <code>scd-dump</code> command to move static deployment into the build phase.</p>
<p>This is available in all versions.</p></td>
<td><p>1 for Starter environments and Pro Integration environments</p>
<p>3 for Pro Staging and Production environments</p></td>
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
<tr><td><code>APPLICATION_MODE</code></td>
<td><p>Determines whether or not Magento operates in <a href="{{page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-developer">developer mode</a> or in <a href="{{page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-production">production mode</a>. During deployment, we recommend the <a href="{{page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-default">default mode</a>.</p>
<p>The variable supports the following values: <code>production</code> and <code>developer</code>. You cannot set this value to <code>default</code> mode. After you have changed the mode with an environment variable, it can only be set to <code>production</code> or <code>developer</code>.</p>
<p>To execute build and deploy scripts in a specific mode, set an environment variable for APPLICATION_MODE. If you execute these scripts in <code>default</code> mode without APPLICATION_MODE set as an environment variable, the mode will be set to <code>production</code>.</p>
<p>This is available in all versions.</p></td>
<td>production</td>
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
<td>John</td>
</tr>
<tr><td><code>ADMIN_LASTNAME</code></td>
<td>Administrative user's last name. This is available in all versions.</td>
<td>Doe</td>
</tr>
<tr><td><code>ADMIN_EMAIL</code></td>
<td>Administrative user's e-mail address. This is available in all versions.</td>
<td>john@example.com</td>
</tr>
<tr><td><code>ADMIN_PASSWORD</code></td>
<td>Administrative user's password. Initially, we have hardcoded this value to admin12. You should immediately change this password. This is available in all versions.</td>
<td>Not set</td>
</tr>
<tr><td><code>ADMIN_URL</code></td>
<td>Enter the relative URL by which to access the Magento Admin. For security reasons, we recommend you choose a value other than <code>admin</code> or <code>backend</code> or another term that is easy to guess. If you set this value through a variable and the Admin Panel in Starter environments, the variable overrides the Admin Panel (or database value). For Pro, the Admin Panel (database value) overrides the variable. The values are also managed by <code>UPDATE_URLS</code>. This is available in all versions.</td>
<td>admin</td>
</tr>
<tr>
<td><code>STATIC_CONTENT_SYMLINK</code></td>
<td><p>Generates symlinks for static content. By default, symlinks are always generated unless you disable it using this environment variable.</p>
<p>This setting is vital for Pro Production environment for the three node cluster. If disabled, every file will be copied during deployment without automated symlinks generated. If disabled, this will increase deployment time.</p>
<p>This is available in all versions.</p></td>
<td>enabled</td>
</tr>
</tbody>
</table>

For information on the build and deploy process, see [Deployment process]({{page.baseurl}}cloud/reference/discover-deploy.html).
<!-- <tr><td><code>SCD_STRATEGY</code></td>
<td><p>The variable allows you to set a deployment strategy for static content deployment. For details on these options and features, see [Deploy static view files](http://devdocs.magento.com/guides/v2.2/config-guide/cli/config-cli-subcommands-static-view.html).</p>
<p>Use these options only if you have more than one locale.</p>
<ul>
<li>Use the standard strategy to deploy all static view files for all packages.</li>
<li>Use the quick strategy to minimize deployment time. This is the default command option if not specified.</li>
<li>Use the compact strategy to conserve disk space on the server.</li>
</ul>
</td>
<td><code>standard</code>, <code>quick</code>, <code>compact</code></td>
<td>2.2.X</td>
</tr> -->

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
