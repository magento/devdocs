---
group: extensions
title: dotdigital Release Notes
---

[dotdigital](https://dotdigital.com/) is a feature-rich ecommerce integration supporting omnichannel marketing automation. Communicate with your customers and prospects via email, chat, SMS - and add logic with our powerful automation tools.
See our [User Guide]({{ site.user_guide_url }}/marketing/dotdigital/engagement-cloud.html) for information about setup and configuration of dotdigital features in the Admin.

These release notes include:

-  {:.new}New features
-  {:.fix}Fixes and improvements
-  {:.bug}Known issues

## Email module v4.12.0

-  {:.new} Global Account Sharing: Our latest modules support merchants running Magento with **Stores > Configuration > Customers > Customer Configuration > Account Sharing Options > Share Customer Accounts** set to 'Global'.

-  {:.new} Transactional SMS from name: SMS can now be sent with a custom _from_ name.

-  {:.new} PWA Support: Our bundle now ships with new modules that support GraphQL, and brings support for custom storefront URLs to Insight data. (Also check out our [PWA Toolkit](https://github.com/dotmailer/ec-magento-pwa-toolkit)).

-  {:.fix} Product prices in cart, catalog and web Insight data now have separate figures that include tax.

-  {:.fix} _Leave a review_ links in the Reviews EDC can now link to product pages instead of review pages.

-  {:.fix} Updated the handling of coupon codes to improve recurring campaigns.

-  {:.fix} Line items in cart insight data now display prices in the quote currency rather than the website’s base currency.

-  {:.fix} Updated the default list of IP addresses for **Developer > Dynamic Pages IP Restriction**.

## SMS module v1.2.0

-  {:.new} We've added extra form fields to allow merchants to select the sender's from name in SMS messages.

-  {:.fix} In phone number validation, all error codes now resolve to an error message.

-  {:.fix} We've added some extra code to prevent customers from submitting telephone numbers without a country code.
