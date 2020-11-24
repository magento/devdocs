---
group: product-recommendations
title: Handle Cookie Restrictions
ee_only: True
---

Magento has a native feature that allows the site to ask for cookie consent from its shoppers before storing any data in browser cookies. This feature is called [cookie restriction mode](https://docs.magento.com/user-guide/stores/compliance-cookie-restriction-mode.html).

When you deploy the `magento/product-recommendations` module to production, it starts collecting shopper interaction events on your storefront. Because data for these events can be stored in browser cookies or local storage, the feature supports cookie restriction mode by not collecting events until the shopper has given cookie consent.

This may not work with third-party cookie consent solutions. It is the responsibility of each merchant to ensure that data collection does not occur before cookie consent has been given, as often required by law.  If you have custom code to manage cookie consent on your site, you can use a do-not-track cookie called `mg_dnt` to restrict Magento data collection appropriately.

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
