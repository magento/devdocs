---
layout: default
group: cloud
title: Application variables
version: 2.2
github_link: cloud/env/environment-vars_magento.md
functional_areas:
  - Cloud
  - Configuration
---

The following table lists application variables that you can override using environment variables:

<table>
  <thead>
    <tr>
      <th style="width: 165px;">Variable</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ADMIN_FIRSTNAME</code></td>
      <td>Administrative user's first name.</td>
    </tr>
    <tr>
      <td><code>ADMIN_LASTNAME</code></td>
      <td>Administrative user's last name.</td>
    </tr>
    <tr>
      <td><code>ADMIN_EMAIL</code></td>
      <td>Administrative user's e-mail address. This value is required for upgrading and patching {{site.data.var.ece}} and is used to send password reset emails. To set, see <a href="{{page.baseurl}}cloud/before/before-project-owner.html#variables">Add admin variables for Admin access</a>.</td>
    </tr>
    <tr>
      <td><code>ADMIN_LOCALE</code></td>
      <td>Default—<code>en_US</code><br>Specifies the default locale used by the Magento Admin.</td>
    </tr>
    <tr>
      <td><code>ADMIN_PASSWORD</code></td>
      <td>Administrative user's password. Initially, we generate a random password and provide an email directing the Project Owner to reset the password. You should immediately change this password.</td>
    </tr>
    <tr>
      <td><code>ADMIN_URL</code></td>
      <td>Enter the relative URL by which to access the Magento Admin. For security reasons, we recommend you choose a value other than <code>admin</code> or <code>backend</code> or another term that is easy to guess.</td>
    </tr>
    <tr>
      <td><code>ADMIN_USERNAME</code></td>
      <td>User name for a Magento administrative user. This user is an administrator and can create other users, including other administrative users.</td>
    </tr>
  </tbody>
</table>

<div class="bs-callout bs-callout-tip" markdown="1">
Use one of the following methods to manage variables:

-   [**Configuration file**](http://devdocs.magento.com/guides/v2.2/cloud/project/magento-env-yaml.html)—All Starter and Pro environments
-   [**Project Web Interface**]({{page.baseurl}}cloud/project/project-webint-basic.html#project-conf-env-var)—All Starter and Pro environments created after October 23, 2017 or [updated]({{page.baseurl}}cloud/trouble/pro-env-management.html)
-   [**Magento Cloud CLI tool**](#addvariables)—All Starter and Pro Integration environments
</div>

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
