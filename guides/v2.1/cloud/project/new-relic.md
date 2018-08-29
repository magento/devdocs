---
group: cloud
title: New Relic APM
functional_areas:
  - Cloud
  - Integration
  - Setup
  - Services
---

[New Relic for application performance management (APM)](https://docs.newrelic.com/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm) is a software analytics product that helps you analyze and improve application interactions. Each {{site.data.var.ece}} plan includes a New Relic APM license that supports up to three instances across all environments. 

New Relic APM provides the following features to Magento:

-  **Focus on specific transactions**—Actively mark and monitor key customer actions in your site, such as adding to the cart, checking out, or processing a payment.
-  **Database query monitoring**—Locate and monitor database queries affecting performance.
-  **App Map**—View all application dependencies within your Magento site, extensions, and external services.
-  **Apdex scores**—Evaluate performance and create alerts that identify issues and notify you when they occur, such as site performance affected by a flash sale or web event.

By default, the {site.data.var.ece}} Pro plan includes New Relic on the Staging and Production environments. If it is not installed, submit a [support ticket]({{ page.baseurl }}/cloud/trouble/trouble.html) to request installation. For {{site.data.var.ece}} Pro plan customers also need to submit a support ticket to use New Relic on an Integration branch. 


{:.bs-callout .bs-callout-info}
Your Magento Commerce Cloud account includes the software for the New Relic APM service along with a license key. You do not need to purchase or install any additional software.

## New Relic account credentials

When Magento provisions your {{site.data.var.ece}} project, the Project Owner should receive an email from New Relic with the credentials and instructions for accessing the account. If you did not receive the email, you can use the Project Owner email address to [reset the password](https://rpm.newrelic.com/forgot_password).

If you cannot access the New Relic account, submit a [Magento support ticket]({{ page.baseurl }}/cloud/trouble/trouble.html).


## Add account users

{{site.data.var.ece}} Project Owners and Admin users can add and remove users from the New Relic account.

We recommend adding at least one Admin user to your New Relic account to manage all access, integrations, and usage of the tool.

1.  Using your Project Owner New Relic credentials, log in to [New Relic](https://login.newrelic.com/login).

1.  From the [account dropdown](https://docs.newrelic.com/docs/using-new-relic/welcome-new-relic/getting-started/glossary#account-dropdown) menu, select **Account settings > Account > Users and roles**.

1.  Click **New user**.

1.  Add the name and email address for the account.

1.  Assign the user role: *Admin*, *User*, or *Restricted*.

1.  Click **Add user**.

1.  Ask the new user to check their email for a New Relic notification with account information.


See [Accounts](https://docs.newrelic.com/docs/accounts/accounts) in the New Relic documentation for information about user roles, managing user accounts, and changing account ownership.



## Add the New Relic extension to your project

You must list the New Relic extension in the `.magento.app.yaml` file for your project. 

```
runtime:
  extensions:
    - newrelic
```

## Add New Relic APM to an environment

The {{site.data.var.ece}} plans support up to three instances of your New Relic APM license across all environments. We recommend adding a New Relic license to your Pro Staging and Production environments, and you can add the license to one other environment of your choice. 

{:.bs-callout .bs-callout-info}
If you have more than three active environments using the same New Relic license key, you need to remove a license variable from an existing environment.
Contact your Magento technical account manager or New Relic sales (sales@newrelic.com) if you want to use New Relic on more than three environments.


#### To get your New Relic license key:

1.  Open your [account page](https://accounts.magento.cloud/user/).

1.  On the Projects tab, find your project.

1.  Click **View Details** to see the project provisioning information.

1.  Expand the **NewRelic Service** section to view the license key.

1.  Copy the license key.

You can also access the license key from the the Project Web interface. See [Blackfire and New Relic credentials]({{ page.baseurl }}/cloud/project/projects.html).


#### To add a New Relic license key to an environment:


```bash
magento-cloud variable:set php:newrelic.license <your-new-relic-license-key>
```

#### To remove a New Relic license key:

1.  List all variables.

    -  For project variables: `magento-cloud pvget`  
    -  For environment variables: `magento-cloud vget`

1.  Delete a variable.

    For project variables:

    ```bash
    magento-cloud project:variable:delete php:newrelic.license
    ```

    For environment variables:

    ```bash
    magento-cloud variable:delete php:newrelic.license
    ```

{:.bs-callout .bs-callout-warning}
If you added the license as a _project_ variable, you must remove that project-level variable. A project variable adds the license to every environment branch created, which can consume or exceed the license limit.

## Investigate performance

New Relic connects and monitors your site using a PHP agent. As it collects data, you can log in and review the responses through the New Relic [dashboard](https://docs.newrelic.com/docs/apm/applications-menu/monitoring/apm-overview-page).

Using the New Relic dashboard, you can immediately track and find:

-  Applications and transactions encountering slow responses or bottlenecks
-  Customer comments about issues with your site
-  Applications with high transaction time and follow up on queries, calls, and methods with Blackfire
-  Traffic to transaction time

We recommend reviewing tracked data:

-  **Most time consuming**—Determine time consumption by tracking requests in parallel. For example, you may have the highest transaction time spent in product and category views. If a customer account page suddenly ranks very high in time consumption, there may be a call or query dragging performance.
-  **Highest throughput**—Identify pages hit the most based on the size and frequency of bytes transmitted.

All collected data details the time spent on an action transmitting data, queries, or _Redis_ data. If queries cause issues, New Relic provides information to track and respond to it.

## New Relic and Blackfire

You can use the high-level data captured by New Relic APM along with the code-level data captured by the [Blackfire Profiler]({{ page.baseurl }}/cloud/project/project-integrate-blackfire.html) to get a comprehensive view of your Magento store performance.

-  The New Relic worst-case requests are not averages, but edge cases; whereas, Blackfire provides more of the average worst-case requests.
-  Blackfire is not detailed in determining and displaying queries giving you trouble, but you can use New Relic to find those.
-  Background processes, like Cron job, can cause issues. These background processes are not monitored by New Relic, but you can watch them using Blackfire.
