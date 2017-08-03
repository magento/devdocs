---
layout: default
group: cloud
subgroup: 160_deploy
title: Test deployment
menu_title: Test deployment
menu_order: 80
menu_node:
level3_menu_node: level3child
level3_subgroup: stage-prod
version: 2.0
github_link: cloud/live/stage-prod-test.md
---

#### Previous step:
[Migrate data]({{ page.baseurl }}cloud/live/stage-prod-migrate.html)

When your code, database, and data is successfully migrated to Staging or Production, use the URLs in your onboarding document to test your application. The onboarding document is available in your Magento Enterprise Cloud Edition OneDrive account.

The URLs have the following format:

*	Staging: `http[s]://staging.<domain>.<project ID>.ent.magento.cloud`
*	Production:

	*	Load balancer URL: `http[s]://<your domain>.c.<project ID>.ent.magento.cloud`
	*	Direct access to one of the three redundant servers: `http[s]://<your domain>.{1|2|3}.<project ID>.ent.magento.cloud`

	The production URL is used by the content delivery network (CDN).

## Log files
If you encounter errors on deployment or other issues when testing, check the log files. Log files are located under the `var/log` directory.

The deployment log is located in `/var/log/platform/<prodject ID>/post_deploy.log`. The value of `<project ID>` depends on the project ID and whether the environment is Staging or Production. For example, with a project ID of `yw1unoukjcawe`, the Staging user is `yw1unoukjcawe_stg` and the Production user is `yw1unoukjcawe`.

When accessing logs in Production, you may need to SSH into each of the three nodes to locate the logs.

For more information, see [View logs for troubleshooting]({{ page.baseurl }}cloud/trouble/environments-logs.html)

## Check `master` in Staging and Production
Verify your `master` code base correctly deployed to Staging and Production environments. The environments should have identical code bases.
(instructions)

## Check Fastly caching
Verify Fastly is caching properly on Staging and Production
1. walk through curl tests

## Complete UAT testing {#uat-testing}
Complete User Acceptance Testing (UAT) on Staging and Production. If you need help on those tests, see [UAT Testing](#uat-testing).

<table>
<tr>
<td>User management</td>
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
<li>Configure prices, discounts, and pricing rules</li>
<li>Modify inventory</li>
</ul>
</td>
</tr>
<tr>
<td>Order management</td>
<td>
<ul>
<li>Create an order for a customer</li>
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
<li>Check contant information, links, and more about your company</li>
<li>Search for products and content, check filtering of results</li>
</ul>
</td>
</tr>
<tr>
<td>Extensions</td>
<td>
<ul>
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
<li>Verify data correctly saves in Magento and exports, pushes, or is accessible by the 3rd party service</li>
<li>Verify any configurations and interactions per integration</li>
<li>Perform round trip tests originating in Magento and your 3rd party service</li>
<li>Verify authentication completes</li>
<li>Check for any logged issues to update code integrations</li>
</ul>
</td>
</tr>
</table>

## Complete load and stress tests
Give info on pingdom, siege, etc - see bryan's notes
Recommend sending in a ticket to advise
Capture your findings and attach them to the ticket
