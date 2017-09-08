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
---

[New Relic](https://docs.newrelic.com/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm){:target="_blank"} Application Performance Monitoring (APM) provides application and performance information for end-user operations completed through your stores. This data helps you analyze and improve application interactions.

You can mix the higher level data captured by New Relic APM with the deeper method and call dive data from [Blackfire Profiler]({{page.baseurl}}cloud/project/project-integrate-blackfire.html). Using these two tools together in Staging and Production environments, you gain a better view into your store performance.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
You receiv New Relic APM with your {{site.data.var.ece}} subscription. You do not need to purchase or install install the New Relic extension (different than the APM service).
</div>

## Key features {#features}

New Relic APM provides the following [key features](https://newrelic.com/php/magento){:target="_blank"} to Magento:

* Actively mark and monitor key customer actions in your site. For example, track performance of add to cart, checkout, or payment processing.
* Locate and monitor slow database queries.
* Use the App Map to view all application dependencies within your Magento site, extensions, and external services.
* Follow Apdex scores to evaluate slow downs and bottlenecks. Create alerts to watch for these slumps to identify and notify you when an issues is occuring. For example, site slow downs due to a flash sale or web event.

## New Relic APM credentials {#credentials}
When you sign up for a {{site.data.var.ece}} account, you will receive an email of credentials to your account. The agent software for New Relic is already installed to capture data for review through the service.

You will need these credentials and the license associated to them. You receive this information by email and in your [project details]({{page.baseurl}}cloud/before/before-project-owner.html#cloud-owner-creds).


## Configure New Relic APM {#configure}
You can locate your New Relic APM credentials and key in the [Project Web Interface]({{page.baseurl}}cloud/project/project-integrate-blackfire.html). The Project Owner can [log in](https://accounts.magento.cloud){:target="_blank"} to the interface and review [project and environment credentials]({{page.baseurl}}cloud/before/before-project-owner.html#cloud-owner-creds).

For **Pro plan projects**, New Relic is already set up for you in Staging and Production environments. You will receive an email and possibly phone call with New Relic to provide credentials and access to their service.

For **Starter plan projects**, New Relic will provide an email of credentials and access information, possibly also a call.

Add a project level variable with your license:

1. Log in to the Project Web Interface.
2. Locate the SSH link for accessing your `master` Production and Staging environments
3. In a terminal, SSH log in to each environment (Production and Master) and enter the following command. You will need the license key from New Relic.

    magento-cloud project:variable:set --no-visible-build php:newrelic.license <your-new-relic-license-key>

Add New Relic to `.magento.app.yaml`:

1. In your development code branch, edit `.magento.app.yaml` with a text editor.
2. Add the following information:

    runtime:
      extensions:
          - newrelic
3. Save and push the changes to deploy across Staging and Production.

You may also need to install the New Relic APM agent into Production and Staging environments. For instructions on installing the agent, see New Relic's [Agent installation guide](https://docs.newrelic.com/docs/agents/manage-apm-agents/installation/install-agent){:target="_blank"}. Access both environments via SSH and install the agent.

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
