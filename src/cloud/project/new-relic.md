---
group: cloud-guide
title: New Relic services
functional_areas:
  - Cloud
  - Integration
  - Setup
  - Services
---

{{ site.data.var.ece }} projects include access to the following New Relic services to help manage, monitor, and troubleshoot your applications and infrastructure by collecting, viewing, and analyzing data from your {{ site.data.var.ece }} project.

-  [New Relic APM](#new-relic-apm) (Pro and Starter)
-  [New Relic Infrastructure](#new-relic-infrastructure) (Pro, Production environment only)
-  [New Relic Logs](#new-relic-logs) (Pro, Production and Staging environments)

## New Relic APM

[New Relic for application performance management (APM)] is a software analytics product that helps you analyze and improve application interactions. New Relic APM is available to all {{site.data.var.ece}} projects and provides the following features:

-  **Focus on specific transactions**—Actively mark and monitor key customer actions in your site, such as adding to the cart, checking out, or processing a payment.
-  **Database query monitoring**—Locate and monitor database queries affecting performance.
-  **App Map**—View all application dependencies within your Magento site, extensions, and external services.
-  **Apdex scores**—Evaluate performance and create alerts that identify issues and notify you when they occur, such as site performance affected by a flash sale or web event. See [Apdex score].
-  **Managed Alerts for Magento Commerce**–Use this New Relic alert policy to monitor application and infrastructure performance based on industry best practices. See [Monitor performance with the Managed Alerts for {{ site.data.var.ee }} alert policy](#monitor-performance-with-managed-alerts).

Your {{site.data.var.ece}} project includes the software for the New Relic APM service along with a license key. You do not need to purchase or install any additional software.

## New Relic Infrastructure

{{site.data.var.ece}} Pro projects include the [New Relic Infrastructure (NRI)][New Relic infrastructure] service, which automatically connects with the application data and performance analytics to provide dynamic server monitoring. This service is available on Production and Staging environments.

{:.bs-callout-info}
For Pro accounts, if New Relic APM is not installed on the Staging and Production environments or New Relic Infrastructure is not available in the Production environment, [submit a Magento Support ticket] to request installation.

## New Relic Logs

{{site.data.var.ece}} Pro projects include the [New Relic Logs][] service on both Production and Staging environments. The service is pre-configured to aggregate all log data from your Staging and Production environments and display it in a centralized log management dashboard.

The aggregated data includes information from the following logs:

-  All {{site.data.var.ct}} and Magento application logs from the `~/var/log` directory
-  Logs for cloud services from the `var/log/platform/<project-ID>` directory
-  Fastly CDN and WAF logs

As soon as your project is connected to New Relic, you can use the New Relic Logs service to complete tasks like the following:

-  Use [New Relic queries][New Relic query syntax for logs] to search aggregated log data
-  Visualize log data through the New Relic Logs application
-  Create custom charts, dashboards, and alerts
-  Troubleshoot performance issues from a single dashboard

See [View and analyze logs](#view-and-analyze-log-data).

## Manage New Relic account

When Magento provisions your {{site.data.var.ece}} project, the License Owner receives an email from New Relic with credentials and instructions for accessing the New Relic account. If you did not receive the email, use the License Owner email address to [reset the New Relic password].

A New Relic account can have only one person assigned to the Owner role. If you must change the account owner, assign the Admin role to the current Owner, then assign the Owner role to another user. See [Update the account owner] in the New Relic documentation for instructions.

{:.bs-callout-tip}
Before assigning the Owner role to a user, verify that the user exists on the New Relic account for {{site.data.var.ece}}. If you need to add the user to that account and an existing account Owner or Admin cannot help, any Magento user with access to the [Magento Partnership Owner Account] for New Relic can add users on behalf of the customer.

We recommend adding at least one Admin user to your New Relic account to manage all access, integrations, and tool usage. {{site.data.var.ece}} Project Owners and Admin users can add and remove users from the New Relic account.

{:.procedure}
To add a user:

1. Using your License Owner New Relic credentials, [log in to New Relic][New Relic login].

1. From the [account dropdown] menu, select **Account settings** > **Account** > **Users and roles**.

1. Click **New user**.

1. Add the name and email address for the account.

1. Assign the user role: *Admin*, *User*, or *Restricted*.

1. Click **Add user**.

1. Ask the new user to check their email for a New Relic notification with account information.

## Set up New Relic

Pro environments are preconfigured to use New Relic services.

For Starter environments, you must check the `.magento.app.yaml` file to verify that the `runtime` section includes the New Relic extension. If the extension has not been configured, add the following:

> `.magento.app.yaml`

```yaml
runtime:
    extensions:
        - newrelic
```

{:.bs-callout-warning}
If you upgrade the PHP version on your {{site.data.var.ece}} project, you must [submit a Magento Support ticket] to update the New Relic service.

## Connect to New Relic

To connect a Cloud environment to New Relic, add the New Relic license key to the environment.

-  For Pro accounts, Magento adds the license key to your Cloud environments during the provisioning process. You can log in to your New Relic account to verify connectivity between your Magento Commerce site and New Relic.

-  For Starter accounts, you have a New Relic license key that supports up to three environments. You must add the key to your environment configurations manually. The license key is not pre-provisioned on Starter environments.

### Configure New Relic for Starter environments

For Starter environments, enable the New Relic integration by adding the New Relic license key to the environment configuration. We recommend adding the key to the Staging and Production (master) environments and one other environment of your choice. Only the New Relic license key is required for configuration. You can find information about additional configuration options in the [New Relic reporting] topic in the _Magento Commerce User Guide_.

{:.bs-callout-warning}
Updating the environment configuration triggers a redeployment, which takes your site offline until deployment completes. For Production environments, we recommend completing this work during off-peak hours to avoid service disruptions. See [Working with variables].

**Prerequisites:**

-  Log in credentials for the Magento account page, or for the New Relic account associated with your project
-  [Admin level access]({{site.baseurl}}/cloud/project/user-admin.html) to the Starter environments to configure, or credentials to access the [Magento Admin](https://docs.magento.com/m2/ce/user_guide/system/permissions.html) for the environment.

{:.procedure}
To configure New Relic for Starter environments:

1. Find your New Relic license key from your Magento Cloud account page, or [from your New Relic account page]:

   -  Open your [account page].

   -  On the _Projects_ tab, find your project.

   -  Click **View Details** to see the project infrastructure information.

   -  Expand the **New Relic Service** section to view the license key.

   -  Copy the license key.

1. Add the New Relic license key to an environment using the Magento Cloud CLI, or [add it from the Magento Admin].

   -  Change to the environment that needs the license key.

   -  Set the variable using the following Magento Cloud CLI command:

      ```bash
      magento-cloud variable:set php:newrelic.license <newrelic-license-key>
      ```

1. [Log in to New Relic][New Relic login] to verify that you can view data from the Magento Cloud environment. (See [Investigate performance](#investigate-performance).)

### Remove license key from a Starter environment

If three active Starter environments already use the same New Relic license key, and you want to configure New Relic reporting on a different environment, you must remove the key from one of the configured environments before you can reuse it.

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

1. Delete the license variable.

   ```bash
   magento-cloud variable:delete php:newrelic.license
   ```

## Use New Relic

The following sections provide an overview for using the New Relic services integrated with your {{ site.data.var.ece }} project with a few examples. For more information and training resources, see the [New Relic Help Center][].

### Investigate performance

New Relic connects and monitors your infrastructure and application using PHP agents. After a Cloud environment [connects to New Relic](#connect-to-new-relic), you can log in to your New Relic account to review the data collected by the agent.

On the APM Applications page, use the [New Relic APM Overview] to view information about your application.

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

For details on using this data to troubleshoot Magento performance issues, see [Troubleshoot performance using New Relic][] in the _Magento Help Center_.

{:.bs-callout-info}
You can learn more about using the New Relic APM and Infrastructure agents to collect and analyze application data from the [New Relic APM] and [New Relic Infrastructure][New Relic infrastructure] documentation.

### View and analyze log data

You can use the New Relic Logs application to search across the aggregated log data and troubleshoot application, infrastructure, CDN, and WAF errors. Also, you can connect the log data with other data collected by New Relic APM and Infrastructure services to create charts, dashboards, and alerts to manage Magento application and cloud service operations.

{:.procedure}
To use the New Relic Logs application:

1. Use your New Relic credentials to [log in to your New Relic account][New Relic login].

1. Select your application.

1. On the _APM applications page_, select **Logs** from the navigation menu.

   ![Cloud project APM menu select Logs page]({{ site.baseurl }}/common/images/cloud/cloud-newrelic-dashboard-logs-access.png){:width="650px"}

   {:.bs-callout-tip}
   You can also access the New Relic Logs application from the New Relic ONE home page. See [New Relic ONE core UI components][New Relic One UI].

1. To review infrastructure log data for cloud services, enter the query string `has: "ident"` in the _Find logs where_ field. Then, click **Query logs**.

   ![Cloud project New Relic service log data]({{ site.baseurl }}/common/images/cloud/cloud_new-relic-log-query-has-ident.png){:width="650px"}

1. To review Fastly log data, enter the query string `has: "client_ip"` in the _Find logs where_ field. Then, click **Query logs**.

   ![Cloud project New Relic Fastly log data]({{ site.baseurl }}/common/images/cloud/cloud-new-relic-logs-has-client_ip-fastly.png){:width="650px"}

1. To filter the Fastly log results further, select an attribute from the left menu, then click **Query logs** to apply the updated query.

   For example, to query the Fastly data by country code, select the _Geo Country Code_ attribute.

   ![Cloud project New Relic CDN log attribute filter]({{ site.baseurl }}/common/images/cloud/cloud-new-relic-fastly-log-attribute-filter.png){:width="650px"}

The following example shows a New Relic Insights dashboard created from queries against the Fastly CDN log data:

![Cloud project New Relic CDN Logs dashboard]({{ site.baseurl }}/common/images/cloud/cloud-new-relic-cdn-logs-dashboard.png){:width="650px"}

For further information and examples, see [Introduction to New Relic Logs][New Relic Logs] and [Introduction to New Relic Insights][New Relic Insights].

### Monitor performance with Managed Alerts

Adobe provides the Managed Alerts for {{ site.data.var.ee }} alert policy to track performance metrics.
Based on industry best practices, the policy includes a collection of alerts that set thresholds to trigger warning and critical notifications when site infrastructure or application issues affect performance. The Managed Alerts policy tracks the following metrics on Production environments only:

| Metric | Data collection | Availability
|:--------|:------------------------|:-------------
| [Apdex score] | APM   | Pro and Starter
| error rate    | APM   | Pro and Starter
| disk space    | NRI   | Pro
| CPU usage     | NRI   | Pro
| memory usage  | NRI   | Pro

When site infrastructure or application conditions trigger an alert threshold, New Relic sends alert notifications so that you can proactively address the issue.  See [Managed Alerts for Magento Commerce] in the _Magento Help Center_ for details about alert thresholds and troubleshooting steps to resolve the issues that triggered the alert.

{:.bs-callout-info}
For Pro Staging and Integration environments and Starter environments, use [Health notifications] to monitor disk space.

**Prerequisites:**

-  Credentials to log in to the [New Relic account] for your Cloud project
-  Verify that your Cloud environment is [connected to New Relic](#connect-to-new-relic)
-  Configure at least one [notification channel](#configure-notification-channels) to receive the alert notifications

{:.procedure}
To review the Managed Alerts for {{ site.data.var.ee }} policy:

1. Use your New Relic credentials to [log in to your New Relic account][New Relic login].

1. Locate the _Managed Alerts for Magento Commerce_ policy:

   -  In the top navigation menu, click **Alerts & AI** to open the _Applied Intelligence_ page.

   -  In the left navigation, click **Policies**.

   -  At the top of the page, select the account and project from the drop-down menu if needed.

      ![Select account and project]({{ site.baseurl }}/common/images/cloud/cloud-new-relic-select-account.png){:width="650px"}

   -  In the _Policy_ list, you should see the **Managed Alerts for Magento Commerce** policy.

      ![Generated alert policies]({{ site.baseurl }}/common/images/cloud/cloud-newrelic-managed-alerts-for-magento.png){:width="650px"}

      {:.bs-callout-info}
      If the Managed Alerts for {{ site.data.var.ee }} alert policy is not available, see [Managed Alerts for Magento Commerce][] in the _Magento Help Center_.

1. Click **Managed Alerts for Magento Commerce** to review the alert conditions defined in the policy.

   ![Managed alerts list]({{ site.baseurl }}/common/images/cloud/cloud-newrelic-magento-alert-conditions.png){:width="650px"}

### Configure notification channels

To use Managed Alerts for {{ site.data.var.ee }} to monitor your Production sites, you must configure at least one notification channel and map it to the alert policy.

Notifications about performance issues go to all channels associated with an alert policy when conditions on the application or infrastructure trigger an alert. You also receive notifications when an issue is acknowledged and closed.

New Relic provides templates for configuring different types of notification channels including email, Slack, PagerDuty, webhooks, and more. See the [Instructions for specific notification channels] in the New Relic documentation to review the prerequisites for using each type.

{:.procedure}
To configure a notification channel:

1. Choose a notification channel type, and complete any [prerequisite steps] required to connect the channel with the New Relic service.

1. Use your New Relic credentials to [log in to your New Relic account][New Relic login].

1. Create a new notification channel.

   -  In the top navigation menu, click **Alerts & AI** to open the _Applied Intelligence_ page.

   -  In the left navigation, click **Notification channels**.

   -  On the *Notification channels* page, click the **New notification channel**.

      ![New Relic notification channel]({{ site.baseurl }}/common/images/cloud/cloud-new-relic-add-notification-channel.png){:width="650px"}

   -  On the *Create notification channel* page, select the channel type and complete the steps to configure, create, save, and send a test notification to verify that the channel works.

      ![New Relic create notification channel]({{ site.baseurl }}/common/images/cloud/cloud-new-relic-create-notification-channel.png){:width="650px"}

1. Specify the alerts to send to the channel.

   -  On the *Notification channels* page, click **Alert policies**.

   -  On the *Alert policies* tab, click **Add alert policies**.

      ![New Relic create notification channel]({{ site.baseurl }}/common/images/cloud/cloud-new-relic-add-alerts-to-notification-channel.png){:width="650px"}

   -  Select the **Managed Alerts for {{ site.data.var.ee }}** alert policy.

   -  Click **Save changes**.

See the following New Relic documentation topics for additional information:

-  [Configure notification channels using the New Relic Alerts user interface]

-  [Configure notification channels using the New Relic API]

{:.bs-callout-warning}
The alerts in the Managed Alerts for Magento Commerce policy have default notification channels configured to notify Magento teams that support {{ site.data.var.ece }} customers.  Do not modify the configuration for these default channels, and do not remove any alert policies assigned to them.

### Create alert policies

Do not modify any alerts included in the Managed Alerts for Magento Commerce policy. We update and improve the alert conditions in this policy over time, which overwrites any customizations you add to the policy.

Instead of modifying an existing alert, you can create a new alert policy. Then, copy the alert conditions to the new policy. See [Update policies or conditions] in the New Relic documentation.

{:.bs-callout-tip}
See [Alerts concepts and workflow] in the New Relic documentation for more detailed information about Alerts, alert policies, and notification channels.

<!-- link definitions -->

[2]: https://docs.newrelic.com/docs/accounts/accounts/roles-permissions/add-update-users#adding_users

[account dropdown]: https://docs.newrelic.com/docs/using-new-relic/welcome-new-relic/getting-started/glossary#account-dropdown
[account page]: https://accounts.magento.cloud/user
[add it from the Magento Admin]: https://docs.magento.com/m2/ce/user_guide/reports/new-relic-reporting.html#step-3-configure-your-store
[Alerts concepts and workflow]: https://docs.newrelic.com/docs/alerts/new-relic-alerts/getting-started/new-relic-alerts-concepts-workflow
[Apdex score]: https://docs.newrelic.com/docs/apm/new-relic-apm/apdex/apdex-measure-user-satisfaction
[Configure notification channels using the New Relic Alerts user interface]: https://docs.newrelic.com/docs/alerts/new-relic-alerts/managing-notification-channels/notification-channels-control-where-send-alerts
[Configure notification channels using the New Relic API]: https://docs.newrelic.com/docs/alerts/rest-api-alerts/new-relic-alerts-rest-api/rest-api-calls-new-relic-alerts#channels
[from your New Relic account page]: https://docs.newrelic.com/docs/accounts/install-new-relic/account-setup/license-key#finding
[Explore your data with New Relic Logs UI]: https://docs.newrelic.com/docs/logs/new-relic-logs/ui-data/explore-your-data-new-relic-logs-ui
[Health notifications]: {{site.baseurl}}/cloud/integrations/health-notifications.html
[Instructions for specific notification channels]: https://docs.newrelic.com/docs/alerts/new-relic-alerts/managing-notification-channels/notification-channels-control-where-send-alerts#channel-types
[Magento Admin credentials]: https://docs.magento.com/m2/ce/user_guide/system/permissions.html
[Magento Partnership Owner Account]: https://account.newrelic.com/accounts/1311131/users
[Managed Alerts for Magento Commerce]: https://support.magento.com/hc/en-us/articles/360045806832
[New Relic account]: #manage-new-relic-account
[New Relic APM]: https://docs.newrelic.com/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm
[New Relic APM Overview]: https://docs.newrelic.com/docs/apm/applications-menu/monitoring/apm-overview-page-view-transaction-apdex-usage-data
[New Relic ONE UI]: https://docs.newrelic.com/docs/new-relic-one/use-new-relic-one/get-started/new-relic-one-core-ui-components
[New Relic for application performance management (APM)]: https://docs.newrelic.com/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm
[New Relic Help Center]: https://newrelic.com/
[New Relic Logs]: https://docs.newrelic.com/docs/logs/new-relic-logs/get-started/introduction-new-relic-logs
[New Relic login]: https://login.newrelic.com/login
[New Relic infrastructure]: https://newrelic.com/products/infrastructure
[New Relic Insights]: https://docs.newrelic.com/docs/insights/use-insights-ui/getting-started/introduction-new-relic-insights
[New Relic query syntax for logs]: https://docs.newrelic.com/docs/logs/new-relic-logs/ui-data/query-syntax-logs
[New Relic reporting]: https://docs.magento.com/m2/ce/user_guide/configuration/general/new-relic-reporting.html
[prerequisite steps]: https://docs.newrelic.com/docs/alerts/new-relic-alerts/managing-notification-channels/notification-channels-control-where-send-alerts#channel-types
[reset the New Relic password]: https://rpm.newrelic.com/forgot_password
[submit a Magento Support ticket]: {{ site.baseurl }}/cloud/trouble/trouble.html
[Troubleshoot performance using New Relic]: https://support.magento.com/hc/en-us/articles/360042149832#low_user_satisfaction
[Update the account owner]: https://docs.newrelic.com/docs/accounts/accounts/roles-permissions/change-account-owner
[Update policies or conditions]: https://docs.newrelic.com/docs/alerts/new-relic-alerts/configuring-alert-policies/update-or-disable-policies-conditions
[View your license key]: https://docs.newrelic.com/docs/accounts/install-new-relic/account-setup/license-key#finding
[Working with variables]: {{site.baseurl}}/cloud/env/working-with-variables.html
