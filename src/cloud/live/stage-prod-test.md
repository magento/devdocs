---
group: cloud-guide
subgroup: 160_deploy
title: Test deployment
menu_title: Test deployment
menu_order: 60
menu_node:
functional_areas:
  - Cloud
  - Testing
  - Deploy
---

{:.ref-header}
Previous step

[Migrate data and static files]({{ site.baseurl }}/cloud/live/stage-prod-migrate.html)

When your code, files, and data is successfully migrated to Staging or Production, use the environment URLs to test your site(s) and store(s). For a list of your URLs, see [Starter]({{ site.baseurl }}/cloud/live/stage-prod-migrate-prereq.html#starter-urls) and [Pro]({{ site.baseurl }}/cloud/live/stage-prod-migrate-prereq.html#pro-urls) access information.

The following information provides information on verifying logs, testing Fastly configurations, user acceptance testing (UAT), and more.

## Log files {#logs}

If you encounter errors on deployment or other issues when testing, check the log files. Log files are located under the `var/log` directory.

The deployment log is located in `/var/log/platform/<prodject ID>/deploy.log`. The value of `<project ID>` depends on the project ID and whether the environment is Staging or Production. For example, with a project ID of `yw1unoukjcawe`, the Staging user is `yw1unoukjcawe_stg` and the Production user is `yw1unoukjcawe`.

When accessing logs in Production, you need to use SSH to log in to each of the three nodes to locate the logs. See [Log locations]({{ site.baseurl }}/cloud/project/log-locations.html#application-logs).

## Check the code base {#codebase}

Verify your `master` code base correctly deployed to Staging and Production environments. The environments should have identical code bases.

## Verify configuration settings {#configsettings}

Check the Magento configuration settings through the Admin panel including the Base URL, Base Admin URL, multi-site settings, and more. If you need to make any additional changes, complete edits in your local Git branch and push to the `master` branch in Integration, Staging, and Production.

## Check Fastly caching {#fastly}

Verify Fastly is caching properly on Staging and Production. [Configuring Fastly]({{ site.baseurl }}/cloud/cdn/configure-fastly.html) requires careful attention to details, using the correct Fastly Service ID and Fastly API token, and a proper VCL snippet uploaded.

First, check for headers with a dig command to the URL. In a terminal application, enter `dig <url>` to verify Fastly services display in the headers. For additional `dig` tests, see Fastly's [Testing before changing DNS](https://docs.fastly.com/guides/basic-configuration/testing-setup-before-changing-domains).

The following examples use Pro URLs. You can use any URL with the `dig` command.

-  Staging: `dig http[s]://staging.<your domain>.c.<instanceid>.ent.magento.cloud`
-  Production: `dig http[s]://<your domain>.{1|2|3}.<project ID>.ent.magento.cloud`

Next, use a `curl` command to verify X-Magento-Tags exist and additional header information. The format for the command is:

```bash
curl http[s]://<full site URL> -H "host: <url>" -k -vo /dev/null -HFastly-Debug:1
```

For Starter, enter the full site URL from your environment [Access info]({{ site.baseurl }}/cloud/live/stage-prod-migrate-prereq.html#starter-urls) in the command to view the headers.

For Pro Staging and Production, the command differs per server:

-  Staging: `curl http[s]://staging.<your domain>.c.<instanceid>.ent.magento.cloud -H "host: <url>" -k -vo /dev/null -HFastly-Debug:1`
-  Production:
   -  The load balancer: `curl http[s]://<your domain>.c.<project ID>.ent.magento.cloud -H "host: <url>" -k -vo /dev/null -HFastly-Debug:1`
   -  A direct Origin node: `curl http[s]://<your domain>.{1|2|3}.<project ID>.ent.magento.cloud -H "host: <url>" -k -vo /dev/null -HFastly-Debug:1`

After you are live, you can also check your live site: `curl https://<your domain> -k -vo /dev/null -HFastly-Debug:1`. You can also add `--resolve` if your live URL is not set up with DNS.

Check the returned response headers and values:

-  `Fastly-Magento-VCL-Uploaded` should be present
-  `X-Magento-Tags` should be returned
-  `Fastly-Module-Enabled` should be either `Yes` or the Fastly extension version number
-  `X-Cache` should be either `HIT` or `HIT, HIT`
-  `x-cache-hits` should be 1,1
-  [`Cache-Control: max-age`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9) should be greater than 0
-  [`Pragma`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.32) should be `cache`

To verify Fastly is enabled in Staging and Production, check the configuration in the Magento Admin for each environment:

1. Log into the Admin console for Staging and Production using the URL with /admin (or the changed Admin URL).
1. Navigate to **Stores** > **Settings** > **Configuration** > **Advanced** > **System**. Scroll and click **Full Page Cache**.
1. Ensure Fastly CDN is selected.
1. Click on **Fastly Configuration**. Ensure the Fastly Service ID and Fastly API token are entered (your Fastly credentials). Verify you have the correct credentials entered for the Staging and Production environment. Click **Test credentials** to help.

{:.bs-callout-warning}
Make sure you entered the correct Fastly Service ID and API token in your Staging and Production environments. If you enter Staging credentials in your Production environment, you may not be able to upload your VCL snippets, caching will not work correctly, and your caching will be pointed to the wrong server and stores. Your Fastly credentials are created and mapped per service environment.

The module must be enabled to cache your site. If you have additional extensions enabled that affect headers, one of them could cause issues with Fastly. If you have further issues, see [Set up Fastly]({{ site.baseurl }}/cloud/cdn/cloud-fastly.html) and [Fastly troubleshooting]({{ site.baseurl }}/cloud/cdn/trouble-fastly.html).

## Complete UAT testing {#uat-testing}

Complete User Acceptance Testing (UAT) on Staging and Production. The following tests are a quick list of possible tasks and areas to test as a Merchant and Customer. Your list may be longer and include additional tests for custom modules, extensions, and 3rd party integrations. When testing, use desktops, laptops, and mobile devices.

If you encounter issues, save your reproduction steps, error messages, strange screen captures, and links. Use this information to investigate and fix issues in Integration environment code and configurations or environment settings.

<table>
<tr>
<td style="width:150px">User management</td>
<td>
<ul>
<li>Create and edit customer accounts, verify emails</li>
<li>Create Admin roles for merchants </li>
<li>Create merchant accounts with specific roles</li>
<li>Test merchant account access per role</li>
</ul>
</td>
</tr>
<tr>
<td>Catalogs & Products</td>
<td>
<ul>
<li>Create a catalog with associated products</li>
<li>Create products for your storefront, including all product types: simple, configurable, bundled, etc</li>
<li>Add product images, swatches, videos, and other media options</li>
<li>Configure price, discounts, pricing rules </li>
<li>Configure advanced features including price ranges, featured products, availability dates</li>
<li>Modify inventory and verify correct values display and change per increase and completed purchase</li>
</ul>
</td>
</tr>
<tr>
<td>Carts & Checkout</td>
<td>
<ul>
<li>Search for products and select filtering options</li>
<li>Add products to the cart from search results, category pages, product pages</li>
<li>Test all product types</li>
<li>View the cart and modify contents by removing or changing amounts </li>
<li>Go through checkout to verify the order amounts against the cart and product info</li>
<li>Verify tax correctly calculates for the cart</li>
<li>Complete a purchase with different options: add a coupon, select shipping, enter shipping and billing information, and payment information</li>
<li>Verify payment gateways and options during checkout</li>
<li>Check for on screen notifications, orders listed in the customer account, and email notifications</li>
<li>Test guest and customer checkout</li>
</ul>
</td>
</tr>
<tr>
<td>Order management</td>
<td>
<ul>
<li>Create an order for a customer</li>
<li>Search for and view orders</li>
<li>Modify an order by adding and removing products, changing amounts, modifying shipping and billing information</li>
<li>Handle a refund</li>
<li>Cancel an order</li>
<li>Apply coupon codes and discounts</li>
</ul>
</td>
</tr>
<tr>
<td>Site content</td>
<td>
<ul>
<li>Check all themes and assets load correctly</li>
<li>Verify CSS displays correctly, including responsive media sizes</li>
<li>Check Terms & Conditions, refund policy, and other policy information</li>
<li>Check contact information, links, and more about your company</li>
<li>Search for products and content, check filtering of results</li>
<li>Verify the footer block and top navigation blocks</li>
<li>Test the 404 and Maintenance pages</li>
</ul>
</td>
</tr>
<tr>
<td>Extensions</td>
<td>
<ul>
<li>Verify all extension settings, especially for any taxation, shipping, and payment modules (example: order sent to warehouse and financial mgmt system)</li>
<li>Test all customized module and installed Magento extension interactions</li>
<li>Check data for any interactions that should complete (payments, orders, email notifications, etc)</li>
<li>Check configurations per environment for your extensions</li>
<li>Verify dependencies between modules and extensions work</li>
<li>Check all actions as a merchant and a customer</li>
</ul>
</td>
</tr>
<tr>
<td>3rd party integrations</td>
<td>
<ul>
<li>Verify data correctly saves in Magento and exports, pushes, or is accessible by the 3rd party service (example: orders display in 3rd party order mgmt system)</li>
<li>Verify any configurations and interactions per integration</li>
<li>Perform round trip tests originating in Magento and your 3rd party service</li>
<li>Verify authentication completes</li>
<li>Check for any logged issues to update code integrations or error messages in control panels</li>
</ul>
</td>
</tr>
<tr>
<td>Backend testing</td>
<td>
<ul>
<li>Test and clear cache </li>
<li>Perform reindexes and verify results</li>
<li>Check Magento cron jobs, check for any cron_schedule errors</li>
<li>Verify and check for any shell script issues</li>
<li>Check for any logged issues: Magento logs, PHP logs, MySQL logs, email logs</li>
</ul>
</td>
</tr>
</table>

## Complete testing

### Load and stress testing {#loadtest}

Before launching, we highly recommend performing extensive traffic and performance testing on your Staging and Production environments.  You should consider performance testing for your frontend and backend processes.

Before you begin testing, enter a ticket with support advising the environments you are testing, what tools you are using, and the time frame. Update the ticket with results and information to track performance. When you complete testing, add your updated results and note in the ticket testing is complete with a date and time stamp.

We recommend that you review the [Magento Performance Toolkit]({{ site.mage2bloburl }}/{{ site.version }}/setup/performance-toolkit) options as part of your pre-launch readiness process.

For best results, we recommend the following tools:

-  [Magento application performance test]({{ site.baseurl }}/cloud/env/variables-post-deploy.html#ttfb_tested_pages)—Test Magento application performance by configuring the `TTFB_TESTED_PAGES` environment variable to test site response time.
-  [Siege](https://www.joedog.org/siege-home/)—Traffic shaping and testing software to push your store to the limit. Hit your site with a configurable number of simulated clients. Siege supports basic authentication, cookies, HTTP, HTTPS and FTP protocols.
-  [Jmeter](http://jmeter.apache.org/)—Excellent load testing to help gauge performance for spiked traffic, like for flash sales. Create custom tests to run against your site.
-  New Relic (provided)—Helps locate processes and areas of the site causing slow performance with tracked time spent per action like transmitting data, queries, Redis, and so on.
-  [WebPageTest](https://www.webpagetest.org/) and [Pingdom](https://www.pingdom.com/)—Real-time analysis of your site pages load time with different origin locations. Pingdom may require a fee. WebPageTest is a free tool.

### Functional testing

You can use the Magento Functional Testing Framework (MFTF) to complete functional testing for {{site.data.var.ee}} from the Cloud Docker environment. See [Magento application testing]({{site.baseurl}}/cloud/docker/docker-mftf.html).

## Set up Magento Security Scan Tool {#security-scan}

We provide a free Security Scan Tool for your sites. To add your sites and run the tool, see [Magento Security Scan Tool]({{ site.baseurl }}/cloud/live/live.html#security-scan).
