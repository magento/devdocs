---
group: product-recommendations
title: Handle Cookie Restrictions
ee_only: True
redirect_to: https://experienceleague.adobe.com/docs/commerce-merchant-services/product-recommendations/developer/setting-cookie.html
layout: migrated
---

Both Adobe Commerce and Magento Open Source ask for consent before data is stored in browser cookies. For more information, refer to [Cookie restriction mode]({{ site.user_guide_url }}/stores/compliance-cookie-restriction-mode.html).

When you deploy the `magento/product-recommendations` module to production, it starts collecting shopper interaction events on your storefront. Because data for these events can be stored in browser cookies or local storage, the feature supports cookie restriction mode by not collecting events until the shopper has given cookie consent.

This may not work with third-party cookie consent solutions. It is the responsibility of each merchant to ensure that data collection does not occur before cookie consent has been given, as is often required by law. If you manage cookie consent with custom code, you can use a do-not-track cookie called `mg_dnt` to restrict data collection.

-  Name of the cookie:

   ```text
   `const DNT_COOKIE = "mg_dnt";`
   ```

-  Set the do-not-track cookie to disable data collection:

   ```text
   `$.mage.cookies.set(DNT_COOKIE, true);`
   ```

-  To clear the cookie when the user has accepted cookies:

   ```text
   `$.mage.cookies.clear(DNT_COOKIE);`
   ```
