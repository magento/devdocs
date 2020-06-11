---
group: web-api
subgroup: 40_Authentication
title: Session-based authentication
menu_title: Session-based authentication
menu_order: 4
functional_areas:
  - Integration
---

As a customer, you log in to the Magento [storefront](https://glossary.magento.com/storefront) with your customer credentials. As an admin, you log in to the [Magento Admin](https://glossary.magento.com/magento-admin) with your [admin](https://glossary.magento.com/admin) credentials.

The Magento web [API](https://glossary.magento.com/api) framework uses your logged-in session information to verify your identity and authorize access to the requested resource.

Customers can access resources that are configured with `anonymous` or `self`  permission in the `webapi.xml` configuration file.

Admins can access resources that are assigned to their Magento Admin profile.

 {:.bs-callout-info}
The Magento [web API](https://glossary.magento.com/web-api) framework enables guest users to access resources that are configured with `anonymous` permission. Any user that the framework cannot authenticate through existing authentication mechanisms is considered a guest user.

For example, if a customer is logged in to the Magento storefront and the [JavaScript](https://glossary.magento.com/javascript) [widget](https://glossary.magento.com/widget) invokes the `self` API, details for the logged-in customer are fetched:

`GET /rest/V1/customers/me`

Similarly, if an admin is logged in to the Magento Admin and the JavaScript widget invokes the `Magento_Customer::group` API, details for the logged-in admin are fetched. The web API framework establishes the identity of the admin user based on logged-in session information and authorizes access to the `Magento_Customer::group` resource.

{:.bs-callout-warning}
Admin session-based authentication is not currently possible for API endpoints.
The session based authentication functionality is restricted to AJAX calls. Direct browser requests cannot be made due to security vulnerabilities. A developer can create a custom storefront widget that can issue requests without additional authentication steps.

## Related topic

[Configure services as web APIs]({{ page.baseurl }}/extension-dev-guide/service-contracts/service-to-web-service.html)
