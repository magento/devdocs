---
group: cloud-guide
subgroup: 090_configure
title: Best practices for store configuration
menu_title: Best practices for store configuration
menu_order:
menu_node:
functional_areas:
  - Cloud
  - Configuration
---

For detailed information for configuring your store, sites, and websites, you may want to review the  [Magento 2.2.x User Guide](http://docs.magento.com/m2/ee/user_guide/getting-started.html). This page provides best practices, helpful information, and guidelines for configuring your stores, sites, and more with additional content to post over time and across versions.

## Understanding marketing campaigns and promotions {#campaigns}

This information is helpful for {{site.data.var.ece}} 2.1.X and 2.2.X.

To create campaigns and promotions, you will create the options and settings in [Content Staging](http://docs.magento.com/m2/ee/user_guide/cms/content-staging.html). This feature allows you to create and preview your campaigns prior to making them public for customer sales. The following information provides helpful information. For exact instructions, see the linked Magento 2 User Guide content.

_Campaigns_ are marketing events for seasonal sales, new product lines, and more. Each campaign can include custom themes, blocks for content, widgets to control and display content, and associated promotions with price rules. Due to the extensive nature of a campaign, you create them with a start and end date through Content Staging.

_Promotions_ provide discounts, one time offers, coupons, first time buyer incentives, and more. You create these promotions as _Price Rules_ that set the terms, discounts, and options to encourage customers to buy. You can create price rules on the [shopping cart](http://docs.magento.com/m2/ee/user_guide/marketing/price-rules-cart.html) or [catalog](http://docs.magento.com/m2/ee/user_guide/marketing/price-rules-catalog.html), with additional options for banners, reward points, and more. We also support scheduling campaigns for your promotions, applying price rules for major events like a new product line or seasonal sales.

The following are tips to help create, update, and manage promotions and campaigns:

*  A promotion can be part of a campaign. A campaign cannot be a part of a promotion. You can have lists of promotions as price rules to use multiples times, with multiple campaigns.
*  When you create a promotion, it will always create an initial campaign that is inactive. It will have a start date but not an end date. You can ignore this initial campaign. You can Schedule a New Update with the correct campaign schedule and make it active.
*  A campaign has a start and end date, not a promotion. The Scheduler that appears when you create a promotion does not configure the start and end dates for the promotion. It allows you so schedule your campaign this promotion is associated with while you are on the promotion’s configuration page.
*  You cannot directly edit in Staged Content. If you need to edit settings and options in the campaign, you will need to edit the original or a replica and push to overwrite in Staged Content. For example, if you do not an end date for a campaign, you must edit the original and push to update.

## Advanced Pricing and Staged Content {#adv-pricing}

This information is helpful for {{site.data.var.ece}} 2.1.X and 2.2.X.

Typically, you can set [Advanced Pricing](http://docs.magento.com/m2/ee/user_guide/catalog/pricing-advanced.html) for products through the **Products** > **Catalogs** area of the Magento Admin. With Staged Content, you need to complete a few extra steps to add the pricing to a promotion and campaign.

To edit Advanced Pricing and update Content Staging:

1. Log into the Magento Admin.
1. Navigate to **Products** > **Catalog** and select a product and edit.
1. In the Pricing tab, select **Advanced Pricing**. Edit the price and Save changes.
1. At the top of the page, click **Schedule New Update**.
1. Create a new promotion for the product.
1. Complete the promotion information. For the Scheduler, enter a begin and end date and time.
1. Save the promotion. An inactive initial campaign is created.
1. You can Preview to review the special price, promotion name, regular price, and the scheduled date range for the campaign.

For additional steps, you can continue with instructions with [Schedule Changes for Catalog Price Rules](http://docs.magento.com/m2/ee/user_guide/marketing/price-rule-catalog-scheduled-changes.html). Click **Next** to walk through the steps.

## Example Price Rules {#price-rules}

Price rules can include logic and conditions as limitless as your marketing imagination. Some popular examples include Buy One Get One Free, Buy One Get One 50% Off, a $25 dollars off on orders over $100 dollars, and so on.

To create a Price Rule, see our [Magento 2 User Guide](https://docs.magento.com/m2/ee/user_guide/search.html?query=price%20rules).

The following provides an example of creating a Price Rule for a First Order Only discount. For this discount, you would want to:

*  Create a price rule with a [customer segment](http://docs.magento.com/m2/ee/user_guide/marketing/customer-segment-price-rule.html) with a condition: Total Number of Orders less than 1
*  Add this customer segment as a condition to the cart rule
*  Optional - Add conditions and rules to apply the discounts to specific SKUs or categories of products for focused purchases

This ensures net-new customers or existing customers who have not made a purchase receive the discount only on their very first order. You could create banners and send email promotions for the first time purchase discount.

## Understanding websites, stores, and store views {#sites}

Magento 2 allows you to run multiple stores, websites, with different views all through a single implementation. How they work together to provide multiples stores, sites, catalogs, and shopping experiences can be confusing. This section explains what these are, how they work. To configure a multi-site {{site.data.var.ece}} implementation, see [Set up multiple websites or stores]({{ site.baseurl }}/cloud/project/project-multi-sites.html).

You can set up and run several shops through a single implementation of Magento. If you want to have shops that do not interact with each other, you create multiple _websites_. Each website has specific articles, customer data, checkouts, and shopping cart not shared with other websites in Magento.

Each website can include one or more _stores_ with different categories and articles, with shared customer data, checkout, and shopping cart. For these stores, a customer can sign up once and shop across different catalogs of products with a single checkout.

You can further create _store views_ for different languages, layouts, and designs. Each view can have its own domain, look and feel, and language while sharing articles, customer data, checkout, and shopping cart.

The following are examples to better explain:

*  Single website with one store and two views for English and Spanish locale. All article data, customers, checkout, and shopping cart are shared.

   ![Store example 1]({{ site.baseurl }}/common/images/cloud/cloud_example-store1.png)

*  Single website with Store A for women's clothing with two views for English and Spanish, and Store B for children's clothing with a single store view in English. All article data, customers, checkout, and shopping cart are shared. The stores may have different domains and themes.

   ![Store example 2]({{ site.baseurl }}/common/images/cloud/cloud_example-store2.png)

*  Two websites one for clothing and another for home decor with different catalogs and separate articles, customer data, and shopping cart. Each website could have multiple stores and views sharing articles, customer data, checkout, and shopping cart only within that website.

   ![Store example 3]({{ site.baseurl }}/common/images/cloud/cloud_example-store3.png)
