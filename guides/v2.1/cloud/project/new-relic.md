---
group: cloud-guide
title: New Relic services
functional_areas:
  - Cloud
  - Integration
  - Setup
  - Services
---

[New Relic Infrastructure](https://newrelic.com/products/infrastructure) automatically connects with your application data and performance analytics to provide dynamic server monitoring and is standard for {{site.data.var.ece}} accounts. [New Relic for application performance management (APM)](https://docs.newrelic.com/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm) is a software analytics product that helps you analyze and improve application interactions. New Relic APM provides the following features to Magento:

-  **Focus on specific transactions**—Actively mark and monitor key customer actions in your site, such as adding to the cart, checking out, or processing a payment.
-  **Database query monitoring**—Locate and monitor database queries affecting performance.
-  **App Map**—View all application dependencies within your Magento site, extensions, and external services.
-  **Apdex scores**—Evaluate performance and create alerts that identify issues and notify you when they occur, such as site performance affected by a flash sale or web event.

{:.bs-callout .bs-callout-info}
Your {{site.data.var.ece}} account includes the software for the New Relic service along with a license key. You do not need to purchase or install any additional software. For Pro accounts, if New Relic is not installed on the Staging and Production environments, submit a [support ticket]({{ page.baseurl }}/cloud/trouble/trouble.html) to request installation.

## New Relic account credentials

When Magento provisions your {{site.data.var.ece}} project, the Project Owner should receive an email from New Relic with the credentials and instructions for accessing the account. If you did not receive the email, you can use the Project Owner email address to [reset the password](https://rpm.newrelic.com/forgot_password).

Also, we recommend adding at least one Admin user to your New Relic account to manage all access, integrations, and usage of the tool. {{site.data.var.ece}} Project Owners and Admin users can add and remove users from the New Relic account.

#### To add a user:

1.  Using your Project Owner New Relic credentials, log in to [New Relic](https://login.newrelic.com/login).

1.  From the [account dropdown](https://docs.newrelic.com/docs/using-new-relic/welcome-new-relic/getting-started/glossary#account-dropdown) menu, select **Account settings** > **Account** > **Users and roles**.

1.  Click **New user**.

1.  Add the name and email address for the account.

1.  Assign the user role: *Admin*, *User*, or *Restricted*.

1.  Click **Add user**.

1.  Ask the new user to check their email for a New Relic notification with account information.

See [Accounts](https://docs.newrelic.com/docs/accounts/accounts) in the New Relic documentation for information about user roles, managing user accounts, and changing account ownership.

## Configure New Relic

Pro accounts are preconfigured to use the New Relic service; however, Starter accounts must add the New Relic service to the `.magento.app.yaml` configuration file and assign the license key to an environment variable. You can apply the New Relic license key to a maximum of three active environments.

For Starter projects, check if the `.magento.app.yaml` file includes the New Relic extension in the `runtime` list. If not, then add the following:

> .magento.app.yaml

```yaml
runtime:
    extensions:
        - newrelic
```

## New Relic license key

The {{site.data.var.ece}} Starter plans support up to three instances of your New Relic license across all environments. We recommend adding a New Relic license key to your Pro Staging and Production environments, and you can add the license to one other environment of your choice. 

{:.bs-callout .bs-callout-info}
If you have more than three active environments using the same New Relic license key, you need to remove a license variable from an existing environment. Contact your Magento technical account manager or New Relic sales (sales@newrelic.com) if you want to use New Relic on more than three environments.

#### To find your New Relic license key:

1.  Open your [account page](https://accounts.magento.cloud/user/).

1.  On the _Projects_ tab, find your project.

1.  Click **View Details** to see the project provisioning information.

1.  Expand the **NewRelic Service** section to view the license key.

1.  Copy the license key.

You can also access the license key from the Magento Cloud Project interface. See [Blackfire and New Relic credentials]({{ page.baseurl }}/cloud/project/projects.html).

### Add a license key to an environment

For Starter accounts, you need to use the license key and set a variable in the environment.

1.  Change to the environment that needs the license key.

1.  Set the variable.

    ```bash
    magento-cloud variable:set php:newrelic.license <newrelic-license-key>
    ```

Adding a variable to an environment triggers a redeployment to update the environment variables and values. See [Working with variables]({{page.baseurl}}/cloud/env/working-with-variables.html).

### Remove a license key from an environment

1.  List environment variables.

    ```bash
    magento-cloud vget
    ```

    Response:

    ```terminal
    +----------------------+-------------+------------------------+
    | Name                 | Level       | Value                  |
    +----------------------+-------------+------------------------+
    | php:newrelic.license | environment | <newrelic-license-key> |
    +----------------------+-------------+------------------------+
    ```
    {: .no-copy}

1.  Delete a variable.

    For environment variables:

    ```bash
    magento-cloud variable:delete php:newrelic.license
    ```

{:.bs-callout .bs-callout-warning}
If you added the license key as a _project_ variable, you must remove that project-level variable. A project variable adds the license to every environment branch created, which can consume or exceed the license limit. To list project variables: `magento-cloud pvget`

## Investigate performance

New Relic connects and monitors your site using a PHP agent. As it collects data, you can log in and review the responses through the [New Relic dashboard](https://docs.newrelic.com/docs/apm/applications-menu/monitoring/apm-overview-page).

Using the New Relic dashboard, you can immediately track and find:

-  Applications and transactions encountering slow responses or bottlenecks
-  Customer comments about issues with your site
-  Applications with high transaction time and follow up on queries, calls, and methods with Blackfire
-  Traffic to transaction time

We recommend reviewing tracked data:

-  **Most time consuming**—Determine time consumption by tracking requests in parallel. For example, you may have the highest transaction time spent in product and category views. If a customer account page suddenly ranks very high in time consumption, there may be a call or query dragging performance.
-  **Highest throughput**—Identify pages hit the most based on the size and frequency of bytes transmitted.

All collected data details the time spent on an action transmitting data, queries, or _Redis_ data. If queries cause issues, New Relic provides information to track and respond to it.

To learn more about using and customizing New Relic services for your project, see [New Relic Infrastructure documentation](https://docs.newrelic.com/docs/infrastructure/new-relic-infrastructure/getting-started/introduction-new-relic-infrastructure)

## New Relic and Blackfire

You can use the high-level data captured by New Relic APM to see what is happening in your application in realtime. The New Relic Insights helps to focus on events, transactions, regions, etcetera, to correlate data.  Also, with the code-level data captured by the [Blackfire Profiler]({{ page.baseurl }}/cloud/project/project-integrate-blackfire.html) you get a comprehensive view of your Magento store performance.

-  The New Relic worst-case requests are not averages, but edge cases; whereas, Blackfire provides more of the average worst-case requests.
-  Blackfire is not detailed in determining and displaying queries giving you trouble, but you can use New Relic to find those.
-  Background processes, like Cron job, can cause issues. These background processes are not monitored by New Relic, but you can watch them using Blackfire.
