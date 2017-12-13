---
layout: default
group: cloud
subgroup: 020_tech
title: New Relic APM
menu_title: New Relic APM
menu_order: 20
menu_node:
version: 2.0
github_link: cloud/project/new-relic.md
functional_areas:
  - Cloud
  - Integration
  - Setup
  - Services
---

[New Relic](https://docs.newrelic.com/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm){:target="_blank"} Application Performance Monitoring (APM) provides application and performance information for end-user operations completed through your stores. This data helps you analyze and improve application interactions. For a great introduction to New Relic, see the [New Relic University](https://learn.newrelic.com/courses/intro_apm){:target="_blank"}.

You can mix the higher level data captured by New Relic APM with the deeper method and call dive data from [Blackfire Profiler]({{page.baseurl}}cloud/project/project-integrate-blackfire.html). Using these two tools together in Staging and Production environments, you gain a better view into your store performance.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
You receive New Relic APM with your {{site.data.var.ece}} subscription. You do not need to purchase or install the New Relic extension (different than the APM service).
</div>

## Key features {#features}

New Relic APM provides the following [key features](https://newrelic.com/php/magento){:target="_blank"} to Magento:

* Actively mark and monitor key customer actions in your site. For example, track performance of add to cart, checkout, or payment processing.
* Locate and monitor slow database queries.
* Use the App Map to view all application dependencies within your Magento site, extensions, and external services.
* Follow Apdex scores to evaluate slow downs and bottlenecks. Create alerts to watch for these slumps to identify and notify you when an issues is occuring. For example, site slow downs due to a flash sale or web event.

You can have New Relic active on up to 3 instances. These instances (or hosts) include a local system, active Integration environments, Staging, and Production. We recommend the following:

* For Pro: Integration `master`, Staging, and Production. We add New Relic for you to Staging and Production environments.
* For Starter: Any 3 environments. We recommend `master` Production, a Staging environment, and another of your choice.

## New Relic APM credentials {#credentials}
When you sign up for a {{site.data.var.ece}} account, you will receive credentials and information for your account from Magento and a call with Launch Mangers. The agent software for New Relic is already installed to capture data for review through the service.

You will need these credentials and the license associated to them. You receive this information from Magento. Your license key is also available through [project details]({{page.baseurl}}cloud/project/projects.html#integrations).

## Add New Relic APM to an environment {#configure}
You can locate your New Relic APM credentials and key in the [Project Web Interface]({{page.baseurl}}cloud/project/project-integrate-blackfire.html). The Project Owner can [log in](https://accounts.magento.cloud){:target="_blank"} to the interface and review [project and environment credentials]({{page.baseurl}}cloud/before/before-project-owner.html#cloud-owner-creds).

* For **Pro plan projects**, New Relic is already set up for you in Staging and Production environments. You can only add the third usage to your Integration `master` branch. You will receive an email and possibly phone call with New Relic to provide credentials and access to their service.

  * If you previously added New Relic to any other Pro Integration environments (besides <code>master</code>), you must remove it.
  * If you branch from Integration <code>master</code>, make sure the environment variable is not replicated in those new environments.
  * If using Magento Cloud CLI, use the command <code>magento-cloud variable:delete</code> to remove the environment variable.
* For **Starter plan projects**, New Relic will provide an email of credentials and access information, possibly also a call. You can add New Relic up to 3 branches. We recommend on `master` Production, a `staging` environment, and another of your choice.

If you used all 3 instances, you must remove the variable before adding it to a new environment. for details, see [Remove New Relic from an environments](#remove).

To add New Relic to a specific environment (for example, Starter plan Staging environment or Pro Integration `master`) you need to add an environment level variable with your license. Remember, you can only have 3 New Relic licenses active across all environments.

1. Log in to the Project Web Interface.
2. Select an environment and locate the SSH link under Access Site. For more information on SSH, see [SSH and sFTP]({{page.baseurl}}cloud/env/environments-ssh.html)

	![Access settings]({{ site.baseurl }}common/images/cloud_project-access.png)
3. In a terminal, SSH log in to each environment (Production and Master) and enter the following command. You will need the license key from New Relic.

        magento-cloud variable:set --no-visible-build php:newrelic.license <your-new-relic-license-key>

## Remove New Relic from an environment {#remove}
{{site.data.var.ece}} plans support up to 3 licenses active across all environments. If you have more than 3 active environments with the New Relic license key added as an environment variable, you will be in breach of the contracted 3 licenses. For details, see [Subscriptions and plans]({{page.baseurl}}cloud/basic-information/cloud-plans.html).

* For Starter accounts, if you want to move the variable from one active Integration environment to another, you must remove the variable first.
* For Pro accounts, you may want to make sure you did not add the variable to additional branches or environments in Integration.

To remove the variable:

1. Log in to the Project Web Interface.
2. Select an environment and locate the SSH link under Access Site. For more information on SSH, see [SSH and sFTP]({{page.baseurl}}cloud/env/environments-ssh.html)

	![Access settings]({{ site.baseurl }}common/images/cloud_project-access.png)
4. In a terminal, SSH log in to an environment.
5. To list all variables, you can use this command:

    * For project variables: `magento-cloud pvget`
    * For environment variables: `magento-cloud vget`
6. To delete an environment variable, enter the following command:

        magento-cloud variable:delete php:newrelic.license
7. If you added the license as a project variable, you must remove that project level variable. A project variable will add the license to every branched environment created, using or exceeding the license limit. Use this command to remove the variable:

        magento-cloud project:variable:delete php:newrelic.license

<!-- Add New Relic to `.magento.app.yaml`:

1. In your development code branch, edit `.magento.app.yaml` with a text editor.
2. Add the following information:

    runtime:
      extensions:
        - newrelic
3. Save and push the changes to deploy across Staging and Production. -->

## Investigate performance {#investigate}
New Relic connects and monitors your site using an agent via php. As it collects data, you can [log in](https://login.newrelic.com/login/){:target="_blank"} and review the responses through the New Relic [dashboard](https://docs.newrelic.com/docs/apm/applications-menu/monitoring/apm-overview-page){:target="_blank"}.

Through the dashboard, you can immediately track and find:

* Applications and transactions encountering slow responses or bottlenecks
* Investigate customer comments of issues with your site
* Locate the applications with high transaction time and follow up on queries, calls, and methods through Blackfire
* Verify and compare traffic to transaction time

We recommend reviewing the tracked data for:

* Most time consuming: All all requests in parallel to determine where time is going. For example, you may have the highest transaction time spent in product and category views. If suddenly a customer account page is highest, you may have a call or query dragging performance.
* Highest throughput: Identifies the pages hit the most based on bytes transmitted/size.

All collected data details the time spent on an action transmitting data, queries, redis, and more. If queries cause issues, New Relic provides a depth of information to track and respond to it.

## New Relic and Blackfire {#blackfire}

Armed with this information, you can investigate further with Blackfire.io Profiler. Each services has strengths and weaknesses that balance incredibly well together:

* New Relic worst case requests are not averages but edge cases. Whereas, Blackfire provides more of the average worst case requests. Compare this data to refine your troubleshooting.
* Blackfire is not detailed in determining and displaying queries giving you trouble. Use New Relic to find those.
* Cron job and other background processes are not monitored by New Relic. Sometimes these could be the culprit behind the scenes. Watching processes with Blackfire could help to locate these issues.

## New Relic APM resources {#resources}

* [Introduction to APM](https://docs.newrelic.com/docs/data-analysis/user-interface-functions/view-your-data/standard-page-functions){:target="_blank"}
* [View transactions](https://docs.newrelic.com/docs/apm/applications-menu/monitoring/transactions-page#tx_viewing){:target="_blank"}
* [Analyze database and instance-level performance issues](https://docs.newrelic.com/docs/apm/applications-menu/features/analyze-database-instance-level-performance-issues){:target="_blank"}
* [Tracking front-end time](https://docs.newrelic.com/docs/apm/applications-menu/features/request-queuing-tracking-front-end-time){:target="_blank"}
* [APM best practices](https://docs.newrelic.com/docs/apm/new-relic-apm/guides/new-relic-apm-best-practices-guide){:target="_blank"}
