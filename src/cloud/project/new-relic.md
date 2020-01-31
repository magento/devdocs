---
group: cloud-guide
title: New Relic services
functional_areas:
  - Cloud
  - Integration
  - Setup
  - Services
---

[New Relic for application performance management (APM)](https://docs.newrelic.com/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm) is a software analytics product that helps you analyze and improve application interactions. New Relic APM is available to all {{site.data.var.ece}} accounts and provides the following features:

-  **Focus on specific transactions**—Actively mark and monitor key customer actions in your site, such as adding to the cart, checking out, or processing a payment.
-  **Database query monitoring**—Locate and monitor database queries affecting performance.
-  **App Map**—View all application dependencies within your Magento site, extensions, and external services.
-  **Apdex scores**—Evaluate performance and create alerts that identify issues and notify you when they occur, such as site performance affected by a flash sale or web event. [Apdex score](https://docs.newrelic.com/docs/apm/new-relic-apm/apdex/apdex-measure-user-satisfaction).
-  **Adobe-generated alert policies**–Monitor application and infrastructure performance using alert policies that monitor key performance indicators like apdex score, disk space, and error rate based on industry best practices. See [Monitor performance using alerts](#monitor-performance-with-alert-policies).

Your {{site.data.var.ece}} account includes the software for the New Relic APM service along with a license key. You do not need to purchase or install any additional software.

On {{site.data.var.ece}} Pro accounts, the Production environment also includes the [New Relic Infrastructure (NRI)](https://newrelic.com/products/infrastructure) service, which automatically connects with the application data and performance analytics to provide dynamic server monitoring.

{:.bs-callout-info}
For Pro accounts, if New Relic APM is not installed on the Staging and Production environments or New Relic Infrastructure is not available in the Production environment, submit a [support ticket]({{ site.baseurl }}/cloud/trouble/trouble.html) to request installation.

## Manage your New Relic account

When Magento provisions your {{site.data.var.ece}} project, the Project Owner receives an email from New Relic with credentials and instructions for accessing the account. If you did not receive the email, use the Project Owner email address to [reset the New Relic password](https://rpm.newrelic.com/forgot_password).

An account can have only one person assigned to the Owner role. If you must change the account owner, assign the Admin role to the current Owner, then assign the Owner role to another user. See [Update the account owner](https://docs.newrelic.com/docs/accounts/accounts/roles-permissions/change-account-owner) in the New Relic documentation for instructions.

{:.bs-callout-tip}
Before assigning the Owner role to a user, verify that the user exists on the New Relic account for {{site.data.var.ece}}. If you need to add the user to that account and an existing account Owner or Admin cannot help, any Magento user with access to the [Magento Partnership Owner Account][3] for New Relic can add users on behalf of the customer.

We recommend adding at least one Admin user to your New Relic account to manage all access, integrations, and tool usage. {{site.data.var.ece}} Project Owners and Admin users can add and remove users from the New Relic account.

{:.procedure}
To add a user:

1. Using your Project Owner New Relic credentials, [log in to New Relic](https://login.newrelic.com/login).

1. From the [account dropdown](https://docs.newrelic.com/docs/using-new-relic/welcome-new-relic/getting-started/glossary#account-dropdown) menu, select **Account settings** > **Account** > **Users and roles**.

1. Click **New user**.

1. Add the name and email address for the account.

1. Assign the user role: *Admin*, *User*, or *Restricted*.

1. Click **Add user**.

1. Ask the new user to check their email for a New Relic notification with account information.

## Set up the New Relic service

Pro environments are preconfigured to use New Relic services.

For Starter environments, you must check the `.magento.app.yaml` file to verify that the `runtime` section includes the New Relic extension. If the extension has not been configured, add the following:

> .magento.app.yaml

```yaml
runtime:
    extensions:
        - newrelic
```

## Connect to New Relic

To connect a Cloud environment to New Relic, you must add the New Relic license key to the environment.

-  For Pro accounts, Magento adds the license key to your Cloud environments during the provisioning process. You can log in to your New Relic account and verify connectivity.

-  For Starter accounts, you have a New Relic license key that supports up to three environments. You must add the New Relic license key to your Starter Project environments. We recommend adding the key to the Staging and Production (master) environments, and one other environment of your choice.  If you have more than three active environments using the same New Relic license key, you must remove the license variable from an existing environment.

{:.procedure}
To find your New Relic license key:

1. Open your [account page](https://accounts.magento.cloud/user/).

1. On the _Projects_ tab, find your project.

1. Click **View Details** to see the project infrastructure information.

1. Expand the **NewRelic Service** section to view the license key.

   ![Cloud project details page]({{ site.baseurl }}/common/images/cloud/cloud-project-details-new-relic.png){:width="650px"}

1. Copy the license key.

{:.procedure}
To add a license key to an environment:

1. Change to the environment that needs the license key. For Starter accounts, you need to use the license key to set a variable in the environment.

1. Set the variable.

   ```bash
   magento-cloud variable:set php:newrelic.license <newrelic-license-key>
   ```

   {:.bs-callout-info}
   Adding a variable to an environment triggers a redeployment to update the environment variables and values. See [Working with variables]({{ site.baseurl }}/cloud/env/working-with-variables.html).

1. [Log in to New Relic](https://login.newrelic.com/login) to verify that it is receiving data.

{:.procedure}
To remove a license key from an environment:

1. List environment variables.

   ```bash
   magento-cloud vget
   ```

   Response:

   ```terminal
   +----------------------+------------+------------------------+
   | Name                 | Level      | Value                  |
   +----------------------+------------+------------------------+
   | php:newrelic.license | environment| <newrelic-license-key> |
   +----------------------+------------+------------------------+
   ```
   {:.no-copy}

   {:.bs-callout-warning}
   If you added the license key as a _project_ variable, you must remove that project-level variable. A project variable adds the license to every environment branch created, which can consume or exceed the license limit. To list project variables: `magento-cloud pvget`

1. Delete a variable.

   ```bash
   magento-cloud variable:delete php:newrelic.license
   ```

   {:.bs-callout-info}
   Removing a variable from an environment triggers a redeployment to update the environment variables and values. See [Working with variables]({{ site.baseurl }}/cloud/env/working-with-variables.html).

## Investigate performance

New Relic connects and monitors your infrastructure and application using PHP agents. After a Cloud environment [connects to New Relic](#connect-to-new-relic), you can review the data collected by the agent by logging into your New Relic account.

On the APM Applications page, use the [New Relic APM Overview](https://docs.newrelic.com/docs/apm/applications-menu/monitoring/apm-overview-page-view-transaction-apdex-usage-data) to view information about your application.

 ![Cloud project New Relic overview page]({{ site.baseurl }}/common/images/cloud/cloud-newrelic-dashboard-basic.png){:width="650px"}

From this view, you can track and find the following types of information:

-  Applications and transactions encountering slow responses or bottlenecks
-  Customer comments about issues with your site
-  Applications with high transaction time
-  Traffic to transaction time

We recommend reviewing tracked data:

-  **Most time consuming**—Determine time consumption by tracking requests in parallel. For example, you may have the highest transaction time spent in product and category views. If a customer account page suddenly ranks very high in time consumption, your application might be affected by a call or query dragging performance.

-  **Highest throughput**—Identify pages hit the most based on the size and frequency of bytes transmitted.

All collected data details the time spent on an action transmitting data, queries, or _Redis_ data. If queries cause issues, New Relic provides information to track and respond to those issues.

{:.bs-callout-info}
You can learn more about using the New Relic APM and Infrastructure agents to collect and analyze application data from the [New Relic APM](https://docs.newrelic.com/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm) and [New Relic Infrastructure](https://docs.newrelic.com/docs/infrastructure/new-relic-infrastructure/getting-started/introduction-new-relic-infrastructure) documentation.

## Monitor performance with alert policies

Adobe provides a set of New Relic alert policies for {{ site.data.var.ece }} Pro and Starter Production environments to track the following key performance metrics:

-  [Apdex score](https://docs.newrelic.com/docs/apm/new-relic-apm/apdex/apdex-measure-user-satisfaction)
-  error rate
-  disk space (available on Pro Production environments only)

Based on industry best practices, these policies set thresholds for warning and critical conditions that affect performance. When your site experiences an infrastructure or application issue that triggers an alert threshold, New Relic sends alert notifications so that you can proactively address the issue. To use these policies, you must configure notification channels to receive the alert messages.

{:.bs-callout-info}
For Pro Staging and Integration environments and Starter environments, use [Health notifications]({{ site.baseurl }}/cloud/integrations/health-notifications.html) to monitor disk space.

{:.procedure}
Prerequisites

-  Credentials to log in to the [New Relic account](#manage-your-new-relic-account) for your Cloud project.
-  Verify that your Cloud environment is [connected to New Relic](#connect-to-new-relic).

{:.procedure}
To review Adobe-generated alert policies:

1. Use your Project Owner New Relic credentials to [log in to your New Relic account](https://login.newrelic.com/login).

1. From the navigation menu, select  **Alerts**  > **Alert Policies**.

1. In the Search Policies field, search for _Adobe Generated Policy_.

1. You should see a set of policies like the ones below:

   ![Generated alert policies]({{ site.baseurl }}/common/images/cloud/cloud-newrelic-alert-policies.png){:width="650px"}

   {:.bs-callout-info}
   If you do not see these alert policies, submit a Magento support ticket. Include your project ID in the ticket. These policies are available on Pro and Starter Production environments only.

1. Click an alert policy name to review the threshold conditions that trigger alerts.

### Configure notification channels

To use the Adobe-generated alert policies to monitor your Production sites, you must configure notification channels and map them to alert policies. Notifications about performance issues go to all channels associated with an alert policy when conditions on the application or infrastructure trigger an alert. You also receive notifications when an issue is acknowledged and closed.

New Relic provides templates for configuring different types of notification channels including email, Slack, PagerDuty, webhooks, and more. See the [Instructions for specific notification channels](https://docs.newrelic.com/docs/alerts/new-relic-alerts/managing-notification-channels/notification-channels-control-where-send-alerts#channel-types) in the New Relic documentation to review the prerequisites for using each type.

The following instructions describe the high level steps to configure a notification channel to receive alert messages triggered by an alert policy.

{:.procedure}
To configure a notification channel:

1. Choose a notification channel type, and complete any [prerequisite steps](https://docs.newrelic.com/docs/alerts/new-relic-alerts/managing-notification-channels/notification-channels-control-where-send-alerts#channel-types) required to connect the channel with the New Relic service.

1. [Log in to your New Relic account](https://login.newrelic.com/login).

1. Navigate to the _New Relic APM_ page.

1. On the _New Relic APM Applications_ page, open the application for your Cloud environment.

1. On the _Alerts_ page, click **New notification channel**.

   ![New Relic notification channel]({{ site.baseurl }}/common/images/cloud/cloud-new-relic-notification-channels.png){:width="650px"}

1. On the _Create a new notification channel_ page, choose the channel type from the **Select a channel type** dropdown menu.

1. Configure the settings for the channel, and then click **Create channel**.

1. On the _Channel details_ page, click **Send a test notification** to verify that the channel works.

1. To specify the alerts to send to the channel, click the **Alert policies** tab.

1. On the _Alert policies_ page, click **Add alert** to select and add an alert policy.

See the following New Relic documentation topics for additional information:

-  [Configure notification channels using the New Relic Alerts user interface](https://docs.newrelic.com/docs/alerts/new-relic-alerts/managing-notification-channels/notification-channels-control-where-send-alerts)

-  [Configure notification channels using the New Relic API](https://docs.newrelic.com/docs/alerts/rest-api-alerts/new-relic-alerts-rest-api/rest-api-calls-new-relic-alerts#channels)

{:.bs-callout-warning}
The Adobe-generated policies have default notification channels configured to notify Magento teams that support {{ site.data.var.ece }} customers.  Do not modify the configuration for these default channels, and do not remove any alert policies assigned to them.

### Create Alert Policies

Do not modify the Adobe-generated alert policies. We will automatically regenerate and improve them over time, which will overwrite any customizations you make.

If you want to modify the thresholds of an alert condition, create a new alert policy. Then, copy the alert condition to the new policy. See [Update policies or conditions](https://docs.newrelic.com/docs/alerts/new-relic-alerts/configuring-alert-policies/update-or-disable-policies-conditions) in the New Relic documentation.

{:.bs-callout-tip}
See [Alerts concepts and workflow](https://docs.newrelic.com/docs/alerts/new-relic-alerts/getting-started/new-relic-alerts-concepts-workflow) in the New Relic documentation for more detailed information about Alerts, alert policies, and notification channels.

[1]: https://docs.newrelic.com/docs/accounts/accounts/roles-permissions/change-account-owner
[2]: https://docs.newrelic.com/docs/accounts/accounts/roles-permissions/add-update-users#adding_users
[3]: https://account.newrelic.com/accounts/1311131/users
