---
layout: default
group: cloud
title: Magento application environment variables
version: 2.1
github_link: cloud/env/environment-vars_magento.md
functional_areas:
  - Cloud
  - Configuration
---

This topic describes Magento [application](#application), [deploy](#deploy), and [build](#build) environment variables.

<div class="bs-callout bs-callout-tip" markdown="1">
Use one of the following methods to manage variables:

-   [**Configuration file**](http://devdocs.magento.com/guides/v2.1/cloud/project/magento-env-yaml.html)—All Starter and Pro environments
-   [**Project Web Interface**]({{page.baseurl}}cloud/project/project-webint-basic.html#project-conf-env-var)—All Starter and Pro environments created after October 23, 2017 or [updated]({{page.baseurl}}cloud/trouble/pro-env-management.html)
-   [**Magento Cloud CLI tool**](#addvariables)—All Starter and Pro Integration environments
</div>

## Application

The following table lists application variables that you can override using environment variables.

<table>
	<thead>
		<tr>
			<th style="width: 165px;">Variable name</th>
			<th>Description</th>
			<th style="width: 150px;">Default value</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>ADMIN_USERNAME</code></td>
			<td>User name for a Magento administrative user. This user is an administrator and can create other users, including other administrative users.</td>
			<td>admin</td>
		</tr>
		<tr>
			<td><code>ADMIN_FIRSTNAME</code></td>
			<td>Administrative user's first name.</td>
			<td>John</td>
		</tr>
		<tr>
			<td><code>ADMIN_LASTNAME</code></td>
			<td>Administrative user's last name.</td>
			<td>Doe</td>
		</tr>
		<tr>
			<td><code>ADMIN_EMAIL</code></td>
			<td>
				Administrative user's e-mail address. This value is required for upgrading and patching {{site.data.var.ece}} and is used to send password reset emails. To set, see <a href="{{page.baseurl}}cloud/before/before-project-owner.html#variables">Add admin variables for Admin access</a>.
			</td>
			<td>Not set</td>
		</tr>
		<tr>
			<td><code>ADMIN_PASSWORD</code></td>
			<td>Administrative user's password. Initially, we generate a random password and provide an email directing the Project Owner to reset the password. You should immediately change this password.</td>
			<td>Not set</td>
		</tr>
		<tr>
			<td><code>ADMIN_URL</code></td>
			<td>Enter the relative URL by which to access the Magento Admin. For security reasons, we recommend you choose a value other than <code>admin</code> or <code>backend</code> or another term that is easy to guess.</td>
			<td>admin</td>
		</tr>
		<tr>
			<td><code>ADMIN_LOCALE</code></td>
			<td>Specifies the default locale used by the Magento Admin.</td>
			<td>en_US</td>
		</tr>
	</tbody>
</table>

## Build
The following variables are available during the build phase. Refer to [Manage build and deploy actions](http://devdocs.magento.com/guides/v2.1/cloud/project/magento-env-yaml.html) for more information about using these options in the `.magento.env.yaml` file.

<div class="bs-callout bs-callout-info" markdown="1">
You can still use the `build_options.ini` file, but we recommend using the `.magento.env.yaml` file instead because it centralizes the management of build and deploy actions across all of your environments—including Pro Staging and Production—without requiring a support ticket.
</div>

<table>
  <thead>
    <tr>
      <th>Variable name</th>
      <th>Description</th>
      <th style="width: 200px;">Default value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>SKIP_DI_COMPILATION</code></td>
      <td>If you need to quickly debug code, use this variable to skip compilation before a build. Compilation can take additional time to properly manage, compile, and then build your code. We only recommend this option for quick debug testing in developer mode. You should always run di_compilation. Available in versions 2.1.2 and later.</td>
      <td>disabled</td>
    </tr>
    <tr>
      <td><code>SKIP_DI_CLEARING</code></td>
      <td>Before di_generation runs, the build process clears the existing build to rebuild before deploying. If you are simply redeploying without needing to fully rebuild, you can use this option to skip the deletion of the existing built files. The deploy phase will reuse the existing build files. Available in versions 2.1.2 and later.</td>
      <td>disabled</td>
    </tr>
    <tr>
      <td><code>EXCLUDE_THEMES</code></td>
      <td>
        <p>When enabled, this option does not generate static content for the specified theme location(s). This is helpful when static content deployment occurs during the build phase. Use commas to separate multiple theme locations.</p>
        <p>For example, the Luma theme is included with all {{site.data.var.ece}} projects. You may not need to constantly generate static content for this theme, which adds time to your build. To exclude the theme, use the following: <code>exclude_themes=magento/luma,magento/my-theme</code>.</p>
        <p>Available in versions 2.1.4 and later.</p>
      </td>
      <td>Not set</td>
    </tr>
    <tr>
      <td><code>SCD_COMPRESSION_LEVEL</code></td>
      <td>
        Specifies which <a href="https://www.gnu.org/software/gzip" target="\_blank">gzip</a> compression level (<code>0</code> - <code>9</code>) to use when compressing static content; <code>0</code> disables compression.
      </td>
      <td><code>6</code></td>
    </tr>
    <tr>
      <td><code>SCD_STRATEGY</code></td>
      <td>
        <p>Deploys all static view files for all packages.</p>
        <p>Magento 2.1 supports the <code>standard</code> strategy only.</p>
      </td>
      <td><code>Not set</code></td>
    </tr>
    <tr>
      <td><code>SCD_THREADS</code></td>
      <td>
        <p>Sets the number of threads for static content deployment. Increasing the number of threads speeds up static content deployment; decreasing the number of threads slows it down.</p>
        <p>To further decrease deployment time, we recommend using <a href="{{page.baseurl}}cloud/live/sens-data-over.html">Configuration Management</a> with the <code>scd-dump</code> command to move static deployment into the build phase.</p>
        <p>Available in versions 2.1.4 and later.</p>
      </td>
      <td>
        <p><code>1</code> - Starter environments and Pro Integration environments</p>
        <p><code>3</code> - Pro Staging and Production environments</p>
      </td>
    </tr>
    <tr>
      <td><code>SKIP_SCD</code></td>
      <td>
        <p>Skips static content deployment during the build phase.</p>
        <p>If you are already deploying static content during the build phase with <a href="{{page.baseurl}}cloud/live/sens-data-over.html">Configuration Management</a>, you may want to turn it off for a quick build test.</p>
        <p>We do not recommend using this option because running static content deployment during the deployment phase can greatly increase deployment times and downtime for your live site.</p>
        <p>Available in versions 2.1.4 and later.</p>
      </td>
      <td>Not set</td>
    </tr>
  </tbody>
</table>

For information on the build and deploy process, see [Deployment process]({{page.baseurl}}cloud/reference/discover-deploy.html).

## Deploy
The following variables are available during the deploy process.

<div class="bs-callout bs-callout-tip" markdown="1">
Use one of the following methods to manage variables:

-   [**Configuration file**](http://devdocs.magento.com/guides/v2.1/cloud/project/magento-env-yaml.html)—All Starter and Pro environments
-   [**Project Web Interface**]({{page.baseurl}}cloud/project/project-webint-basic.html#project-conf-env-var)—All Starter and Pro environments created after October 23, 2017 or [updated]({{page.baseurl}}cloud/trouble/pro-env-management.html)
-   [**Magento Cloud CLI tool**](#addvariables)—All Starter and Pro Integration environments
</div>

<table>
  <thead>
    <tr>
      <th>Variable name</th>
      <th>Description</th>
      <th style="width: 200px;">Default value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>CRON_CONSUMERS_RUNNER</code></td>
      <td>
        <p>By default, the deployment process overwrites all settings in the <code>env.php</code> file. Use this environment variable to make sure message queues are running after a deployment.</p>
        <p>This is available in Magento version 2.1 and later.</p>
        <p>You must set the variable value using JSON. Refer to <a href="{{page.baseurl}}cloud/env/working-with-variables.html#manage-message-queues">Manage message queues</a> for more information.</p>
      </td>
      <td>Not set</td>
    </tr>
    <tr>
      <td><code>QUEUE_CONFIGURATION</code></td>
      <td>
        <p>By default, the deployment process overwrites all settings in the <code>env.php</code> file. Use this environment variable to retain customized AMQP service settings between deployments.</p>
        <p>This is available in 2.1.4 and later.</p>
        <p>You must set the variable value using JSON. Refer to <a href="{{page.baseurl}}cloud/env/working-with-variables.html#queue">Connect to an existing AMQP-based service</a> for more information.</p>
      </td>
      <td>Not set</td>
    </tr>
    <tr>
      <td><code>SEARCH_CONFIGURATION</code></td>
      <td>
        <p>By default, the deployment process overwrites all settings in the <code>env.php</code> file. Use this environment variable to retain customized search service settings between deployments.</p>
        <p>This is available in 2.1.4 and later.</p>
        <p>You must set the variable value using JSON. Refer to <a href="{{page.baseurl}}cloud/env/working-with-variables.html#search">Connect to an existing search service</a> for more information.</p>
      </td>
      <td>not set</td>
    </tr>
    <tr>
      <td><code>CACHE_CONFIGURATION</code></td>
      <td>
        <p>Use to configure Redis page and default caching. Set the variable value using JSON. By default, the deployment process overwrites all settings in the <code>env.php</code> file. </p>
        <p>This is available in Magento version 2.1 and later.</p>
        <p>Refer to <a href="{{page.baseurl}}cloud/env/working-with-variables.html#redis">Configure Redis</a> for more information.</p>
      </td>
      <td>not set</td>
    </tr>
    <tr>
      <td><code>SESSION_CONFIGURATION</code></td>
      <td>
        <p>Use to configure Redis session storage. Set the variable value using JSON. By default, the deployment process overwrites all settings in the <code>env.php</code> file. </p>
        <p>This is available in Magento version 2.1 and later.</p>
        <p>Refer to <a href="{{page.baseurl}}cloud/env/working-with-variables.html#redis">Configure Redis</a> for more information.</p>
      </td>
      <td>Not set</td>
    </tr>
    <tr>
      <td><code>UPDATE_URLS</code></td>
      <td>
        <p>On deployment, replace Magento base URLs in the database with project URLs. This is useful for local development, where base URLs are set up for your local environment. When you deploy to a Cloud environment, we change the URLs so you can access your storefront and Magento Admin using project URLs.</p>
        <p>You should set this variable to <code>disabled</code> <em>only</em> in Staging or Production environments, where the base URLs cannot change. For Pro, we already set this to <code>disabled</code> for you.</p>
        <p>This is available in 2.1.2 and later.</p>
      </td>
      <td>enabled</td>
    </tr>
    <tr>
      <td><code>CLEAN_STATIC_FILES</code></td>
      <td>
        <p>The default value, <code>enabled</code>, cleans <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview">generated static view files</a> when you perform an action like enabling or disabling a component. We recommend the default value in development. The supported values are <code>enabled</code> and <code>disabled</code>.</p>
        <p>Failure to clear static view files might result in issues if there are multiple files with the same name and you do not clear all of them.</p>
        <p>Because of <a href="{{page.baseurl}}howdoi/clean_static_cache.html">static file fallback</a> rules, if you do not clear static files and there is more than one file named <code>logo.gif</code> that are different, fallback might cause the wrong file to display.</p>
        <p>This is available in all versions.</p>
      </td>
      <td>enabled</td>
    </tr>
    <tr>
      <td><code>STATIC_CONTENT_EXCLUDE_THEMES</code></td>
      <td>Themes can include numerous files. If you want to skip copying over theme files during deployment, you can set this environment variable. For example, the Luma theme is included with {{site.data.var.ece}}. You may not need to constantly deploy this theme with your code updates and deployments. To exclude, you would add the theme, for example: <code>Magento/luma</code>. This is available in all versions.</td>
      <td>Not set</td>
    </tr>
    <tr>
      <td><code>ADMIN_LOCALE</code></td>
      <td>Specifies the default locale used by the Magento Admin. This is available in all versions.</td>
      <td>en_US</td>
    </tr>
    <tr>
      <td><code>STATIC_CONTENT_THREADS</code></td>
      <td>
        <p>Sets the number of threads for processing and deploying static content files. The higher amount of threads increasing the amount of files processed during the deployment. The lower the number of threads, the slower static files are processed increasing deployment time.</p>
        <p>For Starter plan environments and Pro Integration environments, the threads value is 1. This amount is fine for these environments. For Pro Staging and Production environments, the default threads is 3 to increase the speed of processing static content, especially for Production with three nodes and GlusterFS.</p>
        <p>To further reduce deployment time, we recommend using <a href="{{page.baseurl}}cloud/live/sens-data-over.html">Configuration Management</a> with the <code>scd-dump</code> command to move static deployment into the build phase.</p>
        <p>This is available in all versions.</p>
      </td>
      <td>1 for Starter environments and Pro Integration environments<br>
      3 for Pro Staging and Production environments</td>
    </tr>
    <tr>
      <td><code>DO_DEPLOY_STATIC_CONTENT</code></td>
      <td>You can forcefully enable or disable the deployment of static content during the deploy phase with this variable. If you already completed static content deployment in the build phase, and this variable is enabled, it will be overridden to ensure static content deployment occurs only once. We strongly recommend always deploying static content during the build phase. This is available in all versions.</td>
      <td>disabled</td>
    </tr>
    <tr>
      <td><code>MAGENTO_CLOUD_MODE</code></td>
      <td>We manage the values and setting of this variable. It identifies the type of environment as part of Integration, Staging, or Production. For example, for Pro, this value may be <code>enterprise</code> indicating Staging and Production. For <code>enterprise</code>, it sets the <code>STATIC_CONTENT_THREADS</code> to 3, otherwise sets it to 1 for Integration. This is highly important for Pro plans Production, which has a three node high availability architecture with a very different technology stack. This is available in all versions.</td>
      <td>enterprise</td>
    </tr>
    <tr>
      <td><code>VERBOSE_COMMANDS</code></td>
      <td>
        Enables or disables the <a href="https://symfony.com/doc/current/console/verbosity.html">Symfony</a> debug verbosity level for your logs. Be aware, if you enable this verbosity, the logs will be deeply detailed. This is available in all versions.
      </td>
      <td>disabled</td>
    </tr>
    <tr>
      <td><code>ADMIN_USERNAME</code></td>
      <td>User name for a Magento administrative user. This user is an administrator and can create other users, including other administrative users. This is available in all versions.</td>
      <td>admin</td>
    </tr>
    <tr>
      <td><code>ADMIN_FIRSTNAME</code></td>
      <td>Administrative user's first name. This is available in all versions.</td>
      <td>Not set, example: John</td>
    </tr>
    <tr>
      <td><code>ADMIN_LASTNAME</code></td>
      <td>Administrative user's last name. This is available in all versions.</td>
      <td>Not set, example: Doe</td>
    </tr>
    <tr>
      <td><code>ADMIN_EMAIL</code></td>
      <td>
        Administrative user's e-mail address. This value is required for upgrading and patching {{site.data.var.ece}} and is used to send password reset emails. To set, see <a href="{{page.baseurl}}cloud/before/before-project-owner.html#variables">Add admin variables for Admin access</a>.
      </td>
      <td>Not set</td>
    </tr>
    <tr>
      <td><code>ADMIN_PASSWORD</code></td>
      <td>Administrative user's password. Initially, we generate a random password and provide an email directing the Project Owner to reset the password. You should immediately change this password.</td>
      <td>Not set</td>
    </tr>
    <tr>
      <td><code>ADMIN_URL</code></td>
      <td>Enter the relative URL by which to access the Magento Admin. For security reasons, we recommend you choose a value other than <code>admin</code> or <code>backend</code> or another term that is easy to guess. If you set this value through a variable and the Admin Panel in Starter environments, the variable overrides the Admin Panel (or database value). For Pro, the Admin Panel (database value) overrides the variable. The values are also managed by <code>UPDATE_URLS</code>. This is available in all versions.</td>
      <td>admin</td>
    </tr>
    <tr>
      <td><code>GENERATED_CODE_SYMLINK</code></td>
      <td>
        <p>This variable enables the <code>var/generation</code> and <code>var/di</code> generated folders to be writable. Available in versions 2.1.X.</p>
      </td>
      <td>disabled</td>
    </tr>
    <tr>
      <td><code>STATIC_CONTENT_SYMLINK</code></td>
      <td>Generates symlinks for static content. By default, symlinks are always generated unless you disable it using this environment variable. This setting is vital for Pro Production environment for the three node cluster. If disabled, every file will be copied during deployment without automated symlinks generated. If disabled, this will increase deployment time. This is available in all versions.</td>
      <td>enabled</td>
    </tr>
    <tr>
      <td><code>SCD_COMPRESSION_LEVEL</code></td>
      <td>
        Specifies which <a href="https://www.gnu.org/software/gzip" target="\_blank">gzip</a> compression level (<code>0</code> - <code>9</code>) to use when compressing static content; <code>0</code> disables compression.
      </td>
      <td><code>6</code></td>
    </tr>
    <tr>
      <td><code>SCD_STRATEGY</code></td>
      <td>
        <p>Deploys all static view files for all packages.</p>
        <p>You cannot modify the strategy in 2.1.x.</p>
      </td>
      <td><code>standard</code></td>
    </tr>
  </tbody>
</table>

For information on the build and deploy process, see [Deployment process]({{page.baseurl}}cloud/reference/discover-deploy.html).

## Add environment variables {#addvariables}
You can add environment variables for active environments through the Project Web Interface and through the Magento Cloud CLI. To create variables through the Project Web Interface, see [Set environment variables]({{page.baseurl}}cloud/project/project-webint-basic.html#project-conf-env-var).

<div class="bs-callout bs-callout-warning" markdown="1">
Every time you add or modify a variable using the web interface or the CLI, the branch will redeploy automatically.
</div>

To create a variable using the command line:

1.  Login to the Magento Cloud CLI. Enter the command `magento-cloud login` and provide your credentials.
1.  To set a variable for the project, use the command `magento-cloud project:variable:set <name> <value>`. The alias for this command is also `pvset`. For example, `magento-cloud pvset example 123` creates a variable example with a string value of 123 for the project.
1.  After creating these variables, you can list all project variables with the command `magento-cloud project:variable:get` or `magento-cloud pvget`.
1.  To set a variable for the branch, use the command `magento-cloud variable:set <name> <value>`. The alias for this command is also `vset`. For example, `magento-cloud vset example2 abc` creates a variable example2 with a string value of abc for the branch.
1.  After creating these variables, you can list all project variables with the command `magento-cloud variable:get` or `magento-cloud vget`.

## Troubleshooting {#cloud-env-vars-tshoot}
In the event something goes wrong and you can not access your environment after it deploys, try the following:

-   [SSH to the environment]({{page.baseurl}}cloud/env/environments-start.html#env-start-tunn) and make sure [services]({{page.baseurl}}cloud/env/environments-start.html#tunnel-services) are running.
-   Restore your snapshot:

        magento-cloud snapshot:list
        magento-cloud snapshot:restore <snapshot>

For more information on snapshots, see [Snapshots and backup management]({{page.baseurl}}cloud/project/project-webint-snap.html).
