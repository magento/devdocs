---
group: product-recommendations
title: Handle Cookie Restrictions
ee_only: True
---

When you deploy the `magento/product-recommendations` module to production, the module tracks user events. These events enable behavioral data collection as long as the [cookie restriction mode](https://docs.magento.com/user-guide/stores/compliance-cookie-restriction-mode.html) is disabled. If you have custom code to handle the cookie restriction mode on your site, make sure you update your code to look for and handle the `mg_dnt` cookie.

-  Name of the cookie:

   ```bash
   `const DNT_COOKIE = "mg_dnt";`
   ```

-  To set the cookie to not track user events:

   ```bash
   `$.mage.cookies.set(DNT_COOKIE, true);`
   ```

-  To clear the cookie when the user has accepted cookies:

   ```bash
   `$.mage.cookies.clear(DNT_COOKIE);`
   ```
