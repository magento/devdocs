---
layout: default
group: perf-best-practices
title: Configuration best practices
version: 2.2
github_link: performance-best-practices/configuration.md
functional_areas:
  - Configuration
  - System
  - Setup
---

Magento 2 provides many settings and tools that you can use to improve response time on the pages as well as provide higher throughput.

## Cron Jobs

All asynchronous operations in Magento 2 Open Source are performed using the Linux `cron` command. See [Configure and run cron]({{page.baseurl}}config-guide/cli/config-cli-subcommands-cron.html) to configure it correctly.

## Indexers

An indexer can run in either **Update on Save** or **Update on Schedule** mode. Save mode immediately indexes whenever your catalog or other data changes. This mode assumes a low intensity of update and browsing operations in your store, It can lead to significant delays and data unavailability during high loads. Magento recommends using Schedule mode in production, because it stores information about data updates and performs indexation by portions in the background through a specific cron job. You can change the mode of each Magento indexer separately on the  **System > Index Management** configuration page.

## Caches

When you launch your store in production, activate all the caches from the **System > Cache Management** page. We highly recommend using Varnish, as it is an efficient production page cache solution.

## Asynchronous email notifications

Enabling the “Asynchronous email notifications” setting moves processes that handle email notifications related to the checkout process and order processing to the background. To enable this feature, go to **Stores > Configuration > Sales > Sales Emails > General Settings > Asynchronous Sending**.

## Asynchronous order data processing

There can be times when intensive sales on a storefront occur at the same time that Magento is performing intensive order processing. You can configure Magento to distinguish these two traffic patterns on the database level to avoid conflicts between read and write operations in the corresponding tables. With this goal, Magento provides an option to store and index orders data asynchronously of their placement on the frontend. Orders are placed in temporary storage and moved in bulk to the Order Management grid without any collisions. You can activate this option from **Stores > Configuration > Advanced > Developer > Grid Settings > Asynchronous indexing**.

## Deferred stock update

In times of intensive sales,  Magento can defer stock updates related to orders. This minimizes the number of operations and speeds up the order placement process. However, this option is risky and can only be used when Backorders are activated in the store, because this option can lead to negative stock quantities. This option can bring significant performance improvement on Checkout flows for stores that can easily re-fill their stock on demand. To activate deferred stock updates, go to **Stores > Configuration > Catalog > Inventory > Product Stock Options > Use Deferred Stock Update**.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
This option is available only if **Backorder with any mode** is activated.
</div>

## Client side optimization settings

To improve the store front responsiveness of your Magento instance, go to the Admin in Default or Developer mode and change the following settings:

`Stores -> Configuration -> Advanced -> Developer`

| Settings Group      | Setting                    | Value  |
| ------------------- | -------------------------- | ------ |
| Grid Settings       | Asynchronous indexing      | Enable |
| CSS Settings        | Minify CSS Files           | Yes    |
| Javascript Settings | Minify JavaScript Files    | Yes    |
| Javascript Settings | Enable JavaScript Bundling | Yes    |
| Template Settings   | Minify HTML                | Yes    |

When you activate the **Enable Javascript Bundling** option, you allow Magento to merge all JS resources into one or a set of bunches that will be loaded to storefront pages. This way you get all JS content to your storefront with few requests to the server. It also helps the browser cache JS resources on the first call and re-use it for all further browsing. This option also brings lazy evaluation, as all JS is loaded as text. It initiates analysis and evaluation of code only after specific actions are triggered on the page. However, this setting is not recommended for stores where the first page load time is extremely critical, because all JS content will will be loaded on the first call.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
* Magento recommendeds that you use third-party tools for minification and bundling (like r.js). Magento built-in mechanisms are not optimal and are shipped as fallback alternative.
* Activating the HTTP2 protocol can be a good alternative to using JS bundling. The protocol provides pretty much the same benefits.
* Magento does not recommend using deprecated settings like merging JS and CSS files, as they were designed only for synchronously-loaded JS in the HEAD section of the page. Using this technique and can cause bundling and requireJS logic to work incorrectly.
</div>
