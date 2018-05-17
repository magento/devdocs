---
group: cloud
title: New Relic APM
version: 2.1
github_link: cloud/project/new-relic.md
functional_areas:
  - Cloud
  - Integration
  - Setup
  - Services
---

The software analytics product [New Relic for application performance management (APM)](https://docs.newrelic.com/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm){:target="\_blank"} helps you to analyze and improve application interactions. Each {{site.data.var.ece}} plan includes a New Relic APM license that supports up to three instances across all environments. 

New Relic APM provides the following features to Magento:

-  **Focus on specific transactions**—Actively mark and monitor key customer actions in your site, such as adding to the cart, checking out, or processing a payment.
-  **Database query monitoring**—Locate and monitor database queries affecting performance.
-  **App Map**—View all application dependencies within your Magento site, extensions, and external services.
-  **Apdex scores**—Evaluate performance and create alerts that identify issues and notify you when they occur, such as site performance affected by a flash sale or web event.

Your {{site.data.var.ece}} account includes the agent software for New Relic; you do not need to purchase or install the New Relic extension (different than the APM service). You receive your credentials and license information from Magento during launch and can access your license key in the _Project Web Interface_ by clicking **View Details** for your project. The **NewRelic Service** section includes your Account Number, License Key, and other access keys.

By default, the Pro Staging and Production environments include New Relic. If it is not installed, submit a [support ticket]({{ page.baseurl }}/cloud/trouble/trouble.html) to request installation.

## Add New Relic extension to your project
You must list the New relic extension in the `.magento.app.yaml` file:

```
runtime:
  extensions:
    - newrelic
```

## Add New Relic APM to an environment
The {{site.data.var.ece}} plans support up to three instances of your New Relic APM license across all environments. We recommend adding a New Relic license to your Staging and Production environments, and you can add the license to one other environment of your choice.

{% include note.html type="info" content="If you have more than three active environments using the same New Relic license key, you need to remove a license variable from an existing environment. 

If you are interested in using New Relic on more than three active environments, contact your dedicated Launch Manager for details, or you can contact New Relic directly at sales@newrelic.com." %}

#### To add a New Relic license key to an environment:

```bash
magento-cloud variable:set php:newrelic.license <your-new-relic-license-key>
```

If you have more than three active environments using the same New Relic license key, you must remove a license variable from an existing environment.

#### To remove a New Relic license key:

1.  List all variables.

    For project variables: `magento-cloud pvget`  
    For environment variables: `magento-cloud vget`

1.  Delete a variable.

    For project variables:

    ```bash
    magento-cloud project:variable:delete php:newrelic.license
    ```

    For environment variables:

    ```bash
    magento-cloud variable:delete php:newrelic.license
    ```

{% include note.html type="warning" content="If you added the license as a _project_ variable, you must remove that project-level variable. A project variable adds the license to every environment branch created, which can consume or exceed the license limit." %}

## Investigate performance
New Relic connects and monitors your site using a PHP agent. As it collects data, you can log in and review the responses through the New Relic [dashboard](https://docs.newrelic.com/docs/apm/applications-menu/monitoring/apm-overview-page).

Using the New Relic dashboard, you can immediately track and find the following:

-  Monitor applications and transactions encountering slow responses or bottlenecks
-  Investigate customer comments of issues with your site
-  Identify applications with high transaction time and follow up on queries, calls, and methods with Blackfire
-  Verify and compare traffic to transaction time

We recommend reviewing tracked data:

-  **Most time consuming**—Determine time consumption by tracking requests in parallel. For example, you may have the highest transaction time spent in product and category views. If a customer account page suddenly ranks very high in time consumption, there may be a call or query dragging performance.
-  **Highest throughput**—Identify pages hit the most based on the size and frequency of bytes transmitted.

All collected data details the time spent on an action transmitting data, queries, or _Redis_ data. If queries cause issues, New Relic provides information to track and respond to it.

## New Relic and Blackfire

You can mix the high-level data captured by New Relic APM and the code-level data captured by the [Blackfire Profiler]({{ page.baseurl }}/cloud/project/project-integrate-blackfire.html) to gain insight into your store performance. Each service has strengths and weaknesses that balance incredibly well together.

-  The New Relic worst-case requests are not averages, but edge cases; whereas, Blackfire provides more of the average worst-case requests.
-  Blackfire is not detailed in determining and displaying queries giving you trouble, but you can use New Relic to find those.
-  Background processes, like Cron job, can cause issues. These background processes are not monitored by New Relic, but you can watch them using Blackfire.
