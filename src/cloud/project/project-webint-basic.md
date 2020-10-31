---
group: cloud-guide
subgroup: 100_project
title: Configure your project
menu_title: Configure your project
menu_order: 5
menu_node:
functional_areas:
  - Cloud
  - Configuration
---

The {{site.data.var.ece}} [Project Web Interface](https://account.magento.com/customer/account/login/) enables you to do the following for all Starter and Pro environments:

-  [Access projects](#project-access)
-  [Add users and manage access]({{ site.baseurl }}/cloud/project/user-admin.html)
-  [Manage Git branches]({{ site.baseurl }}/cloud/project/project-webint-branch.html)

As you make changes to these settings, the branch redeploys to the environment. You can make these setting changes for all Starter and Pro environments.

## Access your project and environments {#project-access}

The Project Web Interface provides several ways to access your project and environments:

-  Storefront URL for each active environment
-  Secure Shell (SSH) link for SSH access via terminal application
-  Clone the project using the Magento Cloud CLI or Git

To access projects and environments through the Project Web Interface:

1. [Log in to your project](https://account.magento.com/customer/account/login/).
1. Click **Access Project** for a list of URLs and SSH.

   ![Access your project by URL or SSH]({{ site.baseurl }}/common/images/cloud/cloud_project-access.png){:width="600px"}

For more information about using SSH, see [SSH to an environment]({{ site.baseurl }}/cloud/env/environments-ssh.html#magento-cli). To clone the project using either the {{site.data.var.ece}} CLI or Git, use the links in the field under the branch name.

The following figure shows an example.

![Clone the project]({{ site.baseurl }}/common/images/cloud/cloud_project-clone.png){:width="600px"}

Click either **CLI** or **Git** to display the appropriate clone command. Use the ![Copy to clipboard]({{ site.baseurl }}/common/images/cloud/cloud_copy-to-clipboard.png) (Copy to clipboard) button to copy the command to the clipboard.

## Configure environment settings {#project-conf-env-set}

You can set the following configuration options for each environment:

<table>
   <tr>
      <th style="width= 300px;">Option</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>Environment status</td>
      <td>An environment can be either <em>active</em> or <em>inactive</em>. You'll do most of your work in an active environment. After merging an environment with its parent, you can optionally delete the environment, making it inactive. To delete an environment, click <strong>Delete</strong>. You can active an inactive environment later.</td>
   </tr>
   <tr>
      <td>Outgoing emails</td>
      <td>Setting to <strong>On</strong> means that code in your environment can send and receive e-mails (for example, using PHP <code>mail()</code> function. </td>
   </tr>
   <tr>
      <td>HTTP access control</td>
      <td>Setting to <strong>On</strong> enables you to configure security for the project's Web Interface using a login and also IP address access control.</td>
   </tr>
</table>

### Configure emails for testing {#email}

One of these environment variables enables or disables outgoing emails for the environment. If you wanted to test email notifications for the environment, you need to set this option On.

1. [Access your project](#project-access) and select a specific environment.
1. Select the Settings tab.
1. For the **Outgoing emails** option, select the toggle to On.

   ![Set outgoing emails]({{ site.baseurl }}/common/images/cloud/cloud_project-conf-env.png)

Configure your email notifications, services, and more as needed through the Magento Admin and test emails.

## Set environment and project variables {#project-conf-env-var}

You can set project wide and environment specific variables through the Project Web Interface. Variables can be either text or JSON format. For more information, see [Environment variables]({{ site.baseurl }}/cloud/env/variables-intro.html).

For an example of variables, we walk you through creating Magento Admin variables through Onboarding and project creation tasks. You may want to add _environment variables_ for sensitive data like payment method information. _Project variables_ are set across all branches and environments.

To view or edit environment variables, you must have at minimum the project reader role with [environment admin]({{ site.baseurl }}/cloud/project/user-admin.html) privileges.

{% include cloud/wings-variables.md %}

### Environment variable {#env}

To set environment specific variables in the Project Web Interface:

1. [Access your project](#project-access) and select a specific environment.
1. Select the Variables tab.
1. Click **Add Variable**.
1. In the **Name** field, enter a variable name. For example, to set the Magento Admin default account password, enter `ADMIN_PASSWORD`.
1. In the **Value** field, enter the value for the variable. For example, enter a valid email address accessible for reset email notifications.

   ![Set environment variables]({{ site.baseurl }}/common/images/cloud/cloud_env-var.png)

1. As needed, select options for **JSON value**, **Visible during build**, and **Visible during runtime**. If you do not have Super User access, you may only see the JSON value option.
1. Click **Add Variable**. After you add the variable, the environment will deploy. Wait until deployment completes before more edits.

{:.bs-callout-warning}
If you are attempting to [override Magento configuration settings]({{ site.baseurl }}
), you must prepend `env:` to the variable name. For example:
![Environment variable example]({{ site.baseurl }}/common/images/cloud/cloud_env_var_example.png)

### Project variable {#project}

To set project variables in the Project Web Interface:

1. [Access your project](#project-access) and select a specific environment.
1. Select the Variables tab.
1. Click **Add Variable**.
1. In the **Name** field, enter a variable name. For example, to set the Magento Admin email for the default account, enter `ADMIN_EMAIL`.
1. In the **Value** field, enter the value for the variable. For example, enter a valid email address accessible for reset email notifications.

   ![Set project variables]({{ site.baseurl }}/common/images/cloud/cloud_project_variable.png)

1. As needed, select options for **JSON value**, **Visible during build**, and **Visible during runtime**. If you do not have Super User access, you may only see the JSON value option.
1. Click **Add Variable**. After you add the variable, the environment will deploy. Wait until deployment completes before more edits.

## Configure routes {#project-conf-env-route}

Routes allow you to set redirects or upstream settings for applications for your specific environment. For full details on routes, see [routes.yaml]({{ site.baseurl }}/cloud/project/routes.html). These routes (or URLs) are used to access your Magento storefront.

1. [Access your project](#project-access) and select a specific environment.
1. Select the Routes tab.
1. Select **Add Route**.
1. Enter a URL. You can use `{default}` in the URL, which is a placeholder for the default domain.
1. Select a **Type**: Upstream for applications or Redirect.
1. To configure an Upstream route:

   1. Enter the **Upstream** route.
   1. Use the toggle to enable or disable the **Cache** for the route.
   1. Enter the cookies to list: No cookies, All cookies, or Specify a specific cookie. You can enter multiple specific cookies.
   1. To add Headers to an allowlist, select Default Headers or Specify a header. You can enter multiple headers.
   1. Use the toggle to enable or disable the Server-Side Includes (**SSI**).

1. To configure a Redirect, enter a URL to **Redirect to**. You can use `{default}` in the URL, which is a placeholder for the default domain.
1. Click **Add Route** to save. The setting is saved and deployed to the environment.

   ![Configure a route]({{ site.baseurl }}/common/images/cloud/cloud_routes.png)

## View environment history {#project-conf-hist}

An environment's history includes:

-  Initial creation
-  Snapshots
-  Syncs and merges
-  Code pushes

To view the history for an environment, log in to your project and select the environment. The page displays a general history of actions completed on the page. For a detailed list of completed actions during build and deployment, we recommend reviewing logs directly on the servers. See [View logs]({{ site.baseurl }}/cloud/project/log-locations.html).

The following figure shows a sample history.

![Sample environment history]({{ site.baseurl }}/common/images/cloud/cloud_environment-history.png)

The history shows, from oldest to newest:

-  Environment branched from `FeatureX`
-  Environment synced with the parent
-  Environment snapshot created

We recommend [creating a snapshot]({{ site.baseurl }}/cloud/project/project-webint-snap.html) before you make any code changes.

-  Environment variable added
-  Environment snapshot created
