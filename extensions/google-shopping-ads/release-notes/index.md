---
group: extensions
title: Google Shopping ads Channel Release Notes
---

**Google Shopping ads Channel** is now generally available for versions 2.2.4+ and 2.3.x of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}. Merchants can use this extension to integrate with Google Merchant Center (GMC) and Google Ads accounts to advertize and sell Magento products.

See the following documentation:

- [Google Shopping ads Channel](https://docs.magento.com/m2/ce/user_guide/sales-channels/google-ads/google-ad-channel.html) for merchant information and instructions
- [Install]({{site.baseurl}}/extensions/google-shopping-ads/) Google Shopping ads Channel  for installation, API key, and update information
- [Google Shopping ads Channel Marketplace page](http://marketplace.magento.com/magento-google-shopping-ads.html)

The release notes include:

-   {:.new}New features
-   {:.fix}Fixes and improvements
-   {:.bug}Known issues

### v2.0.0

Google Shopping ads Channel 2.0.0 is generally available for versions 2.2.4+ and 2.3.x of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

- {:.fix} **Resolved Configurable Product Issues**: Configurable product (parent/child) handling has been improved.
    - <!--3372-->Corrected an issue preventing child products from inheriting the parent description and causing Google to disapprove products for missing descriptions
    - <!--3297, 3341, 3410-->Corrected and improved the gtag (pageview) trigger when selecting options for a child product and when viewing a child product in the cart

- {:.fix} **Index Management Improvements**: Indexing processes between Magento and Google have been updated for increased efficiency and performance.
    <!--3004, 3298, 3343, 3480, 3481, 3465, 3472-->
    - Consolidated and rebuilt indexer for communicating with Google
    - Set indexer to run on schedule by default
    - Adjusted indexer logic to only send product data changes, instead of all data for a changed product

- {:.fix} **Security Updates**: <!--3380-->Updated security whitelist and implemented Content Security Policy (CSP) when communicating with Google.

- {:.fix} **Update to Product Linking**: <!--3463-->Updated communication between Google and Magento to ensure use of the same product link to prevent product disapprovals in the Google Merchant Account (GMC).

- {:.fix} **Product Attribute Updates**: <!--3485-->Updated attribute management to allow the deletion of the Google Merchant Center Category attribute, which can be created by the Google application.

- {:.new} **Magento Log Exceptions**: <!--3439-->Implemented **Enable Services Logs** feature to help in troubleshooting. See the [Channels](https://docs.magento.com/m2/ce/user_guide/configuration/services/channels.html) topic in the Configuration Reference.


### v1.1.2

Google Shopping ads Channel 1.1.2 is generally available for versions 2.2.4+ and 2.3.x of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

- {:.fix} **Intermittent Load Error**: Resolved an intermittent error preventing Google Shopping ads Channel from loading after install.

### v1.1.1

Google Shopping ads Channel 1.1.1 is generally available for versions 2.2.4+ and 2.3.x of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

- {:.new} **Simplified Onboarding and Maintenance**: Add GMC accounts with ease through a step-by-step process with detailed instructions available through the Magento Admin.

- {:.new} **All-in-one Advertising Solution**: Integrate and manage both Google Merchant Center (GMC) and Google Ads with your Magento catalog. Through the Magento Admin, complete onboarding to create your GMC account, claim and verify your website, set up shipping and tax rules, and map your Magento catalog to Google's requirements. Create your Google Ads account and start advertising Google Smart Shopping campaigns in one quick step.

- {:.new} **Monitor and Manage GMC Catalogs**: Magento stays in sync with Google so you never have to worry about advertising out-of-stock products or inaccurate product pricing. Review product and account status with clear updates from Google. Every update resends data to Google for additional reviews and approvals.

- {:.new} **Budgeting Ease with Google Ads**: As your advertising needs change, monitor Google advertising costs, Return on Ad Spend (ROAs), and conversions (total and monetary value). Manage your advertising from one dashboard, updating budgets and advertised products.

- {:.new} **Advertise to Multiple Locales**: Add store views and languages to multi-language ads to international customers.
